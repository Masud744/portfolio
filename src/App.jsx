import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsGrid from "./components/ProjectsGrid";
import JourneyTimeline from "./components/JourneyTimeline";
import SkillsWorkbench from "./components/SkillsWorkbench";
import HonorsSection from "./components/HonorsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import TerminalModal from "./components/TerminalModal";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      {/* Primary Sticky Header */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Semantic Page Content */}
      <main id="main-content" tabIndex="-1">
        {/* 1. Engineer Introduction, Real Status & Hardware Focus */}
        <HeroSection onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* 2. Concrete Engineering Case Studies with Architecture Inspection */}
        <ProjectsGrid onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 3. Chronological Career & Academic Milestones */}
        <JourneyTimeline />

        {/* 4. Categorized Technical Capabilities (Hardware, RTOS, Edge AI, Cloud) */}
        <SkillsWorkbench />

        {/* 5. Verified Credentials, Honors & Hackathon Records */}
        <HonorsSection />

        {/* 6. Communication Hub, Availability & Message Dispatch */}
        <ContactSection />
      </main>

      {/* Semantic Colophon */}
      <Footer />

      {/* Architectural Deep-Dive Spec Drawer/Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* PlatformIO Serial CLI Monitor */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
