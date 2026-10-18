import React from "react";
import "./Activities.css";
import { Fade } from "react-reveal";
import { activitiesSection } from "../../portfolio";
import { FiCalendar, FiAward } from "react-icons/fi";

export default function Activities(props) {
  const theme = props.theme;

  return (
    <div className="activities-main" id="activities">
      <Fade bottom duration={2000} distance="40px">
        <h1 className="activities-heading" style={{ color: theme.text }}>
          {activitiesSection.title}
        </h1>
        <p className="activities-subheading">
          {activitiesSection.description}
        </p>

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
