import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const { theme, title = "What I Do?" } = props;

  return (
    <div className="skills-container" id="skills">
      <div className="skills-section-header">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="skills-section-title" style={{ color: theme.text }}>
            {title}
          </h1>
        </Fade>
        <div className="skills-title-divider"></div>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
