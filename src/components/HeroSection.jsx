import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, Download, Mail, Terminal, ExternalLink, ShieldCheck, Cpu, Code2 } from "lucide-react";
import Github from "./GithubIcon";
import Hardware3DViewer from "./Hardware3DViewer";

export default function HeroSection({ onOpenTerminal }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Left Column: Editorial Technical Profile */}
        <div className="hero-content-col">
          {/* Engineering Verification Badge */}
          <div className="hero-status-pill">
            <span className="status-live-dot" />
            <span className="status-live-label">
              Hardware Lab Active &bull; Dhaka (UTC+6) &bull; Open for Internships &amp; Roles
            </span>
          </div>

          {/* Name & Primary Role */}
          <h1 className="hero-display-title">
            Shahriar Alom <span className="title-accent">Masud</span>
          </h1>

          <div className="hero-role-strip">
            <span className="hero-role-primary">Embedded Systems &amp; Edge AI Engineer</span>
            <span className="hero-role-divider">/</span>
            <a
              href="https://github.com/Masud744/SmartProv"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-role-badge"
              title="Official Arduino Registry Package"
            >
              <Cpu size={13} className="text-cyan" />
              <span>Author of <code>SmartProv v2.1.3</code></span>
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Concrete Engineering Abstract */}
          <p className="hero-lead-text">
            Undergraduate in <strong>IoT &amp; Robotics Engineering</strong> at the <em>University of Frontier Technology, Bangladesh (2023–2027)</em>. I bridge deterministic microcontroller firmware (C/C++, FreeRTOS, ESP32) with low-latency edge vision and explainable AI pipelines (YOLOv8, MediaPipe, ONNX Runtime).
          </p>

          {/* Primary Engineering Actions */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary-action">
              <span>Inspect Systems &amp; Code</span>
              <ArrowDown size={14} />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Shahriar_Alom_Masud_CV.pdf"
              className="btn-secondary-action"
            >
              <Download size={14} />
              <span>Download CV (PDF)</span>
            </a>

            {onOpenTerminal && (
              <button
                type="button"
                onClick={onOpenTerminal}
                className="btn-terminal-action"
                title="Open PlatformIO Serial CLI Monitor [Ctrl+~]"
              >
                <Terminal size={14} />
                <span>CLI Terminal</span>
              </button>
            )}
          </div>

          {/* Quick Verified Hardware Telemetry Strip */}
          <div className="hero-specs-grid">
            <div className="spec-card">
              <span className="spec-key">PRIMARY ARCHITECTURE</span>
              <span className="spec-val">ESP32 &bull; FreeRTOS</span>
              <span className="spec-detail">Multithreaded dual-core firmware</span>
            </div>

            <div className="spec-card">
              <span className="spec-key">VERIFIED PACKAGE</span>
              <span className="spec-val">SmartProv v2.1.3</span>
              <span className="spec-detail">Official Global Arduino Registry</span>
            </div>

            <div className="spec-card">
              <span className="spec-key">EDGE INFERENCE</span>
              <span className="spec-val">30–60 FPS Vision</span>
              <span className="spec-detail">YOLOv8 &bull; MediaPipe &bull; ONNX</span>
            </div>

            <div className="spec-card">
              <span className="spec-key">TELEMETRY &amp; BUS</span>
              <span className="spec-val">LoRa &bull; MQTT &bull; UART</span>
              <span className="spec-detail">Fail-safe packet telemetry</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D ESP32 Hardware Centerpiece */}
        <div className="hero-hardware-col">
          <Hardware3DViewer />
        </div>
      </div>
    </section>
  );
}
