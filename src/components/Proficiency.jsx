import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const proficiencies = [
  { name: 'Embedded C/C++ & Firmware', level: 95 },
  { name: 'ESP32 / FreeRTOS / IoT', level: 94 },
  { name: 'Python (AI/ML & Automation)', level: 93 },
  { name: 'Computer Vision (YOLOv8, OpenCV)', level: 91 },
  { name: 'FastAPI & Backend Systems', level: 90 },
  { name: 'React & Modern Web', level: 88 },
  { name: 'DevOps (Docker, CI/CD, Git)', level: 89 },
  { name: 'LoRa & Wireless Protocols', level: 87 },
];

export default function Proficiency() {
  const [ref, isVisible] = useInView(0.2);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !animated) {
      setTimeout(() => setAnimated(true), 200);
    }
  }, [isVisible, animated]);

  return (
    <section className="proficiency-section section" ref={ref}>
      <div className="section-inner">
        <div className={`proficiency-header fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Proficiency</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Core competencies across embedded systems, AI, and full-stack development
          </p>
        </div>

        <div className={`proficiency-grid fade-up fade-up-delay-1 ${isVisible ? 'visible' : ''}`}>
          {proficiencies.map((item, i) => (
            <div className="proficiency-item" key={i}>
              <div className="proficiency-label">
                <span className="proficiency-name">{item.name}</span>
                <span className="proficiency-pct">{item.level}%</span>
              </div>
              <div className="proficiency-bar-bg">
                <div
                  className="proficiency-bar-fill"
                  style={{
                    width: animated ? `${item.level}%` : '0%',
                    transitionDelay: `${i * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
