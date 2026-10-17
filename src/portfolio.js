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
  subTitle:
    "Bridging Low-Power Hardware Telemetry with Real-Time Intelligent Vision Systems. Undergraduate in IoT & Robotics Engineering at University of Frontier Technology, Bangladesh (UFTB).",
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
          skillName: "FreeRTOS",
          fontAwesomeClassname: "fas fa-cogs",
          style: { color: "#32CD32" },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "fas fa-infinity",
          style: { color: "#00979D" },
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
        "⚡ Core Engineering Specialization: Embedded Microcontrollers, Robotics Kinematics & Actuation, Real-Time Operating Systems (RTOS), and Edge AI.",
        "⚡ Author of SmartProv (v2.1.3) library published in the official global Arduino Library Registry.",
        "⚡ Leading research initiatives on explainable edge AI (TreeSHAP) and low-power telemetry mesh networks.",
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
        "⚡ Graduated with perfect Grade Point Average (GPA 5.00 / 5.00).",
        "⚡ Focused on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology.",
        "⚡ Active participant in regional science fairs and physics olympiads.",
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
        "⚡ Graduated with perfect Grade Point Average (GPA 5.00 / 5.00).",
        "⚡ Built foundational robotics and electronic prototyping projects.",
      ],
      website_link: "https://cpscnil.edu.bd",
    },
  ],
};

export const certifications = {
  certifications: [
    {
      title: "Official Arduino Library Manager Author (v2.1.3)",
      subtitle: "- Arduino Library Registry",
      logo_path: "arduino_logo.png",
      certificate_link: "https://www.arduino.cc/reference/en/libraries/smartprov/",
      alt_name: "Arduino",
      color_code: "#ffffff",
    },
    {
      title: "Edge AI for Immersive Technology Trainee",
      subtitle: "- ICT Division, Bangladesh",
      logo_path: "ict_logo.png",
      certificate_link: "https://ictd.gov.bd/",
      alt_name: "ICT Division",
      color_code: "#ffffff",
    },
    {
      title: "Champion — National Science & Technology Week",
      subtitle: "- Ministry of Science & Technology",
      logo_path: "most_logo.png",
      certificate_link: "#",
      alt_name: "MoST",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
export const experience = {
  title: "Experience",
  subtitle: "Open Source, Engineering Projects & Leadership",
  description:
    "I have designed resilient bare-metal firmware, orchestrated real-time computer vision pipelines, and published production libraries to global developer registries. I thrive at the hardware-software boundary.",
  header_image_path: "experience.svg",
  sections: [
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
        {
          title: "Edge AI & Embedded Systems Trainee",
          company: "EDGE Project, ICT Division, Bangladesh",
          company_url: "https://ictd.gov.bd/",
          logo_path: "ict_logo.png",
          duration: "2024",
          location: "Dhaka, Bangladesh",
          description:
            "Completed rigorous hands-on training in Deep Learning for Edge Devices, TinyML model quantization, TensorRT acceleration, and 30-60 FPS computer vision pipelines using OpenCV and YOLOv8.",
          color: "#138808",
        },
      ],
    },
    {
      title: "Leadership & Community",
      experiences: [
        {
          title: "System Architect & Hardware Segment Leader",
          company: "UFTB Robotics & IoT Club",
          company_url: "https://uftb.ac.bd",
          logo_path: "university_logo.png",
          duration: "2023 - PRESENT",
          location: "UFTB, Bangladesh",
          description:
            "Spearheaded technical workshops and hackathons on microcontroller interfacing, sensor-to-cloud telemetry, and PCB circuit design. Mentored junior engineering students in C/C++ firmware debugging.",
          color: "#0A2472",
        },
      ],
    },
  ],
};

// Projects Page
export const projectsHeader = {
  title: "Projects",
  description:
    "Flagship engineering achievements bridging bare-metal hardware, FreeRTOS, explainable AI, and full-stack cloud telemetry.",
  avatar_image_path: "projects_image.svg",
};

export const publicationsHeader = {
  title: "Publications & Research",
  description:
    "Research papers and investigational studies in explainable Edge AI, FreeRTOS healthcare monitoring, and precision aquaculture.",
};

export const publications = {
  data: [
    {
      id: "respiguard-paper",
      name: "RespiGuard: Hierarchical Explainable Edge AI for Respiratory Risk Prediction",
      createdAt: "2024-06-01T00:00:00Z",
      description:
        "Investigational study coupling FreeRTOS ambient environmental sensing with TreeSHAP local waterfall explainability for early clinical risk assessment.",
      url: "https://github.com/Masud744/RespiGuard",
    },
  ],
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
