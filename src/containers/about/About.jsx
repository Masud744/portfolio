import React from "react";
import "./About.css";
import { Fade } from "react-reveal";
import { aboutSection } from "../../portfolio";
import {
  FiCpu,
  FiEye,
  FiWifi,
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

  return (
    <div className="about-main" id="about">
      <Fade bottom duration={1000} distance="25px">
        {/* Header Block */}
        <div className="about-header-block">
          <h1 className="about-heading" style={{ color: theme.text }}>
            {aboutSection.title}
          </h1>
          <h3 className="about-subheading-tag">
            {aboutSection.subtitle}
          </h3>
        </div>

        {/* Narrative Statement (clean ash/slate text, open and airy) */}
        <div className="about-narrative-container">
          {aboutSection.paragraphs.map((p, idx) => (
            <p key={idx} className="about-narrative-text" style={{ color: theme.secondaryText }}>
              {p}
            </p>
          ))}
        </div>

        {/* Core Engineering Pillars */}
        <div className="about-section-container">
          <div className="about-section-title-wrap">
            <h2 className="about-section-title" style={{ color: theme.text }}>
              Core Engineering Pillars
            </h2>
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
