import React, { useEffect, useRef, useState } from "react";

/**
 * High-performance IntersectionObserver hook for scroll-triggered animations.
 * Accurately matches react-reveal's physics, distance, and cubic-bezier easing.
 */
function useRevealObserver() {
  const domRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return [domRef, isVisible];
}

export function Fade({
  children,
  bottom,
  top,
  left,
  right,
  duration = 1000,
  delay = 0,
  style,
  className = "",
  ...rest
}) {
  const [ref, isVisible] = useRevealObserver();

  let animName = "rRevealFadeInUp";
  if (left) animName = "rRevealFadeInLeft";
  else if (right) animName = "rRevealFadeInRight";
  else if (top) animName = "rRevealFadeInDown";
  else if (bottom) animName = "rRevealFadeInUp";

  const animStyle = isVisible
    ? {
        animation: `${animName} ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms both`,
        willChange: "opacity, transform",
        ...style,
      }
    : {
        opacity: 0,
        ...style,
      };

  return (
    <div ref={ref} className={className} style={animStyle} {...rest}>
      {children}
    </div>
  );
}

export function Flip({
  children,
  duration = 1000,
  delay = 0,
  style,
  className = "",
  ...rest
}) {
  const [ref, isVisible] = useRevealObserver();

  const animStyle = isVisible
    ? {
        animation: `rRevealFlipY ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms both`,
        willChange: "opacity, transform",
        ...style,
      }
    : {
        opacity: 0,
        ...style,
      };

  return (
    <div ref={ref} className={className} style={animStyle} {...rest}>
      {children}
    </div>
  );
}

export function Zoom({
  children,
  duration = 1000,
  delay = 0,
  style,
  className = "",
  ...rest
}) {
  const [ref, isVisible] = useRevealObserver();

  const animStyle = isVisible
    ? {
        animation: `rRevealZoom ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms both`,
        willChange: "opacity, transform",
        ...style,
      }
    : {
        opacity: 0,
        ...style,
      };

  return (
    <div ref={ref} className={className} style={animStyle} {...rest}>
      {children}
    </div>
  );
}

export function Bounce({ children, ...props }) {
  return <Fade {...props}>{children}</Fade>;
}

export function Roll({ children, ...props }) {
  return <Fade {...props}>{children}</Fade>;
}

export function Rotate({ children, ...props }) {
  return <Fade {...props}>{children}</Fade>;
}

export default { Fade, Flip, Bounce, Zoom, Roll, Rotate };
