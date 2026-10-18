import React from "react";
import "./About.css";
import { Fade } from "react-reveal";
import { aboutSection } from "../../portfolio";
import { FiCheckCircle } from "react-icons/fi";

export default function About(props) {
  const theme = props.theme;

  return (
    <div className="about-main" id="about">
      <Fade bottom duration={2000} distance="40px">
        <h1 className="about-heading" style={{ color: theme.text }}>
          {aboutSection.title}
        </h1>

        <div className="about-card" style={{ backgroundColor: theme.body }}>
          {aboutSection.paragraphs.map((p, idx) => (
            <p key={idx} className="about-paragraph" style={{ color: theme.secondaryText }}>
              {p}
            </p>
          ))}

          <h3 className="about-competencies-title" style={{ color: theme.text }}>
            Core Competencies
          </h3>
          <div className="about-competencies-grid">
            {aboutSection.coreExpertise.map((item, idx) => (
              <div key={idx} className="about-competency-pill">
                <FiCheckCircle style={{ color: "#10B981", fontSize: "1.2rem", flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="about-metrics-row">
            {aboutSection.metrics.map((m, idx) => (
              <div key={idx} className="about-metric-card">
                <div className="about-metric-value">{m.value}</div>
                <div className="about-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
