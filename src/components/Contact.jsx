import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [ref, isVisible] = useInView(0.2);

  return (
    <section className="contact-section section" id="contact" ref={ref}>
      <div className="section-inner">
        <div className={`contact-header fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="contact-emoji">📬</span>
          <h2 className="section-title">Reach Out to Me!</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            I'm open to collaborations on Embedded IoT, Edge AI, and innovative engineering projects.
            Whether it's a research partnership, open-source contribution, or a cool idea — let's connect!
          </p>
        </div>

        <div className={`contact-links fade-up fade-up-delay-1 ${isVisible ? 'visible' : ''}`}>
          <a href={`mailto:${personalInfo.email}`} className="btn-primary">
            <FaEnvelope /> Mail Me
          </a>
          <a href="https://github.com/Masud744" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/shahriar-alom-masud" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FaLinkedinIn /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
