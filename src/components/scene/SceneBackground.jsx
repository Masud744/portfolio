import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Scanline } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import MatrixRain from './MatrixRain';
import FloatingGeometry from './FloatingGeometry';

/**
 * Full-viewport 3D background scene
 * Renders behind all content — fixed position
 */
export default function SceneBackground() {
  return (
    <div className="scene-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for basic visibility */}
          <ambientLight intensity={0.3} color="#00ff41" />

          {/* Matrix rain particles */}
          <MatrixRain />

          {/* Star field with green tint */}
          <Stars
            radius={80}
            depth={60}
            count={2000}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />

          {/* Floating wireframe geometry */}
          <FloatingGeometry />

          {/* Post-processing effects */}
          <EffectComposer>
            <Bloom
              intensity={0.8}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <Scanline
              blendFunction={BlendFunction.OVERLAY}
              density={1.5}
              opacity={0.03}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
