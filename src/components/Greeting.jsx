import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaFileDownload } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: FaEnvelope,
  WhatsApp: FaWhatsapp,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
};

const socialColorMap = {
  GitHub: '#333',
  LinkedIn: '#0A66C2',
  Email: '#EA4335',
  WhatsApp: '#25D366',
  Facebook: '#1877F2',
  Instagram: '#E4405F',
  YouTube: '#FF0000',
};

export default function Greeting() {
  const [ref, isVisible] = useInView(0.1);
  const fullText = personalInfo.tagline;
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="greeting-section section" id="greeting" ref={ref}>
      <div className="greeting-inner section-inner">
        <div className={`greeting-text fade-up ${isVisible ? 'visible' : ''}`}>
          <h1>
            Hi all, I'm Shahriar <span className="wave">👋</span>
          </h1>
          <p className="subtitle">
            {typedText}<span style={{ 
              borderRight: '2px solid var(--accent)', 
              animation: 'blink 1s step-end infinite',
              marginLeft: '2px'
            }}>&nbsp;</span>
          </p>
          <style>{`@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }`}</style>

          <div className="greeting-actions">
            <a href={personalInfo.resumeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
              <FaFileDownload /> Download CV
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            {personalInfo.socials.map(social => {
              const Icon = socialIconMap[social.name];
              if (!Icon) return null;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={social.name}
                  style={{ '--hover-bg': socialColorMap[social.name] || social.color }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = socialColorMap[social.name] || social.color;
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.color = '';
                  }}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className={`greeting-image fade-up fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
          <DeveloperSVG />
        </div>
      </div>
    </section>
  );
}

function DeveloperSVG() {
  return (
    <svg viewBox="0 0 500 500" className="greeting-svg" xmlns="http://www.w3.org/2000/svg">
      {/* Desk */}
      <rect x="80" y="340" width="340" height="12" rx="6" fill="var(--border-color)" />
      <rect x="120" y="352" width="12" height="80" rx="3" fill="var(--border-color)" />
      <rect x="368" y="352" width="12" height="80" rx="3" fill="var(--border-color)" />
      
      {/* Monitor */}
      <rect x="130" y="180" width="240" height="155" rx="12" fill="var(--bg-card)" stroke="var(--border-color)" strokeWidth="2" />
      <rect x="140" y="190" width="220" height="130" rx="6" fill="var(--accent)" opacity="0.08" />
      
      {/* Code lines on screen */}
      <rect x="160" y="210" width="60" height="6" rx="3" fill="var(--accent)" opacity="0.6" />
      <rect x="230" y="210" width="40" height="6" rx="3" fill="#ff6b6b" opacity="0.5" />
      <rect x="280" y="210" width="55" height="6" rx="3" fill="#51cf66" opacity="0.5" />
      
      <rect x="170" y="228" width="80" height="6" rx="3" fill="var(--accent)" opacity="0.4" />
      <rect x="260" y="228" width="50" height="6" rx="3" fill="#ffd43b" opacity="0.5" />
      
      <rect x="160" y="246" width="45" height="6" rx="3" fill="#ff6b6b" opacity="0.5" />
      <rect x="215" y="246" width="70" height="6" rx="3" fill="var(--accent)" opacity="0.5" />
      <rect x="295" y="246" width="40" height="6" rx="3" fill="#51cf66" opacity="0.5" />
      
      <rect x="175" y="264" width="55" height="6" rx="3" fill="var(--accent)" opacity="0.3" />
      <rect x="240" y="264" width="80" height="6" rx="3" fill="#ffd43b" opacity="0.4" />
      
      <rect x="160" y="282" width="90" height="6" rx="3" fill="var(--accent)" opacity="0.5" />
      <rect x="260" y="282" width="60" height="6" rx="3" fill="#ff6b6b" opacity="0.4" />
      
      <rect x="170" y="300" width="50" height="6" rx="3" fill="#51cf66" opacity="0.5" />
      <rect x="230" y="300" width="70" height="6" rx="3" fill="var(--accent)" opacity="0.4" />
      
      {/* Monitor Stand */}
      <rect x="230" y="335" width="40" height="8" rx="2" fill="var(--border-color)" />
      <rect x="210" y="340" width="80" height="4" rx="2" fill="var(--border-color)" />
      
      {/* Coffee Mug */}
      <rect x="385" y="316" width="24" height="26" rx="4" fill="var(--accent)" opacity="0.3" />
      <rect x="409" y="322" width="8" height="14" rx="7" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.3" />
      
      {/* Plant */}
      <ellipse cx="100" cy="336" rx="18" ry="10" fill="#51cf66" opacity="0.4" />
      <rect x="94" y="336" width="12" height="8" rx="2" fill="var(--border-color)" />
      <line x1="100" y1="326" x2="95" y2="310" stroke="#51cf66" strokeWidth="2" opacity="0.5" />
      <line x1="100" y1="326" x2="105" y2="308" stroke="#51cf66" strokeWidth="2" opacity="0.5" />
      <line x1="100" y1="326" x2="100" y2="306" stroke="#51cf66" strokeWidth="2" opacity="0.5" />
      <circle cx="95" cy="308" r="4" fill="#51cf66" opacity="0.4" />
      <circle cx="105" cy="306" r="4" fill="#51cf66" opacity="0.4" />
      <circle cx="100" cy="304" r="4" fill="#51cf66" opacity="0.5" />
      
      {/* Floating elements */}
      <g opacity="0.2">
        <text x="60" y="160" fontSize="18" fill="var(--accent)">{'{ }'}</text>
        <text x="400" y="140" fontSize="16" fill="var(--accent)">{'</>'}</text>
        <text x="380" y="260" fontSize="14" fill="var(--accent)">IoT</text>
        <text x="60" y="280" fontSize="14" fill="var(--accent)">AI</text>
        <circle cx="440" cy="200" r="6" fill="var(--accent)" opacity="0.3">
          <animate attributeName="cy" values="200;190;200" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="220" r="4" fill="var(--accent)" opacity="0.3">
          <animate attributeName="cy" values="220;210;220" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Glow effect */}
      <ellipse cx="250" cy="440" rx="150" ry="8" fill="var(--accent)" opacity="0.04" />
    </svg>
  );
}
