import React from 'react';
import './App.css';

// 3D Background
import SceneBackground from './components/scene/SceneBackground';

// Effects
import ScanlineOverlay from './components/effects/ScanlineOverlay';

// UI
import HUDNavbar from './components/ui/HUDNavbar';
import StatusBar from './components/ui/StatusBar';

// Sections
import HeroTerminal from './components/sections/HeroTerminal';
import HardwareLab from './components/sections/HardwareLab';
import ProjectGalaxy from './components/sections/ProjectGalaxy';
import CircuitTimeline from './components/sections/CircuitTimeline';
import SkillMatrix3D from './components/sections/SkillMatrix3D';
import AchievementConsole from './components/sections/AchievementConsole';
import TransmissionPanel from './components/sections/TransmissionPanel';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* Fixed 3D Background Scene */}
      <SceneBackground />

      {/* CRT Scanline Overlay */}
      <ScanlineOverlay />

      {/* HUD Navigation */}
      <HUDNavbar />

      {/* Content Layer — sits above 3D canvas */}
      <div className="content-layer">
        <main id="main-content" tabIndex="-1">
          {/* 1. Boot Sequence & Engineer Identity */}
          <HeroTerminal />

          {/* 2. Interactive 3D Hardware Lab */}
          <HardwareLab />

          {/* 3. Flagship Engineering Projects */}
          <ProjectGalaxy />

          {/* 4. Career & Academic Circuit Trace */}
          <CircuitTimeline />

          {/* 5. Technical Proficiency Matrix */}
          <SkillMatrix3D />

          {/* 6. Achievement Log */}
          <AchievementConsole />

          {/* 7. Communication Channel */}
          <TransmissionPanel />
        </main>

        {/* System Status Footer */}
        <StatusBar />
      </div>
    </div>
  );
}
