import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import TopButton from "../../components/topButton/TopButton";
import resumePreview from "../../assets/images/iot_resume_preview.png";
import resumePdf from "../../assets/docs/Shahriar_Alom_Masud_IoT_Resume.pdf";

export default function ResumePage(props) {
  const { theme, themeMode, onToggle } = props;

  return (
    <div className="resume-main">
      <Header theme={theme} themeMode={themeMode} onToggle={onToggle} />
      <div
        className="resume-view"
        style={{ maxWidth: "920px", margin: "40px auto", padding: "0 20px" }}
      >
        <Fade bottom duration={1000} distance="30px">
          <div>
            <div
              className="download-btn"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                flexWrap: "wrap",
                marginBottom: "30px",
              }}
            >
              <Button
                text="📄 Download Official IoT Resume (PDF)"
                newTab={true}
                href={resumePdf || greeting.resumeLink}
                theme={theme}
              />
            </div>

            <div
              className="resume-container"
              style={{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
                border: `1px solid ${theme.headerColor || "rgba(255,255,255,0.15)"}`,
                background: "#ffffff",
                padding: "8px",
              }}
            >
              <img
                src={resumePreview}
                alt="Shahriar Alom Masud - IoT Engineer Resume"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "6px",
                }}
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