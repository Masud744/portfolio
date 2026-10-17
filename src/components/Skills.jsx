import React from 'react';
import { corePillars, marqueeTech } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { SiCplusplus, SiPython, SiEspressif, SiArduino, SiOpencv, SiDocker, SiFastapi, SiReact, SiPostgresql, SiGithubactions, SiMqtt, SiInfluxdb, SiTailwindcss } from 'react-icons/si';
import { FaMicrochip, FaBrain, FaRobot } from 'react-icons/fa';
import { TbBrandVite } from 'react-icons/tb';

const iconMap = {
  'C++': SiCplusplus,
  'Python 3': SiPython,
  'ESP32': SiEspressif,
  'Arduino Registry': SiArduino,
  'OpenCV': SiOpencv,
  'Docker': SiDocker,
  'FastAPI': SiFastapi,
  'React 19 & Vite': SiReact,
  'PostgreSQL / Supabase': SiPostgresql,
  'GitHub Actions': SiGithubactions,
  'MQTT Mosquitto': SiMqtt,
  'InfluxDB Cloud': SiInfluxdb,
  'Tailwind CSS': SiTailwindcss,
  'FreeRTOS': FaMicrochip,
  'YOLOv8': FaBrain,
  'MediaPipe': FaBrain,
  'ONNX Runtime': FaRobot,
  'PlatformIO': TbBrandVite,
  'n8n Automation': FaRobot,
};

export default function Skills() {
  const [ref, isVisible] = useInView(0.1);

  const allTech = [...marqueeTech.row1, ...marqueeTech.row2];

  return (
    <section className="skills-section section" id="skills" ref={ref}>
      <div className="section-inner">
        <div className={`skills-header fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            An Embedded Systems & Edge AI Engineer passionate about bridging low-power hardware with real-time intelligent systems
          </p>
        </div>

        {/* Tech Icons Grid */}
        <div className={`skills-emoji-row fade-up fade-up-delay-1 ${isVisible ? 'visible' : ''}`}>
          {allTech.map((tech, i) => {
            const Icon = iconMap[tech.name] || FaMicrochip;
            return (
              <div className="skill-emoji-item" key={i}>
                <Icon className="icon" style={{ color: tech.color }} />
                <span className="name">{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Skills Content */}
        <div className={`skills-content fade-up fade-up-delay-2 ${isVisible ? 'visible' : ''}`}>
          <div className="skills-illustration">
            <EmbeddedSVG />
          </div>
          <div>
            <ul className="skills-bullets">
              {corePillars.map((pillar, i) => (
                <li key={i}>
                  <strong>{pillar.title}:</strong> {pillar.description}
                </li>
              ))}
              <li>
                Build and deploy production IoT telemetry pipelines from sensor to cloud with Docker, FastAPI, and real-time dashboards
              </li>
              <li>
                Published open-source library author on the official Arduino Library Manager registry
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmbeddedSVG() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 380 }}>
      {/* Circuit board base */}
      <rect x="60" y="100" width="280" height="200" rx="16" fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
      
      {/* PCB traces */}
      <g stroke="var(--accent)" strokeWidth="1" opacity="0.25" fill="none">
        <path d="M80 150 H160 V180 H240 V150 H320" />
        <path d="M80 200 H120 V240 H200 V200 H280 V240 H320" />
        <path d="M80 260 H140 V280 H260 V260 H320" />
        <path d="M140 150 V120" />
        <path d="M260 150 V120" />
        <path d="M200 200 V170" />
      </g>
      
      {/* Chip */}
      <rect x="155" y="160" width="90" height="70" rx="6" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" strokeWidth="1" />
      <text x="200" y="200" textAnchor="middle" fontSize="11" fill="var(--accent)" fontFamily="monospace" fontWeight="600">ESP32</text>
      
      {/* Chip pins */}
      {[170, 185, 200, 215, 230].map((x, i) => (
        <g key={`pin-${i}`}>
          <rect x={x - 2} y="152" width="4" height="8" rx="1" fill="var(--accent)" opacity="0.4" />
          <rect x={x - 2} y="230" width="4" height="8" rx="1" fill="var(--accent)" opacity="0.4" />
        </g>
      ))}
      
      {/* Sensor nodes */}
      <circle cx="100" cy="150" r="8" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" strokeWidth="1" />
      <text x="100" y="153" textAnchor="middle" fontSize="7" fill="var(--accent)" fontFamily="monospace">S1</text>
      
      <circle cx="300" cy="150" r="8" fill="#ff6b6b" opacity="0.3" stroke="#ff6b6b" strokeWidth="1" />
      <text x="300" y="153" textAnchor="middle" fontSize="7" fill="#ff6b6b" fontFamily="monospace">S2</text>
      
      <circle cx="100" cy="260" r="8" fill="#51cf66" opacity="0.3" stroke="#51cf66" strokeWidth="1" />
      <text x="100" y="263" textAnchor="middle" fontSize="7" fill="#51cf66" fontFamily="monospace">AI</text>
      
      <circle cx="300" cy="260" r="8" fill="#ffd43b" opacity="0.3" stroke="#ffd43b" strokeWidth="1" />
      <text x="300" y="263" textAnchor="middle" fontSize="7" fill="#ffd43b" fontFamily="monospace">TX</text>
      
      {/* Antenna */}
      <line x1="200" y1="100" x2="200" y2="60" stroke="var(--accent)" strokeWidth="1.5" opacity="0.4" />
      <circle cx="200" cy="55" r="5" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="55" r="10" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
      <circle cx="200" cy="55" r="16" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.1" />
      
      {/* LED indicators */}
      <circle cx="170" cy="180" r="3" fill="#51cf66" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="230" cy="180" r="3" fill="#ff6b6b" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
      
      {/* Labels */}
      <text x="200" y="340" textAnchor="middle" fontSize="10" fill="var(--text-muted)" fontFamily="monospace">
        SENSOR → MCU → AI → CLOUD
      </text>
    </svg>
  );
}
