import React, { useEffect, useRef, useState } from "react";

/**
 * High-performance IntersectionObserver hook for scroll-triggered animations.
 * Replaces legacy react-reveal with hardware-accelerated CSS transitions.
 */
function useRevealObserver({
  threshold = 0.08,
  rootMargin = "0px 0px -30px 0px",
} = {}) {
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
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin]);

  return [domRef, isVisible];
}

export function Fade({
  children,
  bottom,
  top,
  left,
  right,
  duration = 1000,
  distance = "36px",
  delay = 0,
  style,
  className = "",
  cascade,
  collapse,
  ...rest
}) {
  const [ref, isVisible] = useRevealObserver();

  let initialTransform = `translate3d(0, ${distance}, 0)`;
  if (bottom) initialTransform = `translate3d(0, ${distance}, 0)`;
  else if (top) initialTransform = `translate3d(0, -${distance}, 0)`;
  else if (left) initialTransform = `translate3d(-${distance}, 0, 0)`;
  else if (right) initialTransform = `translate3d(${distance}, 0, 0)`;

  const animStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0)" : initialTransform,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
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
  left,
  right,
  top,
  bottom,
  duration = 1000,
  delay = 0,
  style,
  className = "",
  ...rest
}) {
  const [ref, isVisible] = useRevealObserver();

  let initialTransform = "perspective(800px) rotateY(-90deg)";
  if (left) initialTransform = "perspective(800px) rotateY(-90deg)";
  else if (right) initialTransform = "perspective(800px) rotateY(90deg)";
  else if (top) initialTransform = "perspective(800px) rotateX(-90deg)";
  else if (bottom) initialTransform = "perspective(800px) rotateX(90deg)";

  const animStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "perspective(800px) rotateY(0deg) rotateX(0deg)"
      : initialTransform,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
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

  const animStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.85)",
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
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
