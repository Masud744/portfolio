import React from "react";
import "./Testimonials.css";
import { Fade } from "react-reveal";
import { testimonialsSection } from "../../portfolio";
import { FiUser } from "react-icons/fi";

export default function Testimonials(props) {
  const theme = props.theme;
  const testimonials = testimonialsSection.testimonials || [];

  return (
    <div className="testimonials-main" id="testimonials">
      <Fade bottom duration={1200} distance="30px">
        <div className="testimonials-section-header">
          <h1 className="testimonials-section-title" style={{ color: theme.text }}>
            {testimonialsSection.title}
          </h1>
          <div className="testimonials-title-divider"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              {t.badge && (
                <div className="testimonial-badge-wrapper">
                  <span className="testimonial-badge">{t.badge}</span>
                </div>
              )}
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author-wrapper">
                <div className="testimonial-avatar-box">
                  <FiUser className="testimonial-avatar-icon" />
                </div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name" style={{ color: theme.text }}>
                    {t.name}
                  </h4>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
