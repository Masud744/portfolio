import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import masudPortrait from "../../assets/images/masud_vector_portrait.png";
import { TypeAnimation } from "react-type-animation";

export default function Greeting(props) {
  const theme = props.theme;

  const typeSequence = React.useMemo(() => {
    if (greeting.taglines && greeting.taglines.length > 0) {
      return greeting.taglines.flatMap((item) => [item, 2200]);
    }
    return [greeting.nickname || "Embedded & Edge AI", 2200];
  }, []);

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: "#2563eb" }}>
                  ({" "}
                  <TypeAnimation
                    sequence={typeSequence}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={65}
                    repeat={Infinity}
                    style={{ display: "inline-block" }}
                  />{" "}
                  )
                </h2>
              )}
              {Array.isArray(greeting.subTitle) ? (
                greeting.subTitle.map((para, index) => (
                  <p
                    key={index}
                    className="greeting-text-p subTitle"
                    style={{
                      color: theme.secondaryText,
                      marginBottom:
                        index === greeting.subTitle.length - 1 ? "22px" : "12px",
                    }}
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText, marginBottom: "22px" }}
                >
                  {greeting.subTitle}
                </p>
              )}
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
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
