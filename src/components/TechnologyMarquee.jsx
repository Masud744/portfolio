import React from "react";
import { marqueeTech } from "../data/portfolioData";
import { playHover } from "../utils/sound";

export default function TechnologyMarquee() {
  return (
    <div className="technology-marquee-wrapper">
      <div className="marquee-label-row">
        <span className="marquee-sub-label">ACTIVE HARDWARE &amp; SOFTWARE STACK // CONTINUOUS FLOW</span>
      </div>

      {/* Row 1: Left to Right */}
      <div className="marquee-track">
        <div className="marquee-inner marquee-inner--ltr">
          {[...marqueeTech.row1, ...marqueeTech.row1].map((tech, idx) => (
            <div
              key={`row1-${tech.name}-${idx}`}
              className="marquee-pill"
              onMouseEnter={playHover}
            >
              <span className="marquee-dot" style={{ backgroundColor: tech.color }} />
              <span className="marquee-name">{tech.name}</span>
              <span className="marquee-badge" style={{ borderColor: `${tech.color}40`, color: tech.color }}>
                {tech.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="marquee-track">
        <div className="marquee-inner marquee-inner--rtl">
          {[...marqueeTech.row2, ...marqueeTech.row2].map((tech, idx) => (
            <div
              key={`row2-${tech.name}-${idx}`}
              className="marquee-pill"
              onMouseEnter={playHover}
            >
              <span className="marquee-dot" style={{ backgroundColor: tech.color }} />
              <span className="marquee-name">{tech.name}</span>
              <span className="marquee-badge" style={{ borderColor: `${tech.color}40`, color: tech.color }}>
                {tech.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
