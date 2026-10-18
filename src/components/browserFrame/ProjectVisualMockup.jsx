import React from "react";
import "./ProjectVisualMockup.css";
import { FiWifi, FiActivity, FiSun, FiNavigation, FiEye, FiCheck, FiCpu, FiTerminal, FiDatabase, FiCalendar, FiDollarSign } from "react-icons/fi";

export default function ProjectVisualMockup({ project }) {
  const id = project.id;

  if (id === "smartprov") {
    return (
      <div className="mockup-screen screen-smartprov">
        <div className="smartprov-modal">
          <div className="smartprov-header">
            <FiWifi style={{ color: "#00979D" }} />
            <span>SmartProv Setup v2.1.3</span>
          </div>
          <div className="smartprov-field">
            <span className="field-label">SSID:</span>
            <span className="field-value">Campus_IoT_WPA2</span>
          </div>
          <div className="smartprov-field">
            <span className="field-label">Pass:</span>
            <span className="field-value">••••••••••••</span>
          </div>
          <div className="smartprov-btn">
            <FiCheck /> Provision to NVS Flash
          </div>
        </div>
      </div>
    );
  }

  if (id === "respiguard") {
    return (
      <div className="mockup-screen screen-respiguard">
        <div className="respiguard-nav">
          <span className="respiguard-brand">RespiGuard.ai</span>
          <span className="respiguard-badge">LIVE INFERENCE</span>
        </div>
        <div className="respiguard-content">
          <div className="respiguard-metric">
            <div className="metric-val text-green">PEFR: 420 L/min</div>
            <div className="metric-sub">Low Risk • Green Zone</div>
          </div>
          <div className="respiguard-bars">
            <div className="bar-row"><span>PM2.5</span><div className="bar"><div className="fill fill-green" style={{ width: "35%" }} /></div></div>
            <div className="bar-row"><span>MQ-135</span><div className="bar"><div className="fill fill-yellow" style={{ width: "55%" }} /></div></div>
            <div className="bar-row"><span>TreeSHAP</span><div className="bar"><div className="fill fill-blue" style={{ width: "80%" }} /></div></div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "solar-aware-hems") {
    return (
      <div className="mockup-screen screen-hems">
        <div className="hems-header">
          <FiSun style={{ color: "#f59e0b" }} />
          <span>Solar-Aware HEMS</span>
          <span className="hems-tag">Safe Surplus: +2.4 kW</span>
        </div>
        <div className="hems-grid">
          <div className="hems-card">
            <div className="hems-val text-amber">3.8 kW</div>
            <div className="hems-lbl">Solar PV Forecast</div>
          </div>
          <div className="hems-card">
            <div className="hems-val text-blue">1.4 kW</div>
            <div className="hems-lbl">Household Load</div>
          </div>
        </div>
        <div className="hems-relay-bar">
          <span className="relay-active">Relay 1: ON (Water Heater)</span>
          <span className="relay-idle">Relay 2: Standby</span>
        </div>
      </div>
    );
  }

  if (id === "smart-pond-xai") {
    return (
      <div className="mockup-screen screen-pond">
        <div className="pond-header">
          <FiNavigation style={{ color: "#0ea5e9" }} />
          <span>Smart Pond XAI Catamaran</span>
          <span className="pond-badge">LoRa Telemetry</span>
        </div>
        <div className="pond-stats">
          <div className="pond-stat-box">
            <span className="pond-stat-num">27.4°C</span>
            <span className="pond-stat-name">DS18B20 Temp</span>
          </div>
          <div className="pond-stat-box">
            <span className="pond-stat-num">7.3 pH</span>
            <span className="pond-stat-name">Water pH</span>
          </div>
          <div className="pond-stat-box">
            <span className="pond-stat-num">85.3%</span>
            <span className="pond-stat-name">Fish Suitability</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "proctorai") {
    return (
      <div className="mockup-screen screen-proctor">
        <div className="proctor-video-overlay">
          <div className="proctor-mesh-box">
            <div className="face-oval">
              <span className="mesh-point p1" />
              <span className="mesh-point p2" />
              <span className="mesh-point p3" />
            </div>
            <span className="proctor-alert">Eye Aspect Ratio: Normal</span>
          </div>
          <div className="proctor-stats-sidebar">
            <div className="stat-pill">FPS: 48</div>
            <div className="stat-pill text-green">Attention: 94%</div>
            <div className="stat-pill text-blue">YOLOv8 Active</div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "oncoscan-ai") {
    return (
      <div className="mockup-screen screen-oncoscan">
        <div className="onco-header">
          <span>OncoScan AI Brain MRI</span>
          <span className="onco-badge">ONNX 4x Speedup</span>
        </div>
        <div className="onco-body">
          <div className="mri-circle">
            <div className="gradcam-heatmap" />
          </div>
          <div className="onco-diagnosis">
            <div className="diag-title">Pathology Result</div>
            <div className="diag-class">Glioma Confirmed</div>
            <div className="diag-conf">Confidence: 94.6%</div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "cashly") {
    return (
      <div className="mockup-screen screen-cashly">
        <div className="cashly-header">
          <FiDollarSign style={{ color: "#10b981" }} />
          <span>Cashly Financial Planner</span>
        </div>
        <div className="cashly-content">
          <div className="cashly-balance-card">
            <span className="lbl">Total Balance</span>
            <span className="amt">৳ 34,500</span>
          </div>
          <div className="cashly-breakdown">
            <div className="cashly-item"><span>Tuition:</span> <b>+৳ 18,000</b></div>
            <div className="cashly-item"><span>Hardware:</span> <b>-৳ 4,200</b></div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "department-routine") {
    return (
      <div className="mockup-screen screen-routine">
        <div className="routine-header">
          <FiCalendar style={{ color: "#3b82f6" }} />
          <span>IRE Routine & Vacant Room Engine</span>
        </div>
        <div className="routine-grid">
          <div className="routine-cell cell-active">Lab 402 • Embedded</div>
          <div className="routine-cell cell-vacant">Room 301 • VACANT</div>
          <div className="routine-cell cell-active">IoT Lab • Sensors</div>
        </div>
      </div>
    );
  }

  if (id === "robofusion-soccer") {
    return (
      <div className="mockup-screen screen-robofusion">
        <div className="rf-banner">WALTON RoboFusion 1.0</div>
        <div className="rf-scoreboard">
          <div className="rf-team">UFTB Team A</div>
          <div className="rf-score">3 : 2</div>
          <div className="rf-team">BUET Invaders</div>
        </div>
        <div className="rf-status">Robo Soccer • Knockout Final</div>
      </div>
    );
  }

  if (id === "esp32-ota") {
    return (
      <div className="mockup-screen screen-terminal">
        <div className="terminal-bar">
          <FiTerminal />
          <span>ESP32 Dual-Partition Rollback</span>
        </div>
        <div className="terminal-lines">
          <p className="line-green">&gt; Fetching https://github.com/.../release</p>
          <p className="line-yellow">&gt; Verified SHA-256 Checksum: [OK]</p>
          <p className="line-cyan">&gt; Writing to OTA_1 Partition... 100%</p>
          <p className="line-green">&gt; Boot validation successful. Active!</p>
        </div>
      </div>
    );
  }

  // Generic fallback with clean SVG / Canvas
  return (
    <div className="mockup-screen screen-generic">
      <div className="generic-chip-icon">
        <FiCpu />
      </div>
      <div className="generic-title">{project.name}</div>
      <div className="generic-desc-tag">{project.categoryBadge || project.category}</div>
    </div>
  );
}
