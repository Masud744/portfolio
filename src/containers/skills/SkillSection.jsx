import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import embeddedAvatar from "../../assets/images/masud_avatar_embedded.jpg";
import edgeAiAvatar from "../../assets/images/masud_avatar_edge_ai.jpg";
import cloudIotAvatar from "../../assets/images/masud_avatar_cloud_iot.jpg";

function GetSkillSvg(props) {
  const isEmbedded = props.fileName === "FullStackImg" || props.title?.includes("Embedded");
  const isEdgeAi = props.fileName === "DataScienceImg" || props.title?.includes("Edge AI");

  const avatarSrc = isEmbedded
    ? embeddedAvatar
    : isEdgeAi
    ? edgeAiAvatar
    : cloudIotAvatar;

  const avatarAlt = isEmbedded
    ? "Embedded Systems & Firmware Engineering"
    : isEdgeAi
    ? "Edge AI & Computer Vision"
    : "Cloud IoT & Full-Stack Telemetry";

  return (
    <img
      src={avatarSrc}
      alt={avatarAlt}
      style={{
        width: "100%",
        maxHeight: "340px",
        objectFit: "contain",
        borderRadius: "16px",
        filter: "drop-shadow(0 12px 28px rgba(0, 28, 85, 0.12))",
      }}
    />
  );
}

import {
  SiCplusplus,
  SiEspressif,
  SiArduino,
  SiLinux,
  SiPython,
  SiPytorch,
  SiOpencv,
  SiYolo,
  SiOnnx,
  SiMediapipe,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiInfluxdb,
  SiReact,
  SiMqtt,
  SiGit,
  SiStmicroelectronics,
  SiRaspberrypi,
  SiRos,
  SiKicad,
  SiTensorflow,
} from "react-icons/si";

function FreeRtosLogo({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#00A859" />
      <path
        d="M6 7H16M6 12H13M6 17H10"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="17" r="1.8" fill="#ffffff" />
    </svg>
  );
}

function LoraLogo({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 17C6 11 11 7 18 5M3 21C9 16 15 13 21 12M3 13C5 9.5 8.5 7 13 6"
        stroke="#ea580c"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="4" cy="20" r="1.5" fill="#ea580c" />
    </svg>
  );
}

function SerialBusLogo({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="2"
        stroke="#d97706"
        strokeWidth="1.8"
        fill="rgba(217, 119, 6, 0.15)"
      />
      <path
        d="M2 9H5M2 12H5M2 15H5M19 9H22M19 12H22M19 15H22M9 2V5M12 2V5M15 2V5M9 19V22M12 19V22M15 19V22"
        stroke="#d97706"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2" fill="#d97706" />
    </svg>
  );
}

// Continuous scrolling technologies with real authentic brand logos
const techRow1 = [
  { name: "C / C++", Icon: SiCplusplus, color: "#00599C", bg: "rgba(0, 89, 156, 0.1)" },
  { name: "FreeRTOS", Icon: FreeRtosLogo, color: "#00A859", bg: "rgba(0, 168, 89, 0.1)" },
  { name: "ESP32 / ESP8266", Icon: SiEspressif, color: "#E7352C", bg: "rgba(231, 53, 44, 0.1)" },
  { name: "STM32 ARM", Icon: SiStmicroelectronics, color: "#03234B", bg: "rgba(3, 35, 75, 0.1)" },
  { name: "Arduino IDE", Icon: SiArduino, color: "#00979D", bg: "rgba(0, 151, 157, 0.1)" },
  { name: "LoRa SX1278", Icon: LoraLogo, color: "#ea580c", bg: "rgba(234, 88, 12, 0.1)" },
  { name: "Linux / POSIX", Icon: SiLinux, color: "#ca8a04", bg: "rgba(202, 138, 4, 0.1)" },
  { name: "Python 3.x", Icon: SiPython, color: "#3776AB", bg: "rgba(55, 118, 171, 0.1)" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C", bg: "rgba(238, 76, 44, 0.1)" },
  { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8", bg: "rgba(92, 62, 232, 0.1)" },
  { name: "YOLOv8 Edge", Icon: SiYolo, color: "#0284c7", bg: "rgba(2, 132, 199, 0.1)" },
  { name: "ROS / Robotics", Icon: SiRos, color: "#22314E", bg: "rgba(34, 49, 78, 0.1)" },
];

const techRow2 = [
  { name: "ONNX Runtime", Icon: SiOnnx, color: "#005CED", bg: "rgba(0, 92, 237, 0.1)" },
  { name: "MediaPipe", Icon: SiMediapipe, color: "#007FFF", bg: "rgba(0, 127, 255, 0.1)" },
  { name: "TensorFlow / TinyML", Icon: SiTensorflow, color: "#FF6F00", bg: "rgba(255, 111, 0, 0.1)" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688", bg: "rgba(0, 150, 136, 0.1)" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", bg: "rgba(36, 150, 237, 0.1)" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", bg: "rgba(65, 105, 225, 0.1)" },
  { name: "InfluxDB Cloud", Icon: SiInfluxdb, color: "#22ADF6", bg: "rgba(34, 173, 246, 0.1)" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB", bg: "rgba(97, 218, 251, 0.12)" },
  { name: "MQTT Mosquitto", Icon: SiMqtt, color: "#660066", bg: "rgba(102, 0, 102, 0.1)" },
  { name: "Git / CI/CD", Icon: SiGit, color: "#F05032", bg: "rgba(240, 80, 50, 0.1)" },
  { name: "Raspberry Pi", Icon: SiRaspberrypi, color: "#C51A4A", bg: "rgba(197, 26, 74, 0.1)" },
  { name: "KiCad PCB", Icon: SiKicad, color: "#314CB0", bg: "rgba(49, 76, 176, 0.1)" },
  { name: "UART / SPI / I2C", Icon: SerialBusLogo, color: "#d97706", bg: "rgba(217, 119, 6, 0.1)" },
];

export default function SkillSection({ theme }) {
  return (
    <div>
      {/* Sequential Animated Domain Cards matching main branch scroll experience */}
      <div className="skills-domains-list">
        {skills.data.map((skill, index) => (
          <div key={index} className="skills-domain-card">
            <Fade left duration={1500} distance="30px">
              <div className="skills-illustration-col">
                <GetSkillSvg
                  fileName={skill.fileName}
                  title={skill.title}
                  theme={theme}
                />
              </div>
            </Fade>

            <Fade right duration={1500} distance="30px">
              <div className="skills-content-col">
                <span className="skills-domain-overline">Domain Expert</span>
                <h2 className="skills-domain-title" style={{ color: theme.text }}>
                  {skill.title}
                </h2>

                <div className="skills-bullets-grid">
                  {skill.skills.map((sentence, idx) => {
                    const cleanedText = sentence.replace(/^⚡\s*/, "");
                    return (
                      <div key={idx} className="skills-bullet-item">
                        <span className="skills-bullet-icon">✦</span>
                        <p className="skills-bullet-text">{cleanedText}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>

      {/* Continuous Scrolling Technologies Ticker */}
      <div className="technologies-section-wrapper">
        <div className="technologies-header-bar">
          <span className="technologies-label">Technologies</span>
          <div className="technologies-line"></div>
        </div>

        {/* Row 1 Marquee */}
        <div className="skills-marquee-container">
          <div className="skills-marquee-track track-1">
            {[...techRow1, ...techRow1].map((tech, idx) => (
              <div key={idx} className="tech-pill">
                <div
                  className="tech-pill-icon-box"
                  style={{ backgroundColor: tech.bg }}
                >
                  <tech.Icon size={18} color={tech.color} />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 Marquee */}
        <div className="skills-marquee-container">
          <div className="skills-marquee-track track-2">
            {[...techRow2, ...techRow2].map((tech, idx) => (
              <div key={idx} className="tech-pill">
                <div
                  className="tech-pill-icon-box"
                  style={{ backgroundColor: tech.bg }}
                >
                  <tech.Icon size={18} color={tech.color} />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
