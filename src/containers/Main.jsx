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
    const { theme } = this.props;

    return (
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              settings.isSplash ? (
                <Splash theme={theme} />
              ) : (
                <Home theme={theme} />
              )
            }
          />
          <Route
            path="/home"
            element={<Home theme={theme} />}
          />
          <Route
            path="/education"
            element={<Education theme={theme} />}
          />
          <Route
            path="/experience"
            element={<Experience theme={theme} />}
          />
          <Route
            path="/opensource"
            element={<Opensource theme={theme} />}
          />
          <Route
            path="/contact"
            element={<Contact theme={theme} />}
          />
          <Route
            path="/projects"
            element={<Projects theme={theme} />}
          />
          <Route
            path="/resume"
            element={<ResumePage theme={theme} />}
          />
          {settings.isSplash && (
            <Route
              path="/splash"
              element={<Splash theme={theme} />}
            />
          )}
          <Route
            path="*"
            element={<Error404 theme={theme} />}
          />
        </Routes>
      </HashRouter>
    );
  }
}
