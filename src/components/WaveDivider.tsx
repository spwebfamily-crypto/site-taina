"use client";

export function WaveDivider({
  color = "#FFFCF7",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`wave-divider ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C120,65 240,70 360,55 C480,40 600,20 720,25 C840,30 960,55 1080,60 C1200,65 1320,50 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function WaveDividerAlt({
  color = "#FFFFFF",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div className={`wave-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,50 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
