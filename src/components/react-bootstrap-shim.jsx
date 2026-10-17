import React from "react";

export function OverlayTrigger({ children, overlay }) {
  let title = "";
  if (overlay && overlay.props) {
    const ch = overlay.props.children;
    if (typeof ch === "string") {
      title = ch;
    } else if (ch && ch.props && ch.props.children) {
      title = typeof ch.props.children === "string" ? ch.props.children : "";
    }
  }

  return (
    <span title={title} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
}

export function Tooltip({ children }) {
  return <span>{children}</span>;
}

export default { OverlayTrigger, Tooltip };
