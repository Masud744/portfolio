import React from "react";
import { Terminal, Download, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ onOpenTerminal }) {
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <a href="#" className="nav-brand">
          <span>{personalInfo.name}</span>
          <span className="nav-brand-mcu">ESP32 / Edge AI</span>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#capabilities" className="nav-link">Capabilities</a></li>
            <li><a href="#honors" className="nav-link">Honors</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            className="btn-terminal-trigger"
            onClick={onOpenTerminal}
            title="Open Firmware Serial Monitor CLI"
            aria-label="Open CLI Terminal"
          >
            <Terminal size={13} />
            <span>CLI</span>
          </button>

          <a
            href={personalInfo.resumeUrl}
            download="Shahriar_Alom_Masud_CV.pdf"
            className="btn-resume"
            title="Download Official Resume PDF"
          >
            <span>Resume</span>
            <Download size={13} />
          </a>
        </div>
      </div>
    </header>
  );
}
