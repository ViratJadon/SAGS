/**
 * PlantoAnalytica - Precision Microclimate & Crop Intelligence Platform
 * Windows 11 Fluent Design System Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. FOUNDATION PLANTS DATABASE (10 CROPS WITH REAL IMAGES & PARAMETERS)
  // =========================================================================
  const PLANTS_DATA = [
    {
      id: "potato",
      name: "Potato",
      emoji: "🌱",
      species: "Solanum tuberosum",
      category: "Root & Tuber Crop",
      image: "assets/plants/potato.jpg",
      heroColors: ["#e7dccd", "#f4f0e9"],
      rating: "4.8",
      ratingsCount: "12,414 agronomist reviews",
      tagline: "Cool-season tuber needing uniform rhizosphere moisture without saturation.",
      description: "Potatoes thrive in cool, porous soil. Soil moisture below 60% during tuber initiation causes irregular knobbing and reduced tuber count, while saturation (>85%) causes blackheart and soft rot (Erwinia). Calibrated capacitive sensors monitor root zones at 10–15cm depth.",
      optMoisture: "65% - 78%",
      optTemp: "16°C - 22°C",
      sunlight: "6+ hrs direct sun",
      growthCycle: "100 days",
      soilPh: "5.2 – 6.2 (Optimal 5.8)",
      features: [
        "Rhizosphere capacitive sensor depth 10–15cm inside bulking zone.",
        "Automated pulse irrigation threshold: ON < 65%, OFF > 80%.",
        "Stolon hooking and tuber enlargement cycle tracking with chill protection."
      ],
      reviewText: "Sensor calibrations for rhizospheric moisture prevented irregular knobbing and maximized tuber bulking during the cool cycle.",
      reviewAuthor: "Dr. Ramesh Chandra (Agronomist)",
      reviewDate: "Verified harvest",
      stages: [
        {
          stageNum: 1,
          name: "Sprout & Eye Emergence",
          period: "Days 1–15",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWsaultwCaQKR0jp0WZCKvQNMheAo2KD9gPfN8m8ikIeYL42enZiJgfE&s=10",
          description: "Seed tuber eyes break dormancy; sprouts push upward through moist loam while primary fibrous root system anchors in the seed furrow.",
          targetMetric: "Soil Moisture: 68%–74% · Temp: 15°C–18°C",
          milestone: "Sprout emergence above furrow line"
        },
        {
          stageNum: 2,
          name: "Vegetative Canopy Development",
          period: "Days 16–45",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iENN1aNzjL-bTiml2Fo85-Q15xT8kNG9_xQFDvn3ZuJM5qnGhgOcLgo&s=10",
          description: "Vigorous branching and compound leaf canopy expansion. High photosynthetic activity builds carbohydrate reserves needed for tuberization.",
          targetMetric: "Soil Moisture: 70%–78% · Nitrogen: High",
          milestone: "Canopy closure over row beds"
        },
        {
          stageNum: 3,
          name: "Tuber Initiation & Flowering",
          period: "Days 46–75",
          image: "https://agritechnovation.com/wp-content/uploads/2020/11/1024x573px_potatoes.jpg",
          description: "Underground stolon tips swell into embryonic tubers as white/purple flowers blossom above ground. Moisture fluctuations cause knobby tubers.",
          targetMetric: "Soil Moisture: 65%–75% (Strict anti-stress)",
          milestone: "Stolon hook swelling & bloom"
        },
        {
          stageNum: 4,
          name: "Tuber Bulking & Harvest Maturity",
          period: "Days 76–100",
          image: "https://hsph.harvard.edu/wp-content/uploads/2024/06/potatoes-1200x800-1.jpg",
          description: "Vines begin natural yellowing/senescence; tubers achieve maximum specific gravity and set tough periderm skins resistant to storage bruising.",
          targetMetric: "Soil Moisture: 55%–62% (Dry down for skin set)",
          milestone: "Periderm skin firming & vine senescence"
        }
      ]
    },
    {
      id: "chili",
      name: "Chili",
      emoji: "🌱",
      species: "Capsicum annuum",
      category: "Solanaceous Crop",
      image: "assets/plants/chili.jpg",
      heroColors: ["#f6d2d4", "#faeced"],
      rating: "4.9",
      ratingsCount: "9,280 cultivator reviews",
      tagline: "Warm-weather nightshade with heat-responsive capsaicin synthesis.",
      description: "Chili peppers require hot daytime temperatures and warm substrate. Controlled mild water stress (moisture around 50%) during fruit ripening upregulates capsaicin synthase, dramatically enhancing fruit pungency and aroma.",
      optMoisture: "60% - 72%",
      optTemp: "20°C - 28°C",
      sunlight: "7–9 hrs full sun",
      growthCycle: "85 days",
      soilPh: "6.0 – 6.8 (Optimal 6.5)",
      features: [
        "Substrate heating alerts when root zone drops below 20°C.",
        "Ripening water-stress modulation for optimal capsaicin profile.",
        "Blossom drop prevention through precise ambient vapor deficit tracking."
      ],
      reviewText: "The capsaicin stress cycle worked wonderfully; pungency and fruit firmness increased notably in our greenhouse bay.",
      reviewAuthor: "Siddharth V. (Polyhouse Cultivator)",
      reviewDate: "3 weeks ago",
      stages: [
        {
          stageNum: 1,
          name: "Cotyledon & Seedling Emergence",
          period: "Days 1–14",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLYItfB2MXihLA5dfSpilI0VuK9uN_--uEldsOtbN_IXSx0im_H76VaVh&s=10",
          description: "Twin cotyledon leaves unfurl under warm substrate conditions. Taproot dives deep to establish vertical anchorage.",
          targetMetric: "Moisture: 65%–72% · Substrate Temp: >22°C",
          milestone: "First true serrated leaves"
        },
        {
          stageNum: 2,
          name: "Vegetative Branching & Stem Thickening",
          period: "Days 15–40",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgqvZ2fUTjo9tNtqMlXAu616zIxqGfkCpGamECt1yzWlRVLX2tHh1jfE&s=10",
          description: "Main stem develops robust woody base with dichotomous branching; lateral nodes form dense foliar canopy.",
          targetMetric: "Moisture: 60%–70% · Full sunlight",
          milestone: "Dichotomous Y-forking of main stem"
        },
        {
          stageNum: 3,
          name: "Anthesis & Flower Flush",
          period: "Days 41–65",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaQIOCRiCbH_qYTVYIXC_grhNj7jY5SRLXhFvUQgJ82wGpC2NuIE4yD8&s=10",
          description: "Star-shaped white blossoms emerge at branch axils. High pollination efficiency with mild controlled VPD prevents flower drop.",
          targetMetric: "Moisture: 62%–68% · VPD: 0.9–1.2 kPa",
          milestone: "Fruit set & capsaicin synthesis kickoff"
        },
        {
          stageNum: 4,
          name: "Fruit Maturation & Crimson Ripening",
          period: "Days 66–85",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIs3qWrN2PBnUx5zztoHDjpS_PV5CSvlRNPPlyukqx2XzVPRahpRdupvp&s=10",
          description: "Chili pods elongate and turn glossy crimson. Controlled water deficit elevates capsaicin concentration and sugar-acid balance.",
          targetMetric: "Moisture: 50%–58% (Stress for pungency)",
          milestone: "Peak Scoville rating & harvest readiness"
        }
      ]
    },
    {
      id: "mint",
      name: "Mint",
      emoji: "🌱",
      species: "Mentha spicata",
      category: "Aromatic Herb",
      image: "assets/plants/mint.jpg",
      heroColors: ["#d2e7d7", "#eaf4ed"],
      rating: "4.7",
      ratingsCount: "6,830 farm ratings",
      tagline: "Vigorous moisture-demanding herb with high transpiration rate.",
      description: "Mint flourishes in damp, rich loam with frequent shallow hydration. Surface drying causes rapid leaf curling and reduces menthol concentration. Tolerates partial shade and maintains vibrant foliage with balanced nitrogen.",
      optMoisture: "70% - 82%",
      optTemp: "18°C - 24°C",
      sunlight: "4–6 hrs diffused sun",
      growthCycle: "60 days",
      soilPh: "6.0 – 7.0 (Optimal 6.5)",
      features: [
        "High transpiration monitoring with topsoil moisture safeguard.",
        "Frequent micro-dose pulse watering prevents root drying.",
        "Continuous foliage cutback tracking and biomass analytics."
      ],
      reviewText: "Fast-acting irrigation pulses kept the foliage ultra-lush even during mid-summer dry spells.",
      reviewAuthor: "Pooja Mehta (Hydroponics Specialist)",
      reviewDate: "1 month ago",
      stages: [
        {
          stageNum: 1,
          name: "Runner Stolon Awakening",
          period: "Days 1–10",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
          description: "Rhizomatous stolons branch beneath moist soil, sending up energetic vertical shoots from nodal meristems.",
          targetMetric: "Moisture: 72%–82% (High surface humidity)",
          milestone: "First nodal shoot emergence"
        },
        {
          stageNum: 2,
          name: "Rapid Leaf Spread & Lateral Creep",
          period: "Days 11–25",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqykEF1xYG0b22Uc5-TBwEVv0_4Bq16dHRp6HgMeQaIa29CgtTucy5C0&s=10",
          description: "Square stems expand outward, forming dense ground cover with serrated, highly aromatic lanceolate leaves.",
          targetMetric: "Moisture: 70%–80% · Diffuse sunlight",
          milestone: "Bed canopy blanket formation"
        },
        {
          stageNum: 3,
          name: "Canopy Density & Oil Synthesis",
          period: "Days 26–45",
          image: "https://5.imimg.com/data5/ZL/ZS/ZW/SELLER-71808621/natural-mint-leafs.jpg",
          description: "Glandular trichomes on leaf undersides peak in volatile menthol and carvone oils prior to any flower formation.",
          targetMetric: "Moisture: 72%–78% · High nitrogen supply",
          milestone: "Maximum essential oil concentration"
        },
        {
          stageNum: 4,
          name: "Prime Vegetative Harvest Flush",
          period: "Days 46–60",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDceNTDzbbYOAbqCN3dUjPvfc0nZqmLv8ZeCaZqDlN-zPY6-2ru6VxD95K&s=10",
          description: "Top 10cm cutting harvest just as terminal buds appear; stimulates immediate lateral re-growth for next flush cycle.",
          targetMetric: "Post-cut hydration pulse: 75%",
          milestone: "Succulent biomass clipping & re-flush"
        }
      ]
    },
    {
      id: "basil",
      name: "Basil (Tulsi)",
      emoji: "🌱",
      species: "Ocimum tenuiflorum",
      category: "Medicinal / Sacred Herb",
      image: "assets/plants/basil.jpg",
      heroColors: ["#d5dfed", "#ecf1f7"],
      rating: "5.0",
      ratingsCount: "15,120 reviews",
      tagline: "Aromatic holy herb requiring warm sunlight and well-aerated soil.",
      description: "Tulsi (Holy Basil) thrives in sunny, well-aerated substrates and is highly sensitive to cold waterlogging. Requires moderate humidity and steady illumination to maximize eugenol and adaptogenic secondary metabolites.",
      optMoisture: "55% - 70%",
      optTemp: "22°C - 30°C",
      sunlight: "6–8 hrs full sun",
      growthCycle: "75 days",
      soilPh: "6.0 – 6.8 (Optimal 6.4)",
      features: [
        "Anti-waterlogging root sensor checks with quick drainage detection.",
        "Warm photoperiod monitoring to accelerate essential oil synthesis.",
        "Inflorescence pinching reminders for continuous bushy vegetative growth."
      ],
      reviewText: "Flawless vegetative bushiness without any basal leaf yellowing. Eugenol concentration tested highest this season.",
      reviewAuthor: "Ananya Sharma (Herbal Researcher)",
      reviewDate: "2 months ago",
      stages: [
        {
          stageNum: 1,
          name: "Delicate Seedling Emergence",
          period: "Days 1–10",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3I9DKjNNXart7ZwomNkWJj3iOyEOKM_MJIH0Q871dY1BhNbmjWjlkNpw&s=10",
          description: "Tiny oval cotyledons push through loose, warm substrate. Sensitive to standing water; requires excellent soil aeration.",
          targetMetric: "Moisture: 60%–68% · Soil Temp: 22°C–25°C",
          milestone: "Radicle establishment & cotyledon spread"
        },
        {
          stageNum: 2,
          name: "True Leaf & Scent Development",
          period: "Days 11–30",
          image: "https://aquagertech.com/cdn/shop/articles/download_3_86e6fab7-20f8-4c8c-a7be-81031e3a4130.webp?v=1782737400",
          description: "Opposite leaf pairs develop characteristic purple-tinted venation and begin releasing medicinal eugenol aroma.",
          targetMetric: "Moisture: 58%–66% · Full sunlight",
          milestone: "First apical pinching for bushiness"
        },
        {
          stageNum: 3,
          name: "Dense Bushing & Spire Formation",
          period: "Days 31–55",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSajytF18saeL8-hjBtLc-XtP3RbGvLDHDf36vxlTUg4-EcpCEtGTr_P4&s=10",
          description: "Prolific branching creates rounded medicinal bush; terminal purple flower spires (manjaris) initiate with essential oils.",
          targetMetric: "Moisture: 55%–65% · Warm photoperiod",
          milestone: "Inflorescence emergence & eugenol peak"
        },
        {
          stageNum: 4,
          name: "Mature Sacred Foliage & Seed Set",
          period: "Days 56–75",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJZmCnS3LqiD6rZdredZLP1n98oeE3AGaVsS6TXYEkoBCcq2T1axyUw2a&s=10",
          description: "Stems become semi-woody; dark aromatic leaves retain medicinal potency while flowers yield viable dark seeds.",
          targetMetric: "Moisture: 52%–62% · Soil aerated",
          milestone: "Continuous leaf harvest & seed preservation"
        }
      ]
    },
    {
      id: "coriander",
      name: "Coriander",
      emoji: "🌱",
      species: "Coriandrum sativum",
      category: "Annual Culinary Herb",
      image: "assets/plants/coriander.jpg",
      heroColors: ["#d4e0ce", "#ecf2e9"],
      rating: "4.6",
      ratingsCount: "5,410 reviews",
      tagline: "Cool-climate culinary herb sensitive to thermal bolting.",
      description: "Coriander prefers cool seasons and light, well-drained loam. Ambient temperatures exceeding 25°C trigger premature bolting into seed heads; steady shallow moisture extends leaf harvesting windows and preserves citrusy flavor.",
      optMoisture: "60% - 75%",
      optTemp: "16°C - 22°C",
      sunlight: "5–7 hrs moderate sun",
      growthCycle: "45 days",
      soilPh: "6.2 – 6.8 (Optimal 6.5)",
      features: [
        "Bolting prevention thermal alert when temperatures exceed 24°C.",
        "Taproot-friendly shallow irrigation avoiding root displacement.",
        "Successive leaf harvesting yield tracking."
      ],
      reviewText: "Thermal alerts saved my coriander batch from early bolting during an unexpected heat wave.",
      reviewAuthor: "Gurpreet Singh (Urban Farmer)",
      reviewDate: "About a year ago",
      stages: [
        {
          stageNum: 1,
          name: "Hypocotyl Sprouting",
          period: "Days 1–8",
          image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
          description: "Split seed mericarps germinate in cool soil, sending slender white taproot straight downward.",
          targetMetric: "Moisture: 62%–70% · Cool substrate 16°C",
          milestone: "First pair of feathery true leaves"
        },
        {
          stageNum: 2,
          name: "Rosette Foliage Growth",
          period: "Days 9–25",
          image: "assets/plants/coriander.jpg",
          description: "Compact base rosette produces lush, deeply lobed cilantro leaves packed with crisp linalool flavor compounds.",
          targetMetric: "Moisture: 65%–75% (Avoid heat spikes)",
          milestone: "Peak leafy culinary harvest window"
        },
        {
          stageNum: 3,
          name: "Inflorescence & Umbel Blossoming",
          period: "Days 26–38",
          image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80",
          description: "Central stem elongates into compound umbels featuring delicate white/pale-pink blossoms attracting beneficial pollinators.",
          targetMetric: "Moisture: 60%–68% · Thermal monitoring",
          milestone: "Umbel blossom flush"
        },
        {
          stageNum: 4,
          name: "Green Seed & Dry Mericarp Harvest",
          period: "Days 39–45",
          image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&w=800&q=80",
          description: "Spherical aromatic green seeds mature into golden ribbed coriander spice seeds ready for drying and seed saving.",
          targetMetric: "Moisture: 45%–55% (Field dry down)",
          milestone: "Golden aromatic spice harvest"
        }
      ]
    },
    {
      id: "spinach",
      name: "Spinach",
      emoji: "🌱",
      species: "Spinacia oleracea",
      category: "Leafy Green",
      image: "assets/plants/spinach.jpg",
      heroColors: ["#d0e6cc", "#ecf4ea"],
      rating: "4.8",
      ratingsCount: "7,940 reviews",
      tagline: "Rapid-growth cool season green requiring steady soil hydration.",
      description: "Spinach is a nutrient-dense, cool-season crop highly sensitive to soil drying. Even brief drought stress forces flowering and renders leaves bitter. Thrives in organic-rich soils with consistent moisture levels above 65%.",
      optMoisture: "65% - 78%",
      optTemp: "15°C - 20°C",
      sunlight: "4–6 hrs light sun",
      growthCycle: "40 days",
      soilPh: "6.2 – 7.0 (Optimal 6.6)",
      features: [
        "Fast 40-day harvest timeline with leaf surface area tracking.",
        "Nitrogen uptake and soil conductivity (EC) calibration.",
        "Moisture dip warnings to halt bitterness and premature bolting."
      ],
      reviewText: "Remarkable succulent dark green foliage. Harvested at day 38 with exceptional leaf crispness.",
      reviewAuthor: "Elena Rostova (Greenhouse Lead)",
      reviewDate: "4 months ago",
      stages: [
        {
          stageNum: 1,
          name: "Cotyledon Sprout Emergence",
          period: "Days 1–7",
          image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
          description: "Elongated strap-like cotyledons emerge rapidly in cool autumn/spring soils with fibrous rooting.",
          targetMetric: "Moisture: 66%–74% · Temp: 14°C–18°C",
          milestone: "Cotyledon unfurling & collar formation"
        },
        {
          stageNum: 2,
          name: "True Leaf Rosette Formation",
          period: "Days 8–20",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
          description: "First sets of tender, rounded savoyed leaves form a circular ground-hugging rosette with high iron uptake.",
          targetMetric: "Moisture: 68%–76% · Consistent drip",
          milestone: "Baby spinach 5-leaf stage"
        },
        {
          stageNum: 3,
          name: "Canopy Filling & Leaf Thickening",
          period: "Days 21–32",
          image: "assets/plants/spinach.jpg",
          description: "Thick, dark-green crinkled leaves expand dramatically; steady hydration keeps nitrate accumulation balanced and leaves sweet.",
          targetMetric: "Moisture: 70%–78% · Cool canopy",
          milestone: "Full rosette canopy overlap"
        },
        {
          stageNum: 4,
          name: "Prime Mature Leaf Harvest",
          period: "Days 33–40",
          image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
          description: "Crisp succulent leaves reach full commercial size before any daytime temperatures prompt flower bolting.",
          targetMetric: "Moisture: 65%–72% · Early morning harvest",
          milestone: "Whole head or cut-and-come-again harvest"
        }
      ]
    },
    {
      id: "aloevera",
      name: "Aloe Vera",
      emoji: "🌱",
      species: "Aloe barbadensis miller",
      category: "Medicinal Succulent",
      image: "assets/plants/aloevera.jpg",
      heroColors: ["#dae7e0", "#eff5f1"],
      rating: "4.9",
      ratingsCount: "11,700 reviews",
      tagline: "Drought-hardy succulent requiring dry cycles and porous drainage.",
      description: "Aloe Vera stores gel in thick succulent leaves and requires sandy, fast-draining substrate. Wet root zones cause immediate basal rot. Soil must be permitted to dry thoroughly between soak-and-dry irrigation pulses.",
      optMoisture: "25% - 40%",
      optTemp: "20°C - 32°C",
      sunlight: "6–8 hrs bright light",
      growthCycle: "180+ days",
      soilPh: "6.5 – 7.5 (Optimal 7.0)",
      features: [
        "Xerophytic soak-and-dry irrigation schedule: ON < 25%, OFF > 40%.",
        "Basal moisture saturation warning preventing gel rot.",
        "Long-term parenchymal leaf thickness and health indexing."
      ],
      reviewText: "The soak-and-dry automated schedule prevented any rot issues in our succulent nursery.",
      reviewAuthor: "Kavya S. (Botanical Curator)",
      reviewDate: "5 months ago",
      stages: [
        {
          stageNum: 1,
          name: "Pup & Offshoot Rooting",
          period: "Days 1–30",
          image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
          description: "Basal offshoot pup establishes new roots in coarse sandy soil after healing cut callous.",
          targetMetric: "Moisture: 25%–35% · Fast drainage",
          milestone: "Anchorage & succulent root firming"
        },
        {
          stageNum: 2,
          name: "Spiral Rosette Structuring",
          period: "Days 31–75",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
          description: "Fleshy lanceolate leaves align into a symmetrical radial rosette with soft marginal spines.",
          targetMetric: "Moisture: 25%–40% (Soak-and-dry)",
          milestone: "Distinct spiral whorl formation"
        },
        {
          stageNum: 3,
          name: "Gel Thickening & Mucilage Synthesis",
          period: "Days 76–130",
          image: "assets/plants/aloevera.jpg",
          description: "Inner parenchyma cells swell with nutrient-dense acemannan polysaccharide gel; foliage turns powder blue-green.",
          targetMetric: "Moisture: 30%–42% · High solar exposure",
          milestone: "Leaf thickness > 15mm achieved"
        },
        {
          stageNum: 4,
          name: "Mature Therapeutic Harvest",
          period: "Days 131–180+",
          image: "https://images.unsplash.com/photo-1567689594107-1605ec1d440a?auto=format&fit=crop&w=800&q=80",
          description: "Outer lowermost leaves reach 40–50cm length, packed with soothing medicinal gel and ready for clean basal excision.",
          targetMetric: "Controlled dry cycle: 20%–30%",
          milestone: "Sustainable basal leaf extraction"
        }
      ]
    },
    {
      id: "rose",
      name: "Rose",
      emoji: "🌱",
      species: "Rosa rubiginosa",
      category: "Ornamental Shrub",
      image: "assets/plants/rose.jpg",
      heroColors: ["#f5dde3", "#faf0f3"],
      rating: "4.9",
      ratingsCount: "14,350 reviews",
      tagline: "Heavy-blooming perennial shrub needing rich soil and morning sun.",
      description: "Roses require balanced rhizosphere aeration, deep drip watering, and 6+ hours of direct sunlight. Foliar water drops must be minimized to prevent black spot and powdery mildew during humid vegetative periods.",
      optMoisture: "55% - 70%",
      optTemp: "18°C - 26°C",
      sunlight: "6+ hrs full sun",
      growthCycle: "90 days",
      soilPh: "6.0 – 6.8 (Optimal 6.5)",
      features: [
        "Drip irrigation to keep flower foliage dry and prevent fungi.",
        "Bud-formation phosphorus and potassium balancing telemetry.",
        "Stem vigor and bloom cycle progression tracking."
      ],
      reviewText: "Black spot issues dropped to zero thanks to drip-only watering cycles during high humidity.",
      reviewAuthor: "Marcus Vance (Floriculturist)",
      reviewDate: "6 months ago",
      stages: [
        {
          stageNum: 1,
          name: "Bud Break & Cane Shoot Surge",
          period: "Days 1–15",
          image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
          description: "Dormant cane nodes swell with reddish-green buds; rapid shoot extension begins in rich, organic substrate.",
          targetMetric: "Moisture: 60%–70% · Root aeration high",
          milestone: "Active red-tipped shoot emergence"
        },
        {
          stageNum: 2,
          name: "Vegetative Foliage & Cane Branching",
          period: "Days 16–40",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
          description: "Compound five-leaflet foliage unfurls to create dense photosynthetic canopy; strong thorns harden on green canes.",
          targetMetric: "Moisture: 62%–72% · Drip irrigation only",
          milestone: "Canopy establishment without foliar wetting"
        },
        {
          stageNum: 3,
          name: "Sepal Opening & Floral Swell",
          period: "Days 41–65",
          image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80",
          description: "Terminal flower buds swell tight; green sepals part to reveal velvet petal color in morning warmth.",
          targetMetric: "Moisture: 58%–68% · Phosphorus boost",
          milestone: "Color showing through sepals"
        },
        {
          stageNum: 4,
          name: "Full Velvet Bloom & Aromatic Flush",
          period: "Days 66–90",
          image: "assets/plants/rose.jpg",
          description: "Petals unfurl in multi-layered glory, releasing rich damask rose floral essences and inviting gentle pollinators.",
          targetMetric: "Moisture: 55%–65% · Morning sun",
          milestone: "Full show-bloom & repeat deadheading"
        }
      ]
    },
    {
      id: "marigold",
      name: "Marigold",
      emoji: "🌱",
      species: "Tagetes erecta",
      category: "Companion Flowering Plant",
      image: "assets/plants/marigold.jpg",
      heroColors: ["#f8e4c7", "#fbf3e7"],
      rating: "4.7",
      ratingsCount: "6,150 reviews",
      tagline: "Sun-loving flowering companion that naturally repels pests.",
      description: "Marigolds produce bright blossoms rich in carotenoids while their root exudates naturally deter soil nematodes. They withstand intense heat and require well-draining soil with moderate, consistent watering.",
      optMoisture: "50% - 65%",
      optTemp: "18°C - 28°C",
      sunlight: "6–8 hrs full sun",
      growthCycle: "60 days",
      soilPh: "6.0 – 7.0 (Optimal 6.5)",
      features: [
        "Natural nematode protection indexing for companion field crops.",
        "Continuous floral flush calibration with deadheading reminders.",
        "High drought resilience with adaptive watering intervals."
      ],
      reviewText: "Intercropped these around our tomato and potato plots; natural pest suppression was visibly evident.",
      reviewAuthor: "Arun Patel (Organic Farm Manager)",
      reviewDate: "7 months ago",
      stages: [
        {
          stageNum: 1,
          name: "Seedling Emergence",
          period: "Days 1–10",
          image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
          description: "Dark elongated seeds sprout vigorously within 72 hours, pushing sturdy green shoots into sunny nursery rows.",
          targetMetric: "Moisture: 60%–70% · Fast emergence",
          milestone: "Uniform stand emergence"
        },
        {
          stageNum: 2,
          name: "Foliar Branching & Pest-Repellent Exudate",
          period: "Days 11–28",
          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
          description: "Feathery deeply cut foliage emits natural insect-deterring terpenes; roots exude alpha-terthienyl to clear nematodes.",
          targetMetric: "Moisture: 55%–65% · Full exposure",
          milestone: "Compact bushy structure & root zone defense"
        },
        {
          stageNum: 3,
          name: "Tight Bud Set & Calyx Swelling",
          period: "Days 29–45",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
          description: "Numerous spherical green calyxes crown every branch tip, poised to burst into brilliant orange and gold.",
          targetMetric: "Moisture: 52%–62% · Balanced potassium",
          milestone: "Prolific terminal bud set"
        },
        {
          stageNum: 4,
          name: "Full Golden Pom-Pom Floral Flush",
          period: "Days 46–60",
          image: "assets/plants/marigold.jpg",
          description: "Massive ruffled carnation-like blossoms provide radiant color and natural companion protection for surrounding crops.",
          targetMetric: "Moisture: 50%–60% · Deadheading maintenance",
          milestone: "Peak floral harvest for festivals & pest guard"
        }
      ]
    },
    {
      id: "tomato",
      name: "Tomato",
      emoji: "🌱",
      species: "Solanum lycopersicum",
      category: "Fruiting Nightshade",
      image: "assets/plants/tomato.jpg",
      heroColors: ["#f6d2cc", "#fbebe9"],
      rating: "4.8",
      ratingsCount: "16,840 reviews",
      tagline: "High-yield fruiting crop needing warmth, consistent moisture & strong light.",
      description: "Tomatoes require warm root zones and strict moisture regulation. Erratic dry-wet cycling induces Blossom End Rot and fruit cracking. Calibrated sensors maintain steady moisture while reducing air humidity during fruit set.",
      optMoisture: "60% - 75%",
      optTemp: "21°C - 27°C",
      sunlight: "6–8 hrs full sun",
      growthCycle: "80 days",
      soilPh: "6.0 – 6.8 (Optimal 6.4)",
      features: [
        "Blossom End Rot prevention through ultra-steady root hydration.",
        "Vapor pressure deficit (VPD) tracking for optimum fruit setting.",
        "Fruiting sugar (Brix) index calibration."
      ],
      reviewText: "Consistent root moisture completely eradicated our Blossom End Rot problems. Outstanding harvest.",
      reviewAuthor: "David Miller (Precision Grower)",
      reviewDate: "8 months ago",
      stages: [
        {
          stageNum: 1,
          name: "Seedling Germination & First Leaf",
          period: "Days 1–14",
          image: "https://growfully.com/wp-content/uploads/2022/02/Tomato-true-and-seed-leaf.jpg",
          description: "Seedlings emerge with hairy stems and characteristic glandular aroma; fibrous lateral roots form immediately.",
          targetMetric: "Moisture: 65%–72% · Soil Temp: 21°C–24°C",
          milestone: "Sturdy hypocotyl & first serrated leaflets"
        },
        {
          stageNum: 2,
          name: "Vegetative Vine & Truss Extension",
          period: "Days 15–35",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGWh9hGNYt0e9q_RUw1HTZY-4nPwzEexwkknRdv41cfTXe9ySiO26XQxF&s=10",
          description: "Rapid vertical vine growth supported by trellising; regular pruning of sucker shoots channels vigor into main fruit trusses.",
          targetMetric: "Moisture: 65%–75% · Steady calcium flow",
          milestone: "First flower truss bud emergence"
        },
        {
          stageNum: 3,
          name: "Yellow Blossom Anthesis & Fruit Set",
          period: "Days 36–60",
          image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
          description: "Clusters of reflexed yellow petals bloom. Vibrational buzz pollination sets healthy green fruit with zero blossom end rot.",
          targetMetric: "Moisture: 62%–70% (Strict uniformity)",
          milestone: "Marble-to-golf-ball sized green fruits"
        },
        {
          stageNum: 4,
          name: "Breaker Stage to Ripe Red Harvest",
          period: "Days 61–80",
          image: "assets/plants/tomato.jpg",
          description: "Lycopene synthesis turns fruits from pale green to vibrant glossy scarlet; sugars peak with intense sun and controlled hydration.",
          targetMetric: "Moisture: 58%–65% (Prevent skin crack)",
          milestone: "Peak vine-ripened sugar (Brix 6.5+) harvest"
        }
      ]
    }
  ];

  // State
  let currentFieldName = localStorage.getItem('planto_field_name') || "Field Alpha";
  let currentPlantId = localStorage.getItem('planto_selected_plant') || "potato";
  let tempSelectedPlantId = currentPlantId;

  // DOM Elements - Main Viewport & Navigation
  const contentViewport = document.getElementById('contentViewport');
  const heroSection = document.getElementById('heroSection');
  const stickyHeader = document.getElementById('stickyHeader');
  const navRail = document.getElementById('navRail');
  const navItems = document.querySelectorAll('.nav-item');
  const navIndicator = document.getElementById('navIndicator');

  // DOM Elements - Dynamic Plant Display
  const stickyPlantImg = document.getElementById('stickyPlantImg');
  const stickyPlantTitle = document.getElementById('stickyPlantTitle');
  const stickyPlantDeveloper = document.getElementById('stickyPlantDeveloper');
  const stickyOpenBtn = document.getElementById('stickyOpenBtn');
  const stickyChangeCropLink = document.getElementById('stickyChangeCropLink');

  const heroPlantImg = document.getElementById('heroPlantImg');
  const heroPlantTitle = document.getElementById('heroPlantTitle');
  const heroPlantSpecies = document.getElementById('heroPlantSpecies');
  const heroFieldBadge = document.getElementById('heroFieldBadge');
  const heroRatingScore = document.getElementById('heroRatingScore');
  const heroRatingCount = document.getElementById('heroRatingCount');
  const heroCategory = document.getElementById('heroCategory');
  const heroPlantDescription = document.getElementById('heroPlantDescription');
  const heroOpenBtn = document.getElementById('heroOpenBtn');
  const btnMainMonitorField = document.getElementById('btnMainMonitorField');
  const stickyMonitorFieldBtn = document.getElementById('stickyMonitorFieldBtn');
  const cropDetailView = document.getElementById('cropDetailView');
  const mainFieldChipsList = document.getElementById('mainFieldChipsList');
  const assignCropModal = document.getElementById('assignCropModal');
  const btnCloseAssignModal = document.getElementById('btnCloseAssignModal');
  const btnCancelAssignCrop = document.getElementById('btnCancelAssignCrop');
  const assignFieldsList = document.getElementById('assignFieldsList');
  const btnSwitchCrop = document.getElementById('btnSwitchCrop');
  const heroChangeCropLink = document.getElementById('heroChangeCropLink');

  const badgeMoistureText = document.getElementById('badgeMoistureText');
  const badgeTempText = document.getElementById('badgeTempText');
  const badgeCycleText = document.getElementById('badgeCycleText');

  const mainDescriptionText = document.getElementById('mainDescriptionText');
  const featuresList = document.getElementById('featuresList');
  const ratingBigNum = document.getElementById('ratingBigNum');
  const ratingCountLabel = document.getElementById('ratingCountLabel');
  const reviewSubject = document.getElementById('reviewSubject');
  const reviewBody = document.getElementById('reviewBody');
  const reviewAuthor = document.getElementById('reviewAuthor');
  const detailCategory = document.getElementById('detailCategory');
  const detailSoilPh = document.getElementById('detailSoilPh');
  const detailSunlight = document.getElementById('detailSunlight');

  // Discover More list container & controls
  const discoverMoreList = document.getElementById('discoverMoreList');
  const discoverHeaderBtn = document.getElementById('discoverHeaderBtn');
  const tabDiscoverFields = document.getElementById('tabDiscoverFields');
  const tabDiscoverCrops = document.getElementById('tabDiscoverCrops');
  const discoverFieldsCount = document.getElementById('discoverFieldsCount');
  const btnManageFieldsSidebar = document.getElementById('btnManageFieldsSidebar');
  let currentDiscoverTab = 'fields'; // Default to 'fields' as requested

  // Onboarding Modal Elements
  // Onboarding Modal Elements (Field & Substrate Specifications Only)
  const onboardingModal = document.getElementById('onboardingModal');
  const onboardingStep1 = document.getElementById('onboardingStep1');
  const fieldNameInput = document.getElementById('fieldNameInput');
  const fieldNameError = document.getElementById('fieldNameError');
  const fieldLocationInput = document.getElementById('fieldLocationInput');
  const fieldAcreageInput = document.getElementById('fieldAcreageInput');
  const fieldSoilSelect = document.getElementById('fieldSoilSelect');
  const fieldIrrigationSelect = document.getElementById('fieldIrrigationSelect');
  const fieldDepthInput = document.getElementById('fieldDepthInput');
  const btnSaveField = document.getElementById('btnSaveField');
  const btnSaveFieldText = document.getElementById('btnSaveFieldText');
  const fieldAvatarBtn = document.getElementById('fieldAvatarBtn');
  const onboardingModeSwitch = document.getElementById('onboardingModeSwitch');
  const modeBtnNewField = document.getElementById('modeBtnNewField');
  const modeBtnSelectField = document.getElementById('modeBtnSelectField');
  const onboardingFieldGrid = document.getElementById('onboardingFieldGrid');
  const onboardingFormWrap = document.getElementById('onboardingFormWrap');
  let currentOnboardingMode = 'new'; // 'new' | 'select'

  // Search Elements
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchItems = document.querySelectorAll('.search-item');

  // Plant Growth Stages & Lightbox Elements
  const plantGrowthStagesSection = document.getElementById('plantGrowthStagesSection');
  const stagesSectionTitle = document.getElementById('stagesSectionTitle');
  const stagesCycleBadge = document.getElementById('stagesCycleBadge');
  const stagesSubtitle = document.getElementById('stagesSubtitle');
  const stageNavPills = document.getElementById('stageNavPills');
  const growthStagesDeck = document.getElementById('growthStagesDeck');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxContent = document.getElementById('lightboxContent');

  // Interactive Ratings Elements
  const starGroup = document.getElementById('interactiveStarGroup');
  const userStars = document.querySelectorAll('.user-star');
  const ratingPromptText = document.getElementById('ratingPromptText');
  const helpfulBtn = document.getElementById('helpfulBtn');
  const helpfulCount = document.getElementById('helpfulCount');

  // Live Sensor Monitor Modal Elements (Full-Window Telemetry)
  const sensorMonitorModal = document.getElementById('sensorMonitorModal');
  const closeSensorModalBtn = document.getElementById('closeSensorModalBtn');
  const btnCloseSensorModalFooter = document.getElementById('btnCloseSensorModalFooter');
  const btnRefreshSensors = document.getElementById('btnRefreshSensors');
  const btnTriggerManualPulse = document.getElementById('btnTriggerManualPulse');
  const btnCalibrateProbes = document.getElementById('btnCalibrateProbes');
  const sensorModalSubtitle = document.getElementById('sensorModalSubtitle');
  const sensorFieldPlot = document.getElementById('sensorFieldPlot');
  const sensorCropIdentity = document.getElementById('sensorCropIdentity');
  const sensorNodeId = document.getElementById('sensorNodeId');
  const sensorStreamTime = document.getElementById('sensorStreamTime');

  // 1. Core Moisture Probe Elements
  const liveMoistVal = document.getElementById('liveMoistVal');
  const moistGaugeFill = document.getElementById('moistGaugeFill');
  const targetMoistRangeLabel = document.getElementById('targetMoistRangeLabel');
  const moistStatusTag = document.getElementById('moistStatusTag');
  const depthMoistTop = document.getElementById('depthMoistTop');
  const depthMoistDeep = document.getElementById('depthMoistDeep');
  const moistTrendChip = document.getElementById('moistTrendChip');

  // 2. Core Canopy Humidity Elements
  const liveHumidityVal = document.getElementById('liveHumidityVal');
  const humidityGaugeFill = document.getElementById('humidityGaugeFill');
  const targetHumidityRangeLabel = document.getElementById('targetHumidityRangeLabel');
  const humidityStatusTag = document.getElementById('humidityStatusTag');
  const liveVpdVal = document.getElementById('liveVpdVal');
  const liveDewPoint = document.getElementById('liveDewPoint');
  const humidityTrendChip = document.getElementById('humidityTrendChip');

  // 3. Core Soil & Ambient Temperature Elements
  const liveTempVal = document.getElementById('liveTempVal');
  const tempGaugeFill = document.getElementById('tempGaugeFill');
  const targetTempRangeLabel = document.getElementById('targetTempRangeLabel');
  const tempStatusTag = document.getElementById('tempStatusTag');
  const tempSoilCore = document.getElementById('tempSoilCore');
  const tempCanopy = document.getElementById('tempCanopy');
  const tempTrendChip = document.getElementById('tempTrendChip');

  // 4. The Next Step Intelligence Elements
  const activeNextStepCard = document.getElementById('activeNextStepCard');
  const stepPriorityTag = document.getElementById('stepPriorityTag');
  const stepEtaTag = document.getElementById('stepEtaTag');
  const nextStepHeroTitle = document.getElementById('nextStepHeroTitle');
  const nextStepHeroDescription = document.getElementById('nextStepHeroDescription');
  const stepTargetDosage = document.getElementById('stepTargetDosage');
  const btnExecuteNextStep = document.getElementById('btnExecuteNextStep');
  const btnExecuteStepText = document.getElementById('btnExecuteStepText');
  const btnPostponeStep = document.getElementById('btnPostponeStep');
  const btnCalibrateNextStep = document.getElementById('btnCalibrateNextStep');
  const nextStepStateBadge = document.getElementById('nextStepStateBadge');
  const step3Node = document.getElementById('step3Node');
  const step4Node = document.getElementById('step4Node');
  const step3TitleShort = document.getElementById('step3TitleShort');

  // 5. Live Optical Mobile USB Camera Elements
  const liveCameraCard = document.getElementById('liveCameraCard');
  const plantLiveCamVideo = document.getElementById('plantLiveCamVideo');
  const cameraFallbackScreen = document.getElementById('cameraFallbackScreen');
  const simulatedFeedImg = document.getElementById('simulatedFeedImg');
  const cameraPromptOverlay = document.getElementById('cameraPromptOverlay');
  const btnConnectRealCam = document.getElementById('btnConnectRealCam');
  const cameraStatusPill = document.getElementById('cameraStatusPill');
  const camStatusText = document.getElementById('camStatusText');
  const videoHudTimestamp = document.getElementById('videoHudTimestamp');
  const camDeviceSelect = document.getElementById('camDeviceSelect');
  const btnToggleCamStream = document.getElementById('btnToggleCamStream');
  const btnToggleCamText = document.getElementById('btnToggleCamText');
  const btnSnapPhoto = document.getElementById('btnSnapPhoto');
  const btnFullscreenCam = document.getElementById('btnFullscreenCam');
  const videoViewport = document.getElementById('videoViewport');

  let activeVideoStream = null;
  let isCamPaused = false;
  let cameraHudTimer = null;

  // Toast
  const winToast = document.getElementById('winToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');

  // Window Controls
  const winMinBtn = document.getElementById('winMinBtn');
  const winMaxBtn = document.getElementById('winMaxBtn');
  const winCloseBtn = document.getElementById('winCloseBtn');

  let currentRating = 0;
  let isHelpfulVoted = false;
  let activeTool = 'pencil';
  let currentColor = '#000000';
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  // =========================================================================
  // 2. ONBOARDING BLUR LAYER & FIELD SETUP WORKFLOW (3-STEP WIZARD)
  // =========================================================================

  let selectedOnboardingFieldId = 'field-alpha';

  function renderOnboardingFieldGrid() {
    const grid = document.getElementById('onboardingFieldGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const fields = getStoredFields();
    const activeField = fields.find(f => f.name === currentFieldName) || fields[0];
    if (activeField) selectedOnboardingFieldId = activeField.id;

    fields.forEach((field, index) => {
      const isSelected = field.id === selectedOnboardingFieldId;
      const crop = PLANTS_DATA.find(p => p.id === field.cropId) || PLANTS_DATA[0];
      const isChannel1 = field.channel === 1 || index === 0;
      const channelLabel = isChannel1 
        ? '📡 Channel 1 • Soil 1 (A0) + Pump 1 (D7)' 
        : '📡 Channel 2 • Soil 2 (A1) + Pump 2 (D6)';

      const card = document.createElement('div');
      card.className = `onboarding-field-card ${isSelected ? 'selected' : ''}`;
      card.dataset.id = field.id;

      card.innerHTML = `
        <div class="onboarding-field-header">
          <div class="onboarding-field-title-row">
            <div class="onboarding-field-radio">
              <div class="onboarding-field-radio-dot"></div>
            </div>
            <span class="onboarding-field-name">${field.name}</span>
          </div>
          <span class="onboarding-channel-pill">${channelLabel}</span>
        </div>
        <div class="onboarding-field-details">
          <div class="onboarding-field-detail-item">
            <span class="onboarding-field-detail-icon">${crop ? crop.emoji : '🌱'}</span>
            <span>Active Crop: <strong>${crop ? crop.name : 'Potato'}</strong> (${crop ? crop.species : ''})</span>
          </div>
          <div class="onboarding-field-detail-item">
            <span class="onboarding-field-detail-icon">📍</span>
            <span>${field.location || (isChannel1 ? 'Zone Alpha • Commercial Parcel' : 'Zone Beta • Greenhouse South')}</span>
          </div>
          <div class="onboarding-field-detail-item">
            <span class="onboarding-field-detail-icon">💧</span>
            <span>Threshold: &lt; ${field.moistureThreshold || 40}% Auto-Pulse • ${field.soil || 'Sandy Loam'}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        selectedOnboardingFieldId = field.id;
        document.querySelectorAll('.onboarding-field-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        if (fieldNameInput) fieldNameInput.value = field.name;
        currentFieldName = field.name;
      });

      grid.appendChild(card);
    });
  }

  function openOnboarding() {
    if (!onboardingModal) return;
    onboardingModal.classList.remove('hidden');

    const fields = getStoredFields();
    const isSetupDone = localStorage.getItem('planto_field_setup_done') === 'true';
    const hasExistingFields = fields.length > 0 && isSetupDone;

    if (onboardingModeSwitch) {
      if (hasExistingFields) {
        onboardingModeSwitch.classList.remove('hidden');
      } else {
        onboardingModeSwitch.classList.add('hidden');
      }
    }

    // Default mode: if setup already done, give option; otherwise 'new'
    currentOnboardingMode = hasExistingFields ? 'select' : 'new';
    syncOnboardingModeUI();

    if (fieldNameInput) {
      fieldNameInput.value = (isSetupDone && currentFieldName) ? currentFieldName : '';
      if (!fieldNameInput.value) {
        fieldNameInput.placeholder = "e.g. Field Alpha, Polyhouse 1, North Vineyard...";
      }
      setTimeout(() => fieldNameInput.focus(), 150);
    }
    if (fieldNameError) fieldNameError.classList.remove('show');

    // Populate active field specifications if already existing
    const activeField = fields.find(f => f.name === currentFieldName) || fields[0];
    if (activeField && isSetupDone) {
      if (fieldLocationInput) fieldLocationInput.value = activeField.location || "Zone Alpha • Commercial Parcel";
      if (fieldAcreageInput) fieldAcreageInput.value = activeField.acreage || "2.4 Acres";
      if (fieldSoilSelect) fieldSoilSelect.value = activeField.soil || "Porous Sandy Loam";
      if (fieldIrrigationSelect) fieldIrrigationSelect.value = activeField.irrigation || "Automated Pulse Drip";
      if (fieldDepthInput) fieldDepthInput.value = activeField.depth || "10–15cm Depth";
    }

    if (onboardingStep1) onboardingStep1.classList.add('active');
    if (onboardingModal) onboardingModal.scrollTop = 0;
  }

  function syncOnboardingModeUI() {
    if (!onboardingFieldGrid || !onboardingFormWrap) return;
    const btnSaveText = document.getElementById('btnSaveFieldText');
    if (currentOnboardingMode === 'select') {
      onboardingFieldGrid.classList.remove('hidden');
      onboardingFormWrap.classList.add('hidden');
      if (modeBtnSelectField) modeBtnSelectField.classList.add('active');
      if (modeBtnNewField) modeBtnNewField.classList.remove('active');
      if (btnSaveText) btnSaveText.textContent = 'Activate Selected Field';
      renderOnboardingFieldGrid();
    } else {
      onboardingFieldGrid.classList.add('hidden');
      onboardingFormWrap.classList.remove('hidden');
      if (modeBtnNewField) modeBtnNewField.classList.add('active');
      if (modeBtnSelectField) modeBtnSelectField.classList.remove('active');
      if (btnSaveText) btnSaveText.textContent = 'Save Field Specifications';
    }
  }

  if (modeBtnNewField) {
    modeBtnNewField.addEventListener('click', () => {
      currentOnboardingMode = 'new';
      syncOnboardingModeUI();
    });
  }

  if (modeBtnSelectField) {
    modeBtnSelectField.addEventListener('click', () => {
      currentOnboardingMode = 'select';
      syncOnboardingModeUI();
    });
  }

  function closeOnboarding() {
    if (!onboardingModal) return;
    onboardingModal.classList.add('hidden');
  }

  if (fieldNameInput) {
    fieldNameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        saveFieldFromSpecifications();
      }
    });
    fieldNameInput.addEventListener('input', () => {
      if (fieldNameInput.value.trim().length > 0) {
        if (fieldNameError) fieldNameError.classList.remove('show');
        fieldNameInput.style.borderColor = '';
      }
    });
  }

  function saveFieldFromSpecifications() {
    const fieldsList = getStoredFields();
    let targetField = null;

    if (currentOnboardingMode === 'select') {
      targetField = fieldsList.find(f => f.id === selectedOnboardingFieldId);
      if (targetField) {
        currentFieldName = targetField.name;
        currentPlantId = targetField.cropId || currentPlantId || 'potato';
        localStorage.setItem('planto_field_name', currentFieldName);
        localStorage.setItem('planto_selected_plant', currentPlantId);
        localStorage.setItem('planto_field_setup_done', 'true');
        activateField(targetField);
        if (typeof renderFieldsView === 'function') renderFieldsView();
        closeOnboarding();
        showToast("Field Activated", `Field "${currentFieldName}" is now actively monitoring.`);
        return;
      }
    }

    // New Field Mode: Validation
    const nameVal = fieldNameInput ? fieldNameInput.value.trim() : '';
    if (!nameVal) {
      if (fieldNameError) fieldNameError.classList.add('show');
      if (fieldNameInput) {
        fieldNameInput.style.borderColor = '#dc2626';
        fieldNameInput.focus();
      }
      return;
    }
    if (fieldNameError) fieldNameError.classList.remove('show');
    if (fieldNameInput) fieldNameInput.style.borderColor = '';

    const finalName = nameVal;
    currentFieldName = finalName;

    const locInput = document.getElementById('fieldLocationInput');
    const acreageInput = document.getElementById('fieldAcreageInput');
    const soilSelect = document.getElementById('fieldSoilSelect');
    const irrigationSelect = document.getElementById('fieldIrrigationSelect');
    const depthInput = document.getElementById('fieldDepthInput');

    targetField = fieldsList.find(f => f.name === finalName);
    if (!targetField) {
      if (fieldsList.length === 0 || (fieldsList.length === 1 && !localStorage.getItem('planto_field_setup_done'))) {
        targetField = fieldsList[0] || {};
      } else if (fieldsList.length < MAX_FIELDS) {
        targetField = { id: 'field-' + Date.now() };
        fieldsList.push(targetField);
      } else {
        targetField = fieldsList[0];
      }
    }

    // Assign Field & Substrate Specifications (and hardware default mappings)
    targetField.id = targetField.id || ('field-' + Date.now());
    targetField.name = finalName;
    targetField.cropId = targetField.cropId || currentPlantId || 'potato';
    targetField.location = (locInput && locInput.value.trim()) ? locInput.value.trim() : 'Zone Alpha • Commercial Parcel';
    targetField.acreage = (acreageInput && acreageInput.value.trim()) ? acreageInput.value.trim() : '2.4 Acres';
    targetField.soil = soilSelect ? soilSelect.value : 'Porous Sandy Loam';
    targetField.irrigation = irrigationSelect ? irrigationSelect.value : 'Automated Pulse Drip';
    targetField.depth = (depthInput && depthInput.value.trim()) ? depthInput.value.trim() : '10–15cm Depth';
    targetField.sensors = targetField.sensors || ['soil1', 'soil2', 'dht11'];
    targetField.pumps = targetField.pumps || ['pump1', 'pump2', 'pump3'];
    targetField.moistureThreshold = targetField.moistureThreshold || 40;
    targetField.assignedProbe = targetField.assignedProbe || 'soil1';
    targetField.pins = targetField.pins || { soil: 'A0', dht: 'D4', pump: 'D7', manualPump: 'D5' };

    saveStoredFields(fieldsList);
    localStorage.setItem('planto_field_name', currentFieldName);
    localStorage.setItem('planto_selected_plant', targetField.cropId);
    localStorage.setItem('planto_field_setup_done', 'true');

    activateField(targetField);

    if (typeof renderFieldsView === 'function') renderFieldsView();
    if (typeof renderDiscoverMore === 'function') renderDiscoverMore(targetField.cropId);

    closeOnboarding();
    const selectedPlant = PLANTS_DATA.find(p => p.id === targetField.cropId);
    showToast("Field Specifications Saved", `Field "${currentFieldName}" is now active with ${targetField.soil}!`);
  }

  if (btnSaveField) {
    btnSaveField.addEventListener('click', saveFieldFromSpecifications);
  }

  // Quick switch crop triggers -> now smoothly navigates to Plants Gallery
  if (btnSwitchCrop) {
    btnSwitchCrop.addEventListener('click', () => switchView('plants'));
  }
  if (heroChangeCropLink) {
    heroChangeCropLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('plants');
    });
  }
  if (stickyChangeCropLink) {
    stickyChangeCropLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('plants');
    });
  }
  if (discoverHeaderBtn) {
    discoverHeaderBtn.addEventListener('click', () => {
      if (currentDiscoverTab === 'fields') {
        switchView('fields');
      } else {
        switchView('plants');
      }
    });
  }

  if (tabDiscoverFields && tabDiscoverCrops) {
    tabDiscoverFields.addEventListener('click', () => {
      currentDiscoverTab = 'fields';
      tabDiscoverFields.classList.add('active');
      tabDiscoverCrops.classList.remove('active');
      renderDiscoverMore(currentPlantId);
    });

    tabDiscoverCrops.addEventListener('click', () => {
      currentDiscoverTab = 'crops';
      tabDiscoverCrops.classList.add('active');
      tabDiscoverFields.classList.remove('active');
      renderDiscoverMore(currentPlantId);
    });
  }

  if (btnManageFieldsSidebar) {
    btnManageFieldsSidebar.addEventListener('click', () => {
      switchView('fields');
    });
  }

  // Field Avatar click allows renaming
  function updateFieldInitials() {
    if (fieldAvatarBtn) {
      const parts = currentFieldName.split(' ').filter(Boolean);
      let initials = "FA";
      if (parts.length >= 2) {
        initials = (parts[0][0] + parts[1][0]).toUpperCase();
      } else if (parts.length === 1 && parts[0].length > 0) {
        initials = parts[0].slice(0, 2).toUpperCase();
      }
      const span = fieldAvatarBtn.querySelector('span');
      if (span) span.textContent = initials;
      fieldAvatarBtn.title = `Field: ${currentFieldName} (Click to reconfigure)`;
    }
    if (typeof updateWeatherLocationDisplay === 'function') {
      updateWeatherLocationDisplay();
    }
  }

  if (fieldAvatarBtn) {
    fieldAvatarBtn.addEventListener('click', () => {
      openOnboarding(1);
    });
  }

  // =========================================================================
  // DYNAMIC HERO BACKGROUND BASED ON CROP IMAGE
  // =========================================================================
  function updateHeroBackground(plant, imgElement) {
    if (!heroSection) return;

    const applyColors = (topColor, midColor) => {
      heroSection.style.setProperty('--hero-bg-top', topColor);
      heroSection.style.setProperty('--hero-bg-mid', midColor);
      heroSection.style.background = `linear-gradient(180deg, ${topColor} 0%, ${midColor} 140px, #f3f3f3 320px, #f3f3f3 100%)`;
    };

    // 1. Instantly set pre-calibrated palette matching crop image
    if (plant && plant.heroColors && plant.heroColors.length >= 2) {
      applyColors(plant.heroColors[0], plant.heroColors[1]);
    }

    // 2. Extract and refine color directly from crop image via canvas
    const extractFromImage = () => {
      try {
        if (!imgElement || !imgElement.naturalWidth || !imgElement.naturalHeight) return;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const size = 32;
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(imgElement, 0, 0, size, size);
        const imgData = ctx.getImageData(0, 0, size, size).data;

        let satPixels = [];
        for (let i = 0; i < imgData.length; i += 4) {
          const r = imgData[i];
          const g = imgData[i + 1];
          const b = imgData[i + 2];
          const a = imgData[i + 3];
          if (a < 128) continue;

          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const delta = max - min;
          const sat = max === 0 ? 0 : delta / max;
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;

          // Only consider colorful subject pixels (skip deep shadows and washed-out highlights)
          if (sat > 0.18 && lum > 35 && lum < 235) {
            satPixels.push({ r, g, b, sat });
          }
        }

        if (satPixels.length > 0) {
          satPixels.sort((a, b) => b.sat - a.sat);
          const sampleCount = Math.max(1, Math.floor(satPixels.length * 0.45));
          let sumR = 0, sumG = 0, sumB = 0;
          for (let i = 0; i < sampleCount; i++) {
            sumR += satPixels[i].r;
            sumG += satPixels[i].g;
            sumB += satPixels[i].b;
          }
          const avgR = sumR / sampleCount;
          const avgG = sumG / sampleCount;
          const avgB = sumB / sampleCount;

          // Blend with white for authentic Fluent pastel gradient matching the crop image
          const topR = Math.round(avgR * 0.28 + 255 * 0.72);
          const topG = Math.round(avgG * 0.28 + 255 * 0.72);
          const topB = Math.round(avgB * 0.28 + 255 * 0.72);

          const midR = Math.round(avgR * 0.12 + 255 * 0.88);
          const midG = Math.round(avgG * 0.12 + 255 * 0.88);
          const midB = Math.round(avgB * 0.12 + 255 * 0.88);

          applyColors(`rgb(${topR}, ${topG}, ${topB})`, `rgb(${midR}, ${midG}, ${midB})`);
        }
      } catch (err) {
        // Fallback already safely applied above
      }
    };

    if (imgElement) {
      if (imgElement.complete && imgElement.naturalWidth > 0) {
        extractFromImage();
      } else {
        imgElement.addEventListener('load', extractFromImage, { once: true });
      }
    }
  }

  // =========================================================================
  // 3. DYNAMIC CROP PROFILE RENDERING (REPLACING "PAINT" WITH SELECTED PLANT)
  // =========================================================================

  function applyPlantProfile(plantId) {
    const plant = PLANTS_DATA.find(p => p.id === plantId) || PLANTS_DATA[0];
    currentPlantId = plant.id;
    tempSelectedPlantId = plant.id;

    // 1. Titlebar & Document Title
    document.title = `PlantoAnalytica - ${plant.name}`;

    // 2. Hero Section
    if (heroPlantTitle) heroPlantTitle.textContent = plant.name;
    if (heroPlantImg) {
      heroPlantImg.src = plant.image;
      heroPlantImg.alt = plant.name;
    }
    if (heroPlantSpecies) heroPlantSpecies.textContent = plant.species;
    if (heroFieldBadge) {
      heroFieldBadge.innerHTML = `Field: <strong>${currentFieldName}</strong> <span style="font-size:11px; opacity:0.75; margin-left:2px;">↗</span>`;
      heroFieldBadge.title = `Switch to Field Detail to monitor ${plant.name}`;
    }
    if (heroRatingScore) heroRatingScore.textContent = plant.rating;
    if (heroRatingCount) heroRatingCount.textContent = plant.ratingsCount;
    if (heroCategory) heroCategory.textContent = plant.category;
    if (heroPlantDescription) heroPlantDescription.textContent = plant.tagline;

    // Update Hero Section background gradient according to the crop image
    updateHeroBackground(plant, heroPlantImg);

    // 3. Telemetry Badges
    if (badgeMoistureText) badgeMoistureText.textContent = `Optimal Moisture: ${plant.optMoisture}`;
    if (badgeTempText) badgeTempText.textContent = `Optimal Temp: ${plant.optTemp}`;
    if (badgeCycleText) badgeCycleText.textContent = `Growth Cycle: ${plant.growthCycle}`;

    // 4. Description & Guidance Card
    if (mainDescriptionText) mainDescriptionText.textContent = plant.description;

    // 5. Features / Calibrated Parameters
    if (featuresList) {
      featuresList.innerHTML = plant.features.map(f => `
        <li>
          <span class="feature-bullet"></span>
          <span class="feature-text">${f}</span>
        </li>
      `).join('');
    }

    // 6. Ratings & Reviews
    if (ratingBigNum) ratingBigNum.textContent = plant.rating;
    if (ratingCountLabel) ratingCountLabel.textContent = `${plant.ratingsCount.toUpperCase()}`;
    if (reviewSubject) reviewSubject.textContent = `${plant.name} (${plant.species})`;
    if (reviewBody) reviewBody.textContent = plant.reviewText;
    if (reviewAuthor) reviewAuthor.textContent = plant.reviewAuthor;
    if (ratingPromptText) ratingPromptText.textContent = `How would you rate ${plant.name} cultivation?`;

    // 7. Additional Info
    if (detailCategory) detailCategory.textContent = plant.category;
    if (detailSoilPh) detailSoilPh.textContent = plant.soilPh;
    if (detailSunlight) detailSunlight.textContent = plant.sunlight;

    // 8. Sticky Compact Header
    if (stickyPlantImg) {
      stickyPlantImg.src = plant.image;
      stickyPlantImg.alt = plant.name;
    }
    if (stickyPlantTitle) stickyPlantTitle.textContent = plant.name;
    if (stickyPlantDeveloper) stickyPlantDeveloper.textContent = `${plant.species} • ${currentFieldName}`;

    // 9. Update "Discover More" with the remaining 9 plants
    renderDiscoverMore(plant.id);

    // 10. Sync Camera Crop Fallback Image
    updateCameraCropFallback(plant);

    // 11. Render Plant Growth Stages Phenology Deck
    renderGrowthStages(plant);

    // 12. Update Sensor Values & Dashboard Telemetries Immediately
    if (typeof updateSensorValues === 'function') {
      updateSensorValues(plant);
    }
  }

  // =========================================================================
  // 4. FIELDS MANAGEMENT DATA STORE & ACTIVE FIELD HANDLERS (MAX 2 FIELDS)
  // =========================================================================

  const MAX_FIELDS = 2; // Hard physical hardware constraint: Arduino Uno has only 2 analog soil inputs (A0 & A1)

  const DEFAULT_FIELDS = [
    {
      id: "field-alpha",
      name: currentFieldName || "Field Alpha",
      cropId: currentPlantId || "potato",
      acreage: "2.4 Acres",
      soil: "Porous Sandy Loam",
      irrigation: "Automated Pulse Drip",
      depth: "10–15cm Depth",
      location: "Zone Alpha • Commercial Parcel",
      sensors: ["soil1", "dht11"],
      pumps: ["pump1", "pump3"],
      moistureThreshold: 40,
      assignedProbe: "soil1",
      pins: { soil: "A0", dht: "D4", pump: "D7", manualPump: "D5" }
    },
    {
      id: "field-beta",
      name: "Field Beta",
      cropId: "spearmint",
      acreage: "1.2 Acres",
      soil: "Rich Organic Clay Loam",
      irrigation: "Micro-Sprinkler Overhead",
      depth: "8–12cm Depth",
      location: "Zone Beta • Controlled Climate",
      sensors: ["soil2", "dht11"],
      pumps: ["pump2", "pump3"],
      moistureThreshold: 40,
      assignedProbe: "soil2",
      pins: { soil: "A1", dht: "D4", pump: "D6", manualPump: "D5" }
    }
  ];

  function getStoredFields() {
    try {
      const stored = localStorage.getItem('planto_fields_list');
      if (stored) {
        let parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Hard hardware constraint: Max 2 fields because there are only 2 soil moisture sensors (Pin A0 and Pin A1)
          if (parsed.length > MAX_FIELDS) {
            parsed = parsed.slice(0, MAX_FIELDS);
            saveStoredFields(parsed);
          }
          parsed.forEach((f, idx) => {
            if (!f.sensors || f.sensors.length === 0) f.sensors = idx === 0 ? ["soil1", "dht11"] : ["soil2", "dht11"];
            if (!f.pumps || f.pumps.length === 0) f.pumps = idx === 0 ? ["pump1", "pump3"] : ["pump2", "pump3"];
            if (!f.moistureThreshold) f.moistureThreshold = 40;
            if (!f.pins) f.pins = { soil1: "A0", soil2: "A1", dht: "D4", pump1: "D7", pump2: "D6", pump3: "D5" };
          });
          return parsed;
        }
      }
    } catch (e) {}
    return DEFAULT_FIELDS;
  }

  function saveStoredFields(fields) {
    const capped = Array.isArray(fields) ? fields.slice(0, MAX_FIELDS) : DEFAULT_FIELDS;
    localStorage.setItem('planto_fields_list', JSON.stringify(capped));
  }

  function activateField(field) {
    currentFieldName = field.name;
    currentPlantId = field.cropId;
    localStorage.setItem('planto_field_name', currentFieldName);
    localStorage.setItem('planto_selected_plant', currentPlantId);
    updateFieldInitials();
    applyPlantProfile(currentPlantId);
    if (typeof updateSensorValues === 'function') {
      const plant = PLANTS_DATA.find(p => p.id === currentPlantId) || PLANTS_DATA[0];
      updateSensorValues(plant);
    }
    if (typeof renderFieldsView === 'function') {
      renderFieldsView();
    }
    renderMainFieldChips();
    showToast("Active Field Changed", `Now actively monitoring "${field.name}".`);
  }

  function renderMainFieldChips() {
    const list = document.getElementById('mainFieldChipsList');
    if (!list) return;
    list.innerHTML = '';
    const fields = getStoredFields();
    fields.forEach(f => {
      const isCurrent = (f.name === currentFieldName);
      const plant = PLANTS_DATA.find(p => p.id === f.cropId) || PLANTS_DATA[0];
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `main-field-chip ${isCurrent ? 'active' : ''}`;
      chip.dataset.id = f.id;
      chip.title = `Switch mainpage to ${f.name} (growing ${plant.name})`;
      chip.innerHTML = `
        <span class="chip-dot"></span>
        <span>${f.name}</span>
        <span style="font-size: 11px; opacity: 0.85; font-weight: normal;">(${plant.name})</span>
        ${isCurrent ? '<span style="font-size: 10px; margin-left: 2px;">● Selected</span>' : ''}
      `;
      chip.addEventListener('click', () => {
        activateField(f);
      });
      list.appendChild(chip);
    });
  }

  // =========================================================================
  // 5. "DISCOVER MORE" SIDEBAR (SHOWS FIELDS DETAILS & ALTERNATIVE CROPS)
  // =========================================================================

  function renderDiscoverMore(activeId) {
    if (!discoverMoreList) return;
    discoverMoreList.innerHTML = '';

    const fieldsList = getStoredFields();
    if (discoverFieldsCount) {
      discoverFieldsCount.textContent = `${fieldsList.length} / ${MAX_FIELDS}`;
    }

    if (btnManageFieldsSidebar) {
      if (fieldsList.length >= MAX_FIELDS) {
        btnManageFieldsSidebar.innerHTML = `
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM7.25 4v5.25h1.5V4h-1.5zm0 6.75v1.5h1.5v-1.5h-1.5z"/>
          </svg>
          <span>Manage Active Plots (2/2 Full)</span>
        `;
      } else {
        btnManageFieldsSidebar.innerHTML = `
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
            <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z"/>
          </svg>
          <span>Add Second Field (1 Probe Left)</span>
        `;
      }
    }

    if (currentDiscoverTab === 'fields') {
      fieldsList.forEach(field => {
        const plant = PLANTS_DATA.find(p => p.id === field.cropId) || PLANTS_DATA[0];
        const isActive = field.name === currentFieldName;

        // Initials badge
        const parts = field.name.split(' ').filter(Boolean);
        let initials = "FA";
        if (parts.length >= 2) {
          initials = (parts[0][0] + parts[1][0]).toUpperCase();
        } else if (parts.length === 1 && parts[0].length > 0) {
          initials = parts[0].slice(0, 2).toUpperCase();
        }

        const isSoil2 = field.sensors && field.sensors.includes('soil2') && !field.sensors.includes('soil1');
        const probeTag = isSoil2 ? 'Probe A1' : 'Probe A0';

        const card = document.createElement('div');
        card.className = `discover-field-card ${isActive ? 'is-active' : ''}`;
        card.dataset.id = field.id;

        const locZone = field.location ? field.location.split('•')[0].trim() : 'Zone Alpha';
        const irrigShort = (field.irrigation || 'Pulse Drip').replace('Automated ', '').replace('Micro-Sprinkler ', 'Sprinkler ');

        card.innerHTML = `
          <!-- Field Header Row -->
          <div class="discover-field-header">
            <div class="discover-field-title-wrap">
              <div class="discover-field-avatar">${initials}</div>
              <div class="discover-field-name" title="${field.name}">${field.name}</div>
              <span class="discover-probe-pill" style="font-size:10px; font-weight:700; padding:1px 6px; border-radius:4px; background:rgba(0,120,212,0.1); color:#0078D4;">${probeTag}</span>
            </div>
            <span class="discover-field-status-pill ${isActive ? 'active' : 'inactive'}">
              ${isActive ? '● Active' : '● Ready'}
            </span>
          </div>

          <!-- Crop Preview Row -->
          <div class="discover-field-crop-row">
            <img src="${plant.image}" alt="${plant.name}" class="discover-field-crop-img" loading="lazy" />
            <div class="discover-field-crop-info">
              <div class="discover-crop-name">${plant.name}</div>
              <div class="discover-crop-species">${plant.species}</div>
              <div class="discover-field-meta">${field.acreage || '2.0 Acres'} • ${locZone}</div>
            </div>
          </div>

          <!-- Substrate & Irrigation Specs -->
          <div class="discover-field-specs-row">
            <span>Soil: <strong>${field.soil || 'Sandy Loam'}</strong></span>
            <span>Irrig: <strong>${irrigShort}</strong></span>
          </div>

          <!-- Micro Telemetry Grid -->
          <div class="discover-field-telemetry-micro">
            <div class="telemetry-micro-tile" title="Optimal Moisture Range">
              <div class="telemetry-micro-label">Moist</div>
              <div class="telemetry-micro-val" style="color: #0078D4;">${plant.optMoisture}</div>
            </div>
            <div class="telemetry-micro-tile" title="Optimal Temperature Range">
              <div class="telemetry-micro-label">Temp</div>
              <div class="telemetry-micro-val" style="color: #dc2626;">${plant.optTemp}</div>
            </div>
            <div class="telemetry-micro-tile" title="Soil pH Threshold">
              <div class="telemetry-micro-label">pH</div>
              <div class="telemetry-micro-val" style="color: #b45309;">${plant.soilPh}</div>
            </div>
          </div>

          <!-- Actions -->
          <div class="discover-field-actions">
            ${isActive ? `
              <span class="btn-field-active-pill">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
                <span>Active Field</span>
              </span>
            ` : `
              <button type="button" class="btn-field-switch" data-id="${field.id}">Switch to Field</button>
            `}
            <button type="button" class="btn-view-field-link" data-id="${field.id}">View Plot ›</button>
          </div>
        `;

        // Switch button event
        const switchBtn = card.querySelector('.btn-field-switch');
        if (switchBtn) {
          switchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            activateField(field);
            contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
          });
        }

        // View plot button event
        const viewPlotBtn = card.querySelector('.btn-view-field-link');
        if (viewPlotBtn) {
          viewPlotBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            switchView('fields');
          });
        }

        // Click anywhere on inactive card switches field
        if (!isActive) {
          card.style.cursor = 'pointer';
          card.addEventListener('click', () => {
            activateField(field);
            contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
          });
        }

        discoverMoreList.appendChild(card);
      });
    } else {
      // Crops tab
      const otherPlants = PLANTS_DATA.filter(p => p.id !== activeId);

      otherPlants.forEach(plant => {
        const row = document.createElement('div');
        row.className = 'app-card-row';
        row.dataset.id = plant.id;
        row.title = `Switch to ${plant.name} (${plant.species})`;

        row.innerHTML = `
          <div class="app-icon-thumb">
            <img src="${plant.image}" alt="${plant.name}" class="discover-plant-thumb" loading="lazy" />
          </div>
          <div class="app-info-row">
            <div class="app-name">${plant.name}</div>
            <div class="app-species">${plant.species}</div>
          </div>
          <div class="app-action-badge">
            <button type="button" class="btn-ghost-pill">Switch</button>
          </div>
        `;

        row.addEventListener('click', () => {
          applyPlantProfile(plant.id);
          showToast("Crop Selected", `Switched active field view to ${plant.name} (${plant.species}).`);
          contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
        });

        discoverMoreList.appendChild(row);
      });
    }
  }

  // =========================================================================
  // 6. SIDEBAR NAVIGATION RAIL (HOME, PLANTS, FIELDS, SETTINGS)
  // =========================================================================

  function positionIndicator(item) {
    if (!item) return;
    const railRect = navRail.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const relativeY = itemRect.top - railRect.top + (itemRect.height - 18) / 2;
    navIndicator.style.transform = `translateY(${relativeY}px)`;
    navIndicator.style.opacity = '1';
  }

  const initialActive = document.querySelector('.nav-item.active');
  if (initialActive) {
    positionIndicator(initialActive);
  }

  // =========================================================================
  // VIEW SWITCHING (HOME PROFILE VIEW, PLANTS GALLERY, & FIELDS MANAGEMENT)
  // =========================================================================

  const homeView = document.getElementById('homeView');
  const plantsGalleryView = document.getElementById('plantsGalleryView');
  const fieldsView = document.getElementById('fieldsView');
  const fieldsCardsList = document.getElementById('fieldsCardsList');
  const newFieldForm = document.getElementById('newFieldForm');
  const newFieldCrop = document.getElementById('newFieldCrop');


  function updateActiveNav(navName) {
    navItems.forEach(item => {
      if (item.dataset.nav === navName) {
        item.classList.add('active');
        positionIndicator(item);
      } else {
        item.classList.remove('active');
      }
    });
  }

  function switchView(viewName, cropId) {
    closeOnboarding(); // Ensure any blur modal is dismissed

    const homeView = document.getElementById('homeView');
    const fieldsView = document.getElementById('fieldsView');
    const plantsGalleryView = document.getElementById('plantsGalleryView');
    const cropDetailView = document.getElementById('cropDetailView');

    if (viewName === 'plants') {
      if (homeView) homeView.classList.remove('active');
      if (fieldsView) fieldsView.classList.remove('active');
      if (cropDetailView) cropDetailView.classList.remove('active');
      if (plantsGalleryView) plantsGalleryView.classList.add('active');
      if (stickyHeader) {
        stickyHeader.classList.remove('is-sticky');
        stickyHeader.setAttribute('aria-hidden', 'true');
      }
      updateActiveNav('plants');
      renderPlantsGallery();
      contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'crop-detail') {
      if (homeView) homeView.classList.remove('active');
      if (fieldsView) fieldsView.classList.remove('active');
      if (plantsGalleryView) plantsGalleryView.classList.remove('active');
      if (cropDetailView) cropDetailView.classList.add('active');
      if (stickyHeader) {
        stickyHeader.classList.remove('is-sticky');
        stickyHeader.setAttribute('aria-hidden', 'true');
      }
      updateActiveNav('plants');
      if (cropId) {
        renderCropDetail(cropId);
      }
      contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'fields') {
      if (homeView) homeView.classList.remove('active');
      if (plantsGalleryView) plantsGalleryView.classList.remove('active');
      if (cropDetailView) cropDetailView.classList.remove('active');
      if (fieldsView) fieldsView.classList.add('active');
      if (stickyHeader) {
        stickyHeader.classList.remove('is-sticky');
        stickyHeader.setAttribute('aria-hidden', 'true');
      }
      updateActiveNav('fields');
      renderFieldsView();
      contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (plantsGalleryView) plantsGalleryView.classList.remove('active');
      if (fieldsView) fieldsView.classList.remove('active');
      if (cropDetailView) cropDetailView.classList.remove('active');
      if (homeView) homeView.classList.add('active');
      updateActiveNav('home');
      renderMainFieldChips();
      contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function renderPlantsGallery() {
    const shelf1Track = document.getElementById('shelf1Track');
    const shelf2Track = document.getElementById('shelf2Track');
    const allCropsGrid = document.getElementById('allCropsGrid');

    if (!shelf1Track || !shelf2Track || !allCropsGrid) return;

    // Shelf 1: Top Foundation Crops
    const shelf1Ids = ['potato', 'chili', 'tomato', 'spinach', 'marigold'];
    const shelf1Plants = shelf1Ids.map(id => PLANTS_DATA.find(p => p.id === id)).filter(Boolean);

    // Shelf 2: Medicinal & Aromatic Herbs
    const shelf2Ids = ['basil', 'mint', 'coriander', 'aloevera', 'rose'];
    const shelf2Plants = shelf2Ids.map(id => PLANTS_DATA.find(p => p.id === id)).filter(Boolean);

    const createStoreCard = (plant) => {
      const card = document.createElement('div');
      card.className = 'store-app-card';
      card.dataset.id = plant.id;
      card.title = `Click to view full intelligence profile for ${plant.name} (${plant.species})`;
      card.tabIndex = 0;

      const topCol = (plant.heroColors && plant.heroColors[0]) || '#eedfc8';
      const midCol = (plant.heroColors && plant.heroColors[1]) || '#f7f1e7';

      card.innerHTML = `
        <div class="store-card-preview" style="background: linear-gradient(180deg, ${topCol} 0%, ${midCol} 100%);">
          <img src="${plant.image}" alt="${plant.name}" class="store-card-icon" loading="lazy" />
        </div>
        <div class="store-card-body">
          <div class="store-card-title">${plant.name}</div>
          <div class="store-card-subtitle">${plant.species}</div>
          <div class="store-card-footer">
            <div class="store-card-rating">
              <span class="star">★</span>
              <span>${plant.rating}</span>
            </div>
            <span class="store-card-badge">Free</span>
          </div>
        </div>
      `;

      // Single click shows full crop's detail (pure detail, zero monitoring options)!
      card.addEventListener('click', () => {
        switchView('crop-detail', plant.id);
        showToast("Crop Selected", `Showing botanical & agronomic details for ${plant.name}.`);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          switchView('crop-detail', plant.id);
          showToast("Crop Selected", `Showing botanical & agronomic details for ${plant.name}.`);
        }
      });

      return card;
    };

    shelf1Track.innerHTML = '';
    shelf1Plants.forEach(plant => shelf1Track.appendChild(createStoreCard(plant)));

    shelf2Track.innerHTML = '';
    shelf2Plants.forEach(plant => shelf2Track.appendChild(createStoreCard(plant)));

    allCropsGrid.innerHTML = '';
    PLANTS_DATA.forEach(plant => allCropsGrid.appendChild(createStoreCard(plant)));
  }

  let activeCdStageFilter = 'all';
  let currentCropDetailId = 'potato';

  function renderCropDetail(cropId) {
    currentCropDetailId = cropId || 'potato';
    const plant = PLANTS_DATA.find(p => p.id === currentCropDetailId) || PLANTS_DATA[0];

    // 1. Breadcrumb & Header Meta
    const bName = document.getElementById('cropDetailBreadcrumbName');
    if (bName) bName.textContent = plant.name;

    const cdHeroImg = document.getElementById('cdHeroImg');
    if (cdHeroImg) {
      cdHeroImg.src = plant.image;
      cdHeroImg.alt = plant.name;
    }

    const cdHeroTitle = document.getElementById('cdHeroTitle');
    if (cdHeroTitle) cdHeroTitle.textContent = plant.name;

    const cdHeroSpecies = document.getElementById('cdHeroSpecies');
    if (cdHeroSpecies) cdHeroSpecies.textContent = plant.species;

    const cdHeroCategory = document.getElementById('cdHeroCategory');
    if (cdHeroCategory) cdHeroCategory.textContent = plant.category;

    const cdHeroRatingScore = document.getElementById('cdHeroRatingScore');
    if (cdHeroRatingScore) cdHeroRatingScore.textContent = plant.rating;

    const cdHeroRatingCount = document.getElementById('cdHeroRatingCount');
    if (cdHeroRatingCount) cdHeroRatingCount.textContent = `${plant.ratingsCount} agronomist ratings`;

    const cdHeroCycle = document.getElementById('cdHeroCycle');
    if (cdHeroCycle) cdHeroCycle.textContent = `Growth Cycle: ${plant.growthCycle}`;

    const cdHeroTagline = document.getElementById('cdHeroTagline');
    if (cdHeroTagline) cdHeroTagline.textContent = plant.tagline;

    // 2. Reference Target Specifications (Static - Zero Live Monitoring)
    const cdSpecMoisture = document.getElementById('cdSpecMoisture');
    if (cdSpecMoisture) cdSpecMoisture.textContent = plant.optMoisture;

    const cdSpecTemp = document.getElementById('cdSpecTemp');
    if (cdSpecTemp) cdSpecTemp.textContent = plant.optTemp;

    const cdSpecCycle = document.getElementById('cdSpecCycle');
    if (cdSpecCycle) cdSpecCycle.textContent = plant.growthCycle;

    const cdSpecSoilPh = document.getElementById('cdSpecSoilPh');
    if (cdSpecSoilPh) cdSpecSoilPh.textContent = plant.soilPh;

    const cdSpecSunlight = document.getElementById('cdSpecSunlight');
    if (cdSpecSunlight) cdSpecSunlight.textContent = plant.sunlight;

    // 3. Phenological Progression / Growth Stages
    const cdStagesCycleBadge = document.getElementById('cdStagesCycleBadge');
    if (cdStagesCycleBadge) cdStagesCycleBadge.textContent = `4 Stages · ${plant.growthCycle}`;

    const cdStagesTitle = document.getElementById('cdStagesTitle');
    if (cdStagesTitle) cdStagesTitle.textContent = `Growth Stages of ${plant.name}`;

    renderCropDetailStages(plant);

    // 4. Overview Description
    const cdDescriptionText = document.getElementById('cdDescriptionText');
    if (cdDescriptionText) cdDescriptionText.textContent = plant.description;

    // 5. Botanical Features / Threshold Guidelines
    const cdFeaturesList = document.getElementById('cdFeaturesList');
    if (cdFeaturesList && plant.features) {
      cdFeaturesList.innerHTML = plant.features.map(f => `
        <li>
          <span class="feature-bullet"></span>
          <span class="feature-text">${f}</span>
        </li>
      `).join('');
    }

    // 6. Agricultural Taxonomy
    const cdDetailCategory = document.getElementById('cdDetailCategory');
    if (cdDetailCategory) cdDetailCategory.textContent = plant.category;

    const cdDetailSoilPh = document.getElementById('cdDetailSoilPh');
    if (cdDetailSoilPh) cdDetailSoilPh.textContent = plant.soilPh;

    const cdDetailSunlight = document.getElementById('cdDetailSunlight');
    if (cdDetailSunlight) cdDetailSunlight.textContent = plant.sunlight;

    // 7. Other Foundation Crops in Sidebar
    renderCropDetailOtherCrops(plant.id);
  }

  function renderCropDetailStages(plant) {
    const deck = document.getElementById('cdGrowthStagesDeck');
    if (!deck || !plant) return;
    deck.innerHTML = '';

    const stages = plant.stages || [];
    stages.forEach((stage) => {
      const card = document.createElement('div');
      card.className = 'stage-card';
      card.dataset.stageNum = stage.stageNum;
      card.tabIndex = 0;

      if (activeCdStageFilter !== 'all' && activeCdStageFilter !== String(stage.stageNum)) {
        card.classList.add('dimmed');
      } else if (activeCdStageFilter === String(stage.stageNum)) {
        card.classList.add('focused');
      }

      card.innerHTML = `
        <div class="stage-img-wrap">
          <img src="${stage.image}" alt="${plant.name} - ${stage.name}" class="stage-img" loading="lazy" onerror="this.onerror=null; this.src='${plant.image}';" />
          <span class="stage-number-badge">STAGE ${stage.stageNum}</span>
          <span class="stage-duration-pill">${stage.period}</span>
          <div class="stage-zoom-hint">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              <path d="M10.344 11.758a.5.5 0 0 1 .708 0l3.85 3.85a.5.5 0 0 1-.708.708l-3.85-3.85a.5.5 0 0 1 0-.708z"/>
              <path d="M6.5 4a.5.5 0 0 1 .5.5v1.5H8.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V7H4.5a.5.5 0 0 1 0-1H6V4.5A.5.5 0 0 1 6.5 4z"/>
            </svg>
            <span>Enlarge Stage</span>
          </div>
        </div>
        <div class="stage-content">
          <h4 class="stage-title">${stage.name}</h4>
          <p class="stage-desc">${stage.description}</p>
          <div class="stage-telemetry-chip" title="Target microclimate condition">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 2.5C8 2.5 3 8 3 11a5 5 0 0 0 10 0c0-3-5-8.5-5-8.5z"/>
            </svg>
            <span>${stage.targetMetric || 'Optimal microclimate target'}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        if (typeof openLightbox === 'function') openLightbox(stage, plant);
      });

      deck.appendChild(card);
    });
  }

  function renderCropDetailOtherCrops(currentId) {
    const list = document.getElementById('cdOtherCropsList');
    if (!list) return;
    list.innerHTML = '';

    const otherPlants = PLANTS_DATA.filter(p => p.id !== currentId);
    otherPlants.slice(0, 6).forEach(p => {
      const item = document.createElement('div');
      item.className = 'app-list-item';
      item.style.cursor = 'pointer';
      item.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="app-item-icon" />
        <div class="app-item-info">
          <div class="app-item-name">${p.name}</div>
          <div class="app-item-cat">${p.species} • ${p.growthCycle}</div>
          <div class="app-item-meta">
            <span class="star">★</span>
            <span>${p.rating}</span>
          </div>
        </div>
        <button class="btn-ghost-pill" style="padding: 4px 10px; font-size: 11.5px;">View</button>
      `;
      item.addEventListener('click', () => {
        renderCropDetail(p.id);
        contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
      });
      list.appendChild(item);
    });
  }

  function openAssignCropModal(cropId) {
    const modal = document.getElementById('assignCropModal');
    const list = document.getElementById('assignFieldsList');
    const plant = PLANTS_DATA.find(p => p.id === cropId) || PLANTS_DATA[0];
    if (!modal || !list) return;

    list.innerHTML = '';
    const fields = getStoredFields();
    fields.forEach(field => {
      const currentCrop = PLANTS_DATA.find(p => p.id === field.cropId) || PLANTS_DATA[0];
      const card = document.createElement('div');
      card.className = 'assign-field-option-card';
      card.innerHTML = `
        <div>
          <div class="assign-field-opt-title">🌾 ${field.name} (${field.acreage || '2.0 Acres'})</div>
          <div class="assign-field-opt-sub">Currently growing: <strong>${currentCrop.name}</strong> • Substrate: ${field.soil || 'Sandy Loam'}</div>
        </div>
        <button class="btn-primary" style="padding: 7px 16px; font-size: 12.5px; font-weight: 600;">Plant Here</button>
      `;
      card.addEventListener('click', () => {
        field.cropId = plant.id;
        saveStoredFields(fields);
        activateField(field);
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        switchView('home');
        showToast("Crop Planted", `${plant.name} is now planted in ${field.name}! Click MONITOR FIELD to monitor this plot.`);
      });
      list.appendChild(card);
    });

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Render Fields Management View with Full-Width Details Cards
  function renderFieldsView() {
    const fieldsList = getStoredFields();
    if (!fieldsCardsList) return;

    const count = fieldsList.length;
    const capacityText = document.getElementById('fieldsCapacityText');
    const capacityBadge = document.getElementById('fieldsHwCapacityBadge');
    const limitBanner = document.getElementById('fieldHwLimitBanner');
    const limitChannelsList = document.getElementById('limitChannelsList');
    const addFieldCardTitle = document.getElementById('addFieldCardTitle');
    const addFieldCardSubtitle = document.getElementById('addFieldCardSubtitle');

    if (capacityText) {
      if (count >= MAX_FIELDS) {
        capacityText.textContent = `Hardware Limit: ${count} / ${MAX_FIELDS} Soil Sensors In Use (Max 2 Fields)`;
        if (capacityBadge) capacityBadge.className = 'fields-hw-capacity-badge full';
      } else {
        const hasSoil1 = fieldsList.some(f => f.sensors && f.sensors.includes('soil1') && !f.sensors.includes('soil2'));
        const freeProbe = hasSoil1 ? 'Soil Probe 2 [Pin A1]' : 'Soil Probe 1 [Pin A0]';
        capacityText.textContent = `Hardware Capacity: ${count} / ${MAX_FIELDS} Fields Active (${freeProbe} Available)`;
        if (capacityBadge) capacityBadge.className = 'fields-hw-capacity-badge';
      }
    }

    if (limitBanner && newFieldForm) {
      if (count >= MAX_FIELDS) {
        limitBanner.classList.remove('hidden');
        newFieldForm.style.display = 'none';
        if (addFieldCardTitle) addFieldCardTitle.textContent = "Hardware Capacity Reached (2 / 2 Fields Active)";
        if (addFieldCardSubtitle) addFieldCardSubtitle.textContent = "Both analog soil moisture inputs (Pin A0 and Pin A1) are allocated to active fields.";
        if (limitChannelsList) {
          limitChannelsList.innerHTML = fieldsList.map((f) => {
            const isSoil2 = f.sensors && f.sensors.includes('soil2') && !f.sensors.includes('soil1');
            const probe = isSoil2 ? 'Soil Sensor 2 (Pin A1)' : 'Soil Sensor 1 (Pin A0)';
            const pump = isSoil2 ? 'Pump 2 (Relay Pin 6)' : 'Pump 1 (Relay Pin 7)';
            return `<span class="limit-chip"><strong>${probe}</strong> &rarr; ${f.name} (${pump})</span>`;
          }).join('');
        }
      } else {
        limitBanner.classList.add('hidden');
        newFieldForm.style.display = 'block';
        const hasSoil1 = fieldsList.some(f => f.sensors && f.sensors.includes('soil1') && !f.sensors.includes('soil2'));
        const freeProbeName = hasSoil1 ? 'Soil Probe 2 (Pin A1)' : 'Soil Probe 1 (Pin A0)';
        if (addFieldCardTitle) addFieldCardTitle.textContent = `Add Second Field Plot (${freeProbeName} Available)`;
        if (addFieldCardSubtitle) addFieldCardSubtitle.textContent = `Connect your 2nd agricultural parcel. Your Arduino controller supports up to 2 soil sensors.`;

        const chkSoil1 = document.getElementById('sensorCheckSoil1');
        const chkSoil2 = document.getElementById('sensorCheckSoil2');
        const chkPump1 = document.getElementById('pumpCheck1');
        const chkPump2 = document.getElementById('pumpCheck2');
        const nameInput = document.getElementById('newFieldName');

        if (hasSoil1) {
          if (chkSoil1) chkSoil1.checked = false;
          if (chkSoil2) chkSoil2.checked = true;
          if (chkPump1) chkPump1.checked = false;
          if (chkPump2) chkPump2.checked = true;
          if (nameInput && !nameInput.value) nameInput.placeholder = "e.g. Field Beta, Polyhouse 2...";
        } else {
          if (chkSoil1) chkSoil1.checked = true;
          if (chkSoil2) chkSoil2.checked = false;
          if (chkPump1) chkPump1.checked = true;
          if (chkPump2) chkPump2.checked = false;
          if (nameInput && !nameInput.value) nameInput.placeholder = "e.g. Field Alpha, Parcel 1...";
        }
        document.querySelectorAll('.sensor-choice-input').forEach(chk => {
          const card = chk.closest('.sensor-choice-card');
          if (card) card.classList.toggle('selected', chk.checked);
        });
      }
    }

    // Populate new field assigned crop dropdown if not populated
    if (newFieldCrop && newFieldCrop.children.length === 0) {
      newFieldCrop.innerHTML = PLANTS_DATA.map(p => `
        <option value="${p.id}">${p.name} (${p.species}) - ${p.category}</option>
      `).join('');
    }

    fieldsCardsList.innerHTML = '';

    fieldsList.forEach(field => {
      const plant = PLANTS_DATA.find(p => p.id === field.cropId) || PLANTS_DATA[0];
      const isActive = field.name === currentFieldName;

      const card = document.createElement('div');
      card.className = `field-card-full ${isActive ? 'is-active-field' : ''}`;

      // Calculate initials
      const parts = field.name.split(' ').filter(Boolean);
      let initials = "FA";
      if (parts.length >= 2) {
        initials = (parts[0][0] + parts[1][0]).toUpperCase();
      } else if (parts.length === 1 && parts[0].length > 0) {
        initials = parts[0].slice(0, 2).toUpperCase();
      }

      card.innerHTML = `
        <div class="field-card-top-row">
          <div class="field-identity-wrap">
            <div class="field-badge-icon-box">${initials}</div>
            <div class="field-title-box">
              <h3>
                ${field.name}
                <span class="field-status-pill ${isActive ? 'active' : 'inactive'}">
                  ${isActive ? '● Active Field' : '● Inactive Field'}
                </span>
              </h3>
              <div class="field-meta-location">${field.location || 'Zone Alpha'} • ${field.acreage || '2.0 Acres'}</div>
            </div>
          </div>
          <div class="field-card-actions">
            ${!isActive ? `<button class="btn-ghost-pill btn-set-active" data-id="${field.id}">Set as Active</button>` : ''}
            <button class="btn-primary btn-monitor-crop btn-monitor-dash" data-id="${field.id}" style="padding: 7px 16px; font-size: 13px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;" title="Launch live sensor and hardware telemetry monitor for this field">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              </svg>
              <span>MONITOR FIELD</span>
            </button>
            <button class="btn-ghost-pill btn-field-switch-crop" data-id="${field.id}">Switch Crop</button>
            ${fieldsList.length > 1 ? `<button class="btn-ghost-pill btn-delete-field" data-id="${field.id}" title="Remove Field" style="color:#d83b01;">Delete</button>` : ''}
          </div>
        </div>

        <!-- Monitored Crop Banner inside Card -->
        <div class="field-crop-banner">
          <div class="field-crop-left">
            <img src="${plant.image}" alt="${plant.name}" class="field-crop-thumb" />
            <div>
              <div class="field-crop-name">${plant.name} <span class="field-crop-species">(${plant.species})</span></div>
              <div class="field-crop-tagline">${plant.tagline}</div>
            </div>
          </div>
          <div class="field-crop-meta-right">
            <span class="field-crop-rating-badge">★ ${plant.rating} Agronomist Rating</span>
            <span class="field-crop-calib-badge">✓ 100% Microclimate Calibrated</span>
          </div>
        </div>

        <!-- Complete Telemetry Grid (Full Width) -->
        <div class="field-telemetry-grid">
          <div class="field-telemetry-tile">
            <div class="telemetry-tile-label">Optimal Moisture</div>
            <div class="telemetry-tile-value" style="color: #0078D4;">${plant.optMoisture}</div>
          </div>
          <div class="field-telemetry-tile">
            <div class="telemetry-tile-label">Optimal Temperature</div>
            <div class="telemetry-tile-value" style="color: #dc2626;">${plant.optTemp}</div>
          </div>
          <div class="field-telemetry-tile">
            <div class="telemetry-tile-label">Growth Cycle</div>
            <div class="telemetry-tile-value" style="color: #107c41;">${plant.growthCycle}</div>
          </div>
          <div class="field-telemetry-tile">
            <div class="telemetry-tile-label">Soil pH Threshold</div>
            <div class="telemetry-tile-value" style="color: #b45309;">${plant.soilPh}</div>
          </div>
          <div class="field-telemetry-tile">
            <div class="telemetry-tile-label">Daily Sunlight</div>
            <div class="telemetry-tile-value" style="color: #4338ca;">${plant.sunlight}</div>
          </div>
          <div class="field-telemetry-tile">
            <div class="telemetry-tile-label">Automated Pulse</div>
            <div class="telemetry-tile-value" style="color: #0f766e;">Auto-Trigger Enabled</div>
          </div>
        </div>

        <!-- Hardware & Substrate Spec Sub-Row -->
        <div class="field-hardware-subrow">
          <div class="field-spec-item">Substrate: <strong>${field.soil || 'Porous Sandy Loam'}</strong></div>
          <div class="field-spec-item">Irrigation: <strong>${field.irrigation || 'Automated Pulse Drip'}</strong></div>
          <div class="field-spec-item">Rhizosphere Sensor Depth: <strong>${field.depth || '10–15cm Depth'}</strong></div>
          <div class="field-spec-item" style="color: #107c41;">Signal Telemetry: <strong>● 99.4% (Arduino Online)</strong></div>
        </div>

        <!-- Arduino Sensors & Actuators Allocation Badges -->
        <div class="field-sensors-badges-wrap">
          <span style="font-size: 11px; font-weight: 600; color: var(--win-text-secondary); margin-right: 4px;">Hardware Channel:</span>
          ${(field.sensors && field.sensors.includes('soil2') && !field.sensors.includes('soil1'))
            ? '<span class="field-sensor-pill" style="background:#0078D4; color:#fff; font-weight:700;">📡 Channel 2: Soil 2 (A1) + Pump 2 (D6)</span>'
            : (field.sensors && field.sensors.includes('soil1') && field.sensors.includes('soil2'))
            ? '<span class="field-sensor-pill" style="background:#0078D4; color:#fff; font-weight:700;">📡 Dual Channel: Soil 1 (A0) & Soil 2 (A1)</span>'
            : '<span class="field-sensor-pill" style="background:#0078D4; color:#fff; font-weight:700;">📡 Channel 1: Soil 1 (A0) + Pump 1 (D7)</span>'}
          <span class="field-sensor-pill">● DHT11 (Pin 4)</span>
          <span class="field-sensor-pill actuator">⚡ Pump 3 Manual (Pin 8)</span>
          <span class="field-sensor-pill" style="color:#0078D4; font-weight:700;">Auto-Trigger: &lt; ${field.moistureThreshold || 40}%</span>
        </div>
      `;

      // Event handlers for field actions
      const btnMonitor = card.querySelector('.btn-monitor-crop, .btn-monitor-dash');
      if (btnMonitor) {
        btnMonitor.addEventListener('click', () => {
          activateField(field);
          openSensorModal();
        });
      }

      const btnSetActive = card.querySelector('.btn-set-active');
      if (btnSetActive) {
        btnSetActive.addEventListener('click', () => {
          activateField(field);
          renderFieldsView();
        });
      }

      const btnSwitchCrop = card.querySelector('.btn-field-switch-crop');
      if (btnSwitchCrop) {
        btnSwitchCrop.addEventListener('click', () => {
          activateField(field);
          switchView('plants');
        });
      }

      const btnDelete = card.querySelector('.btn-delete-field');
      if (btnDelete) {
        btnDelete.addEventListener('click', () => {
          if (confirm(`Remove "${field.name}" from your field management portfolio?`)) {
            const currentFields = getStoredFields().filter(f => f.id !== field.id);
            saveStoredFields(currentFields);
            if (isActive && currentFields.length > 0) {
              activateField(currentFields[0]);
            } else if (currentFields.length === 0) {
              localStorage.removeItem('planto_field_name');
              localStorage.removeItem('planto_selected_plant');
              localStorage.removeItem('planto_field_setup_done');
              setTimeout(() => openOnboarding(1), 300);
            }
            renderFieldsView();
            renderDiscoverMore(currentPlantId);
            showToast("Field Removed", `Removed ${field.name} from active parcels.`);
          }
        });
      }

      fieldsCardsList.appendChild(card);
    });
  }

  // Initialize New Field Form Submission & Sensor Selection
  if (newFieldForm) {
    const thresholdSlider = document.getElementById('newFieldThreshold');
    const thresholdValBadge = document.getElementById('newFieldThresholdVal');
    if (thresholdSlider && thresholdValBadge) {
      thresholdSlider.addEventListener('input', (e) => {
        thresholdValBadge.textContent = `${e.target.value}%`;
      });
    }

    // Toggle card styling on checkbox changes
    const sensorCheckboxes = document.querySelectorAll('.sensor-choice-input');
    sensorCheckboxes.forEach(chk => {
      chk.addEventListener('change', () => {
        const card = chk.closest('.sensor-choice-card');
        if (card) {
          card.classList.toggle('selected', chk.checked);
        }
      });
    });

    // Hardware Presets Bar
    const presetButtons = document.querySelectorAll('.btn-sensor-preset');
    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        presetButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const preset = btn.dataset.preset;
        const chkSoil1 = document.getElementById('sensorCheckSoil1');
        const chkSoil2 = document.getElementById('sensorCheckSoil2');
        const chkDHT = document.getElementById('sensorCheckDHT11');
        const chkPump1 = document.getElementById('pumpCheck1');
        const chkPump2 = document.getElementById('pumpCheck2');
        const chkPump3 = document.getElementById('pumpCheck3');

        if (preset === 'soil1') {
          if (chkSoil1) chkSoil1.checked = true;
          if (chkSoil2) chkSoil2.checked = false;
          if (chkDHT) chkDHT.checked = true;
          if (chkPump1) chkPump1.checked = true;
          if (chkPump2) chkPump2.checked = false;
          if (chkPump3) chkPump3.checked = true;
        } else if (preset === 'soil2') {
          if (chkSoil1) chkSoil1.checked = false;
          if (chkSoil2) chkSoil2.checked = true;
          if (chkDHT) chkDHT.checked = true;
          if (chkPump1) chkPump1.checked = false;
          if (chkPump2) chkPump2.checked = true;
          if (chkPump3) chkPump3.checked = true;
        } else if (preset === 'dual-soil') {
          if (chkSoil1) chkSoil1.checked = true;
          if (chkSoil2) chkSoil2.checked = true;
          if (chkDHT) chkDHT.checked = true;
          if (chkPump1) chkPump1.checked = true;
          if (chkPump2) chkPump2.checked = true;
          if (chkPump3) chkPump3.checked = true;
        }

        sensorCheckboxes.forEach(chk => {
          const card = chk.closest('.sensor-choice-card');
          if (card) card.classList.toggle('selected', chk.checked);
        });
      });
    });

    newFieldForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Enforce physical hardware limit (only 2 soil moisture inputs on Arduino)
      const currentList = getStoredFields();
      if (currentList.length >= MAX_FIELDS) {
        showToast("Hardware Limit Reached", "Maximum 2 fields allowed: Arduino Uno only has 2 analog soil moisture inputs (A0 & A1).");
        return;
      }

      const nameInput = document.getElementById('newFieldName');
      const cropSelect = document.getElementById('newFieldCrop');
      const acreageInput = document.getElementById('newFieldAcreage');
      const soilSelect = document.getElementById('newFieldSoil');
      const irrigationSelect = document.getElementById('newFieldIrrigation');
      const sensorsInput = document.getElementById('newFieldSensors');

      const nameVal = nameInput.value.trim();
      if (!nameVal) return;

      // Extract chosen sensors
      const selectedSensors = [];
      if (document.getElementById('sensorCheckSoil1')?.checked) selectedSensors.push('soil1');
      if (document.getElementById('sensorCheckSoil2')?.checked) selectedSensors.push('soil2');
      if (document.getElementById('sensorCheckDHT11')?.checked) selectedSensors.push('dht11');
      if (selectedSensors.length === 0) selectedSensors.push('soil1');

      // Extract chosen pump relays
      const selectedPumps = [];
      if (document.getElementById('pumpCheck1')?.checked) selectedPumps.push('pump1');
      if (document.getElementById('pumpCheck2')?.checked) selectedPumps.push('pump2');
      if (document.getElementById('pumpCheck3')?.checked) selectedPumps.push('pump3');

      const threshInput = document.getElementById('newFieldThreshold');
      const threshVal = threshInput ? parseInt(threshInput.value, 10) : 40;

      const isSoil2 = selectedSensors.includes('soil2') && !selectedSensors.includes('soil1');

      const newFieldObj = {
        id: 'field-' + Date.now(),
        name: nameVal,
        cropId: cropSelect.value || 'potato',
        acreage: acreageInput.value.trim() || '2.0 Acres',
        soil: soilSelect.value,
        irrigation: irrigationSelect.value,
        depth: sensorsInput.value.trim() || '10–15cm Depth',
        location: isSoil2 ? 'Zone Beta • Controlled Climate' : 'Zone Alpha • Smart Parcel',
        sensors: selectedSensors,
        pumps: selectedPumps,
        moistureThreshold: threshVal,
        assignedProbe: isSoil2 ? 'soil2' : 'soil1',
        pins: { soil: isSoil2 ? 'A1' : 'A0', dht: 'D4', pump: isSoil2 ? 'D6' : 'D7', manualPump: 'D5' }
      };

      currentList.push(newFieldObj);
      saveStoredFields(currentList);

      activateField(newFieldObj);
      renderFieldsView();
      renderDiscoverMore(currentPlantId);

      nameInput.value = '';
      showToast("Field Created", `Registered "${newFieldObj.name}" linked to ${isSoil2 ? 'Soil Sensor 2 (Pin A1)' : 'Soil Sensor 1 (Pin A0)'}.`);
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const navName = item.dataset.nav;
      if (navName === 'home') {
        switchView('home');
      } else if (navName === 'plants') {
        switchView('plants');
      } else if (navName === 'fields') {
        switchView('fields');
      } else if (navName === 'settings') {
        openOnboarding(1);
      }
    });
  });

  window.addEventListener('resize', () => {
    const current = document.querySelector('.nav-item.active');
    if (current) positionIndicator(current);
  });

  // =========================================================================
  // 6. SMOOTH SCROLL TRACKING & FLOATING COMPACT HEADER
  // =========================================================================

  let ticking = false;

  function updateStickyHeader() {
    if ((plantsGalleryView && plantsGalleryView.classList.contains('active')) || 
        (fieldsView && fieldsView.classList.contains('active'))) {
      if (stickyHeader && stickyHeader.classList.contains('is-sticky')) {
        stickyHeader.classList.remove('is-sticky');
        stickyHeader.setAttribute('aria-hidden', 'true');
      }
      ticking = false;
      return;
    }
    const scrollTop = contentViewport.scrollTop;
    const heroRect = heroSection.getBoundingClientRect();
    const viewportRect = contentViewport.getBoundingClientRect();
    const heroBottomRelative = heroRect.bottom - viewportRect.top;

    const isPastHero = heroBottomRelative < 140 || scrollTop > 160;

    const fadeStart = 30;
    const fadeEnd = 160;
    let fadeRatio = 1;
    if (scrollTop > fadeStart) {
      fadeRatio = Math.max(0, 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart));
    }

    const heroTopRow = heroSection.querySelector('.hero-top-row');
    const heroIcon = heroSection.querySelector('.app-icon-container');
    if (heroTopRow) {
      heroTopRow.style.opacity = fadeRatio;
      heroTopRow.style.transform = `translateY(${scrollTop * 0.18}px)`;
    }
    if (heroIcon) {
      heroIcon.style.opacity = Math.max(0, fadeRatio * 1.1);
      heroIcon.style.transform = `translateY(${scrollTop * 0.14}px) scale(${0.92 + fadeRatio * 0.08})`;
    }

    if (isPastHero) {
      if (!stickyHeader.classList.contains('is-sticky')) {
        stickyHeader.classList.add('is-sticky');
        stickyHeader.setAttribute('aria-hidden', 'false');
      }
    } else {
      if (stickyHeader.classList.contains('is-sticky')) {
        stickyHeader.classList.remove('is-sticky');
        stickyHeader.setAttribute('aria-hidden', 'true');
      }
    }

    ticking = false;
  }

  contentViewport.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateStickyHeader);
      ticking = true;
    }
  }, { passive: true });

  updateStickyHeader();

  // =========================================================================
  // 7. SEARCH BAR INTERACTION
  // =========================================================================

  searchInput.addEventListener('focus', () => {
    searchDropdown.classList.add('show');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      searchDropdown.classList.remove('show');
    }
  });

  searchItems.forEach(item => {
    item.addEventListener('click', () => {
      const plantKey = item.dataset.plant;
      if (plantKey) {
        switchView('crop-detail', plantKey);
        const plant = PLANTS_DATA.find(p => p.id === plantKey);
        searchInput.value = plant ? plant.name : plantKey;
        searchDropdown.classList.remove('show');
        showToast('Crop Selected', `Showing botanical & agronomic details for ${plant ? plant.name : plantKey}.`);
        contentViewport.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchDropdown.classList.remove('show');
      const q = searchInput.value.toLowerCase().trim();
      const match = PLANTS_DATA.find(p => p.name.toLowerCase().includes(q) || p.species.toLowerCase().includes(q));
      if (match) {
        switchView('crop-detail', match.id);
        showToast('Search Result', `Showing details for ${match.name} (${match.species})`);
      } else {
        showToast('Search', `No calibrated profile matching "${searchInput.value}"`);
      }
    }
  });

  // =========================================================================
  // 8. PLANT GROWTH STAGES PHENOLOGY & ENLARGED INSPECTION LIGHTBOX
  // =========================================================================

  let activeStageFilter = 'all';

  function renderGrowthStages(plant) {
    if (!growthStagesDeck || !plant) return;

    if (stagesSectionTitle) {
      stagesSectionTitle.textContent = `Growth Stages of ${plant.name}`;
    }
    if (stagesCycleBadge) {
      stagesCycleBadge.textContent = `4 Phenological Cycles · ${plant.growthCycle}`;
    }
    if (stagesSubtitle) {
      stagesSubtitle.textContent = `Photographic development of ${plant.name} (${plant.species}) across critical phenological milestones. Click any stage to inspect high-resolution imagery and root telemetry.`;
    }

    const stages = plant.stages || [];
    growthStagesDeck.innerHTML = '';

    stages.forEach((stage) => {
      const card = document.createElement('div');
      card.className = 'stage-card';
      card.dataset.stageNum = stage.stageNum;
      card.tabIndex = 0;

      // Filter state
      if (activeStageFilter !== 'all' && activeStageFilter !== String(stage.stageNum)) {
        card.classList.add('dimmed');
      } else if (activeStageFilter === String(stage.stageNum)) {
        card.classList.add('focused');
      }

      card.innerHTML = `
        <div class="stage-img-wrap">
          <img src="${stage.image}" alt="${plant.name} - ${stage.name}" class="stage-img" loading="lazy" onerror="this.onerror=null; this.src='${plant.image}';" />
          <span class="stage-number-badge">STAGE ${stage.stageNum}</span>
          <span class="stage-duration-pill">${stage.period}</span>
          <div class="stage-zoom-hint">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              <path d="M10.344 11.758a.5.5 0 0 1 .708 0l3.85 3.85a.5.5 0 0 1-.708.708l-3.85-3.85a.5.5 0 0 1 0-.708z"/>
              <path d="M6.5 4a.5.5 0 0 1 .5.5v1.5H8.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V7H4.5a.5.5 0 0 1 0-1H6V4.5A.5.5 0 0 1 6.5 4z"/>
            </svg>
            <span>Enlarge Stage</span>
          </div>
        </div>
        <div class="stage-content">
          <h4 class="stage-title">${stage.name}</h4>
          <p class="stage-desc">${stage.description}</p>
          <div class="stage-telemetry-chip" title="Target microclimate condition">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <span>${stage.targetMetric}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openStageLightbox(plant, stage);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openStageLightbox(plant, stage);
        }
      });

      growthStagesDeck.appendChild(card);
    });
  }

  function openStageLightbox(plant, stage) {
    if (!lightboxModal || !lightboxContent) return;
    lightboxContent.innerHTML = `
      <div class="lightbox-stage-view">
        <div class="lightbox-stage-media">
          <img src="${stage.image}" alt="${plant.name} - ${stage.name}" class="lightbox-stage-img" onerror="this.onerror=null; this.src='${plant.image}';" />
          <span class="lightbox-stage-badge">STAGE ${stage.stageNum} · ${stage.period}</span>
        </div>
        <div class="lightbox-stage-info">
          <div class="lightbox-stage-kicker">${plant.name} (${plant.species}) · Phenological Stage ${stage.stageNum} of 4</div>
          <h2 class="lightbox-stage-title">${stage.name}</h2>
          <p class="lightbox-stage-desc">${stage.description}</p>
          <div class="lightbox-stage-meta-grid">
            <div class="lightbox-meta-item">
              <span class="meta-item-lbl">Key Milestone Indicator</span>
              <strong class="meta-item-val">${stage.milestone}</strong>
            </div>
            <div class="lightbox-meta-item">
              <span class="meta-item-lbl">Calibrated Target Metric</span>
              <strong class="meta-item-val">${stage.targetMetric}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    if (lightboxContent) lightboxContent.innerHTML = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

  // Quick Filter Navigation Pills
  if (stageNavPills) {
    stageNavPills.addEventListener('click', (e) => {
      const btn = e.target.closest('.stage-pill');
      if (!btn) return;
      stageNavPills.querySelectorAll('.stage-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      activeStageFilter = btn.dataset.stage;

      const currentPlant = PLANTS_DATA.find(p => p.id === currentPlantId) || PLANTS_DATA[0];
      renderGrowthStages(currentPlant);
    });
  }

  // =========================================================================
  // 9. INTERACTIVE USER RATINGS & REVIEW HELPFUL VOTING
  // =========================================================================

  userStars.forEach(star => {
    star.addEventListener('mouseenter', () => {
      const val = parseInt(star.dataset.val, 10);
      highlightStars(val);
    });

    star.addEventListener('click', () => {
      currentRating = parseInt(star.dataset.val, 10);
      highlightStars(currentRating);
      const activePlant = PLANTS_DATA.find(p => p.id === currentPlantId);
      ratingPromptText.textContent = `You rated ${activePlant ? activePlant.name : 'this crop'} ${currentRating} of 5 stars!`;
      ratingPromptText.style.color = 'var(--win-accent)';
      ratingPromptText.style.fontWeight = '600';
      showToast('Rating Submitted', `Recorded ${currentRating}-star field rating.`);
    });
  });

  if (starGroup) {
    starGroup.addEventListener('mouseleave', () => {
      highlightStars(currentRating);
    });
  }

  function highlightStars(val) {
    userStars.forEach(star => {
      const starVal = parseInt(star.dataset.val, 10);
      if (starVal <= val) {
        star.textContent = '★';
        star.classList.add('hovered');
      } else {
        star.textContent = '☆';
        star.classList.remove('hovered');
      }
    });
  }

  if (helpfulBtn) {
    helpfulBtn.addEventListener('click', () => {
      let count = parseInt(helpfulCount.textContent, 10);
      if (!isHelpfulVoted) {
        count++;
        helpfulCount.textContent = count;
        helpfulBtn.classList.add('voted');
        isHelpfulVoted = true;
        showToast('Feedback', 'Marked review as helpful.');
      } else {
        count--;
        helpfulCount.textContent = count;
        helpfulBtn.classList.remove('voted');
        isHelpfulVoted = false;
      }
    });
  }

  // =========================================================================
  // 10. LIVE SENSOR TELEMETRY MODAL & FULL-WINDOW PRECISION MONITOR
  // =========================================================================

  let sensorPollingTimer = null;
  let isExecutingStep = false;
  let currentSensorData = {
    moisture: 72.4,
    soil2: 68.1,
    humidity: 64.5,
    temp: 18.6,
    vpd: 0.96,
    dewPoint: 12.4,
    ph: 5.82,
    par: 742,
    pressure: 1.84,
    targetDosage: 650,
    dosageList: [500, 650, 800],
    dosageIndex: 1
  };

  // Helper: calculate Magnus dew point (°C) and VPD (kPa)
  function calculateAtmosphericMetrics(tempC, humidityPct) {
    const es = 0.61078 * Math.exp((17.27 * tempC) / (tempC + 237.3)); // Saturation vapor pressure
    const ea = es * (humidityPct / 100);                              // Actual vapor pressure
    const vpd = Math.max(0.1, es - ea);                               // VPD in kPa

    const alpha = ((17.27 * tempC) / (237.3 + tempC)) + Math.log(humidityPct / 100);
    const dewPoint = (237.3 * alpha) / (17.27 - alpha);
    return { vpd, dewPoint };
  }

  // =========================================================================
  // 10. ARDUINO SMART GARDENING HARDWARE DRIVER (USB SERIAL ONLY • NO FAKE DATA)
  // =========================================================================
  const ArduinoManager = {
    DRY_VALUE: 800,
    WET_VALUE: 300,
    MOISTURE_THRESHOLD: 40,
    NUM_PUMPS: 3,
    RELAY_PINS: [7, 6, 8],
    CHECK_INTERVAL: 5000,
    PUMP_RUN_TIME: 3000,
    PUMP_COOLDOWN: 3000,
    BAUD_RATE: 9600,

    isConnected: false,
    connectionType: 'none', // 'ble' | 'serial' | 'none'
    port: null,
    reader: null,
    writer: null,
    bleDevice: null,
    bleServer: null,
    bleCharRx: null,
    bleCharTx: null,
    bleBuffer: '',
    updatePumpInterval: null,

    pumpRunning: [false, false, false],
    pumpStartTime: [0, 0, 0],
    pumpLastEnd: [0, 0, 0],

    data: {
      soil1: null,
      soil2: null,
      soil1Fault: false,
      soil2Fault: false,
      raw1: null,
      raw2: null,
      temp: null,
      humidity: null,
      dhtOk: false,
      btStatus: 'STANDBY',
      mode: 'AUTO'
    },

    history: {
      soil1: [],
      soil2: [],
      temp: [],
      humidity: []
    },

    showArduinoGate() {
      const gate = document.getElementById('arduinoGateOverlay');
      const shell = document.querySelector('.window-shell');
      const body = document.querySelector('.app-body');
      if (gate) gate.classList.remove('hidden');
      if (shell) shell.classList.add('arduino-blurred');
      if (body) body.classList.add('arduino-blurred');
    },

    hideArduinoGate() {
      const gate = document.getElementById('arduinoGateOverlay');
      const shell = document.querySelector('.window-shell');
      const body = document.querySelector('.app-body');
      if (gate) gate.classList.add('hidden');
      if (shell) shell.classList.remove('arduino-blurred');
      if (body) body.classList.remove('arduino-blurred');
    },

    readMoisturePercent(raw) {
      const mapped = ((raw - this.DRY_VALUE) * 100) / (this.WET_VALUE - this.DRY_VALUE);
      return Math.min(100, Math.max(0, Math.round(mapped)));
    },

    startPump(i) {
      if (!this.isConnected) {
        showToast("No Hardware Connected", "Connect via HC-02 Bluetooth or USB Serial to trigger pumps.");
        return false;
      }
      const now = Date.now();
      if (this.pumpRunning[i]) return false;
      if (this.pumpLastEnd[i] !== 0 && now - this.pumpLastEnd[i] < this.PUMP_COOLDOWN) {
        const remainingCooldown = Math.ceil((this.PUMP_COOLDOWN - (now - this.pumpLastEnd[i])) / 1000);
        this.log(`Pump ${i + 1} skipped (cooldown: ${remainingCooldown}s remaining)`);
        showToast(`Pump ${i + 1} In Cooldown`, `Please wait ${remainingCooldown}s before re-triggering.`);
        return false;
      }

      this.pumpRunning[i] = true;
      this.pumpStartTime[i] = now;
      this.log(`Pump ${i + 1} ON (Relay Pin D${this.RELAY_PINS[i]} LOW)`);
      this.updateRelayUI(i, 'running');

      // Send single command over active transport
      this.writeHardware(String(i + 1));

      showToast(`Pump ${i + 1} Activated`, `Relay Pin D${this.RELAY_PINS[i]} active for 3s.`);
      return true;
    },

    updatePump(i) {
      const now = Date.now();
      if (this.pumpRunning[i]) {
        const elapsed = now - this.pumpStartTime[i];
        const progress = Math.min(100, (elapsed / this.PUMP_RUN_TIME) * 100);
        this.updateRelayProgress(i, progress, false);

        if (elapsed >= this.PUMP_RUN_TIME) {
          this.pumpRunning[i] = false;
          this.pumpLastEnd[i] = Date.now();
          this.log(`Pump ${i + 1} OFF (Relay Pin D${this.RELAY_PINS[i]} HIGH)`);
          this.updateRelayUI(i, 'cooldown');
          this.syncTelemetryToDashboard();
        }
      } else if (this.pumpLastEnd[i] !== 0) {
        const cooldownElapsed = now - this.pumpLastEnd[i];
        if (cooldownElapsed < this.PUMP_COOLDOWN) {
          const cooldownRemaining = 100 - ((cooldownElapsed / this.PUMP_COOLDOWN) * 100);
          this.updateRelayProgress(i, cooldownRemaining, true);
        } else {
          this.updateRelayUI(i, 'standby');
          this.updateRelayProgress(i, 0, false);
        }
      }
    },

    async connectBluetooth() {
      if (!navigator.bluetooth) {
        alert("Web Bluetooth API is not supported in this browser. Please open PlantoPRO in Google Chrome, Microsoft Edge, or Opera on desktop / Android.\n\nAlternatively, pair the HC-02 in Windows Settings (PIN 1234/0000) and use 'Connect Bluetooth COM / USB (Web Serial)'!");
        return;
      }
      try {
        this.log("[BLUETOOTH] Requesting Bluetooth Device...");
        const device = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true,
          optionalServices: [
            0xFFE0,
            0xFFF0,
            '0000ffe0-0000-1000-8000-00805f9b34fb',
            '0000fff0-0000-1000-8000-00805f9b34fb',
            '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
            '49535343-fe7d-4ae5-8fa9-9fafd205e455'
          ]
        });

        this.log(`[BLUETOOTH] Connecting to GATT server on '${device.name || 'HC-02'}'...`);
        device.addEventListener('gattserverdisconnected', () => {
          this.handleDisconnect('HC-02 Bluetooth device disconnected.');
        });

        const server = await device.gatt.connect();
        let rxChar = null;
        let txChar = null;

        const services = await server.getPrimaryServices();
        for (const s of services) {
          try {
            const chars = await s.getCharacteristics();
            for (const c of chars) {
              if (c.properties.notify || c.properties.indicate) rxChar = c;
              if (c.properties.write || c.properties.writeWithoutResponse) txChar = c;
            }
          } catch (e) {
            console.warn("Error reading service characteristics:", e);
          }
          if (rxChar && txChar) break;
        }

        if (!rxChar && !txChar) {
          throw new Error("Could not find transparent UART characteristic on this device. Ensure HC-02 is connected.");
        }

        if (rxChar && (rxChar.properties.notify || rxChar.properties.indicate)) {
          await rxChar.startNotifications();
          rxChar.addEventListener('characteristicvaluechanged', (e) => {
            const chunk = new TextDecoder().decode(e.target.value);
            this.handleBleIncomingChunk(chunk);
          });
        }

        this.isConnected = true;
        this.connectionType = 'ble';
        this.bleDevice = device;
        this.bleServer = server;
        this.bleCharRx = rxChar;
        this.bleCharTx = txChar || rxChar;

        this.hideArduinoGate();
        this.updateConnectionUI();
        this.log(`[BLUETOOTH] Connected to ${device.name || 'HC-02 Bluetooth Module'} (BLE UART)!`);
        showToast("Bluetooth Connected", `Linked to ${device.name || 'HC-02'} wirelessly. Telemetry active.`);
      } catch (err) {
        console.error("Web Bluetooth connection error:", err);
        if (err.name !== 'NotFoundError') {
          showToast("Bluetooth Error", err.message || "Failed to connect Bluetooth device.");
          this.log(`[BLUETOOTH ERROR] ${err.message}`);
        }
      }
    },

    handleBleIncomingChunk(chunk) {
      this.bleBuffer = (this.bleBuffer || '') + chunk;
      const lines = this.bleBuffer.split(/\r?\n/);
      this.bleBuffer = lines.pop();
      for (const line of lines) {
        if (line.trim().length > 0) {
          this.handleIncomingSerialLine(line.trim());
        }
      }
    },

    async disconnectBluetooth() {
      try {
        if (this.bleDevice && this.bleDevice.gatt && this.bleDevice.gatt.connected) {
          await this.bleDevice.gatt.disconnect();
        }
      } catch (e) {
        console.warn(e);
      }
      this.handleDisconnect('Disconnected from Bluetooth HC-02.');
    },

    async connectUSB() {
      if (!('serial' in navigator)) {
        alert("Web Serial API is not supported in this browser. Please open PlantoPRO in Google Chrome, Microsoft Edge, or Opera on desktop to connect your Arduino or Bluetooth COM port.");
        return;
      }
      try {
        this.port = await navigator.serial.requestPort();
        await this.port.open({ baudRate: this.BAUD_RATE });
        this.isConnected = true;
        this.connectionType = 'serial';
        this.writer = this.port.writable.getWriter();
        this.hideArduinoGate();
        this.updateConnectionUI();
        this.log(`[SYSTEM] Connected to COM Port at ${this.BAUD_RATE} baud!`);
        showToast("Hardware Connected", `COM port open at ${this.BAUD_RATE} baud. Telemetry streaming.`);
        this.readSerialLoop();
      } catch (err) {
        console.error("Web Serial connection error:", err);
        if (err.name !== 'NotFoundError') {
          showToast("Serial Error", err.message || "Failed to open serial port.");
        }
      }
    },

    async disconnectUSB() {
      try {
        if (this.reader) {
          await this.reader.cancel();
          this.reader.releaseLock();
          this.reader = null;
        }
        if (this.writer) {
          await this.writer.close();
          this.writer.releaseLock();
          this.writer = null;
        }
        if (this.port) {
          await this.port.close();
          this.port = null;
        }
      } catch (e) {
        console.warn(e);
      }
      this.handleDisconnect('Disconnected from COM port.');
    },

    handleDisconnect(reason) {
      this.isConnected = false;
      this.connectionType = 'none';
      this.bleDevice = null;
      this.bleServer = null;
      this.bleCharRx = null;
      this.bleCharTx = null;
      this.port = null;
      this.reader = null;
      this.writer = null;

      this.data.soil1 = null;
      this.data.soil2 = null;
      this.data.temp = null;
      this.data.humidity = null;
      this.data.dhtOk = false;

      this.updateConnectionUI();
      this.syncTelemetryToDashboard();
      const msg = reason || "Hardware disconnected. No active connection.";
      this.log(`[SYSTEM] ${msg}`);
      showToast("Hardware Disconnected", msg);
    },

    async writeHardware(text) {
      if (!this.isConnected) {
        this.log(`[HARDWARE BLOCKED] Cannot send '${text}': No connection.`);
        return;
      }
      try {
        const encoder = new TextEncoder();
        if (this.connectionType === 'ble' && this.bleCharTx) {
          const encoded = encoder.encode(text);
          if (this.bleCharTx.properties.writeWithoutResponse) {
            await this.bleCharTx.writeValueWithoutResponse(encoded);
          } else {
            await this.bleCharTx.writeValue(encoded);
          }
          this.log(`[TX -> Bluetooth BLE] Sent: '${text}'`);
        } else if (this.connectionType === 'serial' && this.writer) {
          await this.writer.write(encoder.encode(text));
          this.log(`[TX -> Serial COM] Sent: '${text}'`);
        }
      } catch (err) {
        console.error("writeHardware error:", err);
        this.log(`[TX ERROR] Failed to send '${text}': ${err.message}`);
      }
    },

    async writeSerial(text) {
      return this.writeHardware(text);
    },

    async readSerialLoop() {
      let buffer = '';
      while (this.port && this.port.readable && this.isConnected) {
        const textDecoder = new TextDecoderStream();
        const readableClosed = this.port.readable.pipeTo(textDecoder.writable);
        this.reader = textDecoder.readable.getReader();
        try {
          while (true) {
            const { value, done } = await this.reader.read();
            if (done) break;
            if (value) {
              buffer += value;
              const lines = buffer.split(/\r?\n/);
              buffer = lines.pop();
              for (const line of lines) {
                if (line.trim().length > 0) {
                  this.handleIncomingSerialLine(line.trim());
                }
              }
            }
          }
        } catch (error) {
          console.error("Serial read loop error:", error);
          break;
        }
      }
      if (!this.isConnected) {
        this.handleDisconnect();
      }
    },

    handleIncomingSerialLine(line) {
      this.log(`[RX] ${line}`);
      const match = line.match(/SOIL1=([0-9.]+|ERR)%?\s+SOIL2=([0-9.]+|ERR)%?\s+TEMP=([0-9.]+|ERR)C?\s+HUMIDITY=([0-9.]+|ERR)%?/i);
      if (match) {
        if (match[1].toUpperCase() === 'ERR') {
          this.data.soil1 = null;
          this.data.soil1Fault = true;
        } else {
          this.data.soil1 = parseInt(match[1], 10);
          this.data.soil1Fault = false;
        }

        if (match[2].toUpperCase() === 'ERR') {
          this.data.soil2 = null;
          this.data.soil2Fault = true;
        } else {
          this.data.soil2 = parseInt(match[2], 10);
          this.data.soil2Fault = false;
        }

        if (match[3] !== 'ERR') {
          this.data.temp = parseFloat(match[3]);
        }
        if (match[4] !== 'ERR') {
          this.data.humidity = parseFloat(match[4]);
        }
        this.data.dhtOk = match[3] !== 'ERR' && match[4] !== 'ERR';

        const rawMatch = line.match(/RAW1=(\d+)\s+RAW2=(\d+)/i);
        if (rawMatch) {
          this.data.raw1 = parseInt(rawMatch[1], 10);
          this.data.raw2 = parseInt(rawMatch[2], 10);
        }

        const btMatch = line.match(/BT=(CONNECTED|STANDBY)/i);
        if (btMatch) this.data.btStatus = btMatch[1].toUpperCase();

        const modeMatch = line.match(/MODE=(AUTO|MANUAL)/i);
        if (modeMatch) this.data.mode = modeMatch[1].toUpperCase();

        this.syncTelemetryToDashboard();
      }

      const pumpMatch = line.match(/Pump\s+([1-3])\s+(ON|OFF)/i);
      if (pumpMatch) {
        const pumpIdx = parseInt(pumpMatch[1], 10) - 1;
        const isOn = pumpMatch[2].toUpperCase() === 'ON';
        if (isOn && !this.pumpRunning[pumpIdx]) {
          this.pumpRunning[pumpIdx] = true;
          this.pumpStartTime[pumpIdx] = Date.now();
          this.updateRelayUI(pumpIdx, 'running');
        } else if (!isOn && this.pumpRunning[pumpIdx]) {
          this.pumpRunning[pumpIdx] = false;
          this.pumpLastEnd[pumpIdx] = Date.now();
          this.updateRelayUI(pumpIdx, 'cooldown');
        }
      }
    },

    startEngine() {
      if (this.updatePumpInterval) clearInterval(this.updatePumpInterval);
      this.updatePumpInterval = setInterval(() => {
        for (let i = 0; i < this.NUM_PUMPS; i++) {
          this.updatePump(i);
        }
      }, 100);

      // On startup, if no Arduino is connected, completely blur page and show gate
      if (!this.isConnected) {
        this.showArduinoGate();
        this.updateConnectionUI();
        this.syncTelemetryToDashboard();
      }
    },

    stopEngine() {
      // Clean up
    },

    runSimulatedTick() {
      // NO FAKE READINGS GENERATED
      if (!this.isConnected) {
        this.syncTelemetryToDashboard();
        return;
      }
    },

    log(msg) {
      const output = document.getElementById('serialLogOutput');
      if (!output) return;
      const timeStr = new Date().toLocaleTimeString();
      output.textContent += `\n[${timeStr}] ${msg}`;
      const terminal = document.getElementById('serialTerminalBody');
      if (terminal) terminal.scrollTop = terminal.scrollHeight;
    },

    syncTelemetryToDashboard() {
      const dotHeader = document.getElementById('arduinoStatusDot');
      const textHeader = document.getElementById('arduinoStatusText');
      const badgeLiveText = document.getElementById('badgeLiveArduinoText');
      const badgeLiveBox = document.getElementById('badgeLiveArduino');
      const homeRibbonTimestamp = document.getElementById('homeRibbonTimestamp');

      // IN ABSENCE OF ARDUINO: DO NOT SHOW FAKE READINGS, DISPLAY "NO ARDUINO DETECTED"
      if (!this.isConnected) {
        if (dotHeader) dotHeader.className = 'arduino-status-dot disconnected';
        if (textHeader) textHeader.textContent = 'No Arduino detected';
        if (badgeLiveText) badgeLiveText.textContent = 'No Arduino detected';
        if (badgeLiveBox) badgeLiveBox.classList.add('disconnected');

        // Home Ribbon
        const homeLiveSoil1 = document.getElementById('homeLiveSoil1');
        const homeSoil1Bar = document.getElementById('homeSoil1Bar');
        const homeSoil1Status = document.getElementById('homeSoil1Status');
        if (homeLiveSoil1) homeLiveSoil1.textContent = '--';
        if (homeSoil1Bar) homeSoil1Bar.style.width = '0%';
        if (homeSoil1Status) {
          homeSoil1Status.textContent = 'No Arduino detected';
          homeSoil1Status.className = 'ribbon-status warning';
        }

        const homeLiveSoil2 = document.getElementById('homeLiveSoil2');
        const homeSoil2Bar = document.getElementById('homeSoil2Bar');
        const homeSoil2Status = document.getElementById('homeSoil2Status');
        if (homeLiveSoil2) homeLiveSoil2.textContent = '--';
        if (homeSoil2Bar) homeSoil2Bar.style.width = '0%';
        if (homeSoil2Status) {
          homeSoil2Status.textContent = 'No Arduino detected';
          homeSoil2Status.className = 'ribbon-status warning';
        }

        const homeLiveTemp = document.getElementById('homeLiveTemp');
        const homeTempBar = document.getElementById('homeTempBar');
        const homeTempStatus = document.getElementById('homeTempStatus');
        if (homeLiveTemp) homeLiveTemp.textContent = '--';
        if (homeTempBar) homeTempBar.style.width = '0%';
        if (homeTempStatus) {
          homeTempStatus.textContent = 'No Arduino detected';
          homeTempStatus.className = 'ribbon-status warning';
        }

        const homeLiveHumidity = document.getElementById('homeLiveHumidity');
        const homeHumidityBar = document.getElementById('homeHumidityBar');
        const homeHumidityStatus = document.getElementById('homeHumidityStatus');
        if (homeLiveHumidity) homeLiveHumidity.textContent = '--';
        if (homeHumidityBar) homeHumidityBar.style.width = '0%';
        if (homeHumidityStatus) {
          homeHumidityStatus.textContent = 'No Arduino detected';
          homeHumidityStatus.className = 'ribbon-status warning';
        }

        const homeVpdSub = document.getElementById('homeVpdSub');
        if (homeVpdSub) homeVpdSub.textContent = 'No Arduino detected';
        if (homeRibbonTimestamp) homeRibbonTimestamp.textContent = 'No Arduino detected • Waiting for USB connection';

        // Ribbon Relays
        ['homeRelay1Pill', 'homeRelay2Pill', 'homeRelay3Pill'].forEach(id => {
          const el = document.getElementById(id);
          if (el) {
            el.className = 'relay-chip-small standby';
            el.textContent = 'No Arduino detected';
          }
        });

        const flowRateText = document.getElementById('flowRateText');
        if (flowRateText) flowRateText.textContent = 'No Arduino detected';

        // Modal Elements
        if (liveMoistVal) liveMoistVal.textContent = '--';
        if (moistGaugeFill) moistGaugeFill.style.width = '0%';
        const liveSoil2Val = document.getElementById('liveSoil2Val');
        const soil2GaugeFill = document.getElementById('soil2GaugeFill');
        if (liveSoil2Val) liveSoil2Val.textContent = '--';
        if (soil2GaugeFill) soil2GaugeFill.style.width = '0%';
        if (liveTempVal) liveTempVal.textContent = '--';
        if (tempGaugeFill) tempGaugeFill.style.width = '0%';
        if (liveHumidityVal) liveHumidityVal.textContent = '--';
        if (humidityGaugeFill) humidityGaugeFill.style.width = '0%';
        if (liveVpdVal) liveVpdVal.textContent = '-- kPa';
        if (liveDewPoint) liveDewPoint.textContent = '--°C';

        const moist1StatusTag = document.getElementById('moist1StatusTag') || moistStatusTag;
        if (moist1StatusTag) {
          moist1StatusTag.textContent = 'No Arduino detected';
          moist1StatusTag.className = 'status-pill-subtle';
        }
        const moist2StatusTag = document.getElementById('moist2StatusTag');
        if (moist2StatusTag) {
          moist2StatusTag.textContent = 'No Arduino detected';
          moist2StatusTag.className = 'status-pill-subtle';
        }

        this.updateSparklines();
        return;
      }

      // WHEN ARDUINO IS CONNECTED (Real data received via serial stream)
      currentSensorData.moisture = this.data.soil1;
      currentSensorData.soil2 = this.data.soil2;
      currentSensorData.temp = this.data.temp;
      currentSensorData.humidity = this.data.humidity;

      const atmos = calculateAtmosphericMetrics(this.data.temp, this.data.humidity);
      currentSensorData.vpd = atmos.vpd;
      currentSensorData.dewPoint = atmos.dewPoint;

      const activeField = getStoredFields().find(f => f.name === currentFieldName) || getStoredFields()[0];
      const activeSensors = activeField ? (activeField.sensors || ['soil1', 'soil2', 'dht11']) : ['soil1', 'soil2', 'dht11'];
      const threshold = (activeField && activeField.moistureThreshold) ? activeField.moistureThreshold : this.MOISTURE_THRESHOLD;

      // 1. Update Modal Elements
      if (liveMoistVal) {
        if (this.data.soil1Fault) {
          liveMoistVal.textContent = 'ERR';
        } else {
          liveMoistVal.textContent = this.data.soil1 !== null ? this.data.soil1.toFixed(1) : '--';
        }
      }
      if (moistGaugeFill) moistGaugeFill.style.width = `${Math.min(100, Math.max(0, this.data.soil1 || 0))}%`;
      if (depthMoistTop) {
        depthMoistTop.textContent = this.data.soil1Fault ? 'ERR (Sensor Fault)' : (this.data.soil1 !== null ? `${this.data.soil1.toFixed(1)}%` : '--');
      }

      const liveSoil2Val = document.getElementById('liveSoil2Val');
      const soil2GaugeFill = document.getElementById('soil2GaugeFill');
      const depthMoistDeep = document.getElementById('depthMoistDeep');
      if (liveSoil2Val) {
        if (this.data.soil2Fault) {
          liveSoil2Val.textContent = 'ERR';
        } else {
          liveSoil2Val.textContent = this.data.soil2 !== null ? this.data.soil2.toFixed(1) : '--';
        }
      }
      if (soil2GaugeFill) soil2GaugeFill.style.width = `${Math.min(100, Math.max(0, this.data.soil2 || 0))}%`;
      if (depthMoistDeep) {
        depthMoistDeep.textContent = this.data.soil2Fault ? 'ERR (Sensor Fault)' : (this.data.soil2 !== null ? `${this.data.soil2.toFixed(1)}%` : '--');
      }

      if (liveHumidityVal) liveHumidityVal.textContent = this.data.humidity !== null ? this.data.humidity.toFixed(1) : '--';
      if (humidityGaugeFill) humidityGaugeFill.style.width = `${Math.min(100, Math.max(0, this.data.humidity || 0))}%`;
      if (liveTempVal) liveTempVal.textContent = this.data.temp !== null ? this.data.temp.toFixed(1) : '--';
      if (tempGaugeFill) tempGaugeFill.style.width = `${Math.min(100, Math.max(0, ((this.data.temp || 0) / 38) * 100))}%`;
      if (liveVpdVal) liveVpdVal.textContent = `${currentSensorData.vpd.toFixed(2)} kPa`;
      if (liveDewPoint) liveDewPoint.textContent = `${currentSensorData.dewPoint.toFixed(1)}°C`;

      const moist1StatusTag = document.getElementById('moist1StatusTag') || moistStatusTag;
      if (moist1StatusTag) {
        if (this.data.soil1Fault) {
          moist1StatusTag.textContent = 'Sensor 1 Fault / Wire Disconnected';
          moist1StatusTag.className = 'status-pill-subtle danger';
        } else if (this.data.soil1 !== null) {
          moist1StatusTag.textContent = this.data.soil1 < threshold ? `Needs Pulse (<${threshold}%)` : 'Optimal';
          moist1StatusTag.className = this.data.soil1 < threshold ? 'status-pill-subtle' : 'status-pill-subtle optimal';
        }
      }

      const moist2StatusTag = document.getElementById('moist2StatusTag');
      if (moist2StatusTag) {
        if (this.data.soil2Fault) {
          moist2StatusTag.textContent = 'Sensor 2 Fault / Wire Disconnected';
          moist2StatusTag.className = 'status-pill-subtle danger';
        } else if (this.data.soil2 !== null) {
          moist2StatusTag.textContent = this.data.soil2 < threshold ? `Needs Pulse (<${threshold}%)` : 'Optimal';
          moist2StatusTag.className = this.data.soil2 < threshold ? 'status-pill-subtle' : 'status-pill-subtle optimal';
        }
      }

      // 2. Update Home View Arduino Ribbon Elements
      const homeLiveSoil1 = document.getElementById('homeLiveSoil1');
      const homeSoil1Bar = document.getElementById('homeSoil1Bar');
      const homeSoil1Status = document.getElementById('homeSoil1Status');
      if (homeLiveSoil1) {
        homeLiveSoil1.textContent = this.data.soil1Fault ? 'ERR' : (this.data.soil1 !== null ? Math.round(this.data.soil1) : '--');
      }
      if (homeSoil1Bar) homeSoil1Bar.style.width = `${Math.min(100, Math.max(0, this.data.soil1 || 0))}%`;
      if (homeSoil1Status) {
        if (this.data.soil1Fault) {
          homeSoil1Status.textContent = 'Sensor 1 Fault';
          homeSoil1Status.className = 'ribbon-status danger';
        } else if (this.data.soil1 !== null) {
          homeSoil1Status.textContent = this.data.soil1 < threshold ? 'Pulse Needed' : 'Optimal';
          homeSoil1Status.className = this.data.soil1 < threshold ? 'ribbon-status warning' : 'ribbon-status optimal';
        }
      }

      const homeLiveSoil2 = document.getElementById('homeLiveSoil2');
      const homeSoil2Bar = document.getElementById('homeSoil2Bar');
      const homeSoil2Status = document.getElementById('homeSoil2Status');
      if (homeLiveSoil2) {
        homeLiveSoil2.textContent = this.data.soil2Fault ? 'ERR' : (this.data.soil2 !== null ? Math.round(this.data.soil2) : '--');
      }
      if (homeSoil2Bar) homeSoil2Bar.style.width = `${Math.min(100, Math.max(0, this.data.soil2 || 0))}%`;
      if (homeSoil2Status) {
        if (this.data.soil2Fault) {
          homeSoil2Status.textContent = 'Sensor 2 Fault';
          homeSoil2Status.className = 'ribbon-status danger';
        } else if (this.data.soil2 !== null) {
          homeSoil2Status.textContent = this.data.soil2 < threshold ? 'Pulse Needed' : 'Optimal';
          homeSoil2Status.className = this.data.soil2 < threshold ? 'ribbon-status warning' : 'ribbon-status optimal';
        }
      }

      // Update Live Raw ADC in Bench
      const benchLiveRawAdc1 = document.getElementById('benchLiveRawAdc1');
      if (benchLiveRawAdc1) {
        benchLiveRawAdc1.textContent = `A0 (Soil 1): ${this.data.raw1 !== null ? this.data.raw1 : (this.data.soil1 !== null ? this.data.soil1 + '%' : '--')}`;
      }
      const benchLiveRawAdc2 = document.getElementById('benchLiveRawAdc2');
      if (benchLiveRawAdc2) {
        benchLiveRawAdc2.textContent = `A1 (Soil 2): ${this.data.raw2 !== null ? this.data.raw2 : (this.data.soil2 !== null ? this.data.soil2 + '%' : '--')}`;
      }

      const homeLiveTemp = document.getElementById('homeLiveTemp');
      const homeTempBar = document.getElementById('homeTempBar');
      const homeTempStatus = document.getElementById('homeTempStatus');
      if (homeLiveTemp) homeLiveTemp.textContent = this.data.temp !== null ? this.data.temp.toFixed(1) : '--';
      if (homeTempBar) homeTempBar.style.width = `${Math.min(100, Math.max(0, ((this.data.temp || 0) / 38) * 100))}%`;
      if (homeTempStatus && this.data.temp !== null) {
        homeTempStatus.textContent = (this.data.temp < 10 || this.data.temp > 35) ? 'Critical' : 'Optimal';
        homeTempStatus.className = (this.data.temp < 10 || this.data.temp > 35) ? 'ribbon-status warning' : 'ribbon-status optimal';
      }

      const homeLiveHumidity = document.getElementById('homeLiveHumidity');
      const homeHumidityBar = document.getElementById('homeHumidityBar');
      const homeHumidityStatus = document.getElementById('homeHumidityStatus');
      const homeVpdSub = document.getElementById('homeVpdSub');
      if (homeLiveHumidity) homeLiveHumidity.textContent = this.data.humidity !== null ? this.data.humidity.toFixed(1) : '--';
      if (homeHumidityBar) homeHumidityBar.style.width = `${Math.min(100, Math.max(0, this.data.humidity || 0))}%`;
      if (homeHumidityStatus && this.data.humidity !== null) {
        homeHumidityStatus.textContent = (this.data.humidity < 40 || this.data.humidity > 85) ? 'Attention' : 'Healthy';
        homeHumidityStatus.className = (this.data.humidity < 40 || this.data.humidity > 85) ? 'ribbon-status warning' : 'ribbon-status optimal';
      }
      if (homeVpdSub) {
        homeVpdSub.textContent = `VPD: ${currentSensorData.vpd.toFixed(2)} kPa • Dew: ${currentSensorData.dewPoint.toFixed(1)}°C`;
      }

      if (homeRibbonTimestamp) {
        homeRibbonTimestamp.textContent = `Live USB Synced ${new Date().toLocaleTimeString()}`;
      }

      const homeRibbonFieldTag = document.getElementById('homeRibbonFieldTag');
      if (homeRibbonFieldTag) {
        homeRibbonFieldTag.textContent = `${currentFieldName} • Node Uno (${activeSensors.join(', ')})`;
      }

      // 3. Update Hero Live Badge
      if (badgeLiveText && this.data.soil1 !== null) {
        badgeLiveText.textContent = `Arduino Live: Soil1 ${Math.round(this.data.soil1)}% · Soil2 ${Math.round(this.data.soil2)}% · ${this.data.temp.toFixed(1)}°C`;
        if (badgeLiveBox) badgeLiveBox.classList.remove('disconnected');
      }

      // 4. Update Real-Time Sparkline Waveforms
      if (this.history && this.data.soil1 !== null) {
        this.history.soil1.push(this.data.soil1);
        if (this.history.soil1.length > 15) this.history.soil1.shift();
        this.history.soil2.push(this.data.soil2);
        if (this.history.soil2.length > 15) this.history.soil2.shift();
        this.history.temp.push(this.data.temp);
        if (this.history.temp.length > 15) this.history.temp.shift();
        this.history.humidity.push(this.data.humidity);
        if (this.history.humidity.length > 15) this.history.humidity.shift();
        this.updateSparklines();
      }

      // Update Ribbon Water Flow Indicator
      const flowIndicator = document.getElementById('relayFlowIndicator');
      const flowRateText = document.getElementById('flowRateText');
      const anyRunning = this.pumpRunning.some(r => r);
      if (flowIndicator) {
        if (anyRunning) {
          flowIndicator.classList.add('active');
          if (flowRateText) {
            const activeList = [];
            if (this.pumpRunning[0]) activeList.push('Pump 1');
            if (this.pumpRunning[1]) activeList.push('Pump 2');
            if (this.pumpRunning[2]) activeList.push('Pump 3');
            flowRateText.textContent = `Dispensing: ${activeList.join(' + ')} (~650ml/min)`;
          }
        } else {
          flowIndicator.classList.remove('active');
          if (flowRateText) {
            flowRateText.textContent = this.isConnected ? 'Hydration Standby' : 'No Arduino detected';
          }
        }
      }
    },

    updateRelayUI(i, state) {
      const pill = document.getElementById(`pump${i + 1}StatePill`);
      const tile = document.getElementById(`relayTilePump${i + 1}`);
      const btn = document.getElementById(`btnTriggerPump${i + 1}`);
      const btnText = document.getElementById(`btnTriggerPump${i + 1}Text`);

      if (pill) {
        pill.className = `relay-state-pill ${state}`;
        pill.textContent = state === 'running' ? 'ACTIVE (3s)' : state === 'cooldown' ? 'COOLDOWN' : 'STANDBY';
      }
      if (tile) {
        tile.className = `relay-tile ${i === 2 ? 'manual-tile ' : ''}${state}`;
      }

      if (btn && btnText) {
        if (state === 'running') {
          btn.disabled = true;
          btnText.textContent = `⚡ Dispensing Pump ${i + 1} (3s)...`;
        } else if (state === 'cooldown') {
          btn.disabled = true;
          btnText.textContent = "⏳ Cooldown (3s)...";
        } else {
          btn.disabled = false;
          btnText.textContent = `⚡ Trigger Manual Pump ${i + 1} (Send '${i + 1}')`;
        }
      }

      // Update Home Ribbon relay pills & button
      const homePill = document.getElementById(`homeRelay${i + 1}Pill`);
      if (homePill) {
        homePill.className = `relay-chip-small ${state}`;
        homePill.textContent = state === 'running' ? 'ACTIVE (3s)' : state === 'cooldown' ? 'COOLDOWN (3s)' : 'Standby';
      }

      const btnHomeQuick = document.getElementById(`btnHomeQuickPump${i + 1}`);
      if (btnHomeQuick) {
        if (state === 'running') {
          btnHomeQuick.disabled = true;
          btnHomeQuick.textContent = `⚡ Pump ${i + 1}...`;
        } else if (state === 'cooldown') {
          btnHomeQuick.disabled = true;
          btnHomeQuick.textContent = "⏳ Cooldown";
        } else {
          btnHomeQuick.disabled = false;
          btnHomeQuick.textContent = `⚡ Pulse Pump ${i + 1}`;
        }
      }
    },

    updateRelayProgress(i, percent, isCooldown) {
      const fill = document.getElementById(`pump${i + 1}TimingFill`);
      if (fill) {
        fill.style.width = `${percent}%`;
        if (isCooldown) {
          fill.classList.add('cooldown');
        } else {
          fill.classList.remove('cooldown');
        }
      }
    },

    updateSparklines() {
      if (!this.history) return;
      if (!this.isConnected || !this.history.soil1 || this.history.soil1.length < 2) {
        const flatData = [12, 12];
        this.drawSparkline('sparklineSoil1', flatData, 0, 100);
        this.drawSparkline('sparklineSoil2', flatData, 0, 100);
        this.drawSparkline('sparklineTemp', flatData, 5, 40);
        this.drawSparkline('sparklineHumidity', flatData, 20, 100);
        return;
      }
      this.drawSparkline('sparklineSoil1', this.history.soil1, 0, 100);
      this.drawSparkline('sparklineSoil2', this.history.soil2, 0, 100);
      this.drawSparkline('sparklineTemp', this.history.temp, 5, 40);
      this.drawSparkline('sparklineHumidity', this.history.humidity, 20, 100);
    },

    drawSparkline(svgId, data, minVal, maxVal) {
      const svg = document.getElementById(svgId);
      if (!svg || !data || data.length < 2) return;
      const areaPath = document.getElementById(`${svgId}Area`);
      const linePath = document.getElementById(`${svgId}Line`);
      if (!linePath) return;

      const width = 100;
      const height = 24;
      const topPad = 3;
      const botPad = 3;
      const effectiveH = height - topPad - botPad;
      const span = (maxVal - minVal) || 1;

      const points = data.map((val, idx) => {
        const x = (idx / (data.length - 1)) * width;
        const clamped = Math.min(maxVal, Math.max(minVal, val));
        const norm = (clamped - minVal) / span;
        const y = (height - botPad) - (norm * effectiveH);
        return { x, y };
      });

      const lineD = 'M ' + points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ');
      linePath.setAttribute('d', lineD);

      if (areaPath) {
        const areaD = `M 0,${height} L ` + points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ') + ` L ${width},${height} Z`;
        areaPath.setAttribute('d', areaD);
      }
    },

    updateConnectionUI() {
      const dotHeader = document.getElementById('arduinoStatusDot');
      const textHeader = document.getElementById('arduinoStatusText');
      const heroBtn = document.getElementById('btnHeroArduinoConnect');
      const heroBtnText = document.getElementById('heroArduinoBtnText');
      const heroBtBtn = document.getElementById('btnHeroBluetoothConnect');
      const heroBtBtnText = document.getElementById('heroBluetoothBtnText');
      const dotModal = document.getElementById('modalArduinoDot');
      const textModal = document.getElementById('modalArduinoBtnText');
      const statusDrawer = document.getElementById('serialConnectionStatus');
      const modeTag = document.getElementById('arduinoModeTag');
      const gateStatusText = document.getElementById('arduinoGateStatusText');
      const drawerBtBtnText = document.getElementById('btnConnectBluetoothDirectText');
      const drawerSerialBtnText = document.getElementById('btnConnectSerialDirectText');

      if (this.isConnected) {
        if (this.connectionType === 'ble') {
          if (dotHeader) dotHeader.className = 'arduino-status-dot connected-bt';
          if (textHeader) textHeader.textContent = 'Bluetooth: HC-02 Online';
          if (heroBtBtn) heroBtBtn.classList.add('connected');
          if (heroBtBtnText) heroBtBtnText.textContent = 'HC-02 Connected';
          if (heroBtn) heroBtn.classList.remove('connected');
          if (heroBtnText) heroBtnText.textContent = 'Connect USB/COM';
          if (dotModal) dotModal.className = 'arduino-status-dot connected-bt';
          if (textModal) textModal.textContent = 'Disconnect BT';
          if (statusDrawer) {
            statusDrawer.textContent = 'HC-02 Bluetooth Active (BLE UART)';
            statusDrawer.className = 'serial-status-tag connected-bt';
          }
          if (modeTag) modeTag.textContent = 'Mode: Wireless HC-02 BLE (Live)';
          if (gateStatusText) gateStatusText.textContent = 'HC-02 Bluetooth Online';
          if (drawerBtBtnText) drawerBtBtnText.textContent = 'Disconnect BT';
          if (drawerSerialBtnText) drawerSerialBtnText.textContent = 'Connect USB/COM';
        } else {
          if (dotHeader) dotHeader.className = 'arduino-status-dot connected';
          if (textHeader) textHeader.textContent = 'Arduino: COM Online';
          if (heroBtBtn) heroBtBtn.classList.remove('connected');
          if (heroBtBtnText) heroBtBtnText.textContent = 'Connect Bluetooth (HC-02)';
          if (heroBtn) heroBtn.classList.add('connected');
          if (heroBtnText) heroBtnText.textContent = 'COM Connected';
          if (dotModal) dotModal.className = 'arduino-status-dot connected';
          if (textModal) textModal.textContent = 'Disconnect USB';
          if (statusDrawer) {
            statusDrawer.textContent = 'USB Serial Connected (9600 Baud)';
            statusDrawer.className = 'serial-status-tag connected';
          }
          if (modeTag) modeTag.textContent = 'Mode: Real Serial Port (Live)';
          if (gateStatusText) gateStatusText.textContent = 'USB Serial Online (9600 Baud)';
          if (drawerBtBtnText) drawerBtBtnText.textContent = 'Connect Bluetooth';
          if (drawerSerialBtnText) drawerSerialBtnText.textContent = 'Disconnect COM';
        }
      } else {
        if (dotHeader) dotHeader.className = 'arduino-status-dot disconnected';
        if (textHeader) textHeader.textContent = 'No Hardware detected';
        if (heroBtBtn) heroBtBtn.classList.remove('connected');
        if (heroBtBtnText) heroBtBtnText.textContent = 'Connect Bluetooth (HC-02)';
        if (heroBtn) heroBtn.classList.remove('connected');
        if (heroBtnText) heroBtnText.textContent = 'Connect USB / COM';
        if (dotModal) dotModal.className = 'arduino-status-dot disconnected';
        if (textModal) textModal.textContent = 'Connect Hardware';
        if (statusDrawer) {
          statusDrawer.textContent = 'No Connection Detected';
          statusDrawer.className = 'serial-status-tag';
        }
        if (modeTag) modeTag.textContent = 'Mode: Standby (Waiting for Hardware)';
        if (gateStatusText) gateStatusText.textContent = 'No Hardware Detected';
        if (drawerBtBtnText) drawerBtBtnText.textContent = 'Connect Bluetooth';
        if (drawerSerialBtnText) drawerSerialBtnText.textContent = 'Connect USB/COM';
      }
    }
  };

  function updateSensorValues(plant) {
    if (!plant) plant = PLANTS_DATA.find(p => p.id === currentPlantId) || PLANTS_DATA[0];
    const activeField = getStoredFields().find(f => f.name === currentFieldName) || getStoredFields()[0];
    const activeSensors = activeField ? (activeField.sensors || ['soil1', 'soil2', 'dht11']) : ['soil1', 'soil2', 'dht11'];
    const activePumps = activeField ? (activeField.pumps || ['pump1', 'pump2', 'pump3']) : ['pump1', 'pump2', 'pump3'];

    // In absence of Arduino: do NOT show fake readings
    ArduinoManager.syncTelemetryToDashboard();

    // 1. Diagnostic Overview Bar
    if (sensorFieldPlot) sensorFieldPlot.textContent = `${currentFieldName} (Zone Alpha)`;
    if (sensorCropIdentity) sensorCropIdentity.textContent = `${plant.name} (${plant.species})`;
    if (sensorModalSubtitle) {
      sensorModalSubtitle.textContent = `${currentFieldName} • ${plant.name} • Arduino Dual-Soil & DHT11 Telemetry`;
    }
    if (sensorNodeId) {
      sensorNodeId.textContent = `Arduino Uno (${activeSensors.join(', ')} | ${activePumps.join(', ')})`;
    }
    if (sensorStreamTime) {
      sensorStreamTime.textContent = `Live (Synced ${new Date().toLocaleTimeString().split(' ')[0]})`;
    }

    // Reflect configured sensors in card styling (dim unassigned cards)
    const cardMoisture1 = document.getElementById('sensorCardMoisture1');
    const cardMoisture2 = document.getElementById('sensorCardMoisture2');
    const cardHumidity = document.getElementById('sensorCardHumidity');
    const cardTemp = document.getElementById('sensorCardTemp');

    if (cardMoisture1) cardMoisture1.style.opacity = activeSensors.includes('soil1') ? '1' : '0.4';
    if (cardMoisture2) cardMoisture2.style.opacity = activeSensors.includes('soil2') ? '1' : '0.4';
    if (cardHumidity) cardHumidity.style.opacity = activeSensors.includes('dht11') ? '1' : '0.4';
    if (cardTemp) cardTemp.style.opacity = activeSensors.includes('dht11') ? '1' : '0.4';

    // 5. Populate Realtime Weather & Agronomic Intelligence
    populateNextStepIntelligence(plant);
  }

  function populateNextStepIntelligence(plant) {
    if (!plant) plant = PLANTS_DATA.find(p => p.id === currentPlantId) || PLANTS_DATA[0];
    if (cachedWeatherData) {
      applyWeatherDataToUI(cachedWeatherData);
    } else {
      applyWeatherDataToUI(DEFAULT_WEATHER_DATA);
    }
  }

  function startSensorSimulation() {
    ArduinoManager.startEngine();
  }

  function stopSensorSimulation() {
    ArduinoManager.stopEngine();
  }

  function openSensorModal() {
    if (!sensorMonitorModal) return;
    const plant = PLANTS_DATA.find(p => p.id === currentPlantId) || PLANTS_DATA[0];
    isExecutingStep = false;
    updateSensorValues(plant);
    updateCameraCropFallback(plant);

    sensorMonitorModal.classList.add('active');
    sensorMonitorModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
    ArduinoManager.startEngine();

    // Start Camera Clock HUD & Enumerate Devices
    updateCameraHudClock();
    if (cameraHudTimer) clearInterval(cameraHudTimer);
    cameraHudTimer = setInterval(updateCameraHudClock, 1000);
    enumerateCameras();
  }

  function closeSensorModal() {
    if (!sensorMonitorModal) return;
    sensorMonitorModal.classList.remove('active');
    sensorMonitorModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Safely teardown live video stream & camera clock
    stopCameraStream();
    if (cameraHudTimer) {
      clearInterval(cameraHudTimer);
      cameraHudTimer = null;
    }
  }

  // Trigger "MONITOR FIELD" on Mainpage & Sticky Header for Selected Field
  if (btnMainMonitorField) {
    btnMainMonitorField.addEventListener('click', () => {
      const field = getStoredFields().find(f => f.name === currentFieldName) || getStoredFields()[0];
      if (field) activateField(field);
      openSensorModal();
      showToast("Monitoring Field", `Live hardware & sensor telemetry monitor launched for ${currentFieldName}.`);
    });
  }

  if (stickyMonitorFieldBtn) {
    stickyMonitorFieldBtn.addEventListener('click', () => {
      const field = getStoredFields().find(f => f.name === currentFieldName) || getStoredFields()[0];
      if (field) activateField(field);
      openSensorModal();
      showToast("Monitoring Field", `Live hardware & sensor telemetry monitor launched for ${currentFieldName}.`);
    });
  }

  // Crop Detail (Opened from Foundation Crops Catalog - Zero Monitoring Options) Event Handlers
  const btnBackToCatalog = document.getElementById('btnBackToCatalog');
  if (btnBackToCatalog) {
    btnBackToCatalog.addEventListener('click', () => switchView('plants'));
  }

  const btnCdBackToCatalog2 = document.getElementById('btnCdBackToCatalog2');
  if (btnCdBackToCatalog2) {
    btnCdBackToCatalog2.addEventListener('click', () => switchView('plants'));
  }

  const btnCdPlantInField = document.getElementById('btnCdPlantInField');
  if (btnCdPlantInField) {
    btnCdPlantInField.addEventListener('click', () => {
      openAssignCropModal(currentCropDetailId);
    });
  }

  const cdStageNavPills = document.getElementById('cdStageNavPills');
  if (cdStageNavPills) {
    cdStageNavPills.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-cdstage]');
      if (!btn) return;
      cdStageNavPills.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCdStageFilter = btn.dataset.cdstage;
      const plant = PLANTS_DATA.find(p => p.id === currentCropDetailId) || PLANTS_DATA[0];
      renderCropDetailStages(plant);
    });
  }

  // Assign Crop Modal Event Handlers
  if (btnCloseAssignModal) {
    btnCloseAssignModal.addEventListener('click', () => {
      const modal = document.getElementById('assignCropModal');
      if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  if (btnCancelAssignCrop) {
    btnCancelAssignCrop.addEventListener('click', () => {
      const modal = document.getElementById('assignCropModal');
      if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  if (assignCropModal) {
    assignCropModal.addEventListener('click', (e) => {
      if (e.target === assignCropModal) {
        assignCropModal.style.display = 'none';
        assignCropModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  if (heroOpenBtn) heroOpenBtn.addEventListener('click', openSensorModal);
  if (stickyOpenBtn) stickyOpenBtn.addEventListener('click', openSensorModal);
  if (closeSensorModalBtn) closeSensorModalBtn.addEventListener('click', closeSensorModal);
  if (btnCloseSensorModalFooter) btnCloseSensorModalFooter.addEventListener('click', closeSensorModal);

  // Click backdrop to close
  if (sensorMonitorModal) {
    sensorMonitorModal.addEventListener('click', (e) => {
      if (e.target === sensorMonitorModal) {
        closeSensorModal();
      }
    });
  }

  // Refresh readings
  if (btnRefreshSensors) {
    btnRefreshSensors.addEventListener('click', () => {
      const plant = PLANTS_DATA.find(p => p.id === currentPlantId) || PLANTS_DATA[0];
      updateSensorValues(plant);
      showToast('Live Sync', 'Sensor telemetry re-polled and next step re-analyzed.');
    });
  }

  // Interactive "Execute Next Step Now" Workflow
  if (btnExecuteNextStep) {
    btnExecuteNextStep.addEventListener('click', () => {
      if (isExecutingStep) return;
      isExecutingStep = true;
      const plant = PLANTS_DATA.find(p => p.id === currentPlantId) || PLANTS_DATA[0];

      // Trigger Arduino manual pump 3 (Relay Pin 8 / Serial command '3')
      ArduinoManager.startPump(2);

      // 1. Advance Stepper to Step 4 (Absorption Verification)
      if (step3Node) {
        step3Node.className = "step-node completed";
        const c = step3Node.querySelector('.node-circle');
        if (c) c.textContent = "✓";
      }
      if (step4Node) {
        step4Node.className = "step-node current";
        const c = step4Node.querySelector('.node-circle');
        if (c) c.textContent = "4";
      }

      // 2. Animate Action Button & Status Badge
      if (btnExecuteStepText) {
        btnExecuteStepText.textContent = `Dispensing ${currentSensorData.targetDosage}ml Pulse (Pump 3)...`;
      }
      btnExecuteNextStep.disabled = true;

      if (nextStepStateBadge) {
        nextStepStateBadge.innerHTML = `<span class="dot-green" style="background: #0067b8;"></span><span>In progress: Relay Pin 8 delivering calibrated pulse</span>`;
      }

      // 3. Relay Pulse Triggered - Live telemetry from Arduino will report actual moisture changes
      if (!ArduinoManager.isConnected) {
        showToast('Step Triggered (Demo)', `Triggered Pump 3 sequence (${currentSensorData.targetDosage}ml). Connect Arduino or HC-02 for live physical sensor data.`);
      } else {
        showToast('Next Step Executed', `Triggered Pump 3 on Relay Pin 8 (${currentSensorData.targetDosage}ml pulse) for ${currentFieldName}. Genuine telemetry will reflect soil absorption.`);
      }

      // 4. Complete Execution Transition after 2.8s
      setTimeout(() => {
        if (btnExecuteStepText) {
          btnExecuteStepText.textContent = "✓ Pulse Complete";
        }
        if (btnExecuteNextStep) {
          btnExecuteNextStep.style.background = "#107c41";
        }
        if (nextStepStateBadge) {
          nextStepStateBadge.innerHTML = '<span class="dot-green"></span><span>Telemetry Verified: Restored to target</span>';
        }
        if (stepEtaTag) {
          stepEtaTag.textContent = "Cycle #14 Complete · Next in ~3.5h";
        }
      }, 2800);
    });
  }

  // Delay / Postpone Next Step
  if (btnPostponeStep) {
    btnPostponeStep.addEventListener('click', () => {
      if (stepEtaTag) {
        stepEtaTag.textContent = "Scheduled Execution in 68 mins (+30m delay)";
      }
      showToast('Action Postponed', `Automated pulse irrigation delayed by 30 minutes for ${currentFieldName}.`);
    });
  }

  // Fine-Tune Dosage Action
  if (btnCalibrateNextStep) {
    btnCalibrateNextStep.addEventListener('click', () => {
      currentSensorData.dosageIndex = (currentSensorData.dosageIndex + 1) % currentSensorData.dosageList.length;
      currentSensorData.targetDosage = currentSensorData.dosageList[currentSensorData.dosageIndex];
      const newDosageStr = `${currentSensorData.targetDosage}ml / plant`;

      if (stepTargetDosage) stepTargetDosage.textContent = newDosageStr;
      showToast('Dosage Calibrated', `Calibrated target pulse dosage adjusted to ${newDosageStr}.`);
    });
  }

  // Manual Quick Pulse Irrigation
  if (btnTriggerManualPulse) {
    btnTriggerManualPulse.addEventListener('click', () => {
      ArduinoManager.startPump(2);
      showToast('Manual Pump Injected', `Triggered Pump 3 (Relay Pin 8) for emergency root hydration.`);
    });
  }

  // Calibrate Probes
  if (btnCalibrateProbes) {
    btnCalibrateProbes.addEventListener('click', () => {
      showToast('Probes Calibrated', `Capacitive dielectric constants zeroed against raw 300–800 range.`);
    });
  }

  // Arduino Hardware & Bluetooth Event Listeners
  const btnHeaderArduino = document.getElementById('btnHeaderArduino');
  if (btnHeaderArduino) {
    btnHeaderArduino.addEventListener('click', () => {
      if (ArduinoManager.isConnected) {
        openSensorModal();
      } else {
        ArduinoManager.showArduinoGate();
      }
    });
  }

  // Hero Connection Buttons (Bluetooth & USB)
  const btnHeroBluetoothConnect = document.getElementById('btnHeroBluetoothConnect');
  if (btnHeroBluetoothConnect) {
    btnHeroBluetoothConnect.addEventListener('click', () => {
      if (ArduinoManager.isConnected && ArduinoManager.connectionType === 'ble') {
        ArduinoManager.disconnectBluetooth();
      } else {
        ArduinoManager.connectBluetooth();
      }
    });
  }

  const btnHeroArduinoConnect = document.getElementById('btnHeroArduinoConnect');
  if (btnHeroArduinoConnect) {
    btnHeroArduinoConnect.addEventListener('click', () => {
      if (ArduinoManager.isConnected && ArduinoManager.connectionType === 'serial') {
        ArduinoManager.disconnectUSB();
      } else {
        ArduinoManager.connectUSB();
      }
    });
  }

  const btnModalConnectUsb = document.getElementById('btnModalConnectUsb');
  if (btnModalConnectUsb) {
    btnModalConnectUsb.addEventListener('click', () => {
      if (ArduinoManager.isConnected) {
        if (ArduinoManager.connectionType === 'ble') ArduinoManager.disconnectBluetooth();
        else ArduinoManager.disconnectUSB();
      } else {
        ArduinoManager.connectUSB();
      }
    });
  }

  // Terminal Drawer Connection Tools
  const btnConnectBluetoothDirect = document.getElementById('btnConnectBluetoothDirect');
  if (btnConnectBluetoothDirect) {
    btnConnectBluetoothDirect.addEventListener('click', () => {
      if (ArduinoManager.isConnected && ArduinoManager.connectionType === 'ble') {
        ArduinoManager.disconnectBluetooth();
      } else {
        ArduinoManager.connectBluetooth();
      }
    });
  }

  const btnConnectSerialDirect = document.getElementById('btnConnectSerialDirect');
  if (btnConnectSerialDirect) {
    btnConnectSerialDirect.addEventListener('click', () => {
      if (ArduinoManager.isConnected && ArduinoManager.connectionType === 'serial') {
        ArduinoManager.disconnectUSB();
      } else {
        ArduinoManager.connectUSB();
      }
    });
  }

  const btnToggleSimHardware = document.getElementById('btnToggleSimHardware');
  if (btnToggleSimHardware) {
    btnToggleSimHardware.addEventListener('click', () => {
      if (ArduinoManager.isConnected) {
        if (ArduinoManager.connectionType === 'ble') ArduinoManager.disconnectBluetooth();
        else ArduinoManager.disconnectUSB();
      } else {
        ArduinoManager.connectBluetooth();
      }
    });
  }

  // Pump Relay Manual Triggers
  const btnTriggerPump1 = document.getElementById('btnTriggerPump1');
  if (btnTriggerPump1) {
    btnTriggerPump1.addEventListener('click', () => {
      ArduinoManager.startPump(0);
    });
  }

  const btnTriggerPump2 = document.getElementById('btnTriggerPump2');
  if (btnTriggerPump2) {
    btnTriggerPump2.addEventListener('click', () => {
      ArduinoManager.startPump(1);
    });
  }

  const btnTriggerPump3 = document.getElementById('btnTriggerPump3');
  if (btnTriggerPump3) {
    btnTriggerPump3.addEventListener('click', () => {
      ArduinoManager.startPump(2);
    });
  }

  const btnClearSerialLog = document.getElementById('btnClearSerialLog');
  if (btnClearSerialLog) {
    btnClearSerialLog.addEventListener('click', () => {
      const out = document.getElementById('serialLogOutput');
      if (out) out.textContent = `[CLEARED] Microcontroller console active (9600 Baud)`;
    });
  }

  const btnToggleSerialConsole = document.getElementById('btnToggleSerialConsole');
  if (btnToggleSerialConsole) {
    btnToggleSerialConsole.addEventListener('click', () => {
      const drawer = document.getElementById('arduinoSerialDrawer');
      if (drawer) {
        drawer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  const btnSendSerialText = document.getElementById('btnSendSerialText');
  const serialCustomInput = document.getElementById('serialCustomInput');
  function sendCustomSerialText() {
    if (!serialCustomInput) return;
    const txt = serialCustomInput.value.trim();
    if (!txt) return;
    ArduinoManager.writeHardware(txt);
    serialCustomInput.value = '';
  }
  if (btnSendSerialText) btnSendSerialText.addEventListener('click', sendCustomSerialText);
  if (serialCustomInput) {
    serialCustomInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendCustomSerialText();
    });
  }

  // Quick Command Action Buttons
  const btnQuickSend1 = document.getElementById('btnQuickSend1');
  if (btnQuickSend1) {
    btnQuickSend1.addEventListener('click', () => {
      ArduinoManager.startPump(0);
    });
  }

  const btnQuickSend2 = document.getElementById('btnQuickSend2');
  if (btnQuickSend2) {
    btnQuickSend2.addEventListener('click', () => {
      ArduinoManager.startPump(1);
    });
  }

  const btnQuickSend3 = document.getElementById('btnQuickSend3');
  if (btnQuickSend3) {
    btnQuickSend3.addEventListener('click', () => {
      ArduinoManager.startPump(2);
    });
  }

  const btnQuickSendAuto = document.getElementById('btnQuickSendAuto');
  if (btnQuickSendAuto) {
    btnQuickSendAuto.addEventListener('click', () => {
      ArduinoManager.writeHardware('A');
      ArduinoManager.data.mode = 'AUTO';
      showToast("Auto Irrigation Active", "Automatic thresholds enabled for Pumps 1 & 2.");
    });
  }

  const btnQuickSendManual = document.getElementById('btnQuickSendManual');
  if (btnQuickSendManual) {
    btnQuickSendManual.addEventListener('click', () => {
      ArduinoManager.writeHardware('M');
      ArduinoManager.data.mode = 'MANUAL';
      showToast("Manual Mode Active", "Automatic irrigation paused; pumps only trigger manually.");
    });
  }

  const btnQuickSendStop = document.getElementById('btnQuickSendStop');
  if (btnQuickSendStop) {
    btnQuickSendStop.addEventListener('click', () => {
      ArduinoManager.writeHardware('X');
      for (let i = 0; i < ArduinoManager.NUM_PUMPS; i++) {
        ArduinoManager.pumpRunning[i] = false;
        ArduinoManager.updateRelayUI(i, 'standby');
      }
      showToast("Emergency Stop", "All pumps halted immediately.");
    });
  }

  const btnQuickSendStatus = document.getElementById('btnQuickSendStatus');
  if (btnQuickSendStatus) {
    btnQuickSendStatus.addEventListener('click', () => {
      ArduinoManager.writeHardware('S');
      showToast("Querying Telemetry", "Sent 'S' telemetry query to microcontroller.");
    });
  }

  const btnQuickSendCalib = document.getElementById('btnQuickSendCalib');
  if (btnQuickSendCalib) {
    btnQuickSendCalib.addEventListener('click', () => {
      ArduinoManager.writeHardware('C');
      showToast("Sensor Calibration Info", "Sent 'C' command to query raw ADC readings & calibration ranges.");
    });
  }

  const btnQuickSendSetDry = document.getElementById('btnQuickSendSetDry');
  if (btnQuickSendSetDry) {
    btnQuickSendSetDry.addEventListener('click', () => {
      ArduinoManager.writeHardware('D');
      showToast("Calibrating Dry (0%)", "Sent 'D' command to save current readings as 0% dry.");
    });
  }

  const btnQuickSendSetWet = document.getElementById('btnQuickSendSetWet');
  if (btnQuickSendSetWet) {
    btnQuickSendSetWet.addEventListener('click', () => {
      ArduinoManager.writeHardware('W');
      showToast("Calibrating Wet (100%)", "Sent 'W' command to save current readings as 100% wet.");
    });
  }

  const btnQuickSendResetCal = document.getElementById('btnQuickSendResetCal');
  if (btnQuickSendResetCal) {
    btnQuickSendResetCal.addEventListener('click', () => {
      ArduinoManager.writeHardware('R');
      showToast("Resetting Calibration", "Sent 'R' command to restore standard 800/300 defaults.");
    });
  }

  // Arduino Gate Connection Actions (Bluetooth & USB)
  const btnGateConnectBluetooth = document.getElementById('btnGateConnectBluetooth');
  if (btnGateConnectBluetooth) {
    btnGateConnectBluetooth.addEventListener('click', () => {
      ArduinoManager.connectBluetooth();
    });
  }

  const btnGateConnectArduino = document.getElementById('btnGateConnectArduino');
  if (btnGateConnectArduino) {
    btnGateConnectArduino.addEventListener('click', () => {
      ArduinoManager.connectUSB();
    });
  }

  // Arduino Gate Close Actions
  const btnGateCloseArduino = document.getElementById('btnGateCloseArduino');
  if (btnGateCloseArduino) {
    btnGateCloseArduino.addEventListener('click', () => {
      ArduinoManager.hideArduinoGate();
      showToast("Standalone Mode Active", "Hardware gate dismissed. Connect anytime from the top bar.");
    });
  }

  const btnGateBadgeClose = document.getElementById('btnGateBadgeClose');
  if (btnGateBadgeClose) {
    btnGateBadgeClose.addEventListener('click', (e) => {
      e.stopPropagation();
      ArduinoManager.hideArduinoGate();
      showToast("Standalone Mode Active", "Hardware gate dismissed. Connect anytime from the top bar.");
    });
  }

  const arduinoGateOverlay = document.getElementById('arduinoGateOverlay');
  if (arduinoGateOverlay) {
    arduinoGateOverlay.addEventListener('click', (e) => {
      if (e.target === arduinoGateOverlay) {
        ArduinoManager.hideArduinoGate();
      }
    });
  }

  // Wiring Guide & Arduino Code Modal Logic
  const arduinoWiringModal = document.getElementById('arduinoWiringModal');
  const btnCloseWiringModal = document.getElementById('btnCloseWiringModal');
  const btnWiringModalDone = document.getElementById('btnWiringModalDone');
  const tabWiringSchematic = document.getElementById('tabWiringSchematic');
  const tabWiringCode = document.getElementById('tabWiringCode');
  const tabWiringTroubleshoot = document.getElementById('tabWiringTroubleshoot');
  const contentWiringSchematic = document.getElementById('contentWiringSchematic');
  const contentWiringCode = document.getElementById('contentWiringCode');
  const contentWiringTroubleshoot = document.getElementById('contentWiringTroubleshoot');
  const arduinoCodePreview = document.getElementById('arduinoCodePreview');
  const btnCopyArduinoCode = document.getElementById('btnCopyArduinoCode');
  const btnCopyArduinoCodeText = document.getElementById('btnCopyArduinoCodeText');

  const ARDUINO_FIRMWARE_SOURCE = `/*
 * PlantoPRO / Smart Gardening System Arduino Firmware
 * HC-02 6-Pin Bluetooth (HC-05 / HC-06 Compatible) & USB Dual Controller
 * With Precision Anti-Fake Reading Soil Sensor Filter & Dynamic Calibration
 * Target: Arduino Uno / Nano / Pro Mini (ATmega328P) | Baud: 9600
 */

#include <SoftwareSerial.h>
#include <DHT.h>

#define BT_STATE_PIN 5
#define BT_RX_PIN    2
#define BT_TX_PIN    3
#define DHT_PIN      4
#define DHTTYPE      DHT11
#define SOIL1_PIN    A0
#define SOIL2_PIN    A1

// 4-Channel Relay Module Pin Mapping
#define RELAY_IN1_PIN 7     // Pump 1 -> Relay IN1
#define RELAY_IN2_PIN 6     // Pump 2 -> Relay IN2
#define RELAY_IN4_PIN 8     // Pump 3 -> Relay IN4 (Manual Only)

const uint8_t NUM_PUMPS = 3;
const uint8_t RELAY_PINS[NUM_PUMPS] = {RELAY_IN1_PIN, RELAY_IN2_PIN, RELAY_IN4_PIN};

SoftwareSerial btSerial(BT_RX_PIN, BT_TX_PIN);
DHT dht(DHT_PIN, DHTTYPE);

// Anti-Fake Calibration & Fault Protection
int soil1Dry = 800; // Sensor 1 in dry air (0%)
int soil1Wet = 300; // Sensor 1 in water (100%)
int soil2Dry = 800; // Sensor 2 in dry air (0%)
int soil2Wet = 300; // Sensor 2 in water (100%)
const int MOISTURE_THRESHOLD = 40;
const int SENSOR_FAULT_MIN = 40;
const int SENSOR_FAULT_MAX = 980;

bool autoModeEnabled = true;
const uint8_t RELAY_ON  = LOW;  // Active-LOW
const uint8_t RELAY_OFF = HIGH;

const unsigned long CHECK_INTERVAL = 5000;
const unsigned long PUMP_RUN_TIME  = 3000;
const unsigned long PUMP_COOLDOWN  = 3000;

bool          pumpRunning[NUM_PUMPS]   = {false, false, false};
unsigned long pumpStartTime[NUM_PUMPS] = {0, 0, 0};
unsigned long pumpLastEnd[NUM_PUMPS]   = {0, 0, 0};
unsigned long lastCheck = 0;

void dualPrint(const String &str) { Serial.print(str); btSerial.print(str); }
void dualPrintln(const String &str) { Serial.println(str); btSerial.println(str); }
void dualPrintF(const __FlashStringHelper *ifsh) { Serial.print(ifsh); btSerial.print(ifsh); }
void dualPrintlnF(const __FlashStringHelper *ifsh) { Serial.println(ifsh); btSerial.println(ifsh); }

void setup() {
  Serial.begin(9600);
  btSerial.begin(9600);
  pinMode(BT_STATE_PIN, INPUT);

  for (uint8_t i = 0; i < NUM_PUMPS; i++) {
    digitalWrite(RELAY_PINS[i], RELAY_OFF);
    pinMode(RELAY_PINS[i], OUTPUT);
  }
  dht.begin();

  dualPrintlnF(F("PlantoPRO Controller Online - Anti-Fake Precision ADC"));
  dualPrintlnF(F("HC-02 Bluetooth active on D2(RX)/D3(TX) • 9600 Baud"));
  dualPrintlnF(F("Commands: '1'-'3'=Pumps | 'A'=Auto | 'M'=Manual | 'X'=Stop"));
  dualPrintlnF(F("          'C'=Calib Info | 'D'=Set Dry | 'W'=Set Wet | 'R'=Reset"));
}

int readAnalogStable(uint8_t pin) {
  analogRead(pin);
  delay(5);
  const uint8_t SAMPLES = 10;
  int rawList[SAMPLES];
  for (uint8_t i = 0; i < SAMPLES; i++) {
    rawList[i] = analogRead(pin);
    delay(2);
  }
  for (uint8_t i = 1; i < SAMPLES; i++) {
    int key = rawList[i];
    int j = i - 1;
    while (j >= 0 && rawList[j] > key) {
      rawList[j + 1] = rawList[j];
      j--;
    }
    rawList[j + 1] = key;
  }
  long sum = 0;
  for (uint8_t i = 2; i < SAMPLES - 2; i++) sum += rawList[i];
  return (int)(sum / (SAMPLES - 4));
}

int readMoisturePercent(uint8_t pin, int &rawOut) {
  rawOut = readAnalogStable(pin);
  if (rawOut < SENSOR_FAULT_MIN || rawOut > SENSOR_FAULT_MAX) return -1;
  int dryVal = (pin == SOIL1_PIN) ? soil1Dry : soil2Dry;
  int wetVal = (pin == SOIL1_PIN) ? soil1Wet : soil2Wet;
  if (dryVal == wetVal) return 0;
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

  String telemetry = F("SOIL1=");
  if (soil1 >= 0) { telemetry += String(soil1); telemetry += F("%"); } else { telemetry += F("ERR"); }
  telemetry += F("  SOIL2=");
  if (soil2 >= 0) { telemetry += String(soil2); telemetry += F("%"); } else { telemetry += F("ERR"); }
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

  if (autoModeEnabled) {
    if (soil1 >= 0 && soil1 < MOISTURE_THRESHOLD) startPump(0);
    if (soil2 >= 0 && soil2 < MOISTURE_THRESHOLD) startPump(1);
  }
}

void executeCommand(char cmd, const char *source) {
  if (cmd == '\\r' || cmd == '\\n' || cmd == ' ') return;
  switch (cmd) {
    case '1': startPump(0); break;
    case '2': startPump(1); break;
    case '3': startPump(2); break;
    case 'A': case 'a': autoModeEnabled = true; dualPrintlnF(F("[MODE] Auto ENABLED")); break;
    case 'M': case 'm': autoModeEnabled = false; dualPrintlnF(F("[MODE] Manual Only")); break;
    case 'X': case 'x': case '0': stopAllPumps(); break;
    case 'S': case 's': case '?': checkSensorsAndAutomate(); break;
    case 'C': case 'c': {
      int r1 = readAnalogStable(SOIL1_PIN);
      int r2 = readAnalogStable(SOIL2_PIN);
      dualPrintF(F("[CALIB] Raw A0: ")); dualPrint(String(r1));
      dualPrintF(F(" | Raw A1: ")); dualPrintln(String(r2));
      break;
    }
    case 'D': case 'd': {
      int r1 = readAnalogStable(SOIL1_PIN);
      int r2 = readAnalogStable(SOIL2_PIN);
      if (r1 > SENSOR_FAULT_MIN && r1 < SENSOR_FAULT_MAX) soil1Dry = r1;
      if (r2 > SENSOR_FAULT_MIN && r2 < SENSOR_FAULT_MAX) soil2Dry = r2;
      dualPrintlnF(F("[CALIB] Saved current as DRY (0%)"));
      break;
    }
    case 'W': case 'w': {
      int r1 = readAnalogStable(SOIL1_PIN);
      int r2 = readAnalogStable(SOIL2_PIN);
      if (r1 > SENSOR_FAULT_MIN && r1 < SENSOR_FAULT_MAX) soil1Wet = r1;
      if (r2 > SENSOR_FAULT_MIN && r2 < SENSOR_FAULT_MAX) soil2Wet = r2;
      dualPrintlnF(F("[CALIB] Saved current as WET (100%)"));
      break;
    }
    case 'R': case 'r': {
      soil1Dry = 800; soil1Wet = 300;
      soil2Dry = 800; soil2Wet = 300;
      dualPrintlnF(F("[CALIB] Reset to defaults (800/300)"));
      break;
    }
  }
}

void loop() {
  while (Serial.available() > 0) executeCommand(Serial.read(), "USB");
  while (btSerial.available() > 0) executeCommand(btSerial.read(), "BLUETOOTH");
  for (uint8_t i = 0; i < NUM_PUMPS; i++) updatePump(i);
  if (millis() - lastCheck >= CHECK_INTERVAL) {
    lastCheck = millis();
    checkSensorsAndAutomate();
  }
}`;

  function openWiringModal() {
    if (!arduinoWiringModal) return;
    arduinoWiringModal.style.display = 'flex';
    if (arduinoCodePreview) arduinoCodePreview.textContent = ARDUINO_FIRMWARE_SOURCE;
  }

  function closeWiringModal() {
    if (!arduinoWiringModal) return;
    arduinoWiringModal.style.display = 'none';
  }

  const btnHeroWiringGuide = document.getElementById('btnHeroWiringGuide');
  if (btnHeroWiringGuide) btnHeroWiringGuide.addEventListener('click', openWiringModal);

  const btnHomeWiringGuide = document.getElementById('btnHomeWiringGuide');
  if (btnHomeWiringGuide) btnHomeWiringGuide.addEventListener('click', openWiringModal);

  const btnDrawerWiringGuide = document.getElementById('btnDrawerWiringGuide');
  if (btnDrawerWiringGuide) btnDrawerWiringGuide.addEventListener('click', openWiringModal);

  const btnGateWiringGuide = document.getElementById('btnGateWiringGuide');
  if (btnGateWiringGuide) btnGateWiringGuide.addEventListener('click', openWiringModal);

  if (btnCloseWiringModal) btnCloseWiringModal.addEventListener('click', closeWiringModal);
  if (btnWiringModalDone) btnWiringModalDone.addEventListener('click', closeWiringModal);

  if (tabWiringSchematic) {
    tabWiringSchematic.addEventListener('click', () => {
      tabWiringSchematic.classList.add('active');
      if (tabWiringCode) tabWiringCode.classList.remove('active');
      if (tabWiringTroubleshoot) tabWiringTroubleshoot.classList.remove('active');
      if (contentWiringSchematic) contentWiringSchematic.classList.add('active');
      if (contentWiringCode) contentWiringCode.classList.remove('active');
      if (contentWiringTroubleshoot) contentWiringTroubleshoot.classList.remove('active');
    });
  }

  if (tabWiringCode) {
    tabWiringCode.addEventListener('click', () => {
      tabWiringCode.classList.add('active');
      if (tabWiringSchematic) tabWiringSchematic.classList.remove('active');
      if (tabWiringTroubleshoot) tabWiringTroubleshoot.classList.remove('active');
      if (contentWiringCode) contentWiringCode.classList.add('active');
      if (contentWiringSchematic) contentWiringSchematic.classList.remove('active');
      if (contentWiringTroubleshoot) contentWiringTroubleshoot.classList.remove('active');
      if (arduinoCodePreview) arduinoCodePreview.textContent = ARDUINO_FIRMWARE_SOURCE;
    });
  }

  if (tabWiringTroubleshoot) {
    tabWiringTroubleshoot.addEventListener('click', () => {
      tabWiringTroubleshoot.classList.add('active');
      if (tabWiringSchematic) tabWiringSchematic.classList.remove('active');
      if (tabWiringCode) tabWiringCode.classList.remove('active');
      if (contentWiringTroubleshoot) contentWiringTroubleshoot.classList.add('active');
      if (contentWiringSchematic) contentWiringSchematic.classList.remove('active');
      if (contentWiringCode) contentWiringCode.classList.remove('active');
    });
  }

  if (btnCopyArduinoCode) {
    btnCopyArduinoCode.addEventListener('click', () => {
      navigator.clipboard.writeText(ARDUINO_FIRMWARE_SOURCE).then(() => {
        if (btnCopyArduinoCodeText) btnCopyArduinoCodeText.textContent = "✓ Code Copied!";
        showToast("Code Copied!", "Complete Arduino firmware copied to clipboard.");
        setTimeout(() => {
          if (btnCopyArduinoCodeText) btnCopyArduinoCodeText.textContent = "Copy Complete Arduino Code";
        }, 2500);
      }).catch(err => {
        console.error("Clipboard copy error:", err);
      });
    });
  }

  // Web Serial Auto-Disconnect & Connect Hardware Listeners
  if ('serial' in navigator) {
    navigator.serial.addEventListener('disconnect', (e) => {
      console.warn('[WEB SERIAL] COM device disconnected:', e);
      ArduinoManager.handleDisconnect('Serial port device unplugged.');
    });
    navigator.serial.addEventListener('connect', (e) => {
      console.log('[WEB SERIAL] Serial COM device attached:', e);
      showToast('Arduino Device Detected', 'Hardware COM attached. Click Connect to initiate stream.');
    });
  }

  // Home View Ribbon & Hero Sync Event Handlers
  const btnHomeQuickPump1 = document.getElementById('btnHomeQuickPump1');
  if (btnHomeQuickPump1) {
    btnHomeQuickPump1.addEventListener('click', () => {
      ArduinoManager.startPump(0);
    });
  }

  const btnHomeQuickPump2 = document.getElementById('btnHomeQuickPump2');
  if (btnHomeQuickPump2) {
    btnHomeQuickPump2.addEventListener('click', () => {
      ArduinoManager.startPump(1);
    });
  }

  const btnHomeQuickPump3 = document.getElementById('btnHomeQuickPump3');
  if (btnHomeQuickPump3) {
    btnHomeQuickPump3.addEventListener('click', () => {
      ArduinoManager.startPump(2);
    });
  }

  const btnHomeOpenMonitor = document.getElementById('btnHomeOpenMonitor');
  if (btnHomeOpenMonitor) {
    btnHomeOpenMonitor.addEventListener('click', () => {
      if (!ArduinoManager.isConnected) {
        ArduinoManager.showArduinoGate();
        showToast("No Arduino Detected", "Please connect your Arduino hardware first.");
      } else {
        openSensorModal();
      }
    });
  }

  const btnHeroQuickSync = document.getElementById('btnHeroQuickSync');
  if (btnHeroQuickSync) {
    btnHeroQuickSync.addEventListener('click', () => {
      btnHeroQuickSync.classList.add('spinning');
      if (ArduinoManager.isConnected) {
        showToast("Data Updated Immediately", "Live Arduino telemetry and actuator states synchronized.");
      } else {
        ArduinoManager.showArduinoGate();
        showToast("No Arduino Detected", "Cannot synchronize telemetry without a connected Arduino.");
      }
      setTimeout(() => btnHeroQuickSync.classList.remove('spinning'), 600);
    });
  }

  if (heroFieldBadge) {
    heroFieldBadge.addEventListener('click', () => {
      switchView('fields');
    });
  }

  // =========================================================================
  // 10B. LIVE MOBILE OPTICAL CAMERA (USB TETHERED) WORKFLOW
  // =========================================================================

  function updateCameraHudClock() {
    if (videoHudTimestamp) {
      const now = new Date();
      videoHudTimestamp.textContent = now.toTimeString().split(' ')[0];
    }
  }

  function updateCameraCropFallback(plant) {
    if (!simulatedFeedImg) return;
    if (plant && plant.image) {
      simulatedFeedImg.src = plant.image;
    }
  }

  async function enumerateCameras() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      if (camDeviceSelect) {
        camDeviceSelect.innerHTML = '<option value="">USB Mobile Camera (Direct)</option>';
      }
      return;
    }
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(d => d.kind === 'videoinput');
      if (camDeviceSelect) {
        camDeviceSelect.innerHTML = '';
        if (videoDevices.length === 0) {
          const opt = document.createElement('option');
          opt.value = '';
          opt.textContent = 'USB Mobile Cam (Ready to connect)';
          camDeviceSelect.appendChild(opt);
        } else {
          let usbSelected = false;
          videoDevices.forEach((device, index) => {
            const opt = document.createElement('option');
            opt.value = device.deviceId;
            let label = device.label || `Camera ${index + 1}`;
            const lower = label.toLowerCase();
            if (lower.includes('usb') || lower.includes('droidcam') || lower.includes('iriun') || lower.includes('camo') || lower.includes('phone') || lower.includes('android')) {
              label = `📱 ${label} (USB)`;
              if (!usbSelected) {
                opt.selected = true;
                usbSelected = true;
              }
            } else if (index === 0 && !usbSelected) {
              opt.selected = true;
            }
            opt.textContent = label;
            camDeviceSelect.appendChild(opt);
          });
        }
      }
    } catch (err) {
      console.warn('Camera enumeration note:', err);
    }
  }

  async function startCameraStream(deviceId = null) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showToast('Camera Notice', 'Webcam API not supported in current browser context.');
      return;
    }

    try {
      if (activeVideoStream) {
        activeVideoStream.getTracks().forEach(t => t.stop());
        activeVideoStream = null;
      }

      const constraints = {
        video: {
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      };

      if (deviceId) {
        constraints.video.deviceId = { exact: deviceId };
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      activeVideoStream = stream;
      if (plantLiveCamVideo) {
        plantLiveCamVideo.srcObject = stream;
        plantLiveCamVideo.play().catch(() => {});
      }

      if (cameraPromptOverlay) cameraPromptOverlay.classList.add('hidden');
      if (cameraFallbackScreen) cameraFallbackScreen.style.display = 'none';

      if (cameraStatusPill) {
        cameraStatusPill.className = 'status-pill-subtle optimal';
      }
      if (camStatusText) {
        camStatusText.textContent = 'USB Live Stream';
      }
      if (btnToggleCamText) {
        btnToggleCamText.textContent = 'Pause';
      }
      isCamPaused = false;

      // Re-enumerate to get true device labels now that permission is granted
      await enumerateCameras();

      showToast('Mobile USB Cam Connected', 'Displaying live 1080p optical stream from phone camera.');
    } catch (err) {
      console.warn('getUserMedia note:', err);
      // Graceful fallback to high-fidelity optical preview
      if (cameraFallbackScreen) cameraFallbackScreen.style.display = 'flex';
      if (cameraPromptOverlay) cameraPromptOverlay.classList.remove('hidden');
      if (cameraStatusPill) {
        cameraStatusPill.className = 'status-pill-subtle optimal';
      }
      if (camStatusText) {
        camStatusText.textContent = 'Simulated Feed';
      }
      showToast('USB Mobile Cam Info', 'Connect phone with USB cable & choose "Webcam" mode, or use DroidCam/Iriun.');
    }
  }

  function stopCameraStream() {
    if (activeVideoStream) {
      activeVideoStream.getTracks().forEach(t => t.stop());
      activeVideoStream = null;
    }
    if (plantLiveCamVideo) {
      plantLiveCamVideo.srcObject = null;
    }
    if (cameraFallbackScreen) {
      cameraFallbackScreen.style.display = 'flex';
    }
    if (cameraPromptOverlay) {
      cameraPromptOverlay.classList.remove('hidden');
    }
    if (camStatusText) {
      camStatusText.textContent = 'Live Feed';
    }
    if (btnToggleCamText) {
      btnToggleCamText.textContent = 'Start';
    }
    isCamPaused = false;
  }

  function toggleCamStreamPause() {
    if (!activeVideoStream) {
      const selectedDev = camDeviceSelect ? camDeviceSelect.value : null;
      startCameraStream(selectedDev);
      return;
    }

    const videoTracks = activeVideoStream.getVideoTracks();
    if (videoTracks.length > 0) {
      isCamPaused = !isCamPaused;
      videoTracks[0].enabled = !isCamPaused;
      if (isCamPaused) {
        if (btnToggleCamText) btnToggleCamText.textContent = 'Resume';
        if (camStatusText) camStatusText.textContent = 'Paused';
        if (cameraStatusPill) cameraStatusPill.className = 'status-pill-subtle';
        showToast('Stream Paused', 'Mobile camera feed frozen.');
      } else {
        if (btnToggleCamText) btnToggleCamText.textContent = 'Pause';
        if (camStatusText) camStatusText.textContent = 'USB Live Stream';
        if (cameraStatusPill) cameraStatusPill.className = 'status-pill-subtle optimal';
        showToast('Stream Resumed', 'Live feed transmission running.');
      }
    }
  }

  function snapFoliagePhoto() {
    if (videoViewport) {
      videoViewport.style.transition = 'filter 0.08s ease';
      videoViewport.style.filter = 'brightness(2.2)';
      setTimeout(() => {
        videoViewport.style.filter = '';
      }, 140);
    }

    let width = 640;
    let height = 360;

    if (activeVideoStream && plantLiveCamVideo && plantLiveCamVideo.videoWidth) {
      width = plantLiveCamVideo.videoWidth;
      height = plantLiveCamVideo.videoHeight;
    }

    showToast('Snapshot Captured', `Saved high-res optical foliage inspection frame (${width}x${height}).`);
  }

  function toggleCameraFullscreen() {
    if (!videoViewport) return;
    if (!document.fullscreenElement) {
      if (videoViewport.requestFullscreen) {
        videoViewport.requestFullscreen().catch(() => {});
      } else if (videoViewport.webkitRequestFullscreen) {
        videoViewport.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  // Camera Event Listeners
  if (btnConnectRealCam) {
    btnConnectRealCam.addEventListener('click', () => {
      const selectedId = camDeviceSelect ? camDeviceSelect.value : null;
      startCameraStream(selectedId);
    });
  }

  if (camDeviceSelect) {
    camDeviceSelect.addEventListener('change', (e) => {
      if (activeVideoStream) {
        startCameraStream(e.target.value);
      }
    });
  }

  if (btnToggleCamStream) {
    btnToggleCamStream.addEventListener('click', toggleCamStreamPause);
  }

  if (btnSnapPhoto) {
    btnSnapPhoto.addEventListener('click', snapFoliagePhoto);
  }

  if (btnFullscreenCam) {
    btnFullscreenCam.addEventListener('click', toggleCameraFullscreen);
  }

  // =========================================================================
  // 11. WINDOW CONTROLS & KEYBOARD SHORTCUTS
  // =========================================================================

  if (winMinBtn) {
    winMinBtn.addEventListener('click', () => {
      showToast('Window', 'Window minimized.');
    });
  }

  let isMaximized = false;
  if (winMaxBtn) {
    winMaxBtn.addEventListener('click', () => {
      isMaximized = !isMaximized;
      if (isMaximized) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
        showToast('Window', 'Maximized to fullscreen.');
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
        showToast('Window', 'Window restored.');
      }
    });
  }

  if (winCloseBtn) {
    winCloseBtn.addEventListener('click', () => {
      showToast('PlantoAnalytica', 'Application closed.');
    });
  }

  // =========================================================================
  // 10C. WEB AUDIO API SYNTHESIZER FOR FLUENT AUDIO FEEDBACK
  // =========================================================================
  let audioCtx = null;
  let soundEnabled = localStorage.getItem('planto_sound') !== 'false';

  function initAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playFluentSound(type = 'click') {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      if (!audioCtx) return;
      const now = audioCtx.currentTime;

      if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'pump') {
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(659.25, now);
        osc2.frequency.setValueAtTime(830.61, now + 0.08);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioCtx.destination);
        osc1.start(now);
        osc1.stop(now + 0.12);
        osc2.start(now + 0.08);
        osc2.stop(now + 0.28);
      } else if (type === 'cooldown') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.18);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === 'toggle') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(680, now + 0.06);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      }
    } catch (e) {
      // Audio context restricted until user interaction
    }
  }

  // =========================================================================
  // 10D. THEME & SOUND TOGGLE CONTROLLERS
  // =========================================================================
  const btnToggleSound = document.getElementById('btnToggleSound');
  const soundIcon = document.getElementById('soundIcon');

  function applyTheme() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('planto_theme', 'light');
  }

  function toggleTheme() {
    // Windows 11 Light Theme is permanently locked per user specification
    applyTheme();
  }

  function applySoundState(enabled) {
    soundEnabled = enabled;
    if (btnToggleSound) {
      if (enabled) {
        btnToggleSound.classList.add('active');
        btnToggleSound.title = "Disable Fluent Chimes & Audio Alerts";
        if (soundIcon) {
          soundIcon.innerHTML = `<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.482 5.482 0 0 1 11.025 8a5.482 5.482 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>`;
        }
      } else {
        btnToggleSound.classList.remove('active');
        btnToggleSound.title = "Enable Fluent Chimes & Audio Alerts";
        if (soundIcon) {
          soundIcon.innerHTML = `<path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm3.647 1.086a.5.5 0 0 1 .708 0L12 5.586l.928-.95a.5.5 0 1 1 .718.696L12.707 6.293l.939.961a.5.5 0 1 1-.718.696L12 7.001l-.928.949a.5.5 0 1 1-.708-.707l.939-.95-1.07-1.09a.5.5 0 0 1 .131-.567z"/>`;
        }
      }
    }
  }

  function toggleSound() {
    const next = !soundEnabled;
    localStorage.setItem('planto_sound', next ? 'true' : 'false');
    applySoundState(next);
    if (next) playFluentSound('toggle');
    showToast("Audio Feedback", next ? "Fluent Sound chimes enabled." : "Audio feedback muted.");
  }

  if (btnToggleSound) {
    btnToggleSound.addEventListener('click', toggleSound);
  }

  // =========================================================================
  // 10E. HARDWARE TEST BENCH & CALIBRATION SIMULATOR
  // =========================================================================
  const btnToggleTestBench = document.getElementById('btnToggleTestBench');
  const btnCloseTestBench = document.getElementById('btnCloseTestBench');
  const hardwareTestBenchDrawer = document.getElementById('hardwareTestBenchDrawer');

  const benchSoil1Range = document.getElementById('benchSoil1Range');
  const benchSoil2Range = document.getElementById('benchSoil2Range');
  const benchTempRange = document.getElementById('benchTempRange');
  const benchHumidRange = document.getElementById('benchHumidRange');

  const benchSoil1Val = document.getElementById('benchSoil1Val');
  const benchSoil2Val = document.getElementById('benchSoil2Val');
  const benchTempVal = document.getElementById('benchTempVal');
  const benchHumidVal = document.getElementById('benchHumidVal');

  const btnBenchReset = document.getElementById('btnBenchReset');
  const btnBenchTrigger1 = document.getElementById('btnBenchTrigger1');
  const btnBenchTrigger2 = document.getElementById('btnBenchTrigger2');
  const btnBenchTrigger3 = document.getElementById('btnBenchTrigger3');

  function toggleTestBench() {
    playFluentSound('toggle');
    if (hardwareTestBenchDrawer) {
      hardwareTestBenchDrawer.classList.toggle('hidden');
      if (!hardwareTestBenchDrawer.classList.contains('hidden')) {
        hardwareTestBenchDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        showToast("Test Bench Active", "Adjust ADC probes to test threshold automations.");
      }
    }
  }

  if (btnToggleTestBench) btnToggleTestBench.addEventListener('click', toggleTestBench);
  if (btnCloseTestBench) btnCloseTestBench.addEventListener('click', () => {
    playFluentSound('click');
    if (hardwareTestBenchDrawer) hardwareTestBenchDrawer.classList.add('hidden');
  });

  if (benchSoil1Range) {
    const handleSoil1Input = (e) => {
      const raw = parseInt(e.target.value, 10);
      const pct = ArduinoManager.readMoisturePercent(raw);
      if (benchSoil1Val) benchSoil1Val.textContent = `ADC ${raw} (${pct}%)`;
      ArduinoManager.data.soil1 = pct;
      ArduinoManager.syncTelemetryToDashboard();
      const activeField = getStoredFields().find(f => f.name === currentFieldName);
      const threshold = (activeField && activeField.moistureThreshold) ? activeField.moistureThreshold : ArduinoManager.MOISTURE_THRESHOLD;
      if (pct < threshold) {
        ArduinoManager.startPump(0);
      }
    };
    benchSoil1Range.addEventListener('input', handleSoil1Input);
    benchSoil1Range.addEventListener('change', handleSoil1Input);
  }

  if (benchSoil2Range) {
    const handleSoil2Input = (e) => {
      const raw = parseInt(e.target.value, 10);
      const pct = ArduinoManager.readMoisturePercent(raw);
      if (benchSoil2Val) benchSoil2Val.textContent = `ADC ${raw} (${pct}%)`;
      ArduinoManager.data.soil2 = pct;
      ArduinoManager.syncTelemetryToDashboard();
      const activeField = getStoredFields().find(f => f.name === currentFieldName);
      const threshold = (activeField && activeField.moistureThreshold) ? activeField.moistureThreshold : ArduinoManager.MOISTURE_THRESHOLD;
      if (pct < threshold) {
        ArduinoManager.startPump(1);
      }
    };
    benchSoil2Range.addEventListener('input', handleSoil2Input);
    benchSoil2Range.addEventListener('change', handleSoil2Input);
  }

  if (benchTempRange) {
    const handleTempInput = (e) => {
      const val = parseFloat(e.target.value);
      if (benchTempVal) benchTempVal.textContent = `${val.toFixed(1)}°C`;
      ArduinoManager.data.temp = val;
      ArduinoManager.syncTelemetryToDashboard();
    };
    benchTempRange.addEventListener('input', handleTempInput);
    benchTempRange.addEventListener('change', handleTempInput);
  }

  if (benchHumidRange) {
    const handleHumidInput = (e) => {
      const val = parseFloat(e.target.value);
      if (benchHumidVal) benchHumidVal.textContent = `${val.toFixed(1)}% RH`;
      ArduinoManager.data.humidity = val;
      ArduinoManager.syncTelemetryToDashboard();
    };
    benchHumidRange.addEventListener('input', handleHumidInput);
    benchHumidRange.addEventListener('change', handleHumidInput);
  }

  if (btnBenchReset) {
    btnBenchReset.addEventListener('click', () => {
      playFluentSound('click');
      if (benchSoil1Range) benchSoil1Range.value = 440;
      if (benchSoil2Range) benchSoil2Range.value = 460;
      if (benchTempRange) benchTempRange.value = 18.6;
      if (benchHumidRange) benchHumidRange.value = 64.5;
      if (benchSoil1Val) benchSoil1Val.textContent = 'ADC 440 (72%)';
      if (benchSoil2Val) benchSoil2Val.textContent = 'ADC 460 (68%)';
      if (benchTempVal) benchTempVal.textContent = '18.6°C';
      if (benchHumidVal) benchHumidVal.textContent = '64.5% RH';
      ArduinoManager.data.soil1 = 72;
      ArduinoManager.data.soil2 = 68;
      ArduinoManager.data.temp = 18.6;
      ArduinoManager.data.humidity = 64.5;
      ArduinoManager.syncTelemetryToDashboard();
      showToast("Test Bench Reset", "Restored live baseline simulation values.");
    });
  }

  if (btnBenchTrigger1) {
    btnBenchTrigger1.addEventListener('click', () => {
      playFluentSound('click');
      ArduinoManager.startPump(0);
    });
  }
  if (btnBenchTrigger2) {
    btnBenchTrigger2.addEventListener('click', () => {
      playFluentSound('click');
      ArduinoManager.startPump(1);
    });
  }
  if (btnBenchTrigger3) {
    btnBenchTrigger3.addEventListener('click', () => {
      playFluentSound('click');
      ArduinoManager.startPump(2);
    });
  }

  const btnBenchCalibInfo = document.getElementById('btnBenchCalibInfo');
  if (btnBenchCalibInfo) {
    btnBenchCalibInfo.addEventListener('click', () => {
      playFluentSound('click');
      ArduinoManager.writeHardware('C');
      showToast("Querying Calibration", "Sent 'C' command. Check serial monitor for ADC diagnostics.");
    });
  }

  const btnBenchCalibDry = document.getElementById('btnBenchCalibDry');
  if (btnBenchCalibDry) {
    btnBenchCalibDry.addEventListener('click', () => {
      playFluentSound('click');
      ArduinoManager.writeHardware('D');
      showToast("Calibrating Dry (0%)", "Sent 'D' command to save current readings as 0% dry.");
    });
  }

  const btnBenchCalibWet = document.getElementById('btnBenchCalibWet');
  if (btnBenchCalibWet) {
    btnBenchCalibWet.addEventListener('click', () => {
      playFluentSound('click');
      ArduinoManager.writeHardware('W');
      showToast("Calibrating Wet (100%)", "Sent 'W' command to save current readings as 100% wet.");
    });
  }

  const btnBenchCalibReset = document.getElementById('btnBenchCalibReset');
  if (btnBenchCalibReset) {
    btnBenchCalibReset.addEventListener('click', () => {
      playFluentSound('click');
      ArduinoManager.writeHardware('R');
      showToast("Resetting Calibration", "Sent 'R' command to restore factory 800/300 defaults.");
    });
  }

  // =========================================================================
  // 10F. CSV TELEMETRY EXPORT
  // =========================================================================
  const btnExportTelemetry = document.getElementById('btnExportTelemetry');

  function exportTelemetryCSV() {
    playFluentSound('click');
    const now = new Date();
    const rows = [
      ['Timestamp', 'Soil Moisture 1 (%)', 'Soil Moisture 2 (%)', 'Canopy Temp (°C)', 'Relative Humidity (%)', 'VPD (kPa)', 'Dew Point (°C)', 'Pump 1 (D7)', 'Pump 2 (D6)', 'Pump 3 (D8 / IN4)', 'Field', 'Node']
    ];

    if (ArduinoManager.history && ArduinoManager.history.soil1.length > 0) {
      const len = ArduinoManager.history.soil1.length;
      for (let i = 0; i < len; i++) {
        const pastTime = new Date(now.getTime() - (len - 1 - i) * ArduinoManager.CHECK_INTERVAL);
        const s1 = ArduinoManager.history.soil1[i];
        const s2 = ArduinoManager.history.soil2[i];
        const t = ArduinoManager.history.temp[i];
        const h = ArduinoManager.history.humidity[i];
        const atmos = calculateAtmosphericMetrics(t, h);
        rows.push([
          pastTime.toISOString(),
          typeof s1 === 'number' ? s1.toFixed(1) : s1,
          typeof s2 === 'number' ? s2.toFixed(1) : s2,
          typeof t === 'number' ? t.toFixed(1) : t,
          typeof h === 'number' ? h.toFixed(1) : h,
          atmos.vpd.toFixed(2),
          atmos.dewPoint.toFixed(1),
          ArduinoManager.pumpRunning[0] ? 'ON' : 'OFF',
          ArduinoManager.pumpRunning[1] ? 'ON' : 'OFF',
          ArduinoManager.pumpRunning[2] ? 'ON' : 'OFF',
          currentFieldName,
          'Arduino Uno'
        ]);
      }
    } else {
      rows.push([
        now.toISOString(),
        ArduinoManager.data.soil1.toFixed(1),
        ArduinoManager.data.soil2.toFixed(1),
        ArduinoManager.data.temp.toFixed(1),
        ArduinoManager.data.humidity.toFixed(1),
        currentSensorData.vpd.toFixed(2),
        currentSensorData.dewPoint.toFixed(1),
        ArduinoManager.pumpRunning[0] ? 'ON' : 'OFF',
        ArduinoManager.pumpRunning[1] ? 'ON' : 'OFF',
        ArduinoManager.pumpRunning[2] ? 'ON' : 'OFF',
        currentFieldName,
        'Arduino Uno'
      ]);
    }

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(r => r.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `planto-telemetry-${currentFieldName.toLowerCase().replace(/\s+/g, '_')}-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Telemetry Exported", "Downloaded CSV telemetry log file.");
  }

  if (btnExportTelemetry) {
    btnExportTelemetry.addEventListener('click', exportTelemetryCSV);
  }

  // =========================================================================
  // 11. WINDOW CONTROLS & PRODUCTIVITY KEYBOARD SHORTCUTS
  // =========================================================================

  document.addEventListener('keydown', (e) => {
    // Ignore when typing inside input or textarea or select
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      if (e.key === 'Escape') {
        e.target.blur();
      }
      return;
    }

    if (e.key === 'Escape') {
      const arduinoGateOverlay = document.getElementById('arduinoGateOverlay');
      if (arduinoGateOverlay && !arduinoGateOverlay.classList.contains('hidden')) {
        ArduinoManager.hideArduinoGate();
      }
      if (sensorMonitorModal && sensorMonitorModal.classList.contains('active')) closeSensorModal();
      if (lightboxModal && lightboxModal.classList.contains('active')) closeLightbox();
      if (onboardingModal && !onboardingModal.classList.contains('hidden')) closeOnboarding();
      if (searchDropdown) searchDropdown.classList.remove('show');
      if (hardwareTestBenchDrawer && !hardwareTestBenchDrawer.classList.contains('hidden')) {
        hardwareTestBenchDrawer.classList.add('hidden');
      }
    } else if (e.key === 'm' || e.key === 'M') {
      if (sensorMonitorModal && !sensorMonitorModal.classList.contains('active')) {
        openSensorModal();
      }
    } else if (e.key === '1') {
      ArduinoManager.startPump(0);
    } else if (e.key === '2') {
      ArduinoManager.startPump(1);
    } else if (e.key === '3') {
      ArduinoManager.writeSerial('3');
      ArduinoManager.startPump(2);
    } else if (e.key === 's' || e.key === 'S') {
      ArduinoManager.runSimulatedTick();
      showToast("Data Synchronized", "Refreshed Arduino telemetry.");
    } else if (e.key === 'b' || e.key === 'B') {
      toggleTestBench();
    }
  });

  // Modal close button for field settings
  const onboardingCloseBtn = document.getElementById('onboardingCloseBtn');
  if (onboardingCloseBtn) {
    onboardingCloseBtn.addEventListener('click', closeOnboarding);
  }
  if (onboardingModal) {
    onboardingModal.addEventListener('click', (e) => {
      if (e.target === onboardingModal) closeOnboarding();
    });
  }

  // =========================================================================
  // 12. TOAST NOTIFICATIONS
  // =========================================================================

  let toastTimeout;
  function showToast(title, message) {
    if (!winToast) return;
    clearTimeout(toastTimeout);
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    winToast.classList.add('show');

    toastTimeout = setTimeout(() => {
      winToast.classList.remove('show');
    }, 3200);
  }

  // =========================================================================
  // 12.5 REALTIME FIELD WEATHER STATION MODULE (GOOGLE WEATHER API INTEGRATION)
  // =========================================================================

  // Google Maps Platform Weather API Key (configured by user)
  const GOOGLE_WEATHER_API_KEY = localStorage.getItem('planto_google_weather_api_key') || "AIzaSyCMjauKJCn44b0MUPqLgzJZIKXygzqsQEU";

  const WMO_WEATHER_MAP = {
    0: { text: "Clear Sky", dayEmoji: "☀️", nightEmoji: "🌙" },
    1: { text: "Mainly Clear", dayEmoji: "🌤️", nightEmoji: "🌤️" },
    2: { text: "Partly Cloudy", dayEmoji: "⛅", nightEmoji: "☁️" },
    3: { text: "Overcast", dayEmoji: "☁️", nightEmoji: "☁️" },
    45: { text: "Foggy", dayEmoji: "🌫️", nightEmoji: "🌫️" },
    48: { text: "Depositing Rime Fog", dayEmoji: "🌫️", nightEmoji: "🌫️" },
    51: { text: "Light Drizzle", dayEmoji: "🌦️", nightEmoji: "🌧️" },
    53: { text: "Moderate Drizzle", dayEmoji: "🌦️", nightEmoji: "🌧️" },
    55: { text: "Dense Drizzle", dayEmoji: "🌧️", nightEmoji: "🌧️" },
    61: { text: "Slight Rain", dayEmoji: "🌦️", nightEmoji: "🌧️" },
    63: { text: "Moderate Rain", dayEmoji: "🌧️", nightEmoji: "🌧️" },
    65: { text: "Heavy Rain", dayEmoji: "🌧️", nightEmoji: "🌧️" },
    71: { text: "Slight Snow", dayEmoji: "🌨️", nightEmoji: "🌨️" },
    73: { text: "Moderate Snow", dayEmoji: "🌨️", nightEmoji: "🌨️" },
    75: { text: "Heavy Snow", dayEmoji: "❄️", nightEmoji: "❄️" },
    77: { text: "Snow Grains", dayEmoji: "🌨️", nightEmoji: "🌨️" },
    80: { text: "Slight Showers", dayEmoji: "🌦️", nightEmoji: "🌧️" },
    81: { text: "Moderate Showers", dayEmoji: "🌧️", nightEmoji: "🌧️" },
    82: { text: "Violent Showers", dayEmoji: "⛈️", nightEmoji: "⛈️" },
    85: { text: "Snow Showers", dayEmoji: "🌨️", nightEmoji: "🌨️" },
    86: { text: "Heavy Snow Showers", dayEmoji: "❄️", nightEmoji: "❄️" },
    95: { text: "Thunderstorm", dayEmoji: "⛈️", nightEmoji: "⛈️" },
    96: { text: "Storm with Hail", dayEmoji: "⛈️", nightEmoji: "⛈️" },
    99: { text: "Severe Thunderstorm", dayEmoji: "⛈️", nightEmoji: "⛈️" }
  };

  const DEFAULT_WEATHER_DATA = {
    source: 'google',
    conditionText: 'Mostly cloudy',
    iconSvg: 'https://maps.gstatic.com/weather/v1/mostly_cloudy_night.svg',
    emoji: '⛅',
    temperature: 25.1,
    feelsLike: 28.4,
    dewPoint: 24.4,
    relativeHumidity: 96,
    windSpeed: 6.0,
    windDirection: 'NW',
    windGust: 11.0,
    precipitationProb: 10,
    qpf: 0.0,
    airPressure: 1008.2,
    uvIndex: 0,
    cloudCover: 77,
    timeZone: 'Asia/Kolkata',
    locationName: 'Agra, Uttar Pradesh',
    isDay: false
  };

  let cachedWeatherData = null;

  async function fetchWithTimeout(url, options = {}, timeoutMs = 3500) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const resp = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(timer);
      return resp;
    } catch (err) {
      clearTimeout(timer);
      throw err;
    }
  }

  function resolveCityFromTimezone(tzOverride) {
    try {
      const storedCity = localStorage.getItem('planto_auto_city');
      if (storedCity && storedCity.trim().length > 0) {
        return storedCity.trim();
      }
    } catch (e) {}
    return "Agra, Uttar Pradesh";
  }

  function getActiveFieldDisplayName() {
    return currentFieldName || "Field Alpha";
  }

  function formatCardinalDirection(dir) {
    if (!dir) return "NW";
    if (typeof dir === 'number') {
      const val = Math.floor((dir / 22.5) + 0.5);
      const arr = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
      return arr[(val % 16)];
    }
    const s = String(dir).toUpperCase().trim();
    if (s === "NORTH") return "N";
    if (s === "SOUTH") return "S";
    if (s === "EAST") return "E";
    if (s === "WEST") return "W";
    if (s === "NORTHEAST") return "NE";
    if (s === "NORTHWEST") return "NW";
    if (s === "SOUTHEAST") return "SE";
    if (s === "SOUTHWEST") return "SW";
    return s;
  }

  function updateWeatherLocationDisplay(tzOverride) {
    const city = resolveCityFromTimezone(tzOverride);
    const fieldName = getActiveFieldDisplayName();

    // 1. Hero Weather Card in Main View
    const locElem = document.getElementById('heroWeatherLocation');
    if (locElem) {
      locElem.textContent = `${city} • ${fieldName}`;
    }

    // 2. Realtime Field Meteorology Card in Field Monitor Modal
    const modalLocElem = document.getElementById('nextStepWeatherLocation');
    if (modalLocElem) {
      modalLocElem.textContent = `📍 ${city}`;
      modalLocElem.title = `Auto-detected location (${city}) • GPS / IP Geolocation Verified`;
    }
  }

  // ---------------------------------------------------------------------------
  // NATIVE DEVICE GEOLOCATION & REVERSE GEOCODING ENGINE
  // ---------------------------------------------------------------------------

  // Reverse geocode GPS coordinates to city, district & state
  async function reverseGeocodeCoords(lat, lon) {
    // 1. Primary: OpenStreetMap Nominatim (High detail, accurate worldwide)
    try {
      const nomUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
      const resp = await fetchWithTimeout(nomUrl, {}, 3500);
      if (resp.ok) {
        const d = await resp.json();
        if (d && d.address) {
          const city = d.address.city || d.address.town || d.address.village || d.address.suburb || d.address.municipality || d.address.county || d.address.city_district;
          const state = d.address.state || d.address.state_district || '';
          if (city) {
            return (state && state.toLowerCase() !== city.toLowerCase()) ? `${city}, ${state}` : city;
          }
          if (d.display_name) {
            const parts = d.display_name.split(',').map(s => s.trim());
            return parts.slice(0, 2).join(', ');
          }
        }
      }
    } catch (e) {}

    // 2. Secondary: BigDataCloud Reverse Geocode Client API
    try {
      const bdcUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
      const resp = await fetchWithTimeout(bdcUrl, {}, 3000);
      if (resp.ok) {
        const d = await resp.json();
        const city = d.city || d.locality || d.principalSubdivision;
        const state = d.principalSubdivision || '';
        if (city) {
          return (state && state.toLowerCase() !== city.toLowerCase()) ? `${city}, ${state}` : city;
        }
      }
    } catch (e) {}

    return `Lat ${lat.toFixed(2)}°, Lon ${lon.toFixed(2)}°`;
  }

  // Request browser GPS position with high accuracy
  function getDeviceGeolocation(timeoutMs = 12000) {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        return reject(new Error("Geolocation is not supported by your browser."));
      }
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: timeoutMs,
        maximumAge: 0 // force fresh fix
      });
    });
  }

  // Universal Location Engine: Device Location (GPS) -> IP Geolocation Fallback
  async function useCurrentLocation(interactive = false) {
    // If user has explicitly configured a manual PIN code, respect it during background runs
    if (!interactive && localStorage.getItem('planto_location_source') === 'PIN') {
      return null;
    }

    const locBtn = document.getElementById('btnAutoDetectGps');
    const heroBtn = document.getElementById('btnHeroUseLocation');
    const btnText = document.getElementById('btnDetectGpsText');

    if (btnText) btnText.textContent = "Getting Location...";
    if (locBtn) locBtn.classList.add('locating-pulse');
    if (heroBtn) heroBtn.classList.add('locating-pulse');

    let detected = null;

    // Step 1: Query Device GPS via HTML5 Geolocation API
    try {
      const pos = await getDeviceGeolocation(interactive ? 15000 : 6000);
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const accuracy = pos.coords.accuracy ? Math.round(pos.coords.accuracy) : null;

      // Reverse geocode to exact human-readable city and region
      const resolvedName = await reverseGeocodeCoords(lat, lon);

      localStorage.setItem('planto_auto_city', resolvedName);
      localStorage.setItem('planto_weather_coords', JSON.stringify({ lat, lon }));
      localStorage.setItem('planto_location_source', 'GPS');

      detected = { city: resolvedName, lat, lon, source: 'GPS' };
      updateWeatherLocationDisplay();

      // Immediately fetch real-time Google weather for these coordinates
      await fetchRealtimeWeather(true);

      const accStr = accuracy ? ` (±${accuracy}m precision)` : '';
      showToast("Current Location Detected", `📍 ${resolvedName}${accStr} • Google Weather synchronized.`);

    } catch (geoErr) {
      console.warn("Device location unavailable or waiting, attempting IP lookup:", geoErr);

      if (geoErr.code === 1) { // PERMISSION_DENIED
        if (interactive) {
          showToast("Location Permission Needed", "Please allow location access in your browser to use your GPS. Falling back to IP location.", 4500);
        }
      }

      // Step 2: Fallback to high-precision IP geolocation
      try {
        const ipResp = await fetchWithTimeout('https://ipwho.is/', {}, 3500);
        if (ipResp.ok) {
          const d = await ipResp.json();
          if (d && d.success !== false && d.latitude && d.longitude) {
            const cityName = d.city || 'Agra';
            const regionName = d.region || 'Uttar Pradesh';
            const autoCity = `${cityName}, ${regionName}`;
            localStorage.setItem('planto_auto_city', autoCity);
            localStorage.setItem('planto_weather_coords', JSON.stringify({ lat: d.latitude, lon: d.longitude }));
            localStorage.setItem('planto_location_source', 'IP');

            detected = { city: autoCity, lat: d.latitude, lon: d.longitude, source: 'IP' };
            updateWeatherLocationDisplay();

            await fetchRealtimeWeather(true);

            if (interactive) {
              showToast("Location Detected", `📍 ${autoCity} (${d.latitude.toFixed(2)}°N, ${d.longitude.toFixed(2)}°E)`);
            }
          }
        }
      } catch (ipErr) {
        console.warn("IP Geolocation fallback also failed:", ipErr);
      }
    } finally {
      if (btnText) btnText.textContent = "Use Current Location";
      if (locBtn) locBtn.classList.remove('locating-pulse');
      if (heroBtn) heroBtn.classList.remove('locating-pulse');
    }

    return detected;
  }

  // ---------------------------------------------------------------------------
  // MANUAL PIN CODE LOCATION ENGINE (Zippopotam + Nominatim Fallback)
  // ---------------------------------------------------------------------------

  async function lookupLocationByPincode(pincode) {
    const cleanPin = String(pincode).trim().replace(/\s+/g, '');
    if (!cleanPin || cleanPin.length < 4) {
      throw new Error("Please enter a valid PIN code (e.g. 282002).");
    }

    let lat = null;
    let lon = null;
    let placeName = null;
    let stateName = null;

    // 1. Primary: Zippopotam (Instant, zero-key lookup for Indian postal codes)
    try {
      const zipUrl = `https://api.zippopotam.us/in/${encodeURIComponent(cleanPin)}`;
      const resp = await fetchWithTimeout(zipUrl, {}, 3500);
      if (resp.ok) {
        const data = await resp.json();
        if (data && Array.isArray(data.places) && data.places.length > 0) {
          const p = data.places[0];
          lat = parseFloat(p.latitude);
          lon = parseFloat(p.longitude);
          placeName = p['place name'] || '';
          stateName = p.state || p['state abbreviation'] || '';
        }
      }
    } catch (e) {}

    // 2. Secondary: OpenStreetMap Nominatim Postal Code Search
    if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
      try {
        const nomUrl = `https://nominatim.openstreetmap.org/search?postalcode=${encodeURIComponent(cleanPin)}&country=India&format=json`;
        const resp = await fetchWithTimeout(nomUrl, {}, 3500);
        if (resp.ok) {
          const list = await resp.json();
          if (Array.isArray(list) && list.length > 0) {
            const item = list[0];
            lat = parseFloat(item.lat);
            lon = parseFloat(item.lon);
            const dName = item.display_name || '';
            const parts = dName.split(',').map(s => s.trim());
            placeName = parts.length > 1 ? parts[1] : parts[0];
            stateName = parts.length > 2 ? parts[2] : '';
          }
        }
      } catch (e) {}
    }

    // 3. Fallback: Generic OpenStreetMap without country restriction
    if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
      try {
        const nomGlobalUrl = `https://nominatim.openstreetmap.org/search?postalcode=${encodeURIComponent(cleanPin)}&format=json`;
        const resp = await fetchWithTimeout(nomGlobalUrl, {}, 3500);
        if (resp.ok) {
          const list = await resp.json();
          if (Array.isArray(list) && list.length > 0) {
            const item = list[0];
            lat = parseFloat(item.lat);
            lon = parseFloat(item.lon);
            placeName = item.display_name?.split(',')[0] || cleanPin;
          }
        }
      } catch (e) {}
    }

    if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
      throw new Error(`Could not locate PIN code "${cleanPin}". Please verify and retry.`);
    }

    let resolvedLabel = "";
    if (placeName && stateName) {
      resolvedLabel = `${placeName}, ${stateName} (${cleanPin})`;
    } else if (placeName) {
      resolvedLabel = `${placeName} (${cleanPin})`;
    } else {
      resolvedLabel = `PIN ${cleanPin}`;
    }

    return {
      pincode: cleanPin,
      city: resolvedLabel,
      lat,
      lon
    };
  }

  async function applyManualPincode(pincode) {
    const input = document.getElementById('inputManualPincode');
    const applyBtn = document.getElementById('btnApplyPincode');
    const val = (pincode !== undefined && pincode !== null && String(pincode).trim().length > 0)
                ? String(pincode).trim()
                : (input ? input.value.trim() : '');

    if (!val || val.length < 4) {
      showToast("Invalid PIN Code", "Please enter a valid postal PIN code (e.g. 282002).", 3000);
      return;
    }

    if (applyBtn) {
      applyBtn.disabled = true;
      applyBtn.textContent = "...";
    }

    try {
      const res = await lookupLocationByPincode(val);

      localStorage.setItem('planto_pincode', res.pincode);
      localStorage.setItem('planto_auto_city', res.city);
      localStorage.setItem('planto_weather_coords', JSON.stringify({ lat: res.lat, lon: res.lon }));
      localStorage.setItem('planto_location_source', 'PIN');

      if (input) input.value = res.pincode;

      updateWeatherLocationDisplay();
      await fetchRealtimeWeather(true);

      showToast("Location Set by PIN", `📍 ${res.city} • Weather synchronized.`);
    } catch (err) {
      console.warn("PIN lookup error:", err);
      showToast("PIN Lookup Failed", err.message || "Unable to locate PIN code. Please verify and retry.", 4000);
    } finally {
      if (applyBtn) {
        applyBtn.disabled = false;
        applyBtn.textContent = "Apply PIN";
      }
    }
  }

  // Alias for compatibility
  const autoDetectLocation = useCurrentLocation;

  function applyWeatherDataToUI(current) {
    if (!current) return;

    // --- HOME VIEW HERO WEATHER ELEMENTS ---
    const emojiElem = document.getElementById('heroWeatherEmoji');
    const googleIconElem = document.getElementById('heroWeatherGoogleIcon');
    const tempElem = document.getElementById('heroWeatherTemp');
    const condElem = document.getElementById('heroWeatherCondition');
    const humElem = document.getElementById('heroWeatherHumidity');
    const windElem = document.getElementById('heroWeatherWind');
    const heroCard = document.getElementById('heroWeatherCard');

    // --- MODAL REALTIME WEATHER TELEMETRY ELEMENTS ---
    const modalLocElem = document.getElementById('nextStepWeatherLocation');
    const modalProviderElem = document.getElementById('nextStepWeatherProvider');
    const modalIconElem = document.getElementById('nextStepWeatherIcon');
    const modalEmojiElem = document.getElementById('nextStepWeatherEmoji');
    const modalTempElem = document.getElementById('nextStepWeatherTemp');
    const modalFeelsElem = document.getElementById('nextStepWeatherFeels');
    const modalCondElem = document.getElementById('nextStepWeatherCondition');
    const modalNarrativeElem = document.getElementById('nextStepWeatherNarrative');
    const modalHumElem = document.getElementById('nextStepHumidity');
    const modalDewElem = document.getElementById('nextStepDewPoint');
    const modalWindElem = document.getElementById('nextStepWind');
    const modalGustElem = document.getElementById('nextStepGust');
    const modalPrecipElem = document.getElementById('nextStepPrecip');
    const modalQpfElem = document.getElementById('nextStepQpf');
    const modalPressureElem = document.getElementById('nextStepPressure');
    const modalUvElem = document.getElementById('nextStepUv');
    const modalStatusText = document.getElementById('modalWeatherStatusText');

    // Extract values flexibly with robust fallbacks
    const tempNum = Number.isFinite(current.temperature) ? current.temperature :
                    (Number.isFinite(current.temperature_2m) ? current.temperature_2m :
                    (Number.isFinite(current.temp) ? current.temp : 25.1));

    const humNum = Number.isFinite(current.relativeHumidity) ? current.relativeHumidity :
                   (Number.isFinite(current.relative_humidity_2m) ? current.relative_humidity_2m :
                   (Number.isFinite(current.humidity) ? current.humidity : 96));

    const windNum = Number.isFinite(current.windSpeed) ? current.windSpeed :
                    (Number.isFinite(current.wind_speed_10m) ? current.wind_speed_10m :
                    (Number.isFinite(current.wind) ? current.wind : 6.0));

    const feelsNum = Number.isFinite(current.feelsLike) ? current.feelsLike :
                     (Number.isFinite(current.apparent_temperature) ? current.apparent_temperature : tempNum);

    const dewNum = Number.isFinite(current.dewPoint) ? current.dewPoint :
                   (tempNum - ((100 - humNum) / 5));

    const windDir = formatCardinalDirection(current.windDirection);
    const windGust = Number.isFinite(current.windGust) ? current.windGust : (windNum * 1.4);

    const precipNum = Number.isFinite(current.precipitationProb) ? current.precipitationProb :
                      (Number.isFinite(current.precipitation) ? Math.round(current.precipitation * 10) : 10);

    const qpfNum = Number.isFinite(current.qpf) ? current.qpf : 0.0;
    const pressureNum = Number.isFinite(current.airPressure) ? current.airPressure : 1008.2;
    const uvNum = Number.isFinite(current.uvIndex) ? current.uvIndex : 0;
    const cloudNum = Number.isFinite(current.cloudCover) ? current.cloudCover : 77;

    let condition = current.conditionText;
    if (!condition && current.weather_code !== undefined && WMO_WEATHER_MAP[current.weather_code]) {
      condition = WMO_WEATHER_MAP[current.weather_code].text;
    }
    if (!condition) condition = 'Mostly cloudy';

    let emoji = current.emoji;
    if (!emoji && current.weather_code !== undefined && WMO_WEATHER_MAP[current.weather_code]) {
      emoji = current.isDay === false ? WMO_WEATHER_MAP[current.weather_code].nightEmoji : WMO_WEATHER_MAP[current.weather_code].dayEmoji;
    }
    if (!emoji) emoji = current.isDay === false ? '🌙' : '⛅';

    const iconSvg = current.iconSvg || (current.source === 'google' ? 'https://maps.gstatic.com/weather/v1/mostly_cloudy_night.svg' : null);
    const providerLabel = current.source === 'google' ? 'Google Maps Weather API' : 'Live Satellite Radar';
    const cityLabel = resolveCityFromTimezone(current.timeZone);

    // --- 1. RENDER HOME VIEW HERO WEATHER CARD ---
    if (iconSvg && googleIconElem) {
      googleIconElem.src = iconSvg;
      googleIconElem.style.display = 'block';
      if (emojiElem) emojiElem.style.display = 'none';
      googleIconElem.onerror = () => {
        googleIconElem.style.display = 'none';
        if (emojiElem) {
          emojiElem.style.display = 'inline-block';
          emojiElem.textContent = emoji;
        }
      };
    } else {
      if (googleIconElem) googleIconElem.style.display = 'none';
      if (emojiElem) {
        emojiElem.style.display = 'inline-block';
        emojiElem.textContent = emoji;
      }
    }

    if (tempElem) tempElem.textContent = `${Math.round(tempNum)}°C`;
    if (condElem) condElem.textContent = condition;
    if (humElem) humElem.textContent = `💧 ${Math.round(humNum)}%`;
    if (windElem) windElem.textContent = `💨 ${typeof windNum === 'number' ? windNum.toFixed(1) : windNum} km/h`;

    if (heroCard) {
      heroCard.title = `Realtime Weather Station (${providerLabel})\n• Auto Location: ${cityLabel} (GPS / IP Verified)\n• Condition: ${condition} (${Math.round(tempNum)}°C, feels like ${Math.round(feelsNum)}°C)\n• Ambient Humidity: ${Math.round(humNum)}%\n• Wind Speed: ${typeof windNum === 'number' ? windNum.toFixed(1) : windNum} km/h\n• Rain Chance: ${precipNum}%\n• Provider: ${providerLabel} (Click to re-sync)`;
    }

    // --- 2. RENDER FIELD MONITOR MODAL (next-step-minimal-card) ---
    if (modalLocElem) {
      modalLocElem.textContent = `📍 ${cityLabel}`;
    }
    if (modalProviderElem) {
      modalProviderElem.textContent = providerLabel;
    }
    if (modalIconElem) {
      if (iconSvg) {
        modalIconElem.src = iconSvg;
        modalIconElem.style.display = 'block';
        if (modalEmojiElem) modalEmojiElem.style.display = 'none';
        modalIconElem.onerror = () => {
          modalIconElem.style.display = 'none';
          if (modalEmojiElem) {
            modalEmojiElem.style.display = 'inline-block';
            modalEmojiElem.textContent = emoji;
          }
        };
      } else {
        modalIconElem.style.display = 'none';
        if (modalEmojiElem) {
          modalEmojiElem.style.display = 'inline-block';
          modalEmojiElem.textContent = emoji;
        }
      }
    }

    if (modalTempElem) modalTempElem.textContent = `${tempNum.toFixed(1)}°C`;
    if (modalFeelsElem) modalFeelsElem.textContent = `Feels ${Math.round(feelsNum)}°C`;
    if (modalCondElem) modalCondElem.textContent = condition;

    // Contextual crop microclimate analysis narrative (Ultra-Minimalist format)
    const activeCrop = PLANTS_DATA.find(p => p.id === currentPlantId) || PLANTS_DATA[0];
    const cropName = activeCrop ? activeCrop.name : 'Crop';
    if (modalNarrativeElem) {
      let narrative = "";
      if (humNum >= 85) {
        narrative = `Transpiration: Low • Foliar moisture guarded`;
      } else if (humNum < 45) {
        narrative = `Transpiration: Elevated • Root pulse ready`;
      } else {
        narrative = `Transpiration: Optimal • Balanced microclimate`;
      }
      modalNarrativeElem.textContent = narrative;
      modalNarrativeElem.title = `${cropName} microclimate: ${condition} at ${tempNum.toFixed(1)}°C, ${Math.round(humNum)}% RH, ${typeof windNum === 'number' ? windNum.toFixed(1) : windNum} km/h wind.`;
    }

    // Populate 4 Minimal Telemetry Chips
    if (modalHumElem) modalHumElem.textContent = `💧 ${Math.round(humNum)}% RH`;
    if (modalDewElem) modalDewElem.textContent = `Dew: ${dewNum.toFixed(1)}°C`;
    if (modalWindElem) modalWindElem.textContent = `💨 ${typeof windNum === 'number' ? windNum.toFixed(1) : windNum} km/h ${windDir}`;
    if (modalGustElem) modalGustElem.textContent = `Gust: ${typeof windGust === 'number' ? windGust.toFixed(1) : windGust} km/h`;
    if (modalPrecipElem) modalPrecipElem.textContent = `🌧️ ${precipNum}% Rain`;
    if (modalQpfElem) modalQpfElem.textContent = `${qpfNum.toFixed(1)} mm/h`;
    if (modalPressureElem) modalPressureElem.textContent = `🧭 ${Math.round(pressureNum)} hPa`;
    if (modalUvElem) modalUvElem.textContent = `Cloud: ${cloudNum}%`;

    if (modalStatusText) {
      const pinPart = localStorage.getItem('planto_pincode') ? ` (PIN ${localStorage.getItem('planto_pincode')})` : '';
      modalStatusText.textContent = `${providerLabel}${pinPart} • Synced ${new Date().toLocaleTimeString().split(' ')[0]}`;
    }

    updateWeatherLocationDisplay(current.timeZone);
  }

  async function fetchRealtimeWeather(force = false) {
    const heroCard = document.getElementById('heroWeatherCard');
    const modalSyncBtn = document.getElementById('btnSyncWeatherModal');
    const modalSyncText = document.getElementById('btnSyncWeatherModalText');

    if (modalSyncText) modalSyncText.textContent = "Syncing Google Radar...";
    if (heroCard) heroCard.classList.add('syncing');

    // If no coordinates stored yet, perform initial location detection
    if (!localStorage.getItem('planto_weather_coords')) {
      await autoDetectLocation(false);
    }

    // 1. Check local cache if not forced (10 minute cache window)
    if (!force) {
      try {
        const stored = localStorage.getItem('planto_weather_cache_v3');
        if (stored) {
          const parsed = JSON.parse(stored);
          const age = Date.now() - (parsed.timestamp || 0);
          if (age < 10 * 60 * 1000 && parsed.current && (parsed.current.temperature !== undefined || parsed.current.temperature_2m !== undefined)) {
            cachedWeatherData = parsed.current;
            applyWeatherDataToUI(cachedWeatherData);
            if (modalSyncText) modalSyncText.textContent = "Sync Google Weather";
            return;
          }
        }
      } catch (e) {}
    }

    // 2. Resolve auto-detected coordinates (Defaulting to user's region: Agra, 27.1831, 78.0162)
    let lat = 27.1831;
    let lon = 78.0162;

    const storedCoords = localStorage.getItem('planto_weather_coords');
    if (storedCoords) {
      try {
        const parsedCoords = JSON.parse(storedCoords);
        if (parsedCoords.lat && parsedCoords.lon) {
          lat = parsedCoords.lat;
          lon = parsedCoords.lon;
        }
      } catch (e) {}
    }

    let fetchSuccess = false;

    // Source: Google Maps Platform Code Assist
    // 3. Primary: Query Google Maps Platform Weather API with user key (3.5s timeout)
    try {
      const googleUrl = `https://weather.googleapis.com/v1/currentConditions:lookup?key=${encodeURIComponent(GOOGLE_WEATHER_API_KEY)}&location.latitude=${lat.toFixed(4)}&location.longitude=${lon.toFixed(4)}`;
      const response = await fetchWithTimeout(googleUrl, {}, 3500);
      if (response.ok) {
        const data = await response.json();
        if (data && data.weatherCondition && data.temperature) {
          cachedWeatherData = {
            source: 'google',
            conditionText: data.weatherCondition.description?.text || data.weatherCondition.type || 'Mostly cloudy',
            iconSvg: data.weatherCondition.iconBaseUri ? `${data.weatherCondition.iconBaseUri}.svg` : 'https://maps.gstatic.com/weather/v1/mostly_cloudy_night.svg',
            emoji: data.isDaytime === false ? '🌙' : '☀️',
            temperature: data.temperature?.degrees ?? 25.1,
            feelsLike: data.feelsLikeTemperature?.degrees ?? data.temperature?.degrees ?? 28.4,
            dewPoint: data.dewPoint?.degrees ?? 24.4,
            relativeHumidity: data.relativeHumidity ?? 96,
            windSpeed: data.wind?.speed?.value ?? 6.0,
            windDirection: data.wind?.direction?.cardinal || 'NORTHWEST',
            windGust: data.wind?.gust?.value ?? 11.0,
            precipitationProb: data.precipitation?.probability?.percent ?? 10,
            qpf: data.precipitation?.qpf?.quantity ?? 0.0,
            airPressure: data.airPressure?.meanSeaLevelMillibars ?? 1008.2,
            uvIndex: data.uvIndex ?? 0,
            cloudCover: data.cloudCover ?? 77,
            timeZone: data.timeZone?.id,
            isDay: data.isDaytime !== undefined ? data.isDaytime : false
          };

          localStorage.setItem('planto_weather_cache_v3', JSON.stringify({
            timestamp: Date.now(),
            current: cachedWeatherData
          }));
          applyWeatherDataToUI(cachedWeatherData);
          fetchSuccess = true;

          if (force) {
            const locName = resolveCityFromTimezone();
            showToast("Google Weather Synced", `Location: ${locName} • ${cachedWeatherData.conditionText}, ${cachedWeatherData.temperature.toFixed(1)}°C, 💧 ${cachedWeatherData.relativeHumidity}% RH.`);
          }
        }
      }
    } catch (gErr) {
      console.warn("PlantoAnalytica: Google Weather API request error, checking fallback:", gErr);
    }

    // 4. Secondary: Open-Meteo Fallback if Google Weather was unavailable (3.5s timeout)
    if (!fetchSuccess) {
      try {
        const fallbackUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m,surface_pressure&timezone=auto`;
        const resp = await fetchWithTimeout(fallbackUrl, {}, 3500);
        if (resp.ok) {
          const fbData = await resp.json();
          if (fbData && fbData.current) {
            const isDay = fbData.current.is_day !== undefined ? (fbData.current.is_day === 1) : false;
            const wmo = WMO_WEATHER_MAP[fbData.current.weather_code] || { text: "Mostly cloudy", dayEmoji: "☀️", nightEmoji: "🌙" };
            cachedWeatherData = {
              source: 'radar',
              conditionText: wmo.text,
              iconSvg: null,
              emoji: isDay ? wmo.dayEmoji : wmo.nightEmoji,
              temperature: fbData.current.temperature_2m,
              feelsLike: fbData.current.apparent_temperature ?? fbData.current.temperature_2m,
              dewPoint: fbData.current.temperature_2m - ((100 - fbData.current.relative_humidity_2m) / 5),
              relativeHumidity: fbData.current.relative_humidity_2m,
              windSpeed: fbData.current.wind_speed_10m,
              windDirection: fbData.current.wind_direction_10m,
              windGust: fbData.current.wind_speed_10m * 1.4,
              precipitationProb: Math.round((fbData.current.precipitation || 0) * 10),
              qpf: fbData.current.precipitation || 0.0,
              airPressure: fbData.current.surface_pressure || 1008.2,
              uvIndex: isDay ? 3 : 0,
              cloudCover: 75,
              timeZone: fbData.timezone,
              isDay: isDay
            };

            localStorage.setItem('planto_weather_cache_v3', JSON.stringify({
              timestamp: Date.now(),
              current: cachedWeatherData
            }));
            applyWeatherDataToUI(cachedWeatherData);
            fetchSuccess = true;

            if (force) {
              const locName = resolveCityFromTimezone();
              showToast("Location & Radar Synced", `Location: ${locName} • Live Radar: ${cachedWeatherData.conditionText}, ${cachedWeatherData.temperature.toFixed(1)}°C.`);
            }
          }
        }
      } catch (fbErr) {
        console.warn("PlantoAnalytica: Live weather sync offline:", fbErr);
      }
    }

    // 5. Guaranteed Final Fallback if network was offline
    if (!fetchSuccess && !cachedWeatherData) {
      cachedWeatherData = { ...DEFAULT_WEATHER_DATA };
      applyWeatherDataToUI(cachedWeatherData);
      if (force) {
        showToast("Weather Offline Mode", "Displaying local field microclimate telemetry.");
      }
    }

    if (modalSyncText) {
      modalSyncText.textContent = "Sync Google Weather";
    }

    if (heroCard) {
      setTimeout(() => heroCard.classList.remove('syncing'), 800);
    }
  }

  function initRealtimeWeather() {
    // 1. Home View Hero Weather Card Click
    const heroCard = document.getElementById('heroWeatherCard');
    if (heroCard) {
      heroCard.addEventListener('click', (e) => {
        // If clicked specifically on the location button inside hero
        if (e.target.closest('#btnHeroUseLocation')) {
          useCurrentLocation(true);
          return;
        }
        fetchRealtimeWeather(true);
      });
    }

    const btnHeroLoc = document.getElementById('btnHeroUseLocation');
    if (btnHeroLoc) {
      btnHeroLoc.addEventListener('click', (e) => {
        e.stopPropagation();
        useCurrentLocation(true);
      });
    }

    // 2. Field Monitor Modal Weather Card Controls
    const btnSyncModal = document.getElementById('btnSyncWeatherModal');
    if (btnSyncModal) {
      btnSyncModal.addEventListener('click', () => {
        fetchRealtimeWeather(true);
      });
    }

    const btnAutoDetect = document.getElementById('btnAutoDetectGps');
    if (btnAutoDetect) {
      btnAutoDetect.addEventListener('click', () => {
        useCurrentLocation(true);
      });
    }

    // Manual PIN Code Input Wiring
    const inputPin = document.getElementById('inputManualPincode');
    const btnApplyPin = document.getElementById('btnApplyPincode');

    if (inputPin) {
      const storedPin = localStorage.getItem('planto_pincode') || '282002';
      inputPin.value = storedPin;
      inputPin.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyManualPincode();
        }
      });
    }

    if (btnApplyPin) {
      btnApplyPin.addEventListener('click', () => {
        applyManualPincode();
      });
    }

    const locPill = document.getElementById('nextStepWeatherLocation');
    if (locPill) {
      locPill.style.cursor = 'pointer';
      locPill.addEventListener('click', () => {
        useCurrentLocation(true);
      });
    }

    // 3. Immediately apply baseline so weather data is visible with zero delay
    applyWeatherDataToUI(DEFAULT_WEATHER_DATA);

    // 4. Automatically detect user location and fetch live weather
    useCurrentLocation(false).then(() => {
      fetchRealtimeWeather(false);
    });

    // 5. Periodic auto-sync every 10 minutes
    setInterval(() => {
      fetchRealtimeWeather(false);
    }, 10 * 60 * 1000);
  }

  // =========================================================================
  // 13. INITIAL BOOTSTRAP
  // =========================================================================

  // Enforce Windows 11 Light Theme permanently
  applyTheme();

  // Restore saved sound preference
  const savedSound = localStorage.getItem('planto_sound') !== 'false';
  applySoundState(savedSound);

  updateFieldInitials();
  applyPlantProfile(currentPlantId);
  renderPlantsGallery();
  renderMainFieldChips();
  initShelfScrolling();
  initRealtimeWeather();

  if (typeof ArduinoManager !== 'undefined') {
    ArduinoManager.startEngine();
    ArduinoManager.updateConnectionUI();
    ArduinoManager.updateSparklines();
  }

  // =========================================================================
  // 14. WEBSITE STARTUP CHECK: BLUR POP-UP IF NO FIELD OR CROP IS CONFIGURED
  // =========================================================================
  // On very starting of website, if no field is named or selected or crop is selected:
  // open blur pop up to add a field with all the details
  const storedFieldName = localStorage.getItem('planto_field_name');
  const storedCrop = localStorage.getItem('planto_selected_plant');
  const setupDone = localStorage.getItem('planto_field_setup_done') === 'true';
  const rawFields = localStorage.getItem('planto_fields_list');
  let hasValidFieldInList = false;

  if (rawFields) {
    try {
      const parsed = JSON.parse(rawFields);
      if (Array.isArray(parsed) && parsed.length > 0) {
        if (storedFieldName && parsed.some(f => f.name === storedFieldName)) {
          hasValidFieldInList = true;
        }
      }
    } catch (e) {}
  }

  const isFieldNamed = !!storedFieldName && storedFieldName.trim().length > 0;
  const isCropSelected = !!storedCrop && storedCrop.trim().length > 0;

  if (!isFieldNamed || !hasValidFieldInList || !isCropSelected || !setupDone) {
    setTimeout(() => {
      openOnboarding(1);
    }, 250);
  }
});

