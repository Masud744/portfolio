import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Cpu, Zap, Layers, RefreshCw, Eye, Info } from "lucide-react";

// Verified hardware specifications for ESP32-WROOM-32 DevKit
const ANNOTATIONS = [
  {
    id: "mcu",
    title: "Xtensa® Dual-Core 32-bit LX6 MCU",
    badge: "240 MHz Core",
    desc: "Up to 600 DMIPS computing power. 520 KB on-chip SRAM, 448 KB ROM, and 4 MB external SPI Flash.",
    targetPosition: { x: 0, y: 0.4, z: 0.2 }
  },
  {
    id: "antenna",
    title: "2.4 GHz MIFA PCB Antenna",
    badge: "Wi-Fi & BLE",
    desc: "Meandered Inverted-F Antenna engineered for 802.11 b/g/n (150 Mbps) and Bluetooth v4.2 BR/EDR & BLE.",
    targetPosition: { x: 0, y: 1.6, z: 0.1 }
  },
  {
    id: "usb_bridge",
    title: "CP2102 USB-to-UART Bridge",
    badge: "Serial Bridge",
    desc: "Silicon Labs CP2102 single-chip USB to UART controller for high-speed firmware flashing and serial monitoring.",
    targetPosition: { x: 0, y: -0.6, z: 0.1 }
  },
  {
    id: "ldo",
    title: "AMS1117 3.3V LDO Voltage Regulator",
    badge: "Power Stage",
    desc: "Low-dropout linear regulator converting 5V USB / VIN input down to stable 3.3V rail (up to 800mA current capacity).",
    targetPosition: { x: -0.6, y: -0.9, z: 0.1 }
  },
  {
    id: "gpio",
    title: "Dual 15-Pin Expansion Headers",
    badge: "30-Pin Pinout",
    desc: "Gold-plated ENIG through-holes routing 18 ADC channels, 2 DACs, 3 UARTs, 3 SPI, 2 I2C, capacitive touch and PWM.",
    targetPosition: { x: 1.1, y: 0, z: 0.1 }
  },
  {
    id: "led",
    title: "GPIO2 Programmable Status LED",
    badge: "Diagnostic Indicator",
    desc: "On-board user status LED tied to GPIO2 (ADC2_CH2). Acts as bootloader feedback and live runtime heartbeat.",
    targetPosition: { x: 0.45, y: -0.45, z: 0.1 }
  }
];

export default function Hardware3DViewer() {
  const mountRef = useRef(null);
  const [activeAnnotation, setActiveAnnotation] = useState(ANNOTATIONS[0]);
  const [isWireframe, setIsWireframe] = useState(false);
  const [webglError, setWebglError] = useState(false);
  const [isInspecting, setIsInspecting] = useState(false);

  // References across render loop
  const pcbMaterialsRef = useRef([]);
  const sceneRef = useRef(null);
  const boardGroupRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Check WebGL Availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglError(true);
        return;
      }
    } catch (e) {
      setWebglError(true);
      return;
    }

    // 2. Scene & Lighting Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
    camera.position.set(0, -0.2, 5.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Controlled Industrial Laboratory Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xe8f0ff, 2.2);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
    rimLight.position.set(-5, -4, 3);
    scene.add(rimLight);

    const warmUnderLight = new THREE.DirectionalLight(0xd4af37, 0.6);
    warmUnderLight.position.set(0, -3, -2);
    scene.add(warmUnderLight);

    // 3. Procedural ESP32 DevKit Construction
    const boardGroup = new THREE.Group();
    boardGroupRef.current = boardGroup;
    scene.add(boardGroup);

    // --- PCB Substrate (FR4 with ENIG Gold and Silkscreen) ---
    // Physical dimensions: ~28mm x 51mm, scaled to 2.2 x 4.0 units
    const pcbWidth = 2.2;
    const pcbHeight = 4.0;
    const pcbDepth = 0.1;

    const pcbShape = new THREE.Shape();
    const cornerRadius = 0.12;
    const x = -pcbWidth / 2;
    const y = -pcbHeight / 2;
    const w = pcbWidth;
    const h = pcbHeight;

    pcbShape.moveTo(x + cornerRadius, y);
    pcbShape.lineTo(x + w - cornerRadius, y);
    pcbShape.quadraticCurveTo(x + w, y, x + w, y + cornerRadius);
    pcbShape.lineTo(x + w, y + h - cornerRadius);
    pcbShape.quadraticCurveTo(x + w, y + h, x + w - cornerRadius, y + h);
    pcbShape.lineTo(x + cornerRadius, y + h);
    pcbShape.quadraticCurveTo(x, y + h, x, y + h - cornerRadius);
    pcbShape.lineTo(x, y + cornerRadius);
    pcbShape.quadraticCurveTo(x, y, x + cornerRadius, y);

    const extrudeSettings = {
      depth: pcbDepth,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02
    };

    const pcbGeo = new THREE.ExtrudeGeometry(pcbShape, extrudeSettings);
    pcbGeo.center();

    // Dark Matte FR4 Texture Canvas
    const pcbCanvas = document.createElement("canvas");
    pcbCanvas.width = 1024;
    pcbCanvas.height = 2048;
    const pctx = pcbCanvas.getContext("2d");

    // Matte black/charcoal FR4 base
    pctx.fillStyle = "#121418";
    pctx.fillRect(0, 0, 1024, 2048);

    // Realistic subtle copper grounding grid
    pctx.strokeStyle = "rgba(229, 184, 92, 0.06)";
    pctx.lineWidth = 1;
    for (let i = 0; i < 1024; i += 24) {
      pctx.beginPath();
      pctx.moveTo(i, 0);
      pctx.lineTo(i, 2048);
      pctx.stroke();
    }
    for (let j = 0; j < 2048; j += 24) {
      pctx.beginPath();
      pctx.moveTo(0, j);
      pctx.lineTo(1024, j);
      pctx.stroke();
    }

    // High-contrast Silkscreen & Pin Markings
    pctx.fillStyle = "rgba(255, 255, 255, 0.88)";
    pctx.font = "bold 20px monospace";
    pctx.textAlign = "center";
    pctx.fillText("ESP32 DEVKIT V1", 512, 600);
    pctx.font = "14px monospace";
    pctx.fillText("SHAHRIAR ALOM MASUD • EMBEDDED LAB", 512, 630);

    // Left Pinout Silkscreen Labels
    const leftPins = ["3V3", "GND", "D15", "D2", "D4", "RX2", "TX2", "D5", "D18", "D19", "D21", "RX0", "TX0", "D22", "D23"];
    pctx.textAlign = "left";
    pctx.font = "bold 15px monospace";
    pctx.fillStyle = "#e2e8f0";
    leftPins.forEach((pin, idx) => {
      const py = 350 + idx * 95;
      pctx.fillText(pin, 140, py + 5);
      // Gold solder ring indicator
      pctx.fillStyle = "#e5b85c";
      pctx.beginPath();
      pctx.arc(70, py, 14, 0, Math.PI * 2);
      pctx.fill();
      pctx.fillStyle = "#121418";
      pctx.beginPath();
      pctx.arc(70, py, 7, 0, Math.PI * 2);
      pctx.fill();
      pctx.fillStyle = "#e2e8f0";
    });

    // Right Pinout Silkscreen Labels
    const rightPins = ["VIN", "GND", "D13", "D12", "D14", "D27", "D26", "D25", "D33", "D32", "D35", "D34", "VN", "VP", "EN"];
    pctx.textAlign = "right";
    rightPins.forEach((pin, idx) => {
      const py = 350 + idx * 95;
      pctx.fillText(pin, 884, py + 5);
      // Gold solder ring indicator
      pctx.fillStyle = "#e5b85c";
      pctx.beginPath();
      pctx.arc(954, py, 14, 0, Math.PI * 2);
      pctx.fill();
      pctx.fillStyle = "#121418";
      pctx.beginPath();
      pctx.arc(954, py, 7, 0, Math.PI * 2);
      pctx.fill();
      pctx.fillStyle = "#e2e8f0";
    });

    // Golden Meandered Inverted-F Antenna (MIFA) trace at top
    pctx.strokeStyle = "#e5b85c";
    pctx.lineWidth = 10;
    pctx.lineCap = "square";
    pctx.beginPath();
    pctx.moveTo(320, 240);
    pctx.lineTo(320, 90);
    pctx.lineTo(704, 90);
    pctx.lineTo(704, 150);
    pctx.lineTo(460, 150);
    pctx.lineTo(460, 200);
    pctx.lineTo(650, 200);
    pctx.lineTo(650, 240);
    pctx.stroke();

    const pcbTexture = new THREE.CanvasTexture(pcbCanvas);
    pcbTexture.anisotropy = 8;

    const pcbMat = new THREE.MeshStandardMaterial({
      map: pcbTexture,
      roughness: 0.65,
      metalness: 0.15,
      color: 0xffffff
    });
    const pcbMesh = new THREE.Mesh(pcbGeo, pcbMat);
    pcbMesh.receiveShadow = true;
    boardGroup.add(pcbMesh);
    pcbMaterialsRef.current.push(pcbMat);

    // --- Dual 15-Pin Male Header Pins (Gold ENIG + Black Base) ---
    const pinHeaderGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.45, 8);
    const pinGoldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.2
    });
    const headerBlockGeo = new THREE.BoxGeometry(0.12, 3.4, 0.15);
    const headerBlockMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      roughness: 0.8
    });

    // Left header block & pins
    const leftHeaderBlock = new THREE.Mesh(headerBlockGeo, headerBlockMat);
    leftHeaderBlock.position.set(-0.95, -0.05, 0.12);
    boardGroup.add(leftHeaderBlock);

    // Right header block & pins
    const rightHeaderBlock = new THREE.Mesh(headerBlockGeo, headerBlockMat);
    rightHeaderBlock.position.set(0.95, -0.05, 0.12);
    boardGroup.add(rightHeaderBlock);

    for (let i = 0; i < 15; i++) {
      const pinY = 1.4 - i * 0.205;

      const leftPin = new THREE.Mesh(pinHeaderGeo, pinGoldMat);
      leftPin.position.set(-0.95, pinY, 0.28);
      boardGroup.add(leftPin);

      const rightPin = new THREE.Mesh(pinHeaderGeo, pinGoldMat);
      rightPin.position.set(0.95, pinY, 0.28);
      boardGroup.add(rightPin);
    }
    pcbMaterialsRef.current.push(pinGoldMat, headerBlockMat);

    // --- Metallic RF Shield Can (ESP-WROOM-32 Module) ---
    const shieldWidth = 1.45;
    const shieldHeight = 1.55;
    const shieldDepth = 0.12;

    const shieldGeo = new THREE.BoxGeometry(shieldWidth, shieldHeight, shieldDepth);

    // Laser-etched metallic shield top canvas
    const shieldCanvas = document.createElement("canvas");
    shieldCanvas.width = 512;
    shieldCanvas.height = 512;
    const sctx = shieldCanvas.getContext("2d");

    // Silver brushed metal base
    sctx.fillStyle = "#d1d5db";
    sctx.fillRect(0, 0, 512, 512);

    // Subtle brushed metal streaks
    sctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    for (let i = 0; i < 512; i += 2) {
      if (Math.random() > 0.4) {
        sctx.fillRect(0, i, 512, 1);
      }
    }

    // Laser Etched Markings
    sctx.fillStyle = "#1e293b";
    sctx.font = "bold 26px sans-serif";
    sctx.textAlign = "center";
    sctx.fillText("ESPRESSIF", 256, 110);
    sctx.font = "bold 28px sans-serif";
    sctx.fillText("ESP32-WROOM-32D", 256, 160);
    sctx.font = "16px monospace";
    sctx.fillText("FCC ID: 2AC7Z-ESPWROOM32D", 256, 215);
    sctx.fillText("KCC-CRM-es5-ESPWROOM32D", 256, 245);
    sctx.fillText("Xtensa LX6 240MHz • 4MB SPI", 256, 290);
    sctx.font = "bold 14px monospace";
    sctx.fillText("CE 0700  [ RoHS Compliant ]", 256, 340);

    const shieldTexture = new THREE.CanvasTexture(shieldCanvas);
    const shieldMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xc4c7cc, metalness: 0.88, roughness: 0.32 }), // right
      new THREE.MeshStandardMaterial({ color: 0xc4c7cc, metalness: 0.88, roughness: 0.32 }), // left
      new THREE.MeshStandardMaterial({ color: 0xc4c7cc, metalness: 0.88, roughness: 0.32 }), // top
      new THREE.MeshStandardMaterial({ color: 0xc4c7cc, metalness: 0.88, roughness: 0.32 }), // bottom
      new THREE.MeshStandardMaterial({ map: shieldTexture, metalness: 0.85, roughness: 0.28 }), // front
      new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.5, roughness: 0.5 })  // back
    ];

    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMaterials);
    shieldMesh.position.set(0, 0.55, 0.1);
    shieldMesh.castShadow = true;
    shieldMesh.receiveShadow = true;
    boardGroup.add(shieldMesh);
    pcbMaterialsRef.current.push(...shieldMaterials);

    // --- Micro-USB Metal Connector Port ---
    const usbGeo = new THREE.BoxGeometry(0.55, 0.45, 0.22);
    const usbMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.25
    });
    const usbMesh = new THREE.Mesh(usbGeo, usbMat);
    usbMesh.position.set(0, -1.82, 0.12);
    usbMesh.castShadow = true;
    boardGroup.add(usbMesh);

    // USB socket interior hole
    const usbHoleGeo = new THREE.BoxGeometry(0.38, 0.08, 0.12);
    const usbHoleMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const usbHole = new THREE.Mesh(usbHoleGeo, usbHoleMat);
    usbHole.position.set(0, -1.98, 0.12);
    boardGroup.add(usbHole);

    // --- CP2102 USB-to-UART Silicon IC ---
    const icGeo = new THREE.BoxGeometry(0.38, 0.38, 0.07);
    const icMat = new THREE.MeshStandardMaterial({
      color: 0x181a20,
      roughness: 0.45,
      metalness: 0.1
    });
    const icMesh = new THREE.Mesh(icGeo, icMat);
    icMesh.position.set(0, -0.65, 0.09);
    boardGroup.add(icMesh);

    // --- AMS1117 3.3V Voltage Regulator ---
    const regGeo = new THREE.BoxGeometry(0.48, 0.28, 0.09);
    const regMesh = new THREE.Mesh(regGeo, icMat);
    regMesh.position.set(-0.55, -0.95, 0.09);
    boardGroup.add(regMesh);

    const regTabGeo = new THREE.BoxGeometry(0.24, 0.12, 0.04);
    const regTabMat = new THREE.MeshStandardMaterial({
      color: 0xc4c7cc,
      metalness: 0.9,
      roughness: 0.2
    });
    const regTabMesh = new THREE.Mesh(regTabGeo, regTabMat);
    regTabMesh.position.set(-0.55, -0.80, 0.09);
    boardGroup.add(regTabMesh);

    // --- Pushbuttons: EN (Reset) and BOOT (IO0) ---
    const btnBaseGeo = new THREE.BoxGeometry(0.25, 0.25, 0.1);
    const btnBaseMat = new THREE.MeshStandardMaterial({ color: 0x242830, roughness: 0.5 });
    const btnActuatorGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.06, 12);
    const btnActuatorMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.85, roughness: 0.3 });

    // EN Button (Left of USB)
    const enBtnBase = new THREE.Mesh(btnBaseGeo, btnBaseMat);
    enBtnBase.position.set(-0.55, -1.55, 0.08);
    boardGroup.add(enBtnBase);
    const enBtnAct = new THREE.Mesh(btnActuatorGeo, btnActuatorMat);
    enBtnAct.rotation.x = Math.PI / 2;
    enBtnAct.position.set(-0.55, -1.55, 0.14);
    boardGroup.add(enBtnAct);

    // BOOT Button (Right of USB)
    const bootBtnBase = new THREE.Mesh(btnBaseGeo, btnBaseMat);
    bootBtnBase.position.set(0.55, -1.55, 0.08);
    boardGroup.add(bootBtnBase);
    const bootBtnAct = new THREE.Mesh(btnActuatorGeo, btnActuatorMat);
    bootBtnAct.rotation.x = Math.PI / 2;
    bootBtnAct.position.set(0.55, -1.55, 0.14);
    boardGroup.add(bootBtnAct);

    // --- Status LEDs ---
    // Red Power LED
    const ledGeo = new THREE.BoxGeometry(0.08, 0.05, 0.04);
    const pwrLedMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.85
    });
    const pwrLed = new THREE.Mesh(ledGeo, pwrLedMat);
    pwrLed.position.set(-0.35, -0.4, 0.08);
    boardGroup.add(pwrLed);

    // Cyan GPIO2 Activity LED
    const gpio2LedMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 1.2
    });
    const gpio2Led = new THREE.Mesh(ledGeo, gpio2LedMat);
    gpio2Led.position.set(0.35, -0.4, 0.08);
    boardGroup.add(gpio2Led);

    // Initial board pose: tilted with perspective
    boardGroup.rotation.x = 0.35;
    boardGroup.rotation.y = -0.45;
    boardGroup.rotation.z = 0.08;

    // 4. Smooth Mouse Interaction & Parallax
    let targetRotX = 0.35;
    let targetRotY = -0.45;
    let isHovering = false;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const xNorm = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const yNorm = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotY = -0.45 + xNorm * 0.45;
      targetRotX = 0.35 - yNorm * 0.35;
    };

    const handlePointerEnter = () => { isHovering = true; };
    const handlePointerLeave = () => {
      isHovering = false;
      targetRotX = 0.35;
      targetRotY = -0.45;
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerenter", handlePointerEnter);
    container.addEventListener("pointerleave", handlePointerLeave);

    // 5. Scroll-linked Subtle Hardware Rotation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 1200) {
        boardGroup.position.y = -scrollY * 0.0006;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 6. Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 7. Animation Loop with Controlled 60FPS Lerp
    let frameId;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Soft breathing idle motion when not interacting
      if (!isHovering) {
        const subtleOrbit = Math.sin(elapsed * 0.8) * 0.05;
        boardGroup.rotation.y += (targetRotY + subtleOrbit - boardGroup.rotation.y) * 0.04;
        boardGroup.rotation.x += (targetRotX + Math.cos(elapsed * 0.6) * 0.03 - boardGroup.rotation.x) * 0.04;
      } else {
        boardGroup.rotation.y += (targetRotY - boardGroup.rotation.y) * 0.08;
        boardGroup.rotation.x += (targetRotX - boardGroup.rotation.x) * 0.08;
      }

      // Gentle pulsing on GPIO2 heartbeat LED
      gpio2LedMat.emissiveIntensity = 0.8 + Math.sin(elapsed * 5.0) * 0.6;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pcbGeo.dispose();
    };
  }, []);

  // Wireframe toggle
  const toggleWireframe = () => {
    const nextState = !isWireframe;
    setIsWireframe(nextState);
    pcbMaterialsRef.current.forEach((mat) => {
      if (mat) mat.wireframe = nextState;
    });
  };

  // Reset view
  const resetCamera = () => {
    if (boardGroupRef.current) {
      boardGroupRef.current.rotation.set(0.35, -0.45, 0.08);
    }
  };

  // Cycle through annotation callouts
  const nextAnnotation = () => {
    const nextIdx = (ANNOTATIONS.findIndex((a) => a.id === activeAnnotation.id) + 1) % ANNOTATIONS.length;
    setActiveAnnotation(ANNOTATIONS[nextIdx]);
  };

  return (
    <div className="hardware-3d-wrapper">
      {/* 3D Canvas Mount */}
      {!webglError ? (
        <div ref={mountRef} className="hardware-canvas-container" />
      ) : (
        /* Accessible Fallback for Non-WebGL or Reduced Motion Environments */
        <div className="hardware-fallback-view">
          <div className="schematic-board-outline">
            <div className="schematic-header">
              <Cpu size={24} className="text-cyan" />
              <div>
                <h4>ESP32-WROOM-32D Schematic Architecture</h4>
                <p>Interactive 2D Technical Pinout Layout (WebGL Fallback)</p>
              </div>
            </div>
            <div className="schematic-chips-grid">
              <div className="chip-box mcu-core">
                <span className="chip-label">Xtensa® Dual-Core LX6</span>
                <span className="chip-sub">240 MHz • 520KB SRAM</span>
              </div>
              <div className="chip-box rf-stage">
                <span className="chip-label">802.11 b/g/n + BLE</span>
                <span className="chip-sub">2.4 GHz RF Stage</span>
              </div>
              <div className="chip-box uart-bridge">
                <span className="chip-label">CP2102 Bridge</span>
                <span className="chip-sub">USB-to-UART UART0</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Tactical Engineering HUD */}
      <div className="hardware-hud-overlay">
        {/* Top Telemetry Tag */}
        <div className="hud-header-strip">
          <div className="hud-indicator">
            <span className="hud-pulse-dot" />
            <span className="hud-indicator-text">SYSTEM HARDWARE BENCH</span>
          </div>
          <span className="hud-sub-spec">ESP32-WROOM-32D • 240MHz</span>
        </div>

        {/* Selected Component Callout */}
        <div className="hud-annotation-card">
          <div className="hud-card-top">
            <span className="hud-tag">{activeAnnotation.badge}</span>
            <button
              type="button"
              onClick={nextAnnotation}
              className="hud-next-btn"
              title="Inspect Next Subsystem"
            >
              <Info size={12} />
              <span>Next Spec</span>
            </button>
          </div>
          <h4 className="hud-card-title">{activeAnnotation.title}</h4>
          <p className="hud-card-desc">{activeAnnotation.desc}</p>
        </div>

        {/* Tactical Controls Row */}
        <div className="hud-controls-row">
          <button
            type="button"
            onClick={resetCamera}
            className="hud-control-btn"
            title="Reset Perspective Angle"
          >
            <RefreshCw size={13} />
            <span>Reset Orientation</span>
          </button>

          <button
            type="button"
            onClick={toggleWireframe}
            className={`hud-control-btn ${isWireframe ? "active" : ""}`}
            title="Toggle PCB Wireframe Topology"
          >
            <Layers size={13} />
            <span>{isWireframe ? "Solid PBR" : "PCB Wireframe"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
