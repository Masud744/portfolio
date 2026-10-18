import React from "react";
import "./Activities.css";
import { Fade } from "react-reveal";
import { activitiesSection } from "../../portfolio";
import { FiCalendar, FiAward } from "react-icons/fi";
import developerActivity from "../../assets/images/developerActivity.svg";

export default function Activities(props) {
  const theme = props.theme;

  return (
    <div className="activities-main" id="activities">
      <Fade bottom duration={2000} distance="40px">
        <div className="activities-heading-div">
          <div className="activities-heading-img-div">
            <img
              src={developerActivity}
              alt="Activities and Leadership"
              className="activities-hero-img"
            />
          </div>
          <div className="activities-heading-text-div">
            <h1 className="activities-heading" style={{ color: theme.text }}>
              {activitiesSection.title}
            </h1>
            <h3
              className="activities-subheading-title"
              style={{ color: theme.text }}
            >
              {activitiesSection.subtitle}
            </h3>
            <p
              className="activities-subheading"
              style={{ color: theme.secondaryText }}
            >
              {activitiesSection.description}
            </p>
          </div>
        </div>

        <div className="activities-grid">
          {activitiesSection.activities.map((act, idx) => (
            <div
              key={idx}
              className="activity-card"
              style={{ backgroundColor: theme.body }}
            >
              <div className="activity-duration-badge">
                <FiCalendar /> {act.duration}
              </div>
              <h3 className="activity-role" style={{ color: theme.text }}>
                {act.role}
              </h3>
              <div className="activity-org">{act.organization}</div>
              <p className="activity-desc" style={{ color: theme.secondaryText }}>
                {act.description}
              </p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
