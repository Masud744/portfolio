import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  render() {
    const { theme, themeMode, onToggle } = this.props;
    const link = settings.isSplash ? "/splash" : "/home";

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  Contact Me
                </NavLink>
              </li>
              <li>
                <button
                  onClick={onToggle}
                  className="theme-switch-btn"
                  style={{
                    background: "transparent",
                    border: `1.5px solid ${theme.headerColor || theme.text}`,
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: theme.text,
                    fontSize: "1.1rem",
                    marginLeft: "8px",
                    transition: "all 0.3s ease",
                  }}
                  title="Toggle Dark/Light Mode"
                  aria-label="Toggle theme"
                >
                  {themeMode === "dark" ? "☀️" : "🌙"}
                </button>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}

export default Header;
