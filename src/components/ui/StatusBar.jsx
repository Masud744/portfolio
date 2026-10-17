import React, { useState, useEffect } from 'react';

/**
 * System status bar footer — shows uptime, kernel status, etc.
 * Mimics a terminal/system monitor status line
 */
export default function StatusBar() {
  const [uptime, setUptime] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const startDate = new Date('2023-08-01');

    const updateTime = () => {
      const now = new Date();
      const diff = now - startDate;
      const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
      const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
      setUptime(`${years}yr ${months}mo`);

      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hrs}:${mins}:${secs}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.section}>
          <span style={styles.dot} />
          <span style={styles.label}>STATUS:</span>
          <span style={styles.value}>OPERATIONAL</span>
        </div>

        <div style={styles.divider} />

        <div style={styles.section}>
          <span style={styles.label}>KERNEL:</span>
          <span style={styles.value}>FreeRTOS v10.4</span>
        </div>

        <div style={styles.divider} />

        <div style={styles.section}>
          <span style={styles.label}>UPTIME:</span>
          <span style={styles.value}>{uptime}</span>
        </div>

        <div style={styles.divider} />

        <div style={styles.section}>
          <span style={styles.label}>CLK:</span>
          <span style={{ ...styles.value, fontVariantNumeric: 'tabular-nums' }}>{time}</span>
        </div>

        <div style={styles.spacer} />

        <div style={styles.section}>
          <span style={styles.copyright}>© 2026 SHAHRIAR ALOM MASUD</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: 'relative',
    zIndex: 50,
    width: '100%',
    borderTop: '1px solid rgba(0, 255, 65, 0.1)',
    background: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(8px)',
    padding: '0 24px',
  },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    gap: '16px',
    overflowX: 'auto',
    flexWrap: 'nowrap',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexShrink: 0,
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 6px rgba(0, 255, 65, 0.5)',
    animation: 'glow-pulse 2s ease-in-out infinite',
  },
  label: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: '#3a6b3a',
    letterSpacing: '1px',
  },
  value: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    color: '#7dffaf',
    letterSpacing: '0.5px',
  },
  divider: {
    width: '1px',
    height: '16px',
    background: 'rgba(0, 255, 65, 0.15)',
    flexShrink: 0,
  },
  spacer: {
    flex: 1,
  },
  copyright: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    color: '#3a6b3a',
    letterSpacing: '1px',
  },
};
