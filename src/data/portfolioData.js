export const personalInfo = {
  name: "Shahriar Alom Masud",
  role: "Embedded Systems & Edge AI Engineer",
  tagline: "Bridging Low-Power Hardware Telemetry with Real-Time Intelligent Vision Systems.",
  motto: "Constantly building, learning, and developing myself as an engineer.",
  bannerQuote: "It will happen if you forget the reason why it won't.",
  email: "shahriar0002@std.uftb.ac.bd",
  location: "Dhaka, Bangladesh",
  resumeUrl: "/assets/Shahriar_Alom_Masud_CV.pdf",
  education: {
    degree: "B.Sc. (Engg.) in Internet of Things & Robotics Engineering",
    institution: "University of Frontier Technology, Bangladesh (UFTB)",
    timeline: "2023 – 2027 (Expected)"
  },
  flagshipAchievement: {
    title: "Official Arduino Library Manager Author",
    package: "SmartProv (v2.1.3)",
    url: "https://github.com/Masud744/SmartProv"
  },
  coreValues: [
    "Clarity",
    "High Ownership",
    "Fault-Tolerance",
    "Continuous Improvement"
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shahriar-alom-masud", icon: "/assets/icons/linkedin.svg", color: "#0A66C2" },
    { name: "GitHub", url: "https://github.com/Masud744", icon: null, color: "#90CAF9" },
    { name: "Email", url: "mailto:shahriar0002@std.uftb.ac.bd", icon: "/assets/icons/gmail.svg", color: "#EA4335" },
    { name: "WhatsApp", url: "https://wa.me/8801740071118", icon: "/assets/icons/whatsapp.svg", color: "#25D366" },
    { name: "Facebook", url: "https://www.facebook.com/share/17eXZPb3cR/", icon: "/assets/icons/facebook.svg", color: "#1877F2" },
    { name: "Instagram", url: "https://www.instagram.com/shahriar_alom_masud", icon: "/assets/icons/instagram.svg", color: "#E4405F" },
    { name: "YouTube", url: "https://www.youtube.com/@ShahriarAlomMasud", icon: "/assets/icons/youtube.svg", color: "#FF0000" }
  ]
};

export const corePillars = [
  {
    id: "integrated-firmware",
    title: "Integrated Embedded Engineering",
    icon: "⚡",
    tagline: "Sensor-to-Cloud Telemetry & RTOS",
    description: "Viewing systems holistically — from bare-metal C/C++ firmware and FreeRTOS multitasking to low-power LoRa/MQTT meshes and real-time cloud data pipelines.",
    highlight: "FreeRTOS • ESP32 • LoRa • NVS Flash"
  },
  {
    id: "explainable-ai",
    title: "Explainable Edge AI & Vision",
    icon: "🧠",
    tagline: "High-FPS Inference & Model Transparency",
    description: "Deploying high-speed ONNX, YOLOv8, and MediaPipe computer vision pipelines at 30–60 FPS, coupled with TreeSHAP and Grad-CAM for transparent decision-making.",
    highlight: "30–60 FPS • TreeSHAP • Grad-CAM • YOLOv8"
  },
  {
    id: "failsafe-integrity",
    title: "Fail-Safe Reliability First",
    icon: "🛡️",
    tagline: "Zero-Bricking Architecture",
    description: "Engineering fail-safe OTA update routines with SHA-256 validation, dual-partition rollback mechanisms, watchdog recovery, and encrypted NVS memory persistence.",
    highlight: "100% Fallback • SHA-256 • Dual Boot Partition"
  }
];

export const marqueeTech = {
  row1: [
    { name: "C++", badge: "Firmware Core", color: "#00599C" },
    { name: "Python 3", badge: "ML & AI", color: "#3776AB" },
    { name: "ESP32", badge: "Xtensa Dual-Core", color: "#E7352C" },
    { name: "FreeRTOS", badge: "Deterministic Kernel", color: "#32CD32" },
    { name: "Arduino Registry", badge: "v2.1.3 Package", color: "#00979D" },
    { name: "LoRa SX1278", badge: "Long-Range Telemetry", color: "#FF6F00" },
    { name: "YOLOv8", badge: "Edge Detection", color: "#00F0FF" },
    { name: "OpenCV", badge: "Real-Time Vision", color: "#5C3EE8" },
    { name: "MediaPipe", badge: "468 Mesh Landmarks", color: "#00C49F" },
    { name: "ONNX Runtime", badge: "Accelerated Inference", color: "#005CED" },
    { name: "UART / SPI / I2C", badge: "Hardware Bus", color: "#E91E63" }
  ],
  row2: [
    { name: "FastAPI", badge: "Async REST APIs", color: "#009688" },
    { name: "Docker", badge: "Microservices", color: "#2496ED" },
    { name: "GitHub Actions", badge: "Automated CI/CD", color: "#2088FF" },
    { name: "PostgreSQL / Supabase", badge: "Relational Storage", color: "#3ECF8E" },
    { name: "InfluxDB Cloud", badge: "Time-Series Engine", color: "#22ADF6" },
    { name: "React 19 & Vite", badge: "Modern Web Frontends", color: "#61DAFB" },
    { name: "PlatformIO", badge: "Embedded Toolchain", color: "#F16436" },
    { name: "MQTT Mosquitto", badge: "Pub/Sub Messaging", color: "#660066" },
    { name: "Tailwind CSS", badge: "Rapid UI Design", color: "#38B2AC" },
    { name: "n8n Automation", badge: "Event-Driven Pipelines", color: "#EA4B71" }
  ]
};

export const flagshipProjects = [
  {
    id: "smartprov",
    title: "SmartProv (v2.1.3)",
    subtitle: "Official Arduino Library Manager Package",
    category: "Embedded & IoT",
    featuredBadge: "Official Arduino Registry",
    browserSlug: "hardware://smartprov.v2.1.3",
    icon: "📦",
    description: "An asynchronous, event-driven captive-portal Wi-Fi provisioning framework for ESP32 and ESP8266 microcontrollers. Engineered non-volatile NVS flash persistence with automated fallback routines, eliminating manual credential flashing across 100% of device deployments.",
    longDescription: "SmartProv simplifies field IoT device onboarding by initiating an asynchronous AP captive portal on boot when known Wi-Fi networks fail. Credentials are encrypted and persisted to ESP32 Non-Volatile Storage (NVS) with CRC integrity checks. Certified and cataloged in the official Arduino Library Registry across 2.x releases.",
    metrics: [
      { label: "Registry", value: "v2.1.3 Live" },
      { label: "Deployment Fallback", value: "100% Automated" },
      { label: "Target MCUs", value: "ESP32 & ESP8266" },
      { label: "License", value: "MIT Open Source" }
    ],
    techStack: [
      { name: "C++", color: "#00599C" },
      { name: "ESP32", color: "#E7352C" },
      { name: "ESP8266", color: "#4B6EAF" },
      { name: "Arduino Registry", color: "#00979D" },
      { name: "NVS Flash", color: "#1565C0" },
      { name: "CI/CD Actions", color: "#2088FF" }
    ],
    github: "https://github.com/Masud744/SmartProv",
    liveDemo: "https://www.arduino.cc/reference/en/libraries/smartprov/",
    highlights: [
      "Eliminates hardcoded Wi-Fi credentials from firmware source trees.",
      "Multi-network fallback memory with automated reconnections.",
      "Under 30-second mobile phone captive onboarding via DNS redirection.",
      "Published and indexed in the official global Arduino Library Manager."
    ]
  },
  {
    id: "proctorai",
    title: "ProctorAI",
    subtitle: "Full-Stack AI Classroom & Exam Proctoring Platform",
    category: "Edge AI & Vision",
    featuredBadge: "Real-Time 30-60 FPS",
    browserSlug: "vision://proctor-ai.30fps",
    icon: "👁️",
    description: "Real-time computer vision platform tracking eye gaze (EAR), mouth ratio (MAR), phone presence, and 3D head pose via solvePnP at 30–60 FPS. Validated across 35+ students with automated behavioral suspicious scoring and live teacher analytics.",
    longDescription: "A multi-threaded AI proctoring platform that operates locally on webcam feeds without sending raw video to the cloud. Background workers run YOLOv8 object detection for unauthorized devices while MediaPipe Face Mesh calculates facial landmark angles. Telemetry events stream asynchronously to a FastAPI and Supabase backend.",
    metrics: [
      { label: "Inference Speed", value: "30–60 FPS" },
      { label: "Validation Cohort", value: "35+ Students" },
      { label: "Face Mesh Points", value: "468 Landmarks" },
      { label: "Score Latency", value: "< 50ms" }
    ],
    techStack: [
      { name: "Python", color: "#3776AB" },
      { name: "OpenCV", color: "#5C3EE8" },
      { name: "YOLOv8", color: "#00F0FF" },
      { name: "FastAPI", color: "#009688" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Chart.js", color: "#FF6384" }
    ],
    github: "https://github.com/Masud744/ProctorAI",
    liveDemo: "https://ai-classroom-exam-monitoring.netlify.app",
    highlights: [
      "solvePnP head pose estimation calculating pitch, yaw, and roll angles.",
      "Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) fatigue/talking detection.",
      "Standalone Windows client bundled via PyInstaller and automated GitHub Actions release.",
      "Cloud analytics dashboard with real-time suspicious alert notifications."
    ]
  },
  {
    id: "respiguard",
    title: "RespiGuard",
    subtitle: "Explainable Edge AI Respiratory Risk Monitoring System",
    category: "Embedded & IoT",
    featuredBadge: "FreeRTOS & TreeSHAP",
    browserSlug: "clinical://respiguard.rtos",
    icon: "🫁",
    description: "Investigational edge healthcare platform fusing ESP32 environmental sensing (PMS5003 laser particulate, MQ-135, DHT22) running FreeRTOS with hierarchical machine learning, TreeSHAP local waterfall explainability, and Groq LLaMA-3.3 clinical copilot.",
    longDescription: "Bridges localized ambient microclimate monitoring with outdoor Open-Meteo meteorological telemetry to predict acute asthma risk zones based on PEFR criteria. Features an encrypted doctor-patient communication portal and turn-by-turn emergency hospital dispatch routing.",
    metrics: [
      { label: "Sensors Fused", value: "PMS5003, MQ135, DHT22" },
      { label: "RTOS Kernel", value: "FreeRTOS Dual-Core" },
      { label: "AI Copilot", value: "Groq LLaMA 3.3" },
      { label: "Encryption", value: "AES-256 Chat" }
    ],
    techStack: [
      { name: "ESP32", color: "#E7352C" },
      { name: "FreeRTOS", color: "#32CD32" },
      { name: "FastAPI", color: "#009688" },
      { name: "TreeSHAP", color: "#FF9800" },
      { name: "React & Vite", color: "#61DAFB" },
      { name: "Render", color: "#46E3B7" }
    ],
    github: "https://github.com/Masud744/RespiGuard",
    liveDemo: "https://respiguard-fvh9.onrender.com/",
    highlights: [
      "Multi-threaded FreeRTOS firmware streaming particulate sensor metrics via Wi-Fi.",
      "Hierarchical machine learning classifying clinical risk into Green/Yellow/Red tiers.",
      "TreeSHAP waterfall charts explaining individual atmospheric risk drivers.",
      "Interactive Leaflet geospatial emergency dispatch map with hospital routing."
    ]
  },
  {
    id: "solar-hems",
    title: "Solar-Aware HEMS",
    subtitle: "Risk-Aware Smart Home Energy Management System",
    category: "Embedded & IoT",
    featuredBadge: "Uncertainty k-sigma",
    browserSlug: "energy://solar-aware-hems",
    icon: "☀️",
    description: "IoT-enabled energy scheduling system integrating solar generation and load forecasting with empirical uncertainty estimation and Safe Solar Surplus calculation. Features an ESP32 hardware layer with 8-channel relay control and 300ms break-before-make safety delay.",
    longDescription: "Addresses renewable solar intermittent variability by coupling chronological time-series machine learning models with conservative empirical safety margins (k-sigma). Prevents grid backfeed penalties and ensures critical home appliance runtime availability.",
    metrics: [
      { label: "Safety Margin", value: "k-sigma Bounds" },
      { label: "Relay Safety", value: "300ms Interlock" },
      { label: "Telemetry", value: "True RMS Power" },
      { label: "AI Advisory", value: "SolarMate AI" }
    ],
    techStack: [
      { name: "Python", color: "#3776AB" },
      { name: "FastAPI", color: "#009688" },
      { name: "ESP32 C++", color: "#E7352C" },
      { name: "SHAP", color: "#FF9800" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Plotly", color: "#3F4F75" }
    ],
    github: "https://github.com/Masud744/solar-aware-hems",
    liveDemo: "https://solar-aware-hems.vercel.app",
    highlights: [
      "Target-independent feature spaces preventing data leakage in solar forecasts.",
      "Conservative Safe Solar Surplus framework assessing appliance scheduling feasibility.",
      "Hardware AC voltage and discrete RMS real-power / power-factor measurement.",
      "Dual-layer XAI combining TreeSHAP attributions with rule-based explanations."
    ]
  },
  {
    id: "smart-pond-xai",
    title: "Smart Pond XAI",
    subtitle: "Autonomous IoT Catamaran & Precision Aquaculture Platform",
    category: "Embedded & IoT",
    featuredBadge: "LoRa + Catamaran",
    browserSlug: "aquaculture://smart-pond-xai",
    icon: "🚤",
    description: "Autonomous IoT catamaran collecting water temperature, pH, and turbidity. Equipped with long-range SX1278 LoRa telemetry, twin DC propulsion, automated servo fish feeding hatch, and an ensemble Random Forest model with 85.26% species suitability accuracy.",
    longDescription: "A dual-controller embedded architecture (Arduino Mega 2560 + ESP32) engineered for precision fish farming. Features safety interlocks that inhibit fish feeding when water parameters deteriorate, logging high-frequency time-series telemetry to InfluxDB Cloud.",
    metrics: [
      { label: "Test Accuracy", value: "85.26% Ensemble" },
      { label: "Telemetry Range", value: "SX1278 LoRa Km" },
      { label: "Species Evaluated", value: "11 Commercial" },
      { label: "Time-Series DB", value: "InfluxDB Cloud" }
    ],
    techStack: [
      { name: "ESP32", color: "#E7352C" },
      { name: "Arduino Mega", color: "#00979D" },
      { name: "LoRa SX1278", color: "#FF6F00" },
      { name: "FastAPI", color: "#009688" },
      { name: "InfluxDB Cloud", color: "#22ADF6" },
      { name: "TreeSHAP", color: "#FF9800" }
    ],
    github: "https://github.com/Masud744/smart-pond-xai",
    liveDemo: "https://smart-pond-xai1.vercel.app/",
    highlights: [
      "Dual-microcontroller architecture managing physical propulsion and wireless telemetry.",
      "Automated servo feeder with environmental threshold safety interlocks.",
      "Long-range LoRa wireless communication bridging distant fish farms to Wi-Fi gateways.",
      "SHAP TreeExplainer quantifying specific environmental drivers for fish wellness."
    ]
  },
  {
    id: "oncoscan-ai",
    title: "OncoScan AI",
    subtitle: "Full-Stack Explainable Brain Tumor Detection Platform",
    category: "Edge AI & Vision",
    featuredBadge: "Grad-CAM Heatmaps",
    browserSlug: "medical://oncoscan-ai",
    icon: "🧠",
    description: "End-to-end medical deep learning web application classifying MRI brain scans into 4 classes (Glioma, Meningioma, Pituitary, Normal) with >90% accuracy. Features Grad-CAM visual heatmaps and 4x accelerated ONNX Runtime inference.",
    longDescription: "Provides clinical decision support by visualizing tumor boundaries through Gradient-weighted Class Activation Mapping (Grad-CAM). Models were quantized and optimized for low-latency asynchronous FastAPI serving on CPU instances.",
    metrics: [
      { label: "Accuracy", value: "> 90% CNN" },
      { label: "Classes", value: "4 Pathologies" },
      { label: "Latency Boost", value: "~4x via ONNX" },
      { label: "Interpretability", value: "Grad-CAM Overlays" }
    ],
    techStack: [
      { name: "Python", color: "#3776AB" },
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "ONNX Runtime", color: "#005CED" },
      { name: "FastAPI", color: "#009688" },
      { name: "Grad-CAM", color: "#E91E63" },
      { name: "SQLite", color: "#003B57" }
    ],
    github: "https://github.com/Masud744/oncoscan-ai",
    liveDemo: "https://oncoscan-ai.netlify.app/",
    highlights: [
      "Deep Convolutional Neural Network trained on validated MRI benchmark datasets.",
      "Visual Grad-CAM heatmaps giving clinicians explainable pathological cues.",
      "ONNX model quantization delivering sub-second response times on cloud CPUs.",
      "Automated clinical PDF summary report generation with patient diagnostics history."
    ]
  },
  {
    id: "esp32-ota",
    title: "ESP32 GitHub-Based OTA",
    subtitle: "Fail-Safe Over-the-Air Firmware Update Pipeline",
    category: "Embedded & IoT",
    featuredBadge: "Dual-Partition Rollback",
    browserSlug: "firmware://esp32-ota-rollback",
    icon: "🔄",
    description: "Modular ESP32 firmware provisioning and GitHub release-driven OTA update pipeline. Features NVS boot validation counters, SHA-256 hash checks, automatic rollback partitions, and rejected-version blacklisting across 15+ physical hardware nodes.",
    longDescription: "Ensures commercial IoT deployments never get bricked by remote firmware updates. If newly flashed firmware fails to validate its operational state within a defined timeout, the ESP32 hardware watchdog triggers an instantaneous rollback to the verified golden partition.",
    metrics: [
      { label: "Hardware Nodes", value: "15+ Deployed" },
      { label: "Bricking Incidents", value: "0 (Zero)" },
      { label: "Integrity", value: "SHA-256 Verified" },
      { label: "Distribution", value: "GitHub Releases" }
    ],
    techStack: [
      { name: "C++", color: "#00599C" },
      { name: "ESP32", color: "#E7352C" },
      { name: "NVS Flash", color: "#1565C0" },
      { name: "HTTPS OTA", color: "#00979D" },
      { name: "Dual-Partition", color: "#32CD32" },
      { name: "GitHub API", color: "#2088FF" }
    ],
    github: "https://github.com/Masud744/esp32-smartprov-github-ota",
    liveDemo: "https://github.com/Masud744/esp32-smartprov-github-ota/releases",
    highlights: [
      "Automatic polling of GitHub Release assets over secure HTTPS connection.",
      "Two-stage boot validation preventing bootloops upon corrupted flash writes.",
      "State-machine rejection of known unstable firmware binaries.",
      "Tested and verified through physical power-cut experiments during active writes."
    ]
  },
  {
    id: "linkedin-automation",
    title: "LinkedIn Automation with n8n",
    subtitle: "Autonomous AI Content & Webhook Pipeline",
    category: "DevOps & Cloud",
    featuredBadge: "11 GitHub Stars ⭐",
    browserSlug: "automation://n8n-linkedin-ai",
    icon: "⚡",
    description: "Event-driven workflow in n8n leveraging AI APIs to research, draft, format, generate imagery, and auto-publish engineering articles to LinkedIn. Achieved an 80% reduction in manual content production overhead.",
    longDescription: "An advanced modular automation pipeline featuring webhook listeners, rate-limiting handlers, dynamic prompt templating, and LinkedIn API integration for programmatic publishing without manual intervention.",
    metrics: [
      { label: "GitHub Stars", value: "11 ⭐ Community" },
      { label: "Time Saved", value: "~80% Reduction" },
      { label: "Workflows", value: "Multi-Node n8n" },
      { label: "Output", value: "Automated Posts" }
    ],
    techStack: [
      { name: "n8n", color: "#EA4B71" },
      { name: "LinkedIn API", color: "#0A66C2" },
      { name: "AI APIs", color: "#10A37F" },
      { name: "Webhooks", color: "#FF9800" },
      { name: "Automation", color: "#00F0FF" }
    ],
    github: "https://github.com/Masud744/linkedin-content-automation-n8n",
    liveDemo: "https://github.com/Masud744/linkedin-content-automation-n8n",
    highlights: [
      "Autonomous topic discovery, caption generation, and hashtag optimization.",
      "Modular n8n workflow exportable as portable JSON for developers.",
      "Webhook trigger routing supporting multi-account publishing schedules.",
      "Recognized by the open-source community with 11 GitHub stars."
    ]
  }
];

export const journeyTimeline = {
  experience: [
    {
      period: "Apr 2026 – Present",
      role: "Open Source Firmware Author",
      organization: "Arduino Library Manager (Global Registry)",
      badge: "Published Package",
      badgeColor: "#00f0ff",
      description: "Authored and published SmartProv (v2.1.3), an event-driven captive portal Wi-Fi provisioning framework for ESP32 and ESP8266 microcontrollers.",
      bullets: [
        "Eliminated hardcoded credentials and manual flashing across 100% of device deployments.",
        "Engineered encrypted NVS flash persistence with automated multi-network reconnect routines.",
        "Adopted by embedded developers globally; reduced initial field setup from minutes to under 30s."
      ],
      tech: ["C++", "ESP32", "ESP8266", "NVS Flash", "Arduino Registry", "CI/CD"]
    },
    {
      period: "Oct 2025 – Present",
      role: "AI for Immersive Technology Trainee",
      organization: "Kaliakoir Hi-Tech Park, Gazipur (BDSET)",
      badge: "Government Initiative",
      badgeColor: "#00ff88",
      description: "Hands-on engineering in Edge AI, Deep Learning architectures, and immersive computer vision technologies (AR, VR, and XR).",
      bullets: [
        "Developing real-world applications in edge machine learning, lightweight model quantization, and computer vision.",
        "Experimenting with high-frame-rate landmark pipelines and sensor fusion on edge accelerators."
      ],
      tech: ["Edge AI", "Deep Learning", "MediaPipe", "TensorFlow", "AR / XR"]
    },
    {
      period: "Aug 2026",
      role: "Tournament System Architect & Segment Leader",
      organization: "WALTON Presents RoboFusion 1.0 (UFTB)",
      badge: "Leadership & Code",
      badgeColor: "#f7b801",
      description: "Led and coordinated the flagship Robo Soccer championship with 20 participating university teams, while engineering the live digital tournament system.",
      bullets: [
        "Engineered real-time tournament bracket generation, match timers, and penalty shootout tracking.",
        "Built high-contrast projector arena display mode with audio cues and live audience scoreboards.",
        "Awarded official Certificate of Appreciation as Executive Member for flawless tournament execution."
      ],
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Tournament Logic", "Leadership"]
    }
  ],
  education: [
    {
      period: "Aug 2023 – Jun 2027 (Expected)",
      degree: "B.Sc. (Engg.) in Internet of Things & Robotics Engineering",
      institution: "University of Frontier Technology, Bangladesh (UFTB)",
      badge: "Undergraduate Program",
      badgeColor: "#00f0ff",
      description: "Rigorous curriculum focused on embedded system architecture, robotics control theory, edge intelligence, cyber-physical systems, and wireless sensor networks.",
      bullets: [
        "Deep focus on Microcontrollers (ESP32/STM32/AVR), FreeRTOS, and Robotics Kinematics.",
        "Active leader in university robotics initiatives and student welfare organizations.",
        "Authored multiple end-to-end hardware-to-cloud cyber-physical system projects."
      ],
      location: "Gazipur / Dhaka, Bangladesh"
    },
    {
      period: "Aug 2020 – Feb 2022",
      degree: "Higher Secondary Certificate (H.S.C.) — Science",
      institution: "Nilphamari Government College",
      badge: "Graduated",
      badgeColor: "#7000ff",
      description: "Comprehensive foundation in Higher Mathematics, Physics, Chemistry, and Information & Communication Technology.",
      bullets: [
        "Developed strong passion for electronics, circuit theory, and early programming.",
        "Participated in regional science fairs and academic competitions."
      ],
      location: "Nilphamari, Bangladesh"
    },
    {
      period: "Jan 2018 – Feb 2020",
      degree: "Secondary School Certificate (S.S.C.) — Science",
      institution: "Collectorate Public School & College, Nilphamari",
      badge: "Graduated",
      badgeColor: "#00ff88",
      description: "Foundational secondary education with top honors in Science and Mathematics.",
      bullets: [
        "Active member of school debate and science clubs.",
        "Built foundational problem-solving and logical reasoning skills."
      ],
      location: "Nilphamari, Bangladesh"
    }
  ]
};

export const honorsAndCertifications = [
  {
    title: "Certificate of Appreciation (Executive Member)",
    issuer: "WALTON Presents RoboFusion 1.0 — UFTB Robotics Club",
    date: "August 2026",
    badge: "Honors & Leadership",
    color: "#00f0ff",
    description: "Awarded for exceptional execution and leadership as Segment Leader of the Robo Soccer competition, coordinating 20 teams and architecting the digital arena platform."
  },
  {
    title: "Participant — Mini RoboSoccer Segment",
    issuer: "National Robotics Championship (NRC) 2025 — BUBT",
    date: "2025",
    badge: "National Competition",
    color: "#f7b801",
    description: "Competed at the national collegiate robotics tournament, engineering custom motor-driven soccer robots with closed-loop wireless control."
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    date: "2024",
    badge: "Cloud & AI",
    color: "#34A853",
    description: "Certified proficiency in generative AI fundamentals, large language model architectures, and prompt tuning."
  },
  {
    title: "Ambassador (Nilphamari District)",
    issuer: "ICT Olympiad Bangladesh",
    date: "2023",
    badge: "Community Leadership",
    color: "#EA4335",
    description: "Recognized as District Ambassador for promoting digital literacy, computational thinking, and competitive programming among youth."
  },
  {
    title: "Ambassador Badge & Effective Leadership",
    issuer: "HP LIFE",
    date: "2024",
    badge: "Professional Skills",
    color: "#0096D6",
    description: "Certified mastery in strategic leadership, professional communication, and cross-functional team coordination."
  },
  {
    title: "Full Stack Programming (HTML, CSS, Java & JS)",
    issuer: "Udemy Professional Certification",
    date: "2025",
    badge: "Software Engineering",
    color: "#A435F0",
    description: "Rigorous coursework and project verification in object-oriented programming, data structures, and responsive web technologies."
  }
];

export const skillsMatrix = [
  {
    id: "embedded",
    name: "Embedded Systems & IoT",
    icon: "https://skillicons.dev/icons?i=arduino",
    color: "#00f0ff",
    skills: [
      { name: "FreeRTOS", level: 92, tag: "Multitasking / Queues" },
      { name: "ESP32 / ESP8266", level: 96, tag: "Firmware Architecture" },
      { name: "OTA Updates", level: 94, tag: "Dual-Partition Rollback" },
      { name: "NVS Flash", level: 90, tag: "Encrypted Persistence" },
      { name: "LoRa SX1278", level: 88, tag: "Long-Range Telemetry" },
      { name: "UART / SPI / I2C", level: 95, tag: "Sensor Bus Protocols" },
      { name: "MQTT", level: 90, tag: "Telemetry Messaging" },
      { name: "PlatformIO", level: 92, tag: "Build Toolchains" }
    ]
  },
  {
    id: "edge-ai",
    name: "Edge AI & Computer Vision",
    icon: "https://skillicons.dev/icons?i=pytorch",
    color: "#ff007f",
    skills: [
      { name: "YOLOv8 & OpenCV", level: 92, tag: "Real-Time Detection" },
      { name: "MediaPipe", level: 94, tag: "468 Mesh Landmarks" },
      { name: "ONNX Runtime", level: 88, tag: "Quantized Inference" },
      { name: "TreeSHAP & Grad-CAM", level: 90, tag: "Explainable AI (XAI)" },
      { name: "solvePnP Head Pose", level: 92, tag: "3D Spatial Angle" },
      { name: "EAR & MAR Tracking", level: 95, tag: "Fatigue / Gaze Tracking" },
      { name: "Time-Series Forecasting", level: 86, tag: "Sensor Forecasting" }
    ]
  },
  {
    id: "languages",
    name: "Programming Languages",
    icon: "https://skillicons.dev/icons?i=cpp",
    color: "#00ff88",
    skills: [
      { name: "C++ (Modern C++17/20)", level: 95, tag: "Firmware & Memory" },
      { name: "Python 3", level: 94, tag: "AI/ML & Automation" },
      { name: "C (Bare-Metal)", level: 90, tag: "Interrupts & Registers" },
      { name: "TypeScript / JS", level: 88, tag: "Frontends & Node" },
      { name: "SQL", level: 85, tag: "Relational Queries" },
      { name: "Bash / Shell", level: 88, tag: "Linux Automation" }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud, Backend & DevOps",
    icon: "https://skillicons.dev/icons?i=fastapi",
    color: "#7000ff",
    skills: [
      { name: "FastAPI", level: 94, tag: "High-Speed Async APIs" },
      { name: "PostgreSQL / Supabase", level: 90, tag: "Relational Storage" },
      { name: "Docker", level: 88, tag: "Containerized Services" },
      { name: "CI/CD GitHub Actions", level: 92, tag: "Automated Workflows" },
      { name: "InfluxDB Cloud", level: 86, tag: "Time-Series Telemetry" },
      { name: "React 19 & Tailwind", level: 90, tag: "Interactive Dashboards" },
      { name: "n8n Automation", level: 92, tag: "Event-Driven Workflows" }
    ]
  }
];
export const skillCategories = skillsMatrix;

export const terminalCommands = {
  help: [
    "Available commands in Shahriar's Engineer CLI:",
    "  • whoami       : Display engineering profile summary",
    "  • cv           : Display resume download link",
    "  • skills       : Inspect technical skills & RTOS/AI proficiency",
    "  • projects     : List 8 flagship projects with repository URLs",
    "  • journey      : Inspect experience & education milestones",
    "  • ota-test     : Simulate fail-safe OTA update check on ESP32",
    "  • smartprov    : Inspect published Arduino Library Manager package",
    "  • honors       : Show certifications and leadership awards",
    "  • contact      : Print official communication channels",
    "  • motto        : Print engineering philosophy & personal drive",
    "  • clear        : Clear the terminal console"
  ],
  whoami: [
    "NAME: Shahriar Alom Masud",
    "ROLE: Embedded Systems & Edge AI Engineer",
    "ACADEMICS: B.Sc. in IoT & Robotics Engineering (UFTB, 2023-2027)",
    "FOCUS: Low-Power Firmware (ESP32/FreeRTOS) + Edge Computer Vision (YOLOv8/MediaPipe)",
    "AUTHOR: SmartProv (v2.1.3) published on official Arduino Library Manager",
    "STATUS: Systems Online // FreeRTOS Kernel Active"
  ],
  cv: [
    "RESUME: Shahriar_Alom_Masud_CV.pdf",
    "DOWNLOAD: Available in navigation bar or Hero 'Download CV' button.",
    "DIRECT URI: /assets/Shahriar_Alom_Masud_CV.pdf"
  ],
  skills: [
    "[FIRMWARE]  C, C++, ESP32, FreeRTOS, LoRa, Dual-Partition OTA, NVS, UART/SPI/I2C",
    "[AI/VISION] Python, YOLOv8, MediaPipe, OpenCV, TreeSHAP, Grad-CAM, PyTorch",
    "[BACKEND]   FastAPI, Supabase PostgreSQL, InfluxDB Cloud, Docker, Git CI/CD",
    "[STATUS]    Production-tested across 15+ physical hardware nodes & live web apps"
  ],
  projects: [
    "1. SmartProv (v2.1.3)      - Official Arduino Library [github.com/Masud744/SmartProv]",
    "2. ProctorAI               - 30-60 FPS AI Proctoring [github.com/Masud744/ProctorAI]",
    "3. RespiGuard              - Explainable Edge Health IoT [github.com/Masud744/RespiGuard]",
    "4. Solar-Aware HEMS        - Risk-Aware Smart Energy [github.com/Masud744/solar-aware-hems]",
    "5. Smart Pond XAI          - Autonomous LoRa Catamaran [github.com/Masud744/smart-pond-xai]",
    "6. OncoScan AI             - Brain MRI Deep Learning [github.com/Masud744/oncoscan-ai]",
    "7. ESP32 GitHub OTA        - Fail-Safe Firmware Pipeline [github.com/Masud744/esp32-smartprov-github-ota]",
    "8. LinkedIn Automation n8n - Autonomous AI Pipeline 11⭐ [github.com/Masud744/linkedin-content-automation-n8n]"
  ],
  journey: [
    "[EXPERIENCE] Open Source Author -- SmartProv (v2.1.3) on Arduino Library Manager (2026-Pres)",
    "[TRAINING]   AI for Immersive Tech -- Kaliakoir Hi-Tech Park, Gazipur (2025-Pres)",
    "[LEADERSHIP] Segment Leader & System Architect -- WALTON RoboFusion 1.0 (2026)",
    "[EDUCATION]  B.Sc. in IoT & Robotics Engineering -- UFTB (2023-2027)",
    "[COLLEGE]    H.S.C. Science -- Nilphamari Government College (2020-2022)"
  ],
  honors: [
    "1. Certificate of Appreciation (Executive Member) - WALTON RoboFusion 1.0 (2026)",
    "2. Participant - National Robotics Championship (NRC) 2025 Mini RoboSoccer",
    "3. Introduction to Generative AI - Google Cloud Skills Boost (2024)",
    "4. District Ambassador - ICT Olympiad Bangladesh (2023)",
    "5. Ambassador Badge & Leadership - HP LIFE (2024)"
  ],
  "ota-test": [
    "[SIM] Checking GitHub Releases for ESP32 target...",
    "[HTTP] GET https://api.github.com/repos/Masud744/esp32-smartprov-github-ota/releases/latest",
    "[OTA] Remote Version: v2.1.3 | Current Version: v2.1.2",
    "[OTA] Verification: SHA-256 Checksum matched. Dual-partition boot verified.",
    "[NVS] Staged to OTA_1 partition. Boot counter initialized.",
    "[SUCCESS] Firmware update completed with zero bricking. Welcome to v2.1.3!"
  ],
  smartprov: [
    "PACKAGE: SmartProv",
    "LATEST VERSION: v2.1.3",
    "REGISTRY: Official Arduino Library Manager",
    "COMPATIBILITY: ESP32, ESP8266, ESP-IDF Arduino core",
    "FEATURES: Asynchronous AP portal, NVS encrypted storage, automated Wi-Fi reconnect",
    "URL: https://www.arduino.cc/reference/en/libraries/smartprov/"
  ],
  contact: [
    "EMAIL:    shahriar0002@std.uftb.ac.bd",
    "LINKEDIN: https://www.linkedin.com/in/shahriar-alom-masud",
    "GITHUB:   https://github.com/Masud744",
    "LOCATION: Dhaka, Bangladesh",
    "COLLAB:   Open for high-impact IoT/Embedded projects & Edge AI research"
  ],
  motto: [
    "\"No matter how hard you try to protect yourself, one day, you will fail.\"",
    "\"When you fail, each passing day, it opens you up to new possibilities, often helping you emerge as the best version of you.\"",
    "- Shahriar Alom Masud"
  ]
};
