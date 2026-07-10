"use client";

import { motion } from "framer-motion";

export function DeveloperIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0f0f1a" />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glow behind monitor */}
        <ellipse cx="200" cy="220" rx="160" ry="120" fill="url(#glowGrad)" />

        {/* Desk */}
        <rect x="60" y="310" width="280" height="8" rx="4" fill="#1a1a1a" />
        <rect x="80" y="318" width="8" height="40" rx="2" fill="#151515" />
        <rect x="312" y="318" width="8" height="40" rx="2" fill="#151515" />

        {/* Monitor stand */}
        <rect x="185" y="280" width="30" height="30" rx="2" fill="#1a1a1a" />
        <rect x="170" y="305" width="60" height="6" rx="3" fill="#222" />

        {/* Monitor */}
        <rect
          x="100"
          y="120"
          width="200"
          height="160"
          rx="12"
          fill="#0B0B0B"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect
          x="110"
          y="130"
          width="180"
          height="140"
          rx="6"
          fill="url(#screenGrad)"
        />

        {/* Code lines on screen */}
        <rect x="125" y="145" width="60" height="4" rx="2" fill="#3B82F6" opacity="0.8" />
        <rect x="125" y="158" width="100" height="3" rx="1.5" fill="#A1A1AA" opacity="0.4" />
        <rect x="125" y="170" width="80" height="3" rx="1.5" fill="#22C55E" opacity="0.6" />
        <rect x="125" y="182" width="120" height="3" rx="1.5" fill="#A1A1AA" opacity="0.3" />
        <rect x="125" y="194" width="90" height="3" rx="1.5" fill="#A1A1AA" opacity="0.4" />
        <rect x="125" y="206" width="70" height="3" rx="1.5" fill="#3B82F6" opacity="0.5" />
        <rect x="125" y="218" width="110" height="3" rx="1.5" fill="#A1A1AA" opacity="0.3" />
        <rect x="125" y="230" width="50" height="3" rx="1.5" fill="#22C55E" opacity="0.5" />
        <rect x="125" y="242" width="85" height="3" rx="1.5" fill="#A1A1AA" opacity="0.4" />
        <rect x="125" y="254" width="65" height="3" rx="1.5" fill="#A1A1AA" opacity="0.3" />

        {/* Cursor blink */}
        <motion.rect
          x="192"
          y="242"
          width="2"
          height="10"
          fill="#3B82F6"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />

        {/* Keyboard */}
        <rect
          x="130"
          y="330"
          width="140"
          height="30"
          rx="6"
          fill="#0B0B0B"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={140 + i * 17}
            y="338"
            width="12"
            height="8"
            rx="2"
            fill="rgba(255,255,255,0.04)"
          />
        ))}

        {/* Coffee cup */}
        <rect x="300" y="295" width="24" height="30" rx="4" fill="#1a1a1a" stroke="rgba(255,255,255,0.06)" />
        <path d="M324 302 Q332 302 332 312 Q332 318 324 318" stroke="rgba(255,255,255,0.06)" fill="none" />
        <motion.ellipse
          cx="312"
          cy="295"
          rx="8"
          ry="3"
          fill="rgba(255,255,255,0.05)"
          animate={{ y: [0, -5, 0], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Floating elements */}
        <motion.g
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="50" y="80" width="40" height="40" rx="10" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.2)" />
          <text x="62" y="106" fill="#3B82F6" fontSize="14" fontFamily="monospace">
            {"{}"}
          </text>
        </motion.g>

        <motion.g
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <rect x="310" y="60" width="50" height="30" rx="8" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.2)" />
          <text x="318" y="80" fill="#22C55E" fontSize="10" fontFamily="monospace">
            API
          </text>
        </motion.g>

        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle cx="70" cy="200" r="20" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.15)" />
          <text x="58" y="205" fill="#3B82F6" fontSize="11" fontFamily="monospace">
            Py
          </text>
        </motion.g>
      </svg>
    </motion.div>
  );
}
