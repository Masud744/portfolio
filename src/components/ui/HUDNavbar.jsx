import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';

const NAV_ITEMS = [
  { id: 'hero', label: 'INIT', icon: '⚡' },
  { id: 'hardware-lab', label: 'LAB', icon: '🔬' },
  { id: 'projects', label: 'PROJECTS', icon: '📦' },
  { id: 'journey', label: 'JOURNEY', icon: '⏱️' },
  { id: 'skills', label: 'SKILLS', icon: '🛠️' },
  { id: 'honors', label: 'HONORS', icon: '🏆' },
  { id: 'contact', label: 'CONTACT', icon: '📡' },
];

export default function HUDNavbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        return { id: item.id, top: el.getBoundingClientRect().top };
      });

      const active = sections.reduce((closest, section) => {
        if (section.top <= 200 && section.top > closest.top) return section;
        return closest;
      }, { id: 'hero', top: -Infinity });

      setActiveSection(active.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className="hud-navbar"
      style={{
        ...styles.nav,
        background: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0, 255, 65, 0.1)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={styles.inner}>
        {/* Logo / Name */}
        <button
          onClick={() => scrollTo('hero')}
          style={styles.logo}
          aria-label="Go to top"
        >
          <span style={styles.logoIcon}>⚡</span>
          <span style={styles.logoText}>
            {personalInfo.name.split(' ')[0].toUpperCase()}
          </span>
          <span style={styles.logoDot} />
        </button>

        {/* Desktop Nav Items */}
        <div style={styles.navItems}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                ...styles.navButton,
                color: activeSection === item.id ? '#00ff41' : '#3a6b3a',
                textShadow: activeSection === item.id
                  ? '0 0 10px rgba(0, 255, 65, 0.5)'
                  : 'none',
              }}
            >
              <span style={styles.navBracket}>[</span>
              {item.label}
              <span style={styles.navBracket}>]</span>
              {activeSection === item.id && (
                <span style={styles.activeIndicator} />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={styles.hamburger}
          aria-label="Toggle navigation"
        >
          <span style={{
            ...styles.hamburgerLine,
            transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
          }} />
          <span style={{
            ...styles.hamburgerLine,
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            ...styles.hamburgerLine,
            transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={styles.mobileMenu}>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                ...styles.mobileItem,
                animationDelay: `${i * 50}ms`,
                color: activeSection === item.id ? '#00ff41' : '#7dffaf',
              }}
            >
              <span style={{ marginRight: 8 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 'var(--nav-height)',
    zIndex: 'var(--z-nav)',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px 0',
  },
  logoIcon: {
    fontSize: '1.2rem',
  },
  logoText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#00ff41',
    letterSpacing: '2px',
    textShadow: '0 0 10px rgba(0, 255, 65, 0.4)',
  },
  logoDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 6px rgba(0, 255, 65, 0.6)',
    animation: 'glow-pulse 2s ease-in-out infinite',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  navButton: {
    background: 'none',
    border: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '8px 10px',
    letterSpacing: '1px',
    transition: 'all 200ms ease',
    position: 'relative',
  },
  navBracket: {
    opacity: 0.4,
    marginLeft: 2,
    marginRight: 2,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '2px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '16px',
    height: '2px',
    background: '#00ff41',
    boxShadow: '0 0 6px rgba(0, 255, 65, 0.5)',
    borderRadius: '1px',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
  },
  hamburgerLine: {
    width: '20px',
    height: '2px',
    background: '#00ff41',
    transition: 'all 300ms ease',
    display: 'block',
  },
  mobileMenu: {
    position: 'absolute',
    top: 'var(--nav-height)',
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.95)',
    borderBottom: '1px solid rgba(0, 255, 65, 0.1)',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    backdropFilter: 'blur(20px)',
  },
  mobileItem: {
    background: 'none',
    border: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    padding: '12px 16px',
    textAlign: 'left',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 200ms ease',
    animation: 'matrix-fade-in 0.3s ease forwards',
    opacity: 0,
  },
};

// Inject responsive CSS for hamburger
const styleTag = document.createElement('style');
styleTag.textContent = `
  @media (max-width: 768px) {
    .hud-navbar .hud-nav-items { display: none !important; }
    .hud-navbar button[aria-label="Toggle navigation"] { display: flex !important; }
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('hud-nav-responsive')) {
  styleTag.id = 'hud-nav-responsive';
  document.head.appendChild(styleTag);
}
