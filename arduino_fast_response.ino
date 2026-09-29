/*
 * ==============================================================================
 * PlantoPRO / Smart Gardening System Arduino Firmware
 * HC-02 6-Pin Bluetooth (HC-05 / HC-06 Compatible) & USB Dual Controller
 * With Precision Anti-Fake Reading Soil Sensor Filter & Dynamic Calibration
 * ==============================================================================
 * Target Microcontroller: Arduino Uno / Nano / Pro Mini (ATmega328P)
 * Baud Rate: 9600 Baud (8-N-1) on both USB Serial and Bluetooth (SoftwareSerial)
 * 
 * Hardware Wiring & Pin Mapping:
 * ------------------------------------------------------------------------------
 * [1] HC-02 6-Pin Bluetooth Module (Compatible with HC-05 / HC-06):
 *     - STATE  --> Arduino Digital Pin 5 (Input: HIGH=Connected, LOW=Searching)
 *     - RXD    --> Arduino Digital Pin 3 (TX) via 1k/2k Voltage Divider (3.3V logic)
 *                  [Arduino D3] ----[ 1kΩ ]----+----> [HC-02 RXD]
 *                                              |
 *                                           [ 2kΩ ]
 *                                              |
 *                                           [ GND ]
 *     - TXD    --> Arduino Digital Pin 2 (RX) (Direct wire; 3.3V HIGH is safely read)
 *     - GND    --> Arduino GND
 *     - VCC    --> Arduino 5V
 *     - EN/KEY --> Leave UNCONNECTED (Normal transparent data mode)
 * 
 * [2] Environmental & Soil Probes:
 *     - Soil Sensor 1 : Analog Pin A0 (Capacitive v1.2 / v2.0)
 *     - Soil Sensor 2 : Analog Pin A1 (Capacitive v1.2 / v2.0)
 *     - DHT11 Sensor  : Digital Pin 4 (Canopy Temperature °C & Humidity %RH)
 * 
 * [3] 4-Channel 5V Relay Module (Active-LOW Logic):
 *     - Relay IN1 (Pump 1) : Digital Pin 7 (Field 1: Auto when Soil 1 < 40% | Manual: '1')
 *     - Relay IN2 (Pump 2) : Digital Pin 6 (Field 2: Auto when Soil 2 < 40% | Manual: '2')
 *     - Relay IN3          : UNCONNECTED / Spare Channel
 *     - Relay IN4 (Pump 3) : Digital Pin 8 (STRICTLY MANUAL ONLY: Triggered by '3')
 * 
 * Inbound Commands (9600 Baud):
 *   '1'        -> Manually trigger Pump 1 pulse on Relay IN1 (3 seconds)
 *   '2'        -> Manually trigger Pump 2 pulse on Relay IN2 (3 seconds)
 *   '3'        -> Manually trigger Pump 3 pulse on Relay IN4 (3 seconds - Manual Valve)
 *   'A' or 'a' -> Enable Auto Mode for Pumps 1 & 2 (Manual override still works)
 *   'M' or 'm' -> Pause Auto Mode (Pumps 1, 2, 3 become manual-only)
 *   'X' or '0' -> Emergency Stop (Immediately shuts off all pumps)
 *   'S' or '?' -> Immediate Telemetry Query
 *   'C' or 'c' -> Calibration Diagnostics (Prints raw ADC & calibration ranges)
 *   'D' or 'd' -> Auto-Calibrate DRY: Saves current readings as 0% Moisture
 *   'W' or 'w' -> Auto-Calibrate WET: Saves current readings as 100% Moisture
 *   'R' or 'r' -> Reset Calibration to standard factory defaults (800 / 300)
 * ==============================================================================
 */

#include <SoftwareSerial.h>
#include <DHT.h>

// ---------- Pin Definitions ----------
#define BT_STATE_PIN 5      // HC-02 STATE pin (detects active Bluetooth connection)
#define BT_RX_PIN    2      // Arduino RX <- HC-02 TXD
#define BT_TX_PIN    3      // Arduino TX -> HC-02 RXD (via 1k/2k voltage divider)

#define DHT_PIN      4      // DHT11 Ambient Temperature & Humidity Sensor
#define DHTTYPE      DHT11

#define SOIL1_PIN    A0     // Field 1 Soil Moisture Sensor
#define SOIL2_PIN    A1     // Field 2 Soil Moisture Sensor

// ---------- 4-Channel Relay Module Pin Mapping ----------
#define RELAY_IN1_PIN 7     // Pump 1: Connected to Relay Board IN1 (Auto + Manual '1')
#define RELAY_IN2_PIN 6     // Pump 2: Connected to Relay Board IN2 (Auto + Manual '2')
#define RELAY_IN4_PIN 8     // Pump 3: Connected to Relay Board IN4 (Strictly Manual '3')

const uint8_t NUM_PUMPS = 3;
// Index 0 = Pump 1 (IN1 -> D7), Index 1 = Pump 2 (IN2 -> D6), Index 2 = Pump 3 (IN4 -> D8 - Manual Only)
const uint8_t RELAY_PINS[NUM_PUMPS] = {RELAY_IN1_PIN, RELAY_IN2_PIN, RELAY_IN4_PIN};

// ---------- Hardware Instances ----------
SoftwareSerial btSerial(BT_RX_PIN, BT_TX_PIN); // RX, TX
DHT dht(DHT_PIN, DHTTYPE);

// ---------- Soil Sensor Calibration & Anti-Fake Guard ----------
// Standard Capacitive v1.2 Soil Moisture Sensors:
// Air reading (dry) is typically ~700-820 (higher ADC = drier)
// Water reading (wet) is typically ~280-380 (lower ADC = wetter)
int soil1Dry = 800; // Sensor 1 in dry air (0% moisture)
int soil1Wet = 300; // Sensor 1 submerged in water (100% moisture)

int soil2Dry = 800; // Sensor 2 in dry air (0% moisture)
int soil2Wet = 300; // Sensor 2 submerged in water (100% moisture)

const int MOISTURE_THRESHOLD = 40;  // Auto-irrigation threshold percentage (40%)

// Physical limits for disconnected pin / open-circuit / short-circuit detection:
// Raw ADC < 40  -> Shorted to GND or sensor not powered
// Raw ADC > 980 -> Disconnected / open floating pin (pulled high or antenna floating)
const int SENSOR_FAULT_MIN = 40;
const int SENSOR_FAULT_MAX = 980;

// ---------- Mode Control ----------
bool autoModeEnabled = true; // true = Auto (Pumps 1 & 2) + Manual | false = Manual Only

// ---------- Active-LOW Relay Logic ----------
const bool RELAY_ACTIVE_LOW  = true;
const uint8_t RELAY_ON       = RELAY_ACTIVE_LOW ? LOW  : HIGH;
const uint8_t RELAY_OFF      = RELAY_ACTIVE_LOW ? HIGH : LOW;

// ---------- Non-Blocking Timing Rules (ms) ----------
const unsigned long CHECK_INTERVAL = 5000; // 5s telemetry cycle
const unsigned long PUMP_RUN_TIME  = 3000; // 3s active pump pulse
const unsigned long PUMP_COOLDOWN  = 3000; // 3s safety cooldown

// ---------- Pump State Variables ----------
bool          pumpRunning[NUM_PUMPS]   = {false, false, false};
unsigned long pumpStartTime[NUM_PUMPS] = {0, 0, 0};
unsigned long pumpLastEnd[NUM_PUMPS]   = {0, 0, 0};
unsigned long lastCheck = 0;

void dualPrint(const String &str)   { Serial.print(str);   btSerial.print(str);   }
void dualPrintln(const String &str) { Serial.println(str); btSerial.println(str); }
void dualPrintF(const __FlashStringHelper *ifsh)   { Serial.print(ifsh);   btSerial.print(ifsh);   }
void dualPrintlnF(const __FlashStringHelper *ifsh) { Serial.println(ifsh); btSerial.println(ifsh); }

void setup() {
  Serial.begin(9600);
  btSerial.begin(9600);
  pinMode(BT_STATE_PIN, INPUT);

  // Anti-glitch: Set relays HIGH before setting OUTPUT to prevent chatter on boot
  for (uint8_t i = 0; i < NUM_PUMPS; i++) {
    digitalWrite(RELAY_PINS[i], RELAY_OFF);
    pinMode(RELAY_PINS[i], OUTPUT);
  }

  dht.begin();
  dualPrintlnF(F("=================================================="));
  dualPrintlnF(F("PlantoPRO Controller Online - Anti-Fake Precision ADC"));
  dualPrintlnF(F("HC-02 Bluetooth Active on D2(RX)/D3(TX) • 9600 Baud"));
  dualPrintlnF(F("Pumps: IN1->D7 (Auto/Man), IN2->D6 (Auto/Man), IN4->D8 (MANUAL ONLY)"));
  dualPrintlnF(F("Commands: '1'-'3'=Pumps | 'A'=Auto | 'M'=Manual | 'X'=Stop"));
  dualPrintlnF(F("          'C'=Calib Info | 'D'=Set Dry | 'W'=Set Wet | 'R'=Reset"));
  dualPrintlnF(F("=================================================="));
}

// ==============================================================================
// PRECISION ANALOG FILTER (ELIMINATES CROSS-TALK, NOISE SPIKES & RF JITTER)
// ==============================================================================
int readAnalogStable(uint8_t pin) {
  // Step 1: Switch ADC multiplexer to the target channel & discard first read
  analogRead(pin);
  // Settling delay: allows ATmega328P internal sample-and-hold capacitor to charge
  delay(5);

  // Step 2: Multi-sample oversampling (10 readings spaced 2ms apart)
  const uint8_t SAMPLES = 10;
  int rawList[SAMPLES];
  for (uint8_t i = 0; i < SAMPLES; i++) {
    rawList[i] = analogRead(pin);
    delay(2);
  }

  // Step 3: Sort samples (insertion sort) for median & outlier rejection
  for (uint8_t i = 1; i < SAMPLES; i++) {
    int key = rawList[i];
    int j = i - 1;
    while (j >= 0 && rawList[j] > key) {
      rawList[j + 1] = rawList[j];
      j--;
    }
    rawList[j + 1] = key;
  }

  // Step 4: Discard lowest 2 and highest 2 outliers, average middle 6 samples
  long sum = 0;
  for (uint8_t i = 2; i < SAMPLES - 2; i++) {
    sum += rawList[i];
  }
  return (int)(sum / (SAMPLES - 4));
}

// ==============================================================================
// CALIBRATED SOIL MOISTURE CALCULATION WITH DISCONNECT / FAULT PROTECTION
// ==============================================================================
// Returns calibrated percentage (0-100%), or -1 if sensor is disconnected/faulty
int readMoisturePercent(uint8_t pin, int &rawOut) {
  rawOut = readAnalogStable(pin);

  // Open-circuit / disconnected or shorted wire check
  if (rawOut < SENSOR_FAULT_MIN || rawOut > SENSOR_FAULT_MAX) {
    return -1; // Flag as DISCONNECTED / FAULTY
  }

  int dryVal = (pin == SOIL1_PIN) ? soil1Dry : soil2Dry;
  int wetVal = (pin == SOIL1_PIN) ? soil1Wet : soil2Wet;

  if (dryVal == wetVal) return 0;

  // Capacitive sensors: dryVal > wetVal (higher ADC = dry, lower ADC = wet)
  long percent = map(rawOut, dryVal, wetVal, 0, 100);
  return (int)constrain(percent, 0, 100);
}

bool isBluetoothConnected() {
  return digitalRead(BT_STATE_PIN) == HIGH;
}

bool startPump(uint8_t i) {
  if (i >= NUM_PUMPS) return false;
  unsigned long now = millis();
  if (pumpRunning[i]) return false;
  if (pumpLastEnd[i] != 0 && (now - pumpLastEnd[i] < PUMP_COOLDOWN)) return false;

  pumpRunning[i] = true;
  pumpStartTime[i] = now;
  digitalWrite(RELAY_PINS[i], RELAY_ON);

  dualPrintF(F("Pump "));
  dualPrint(String(i == 2 ? 3 : i + 1));
  dualPrintlnF(F(" ON"));
  return true;
}

void updatePump(uint8_t i) {
  if (pumpRunning[i] && (millis() - pumpStartTime[i] >= PUMP_RUN_TIME)) {
    digitalWrite(RELAY_PINS[i], RELAY_OFF);
    pumpRunning[i] = false;
    pumpLastEnd[i] = millis();

    dualPrintF(F("Pump "));
    dualPrint(String(i == 2 ? 3 : i + 1));
    dualPrintlnF(F(" OFF"));
  }
}

void stopAllPumps() {
  unsigned long now = millis();
  for (uint8_t i = 0; i < NUM_PUMPS; i++) {
    digitalWrite(RELAY_PINS[i], RELAY_OFF);
    pumpRunning[i] = false;
    pumpLastEnd[i] = now;
  }
  dualPrintlnF(F("All pumps shut OFF immediately."));
}

void checkSensorsAndAutomate() {
  // Guard 1: Do not read analog sensors while relays are actively switching/pumping
  // to avoid transient power rail sags that cause fake ADC spikes
  for (uint8_t i = 0; i < NUM_PUMPS; i++) {
    if (pumpRunning[i]) return;
  }

  int raw1 = 0, raw2 = 0;
  int soil1 = readMoisturePercent(SOIL1_PIN, raw1);
  int soil2 = readMoisturePercent(SOIL2_PIN, raw2);

  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();
  bool dhtOk = !isnan(temp) && !isnan(hum);
  bool btConnected = isBluetoothConnected();

  // Telemetry string: SOIL1=xx%  SOIL2=xx%  TEMP=xx.xC  HUMIDITY=xx.x%  MODE=AUTO/MANUAL  BT=CONNECTED/STANDBY  RAW1=xxx  RAW2=yyy
  String telemetry = F("SOIL1=");
  if (soil1 >= 0) {
    telemetry += String(soil1);
    telemetry += F("%");
  } else {
    telemetry += F("ERR");
  }

  telemetry += F("  SOIL2=");
  if (soil2 >= 0) {
    telemetry += String(soil2);
    telemetry += F("%");
  } else {
    telemetry += F("ERR");
  }

  telemetry += F("  TEMP=");
  if (dhtOk) telemetry += String(temp, 1); else telemetry += F("ERR");
  telemetry += F("C  HUMIDITY=");
  if (dhtOk) telemetry += String(hum, 1); else telemetry += F("ERR");
  telemetry += F("%  MODE=");
  telemetry += (autoModeEnabled ? F("AUTO") : F("MANUAL"));
  telemetry += F("  BT=");
  telemetry += (btConnected ? F("CONNECTED") : F("STANDBY"));

  telemetry += F("  RAW1=");
  telemetry += String(raw1);
  telemetry += F("  RAW2=");
  telemetry += String(raw2);

  dualPrintln(telemetry);

  // CRITICAL SAFETY AUTOMATION:
  // ONLY trigger pumps if sensor reading is HEALTHY (soil >= 0) and below threshold.
  // Never trigger on disconnected / faulty sensors (soil == -1).
  if (autoModeEnabled) {
    if (soil1 >= 0 && soil1 < MOISTURE_THRESHOLD) startPump(0); // Pump 1 (IN1)
    if (soil2 >= 0 && soil2 < MOISTURE_THRESHOLD) startPump(1); // Pump 2 (IN2)
  }
  // Pump 3 (IN4) is strictly manual only — never triggered automatically
}

void executeCommand(char cmd, const char *source) {
  if (cmd == '\r' || cmd == '\n' || cmd == ' ') return;
  switch (cmd) {
    case '1':
      dualPrintlnF(F("[MANUAL] Triggering Pump 1 (Field 1 / IN1)"));
      startPump(0);
      break;
    case '2':
      dualPrintlnF(F("[MANUAL] Triggering Pump 2 (Field 2 / IN2)"));
      startPump(1);
      break;
    case '3':
      // Pump 3: Strictly manual override valve on Relay IN4
      dualPrintlnF(F("[MANUAL] Triggering Pump 3 (Manual Valve / IN4)"));
      startPump(2);
      break;
    case 'A': case 'a':
      autoModeEnabled = true;
      dualPrintlnF(F("[MODE] Automatic Mode ENABLED (Pumps 1 & 2 auto + manual)"));
      break;
    case 'M': case 'm':
      autoModeEnabled = false;
      dualPrintlnF(F("[MODE] Manual-Only Mode ENABLED (Auto triggers paused)"));
      break;
    case 'X': case 'x': case '0':
      stopAllPumps();
      break;
    case 'S': case 's': case '?':
      checkSensorsAndAutomate();
      break;

    // Calibration helper: Send 'C' to inspect live raw ADC values
    case 'C': case 'c': {
      int r1 = readAnalogStable(SOIL1_PIN);
      int r2 = readAnalogStable(SOIL2_PIN);
      dualPrintlnF(F("---------- SENSOR CALIBRATION DIAGNOSTICS ----------"));
      dualPrintF(F("Sensor 1 (A0) Raw ADC: ")); dualPrint(String(r1));
      dualPrintF(F(" | Calibrated: ")); dualPrint(String(soil1Dry)); dualPrintF(F("(Dry)-")); dualPrintln(String(soil1Wet) + F("(Wet)"));
      dualPrintF(F("Sensor 2 (A1) Raw ADC: ")); dualPrint(String(r2));
      dualPrintF(F(" | Calibrated: ")); dualPrint(String(soil2Dry)); dualPrintF(F("(Dry)-")); dualPrintln(String(soil2Wet) + F("(Wet)"));
      dualPrintlnF(F("Commands: 'D' = Set Dry (0%) | 'W' = Set Wet (100%) | 'R' = Reset Cal"));
      dualPrintlnF(F("----------------------------------------------------"));
      break;
    }

    // Set current readings as DRY AIR (0% moisture)
    case 'D': case 'd': {
      int r1 = readAnalogStable(SOIL1_PIN);
      int r2 = readAnalogStable(SOIL2_PIN);
      if (r1 > SENSOR_FAULT_MIN && r1 < SENSOR_FAULT_MAX) soil1Dry = r1;
      if (r2 > SENSOR_FAULT_MIN && r2 < SENSOR_FAULT_MAX) soil2Dry = r2;
      dualPrintF(F("[CALIBRATION] Saved current as DRY (0%): S1_Dry="));
      dualPrint(String(soil1Dry));
      dualPrintF(F(", S2_Dry="));
      dualPrintln(String(soil2Dry));
      break;
    }

    // Set current readings as WET WATER (100% moisture)
    case 'W': case 'w': {
      int r1 = readAnalogStable(SOIL1_PIN);
      int r2 = readAnalogStable(SOIL2_PIN);
      if (r1 > SENSOR_FAULT_MIN && r1 < SENSOR_FAULT_MAX) soil1Wet = r1;
      if (r2 > SENSOR_FAULT_MIN && r2 < SENSOR_FAULT_MAX) soil2Wet = r2;
      dualPrintF(F("[CALIBRATION] Saved current as WET (100%): S1_Wet="));
      dualPrint(String(soil1Wet));
      dualPrintF(F(", S2_Wet="));
      dualPrintln(String(soil2Wet));
      break;
    }

    // Reset calibration to standard defaults
    case 'R': case 'r': {
      soil1Dry = 800; soil1Wet = 300;
      soil2Dry = 800; soil2Wet = 300;
      dualPrintlnF(F("[CALIBRATION] Calibration reset to standard defaults (Dry=800, Wet=300)"));
      break;
    }
  }
}

void loop() {
  while (Serial.available() > 0)   executeCommand(Serial.read(), "USB");
  while (btSerial.available() > 0) executeCommand(btSerial.read(), "BLUETOOTH");

  for (uint8_t i = 0; i < NUM_PUMPS; i++) updatePump(i);

  if (millis() - lastCheck >= CHECK_INTERVAL) {
    lastCheck = millis();
    checkSensorsAndAutomate();
  }
}
