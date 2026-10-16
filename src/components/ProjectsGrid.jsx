import React, { useState } from "react";
import { flagshipProjects } from "../data/portfolioData";
import { ExternalLink, ArrowUpRight, Search, Code2 } from "lucide-react";
import Github from "./GithubIcon";

export default function ProjectsGrid({ onSelectProject }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Embedded & IoT", "Edge AI & Vision", "DevOps & Cloud"];

  const filtered = flagshipProjects.filter((p) => {
    const matchCat = filter === "All" || p.category === filter;
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack.some((t) => t.name.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Engineering Systems &amp; Case Studies</h2>
          <p className="section-description">
            Production-tested microcontroller firmware, official open-source packages, and low-latency edge vision platforms engineered for reliability.
          </p>
        </header>

        {/* Clean Filter Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "5px 12px",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  borderRadius: "6px",
                  border: "1px solid",
                  borderColor: filter === cat ? "var(--border-strong)" : "var(--border-subtle)",
                  backgroundColor: filter === cat ? "var(--bg-surface-raised)" : "transparent",
                  color: filter === cat ? "var(--text-primary)" : "var(--text-secondary)",
                  cursor: "pointer",
                  transition: "all 150ms ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "var(--bg-surface)", border: "1px solid var(--border-default)", borderRadius: "6px", padding: "5px 10px", width: "100%", maxWidth: "300px" }}>
            <Search size={14} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search tech, target MCU, or system..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--text-primary)",
                fontSize: "0.8125rem",
                width: "100%",
                fontFamily: "var(--font-sans)"
              }}
            />
          </div>
        </div>

        {/* Project Case Cards List */}
        <div className="projects-list">
          {filtered.map((proj) => (
            <article key={proj.id} className="project-case-card">
              <div className="project-card-header">
                <div className="project-title-group">
                  <h3 className="project-title">{proj.title}</h3>
                  <span className={`badge-tag ${proj.id === "smartprov" ? "highlight" : ""}`}>
                    {proj.featuredBadge}
                  </span>
                </div>

                <div className="project-meta-right">
                  <div className="project-links">
                    <button
                      className="project-link-action"
                      onClick={() => onSelectProject(proj)}
                      title="Inspect full system architecture & hardware specifications"
                    >
                      <Code2 size={13} />
                      <span>Architecture Details</span>
                    </button>

                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-action"
                      title="View GitHub Repository"
                    >
                      <Github size={13} />
                      <span>Source</span>
                    </a>

                    {(proj.liveDemo || proj.liveUrl) && (
                      <a
                        href={proj.liveDemo || proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-action"
                        title="Live Deployment / Documentation"
                      >
                        <ExternalLink size={13} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="project-summary">{proj.description}</p>

              {/* Verified Metrics Row */}
              <div className="project-metrics-row">
                {proj.metrics.map((m, idx) => (
                  <div key={idx} className="project-metric">
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Concrete Key Technical Bullets */}
              {proj.highlights && (
                <ul className="project-bullet-points">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="project-bullet-item">
                      <span className="bullet-icon">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies Tag Row */}
              <div className="project-tags-row">
                {proj.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
