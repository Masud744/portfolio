import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div>
          <span>© {new Date().getFullYear()} Shahriar Alom Masud.</span>
          <span style={{ marginLeft: "12px", color: "var(--text-muted)" }}>
            Embedded Systems & Edge AI Engineer • Dhaka (UTC+6)
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            Engineered with React & Strict Semantic CSS
          </span>
          <button 
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop} 
            title="Scroll to top"
            aria-label="Scroll to top"
            style={{
              background: "transparent",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
              padding: "4px 10px",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              transition: "all 0.15s ease"
            }}
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
