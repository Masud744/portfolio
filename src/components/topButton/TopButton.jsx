import React, { useState, useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function GoUpEvent() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled =
            (document.body.scrollTop || document.documentElement.scrollTop) > 30;
          setVisible(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? 1 : 0,
        transition:
          "opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease, background-color 0.2s ease",
        color: isHovered ? theme.text : theme.body,
        backgroundColor: isHovered ? theme.body : theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i
        className="fas fa-arrow-up"
        id="arrow"
        aria-hidden="true"
        style={{
          color: isHovered ? theme.text : theme.body,
        }}
      />
    </div>
  );
}
