import React from "react";
import { honorsAndCertifications } from "../data/portfolioData";
import { Award, CheckCircle } from "lucide-react";

export default function HonorsSection() {
  return (
    <section id="honors" className="section">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Honors &amp; Certifications</h2>
          <p className="section-description">
            Verified competition records, leadership responsibilities, and technical program completions.
          </p>
        </header>

        <div className="honors-list">
          {honorsAndCertifications.map((honor, index) => (
            <div key={index} className="honor-item">
              <div className="honor-left">
                <CheckCircle size={14} color="var(--status-green)" style={{ flexShrink: 0 }} />
                <div>
                  <span className="honor-title-text">{honor.title}</span>
                  <span className="honor-issuer-text"> &bull; {honor.issuer}</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="badge-tag">{honor.badge}</span>
                <span className="honor-date-badge">{honor.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
