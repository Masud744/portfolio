import React from "react";
import "./Testimonials.css";
import { Fade } from "react-reveal";
import { testimonialsSection } from "../../portfolio";
import { FiMessageSquare } from "react-icons/fi";

export default function Testimonials(props) {
  const theme = props.theme;
  const testimonials = testimonialsSection.testimonials || [];

  return (
    <div className="testimonials-main" id="testimonials">
      <Fade bottom duration={2000} distance="40px">
        <h1 className="testimonials-heading" style={{ color: theme.text }}>
          {testimonialsSection.title}
        </h1>
        <p className="testimonials-subheading">
          {testimonialsSection.description}
        </p>

        {testimonials.length === 0 ? (
          <div className="testimonials-empty-card" style={{ backgroundColor: theme.body }}>
            <FiMessageSquare className="testimonials-empty-icon" />
            <h3 className="testimonials-empty-title" style={{ color: theme.text }}>
              No Public Endorsements Yet
            </h3>
            <p className="testimonials-empty-desc" style={{ color: theme.secondaryText }}>
              Formal academic recommendations and industry mentor endorsements will be updated upon completion of ongoing research initiatives.
            </p>
          </div>
        ) : (
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <p>"{t.quote}"</p>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        )}
      </Fade>
    </div>
  );
}
