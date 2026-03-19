export function StarSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

export function HeartSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function DotsDivider() {
  return <div className="dots-divider mx-auto w-full max-w-md" role="separator" />;
}

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Top left circle */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-pink/10" />
      {/* Top right star cluster */}
      <div className="absolute right-12 top-20 h-6 w-6 text-gold/30">
        <StarSVG />
      </div>
      <div className="absolute right-28 top-12 h-4 w-4 text-coral/20">
        <StarSVG />
      </div>
      <div className="absolute right-8 top-40 h-3 w-3 text-green/25">
        <StarSVG />
      </div>
      {/* Bottom decorations */}
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-gold/8" />
      <div className="absolute bottom-32 left-8 h-5 w-5 text-pink/25">
        <HeartSVG />
      </div>
      <div className="absolute bottom-16 left-24 h-3 w-3 text-coral/20">
        <StarSVG />
      </div>
    </div>
  );
}
