import React, { useState, useRef, useEffect } from "react";
import { terminalCommands } from "../data/portfolioData";
import { Terminal, X, CornerDownLeft } from "lucide-react";

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "=== Shahriar Alom Masud | PlatformIO Serial Monitor v3.2.0 ===",
    "[INIT] Baud rate: 115200 | Target: ESP32-WROOM-32E (Xtensa Dual-Core 240MHz)",
    "[INIT] Flash: 4MB QSPI | Free Heap: 284,160 bytes | Partition: factory_ota",
    "Type 'help' to inspect available routines, or click commands below."
  ]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [pastCmds, setPastCmds] = useState([]);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setPastCmds((prev) => [...prev, cmd]);
    setCmdIndex(-1);

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = terminalCommands[cmd];
    if (output) {
      setHistory((prev) => [
        ...prev,
        `masud@esp32-node:~$ ${cmd}`,
        ...output
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        `masud@esp32-node:~$ ${cmd}`,
        `command not found: '${cmd}'. Type 'help' for firmware routines.`
      ]);
    }
    setInput("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (pastCmds.length > 0) {
        const nextIdx = cmdIndex === -1 ? pastCmds.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInput(pastCmds[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx < pastCmds.length) {
          setCmdIndex(nextIdx);
          setInput(pastCmds[nextIdx]);
        } else {
          setCmdIndex(-1);
          setInput("");
        }
      }
    }
  };

  return (
    <div 
      className="terminal-modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Serial CLI Monitor"
    >
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        {/* Title bar */}
        <div className="terminal-titlebar">
          <div className="titlebar-left">
            <span className="titlebar-dot" style={{ backgroundColor: "#ff5f56" }} />
            <span className="titlebar-dot" style={{ backgroundColor: "#ffbd2e" }} />
            <span className="titlebar-dot" style={{ backgroundColor: "#27c93f" }} />
            <Terminal size={13} style={{ marginLeft: "8px", color: "var(--accent-blue)" }} />
            <span className="titlebar-text">serial0@esp32-core (115200 8N1)</span>
          </div>
          <button 
            type="button"
            className="terminal-close-btn" 
            onClick={onClose} 
            title="Close serial monitor (Esc)"
            aria-label="Close serial monitor"
          >
            <X size={15} />
          </button>
        </div>

        {/* Command shortcut pills */}
        <div className="terminal-pills-row">
          <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", alignSelf: "center", marginRight: "4px" }}>
            Quick:
          </span>
          {["help", "whoami", "skills", "projects", "ota-test", "smartprov", "contact"].map((c) => (
            <button key={c} type="button" className="term-pill" onClick={() => handleCommand(c)}>
              {c}
            </button>
          ))}
        </div>

        {/* Console screen */}
        <div className="terminal-output-area" onClick={() => inputRef.current?.focus()}>
          {history.map((line, idx) => (
            <div
              key={idx}
              style={{
                color: line.startsWith("masud@")
                  ? "var(--accent-blue)"
                  : line.startsWith("[")
                  ? "var(--status-green)"
                  : line.startsWith("=")
                  ? "var(--text-secondary)"
                  : "var(--text-primary)",
                fontFamily: "var(--font-mono)"
              }}
            >
              {line}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Prompt input */}
        <div className="terminal-input-bar">
          <span className="term-prompt">masud@esp32-node:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="term-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="type command (e.g. ota-test, help, whoami)..."
            spellCheck="false"
            autoComplete="off"
            aria-label="Terminal command input"
          />
          <button 
            type="button"
            onClick={() => handleCommand(input)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              padding: "4px"
            }}
            title="Execute (Enter)"
            aria-label="Execute command"
          >
            <CornerDownLeft size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
