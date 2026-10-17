import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SHAPES = [
  { type: 'octahedron', radius: 0.5, detail: 0 },
  { type: 'icosahedron', radius: 0.4, detail: 0 },
  { type: 'tetrahedron', radius: 0.45, detail: 0 },
  { type: 'dodecahedron', radius: 0.35, detail: 0 },
  { type: 'box', size: 0.4 },
  { type: 'torus', radius: 0.4, tube: 0.08 },
];

function FloatingShape({ shape, position, rotationSpeed, floatSpeed, floatAmplitude }) {
  const meshRef = useRef();
  const initialY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x += rotationSpeed[0];
    meshRef.current.rotation.y += rotationSpeed[1];
    meshRef.current.rotation.z += rotationSpeed[2];
    meshRef.current.position.y = initialY + Math.sin(t * floatSpeed) * floatAmplitude;
  });

  const geometry = useMemo(() => {
    switch (shape.type) {
      case 'octahedron':
        return <octahedronGeometry args={[shape.radius, shape.detail]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[shape.radius, shape.detail]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[shape.radius, shape.detail]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[shape.radius, shape.detail]} />;
      case 'box':
        return <boxGeometry args={[shape.size, shape.size, shape.size]} />;
      case 'torus':
        return <torusGeometry args={[shape.radius, shape.tube, 8, 16]} />;
      default:
        return <octahedronGeometry args={[0.5, 0]} />;
    }
  }, [shape]);

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshBasicMaterial
        color="#00ff41"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

export default function FloatingGeometry() {
  const shapes = useMemo(() => {
    const items = [];
    for (let i = 0; i < 12; i++) {
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      items.push({
        id: i,
        shape,
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20 - 5,
        ],
        rotationSpeed: [
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.003,
        ],
        floatSpeed: Math.random() * 0.5 + 0.2,
        floatAmplitude: Math.random() * 1.5 + 0.5,
      });
    }
    return items;
  }, []);

  return (
    <group>
      {shapes.map((item) => (
        <FloatingShape key={item.id} {...item} />
      ))}
    </group>
  );
}
