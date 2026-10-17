import React from 'react';
import { honorsAndCertifications } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const trophyMap = {
  'Honors & Leadership': '🏆',
  'National Competition': '🤖',
  'Cloud & AI': '☁️',
  'Community Leadership': '🌍',
  'Professional Skills': '💼',
  'Software Engineering': '💻',
};

export default function Achievements() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <section className="achievements-section section" id="achievements" ref={ref}>
      <div className="section-inner">
        <div className={`achievements-header fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Recognitions, awards, and professional certifications
          </p>
        </div>

        <div className={`achievements-grid fade-up fade-up-delay-1 ${isVisible ? 'visible' : ''}`}>
          {honorsAndCertifications.map((item, i) => (
            <div className="achievement-card" key={i}>
              <div className="trophy">{trophyMap[item.badge] || '🏅'}</div>
              <h4>{item.title}</h4>
              <p className="issuer">{item.issuer}</p>
              <p className="date">{item.date}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
