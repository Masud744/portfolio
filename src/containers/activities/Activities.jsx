import React from "react";
import "./Activities.css";
import { Fade } from "react-reveal";
import { activitiesSection } from "../../portfolio";
import { FiCalendar, FiAward } from "react-icons/fi";

import activitiesAvatar from "../../assets/images/masud_avatar_activities.jpg";

export default function Activities(props) {
  const theme = props.theme;

  return (
    <div className="activities-main" id="activities">
      <Fade bottom duration={2000} distance="40px">
        <div
          className="activities-header-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 500px" }}>
            <h1
              className="activities-heading"
              style={{ color: theme.text, textAlign: "left", margin: 0 }}
            >
              {activitiesSection.title}
            </h1>
            {activitiesSection.subtitle && (
              <h3
                style={{
                  color: "#2563eb",
                  fontSize: "1.35rem",
                  margin: "12px 0 8px 0",
                  fontWeight: "700",
                }}
              >
                {activitiesSection.subtitle}
              </h3>
            )}
            <p className="activities-subheading" style={{ textAlign: "left", margin: 0 }}>
              {activitiesSection.description}
            </p>
          </div>
          <div
            style={{
              flex: "0 1 420px",
              maxWidth: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={activitiesAvatar}
              alt="Robotics & Leadership Activities"
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "contain",
                borderRadius: "16px",
                filter: "drop-shadow(0 12px 28px rgba(0, 28, 85, 0.12))",
              }}
            />
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
