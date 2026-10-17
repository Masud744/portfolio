import React from 'react';
import { flagshipProjects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

export default function Projects() {
  const [ref, isVisible] = useInView(0.05);

  return (
    <section className="projects-section section" id="projects" ref={ref}>
      <div className="section-inner">
        <div className={`projects-header fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Flagship engineering projects spanning Embedded IoT, Edge AI, and Full-Stack platforms
          </p>
        </div>

        <div className={`projects-grid fade-up fade-up-delay-1 ${isVisible ? 'visible' : ''}`}>
          {flagshipProjects.map((project, i) => (
            <div className="project-card" key={project.id} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="project-card-header">
                <FaFolder className="project-folder-icon" />
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              
              {project.featuredBadge && (
                <span className="project-featured-badge">{project.featuredBadge}</span>
              )}

              <p className="project-desc">{project.description}</p>

              <div className="project-tech-tags">
                {project.techStack.map((tech, j) => (
                  <span key={j}>{tech.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }} className={`fade-up fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
          <a
            href="https://github.com/Masud744?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            <FaGithub style={{ fontSize: '1.2rem' }} /> More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
