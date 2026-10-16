import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Geodesic Core (Icosahedron Wireframe)
    const outerGeo = new THREE.IcosahedronGeometry(2.1, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 2. Inner Glowing Core (Points + Wireframe)
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7000ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Central Energy Node (Core Sphere)
    const coreGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 4. Orbiting Rings (representing wireless telemetry & antenna signals)
    const ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.4
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.1, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xff00bb,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 5. Starfield / Floating Neural Telemetry Particles
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f0ff);
    const color2 = new THREE.Color(0x7000ff);
    const color3 = new THREE.Color(0x00ff88);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking with smooth Lerp
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetX = x * 0.7;
      targetY = y * 0.7;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.15 + mouseX * 0.8;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 - mouseY * 0.8;

      innerMesh.rotation.y = -elapsedTime * 0.25;
      innerMesh.rotation.z = elapsedTime * 0.15;

      coreMesh.rotation.y = elapsedTime * 0.5;
      coreMesh.scale.setScalar(1 + Math.sin(elapsedTime * 3) * 0.08);

      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.x = -elapsedTime * 0.25;

      particles.rotation.y = -elapsedTime * 0.04;
      particles.rotation.x = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        overflow: "hidden"
      }}
    />
  );
}
