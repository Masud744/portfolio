import React, { useState, useRef } from 'react';
import { personalInfo } from '../../data/portfolioData';

export default function TransmissionPanel() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | transmitting | sent | error
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('transmitting');

    // Simulate transmission
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 4000);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.inner}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>
            <span style={{ color: '#00ff41' }}>&gt;</span> TRANSMISSION_PANEL
          </span>
          <h2 style={styles.heading}>
            Open <span style={{ color: '#00ff41' }}>Communication</span> Channel
          </h2>
          <p style={styles.subtitle}>
            Signal dispatch ready. All channels monitored and responsive.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Contact Form */}
          <div style={styles.formPanel}>
            <div style={styles.formHeader}>
              <span style={styles.formDot} />
              <span style={styles.formTitle}>message_dispatch.sh</span>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} style={styles.formBody}>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  <span style={{ color: '#3a6b3a' }}>$</span> name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  <span style={{ color: '#3a6b3a' }}>$</span> email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email..."
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  <span style={{ color: '#3a6b3a' }}>$</span> message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows={5}
                  required
                  style={{ ...styles.input, resize: 'vertical', minHeight: '100px' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'transmitting'}
                className="btn-matrix btn-matrix-filled"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {status === 'idle' && '📡 TRANSMIT MESSAGE'}
                {status === 'transmitting' && '⏳ TRANSMITTING...'}
                {status === 'sent' && '✓ TRANSMISSION CONFIRMED'}
                {status === 'error' && '✕ TRANSMISSION FAILED'}
              </button>

              {status === 'transmitting' && (
                <div style={styles.transmitBar}>
                  <div style={styles.transmitFill} />
                </div>
              )}
            </form>
          </div>

          {/* Social Links Panel */}
          <div style={styles.socialPanel}>
            <div style={styles.formHeader}>
              <span style={styles.formDot} />
              <span style={styles.formTitle}>signal_channels.conf</span>
            </div>
            <div style={styles.socialBody}>
              {/* Location */}
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>LOCATION</span>
                <span style={styles.infoValue}>📍 {personalInfo.location}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>EMAIL</span>
                <a href={`mailto:${personalInfo.email}`} style={styles.infoLink}>
                  ✉️ {personalInfo.email}
                </a>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>STATUS</span>
                <span style={{ ...styles.infoValue, color: '#00ff41' }}>
                  <span style={styles.statusDot} /> OPEN FOR COLLABORATION
                </span>
              </div>

              <div style={styles.divider} />

              <span style={{ ...styles.infoLabel, marginBottom: 12, display: 'block' }}>
                ACTIVE CHANNELS:
              </span>

              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${social.color}40`;
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.boxShadow = `0 0 12px ${social.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.08)';
                    e.currentTarget.style.color = '#7dffaf';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ ...styles.channelFreq, color: social.color }}>
                    ◉
                  </span>
                  <span>{social.name}</span>
                  <span style={styles.channelArrow}>→</span>
                </a>
              ))}
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
    minHeight: '100vh',
  },
  inner: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
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
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
  },
  formPanel: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: '1px solid rgba(0, 255, 65, 0.12)',
    borderRadius: '10px',
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
  },
  formHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderBottom: '1px solid rgba(0, 255, 65, 0.08)',
    background: 'rgba(0, 255, 65, 0.02)',
  },
  formDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 4px rgba(0, 255, 65, 0.5)',
    display: 'inline-block',
  },
  formTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#3a6b3a',
    letterSpacing: '0.5px',
  },
  formBody: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: '#7dffaf',
    letterSpacing: '0.5px',
  },
  input: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    color: '#e0ffe0',
    background: 'rgba(0, 255, 65, 0.03)',
    border: '1px solid rgba(0, 255, 65, 0.1)',
    borderRadius: '4px',
    padding: '10px 14px',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
    width: '100%',
  },
  transmitBar: {
    width: '100%',
    height: '3px',
    background: 'rgba(0, 255, 65, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden',
    marginTop: '8px',
  },
  transmitFill: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #00ff41, #39ff14)',
    animation: 'scan-line 2s linear infinite',
    boxShadow: '0 0 8px rgba(0, 255, 65, 0.5)',
  },
  socialPanel: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: '1px solid rgba(0, 255, 65, 0.12)',
    borderRadius: '10px',
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
  },
  socialBody: {
    padding: '24px',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    marginBottom: '16px',
  },
  infoLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    color: '#3a6b3a',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: '#7dffaf',
  },
  infoLink: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: '#7dffaf',
    textDecoration: 'none',
    transition: 'color 200ms ease',
  },
  statusDot: {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 4px rgba(0, 255, 65, 0.5)',
    marginRight: '4px',
    animation: 'glow-pulse 2s ease-in-out infinite',
  },
  divider: {
    width: '100%',
    height: '1px',
    background: 'rgba(0, 255, 65, 0.08)',
    margin: '20px 0',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 14px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: '#7dffaf',
    border: '1px solid rgba(0, 255, 65, 0.08)',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'all 200ms ease',
    marginBottom: '8px',
  },
  channelFreq: {
    fontSize: '0.7rem',
  },
  channelArrow: {
    marginLeft: 'auto',
    color: '#3a6b3a',
    fontSize: '0.8rem',
  },
};

// Responsive CSS
const styleEl = document.createElement('style');
styleEl.textContent = `
  @media (max-width: 768px) {
    #contact .transmission-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('transmission-responsive')) {
  styleEl.id = 'transmission-responsive';
  document.head.appendChild(styleEl);
}
