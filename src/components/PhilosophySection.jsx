import React from "react";
import { Sparkles, Quote, Compass } from "lucide-react";
import { playHover } from "../utils/sound";

export default function PhilosophySection() {
  return (
    <section className="philosophy-section">
      <div className="philosophy-container">
        <div className="section-pill">
          <Compass size={14} className="text-cyan-400" />
          <span>Engineering Mindset</span>
        </div>
        <h2 className="section-heading">A Perspective on Failure & Growth</h2>

        <div className="philosophy-card" onMouseEnter={playHover}>
          <div className="card-ambient-glow" />
          <div className="quote-badge">
            <Quote size={28} className="text-cyan-400 opacity-60" />
          </div>

          <div className="philosophy-content">
            <div className="quote-block bad-news">
              <span className="block-label">Bad News:</span>
              <blockquote className="quote-text">
                "No matter how hard you try to protect yourself, one day, you will fail."
              </blockquote>
            </div>

            <div className="quote-divider" />

            <div className="quote-block good-news">
              <span className="block-label">Good News:</span>
              <blockquote className="quote-text">
                "When you fail, each passing day, it opens you up to new possibilities, often helping you emerge as the best version of you."
              </blockquote>
            </div>
          </div>

          <div className="philosophy-footer">
            <span className="author-tag">— Shahriar Alom Masud</span>
            <span className="author-role">Embedded Systems & Edge AI Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
