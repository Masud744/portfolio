import React, { useState } from "react";
import { flagshipProjects } from "../data/portfolioData";
import { ExternalLink, Search, Code2, Cpu, CheckCircle2 } from "lucide-react";
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
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label-group">
            <span className="section-pill">SYSTEMS CONSOLE</span>
            <span className="section-counter">{filtered.length} Production Systems</span>
          </div>
          <h2 className="section-title">Engineering Systems &amp; Case Studies</h2>
          <p className="section-description">
            Production-tested microcontroller firmware, official open-source registry packages, and real-time edge vision architectures verified on physical hardware.
          </p>
        </header>

        {/* Industrial Filter & Search Toolbar */}
        <div className="projects-toolbar">
          <div className="category-chips-row">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`filter-category-btn ${filter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-input-wrapper">
            <Search size={14} className="search-icon" />
            <input
              type="text"
              placeholder="Search MCU, protocol, or system..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="projects-search-field"
              aria-label="Search systems and technologies"
            />
          </div>
        </div>

        {/* Project Case Cards List */}
        <div className="projects-list">
          {filtered.map((proj) => (
            <article key={proj.id} className="project-case-card">
              {/* Card Header with Technical Slug */}
              <div className="project-card-header">
                <div className="project-title-group">
                  <div className="project-slug-row">
                    <span className="project-browser-slug">{proj.browserSlug || `system://${proj.id}`}</span>
                    <span className={`badge-tag ${proj.id === "smartprov" ? "highlight" : ""}`}>
                      {proj.featuredBadge}
                    </span>
                  </div>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-subtitle">{proj.subtitle}</p>
                </div>

                {/* Primary Action Buttons */}
                <div className="project-meta-right">
                  <div className="project-links">
                    <button
                      type="button"
                      className="project-link-action action-inspect"
                      onClick={() => onSelectProject(proj)}
                      title="Inspect full system architecture & hardware specifications"
                    >
                      <Code2 size={13} />
                      <span>Architecture Spec</span>
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
                        className="project-link-action action-live"
                        title="Live Deployment / Official Registry"
                      >
                        <ExternalLink size={13} />
                        <span>Registry / Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Engineering Abstract */}
              <p className="project-summary">{proj.description}</p>

              {/* Verified Engineering Metrics */}
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
                      <span className="bullet-dash">&bull;</span>
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
