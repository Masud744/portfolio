import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaYoutube, FaFileDownload, FaMapMarkerAlt, FaCircle } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-top-grid">
          {/* Brand & Motto */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {'<'}<span>Shahriar Alom Masud</span>{' />'}
            </a>
            <p className="footer-tagline">
              Embedded Systems & Edge AI Engineer specializing in bare-metal firmware, FreeRTOS, and real-time computer vision inference.
            </p>
            <p className="footer-quote">
              “{personalInfo.bannerQuote}”
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#skills">Skills & Stack</a></li>
              <li><a href="#projects">Flagship Projects</a></li>
              <li><a href="#experience">Work Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li>
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="footer-resume-link">
                  <FaFileDownload /> Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Availability & Direct Connect */}
          <div className="footer-connect-col">
            <h4>Status & Connect</h4>
            <div className="footer-status-badge">
              <FaCircle className="status-dot" />
              <span>Available for Roles & Research</span>
            </div>
            <p className="footer-location">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </p>
            <a href={`mailto:${personalInfo.email}`} className="footer-email-link">
              <FaEnvelope /> {personalInfo.email}
            </a>

            <div className="footer-social-row">
              <a href="https://github.com/Masud744" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shahriar-alom-masud" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/8801740071118" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://www.youtube.com/@ShahriarAlomMasud" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <strong>Shahriar Alom Masud</strong>. Engineered with React 19 & Vite.
          </p>
          <p className="footer-subtext">
            Official Arduino Library Manager Author • SmartProv v2.1.3
          </p>
        </div>
      </div>
    </footer>
  );
}
