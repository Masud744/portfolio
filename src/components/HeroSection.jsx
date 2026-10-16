import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import Github from "./GithubIcon";

export default function HeroSection({ onOpenTerminal }) {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Availability Badge */}
        <div className="status-badge">
          <span className="status-dot" />
          <span className="status-text">Available for Embedded Systems &amp; Edge AI engineering</span>
        </div>

        {/* Name & Role Headline */}
        <h1 className="hero-title">{personalInfo.name}</h1>
        <p className="hero-subtitle">
          Embedded Systems &amp; Edge AI Engineer &bull; Author of <code>SmartProv (v2.1.3)</code>
        </p>

        {/* Lead Narrative */}
        <p className="hero-lead">
          Undergraduate in Internet of Things &amp; Robotics Engineering at the <strong>University of Frontier Technology, Bangladesh</strong>. I specialize in fault-tolerant microcontroller firmware (C/C++, FreeRTOS), wireless telemetry (LoRa, MQTT), and deploying lightweight computer vision pipelines (YOLOv8, MediaPipe, ONNX Runtime) to resource-constrained systems.
        </p>

        {/* Quick Engineering Context Grid */}
        <div className="hero-metadata-grid">
          <div className="meta-item">
            <span className="meta-label">Primary Focus</span>
            <span className="meta-val">Firmware Architecture &amp; Edge AI</span>
            <span className="meta-val-sub">ESP32, FreeRTOS, TinyML, OpenCV</span>
          </div>

          <div className="meta-item">
            <span className="meta-label">Published Package</span>
            <span className="meta-val">SmartProv v2.1.3</span>
            <span className="meta-val-sub">Official Arduino Library Manager</span>
          </div>

          <div className="meta-item">
            <span className="meta-label">Education</span>
            <span className="meta-val">B.Sc. in IoT &amp; Robotics Engg.</span>
            <span className="meta-val-sub">UFTB &bull; 2023 – 2027 (Expected)</span>
          </div>

          <div className="meta-item">
            <span className="meta-label">Location &amp; Base</span>
            <span className="meta-val">Dhaka, Bangladesh</span>
            <span className="meta-val-sub">UTC+6 &bull; Open to Remote &amp; On-Site</span>
          </div>
        </div>

        {/* Actions Row */}
        <div className="hero-actions-row">
          <a href="#projects" className="btn-primary">
            <span>View Selected Work</span>
            <ArrowDown size={14} />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Shahriar_Alom_Masud_CV.pdf"
            className="btn-secondary"
          >
            <span>Download CV (PDF)</span>
            <Download size={14} />
          </a>

          <div className="social-links-inline">
            <a
              href="https://github.com/Masud744"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn-minimal"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/shahriar-alom-masud"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn-minimal"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="icon-btn-minimal"
              title="Send Direct Email"
              aria-label="Email Address"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
