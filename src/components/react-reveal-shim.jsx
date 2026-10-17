import React from 'react';

export function Fade({ children, bottom, top, left, right, duration = 800, distance = '24px', delay = 0, style, className }) {
  let transform = 'translateY(16px)';
  if (bottom) transform = `translateY(${distance})`;
  else if (top) transform = `translateY(-${distance})`;
  else if (left) transform = `translateX(-${distance})`;
  else if (right) transform = `translateX(${distance})`;

  return (
    <div
      className={className}
      style={{
        animation: `revealFadeIn ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
        ...style,
      }}
    >
      <style>{`
        @keyframes revealFadeIn {
          from {
            opacity: 0;
            transform: ${transform};
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
      {children}
    </div>
  );
}

export function Flip({ children, ...props }) {
  return <Fade {...props}>{children}</Fade>;
}

export function Bounce({ children, ...props }) {
  return <Fade {...props}>{children}</Fade>;
}

export function Zoom({ children, ...props }) {
  return <Fade {...props}>{children}</Fade>;
}

export function Roll({ children, ...props }) {
  return <Fade {...props}>{children}</Fade>;
}

export function Rotate({ children, ...props }) {
  return <Fade {...props}>{children}</Fade>;
}

export default { Fade, Flip, Bounce, Zoom, Roll, Rotate };
