import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import HeroModel from '../scene/HeroModel';
import TypewriterText from '../effects/TypewriterText';
import { personalInfo } from '../../data/portfolioData';

const BOOT_LINES = [
  { text: '> BIOS CHECK... OK', delay: 0 },
  { text: '> LOADING FIRMWARE: shahriar_alom_masud.bin', delay: 400 },
  { text: '> FreeRTOS KERNEL: ACTIVE', delay: 900 },
  { text: '> SENSORS: PMS5003, DHT22, MQ-135 — ONLINE', delay: 1400 },
  { text: '> NETWORK: LoRa SX1278 + MQTT — CONNECTED', delay: 1900 },
  { text: '> AI ENGINE: YOLOv8 + MediaPipe — LOADED', delay: 2400 },
  { text: '> SYSTEM READY.', delay: 2900 },
];

export default function HeroTerminal() {
  const [bootPhase, setBootPhase] = useState(0); // 0=booting, 1=ready
  const [visibleLines, setVisibleLines] = useState([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => {
            setBootPhase(1);
            setTimeout(() => setShowContent(true), 300);
          }, 600);
        }
      }, line.delay);
    });
  }, []);

  const handleDownloadCV = useCallback(() => {
    window.open(personalInfo.resumeUrl, '_blank');
  }, []);

  const handleScrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="hero" style={styles.section}>
      {/* 3D ESP32 Model */}
      <div style={styles.modelContainer}>
        <Canvas
          camera={{ position: [0, 1, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} color="#00ff41" />
            <pointLight position={[5, 5, 5]} intensity={0.5} color="#00ff41" />
            <pointLight position={[-5, -3, 3]} intensity={0.3} color="#00f0ff" />
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
              <HeroModel />
            </Float>
            <EffectComposer>
              <Bloom intensity={1.2} luminanceThreshold={0.1} mipmapBlur />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div style={styles.content}>
        {/* Boot Sequence */}
        {bootPhase === 0 && (
          <div style={styles.bootContainer}>
            <div style={styles.bootHeader}>
              <span style={styles.bootDot} />
              <span style={styles.bootTitle}>system_boot.sh</span>
            </div>
            <div style={styles.bootBody}>
              {visibleLines.map((line, i) => (
                <div key={i} style={{
                  ...styles.bootLine,
                  color: line.includes('READY') ? '#00ff41' : '#7dffaf',
                  fontWeight: line.includes('READY') ? 700 : 400,
                  textShadow: line.includes('READY') ? '0 0 10px rgba(0,255,65,0.5)' : 'none',
                }}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Hero Content */}
        {showContent && (
          <div style={styles.heroContent}>
            {/* Badge */}
            <div style={styles.badge}>
              <span style={styles.badgeDot} />
              <span>{personalInfo.flagshipAchievement.package} — {personalInfo.flagshipAchievement.title}</span>
            </div>

            {/* Name */}
            <h1 style={styles.name}>
              <TypewriterText
                text={personalInfo.name}
                speed={50}
                tag="span"
              />
            </h1>

            {/* Role */}
            <h2 style={styles.role}>
              <TypewriterText
                text={personalInfo.role}
                speed={30}
                delay={800}
                cursor={false}
                tag="span"
              />
            </h2>

            {/* Tagline */}
            <p style={styles.tagline}>
              {personalInfo.tagline}
            </p>

            {/* Core Values */}
            <div style={styles.values}>
              {personalInfo.coreValues.map((val, i) => (
                <span key={i} style={{
                  ...styles.valueBadge,
                  animationDelay: `${1500 + i * 100}ms`,
                }}>
                  {val}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={styles.ctas}>
              <button
                onClick={handleDownloadCV}
                className="btn-matrix btn-matrix-filled"
              >
                📄 Download CV
              </button>
              <button
                onClick={handleScrollToProjects}
                className="btn-matrix"
              >
                📦 View Projects
              </button>
            </div>

            {/* Scroll Indicator */}
            <div style={styles.scrollIndicator}>
              <div style={styles.scrollLine} />
              <span style={styles.scrollText}>SCROLL TO EXPLORE</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 'var(--nav-height)',
    overflow: 'hidden',
  },
  modelContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6,
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    padding: '0 24px',
  },
  bootContainer: {
    maxWidth: '600px',
    background: 'rgba(0, 0, 0, 0.85)',
    border: '1px solid rgba(0, 255, 65, 0.15)',
    borderRadius: '8px',
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
  },
  bootHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 14px',
    background: 'rgba(0, 255, 65, 0.03)',
    borderBottom: '1px solid rgba(0, 255, 65, 0.1)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#3a6b3a',
  },
  bootDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 6px rgba(0, 255, 65, 0.5)',
  },
  bootTitle: {
    letterSpacing: '1px',
  },
  bootBody: {
    padding: '16px',
  },
  bootLine: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: 1.8,
    animation: 'matrix-fade-in 0.3s ease forwards',
  },
  heroContent: {
    animation: 'matrix-fade-in 0.8s ease forwards',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#00ff41',
    background: 'rgba(0, 255, 65, 0.06)',
    border: '1px solid rgba(0, 255, 65, 0.15)',
    borderRadius: '2px',
    letterSpacing: '1px',
    marginBottom: '24px',
    textTransform: 'uppercase',
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 4px rgba(0, 255, 65, 0.5)',
    animation: 'glow-pulse 2s ease-in-out infinite',
  },
  name: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: 800,
    color: '#e0ffe0',
    lineHeight: 1.05,
    margin: 0,
    textShadow: '0 0 30px rgba(0, 255, 65, 0.15)',
  },
  role: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
    fontWeight: 400,
    color: '#00ff41',
    marginTop: '12px',
    textShadow: '0 0 15px rgba(0, 255, 65, 0.3)',
    letterSpacing: '1px',
  },
  tagline: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: '#b0d4b0',
    maxWidth: '560px',
    lineHeight: 1.7,
    marginTop: '20px',
  },
  values: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '20px',
  },
  valueBadge: {
    padding: '4px 12px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#7dffaf',
    background: 'rgba(0, 255, 65, 0.04)',
    border: '1px solid rgba(0, 255, 65, 0.1)',
    borderRadius: '2px',
    letterSpacing: '1px',
    animation: 'matrix-fade-in 0.5s ease forwards',
    opacity: 0,
  },
  ctas: {
    display: 'flex',
    gap: '12px',
    marginTop: '32px',
    flexWrap: 'wrap',
  },
  scrollIndicator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '60px',
    gap: '8px',
  },
  scrollLine: {
    width: '1px',
    height: '40px',
    background: 'linear-gradient(to bottom, #00ff41, transparent)',
    animation: 'float 2s ease-in-out infinite',
  },
  scrollText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    color: '#3a6b3a',
    letterSpacing: '3px',
  },
};
