import React, { useState } from 'react';
import { journeyTimeline } from '../../data/portfolioData';

export default function CircuitTimeline() {
  const [activeTab, setActiveTab] = useState('experience');
  const entries = activeTab === 'experience'
    ? journeyTimeline.experience
    : journeyTimeline.education;

  return (
    <section id="journey" style={styles.section}>
      <div style={styles.inner}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>
            <span style={{ color: '#00ff41' }}>&gt;</span> JOURNEY_LOG
          </span>
          <h2 style={styles.heading}>
            Career <span style={{ color: '#00ff41' }}>Circuit</span> Trace
          </h2>
        </div>

        {/* Tab Switcher */}
        <div style={styles.tabs}>
          {['experience', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tabBtn,
                color: activeTab === tab ? '#00ff41' : '#3a6b3a',
                borderColor: activeTab === tab ? 'rgba(0, 255, 65, 0.3)' : 'rgba(0, 255, 65, 0.08)',
                background: activeTab === tab ? 'rgba(0, 255, 65, 0.06)' : 'transparent',
                textShadow: activeTab === tab ? '0 0 8px rgba(0, 255, 65, 0.4)' : 'none',
              }}
            >
              [{tab.toUpperCase()}]
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div style={styles.timeline}>
          {entries.map((entry, i) => (
            <div key={i} style={styles.timelineItem}>
              {/* PCB Trace Line */}
              <div style={styles.traceLine}>
                <div style={styles.traceNode}>
                  <div style={styles.nodePulse} />
                </div>
                {i < entries.length - 1 && <div style={styles.traceWire} />}
              </div>

              {/* Content */}
              <div style={{
                ...styles.entryCard,
                animationDelay: `${i * 150}ms`,
              }}>
                {/* Period */}
                <span style={styles.period}>{entry.period}</span>

                {/* Badge */}
                <span style={{
                  ...styles.entryBadge,
                  borderColor: `${entry.badgeColor || entry.badge === 'Undergraduate Program' ? '#00f0ff' : '#00ff41'}30`,
                  color: entry.badgeColor || '#00ff41',
                }}>
                  {entry.badge}
                </span>

                {/* Title */}
                <h3 style={styles.entryTitle}>
                  {entry.role || entry.degree}
                </h3>
                <p style={styles.entryOrg}>
                  {entry.organization || entry.institution}
                </p>

                {/* Description */}
                <p style={styles.entryDesc}>{entry.description}</p>

                {/* Bullets */}
                <div style={styles.bullets}>
                  {entry.bullets.map((bullet, bi) => (
                    <div key={bi} style={styles.bulletLine}>
                      <span style={{ color: '#00ff41', flexShrink: 0 }}>▸</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                {entry.tech && (
                  <div style={styles.techTags}>
                    {entry.tech.map((t) => (
                      <span key={t} style={styles.techTag}>{t}</span>
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

const styles = {
  section: {
    position: 'relative',
    padding: '100px 24px',
    minHeight: '100vh',
  },
  inner: {
    width: '100%',
    maxWidth: '900px',
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
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '40px',
  },
  tabBtn: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    padding: '8px 20px',
    background: 'transparent',
    border: '1px solid rgba(0, 255, 65, 0.08)',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '1.5px',
    transition: 'all 200ms ease',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },
  timelineItem: {
    display: 'flex',
    gap: '24px',
    position: 'relative',
  },
  traceLine: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '24px',
    flexShrink: 0,
    paddingTop: '4px',
  },
  traceNode: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 8px rgba(0, 255, 65, 0.5), 0 0 16px rgba(0, 255, 65, 0.2)',
    position: 'relative',
    zIndex: 2,
  },
  nodePulse: {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1px solid rgba(0, 255, 65, 0.3)',
    animation: 'glow-pulse 2s ease-in-out infinite',
  },
  traceWire: {
    width: '2px',
    flex: 1,
    background: 'linear-gradient(to bottom, rgba(0, 255, 65, 0.3), rgba(0, 255, 65, 0.05))',
    marginTop: '4px',
  },
  entryCard: {
    flex: 1,
    background: 'rgba(13, 17, 23, 0.6)',
    border: '1px solid rgba(0, 255, 65, 0.08)',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    animation: 'matrix-fade-in 0.5s ease forwards',
    opacity: 0,
    backdropFilter: 'blur(8px)',
    transition: 'border-color 300ms ease',
  },
  period: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#3a6b3a',
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '8px',
  },
  entryBadge: {
    display: 'inline-flex',
    padding: '3px 10px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    border: '1px solid rgba(0, 255, 65, 0.15)',
    borderRadius: '2px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  entryTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#e0ffe0',
    margin: '0 0 4px',
  },
  entryOrg: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: '#7dffaf',
    margin: '0 0 12px',
    letterSpacing: '0.5px',
  },
  entryDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: '#b0d4b0',
    lineHeight: 1.6,
    margin: '0 0 12px',
  },
  bullets: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  bulletLine: {
    display: 'flex',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#b0d4b0',
    lineHeight: 1.5,
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: '12px',
  },
  techTag: {
    padding: '2px 8px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    color: '#7dffaf',
    border: '1px solid rgba(0, 255, 65, 0.1)',
    borderRadius: '2px',
    letterSpacing: '0.5px',
  },
};
