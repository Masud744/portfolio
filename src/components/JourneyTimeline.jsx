import React, { useState } from "react";
import { journeyTimeline } from "../data/portfolioData";
import { Briefcase, GraduationCap } from "lucide-react";

export default function JourneyTimeline() {
  const [tab, setTab] = useState("all");

  const experienceItems = journeyTimeline.experience.map(item => ({ ...item, type: "Experience" }));
  const educationItems = journeyTimeline.education.map(item => ({ ...item, type: "Education" }));

  let displayedItems = [];
  if (tab === "experience") displayedItems = experienceItems;
  else if (tab === "education") displayedItems = educationItems;
  else displayedItems = [...experienceItems, ...educationItems];

  return (
    <section id="experience" className="section">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Trajectory</span>
          <h2 className="section-title">Experience &amp; Education</h2>
          <p className="section-description">
            A chronological record of open-source contributions, specialized embedded training, and academic background.
          </p>
        </header>

        {/* Tab Filters */}
        <div style={{ display: "flex", gap: "6px", marginBottom: "32px" }}>
          <button
            onClick={() => setTab("all")}
            style={{
              padding: "5px 12px",
              fontSize: "0.8125rem",
              fontWeight: 500,
              borderRadius: "6px",
              border: "1px solid",
              borderColor: tab === "all" ? "var(--border-strong)" : "var(--border-subtle)",
              backgroundColor: tab === "all" ? "var(--bg-surface-raised)" : "transparent",
              color: tab === "all" ? "var(--text-primary)" : "var(--text-secondary)",
              cursor: "pointer"
            }}
          >
            All Milestones
          </button>

          <button
            onClick={() => setTab("experience")}
            style={{
              padding: "5px 12px",
              fontSize: "0.8125rem",
              fontWeight: 500,
              borderRadius: "6px",
              border: "1px solid",
              borderColor: tab === "experience" ? "var(--border-strong)" : "var(--border-subtle)",
              backgroundColor: tab === "experience" ? "var(--bg-surface-raised)" : "transparent",
              color: tab === "experience" ? "var(--text-primary)" : "var(--text-secondary)",
              cursor: "pointer"
            }}
          >
            Experience &amp; Open Source
          </button>

          <button
            onClick={() => setTab("education")}
            style={{
              padding: "5px 12px",
              fontSize: "0.8125rem",
              fontWeight: 500,
              borderRadius: "6px",
              border: "1px solid",
              borderColor: tab === "education" ? "var(--border-strong)" : "var(--border-subtle)",
              backgroundColor: tab === "education" ? "var(--bg-surface-raised)" : "transparent",
              color: tab === "education" ? "var(--text-primary)" : "var(--text-secondary)",
              cursor: "pointer"
            }}
          >
            Education
          </button>
        </div>

        {/* Timeline Entries List */}
        <div className="timeline-list">
          {displayedItems.map((item, index) => (
            <div key={index} className="timeline-entry">
              <div className="timeline-date-col">
                <span>{item.period}</span>
                <div style={{ marginTop: "4px" }}>
                  <span className="badge-tag" style={{ fontSize: "0.625rem" }}>
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="timeline-content-col">
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                  <h3 className="timeline-role">{item.role || item.degree}</h3>
                  <span className="badge-tag">{item.badge}</span>
                </div>

                <div className="timeline-org">
                  {item.organization || item.institution}
                  {item.location && <span style={{ color: "var(--text-muted)", fontWeight: 400 }}> &bull; {item.location}</span>}
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="timeline-sub-bullets">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="timeline-sub-bullet">
                        <span style={{ color: "var(--accent-blue)", flexShrink: 0 }}>&bull;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tech && (
                  <div className="timeline-tags">
                    {item.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
