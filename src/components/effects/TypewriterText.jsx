import React, { useState, useEffect, useRef } from 'react';

/**
 * Typewriter text effect — types out text character by character
 * with a blinking terminal cursor
 */
export default function TypewriterText({
  text,
  speed = 40,
  delay = 0,
  className = '',
  onComplete,
  cursor = true,
  tag: Tag = 'span',
}) {
  const [displayed, setDisplayed] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [started, setStarted] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    indexRef.current = 0;
    setDisplayed('');
    setIsComplete(false);

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current <= text.length) {
        setDisplayed(text.slice(0, indexRef.current));
      } else {
        setIsComplete(true);
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started, onComplete]);

  return (
    <Tag className={`typewriter-text ${className}`} style={typewriterStyle}>
      {displayed}
      {cursor && !isComplete && (
        <span className="typewriter-cursor" style={cursorStyle}>▌</span>
      )}
      {cursor && isComplete && (
        <span className="typewriter-cursor blink" style={cursorBlinkStyle}>▌</span>
      )}
    </Tag>
  );
}

const typewriterStyle = {
  fontFamily: 'var(--font-mono)',
};

const cursorStyle = {
  color: 'var(--matrix-bright)',
  marginLeft: '2px',
  fontWeight: 'normal',
};

const cursorBlinkStyle = {
  ...cursorStyle,
  animation: 'blink-cursor 1s step-end infinite',
};
