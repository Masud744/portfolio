import React from 'react';
import { honorsAndCertifications } from '../../data/portfolioData';

export default function AchievementConsole() {
  return (
    <section id="honors" style={styles.section}>
      <div style={styles.inner}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>
            <span style={{ color: '#00ff41' }}>&gt;</span> ACHIEVEMENT_LOG
          </span>
          <h2 style={styles.heading}>
            Honors & <span style={{ color: '#00ff41' }}>Certifications</span>
          </h2>
        </div>

        {/* Terminal Console */}
        <div style={styles.console}>
          <div style={styles.consoleHeader}>
            <span style={styles.dots}>
              <span style={{ ...styles.dot, background: '#ff3333' }} />
              <span style={{ ...styles.dot, background: '#ffb300' }} />
              <span style={{ ...styles.dot, background: '#00cc33' }} />
            </span>
            <span style={styles.consoleTitle}>achievement_registry.log</span>
          </div>
          <div style={styles.consoleBody}>
            <div style={styles.consoleLine}>
              <span style={{ color: '#3a6b3a' }}>$</span>{' '}
              <span style={{ color: '#7dffaf' }}>cat /var/log/achievements --format=table</span>
            </div>
            <div style={{ ...styles.consoleLine, marginTop: 8, color: '#3a6b3a' }}>
              Loaded {honorsAndCertifications.length} verified records.
            </div>
            <div style={{ ...styles.consoleLine, marginBottom: 16, color: '#3a6b3a' }}>
              {'─'.repeat(60)}
            </div>

            {honorsAndCertifications.map((honor, i) => (
              <div
                key={i}
                style={{
                  ...styles.achievementCard,
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div style={styles.achievementHeader}>
                  <span style={{
                    ...styles.achievementBadge,
                    color: honor.color,
                    borderColor: `${honor.color}30`,
                  }}>
                    {honor.badge}
                  </span>
                  <span style={styles.achievementDate}>{honor.date}</span>
                </div>
                <h3 style={styles.achievementTitle}>{honor.title}</h3>
                <p style={styles.achievementIssuer}>{honor.issuer}</p>
                <p style={styles.achievementDesc}>{honor.description}</p>
              </div>
            ))}

            <div style={{ ...styles.consoleLine, marginTop: 16, color: '#3a6b3a' }}>
              {'─'.repeat(60)}
            </div>
            <div style={styles.consoleLine}>
              <span style={{ color: '#00ff41' }}>✓</span>{' '}
              <span style={{ color: '#3a6b3a' }}>
                All {honorsAndCertifications.length} achievements verified and logged.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '100px 24px',
  },
  inner: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
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
    margin: 0,
  },
  console: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: '1px solid rgba(0, 255, 65, 0.12)',
    borderRadius: '10px',
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
  },
  consoleHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    borderBottom: '1px solid rgba(0, 255, 65, 0.08)',
    background: 'rgba(0, 255, 65, 0.02)',
  },
  dots: {
    display: 'flex',
    gap: '6px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    opacity: 0.6,
    display: 'inline-block',
  },
  consoleTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#3a6b3a',
    letterSpacing: '0.5px',
  },
  consoleBody: {
    padding: '20px',
  },
  consoleLine: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    lineHeight: 1.6,
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
  },
  achievementCard: {
    padding: '16px',
    marginBottom: '12px',
    background: 'rgba(0, 255, 65, 0.02)',
    border: '1px solid rgba(0, 255, 65, 0.06)',
    borderRadius: '6px',
    animation: 'matrix-fade-in 0.5s ease forwards',
    opacity: 0,
    transition: 'border-color 300ms ease, box-shadow 300ms ease',
  },
  achievementHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  achievementBadge: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    padding: '2px 8px',
    border: '1px solid rgba(0, 255, 65, 0.12)',
    borderRadius: '2px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  achievementDate: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: '#3a6b3a',
    letterSpacing: '0.5px',
  },
  achievementTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#e0ffe0',
    margin: '0 0 4px',
  },
  achievementIssuer: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#7dffaf',
    margin: '0 0 8px',
    letterSpacing: '0.5px',
  },
  achievementDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#b0d4b0',
    lineHeight: 1.6,
    margin: 0,
  },
};
