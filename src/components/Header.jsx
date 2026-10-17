import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="header-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {'<'}
          <span>Shahriar Alom Masud</span>
          {' />'}
        </a>

        <nav>
          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} onClick={handleNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-mobile-actions">
          <button className="theme-toggle mobile-only-toggle" onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(prev => !prev)} aria-label="Toggle menu">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {mobileOpen && <div className="nav-backdrop" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
