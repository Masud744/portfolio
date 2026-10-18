import React, { useState, useMemo } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import TopButton from "../../components/topButton/TopButton";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Projects(props) {
  const theme = props.theme;
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Exact 6 categories from Screenshot 5
  const categories = [
    { key: "all", label: "All" },
    { key: "software", label: "Software" },
    { key: "iot", label: "IoT" },
    { key: "robotics", label: "Robotics" },
    { key: "ml", label: "Machine Learning" },
    { key: "web", label: "Web" },
  ];

  const filteredProjects = useMemo(() => {
    if (filter === "all") return ProjectsData.data;
    return ProjectsData.data.filter((proj) => {
      const cat = (proj.category || "").toLowerCase();
      if (filter === "software") return cat.includes("software");
      if (filter === "iot") return cat.includes("iot") || cat.includes("embedded");
      if (filter === "robotics") return cat.includes("robotics");
      if (filter === "ml") return cat.includes("ml") || cat.includes("learning") || cat.includes("ai");
      if (filter === "web") return cat.includes("web") || cat.includes("full-stack");
      return cat.includes(filter);
    });
  }, [filter]);

  // Default display 6 projects (2 full rows of 3), matching Screenshot 5
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div className="projects-main">
      <Header
        theme={theme}
        themeMode={props.themeMode}
        onToggle={props.onToggle}
      />

      <div className="projects-container">
        {/* Header with Title & Category Filter Tabs matching Screenshot 5 */}
        <div className="projects-section-header">
          <div className="projects-title-wrapper">
            <h2 className="projects-section-title">
              Other Notable Projects
            </h2>
            <div className="projects-title-divider" />
          </div>

          <div className="projects-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setFilter(cat.key);
                  setShowAll(false);
                }}
                className={`project-filter-pill ${
                  filter === cat.key ? "filter-pill-active" : ""
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Responsive Grid matching Screenshot 5 */}
        <div className="projects-grid-container">
          {displayedProjects.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredProjects.length > 6 && (
          <div className="projects-show-more-wrapper">
            <button
              type="button"
              className="projects-toggle-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less <FiChevronUp />
                </>
              ) : (
                <>
                  See More Projects <FiChevronDown />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
