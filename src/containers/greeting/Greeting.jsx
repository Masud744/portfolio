import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { TypeAnimation } from "react-type-animation";
import masudPortrait from "../../assets/images/masud_vector_portrait.png";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <div
                className="terminal-typewriter-container"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(10, 102, 194, 0.08)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  margin: "8px 0 16px 0",
                  border: "1px solid rgba(10, 102, 194, 0.2)",
                }}
              >
                <span style={{ color: "#0A66C2", fontWeight: "bold" }}>&gt;</span>
                <TypeAnimation
                  sequence={[
                    "Embedded Systems Engineer",
                    2200,
                    "Edge AI Researcher",
                    2200,
                    "Arduino Library Author",
                    2200,
                    "IoT Architecture Builder",
                    2200,
                    "FreeRTOS Developer",
                    2200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    color: theme.text,
                  }}
                />
              </div>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div" style={{ display: "flex", gap: "15px", flexWrap: "wrap", alignItems: "center" }}>
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
                <Button
                  text="See My Resume"
                  href="#/resume"
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt={greeting.title}
              src={masudPortrait}
              style={{
                maxWidth: "100%",
                maxHeight: "520px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.35))",
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
