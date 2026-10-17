import React, { useState, useEffect, useRef } from 'react';
import { skillsMatrix } from '../../data/portfolioData';

function SkillBar({ skill, animate }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setWidth(skill.level), 200);
      return () => clearTimeout(timer);
    }
  }, [animate, skill.level]);

  // Build terminal-style bar
  const totalBlocks = 20;
  const filledBlocks = Math.round((width / 100) * totalBlocks);
  const bar = '█'.repeat(filledBlocks) + '░'.repeat(totalBlocks - filledBlocks);

  return (
    <div style={styles.skillRow}>
      <div style={styles.skillInfo}>
        <span style={styles.skillName}>{skill.name}</span>
        <span style={styles.skillTag}>{skill.tag}</span>
      </div>
      <div style={styles.barContainer}>
        <span style={styles.barText}>
          <span style={{ color: '#00ff41' }}>{bar.slice(0, filledBlocks)}</span>
          <span style={{ color: '#1e3a1e' }}>{bar.slice(filledBlocks)}</span>
        </span>
        <span style={styles.barPercent}>{width}%</span>
      </div>
    </div>
  );
}

export default function SkillMatrix3D() {
  const [activeCategory, setActiveCategory] = useState(skillsMatrix[0]?.id);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const activeSkills = skillsMatrix.find((c) => c.id === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reset animation when switching categories
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" ref={sectionRef} style={styles.section}>
      <div style={styles.inner}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>
            <span style={{ color: '#00ff41' }}>&gt;</span> SKILL_MATRIX
          </span>
          <h2 style={styles.heading}>
            Technical <span style={{ color: '#00ff41' }}>Proficiency</span> Index
          </h2>
        </div>

        {/* Category Tabs */}
        <div style={styles.categoryTabs}>
          {skillsMatrix.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                ...styles.catBtn,
                color: activeCategory === cat.id ? cat.color : '#3a6b3a',
                borderColor: activeCategory === cat.id ? `${cat.color}40` : 'rgba(0, 255, 65, 0.08)',
                background: activeCategory === cat.id ? `${cat.color}10` : 'transparent',
                boxShadow: activeCategory === cat.id ? `0 0 12px ${cat.color}20` : 'none',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        {activeSkills && (
          <div style={styles.skillsContainer}>
            <div style={styles.terminalHeader}>
              <span style={styles.terminalDots}>
                <span style={{ ...styles.dot, background: '#ff3333' }} />
                <span style={{ ...styles.dot, background: '#ffb300' }} />
                <span style={{ ...styles.dot, background: '#00cc33' }} />
              </span>
              <span style={styles.terminalTitle}>
                proficiency_scan --category="{activeSkills.name}"
              </span>
            </div>
            <div style={styles.terminalBody}>
              <div style={styles.terminalLine}>
                <span style={{ color: '#3a6b3a' }}>$</span>{' '}
                <span style={{ color: '#7dffaf' }}>scanning {activeSkills.skills.length} capabilities...</span>
              </div>
              <div style={{ marginTop: 16 }}>
                {activeSkills.skills.map((skill, i) => (
                  <SkillBar
                    key={`${activeCategory}-${skill.name}`}
                    skill={skill}
                    animate={animate}
                  />
                ))}
              </div>
              <div style={{ ...styles.terminalLine, marginTop: 16 }}>
                <span style={{ color: '#00ff41' }}>✓</span>{' '}
                <span style={{ color: '#3a6b3a' }}>scan complete. {activeSkills.skills.length} entries indexed.</span>
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
  categoryTabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '32px',
  },
  catBtn: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    padding: '8px 16px',
    background: 'transparent',
    border: '1px solid rgba(0, 255, 65, 0.08)',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '0.5px',
    transition: 'all 200ms ease',
  },
  skillsContainer: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: '1px solid rgba(0, 255, 65, 0.12)',
    borderRadius: '10px',
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
  },
  terminalHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    borderBottom: '1px solid rgba(0, 255, 65, 0.08)',
    background: 'rgba(0, 255, 65, 0.02)',
  },
  terminalDots: {
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
  terminalTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#3a6b3a',
    letterSpacing: '0.5px',
  },
  terminalBody: {
    padding: '20px',
  },
  terminalLine: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    lineHeight: 1.6,
  },
  skillRow: {
    marginBottom: '12px',
  },
  skillInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4px',
  },
  skillName: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: '#e0ffe0',
    fontWeight: 500,
  },
  skillTag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    color: '#3a6b3a',
    letterSpacing: '0.5px',
  },
  barContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  barText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    lineHeight: 1,
    letterSpacing: '0px',
  },
  barPercent: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#00ff41',
    fontWeight: 600,
    minWidth: '35px',
    textAlign: 'right',
  },
};
