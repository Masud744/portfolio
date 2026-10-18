import React from "react";
import "./Publications.css";
import { Fade } from "react-reveal";
import { publications, publicationsHeader } from "../../portfolio";
import { FiBookOpen, FiExternalLink } from "react-icons/fi";

export default function Publications(props) {
  const theme = props.theme;

  return (
    <div className="publications-main" id="publications">
      <Fade bottom duration={2000} distance="40px">
        <h1 className="publications-heading" style={{ color: theme.text }}>
          Publications
        </h1>
        <p className="publications-subheading">
          {publicationsHeader.description}
        </p>

        <div className="publications-grid">
          {publications.data.map((pub, idx) => (
            <div
              key={pub.id || idx}
              className="publication-card"
              style={{ backgroundColor: theme.body }}
            >
              <div className="publication-badge">
                <FiBookOpen /> Preprint / Research Study
              </div>
              <h3 className="publication-title" style={{ color: theme.text }}>
                {pub.name}
              </h3>
              <p className="publication-desc" style={{ color: theme.secondaryText }}>
                {pub.description}
              </p>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
              >
                View Research Repository <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
