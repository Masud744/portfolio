import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.jsx";
import "./ExperienceAccordion.css";

export default function ExperienceAccordion({ sections, theme }) {
  // Start with first section open by default
  const [openSections, setOpenSections] = useState({ 0: true });

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="experience-accord">
      {sections.map((section, sIndex) => {
        const isOpen = !!openSections[sIndex];
        return (
          <div
            key={section.title || sIndex}
            className="custom-accordion-panel"
            style={{
              marginBottom: "12px",
              border: `1px solid ${theme.headerColor || "rgba(0,0,0,0.1)"}`,
              borderRadius: "8px",
              background: theme.body,
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            <button
              onClick={() => toggleSection(sIndex)}
              className="custom-accordion-header"
              style={{
                width: "100%",
                padding: "18px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: theme.text,
                fontFamily: "Google Sans Bold, Google Sans Regular, sans-serif",
                fontSize: "1.25rem",
                textAlign: "left",
              }}
            >
              <span>{section.title}</span>
              <span
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  fontSize: "1rem",
                  color: theme.imageHighlight || theme.text,
                }}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div
                className="custom-accordion-content"
                style={{
                  padding: "8px 16px 24px",
                  background: theme.body,
                }}
              >
                {section.experiences.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    index={index}
                    totalCards={section.experiences.length}
                    experience={experience}
                    theme={theme}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
