import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RAIN_COUNT = 600;
const SPREAD_X = 40;
const SPREAD_Z = 40;
const HEIGHT = 50;

export default function MatrixRain() {
  const meshRef = useRef();
  const dataRef = useRef(null);

  const { positions, opacities, speeds, chars } = useMemo(() => {
    const pos = new Float32Array(RAIN_COUNT * 3);
    const opa = new Float32Array(RAIN_COUNT);
    const spd = new Float32Array(RAIN_COUNT);
    const chr = new Float32Array(RAIN_COUNT);

    for (let i = 0; i < RAIN_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * SPREAD_X;
      pos[i * 3 + 1] = Math.random() * HEIGHT - HEIGHT / 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z;
      opa[i] = Math.random() * 0.6 + 0.2;
      spd[i] = Math.random() * 8 + 3;
      chr[i] = Math.random();
    }

    return { positions: pos, opacities: opa, speeds: spd, chars: chr };
  }, []);

  // Store speeds reference
  if (!dataRef.current) {
    dataRef.current = { speeds };
  }

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position;
    const opaAttr = meshRef.current.geometry.attributes.opacity;

    for (let i = 0; i < RAIN_COUNT; i++) {
      posAttr.array[i * 3 + 1] -= dataRef.current.speeds[i] * delta;

      if (posAttr.array[i * 3 + 1] < -HEIGHT / 2) {
        posAttr.array[i * 3 + 1] = HEIGHT / 2;
        opaAttr.array[i] = Math.random() * 0.6 + 0.2;
      }
    }

    posAttr.needsUpdate = true;
    opaAttr.needsUpdate = true;
  });

  const matrixGreen = useMemo(() => new THREE.Color(0x00ff41), []);

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={RAIN_COUNT}
        />
        <bufferAttribute
          attach="attributes-opacity"
          args={[opacities, 1]}
          count={RAIN_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color={matrixGreen}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
