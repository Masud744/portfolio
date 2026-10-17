import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function TopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!show) return null;

  return (
    <button
      className="top-button"
      onClick={scrollToTop}
      title="Scroll to Top"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}
