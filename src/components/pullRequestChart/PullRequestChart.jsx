import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const open = PullRequestData["open"] || 0;
    const merged = PullRequestData["merged"] || 0;
    const closed = PullRequestData["closed"] || 0;
    const total = Math.max(open + merged + closed, 1);

    const openPct = (open / total) * 100;
    const mergedPct = (merged / total) * 100;
    const closedPct = (closed / total) * 100;

    return (
      <div className="pr-chart">
        <Fade bottom duration={1000} distance="20px">
          <h2 className="pr-chart-header">Pull Request Distribution</h2>
        </Fade>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: `conic-gradient(#28a745 0% ${openPct}%, #6f42c1 ${openPct}% ${openPct + mergedPct}%, #d73a49 ${openPct + mergedPct}% 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "var(--body-bg, #ffffff)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>{open + merged + closed}</span>
              <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Total PRs</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
            <span style={{ color: "#28a745", fontWeight: "600", fontSize: "0.9rem" }}>● Open: {open}</span>
            <span style={{ color: "#6f42c1", fontWeight: "600", fontSize: "0.9rem" }}>● Merged: {merged}</span>
            <span style={{ color: "#d73a49", fontWeight: "600", fontSize: "0.9rem" }}>● Closed: {closed}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PullRequestChart;
