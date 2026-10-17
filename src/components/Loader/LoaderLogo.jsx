import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const strokeColor = "#00E5FF";
    const textColor = "#FFFFFF";

    return (
      <svg
        className="raw_logo"
        width="100%"
        height="100%"
        viewBox="0 0 440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "560px", maxHeight: "420px" }}
      >
        <defs>
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>
            {`
              .myHexagon {
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                animation: hexDash 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.2s;
              }

              .myHexagonInner {
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                animation: hexDash 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.4s;
              }

              .letter-sam {
                font-family: 'Montserrat', 'Google Sans', 'Outfit', sans-serif;
                font-size: 40px;
                font-weight: 900;
                letter-spacing: 6px;
                fill: ${textColor};
                opacity: 0;
                animation: fadeInLetter 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.7s;
              }

              .signature-text {
                font-family: 'Agustina Regular', 'Agustina', cursive;
                font-size: 34px;
                fill: ${textColor};
                opacity: 0;
                animation: fadeInSig 1.0s ease-out forwards 1.0s;
              }

              .signature-sub {
                font-family: 'JetBrains Mono', 'Google Sans', monospace;
                font-size: 11px;
                letter-spacing: 3px;
                text-transform: uppercase;
                fill: ${strokeColor};
                opacity: 0;
                animation: fadeInSub 0.8s ease-out forwards 1.5s;
              }

              @keyframes hexDash {
                to {
                  stroke-dashoffset: 0;
                }
              }

              @keyframes fadeInLetter {
                from {
                  opacity: 0;
                  transform: scale(0.7);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              @keyframes fadeInSig {
                from {
                  opacity: 0;
                  transform: translateY(12px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes fadeInSub {
                to {
                  opacity: 0.95;
                }
              }
            `}
          </style>
        </defs>

        {/* Outer Hexagon with Neon Cyan Glow */}
        <path
          className="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={strokeColor}
          strokeWidth="3.5"
          filter="url(#cyanGlow)"
        />

        {/* Inner Hexagon */}
        <path
          className="myHexagonInner"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* Monogram SAM inside Hexagon */}
        <text
          className="letter-sam"
          x="222"
          y="126"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          SAM
        </text>

        {/* Signature below Hexagon */}
        <text
          className="signature-text"
          x="220"
          y="262"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Shahriar Alom Masud
        </text>

        {/* Subtitle tag */}
        <text
          className="signature-sub"
          x="220"
          y="298"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Embedded Systems &amp; Edge AI
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
