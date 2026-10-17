import React from 'react';
import { journeyTimeline } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const [ref, isVisible] = useInView(0.1);

  const emojiMap = {
    'B.Sc.': '🎓',
    'Higher': '📚',
    'Secondary': '🏫',
  };

  const getEmoji = (degree) => {
    for (const [key, emoji] of Object.entries(emojiMap)) {
      if (degree.includes(key)) return emoji;
    }
    return '🎓';
  };

  return (
    <section className="education-section section" id="education" ref={ref}>
      <div className="section-inner">
        <div className={`education-header fade-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Academic journey in engineering, science, and technology
          </p>
        </div>

        <div className="education-cards">
          {journeyTimeline.education.map((edu, i) => (
            <div className={`education-card fade-up fade-up-delay-${i + 1} ${isVisible ? 'visible' : ''}`} key={i}>
              <div className="education-logo">
                {getEmoji(edu.degree)}
              </div>
              <div className="education-content">
                <h3>{edu.institution}</h3>
                <p className="sub-header">{edu.degree}</p>
                <p className="duration">{edu.period}</p>
                <p className="desc">{edu.description}</p>
                {edu.bullets && (
                  <ul className="education-bullets">
                    {edu.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
