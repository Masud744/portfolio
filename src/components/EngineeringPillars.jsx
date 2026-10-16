import React from "react";
import { corePillars } from "../data/portfolioData";
import { ShieldCheck, Cpu, Brain, CheckCircle } from "lucide-react";
import { playHover, playClick } from "../utils/sound";

export default function EngineeringPillars() {
  const getIcon = (id) => {
    switch (id) {
      case "integrated-firmware":
        return <Cpu className="pillar-svg-icon text-cyan" size={32} />;
      case "explainable-ai":
        return <Brain className="pillar-svg-icon text-purple" size={32} />;
      case "failsafe-integrity":
        return <ShieldCheck className="pillar-svg-icon text-emerald" size={32} />;
      default:
        return <Cpu size={32} />;
    }
  };

  return (
    <section id="pillars" className="pillars-section">
      <div className="section-head">
        <div className="section-eyebrow-wrap">
          <div className="eyebrow-line" />
          <span className="section-pill">CORE METHODOLOGY</span>
          <div className="eyebrow-line" />
        </div>
        <h2 className="section-heading">Architectural Engineering Pillars</h2>
        <p className="section-desc">
          How I approach hardware, telemetry, and machine learning — balancing raw low-level performance with mathematical explainability and zero-bricking guarantees.
        </p>
      </div>

      <div className="pillars-grid">
        {corePillars.map((pillar) => (
          <div
            key={pillar.id}
            className="pillar-card"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            <div className="pillar-icon-box">
              {getIcon(pillar.id)}
            </div>

            <span className="pillar-tagline">{pillar.tagline}</span>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-description">{pillar.description}</p>

            <div className="pillar-footer">
              <CheckCircle size={14} className="text-cyan shrink-0" />
              <span className="pillar-highlight">{pillar.highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
