import React, { useState } from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

// Continuous scrolling technologies matching Mehrab Hasan's portfolio
const techRow1 = [
  { name: "C / C++", icon: "fas fa-code", color: "#00599C", bg: "rgba(0, 89, 156, 0.09)" },
  { name: "FreeRTOS", icon: "fas fa-cogs", color: "#16a34a", bg: "rgba(22, 163, 74, 0.09)" },
  { name: "ESP32 / ESP8266", icon: "fas fa-microchip", color: "#E7352C", bg: "rgba(231, 53, 44, 0.09)" },
  { name: "Arduino IDE", icon: "fas fa-infinity", color: "#00979D", bg: "rgba(0, 151, 157, 0.09)" },
  { name: "LoRa SX1278", icon: "fas fa-broadcast-tower", color: "#ea580c", bg: "rgba(234, 88, 12, 0.09)" },
  { name: "Linux / POSIX", icon: "fab fa-linux", color: "#ca8a04", bg: "rgba(202, 138, 4, 0.09)" },
  { name: "Python 3.x", icon: "fab fa-python", color: "#2563eb", bg: "rgba(37, 99, 235, 0.09)" },
  { name: "PyTorch", icon: "fas fa-fire", color: "#dc2626", bg: "rgba(220, 38, 38, 0.09)" },
  { name: "OpenCV", icon: "fas fa-eye", color: "#7c3aed", bg: "rgba(124, 58, 237, 0.09)" },
  { name: "YOLOv8 Edge", icon: "fas fa-brain", color: "#0284c7", bg: "rgba(2, 132, 199, 0.09)" },
];

const techRow2 = [
  { name: "ONNX Runtime", icon: "fas fa-bolt", color: "#0284c7", bg: "rgba(2, 132, 199, 0.09)" },
  { name: "MediaPipe", icon: "fas fa-user-circle", color: "#0d9488", bg: "rgba(13, 148, 136, 0.09)" },
  { name: "FastAPI", icon: "fas fa-tachometer-alt", color: "#059669", bg: "rgba(5, 150, 105, 0.09)" },
  { name: "Docker", icon: "fab fa-docker", color: "#0284c7", bg: "rgba(2, 132, 199, 0.09)" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "#2563eb", bg: "rgba(37, 99, 235, 0.09)" },
  { name: "InfluxDB Cloud", icon: "fas fa-chart-line", color: "#0284c7", bg: "rgba(2, 132, 199, 0.09)" },
  { name: "React.js", icon: "fab fa-react", color: "#0891b2", bg: "rgba(8, 145, 178, 0.09)" },
  { name: "MQTT Mosquitto", icon: "fas fa-satellite-dish", color: "#9333ea", bg: "rgba(147, 51, 234, 0.09)" },
  { name: "Git / CI/CD", icon: "fab fa-github", color: "#1e293b", bg: "rgba(30, 41, 59, 0.09)" },
  { name: "UART / SPI / I2C", icon: "fas fa-network-wired", color: "#d97706", bg: "rgba(217, 119, 6, 0.09)" },
];

export default function SkillSection({ theme }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentSkill = skills.data[activeTab] || skills.data[0];

  return (
    <div>
      {/* Domain Navigation Tabs */}
      <div className="skills-domain-tabs">
        {skills.data.map((skill, index) => (
          <button
            key={index}
            className={`domain-tab-btn ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {skill.title.split("&")[0].trim()}
          </button>
        ))}
      </div>

      {/* Domain Display Card */}
      <Fade bottom duration={1000} distance="30px">
        <div className="skills-domain-card">
          <div className="skills-illustration-col">
            <GetSkillSvg fileName={currentSkill.fileName} theme={theme} />
          </div>

          <div className="skills-content-col">
            <span className="skills-domain-overline">Domain Expert</span>
            <h2 className="skills-domain-title">{currentSkill.title}</h2>

            <div className="skills-bullets-grid">
              {currentSkill.skills.map((sentence, idx) => {
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
        </div>
      </Fade>

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
                  style={{ backgroundColor: tech.bg, color: tech.color }}
                >
                  <i className={tech.icon}></i>
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
                  style={{ backgroundColor: tech.bg, color: tech.color }}
                >
                  <i className={tech.icon}></i>
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
