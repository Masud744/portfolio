import React from "react";
import "./About.css";
import { Fade } from "react-reveal";
import { aboutSection } from "../../portfolio";
import {
  FiCpu,
  FiEye,
  FiWifi,
  FiShield,
  FiZap,
  FiSearch,
  FiLayers,
  FiArrowRight,
  FiFileText,
  FiMail,
  FiCheck,
} from "react-icons/fi";

export default function About(props) {
  const theme = props.theme;

  const pillarIcons = {
    cpu: <FiCpu className="pillar-header-icon" />,
    eye: <FiEye className="pillar-header-icon" />,
    wifi: <FiWifi className="pillar-header-icon" />,
  };

  const principleIcons = {
    shield: <FiShield className="principle-icon" />,
    zap: <FiZap className="principle-icon" />,
    search: <FiSearch className="principle-icon" />,
    layers: <FiLayers className="principle-icon" />,
  };

  return (
    <div className="about-main" id="about">
      <Fade bottom duration={1200} distance="30px">
        {/* Header Block */}
        <div className="about-header-block">
          <h1 className="about-heading" style={{ color: theme.text }}>
            {aboutSection.title}
          </h1>
          <h3 className="about-subheading-tag">
            {aboutSection.subtitle}
          </h3>
        </div>

        {/* Statement of Purpose Card */}
        <div className="about-statement-card">
          <div className="about-quote-box">
            <span className="about-quote-mark">“</span>
            <p className="about-quote-text">{aboutSection.quote}</p>
          </div>
          <div className="about-divider" />
          <p className="about-intro-text" style={{ color: theme.text }}>
            {aboutSection.intro}
          </p>
        </div>

        {/* Three Engineering Pillars */}
        <div className="about-section-container">
          <div className="about-section-title-wrap">
            <h2 className="about-section-title" style={{ color: theme.text }}>
              Core Engineering Pillars
            </h2>
            <p className="about-section-desc">
              Specialized hardware-software craftsmanship across the complete embedded intelligence lifecycle.
            </p>
          </div>

          <div className="about-pillars-grid">
            {aboutSection.pillars.map((pillar) => (
              <div key={pillar.id} className="about-pillar-card">
                <div className="pillar-card-top">
                  <div className="pillar-icon-box">
                    {pillarIcons[pillar.icon] || <FiCpu className="pillar-header-icon" />}
                  </div>
                  <span className="pillar-number-badge">PILLAR {pillar.id}</span>
                </div>

                <h3 className="pillar-title" style={{ color: theme.text }}>
                  {pillar.title}
                </h3>
                <div className="pillar-focus-badge">{pillar.focus}</div>

                <ul className="pillar-points-list">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="pillar-point-item">
                      <FiCheck className="pillar-point-check" />
                      <span style={{ color: theme.text }}>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pillar-tags-row">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="pillar-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Four Guiding Engineering Principles */}
        <div className="about-section-container">
          <div className="about-section-title-wrap">
            <h2 className="about-section-title" style={{ color: theme.text }}>
              Guiding Engineering Principles
            </h2>
            <p className="about-section-desc">
              Architectural rules and engineering rigor applied to every production firmware build and AI pipeline.
            </p>
          </div>

          <div className="about-principles-grid">
            {aboutSection.principles.map((pr, idx) => (
              <div key={idx} className="about-principle-card">
                <div className="principle-header-row">
                  <div className="principle-icon-box">
                    {principleIcons[pr.icon] || <FiShield className="principle-icon" />}
                  </div>
                  <h4 className="principle-title" style={{ color: theme.text }}>
                    {pr.title}
                  </h4>
                </div>
                <p className="principle-desc" style={{ color: theme.text }}>
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Toolchain Matrix */}
        <div className="about-section-container">
          <div className="about-section-title-wrap">
            <h2 className="about-section-title" style={{ color: theme.text }}>
              Technical Toolchain
            </h2>
            <p className="about-section-desc">
              Direct fluency across microcontrollers, deterministic RTOS, computer vision runtimes, and distributed protocols.
            </p>
          </div>

          <div className="about-toolchain-grid">
            {aboutSection.toolchain.map((tc, idx) => (
              <div key={idx} className="about-toolchain-card">
                <h4 className="toolchain-cat-title">{tc.category}</h4>
                <div className="toolchain-tools-wrap">
                  {tc.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="toolchain-chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="about-metrics-container">
          {aboutSection.metrics.map((m, idx) => (
            <div key={idx} className="about-metric-card">
              <div className="about-metric-value">{m.value}</div>
              <div className="about-metric-label">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="about-cta-container">
          <a href="#/projects" className="about-cta-btn btn-primary">
            View Flagship Projects <FiArrowRight />
          </a>
          <a href="#/resume" className="about-cta-btn btn-secondary">
            <FiFileText /> Review Full Resume
          </a>
          <a href="#/contact" className="about-cta-btn btn-outline">
            <FiMail /> Get in Touch
          </a>
        </div>
      </Fade>
    </div>
  );
}
