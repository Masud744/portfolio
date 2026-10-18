import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { getImage } from "../../utils/imageLoader";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    const certLink =
      certificate.certificate_file || certificate.certificate_link || "#";
    const hasCertFile = Boolean(certificate.certificate_file);

    return (
      <div className="cert-card" style={{ backgroundColor: theme.body }}>
        <Fade bottom duration={1000} distance="20px">
          <div className="content">
            <a
              href={certLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={certificate.title}
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code || "#f8fafc" }}
              >
                <img
                  className="logo_img"
                  src={getImage(certificate.logo_path)}
                  alt={certificate.alt_name || certificate.title}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title">
                  {hasCertFile ? "View Certificate" : "Show Credential"}
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3 className="cert-body-subtitle" style={{ color: "#2563eb" }}>
              {certificate.subtitle}
            </h3>

            {certificate.credential_id && (
              <p className="cert-credential-id">
                <span className="cert-id-label">Credential ID:</span>{" "}
                {certificate.credential_id}
              </p>
            )}

            {certificate.skills && certificate.skills.length > 0 && (
              <div className="cert-skills-wrap">
                <span className="cert-skills-label">Skills:</span>
                {certificate.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div className="cert-action-row">
              <a
                href={certLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-action-btn"
              >
                {hasCertFile ? "View Certificate ↗" : "Show Credential ↗"}
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default CertificationCard;
