import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import TopButton from "../../components/topButton/TopButton";

export default function ResumePage(props) {
  const { theme, themeMode, onToggle } = props;

  return (
    <div className="resume-main">
      <Header theme={theme} themeMode={themeMode} onToggle={onToggle} />
      <div className="resume-view" style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
        <Fade bottom duration={1000} distance="30px">
          <div>
            <div className="download-btn" style={{ textAlign: "center", marginBottom: "30px" }}>
              <Button
                text="📃 Download Official Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
            </div>

            <div
              className="resume-container"
              style={{
                width: "100%",
                height: "850px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                border: `1px solid ${theme.headerColor || "rgba(0,0,0,0.1)"}`,
                background: theme.body,
              }}
            >
              <iframe
                src={`${greeting.resumeLink}#view=FitH`}
                title="Shahriar Alom Masud - Resume"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}