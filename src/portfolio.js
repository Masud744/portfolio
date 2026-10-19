/* Personal Portfolio Data for Shahriar Alom Masud */

// Website related settings
export const settings = {
  isSplash: true, // Enable personalized SAM signature splash screen
};

// SEO Related settings
export const seo = {
  title: "Shahriar Alom Masud | Embedded Systems & Edge AI Engineer",
  description:
    "Official Arduino Library Manager Package Author for SmartProv (v2.1.3). Undergraduate in IoT & Robotics Engineering at UFTB. Bare-metal firmware, FreeRTOS, and real-time computer vision inference.",
  og: {
    title: "Shahriar Alom Masud Portfolio",
    type: "website",
    url: "https://github.com/Masud744/portfolio",
  },
};

// Home Page Greeting
export const greeting = {
  title: "Shahriar Alom Masud",
  logo_name: "Shahriar Alom Masud",
  nickname: "Embedded & Edge AI",
  subTitle: [
    "I’m an embedded software engineer focused on microcontroller firmware, real-time systems, and hardware-software integration. I work primarily with C and C++, building modular firmware, developing reliable sensor interfaces, and implementing FreeRTOS-based task architectures and secure OTA updates.",
    "I also work on edge AI and computer vision, with a focus on deploying machine learning models directly on embedded hardware. I optimize on-device inference for low latency and minimal memory overhead, while building reliable telemetry pipelines that connect physical devices with cloud systems.",
  ],
  taglines: [
    "Embedded Systems Engineer",
    "Edge AI Researcher",
    "Robotics Engineer",
    "IoT Systems Engineer",
    "Firmware Developer",
  ],
  resumeLink: "/assets/Shahriar_Alom_Masud_IoT_Resume.pdf",
  portfolio_repository: "https://github.com/Masud744/portfolio",
  githubProfile: "https://github.com/Masud744",
};

export const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Masud744",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shahriar-alom-masud",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "X",
    link: "https://x.com/MasudPlays74",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0009-0002-5308-8272",
    fontAwesomeIcon: "fa-orcid",
    backgroundColor: "#A6CE39",
  },
  {
    name: "Gmail",
    link: "mailto:shahriar0002@std.uftb.ac.bd",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/8801740071118",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@ShahriarAlomMasud",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/17eXZPb3cR/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shahriar_alom_masud",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

export const skills = {
  data: [
    {
      title: "Embedded Systems & Firmware Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Bare-metal C/C++ firmware, FreeRTOS deterministic task scheduling, and ESP32 dual-core architectures",
        "⚡ Wireless sensor telemetry via LoRa (SX1278), MQTT Mosquitto, and Bluetooth Low Energy (BLE)",
        "⚡ Safe OTA firmware updates with SHA-256 validation, dual boot partition, and automated watchdog rollback",
        "⚡ Official Arduino Library Manager Package Author for SmartProv (v2.1.3) with encrypted NVS flash persistence",
      ],
      softwareSkills: [
        {
          skillName: "C/C++",
          fontAwesomeClassname: "fas fa-microchip",
          style: { color: "#00599C" },
        },
        {
          skillName: "ESP32",
          fontAwesomeClassname: "fas fa-memory",
          style: { color: "#E7352C" },
        },
        {
          skillName: "STM32",
          fontAwesomeClassname: "simple-icons:stmicroelectronics",
          style: { color: "#03234B" },
        },
        {
          skillName: "FreeRTOS",
          fontAwesomeClassname: "fas fa-cogs",
          style: { color: "#32CD32" },
        },
        {
          skillName: "PlatformIO",
          fontAwesomeClassname: "simple-icons:platformio",
          style: { color: "#F68212" },
        },
        {
          skillName: "ESP-IDF",
          fontAwesomeClassname: "fas fa-terminal",
          style: { color: "#E7352C" },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "fas fa-infinity",
          style: { color: "#00979D" },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "fab fa-raspberry-pi",
          style: { color: "#C51A4A" },
        },
        {
          skillName: "LoRa SX1278",
          fontAwesomeClassname: "fas fa-broadcast-tower",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "Linux / UART / SPI",
          fontAwesomeClassname: "fab fa-linux",
          style: { color: "#FCC624" },
        },
      ],
    },
    {
      title: "Edge AI & Computer Vision",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Real-time computer vision inference at 30–60 FPS using YOLOv8, MediaPipe (468 facial mesh landmarks), and OpenCV",
        "⚡ Model acceleration and edge optimization using ONNX Runtime, TensorRT, and 8-bit quantization",
        "⚡ Explainable AI (XAI) using TreeSHAP and Grad-CAM for clinical and agricultural decision transparency",
        "⚡ Multimodal AI sensor fusion combining camera streams with microclimate time-series telemetry",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "fab fa-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "fas fa-eye",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "YOLOv8",
          fontAwesomeClassname: "fas fa-brain",
          style: { color: "#00F0FF" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "fas fa-fire",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "MediaPipe",
          fontAwesomeClassname: "fas fa-user-circle",
          style: { color: "#00C49F" },
        },
        {
          skillName: "ONNX Runtime",
          fontAwesomeClassname: "simple-icons:onnx",
          style: { color: "#005CED" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "fas fa-bolt",
          style: { color: "#009688" },
        },
      ],
    },
    {
      title: "Cloud IoT & Full-Stack Telemetry",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Asynchronous microservices and REST APIs using FastAPI, WebSockets, and Docker containerization",
        "⚡ Time-series data streaming and storage with InfluxDB Cloud, PostgreSQL, and Supabase",
        "⚡ Real-time responsive telemetry dashboards built with modern React, Vite, and Tailwind CSS",
        "⚡ Automated firmware compilation and releases using GitHub Actions CI/CD pipelines",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "fab fa-docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "MQTT",
          fontAwesomeClassname: "simple-icons:mqtt",
          style: { color: "#660066" },
        },
        {
          skillName: "WebSockets",
          fontAwesomeClassname: "fas fa-exchange-alt",
          style: { color: "#010101" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "fas fa-database",
          style: { color: "#336791" },
        },
        {
          skillName: "InfluxDB",
          fontAwesomeClassname: "fas fa-chart-line",
          style: { color: "#22ADF6" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "fab fa-react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "fab fa-github",
          style: { color: "#2088FF" },
        },
        {
          skillName: "n8n Automation",
          fontAwesomeClassname: "fas fa-project-diagram",
          style: { color: "#EA4B71" },
        },
      ],
    },
  ],
};

// Education Page
export const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: { color: "#181717" },
      profileLink: "https://github.com/Masud744",
    },
    {
      siteName: "Arduino",
      iconifyClassname: "simple-icons:arduino",
      style: { color: "#00979D" },
      profileLink: "https://www.arduino.cc/reference/en/libraries/smartprov/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: { color: "#0077B5" },
      profileLink: "https://www.linkedin.com/in/shahriar-alom-masud",
    },
  ],
};

export const degrees = {
  degrees: [
    {
      title: "University of Frontier Technology, Bangladesh (UFTB)",
      subtitle: "B.Sc. (Engg.) in Internet of Things & Robotics Engineering",
      logo_path: "university_logo.png",
      alt_name: "UFTB",
      duration: "2023 - 2027 (Expected)",
      descriptions: [
        "Core Coursework: Embedded Systems, Microcontroller Interfacing, Real-Time Operating Systems (RTOS), Data Structures & Algorithms, and Robotics Kinematics.",
        "Hands-on laboratory training in C/C++ firmware development, sensor interfacing, and applied computer vision systems.",
      ],
      website_link: "https://uftb.ac.bd",
    },
    {
      title: "Nilphamari Government College",
      subtitle: "Higher Secondary Certificate (HSC) — Science",
      logo_path: "college_logo.png",
      alt_name: "NGC",
      duration: "2020 - 2022",
      descriptions: [
        "Completed Higher Secondary Certificate (HSC) from Science group with GPA 5.00 / 5.00.",
        "Major Subjects: Physics, Chemistry, Higher Mathematics, and Information & Communication Technology (ICT).",
      ],
      website_link: "https://ngc.edu.bd",
    },
    {
      title: "Collectorate Public School & College",
      subtitle: "Secondary School Certificate (SSC) — Science",
      logo_path: "school_logo.png",
      alt_name: "CPSC",
      duration: "2018 - 2020",
      descriptions: [
        "Completed Secondary School Certificate (SSC) from Science group with GPA 5.00 / 5.00.",
        "Developed a strong academic foundation in general science, mathematics, and analytical problem-solving.",
      ],
      website_link: "https://cpscnil.edu.bd",
    },
  ],
};

export const certifications = {
  certifications: [
    {
      title: "Official Arduino Library Manager Author (v2.1.3)",
      subtitle: "Arduino Library Registry • Published 2024",
      skills: ["C++ Firmware", "NVS Flash", "SmartProv"],
      logo_path: "arduino_logo.png",
      certificate_link:
        "https://www.arduino.cc/reference/en/libraries/smartprov/",
      alt_name: "Arduino Registry",
      color_code: "#f8fafc",
    },
    {
      title: "Participant, Mini RoboSoccer Segment",
      subtitle: "National Robotics Championship (NRC) • BUBT / IUBAT",
      skills: ["Autonomous & RC Robots", "RoboSoccer"],
      logo_path: "nrc_logo.png",
      certificate_link: "https://nationalroboticschampionship.org",
      alt_name: "National Robotics Championship (NRC)",
      color_code: "#f8fafc",
    },
    {
      title: "Certificate of Appreciation — RoboFusion 1.0",
      subtitle: "Executive Member, UFTB Robotics Club • Issued 2026",
      skills: ["Event Management", "Robo Soccer Coordination"],
      logo_path: "robofusion_logo.png",
      certificate_file:
        "/certificates/RoboFusion_Appreciation_Certificate.pdf",
      certificate_link:
        "/certificates/RoboFusion_Appreciation_Certificate.pdf",
      alt_name: "WALTON Presents ROBOFUSION 1.0",
      color_code: "#f8fafc",
    },
    {
      title: "Head of Membership Development",
      subtitle: "Executive Committee (2025-26), UFTB Robotics Club • 2025-2026",
      skills: ["Leadership", "Technical Mentorship", "Robotics"],
      logo_path: "uftb_robotics_club_badge.png",
      certificate_file: "/certificates/head_membership_uftb.jpg",
      certificate_link: "/certificates/head_membership_uftb.jpg",
      alt_name: "UFTB Robotics Club Executive Committee",
      color_code: "#f8fafc",
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "Google Cloud Skills Boost • Issued Dec 2024",
      credential_id: "13320213",
      logo_path: "gcp_logo.png",
      certificate_link: "https://www.cloudskillsboost.google/public_profiles/13320213",
      alt_name: "Google Cloud Skills Boost",
      color_code: "#f8fafc",
    },
    {
      title: "What Is Generative AI?",
      subtitle: "LinkedIn Learning • Issued Dec 2024",
      skills: ["Generative AI", "Generative AI Tools", "Artificial Intelligence (AI)"],
      logo_path: "linkedin_learning_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/ef17f40a3f28a334beb05701b757c05a01d936600c9417df495a9dd034e92922?trk=share_certificate",
      alt_name: "LinkedIn Learning - What Is Generative AI?",
      color_code: "#f8fafc",
    },
    {
      title: "Introduction to IoT",
      subtitle: "Simplilearn • Issued Jan 2024",
      credential_id: "6274416",
      logo_path: "simplilearn_logo.png",
      certificate_file: "/certificates/Iot.Simplilearn Certificate.pdf",
      certificate_link: "/certificates/Iot.Simplilearn Certificate.pdf",
      alt_name: "Simplilearn Introduction to IoT",
      color_code: "#f8fafc",
    },
    {
      title: "HTML, CSS, Java, & JavaScript: Full Stack Programming Course",
      subtitle: "Udemy • Issued Dec 2025",
      logo_path: "udemy_logo.png",
      certificate_link: "https://www.udemy.com/certificate/UC-167995085/",
      alt_name: "Udemy Full Stack Course",
      color_code: "#f8fafc",
    },
    {
      title: "Cyber Security Webinar",
      subtitle: "Team Matrix - Elite Hackers • Issued Mar 2024",
      credential_id: "W00527",
      skills: ["Cybersecurity", "Basic Foundations"],
      logo_path: "team_matrix_logo.png",
      certificate_file: "/certificates/team_matrix_cybersecurity.png",
      certificate_link: "/certificates/team_matrix_cybersecurity.png",
      alt_name: "Team Matrix Elite Hackers",
      color_code: "#f8fafc",
    },
    {
      title: "Introduction to Data Analytics",
      subtitle: "Bohubrihi • Issued Mar 2024",
      credential_id: "65fdf49c2958c1e34240e45b",
      skills: ["Data Analytics", "Data Preprocessing"],
      logo_path: "bohubrihi_logo.png",
      certificate_file: "/certificates/Data Analyst bohubrihi.pdf",
      certificate_link: "/certificates/Data Analyst bohubrihi.pdf",
      alt_name: "Bohubrihi Data Analytics",
      color_code: "#f8fafc",
    },
    {
      title: "Job Ready: Intermediate",
      subtitle: "Wadhwani Foundation • Issued Nov 2023",
      credential_id: "654b9e92196de8ddecf1d475",
      skills: ["Teamwork", "Digital Literacy", "Employability"],
      logo_path: "wadhwani_logo.png",
      certificate_file:
        "/certificates/Wadhwani Foundation Certificate - 654b9e92196de8ddecf1d475.pdf",
      certificate_link:
        "/certificates/Wadhwani Foundation Certificate - 654b9e92196de8ddecf1d475.pdf",
      alt_name: "Wadhwani Foundation Job Ready",
      color_code: "#f8fafc",
    },
    {
      title: "Digital Literacy For Youth",
      subtitle: "ICT Division, Bangladesh • Issued Oct 2023",
      skills: ["Digital Literacy"],
      logo_path: "ict_logo.png",
      certificate_file: "/certificates/Digital Youth.shahriar_alom_masud.pdf",
      certificate_link: "/certificates/Digital Youth.shahriar_alom_masud.pdf",
      alt_name: "ICT Division Digital Literacy",
      color_code: "#f8fafc",
    },
    {
      title: "Ambassador (Nilphamari District)",
      subtitle: "ICT Olympiad Bangladesh • Issued 2023",
      skills: ["Youth Outreach", "STEM Promotion"],
      logo_path: "ict_logo.png",
      certificate_link: "https://ictolympiadbd.com/",
      alt_name: "ICT Olympiad Bangladesh",
      color_code: "#f8fafc",
    },
    {
      title: "Effective Leadership",
      subtitle: "HP LIFE • Issued Oct 2024",
      skills: ["Leadership"],
      logo_path: "hp_logo.png",
      certificate_link: "https://www.life-global.org/",
      alt_name: "HP LIFE Effective Leadership",
      color_code: "#f8fafc",
    },
    {
      title: "Ambassador Badge",
      subtitle: "HP LIFE • Issued Oct 2024",
      logo_path: "hp_logo.png",
      certificate_link: "https://www.life-global.org/",
      alt_name: "HP LIFE Ambassador Badge",
      color_code: "#f8fafc",
    },
  ],
};

// Experience Page
export const experience = {
  title: "Experience",
  subtitle: "Training, Engineering & Open Source",
  description:
    "Specialized technical training in immersive technologies (AR/VR/XR) and edge AI, alongside production firmware architecture and global open-source libraries.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Training",
      experiences: [
        {
          title: "AI for Immersive Technology (BDSET)",
          company: "Kaliakoir Hi-Tech Park, Gazipur",
          company_url: "https://bdset.gov.bd/",
          logo_path: "ict_logo.png",
          duration: "Oct 2025 – Present",
          location: "Kaliakoir Hi-Tech Park, Gazipur",
          description:
            "• Gaining hands-on experience in AI/ML, deep learning, and immersive technologies (AR, VR, MR, and XR).\n• Developing real-world applications in edge artificial intelligence, computer vision, and intelligent system design.",
          color: "#0284c7",
        },
      ],
    },
    {
      title: "Engineering & Open Source",
      experiences: [
        {
          title: "Published Firmware Author — SmartProv (v2.1.3)",
          company: "Official Arduino Library Registry",
          company_url: "https://github.com/Masud744/SmartProv",
          logo_path: "arduino_logo.png",
          duration: "2024 - PRESENT",
          location: "Open Source / Global",
          description:
            "Engineered an asynchronous captive portal provisioning engine for ESP32/ESP8266 MCUs. Features encrypted Non-Volatile Storage (NVS) flash persistence, CRC integrity checks, and automated multi-network fallback. Certified and indexed across the official global Arduino Library Manager.",
          color: "#00979D",
        },
      ],
    },
  ],
};

// Projects Page
export const projectsHeader = {
  title: "Projects",
  description:
    "Flagship engineering achievements bridging bare-metal hardware, FreeRTOS, edge AI, and full-stack cloud telemetry.",
  avatar_image_path: "projects_image.svg",
};

export const publicationsHeader = {
  title: "Publications",
  description: "",
};

export const publications = {
  data: [],
};

// Contact Page
export const contactPageData = {
  contactSection: {
    title: "Reach Out to Me! 📬",
    profile_image_path: "masud_vector_portrait.png",
    description:
      "I am available on almost every platform. Drop me a message anytime, and I'll get back to you within 24 hours! I’d love to help or collaborate on IoT Architecture, Embedded Firmware, TinyML / Edge AI, and Hardware-to-Cloud telemetry systems.",
  },
  blogSection: {
    title: "Articles & Engineering Insights",
    subtitle:
      "Sharing technical deep dives on ESP32 firmware, FreeRTOS multitasking, and high-performance Edge AI pipelines.",
    link: "https://github.com/Masud744",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address & Location",
    subtitle: "UFTB Boys Hostel, Kaliakair, Gazipur, Bangladesh",
    locality: "Kaliakair",
    country: "Bangladesh",
    region: "Gazipur",
    postalCode: "1750",
    streetAddress: "UFTB Boys Hostel, Kaliakair, Gazipur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/search/?api=1&query=UFTB+Boys+Hostel,+Kaliakair,+Gazipur",
  },
  phoneSection: {
    title: "Direct Telemetry Contact",
    subtitle: "+880 1740 071118",
  },
};

// About Section Data (Engineering Profile)
export const aboutSection = {
  title: "About Me",
  subtitle: "Embedded Systems & Edge AI Engineer",
  paragraphs: [
    "I’m an embedded software engineer focused on microcontroller firmware, real-time systems, and hardware-software integration. I work primarily with C and C++, building modular firmware, developing reliable sensor interfaces, and implementing FreeRTOS-based task architectures and secure OTA updates.",
    "I also work on edge AI and computer vision, with a focus on deploying machine learning models directly on embedded hardware. I optimize on-device inference for low latency and minimal memory overhead, while building reliable telemetry pipelines that connect physical devices with cloud systems.",
  ],
  pillars: [
    {
      id: "01",
      icon: "cpu",
      title: "Embedded Firmware & RTOS",
      focus: "Microcontroller Architecture & Low-Level Control",
      points: [
        "C/C++ firmware development on ESP32, ESP8266, and STM32 platforms.",
        "Real-time task scheduling, synchronization, and ISR handling with FreeRTOS.",
        "Dual-partition OTA firmware updates with CRC32 verification and flash rollback.",
        "Bus interfacing over UART, SPI, I2C, and non-volatile memory management (NVS/EEPROM).",
      ],
      tags: ["C/C++", "FreeRTOS", "ESP32", "STM32", "OTA Updates", "NVS Flash"],
    },
    {
      id: "02",
      icon: "eye",
      title: "Edge AI & Computer Vision",
      focus: "On-Device Inference & Model Interpretation",
      points: [
        "Real-time object detection and facial landmark tracking using YOLOv8, MediaPipe, and OpenCV.",
        "Quantized model deployment (TinyML, ONNX Runtime) optimized for edge hardware.",
        "Model interpretability and feature attribution using Grad-CAM heatmaps and TreeSHAP.",
      ],
      tags: ["Python", "OpenCV", "YOLOv8", "MediaPipe", "TinyML", "ONNX"],
    },
    {
      id: "03",
      icon: "wifi",
      title: "Wireless Telemetry & IoT",
      focus: "Sensor Networks & Cloud Telemetry",
      points: [
        "Long-range sensor telemetry using LoRa (SX1278) and lightweight MQTT messaging.",
        "Backend API services and real-time streaming using FastAPI and WebSockets.",
        "Time-series sensor data logging and monitoring dashboards with InfluxDB and React.",
      ],
      tags: ["LoRa SX1278", "MQTT", "FastAPI", "InfluxDB", "WebSockets"],
    },
  ],
};

// Activities & Leadership Data (from Master CV)
export const activitiesSection = {
  title: "Activities",
  subtitle: "Leadership, Community & Competitive Engagements",
  description:
    "Active participant and organizer across university robotics championships, technology clubs, and volunteer welfare units.",
  activities: [
    {
      role: "Robo Soccer Segment Leader",
      organization: "WALTON Presents RoboFusion 1.0 — UFTB Robotics Club",
      duration: "Aug 2026",
      location: "Kaliakoir Hi-Tech Park, Gazipur",
      image: "robofusion_segment_organizer.jpg",
      image_bg: "#ffffff",
      image_fit: "contain",
      banner: "robofusion_banner.jpg",
      description:
        "Led and coordinated the Robo Soccer segment, overseeing 20 participating inter-university teams, arena technical setups, wireless frequency allocations, and tournament execution.",
    },
    {
      role: "Head of Membership Development",
      organization: "UFTB Robotics Club",
      duration: "Oct 2025 — Present",
      location: "UFTB, Gazipur",
      image: "uftb_robotics_club.jpg",
      image_bg: "#ffffff",
      image_fit: "contain",
      description:
        "Organized hands-on technical workshops on microcontroller interfacing, C/C++ firmware debugging, and sensor-to-cloud telemetry for 60+ junior engineering students.",
    },
    {
      role: "Organizational Secretary",
      organization: "Rangpur Divisional Students' Welfare Association, UFTB",
      duration: "Sep 2026 — Present",
      location: "UFTB, Bangladesh",
      image: "rangpur_welfare_association.png",
      image_bg: "#ffffff",
      image_fit: "contain",
      description:
        "Facilitate student networking, academic guidance, and welfare initiatives among engineering undergraduates from Rangpur division.",
    },
    {
      role: "Treasurer",
      organization: "Badhon — University of Frontier Technology Unit",
      duration: "Feb 2026 — Present",
      location: "UFTB Unit",
      image: "badhon_uftb.png",
      image_bg: "#ffffff",
      image_fit: "contain",
      description:
        "Managed financial records, budget allocations, and logistic planning for voluntary campus blood donation drives.",
    },
  ],
};

// Testimonials Section Data
export const testimonialsSection = {
  title: "What People Say",
  testimonials: [
    {
      badge: "ACADEMIC SUPERVISOR",
      quote:
        "Masud has consistently shown a strong grasp of embedded hardware and firmware design throughout his capstone project. He works independently, takes technical feedback seriously, and approaches system integration with great discipline. It has been a pleasure supervising his academic work.",
      name: "Farzana Akter",
      role: "Assistant Professor, Dept. of IoT & Robotics Engineering, UFTB",
    },
    {
      badge: "BATCH ADVISOR",
      quote:
        "As his batch advisor in the IRE department, I have closely observed Masud’s academic progress and technical curiosity. He is sincere in his coursework, excels in hands-on lab sessions, and frequently takes the initiative to explore beyond the syllabus. He is a dedicated student with a very promising future in embedded systems.",
      name: "Mahir Mahbub",
      role: "Lecturer, Dept. of IoT & Robotics Engineering, UFTB",
    },
    {
      badge: "LEADERSHIP PEER",
      quote:
        "Masud is one of the most dependable members of our executive committee. When we organized RoboFusion 1.0, he took full responsibility for the Robo Soccer segment and managed the arena setup and team coordination smoothly. You can always count on him to deliver under tight schedules.",
      name: "Mursalin Misat",
      role: "President, UFTB Robotics Club",
    },
    {
      badge: "PROJECT COLLABORATOR",
      quote:
        "Having collaborated with Masud on multiple IoT and robotics projects, I really appreciate his focus on writing clean, modular C++ code. Whenever we ran into tricky hardware bugs or sensor communication issues in the lab, he was always the one to patiently trace the signals and fix the root cause.",
      name: "Shihab Sarkar",
      role: "Undergraduate Researcher, Dept. of IoT & Robotics Engineering, UFTB",
    },
  ],
};

