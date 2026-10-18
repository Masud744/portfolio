import React from "react";
import "./BrowserFrame.css";

export default function BrowserFrame({ url, children }) {
  let displayUrl = url || "https://github.com/Masud744";
  try {
    const parsed = new URL(displayUrl);
    displayUrl = parsed.hostname + (parsed.pathname !== "/" ? parsed.pathname : "");
  } catch (e) {
    displayUrl = displayUrl.replace(/^https?:\/\//, "");
  }

  return (
    <div className="browser-frame-container">
      <div className="browser-frame-header">
        <div className="browser-frame-dots">
          <span className="browser-dot dot-red" />
          <span className="browser-dot dot-yellow" />
          <span className="browser-dot dot-green" />
        </div>
        <div className="browser-frame-address-bar">
          <span className="browser-url-text">{displayUrl}</span>
        </div>
      </div>
      <div className="browser-frame-body">{children}</div>
    </div>
  );
}
