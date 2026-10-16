import React, { useState } from "react";
import { journeyTimeline } from "../data/portfolioData";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export default function JourneyTimeline() {
  const [tab, setTab] = useState("all");

  const experienceItems = journeyTimeline.experience.map(item => ({ ...item, type: "Engineering & Open Source" }));
  const educationItems = journeyTimeline.education.map(item => ({ ...item, type: "Degree & Specialization" }));

  let displayedItems = [];
  if (tab === "experience") displayedItems = experienceItems;
  else if (tab === "education") displayedItems = educationItems;
  else displayedItems = [...experienceItems, ...educationItems];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label-group">
            <span className="section-pill">CAREER RECORD</span>
            <span className="section-counter">Chronological Trajectory</span>
          </div>
          <h2 className="section-title">Experience &amp; Academic Milestones</h2>
          <p className="section-description">
            A chronological track record of open-source firmware authoring, institutional specialized training, and university engineering education.
          </p>
        </header>

        {/* Tab Filters */}
        <div className="timeline-tabs-row">
          <button
            type="button"
            onClick={() => setTab("all")}
            className={`timeline-tab-btn ${tab === "all" ? "active" : ""}`}
          >
            All Milestones
          </button>

          <button
            type="button"
            onClick={() => setTab("experience")}
            className={`timeline-tab-btn ${tab === "experience" ? "active" : ""}`}
          >
            Open Source &amp; Training
          </button>

          <button
            type="button"
            onClick={() => setTab("education")}
            className={`timeline-tab-btn ${tab === "education" ? "active" : ""}`}
          >
            Academic Degree
          </button>
        </div>

        {/* Timeline Entries List */}
        <div className="timeline-list">
          {displayedItems.map((item, index) => (
            <article key={index} className="timeline-entry">
              {/* Date & Category Column */}
              <div className="timeline-date-col">
                <span className="timeline-period-text">{item.period}</span>
                <span className="timeline-type-pill">{item.type}</span>
              </div>

              {/* Main Content Column */}
              <div className="timeline-content-col">
                <div className="timeline-entry-header">
                  <h3 className="timeline-role">{item.role || item.degree}</h3>
                  <span className="badge-tag highlight">{item.badge}</span>
                </div>

                <div className="timeline-org">{item.organization || item.institution}</div>

                <p className="timeline-desc">{item.description}</p>

                {/* Sub Bullets */}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="timeline-sub-bullets">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="timeline-sub-bullet">
                        <span className="bullet-dash">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Badges */}
                {item.tech && item.tech.length > 0 && (
                  <div className="timeline-tags">
                    {item.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
