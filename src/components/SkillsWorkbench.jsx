import React from "react";
import { Cpu, ShieldCheck, Eye, Terminal, Radio, Wrench, Layers } from "lucide-react";

export default function SkillsWorkbench() {
  const capabilityBenches = [
    {
      benchId: "BENCH-01",
      title: "Microcontrollers & Hardware Interfacing",
      icon: Cpu,
      focus: "Peripheral Buses • Sensor Telemetry • Power Stages",
      skills: [
        { name: "ESP32 (Xtensa Dual-Core)", desc: "240MHz, FreeRTOS, BLE/Wi-Fi" },
        { name: "ESP8266 & Arduino AVR", desc: "Bare-metal & HAL frameworks" },
        { name: "Raspberry Pi & SBCs", desc: "Linux edge computing & daemons" },
        { name: "LoRa SX1278 (Sub-GHz)", desc: "Long-range point-to-point & mesh" },
        { name: "Serial Protocols", desc: "UART, SPI, I2C, 1-Wire, RS-485" },
        { name: "Logic-Level Translation", desc: "5V/3.3V bidirectional MOSFET shifters" },
        { name: "Precision Sensing", desc: "PMS5003 laser, MQ-135, DHT22, Hall" },
        { name: "Actuation Drivers", desc: "Optoisolated relay arrays & PWM servos" }
      ]
    },
    {
      benchId: "BENCH-02",
      title: "Firmware Architecture & RTOS",
      icon: ShieldCheck,
      focus: "Deterministic Multi-threading • Fail-Safe OTA • Flash NVS",
      skills: [
        { name: "FreeRTOS Dual-Core", desc: "Preemptive multitasking, semaphores, queues" },
        { name: "Dual-Partition OTA", desc: "SHA-256 validation & automatic rollback" },
        { name: "NVS Flash & EEPROM", desc: "Encrypted credential persistence (AES)" },
        { name: "Captive Portal Setup", desc: "Author of SmartProv v2.1.3 (Official Registry)" },
        { name: "Interrupt Service Routines", desc: "Hardware timers, edge triggers & debouncing" },
        { name: "Watchdog Reliability", desc: "Hardware WDT, brownout reset, safe boot" }
      ]
    },
    {
      benchId: "BENCH-03",
      title: "Edge AI & Real-Time Computer Vision",
      icon: Eye,
      focus: "High-FPS Inference • Landmark Mesh • Explainable AI",
      skills: [
        { name: "YOLOv8 Inference", desc: "Sub-50ms edge object & device detection" },
        { name: "MediaPipe Face Mesh", desc: "468 3D facial landmark tracking" },
        { name: "OpenCV Pipelines", desc: "Real-time frame manipulation & filtering" },
        { name: "ONNX Runtime", desc: "CPU/GPU model quantization & ~4x speedup" },
        { name: "TreeSHAP & Grad-CAM", desc: "Local feature attribution & clinical heatmaps" },
        { name: "solvePnP Pose Estimation", desc: "3D head orientation (pitch, yaw, roll)" },
        { name: "EAR & MAR Algorithms", desc: "Real-time gaze, fatigue, and blink metrics" }
      ]
    },
    {
      benchId: "BENCH-04",
      title: "Core Languages, Tooling & Cloud Stack",
      icon: Terminal,
      focus: "C++17 • Async Backends • Time-Series Telemetry",
      skills: [
        { name: "C & Modern C++", desc: "Memory-safe embedded C++17 standards" },
        { name: "Python 3", desc: "NumPy, PyTorch, SciPy, FastAPI" },
        { name: "PlatformIO Toolchain", desc: "Deterministic builds, board configs, debugging" },
        { name: "TypeScript & React 19", desc: "High-performance web consoles & telemetry UIs" },
        { name: "FastAPI & Supabase", desc: "High-throughput async REST endpoints" },
        { name: "InfluxDB Cloud & MQTT", desc: "High-frequency time-series logging & Mosquitto" },
        { name: "Docker & Linux", desc: "Containerized edge microservices & systemd" },
        { name: "GitHub Actions CI/CD", desc: "Automated firmware binary builds & releases" }
      ]
    }
  ];

  return (
    <section id="capabilities" className="section">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label-group">
            <span className="section-pill">SYSTEM CAPABILITIES</span>
            <span className="section-counter">4 Engineering Benches</span>
          </div>
          <h2 className="section-title">Hardware &amp; Software Engineering Workbench</h2>
          <p className="section-description">
            Validated technical competency across embedded bare-metal firmware, deterministic RTOS kernels, accelerated edge machine learning, and sensor telemetry.
          </p>
        </header>

        {/* Workbench Grid */}
        <div className="capabilities-grid">
          {capabilityBenches.map((bench, idx) => {
            const IconComponent = bench.icon;
            return (
              <div key={idx} className="capability-card">
                <div className="workbench-card-top">
                  <div className="bench-title-row">
                    <span className="bench-id-badge">{bench.benchId}</span>
                    <IconComponent size={17} className="text-cyan" />
                    <h3 className="capability-card-title">{bench.title}</h3>
                  </div>
                  <span className="bench-focus-label">{bench.focus}</span>
                </div>

                {/* Individual Verified Skills */}
                <div className="capability-tags-container">
                  {bench.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="cap-tag">
                      <span className="cap-tag-name">{skill.name}</span>
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
