import React, { useState, useRef } from "react";
import { flagshipProjects } from "../data/portfolioData";
import { ExternalLink, ChevronRight, ChevronLeft, Shuffle, Sparkles } from "lucide-react";
import Github from "./GithubIcon";
import { playClick, playHover } from "../utils/sound";

export default function DraggableDeck({ onSelectProject }) {
  const [deck, setDeck] = useState(flagshipProjects.map((p, idx) => ({ ...p, order: idx })));
  const [activeIdx, setActiveIdx] = useState(0);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const currentProject = deck[activeIdx];

  const handleNext = () => {
    playClick();
    setActiveIdx((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    playClick();
    setActiveIdx((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleShuffle = () => {
    playClick();
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setActiveIdx(0);
  };

  // Pointer drag events
  const onPointerDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setDragOffset({ x: dx, y: dy });
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset.x > 80) {
      handlePrev();
    } else if (dragOffset.x < -80) {
      handleNext();
    }
    setDragOffset({ x: 0, y: 0 });
  };

  return (
    <div className="draggable-deck-container">
      <div className="deck-header">
        <div className="section-pill">
          <Sparkles size={14} className="text-cyan-400" />
          <span>Interactive 3D Card Deck</span>
        </div>
        <h2 className="deck-title">Swipe, Drag & Explore Flagships</h2>
        <p className="deck-subtitle">
          Inspired by physics-based gesture navigation. Drag left or right to cycle through hardware firmware & AI platforms.
        </p>
      </div>

      <div
        className="deck-stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className="cards-stack">
          {deck.map((proj, idx) => {
            const relIdx = (idx - activeIdx + deck.length) % deck.length;
            if (relIdx > 3 && relIdx < deck.length - 1) return null;

            const isTop = relIdx === 0;
            const xOffset = isTop ? dragOffset.x : relIdx * 18;
            const yOffset = isTop ? dragOffset.y * 0.4 : relIdx * 14;
            const rotation = isTop ? dragOffset.x * 0.08 : (relIdx % 2 === 0 ? 1 : -1) * relIdx * 2.5;
            const scale = Math.max(0.75, 1 - relIdx * 0.06);
            const zIndex = 10 - relIdx;
            const opacity = Math.max(0.2, 1 - relIdx * 0.22);

            return (
              <div
                key={proj.id}
                className={`deck-card ${isTop ? "is-active" : ""}`}
                style={{
                  transform: `translate3d(${xOffset}px, ${yOffset}px, 0) rotate(${rotation}deg) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  borderColor: isTop ? proj.colorAccent : "rgba(255, 255, 255, 0.1)",
                  boxShadow: isTop
                    ? `0 20px 50px -10px ${proj.colorAccent}33, 0 0 30px rgba(0, 240, 255, 0.1)`
                    : "0 10px 30px rgba(0,0,0,0.5)"
                }}
                onMouseEnter={playHover}
              >
                <div className="card-top-bar">
                  <span className="card-icon">{proj.icon}</span>
                  <span className="card-badge" style={{ backgroundColor: `${proj.colorAccent}22`, color: proj.colorAccent }}>
                    {proj.featuredBadge}
                  </span>
                  <span className="card-counter">#{idx + 1} / {deck.length}</span>
                </div>

                <div className="card-body">
                  <h3 className="card-project-title">{proj.title}</h3>
                  <h4 className="card-project-subtitle">{proj.subtitle}</h4>
                  <p className="card-project-desc">{proj.description}</p>

                  <div className="card-metrics-grid">
                    {proj.metrics.slice(0, 3).map((m, mIdx) => (
                      <div key={mIdx} className="metric-pill">
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-tech-row">
                    {proj.techStack.slice(0, 5).map((t, tIdx) => (
                      <span key={tIdx} className="tech-chip" style={{ borderLeftColor: t.color }}>
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    className="card-action-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      playClick();
                      onSelectProject(proj);
                    }}
                  >
                    Deep Dive Architecture
                  </button>
                  <div className="card-links">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      onClick={(e) => e.stopPropagation()}
                      title="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        onClick={(e) => e.stopPropagation()}
                        title="Live App / Documentation"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deck Controls */}
      <div className="deck-controls">
        <button className="deck-nav-btn" onClick={handlePrev} title="Previous Project" onMouseEnter={playHover}>
          <ChevronLeft size={20} />
        </button>
        <span className="deck-indicator">
          Project <b>{activeIdx + 1}</b> of <b>{deck.length}</b>
        </span>
        <button className="deck-nav-btn" onClick={handleNext} title="Next Project" onMouseEnter={playHover}>
          <ChevronRight size={20} />
        </button>
        <button className="deck-shuffle-btn" onClick={handleShuffle} title="Shuffle Deck" onMouseEnter={playHover}>
          <Shuffle size={16} /> Shuffle
        </button>
      </div>
    </div>
  );
}
