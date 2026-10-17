import React, { useState, useRef, useEffect } from 'react';
import { flagshipProjects } from '../../data/portfolioData';

export default function ProjectGalaxy() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const gridRef = useRef(null);

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.inner}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>
            <span style={{ color: '#00ff41' }}>&gt;</span> FLAGSHIP_PROJECTS
          </span>
          <h2 style={styles.heading}>
            Engineering <span style={{ color: '#00ff41' }}>Case Studies</span>
          </h2>
          <p style={styles.subtitle}>
            {flagshipProjects.length} production systems spanning Embedded IoT, Edge AI, and DevOps automation.
          </p>
        </div>

        {/* Project Grid */}
        <div ref={gridRef} style={styles.grid}>
          {flagshipProjects.map((project, i) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                ...styles.card,
                animationDelay: `${i * 100}ms`,
                borderColor: hoveredId === project.id
                  ? 'rgba(0, 255, 65, 0.3)'
                  : selectedProject?.id === project.id
                    ? 'rgba(0, 255, 65, 0.4)'
                    : 'rgba(0, 255, 65, 0.08)',
                boxShadow: hoveredId === project.id || selectedProject?.id === project.id
                  ? '0 0 20px rgba(0, 255, 65, 0.1), inset 0 0 30px rgba(0, 255, 65, 0.02)'
                  : 'none',
                transform: hoveredId === project.id ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              {/* Card Header */}
              <div style={styles.cardHeader}>
                <span style={styles.cardIcon}>{project.icon}</span>
                <span style={styles.cardCategory}>{project.category}</span>
              </div>

              {/* Title */}
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardSubtitle}>{project.subtitle}</p>

              {/* Featured Badge */}
              <div style={styles.featuredBadge}>
                <span style={styles.badgeDot} />
                {project.featuredBadge}
              </div>

              {/* Description */}
              <p style={styles.cardDesc}>{project.description}</p>

              {/* Tech Stack */}
              <div style={styles.techRow}>
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech.name}
                    style={{
                      ...styles.techBadge,
                      borderColor: `${tech.color}40`,
                      color: tech.color,
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span style={{ ...styles.techBadge, color: '#3a6b3a' }}>
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Metrics */}
              <div style={styles.metricsRow}>
                {project.metrics.slice(0, 2).map((m, i) => (
                  <div key={i} style={styles.metric}>
                    <span style={styles.metricLabel}>{m.label}</span>
                    <span style={styles.metricValue}>{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div style={styles.linksRow}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={styles.link}
                >
                  ⟨/⟩ Source
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ ...styles.link, color: '#00f0ff' }}
                  >
                    ◉ Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Expanded Project Detail */}
        {selectedProject && (
          <div style={styles.detailPanel}>
            <div style={styles.detailHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={styles.detailDot} />
                <span style={styles.detailTitle}>
                  {selectedProject.title} — ARCHITECTURE SPEC
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={styles.closeBtn}
              >
                ✕
              </button>
            </div>
            <div style={styles.detailBody}>
              <p style={styles.detailDesc}>{selectedProject.longDescription}</p>

              {/* All Metrics */}
              <div style={styles.detailMetrics}>
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} style={styles.detailMetricItem}>
                    <span style={styles.metricLabel}>{m.label}</span>
                    <span style={styles.metricValue}>{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div style={{ marginTop: 16 }}>
                <span style={{ ...styles.metricLabel, marginBottom: 8, display: 'block' }}>
                  KEY HIGHLIGHTS:
                </span>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} style={styles.highlightLine}>
                    <span style={{ color: '#00ff41' }}>▸</span> {h}
                  </div>
                ))}
              </div>

              {/* Full Tech Stack */}
              <div style={{ ...styles.techRow, marginTop: 16 }}>
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    style={{
                      ...styles.techBadge,
                      borderColor: `${tech.color}40`,
                      color: tech.color,
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '100px 24px',
    minHeight: '100vh',
  },
  inner: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  sectionLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: '#3a6b3a',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '12px',
  },
  heading: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 700,
    color: '#e0ffe0',
    margin: '0 0 12px',
  },
  subtitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: '#b0d4b0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '20px',
  },
  card: {
    background: 'rgba(13, 17, 23, 0.8)',
    border: '1px solid rgba(0, 255, 65, 0.08)',
    borderRadius: '10px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(8px)',
    position: 'relative',
    overflow: 'hidden',
    animation: 'matrix-fade-in 0.6s ease forwards',
    opacity: 0,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  cardIcon: {
    fontSize: '1.5rem',
  },
  cardCategory: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: '#3a6b3a',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#e0ffe0',
    margin: '0 0 4px',
  },
  cardSubtitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#7dffaf',
    margin: '0 0 12px',
    letterSpacing: '0.5px',
  },
  featuredBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '3px 10px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: '#00ff41',
    background: 'rgba(0, 255, 65, 0.06)',
    border: '1px solid rgba(0, 255, 65, 0.12)',
    borderRadius: '2px',
    marginBottom: '12px',
    letterSpacing: '0.5px',
  },
  badgeDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 4px rgba(0, 255, 65, 0.5)',
  },
  cardDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#b0d4b0',
    lineHeight: 1.6,
    margin: '0 0 16px',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  techRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '12px',
  },
  techBadge: {
    padding: '2px 8px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    border: '1px solid rgba(0, 255, 65, 0.12)',
    borderRadius: '2px',
    letterSpacing: '0.5px',
  },
  metricsRow: {
    display: 'flex',
    gap: '20px',
    marginBottom: '12px',
  },
  metric: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  metricLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    color: '#3a6b3a',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  metricValue: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: '#00ff41',
    fontWeight: 600,
  },
  linksRow: {
    display: 'flex',
    gap: '16px',
    paddingTop: '12px',
    borderTop: '1px solid rgba(0, 255, 65, 0.06)',
  },
  link: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#7dffaf',
    textDecoration: 'none',
    letterSpacing: '0.5px',
    transition: 'all 200ms ease',
  },
  detailPanel: {
    marginTop: '32px',
    background: 'rgba(0, 0, 0, 0.85)',
    border: '1px solid rgba(0, 255, 65, 0.15)',
    borderRadius: '10px',
    overflow: 'hidden',
    animation: 'matrix-fade-in 0.4s ease forwards',
    backdropFilter: 'blur(12px)',
  },
  detailHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    borderBottom: '1px solid rgba(0, 255, 65, 0.08)',
    background: 'rgba(0, 255, 65, 0.02)',
  },
  detailDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 4px rgba(0, 255, 65, 0.5)',
  },
  detailTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#3a6b3a',
    letterSpacing: '1px',
  },
  closeBtn: {
    background: 'none',
    border: '1px solid rgba(0, 255, 65, 0.15)',
    color: '#3a6b3a',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    cursor: 'pointer',
    padding: '4px 10px',
    borderRadius: '4px',
    transition: 'all 200ms ease',
  },
  detailBody: {
    padding: '24px',
  },
  detailDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#b0d4b0',
    lineHeight: 1.7,
    marginBottom: '20px',
  },
  detailMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
    padding: '16px',
    background: 'rgba(0, 255, 65, 0.02)',
    borderRadius: '6px',
    border: '1px solid rgba(0, 255, 65, 0.06)',
  },
  detailMetricItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  highlightLine: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: '#7dffaf',
    lineHeight: 1.8,
    paddingLeft: '16px',
  },
};
