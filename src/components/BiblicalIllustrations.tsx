"use client";

import { motion } from "framer-motion";

/* ============================================================
   SVG Biblical Illustrations — cute cartoon style, bigger
   ============================================================ */

export function SheepSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="35" rx="22" ry="16" fill="#F5F0E8" />
      <circle cx="25" cy="30" r="8" fill="#F5F0E8" />
      <circle cx="35" cy="24" r="7" fill="#F5F0E8" />
      <circle cx="48" cy="24" r="7" fill="#F5F0E8" />
      <circle cx="55" cy="30" r="8" fill="#F5F0E8" />
      <circle cx="30" cy="38" r="6" fill="#F5F0E8" />
      <circle cx="50" cy="38" r="6" fill="#F5F0E8" />
      <ellipse cx="40" cy="18" rx="8" ry="9" fill="#3D3D3D" />
      <ellipse cx="32" cy="14" rx="4" ry="2.5" fill="#3D3D3D" transform="rotate(-20 32 14)" />
      <ellipse cx="48" cy="14" rx="4" ry="2.5" fill="#3D3D3D" transform="rotate(20 48 14)" />
      <circle cx="37" cy="16" r="2.5" fill="white" />
      <circle cx="43" cy="16" r="2.5" fill="white" />
      <circle cx="37.5" cy="16" r="1.2" fill="#333" />
      <circle cx="43.5" cy="16" r="1.2" fill="#333" />
      <ellipse cx="34" cy="20" rx="2.5" ry="1.5" fill="#F4A4B8" opacity="0.5" />
      <ellipse cx="46" cy="20" rx="2.5" ry="1.5" fill="#F4A4B8" opacity="0.5" />
      <ellipse cx="40" cy="21" rx="1.5" ry="1" fill="#555" />
      <rect x="28" y="46" width="4" height="10" rx="2" fill="#3D3D3D" />
      <rect x="35" y="46" width="4" height="10" rx="2" fill="#3D3D3D" />
      <rect x="42" y="46" width="4" height="10" rx="2" fill="#3D3D3D" />
      <rect x="49" y="46" width="4" height="10" rx="2" fill="#3D3D3D" />
    </svg>
  );
}

export function DoveSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="32" rx="16" ry="12" fill="white" />
      <circle cx="54" cy="24" r="8" fill="white" />
      <circle cx="57" cy="23" r="1.5" fill="#333" />
      <path d="M62 25 L68 26 L62 28" fill="#F0A030" />
      <path d="M28 28 Q15 15 10 20 Q18 18 25 25 Z" fill="#E8E4DC" />
      <path d="M30 26 Q20 10 14 16 Q22 14 28 23 Z" fill="#F0ECE4" />
      <path d="M24 32 Q14 28 12 35 Q18 32 24 35 Z" fill="#E8E4DC" />
      <path d="M68 26 Q74 24 78 26" stroke="#7BC47F" strokeWidth="1.5" fill="none" />
      <ellipse cx="76" cy="24" rx="3" ry="2" fill="#7BC47F" />
      <ellipse cx="73" cy="23" rx="2" ry="1.5" fill="#90D494" />
    </svg>
  );
}

export function LionSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 80" fill="none" aria-hidden="true">
      <circle cx="45" cy="35" r="28" fill="#D4883A" />
      <circle cx="25" cy="25" r="10" fill="#C47830" />
      <circle cx="65" cy="25" r="10" fill="#C47830" />
      <circle cx="20" cy="40" r="9" fill="#C47830" />
      <circle cx="70" cy="40" r="9" fill="#C47830" />
      <circle cx="30" cy="55" r="8" fill="#C47830" />
      <circle cx="60" cy="55" r="8" fill="#C47830" />
      <circle cx="45" cy="38" r="20" fill="#F0C050" />
      <circle cx="28" cy="22" r="5" fill="#F0C050" />
      <circle cx="28" cy="22" r="3" fill="#E8A040" />
      <circle cx="62" cy="22" r="5" fill="#F0C050" />
      <circle cx="62" cy="22" r="3" fill="#E8A040" />
      <ellipse cx="38" cy="34" rx="4" ry="4.5" fill="white" />
      <ellipse cx="52" cy="34" rx="4" ry="4.5" fill="white" />
      <circle cx="39" cy="34.5" r="2.2" fill="#5C3D1A" />
      <circle cx="53" cy="34.5" r="2.2" fill="#5C3D1A" />
      <circle cx="39.5" cy="33.5" r="0.8" fill="white" />
      <circle cx="53.5" cy="33.5" r="0.8" fill="white" />
      <ellipse cx="45" cy="42" rx="4" ry="3" fill="#D4883A" />
      <path d="M45 45 L43 48 M45 45 L47 48" stroke="#D4883A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M41 48 Q45 52 49 48" stroke="#C47830" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="34" cy="44" rx="3" ry="2" fill="#F4A4B8" opacity="0.4" />
      <ellipse cx="56" cy="44" rx="3" ry="2" fill="#F4A4B8" opacity="0.4" />
    </svg>
  );
}

export function BibleSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 70" fill="none" aria-hidden="true">
      <rect x="8" y="5" width="44" height="58" rx="3" fill="#8B4513" />
      <rect x="10" y="7" width="40" height="54" rx="2" fill="#A0522D" />
      <rect x="8" y="5" width="6" height="58" rx="2" fill="#6B3410" />
      <rect x="14" y="9" width="34" height="50" rx="1" fill="#FFF8E8" />
      <rect x="28" y="18" width="4" height="24" rx="1" fill="#F9B84E" />
      <rect x="20" y="24" width="20" height="4" rx="1" fill="#F9B84E" />
      <path d="M16 11 L22 11 L16 17 Z" fill="#F9B84E" opacity="0.3" />
      <path d="M46 11 L46 17 L40 11 Z" fill="#F9B84E" opacity="0.3" />
      <path d="M36 5 L36 -2 L39 1 L42 -2 L42 5" fill="#E8734A" />
    </svg>
  );
}

export function FishSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 40" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="20" rx="20" ry="12" fill="#7BC4D0" />
      <path d="M50 20 L65 8 L62 20 L65 32 Z" fill="#6BB4C0" />
      <circle cx="22" cy="17" r="4" fill="white" />
      <circle cx="23" cy="17" r="2" fill="#333" />
      <circle cx="23.5" cy="16" r="0.7" fill="white" />
      <path d="M30 10 Q35 2 40 10" fill="#6BB4C0" />
      <path d="M12 19 Q14 21 12 23" stroke="#5BA4B0" strokeWidth="1.5" fill="none" />
      <ellipse cx="25" cy="22" rx="2.5" ry="1.5" fill="#F4A4B8" opacity="0.4" />
    </svg>
  );
}

export function CrossSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 50" fill="none" aria-hidden="true">
      <rect x="15" y="5" width="10" height="40" rx="2" fill="#F9B84E" />
      <rect x="5" y="15" width="30" height="8" rx="2" fill="#F9B84E" />
      <rect x="16" y="6" width="8" height="38" rx="1.5" fill="#FFCC60" opacity="0.5" />
    </svg>
  );
}

export function OliveBranchSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 40" fill="none" aria-hidden="true">
      <path d="M5 35 Q20 30 40 20 Q60 10 75 5" stroke="#5A9E5F" strokeWidth="2" fill="none" />
      <ellipse cx="20" cy="28" rx="6" ry="3.5" fill="#7BC47F" transform="rotate(-20 20 28)" />
      <ellipse cx="30" cy="24" rx="5" ry="3" fill="#90D494" transform="rotate(-25 30 24)" />
      <ellipse cx="42" cy="18" rx="6" ry="3.5" fill="#7BC47F" transform="rotate(-30 42 18)" />
      <ellipse cx="54" cy="13" rx="5" ry="3" fill="#90D494" transform="rotate(-25 54 13)" />
      <ellipse cx="66" cy="8" rx="5.5" ry="3" fill="#7BC47F" transform="rotate(-20 66 8)" />
    </svg>
  );
}

export function RainbowSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 100" fill="none" aria-hidden="true">
      <path d="M10 95 Q10 20 100 20 Q190 20 190 95" stroke="#E8734A" strokeWidth="8" fill="none" opacity="0.5" />
      <path d="M22 95 Q22 32 100 32 Q178 32 178 95" stroke="#F9B84E" strokeWidth="8" fill="none" opacity="0.5" />
      <path d="M34 95 Q34 44 100 44 Q166 44 166 95" stroke="#7BC47F" strokeWidth="8" fill="none" opacity="0.5" />
      <path d="M46 95 Q46 56 100 56 Q154 56 154 95" stroke="#7BC4D0" strokeWidth="8" fill="none" opacity="0.5" />
      <path d="M58 95 Q58 68 100 68 Q142 68 142 95" stroke="#F4A4B8" strokeWidth="8" fill="none" opacity="0.5" />
    </svg>
  );
}

/* ============================================================
   Floating Element — wrapper with smooth parallax-like motion
   ============================================================ */

interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yRange?: number;
  xRange?: number;
  rotate?: number;
}

export function Floating({
  children,
  className = "",
  duration = 6,
  delay = 0,
  yRange = 15,
  xRange = 0,
  rotate = 0,
}: FloatingProps) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      animate={{
        y: [0, -yRange, 0],
        x: xRange ? [0, xRange, 0] : undefined,
        rotate: rotate ? [0, rotate, 0] : undefined,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}
