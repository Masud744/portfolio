import React, { Component } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import ResumePage from "../pages/resume/Resume.jsx";

export default class Main extends Component {
  componentDidMount() {
    if (this.props.theme?.imageHighlight) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }

  render() {
    const { theme, themeMode, onToggle } = this.props;

    return (
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              settings.isSplash ? (
                <Splash theme={theme} themeMode={themeMode} onToggle={onToggle} />
              ) : (
                <Home theme={theme} themeMode={themeMode} onToggle={onToggle} />
              )
            }
          />
          <Route
            path="/home"
            element={<Home theme={theme} themeMode={themeMode} onToggle={onToggle} />}
          />
          <Route
            path="/education"
            element={<Education theme={theme} themeMode={themeMode} onToggle={onToggle} />}
          />
          <Route
            path="/experience"
            element={<Experience theme={theme} themeMode={themeMode} onToggle={onToggle} />}
          />
          <Route
            path="/opensource"
            element={<Opensource theme={theme} themeMode={themeMode} onToggle={onToggle} />}
          />
          <Route
            path="/contact"
            element={<Contact theme={theme} themeMode={themeMode} onToggle={onToggle} />}
          />
          <Route
            path="/projects"
            element={<Projects theme={theme} themeMode={themeMode} onToggle={onToggle} />}
          />
          <Route
            path="/resume"
            element={<ResumePage theme={theme} themeMode={themeMode} onToggle={onToggle} />}
          />
          {settings.isSplash && (
            <Route
              path="/splash"
              element={<Splash theme={theme} themeMode={themeMode} onToggle={onToggle} />}
            />
          )}
          <Route
            path="*"
            element={<Error404 theme={theme} themeMode={themeMode} onToggle={onToggle} />}
          />
        </Routes>
      </HashRouter>
    );
  }
}
