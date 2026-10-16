import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Cpu, FileCode } from "lucide-react";
import Github from "./GithubIcon";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="spec-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="spec-modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="spec-modal-header">
          <div className="spec-modal-titlebar-left">
            <span className="titlebar-dot" />
            <span className="spec-modal-slug">architecture://spec/{project.slug || project.id || 'system'}</span>
          </div>

          <button
            type="button"
            className="spec-modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="spec-modal-body">
          <div>
            <div className="spec-modal-title-row">
              <h2 id="modal-project-title" className="spec-modal-title">
                {project.title}
              </h2>
              <span className="badge-tag highlight">{project.featuredBadge}</span>
            </div>
            <p className="spec-modal-subtitle">
              {project.subtitle}
            </p>
          </div>

          <div>
            <h4 className="spec-modal-section-heading">
              System Overview &amp; Problem Solved
            </h4>
            <p className="spec-modal-desc">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Metrics */}
          <div>
            <h4 className="spec-modal-section-heading">
              Verified Performance &amp; Hardware Telemetry
            </h4>
            <div className="project-metrics-row">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="project-metric">
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Details */}
          {project.highlights && (
            <div>
              <h4 className="spec-modal-section-heading">
                Architecture &amp; Safety Mechanisms
              </h4>
              <ul className="project-bullet-points">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="project-bullet-item">
                    <CheckCircle2 size={14} color="var(--status-green)" style={{ flexShrink: 0, marginTop: "4px" }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="spec-modal-section-heading">
              Hardware &amp; Software Toolchain
            </h4>
            <div className="project-tech-chips">
              {project.techStack.map((t, idx) => (
                <span key={idx} className="tech-tag">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="spec-modal-footer">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={14} />
              <span>Inspect Source Repository</span>
            </a>

            {(project.liveDemo || project.liveUrl) && (
              <a
                href={project.liveDemo || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={14} />
                <span>Open Documentation / Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
