import React from 'react';
import { journeyTimeline } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <section className="experience-section section" id="experience" ref={ref}>
      <div className="section-inner">
        <div className={`experience-header fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Professional roles, published work, and leadership positions
          </p>
        </div>

        <div className="experience-cards">
          {journeyTimeline.experience.map((exp, i) => (
            <div className={`experience-card fade-up fade-up-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''}`} key={i}>
              <p className="role">{exp.role}</p>
              <p className="org">{exp.organization}</p>
              <p className="period">{exp.period}</p>
              <span className="experience-badge">{exp.badge}</span>
              <p className="desc">{exp.description}</p>
              {exp.bullets && (
                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}
              {exp.tech && (
                <div className="experience-tech">
                  {exp.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
