import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural wireframe ESP32 dev board model
 * Built from basic geometries — no external model files needed
 */
export default function HeroModel() {
  const groupRef = useRef();
  const chipGlowRef = useRef();
  const ledRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.3 + t * 0.1;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.2;

    // Pulsing chip glow
    if (chipGlowRef.current) {
      chipGlowRef.current.material.opacity = 0.15 + Math.sin(t * 2) * 0.1;
    }

    // Blinking LED
    if (ledRef.current) {
      ledRef.current.material.emissiveIntensity = Math.sin(t * 4) > 0 ? 2 : 0.2;
    }
  });

  const greenMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: 0x00ff41,
    wireframe: true,
    transparent: true,
    opacity: 0.4,
  }), []);

  const dimGreenMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: 0x00cc33,
    wireframe: true,
    transparent: true,
    opacity: 0.2,
  }), []);

  const pinMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: 0x00ff41,
    transparent: true,
    opacity: 0.6,
  }), []);

  return (
    <group ref={groupRef} scale={1.5}>
      {/* Main PCB Board */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.08, 1.8]} />
        <meshBasicMaterial
          color="#00ff41"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* PCB Traces — decorative lines */}
      {[...Array(6)].map((_, i) => (
        <mesh key={`trace-h-${i}`} position={[0, 0.05, -0.6 + i * 0.24]}>
          <boxGeometry args={[2.4, 0.005, 0.01]} />
          <meshBasicMaterial color="#00ff41" transparent opacity={0.15} />
        </mesh>
      ))}
      {[...Array(4)].map((_, i) => (
        <mesh key={`trace-v-${i}`} position={[-0.8 + i * 0.53, 0.05, 0]}>
          <boxGeometry args={[0.01, 0.005, 1.4]} />
          <meshBasicMaterial color="#00ff41" transparent opacity={0.12} />
        </mesh>
      ))}

      {/* Main SoC Chip */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[0.8, 0.15, 0.8]} />
        <meshBasicMaterial
          color="#00ff41"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Chip glow */}
      <mesh ref={chipGlowRef} position={[0, 0.12, 0]}>
        <boxGeometry args={[0.85, 0.18, 0.85]} />
        <meshBasicMaterial
          color="#39ff14"
          transparent
          opacity={0.15}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* USB Connector */}
      <mesh position={[-1.5, 0.08, 0]}>
        <boxGeometry args={[0.4, 0.12, 0.35]} />
        <primitive object={dimGreenMat} />
      </mesh>

      {/* Antenna */}
      <mesh position={[1.3, 0.08, 0]}>
        <boxGeometry args={[0.4, 0.06, 1.2]} />
        <meshBasicMaterial
          color="#00ff41"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* LED */}
      <mesh ref={ledRef} position={[-0.5, 0.1, 0.5]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial
          color="#00ff41"
          emissive="#00ff41"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Second LED (cyan) */}
      <mesh position={[-0.3, 0.1, 0.5]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* GPIO Pins — Left Side */}
      {[...Array(15)].map((_, i) => (
        <mesh key={`pin-l-${i}`} position={[-1.2 + i * 0.16, -0.05, -0.95]}>
          <boxGeometry args={[0.04, 0.15, 0.04]} />
          <primitive object={pinMat} />
        </mesh>
      ))}

      {/* GPIO Pins — Right Side */}
      {[...Array(15)].map((_, i) => (
        <mesh key={`pin-r-${i}`} position={[-1.2 + i * 0.16, -0.05, 0.95]}>
          <boxGeometry args={[0.04, 0.15, 0.04]} />
          <primitive object={pinMat} />
        </mesh>
      ))}

      {/* Crystal Oscillator */}
      <mesh position={[0.6, 0.1, -0.3]}>
        <cylinderGeometry args={[0.06, 0.06, 0.04, 6]} />
        <primitive object={greenMat} />
      </mesh>

      {/* Capacitors */}
      {[[-0.4, 0.08, -0.4], [0.2, 0.08, -0.5], [0.5, 0.08, 0.3]].map(
        (pos, i) => (
          <mesh key={`cap-${i}`} position={pos}>
            <boxGeometry args={[0.08, 0.06, 0.05]} />
            <primitive object={dimGreenMat} />
          </mesh>
        )
      )}
    </group>
  );
}
