import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Text } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const HARDWARE_ITEMS = [
  {
    id: 'esp32',
    name: 'ESP32-WROOM-32',
    specs: ['Dual-Core Xtensa LX6 @ 240MHz', '520KB SRAM + 4MB Flash', 'Wi-Fi + BLE 4.2', 'FreeRTOS Compatible'],
    color: '#E7352C',
    position: [-3, 0, 0],
  },
  {
    id: 'arduino-mega',
    name: 'Arduino Mega 2560',
    specs: ['ATmega2560 @ 16MHz', '256KB Flash + 8KB SRAM', '54 Digital I/O Pins', '16 Analog Inputs'],
    color: '#00979D',
    position: [0, 0, 0],
  },
  {
    id: 'lora',
    name: 'LoRa SX1278',
    specs: ['433/868/915 MHz ISM Band', '148 dBm Sensitivity', '20 dBm Output Power', 'Range: 10+ km (LOS)'],
    color: '#FF6F00',
    position: [3, 0, 0],
  },
];

function WireframePCB({ color, isHovered }) {
  const meshRef = useRef();
  const matColor = new THREE.Color(color);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={meshRef}>
      {/* Main board */}
      <mesh>
        <boxGeometry args={[2, 0.08, 1.2]} />
        <meshBasicMaterial color={matColor} wireframe transparent opacity={isHovered ? 0.6 : 0.3} />
      </mesh>

      {/* SoC chip */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.5, 0.1, 0.5]} />
        <meshBasicMaterial color={matColor} wireframe transparent opacity={isHovered ? 0.7 : 0.4} />
      </mesh>

      {/* Glow when hovered */}
      {isHovered && (
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.55, 0.13, 0.55]} />
          <meshBasicMaterial
            color={matColor}
            transparent
            opacity={0.15}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* Pins */}
      {[...Array(10)].map((_, i) => (
        <mesh key={`pin-t-${i}`} position={[-0.8 + i * 0.18, -0.05, -0.65]}>
          <boxGeometry args={[0.03, 0.12, 0.03]} />
          <meshBasicMaterial color={matColor} transparent opacity={0.5} />
        </mesh>
      ))}
      {[...Array(10)].map((_, i) => (
        <mesh key={`pin-b-${i}`} position={[-0.8 + i * 0.18, -0.05, 0.65]}>
          <boxGeometry args={[0.03, 0.12, 0.03]} />
          <meshBasicMaterial color={matColor} transparent opacity={0.5} />
        </mesh>
      ))}

      {/* Traces */}
      {[...Array(5)].map((_, i) => (
        <mesh key={`trace-${i}`} position={[0, 0.045, -0.4 + i * 0.2]}>
          <boxGeometry args={[1.6, 0.003, 0.008]} />
          <meshBasicMaterial color={matColor} transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function HardwareModel({ item, isSelected, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={item.position}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => onSelect(item.id)}
          scale={isSelected || hovered ? 1.1 : 1}
        >
          <WireframePCB color={item.color} isHovered={hovered || isSelected} />
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.15}
            color={hovered || isSelected ? '#00ff41' : '#3a6b3a'}
            font="/fonts/JetBrainsMono-Regular.woff"
            anchorX="center"
            anchorY="middle"
          >
            {item.name}
          </Text>
        </group>
      </Float>
    </group>
  );
}

export default function HardwareLab() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = HARDWARE_ITEMS.find((h) => h.id === selectedId);

  return (
    <section id="hardware-lab" style={styles.section}>
      <div style={styles.inner}>
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.sectionTitle}>
            <span style={{ color: '#00ff41' }}>&gt;</span> HARDWARE_LAB
          </span>
          <h2 style={styles.heading}>
            Interactive <span style={{ color: '#00ff41' }}>3D Hardware</span> Showcase
          </h2>
          <p style={styles.subtitle}>
            Click & orbit to inspect the embedded hardware powering production IoT systems.
          </p>
        </div>

        {/* 3D Canvas */}
        <div style={styles.canvasWrapper}>
          <Canvas
            camera={{ position: [0, 2, 7], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} color="#ffffff" />
              <pointLight position={[5, 5, 5]} intensity={0.5} color="#00ff41" />
              <pointLight position={[-5, -3, 3]} intensity={0.3} color="#00f0ff" />

              {HARDWARE_ITEMS.map((item) => (
                <HardwareModel
                  key={item.id}
                  item={item}
                  isSelected={selectedId === item.id}
                  onSelect={setSelectedId}
                />
              ))}

              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={4}
                maxDistance={12}
                autoRotate
                autoRotateSpeed={0.5}
              />

              <EffectComposer>
                <Bloom intensity={0.6} luminanceThreshold={0.2} mipmapBlur />
              </EffectComposer>
            </Suspense>
          </Canvas>

          {/* Label overlay */}
          <div style={styles.labelRow}>
            {HARDWARE_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                style={{
                  ...styles.labelButton,
                  borderColor: selectedId === item.id ? item.color : 'rgba(0,255,65,0.15)',
                  color: selectedId === item.id ? item.color : '#7dffaf',
                  boxShadow: selectedId === item.id ? `0 0 12px ${item.color}40` : 'none',
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Spec Panel */}
        {selectedItem && (
          <div style={styles.specPanel}>
            <div style={styles.specHeader}>
              <span style={styles.specDot} />
              <span style={styles.specTitle}>{selectedItem.name} — SPECIFICATIONS</span>
            </div>
            <div style={styles.specBody}>
              {selectedItem.specs.map((spec, i) => (
                <div key={i} style={styles.specLine}>
                  <span style={{ color: '#3a6b3a' }}>[{String(i).padStart(2, '0')}]</span>{' '}
                  <span style={{ color: '#7dffaf' }}>{spec}</span>
                </div>
              ))}
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
    padding: '100px 24px',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: '#3a6b3a',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '12px',
  },
  heading: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 700,
    color: '#e0ffe0',
    margin: '0 0 12px',
  },
  subtitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: '#b0d4b0',
    maxWidth: '500px',
    margin: '0 auto',
  },
  canvasWrapper: {
    width: '100%',
    height: '400px',
    position: 'relative',
    borderRadius: '12px',
    border: '1px solid rgba(0, 255, 65, 0.08)',
    background: 'rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
  },
  labelRow: {
    position: 'absolute',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 10,
  },
  labelButton: {
    padding: '6px 14px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    background: 'rgba(0, 0, 0, 0.7)',
    border: '1px solid rgba(0, 255, 65, 0.15)',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 200ms ease',
    backdropFilter: 'blur(8px)',
    letterSpacing: '0.5px',
  },
  specPanel: {
    marginTop: '24px',
    background: 'rgba(0, 0, 0, 0.7)',
    border: '1px solid rgba(0, 255, 65, 0.12)',
    borderRadius: '8px',
    overflow: 'hidden',
    maxWidth: '500px',
    margin: '24px auto 0',
    animation: 'matrix-fade-in 0.4s ease forwards',
  },
  specHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderBottom: '1px solid rgba(0, 255, 65, 0.08)',
    background: 'rgba(0, 255, 65, 0.02)',
  },
  specDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00ff41',
    boxShadow: '0 0 4px rgba(0, 255, 65, 0.5)',
  },
  specTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: '#3a6b3a',
    letterSpacing: '1px',
  },
  specBody: {
    padding: '16px',
  },
  specLine: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: 2,
    letterSpacing: '0.5px',
  },
};
