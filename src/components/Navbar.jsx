import React, { useState, useEffect } from "react";
import { Terminal, Download, Cpu, Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ onOpenTerminal }) {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: "Asia/Dhaka",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        };
        setTime(new Intl.DateTimeFormat("en-US", options).format(now));
      } catch (e) {
        setTime("23:10:00");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        {/* Brand & Hardware Lab Identifier */}
        <div className="nav-brand-group">
          <a href="#hero" className="nav-brand" aria-label="Go to homepage">
            <span className="brand-dot" />
            <span className="brand-name">{personalInfo.name}</span>
          </a>
          <div className="nav-telemetry-badge">
            <span className="telemetry-chip">DHAKA UTC+6</span>
            <span className="telemetry-time">{time}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-menu" aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#projects" className="nav-link">Systems &amp; Code</a></li>
            <li><a href="#experience" className="nav-link">Milestones</a></li>
            <li><a href="#capabilities" className="nav-link">Workbench</a></li>
            <li><a href="#honors" className="nav-link">Credentials</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {onOpenTerminal && (
            <button
              type="button"
              className="btn-terminal-trigger"
              onClick={onOpenTerminal}
              title="PlatformIO Firmware Serial Monitor [Ctrl+~]"
              aria-label="Open CLI Terminal"
            >
              <Terminal size={13} />
              <span>CLI [~]</span>
            </button>
          )}

          <a
            href={personalInfo.resumeUrl}
            download="Shahriar_Alom_Masud_CV.pdf"
            className="btn-resume-nav"
            title="Download Official Resume PDF"
          >
            <span>CV (PDF)</span>
            <Download size={13} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-nav-links">
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Systems &amp; Code</a></li>
            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Milestones</a></li>
            <li><a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Workbench</a></li>
            <li><a href="#honors" onClick={() => setMobileMenuOpen(false)}>Credentials</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
