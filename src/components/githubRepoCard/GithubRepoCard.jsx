import React from "react";
import "./GithubRepoCard.css";
import BrowserFrame from "../browserFrame/BrowserFrame";
import ProjectVisualMockup from "../browserFrame/ProjectVisualMockup";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function GithubRepoCard({ repo, theme }) {
  const isLive = repo.liveUrl && repo.liveUrl !== "#" && repo.liveUrl !== repo.url;

  return (
    <div className="notable-project-card">
      {/* Browser Mockup Visual matching Screenshot 5 */}
      <div className="project-card-visual-wrapper">
        <a
          href={repo.liveUrl || repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="browser-frame-link"
        >
          <BrowserFrame url={repo.liveUrl || repo.url}>
            <ProjectVisualMockup project={repo} />
          </BrowserFrame>
        </a>
      </div>

      {/* Project Information */}
      <div className="project-card-info">
        <div className="project-meta-row">
          <span className="project-category-pill">
            {repo.categoryBadge || repo.category}
          </span>
          <span className="project-year-text">{repo.year || "2026"}</span>
        </div>

        <h3 className="project-title-text">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-title-link"
            style={{ color: theme?.text || "#0f172a" }}
          >
            {repo.name}
          </a>
        </h3>

        <p className="project-desc-clamp" style={{ color: theme?.secondaryText || "#64748b" }}>
          {repo.description}
        </p>

        <div className="project-card-footer">
          <div className="project-action-links">
            {repo.url && (
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn github-action-btn"
                title="View GitHub Repository"
              >
                <FiGithub />
              </a>
            )}
            {isLive && (
              <a
                href={repo.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn live-action-btn"
                title="View Live Application"
              >
                <FiExternalLink />
              </a>
            )}
          </div>

          <div className="project-tech-stack-row">
            {(repo.languages || []).slice(0, 3).map((lang, idx) => (
              <span
                key={idx}
                className="project-tech-pill"
                title={lang.name}
              >
                {lang.name}
              </span>
            ))}
            {(repo.languages || []).length > 3 && (
              <span className="project-tech-more-pill">
                +{repo.languages.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
