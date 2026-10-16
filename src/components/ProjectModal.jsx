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
      className="terminal-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="terminal-window"
        style={{ maxWidth: "720px", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="terminal-titlebar">
          <div className="titlebar-left">
            <span className="titlebar-dot" />
            <span className="titlebar-text">Architecture Spec // {project.title}</span>
          </div>

          <button
            className="terminal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <h2 id="modal-project-title" style={{ fontSize: "1.375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                {project.title}
              </h2>
              <span className="badge-tag highlight">{project.featuredBadge}</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--accent-blue)" }}>
              {project.subtitle}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "8px" }}>
              System Overview &amp; Problem Solved
            </h4>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Metrics */}
          <div>
            <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "8px" }}>
              Verified Performance &amp; Hardware Telemetry
            </h4>
            <div className="project-metrics-row" style={{ margin: 0 }}>
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
              <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "8px" }}>
                Architecture &amp; Safety Mechanisms
              </h4>
              <ul className="project-bullet-points" style={{ margin: 0 }}>
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
            <h4 style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "8px" }}>
              Hardware &amp; Software Toolchain
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.techStack.map((t, idx) => (
                <span key={idx} className="tech-tag" style={{ fontSize: "0.75rem", padding: "3px 8px" }}>
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: "flex", gap: "10px", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "0.8125rem" }}
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
                style={{ fontSize: "0.8125rem" }}
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
