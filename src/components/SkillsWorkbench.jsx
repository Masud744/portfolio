import React from "react";
import { Cpu, ShieldCheck, Eye, Terminal } from "lucide-react";

export default function SkillsWorkbench() {
  const capabilityGroups = [
    {
      title: "Microcontrollers & Hardware Interfacing",
      icon: Cpu,
      description: "Low-level peripheral interfacing, sensor bus communication, and power management.",
      skills: [
        { name: "ESP32 (Xtensa Dual-Core)", desc: "Wi-Fi, BLE, FreeRTOS" },
        { name: "ESP8266 & Arduino", desc: "Bare-metal & framework" },
        { name: "Raspberry Pi", desc: "Linux edge computing" },
        { name: "LoRa SX1278", desc: "Sub-GHz long-range telemetry" },
        { name: "Bus Protocols", desc: "UART, SPI, I2C, 1-Wire" },
        { name: "Logic-Level Shifting", desc: "5V to 3.3V safe translation" },
        { name: "Precision Sensing", desc: "PMS5003 laser, MQ-135, DHT22" },
        { name: "Relay & Motor Actuation", desc: "Interlocked relay drivers" }
      ]
    },
    {
      title: "Firmware Architecture & RTOS",
      icon: ShieldCheck,
      description: "Deterministic task scheduling, fail-safe updates, and non-volatile memory handling.",
      skills: [
        { name: "FreeRTOS Multitasking", desc: "Queues, semaphores, timers" },
        { name: "Dual-Partition OTA", desc: "SHA-256 validation & rollback" },
        { name: "NVS Flash & EEPROM", desc: "Encrypted credential storage" },
        { name: "Captive Portal Setup", desc: "SmartProv author (v2.1.3)" },
        { name: "Hardware Timers & ISR", desc: "Low-latency interrupt handling" },
        { name: "Watchdog Recovery", desc: "Automated brownout & lockup reset" }
      ]
    },
    {
      title: "Edge AI & Computer Vision",
      icon: Eye,
      description: "Real-time edge model deployment, feature landmarking, and interpretability.",
      skills: [
        { name: "YOLOv8 Inference", desc: "Edge object & phone detection" },
        { name: "MediaPipe Face Mesh", desc: "468 landmark facial tracking" },
        { name: "OpenCV Pipelines", desc: "Low-latency video processing" },
        { name: "ONNX Runtime", desc: "Model quantization & ~4x speedup" },
        { name: "TreeSHAP & Grad-CAM", desc: "Local feature attribution" },
        { name: "Spatial Math (solvePnP)", desc: "3D head pose estimation" },
        { name: "EAR & MAR Algorithms", desc: "Gaze, fatigue & blink analysis" }
      ]
    },
    {
      title: "Languages, Cloud & Tooling",
      icon: Terminal,
      description: "Core languages, automated test and release pipelines, and telemetry storage.",
      skills: [
        { name: "C & Modern C++", desc: "C++17 firmware core" },
        { name: "Python 3", desc: "ML pipelines & REST APIs" },
        { name: "TypeScript & JavaScript", desc: "React 19 & web interfaces" },
        { name: "FastAPI", desc: "High-throughput async APIs" },
        { name: "PlatformIO & Arduino IDE", desc: "Embedded build systems" },
        { name: "Docker & Linux", desc: "Containerized edge services" },
        { name: "GitHub Actions CI/CD", desc: "Automated builds & releases" },
        { name: "InfluxDB & Supabase", desc: "Time-series & PostgreSQL" }
      ]
    }
  ];

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Technical Capabilities &amp; Tooling</h2>
          <p className="section-description">
            A comprehensive overview of hardware platforms, firmware frameworks, and machine learning toolchains deployed across verified systems.
          </p>
        </header>

        <div className="capabilities-grid">
          {capabilityGroups.map((group, idx) => {
            const IconComponent = group.icon;
            return (
              <div key={idx} className="capability-card">
                <h3 className="capability-card-title">
                  <IconComponent size={16} color="var(--accent-blue)" />
                  <span>{group.title}</span>
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "16px" }}>
                  {group.description}
                </p>

                <div className="capability-tags-container">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="cap-tag">
                      <span>{skill.name}</span>
                      <span className="cap-tag-desc">&bull; {skill.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
