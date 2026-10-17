import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(onFinish, 500);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${hidden ? 'hidden' : ''}`}>
      <div className="splash-logo">{'<SM />'}</div>
    </div>
  );
}
