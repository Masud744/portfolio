import React from "react";
import "./Activities.css";
import { Fade } from "react-reveal";
import { activitiesSection } from "../../portfolio";
import { FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";
import { getImage } from "../../utils/imageLoader";
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
              style={{ color: "#2563eb" }}
            >
              {activitiesSection.subtitle}
            </h3>
            <p
              className="activities-subheading"
              style={{ color: theme.text }}
            >
              {activitiesSection.description}
            </p>
          </div>
        </div>

        <div className="activities-grid">
          {activitiesSection.activities.map((act, idx) => {
            const imgSrc = act.image ? getImage(act.image) : null;
            const bannerSrc = act.banner ? getImage(act.banner) : null;

            return (
              <div
                key={idx}
                className="activity-card"
                style={{ backgroundColor: theme.body }}
              >
                {imgSrc && (
                  <div
                    className="activity-card-media-wrap"
                    style={{ backgroundColor: act.image_bg || "#f8fafc" }}
                  >
                    <a
                      href={imgSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="activity-media-anchor"
                      title={`View full ${act.role} image`}
                    >
                      <img
                        src={imgSrc}
                        alt={act.role}
                        className={`activity-card-img ${
                          act.image_fit === "cover" ? "fit-cover" : "fit-contain"
                        }`}
                        loading="lazy"
                      />
                      <div className="activity-media-hover-overlay">
                        <span>View Image ↗</span>
                      </div>
                    </a>
                  </div>
                )}

                <div className="activity-card-body">
                  <div className="activity-card-meta">
                    <span className="activity-duration-badge">
                      <FiCalendar /> {act.duration}
                    </span>
                    {act.location && (
                      <span className="activity-location-badge">
                        <FiMapPin /> {act.location}
                      </span>
                    )}
                  </div>

                  <h3 className="activity-role" style={{ color: theme.text }}>
                    {act.role}
                  </h3>
                  <div className="activity-org">{act.organization}</div>
                  <p className="activity-desc" style={{ color: theme.text }}>
                    {act.description}
                  </p>

                  {bannerSrc && (
                    <div className="activity-action-row">
                      <a
                        href={bannerSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="activity-banner-link-btn"
                        title="View Official Event Banner"
                      >
                        <FiExternalLink /> Official Event Banner ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
}
