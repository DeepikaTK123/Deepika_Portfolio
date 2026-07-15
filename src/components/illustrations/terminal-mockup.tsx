"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "$ deepika build --web-app", className: "text-cyan" },
  { text: "✓ Scaffolding FastAPI backend…", className: "text-success" },
  { text: "✓ Designing admin dashboard routes…", className: "text-success" },
  { text: "✓ Auth + role-based access configured", className: "text-success" },
  { text: "→ PostgreSQL schema synced", className: "text-muted" },
  { text: "→ REST APIs ready for review", className: "text-muted" },
  { text: "Build complete. Scope locked.", className: "text-foreground" },
];

export function TerminalMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="card-panel overflow-hidden rounded-2xl border border-white/[0.1] shadow-glow">
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <p className="truncate font-mono text-[11px] text-muted sm:text-xs">
            deepika@portfolio: ~/workspace
          </p>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="hidden text-[10px] font-medium text-success sm:inline">
              Live
            </span>
          </div>
        </div>

        <div className="space-y-2.5 bg-[#070a12] p-5 font-mono text-[12px] leading-relaxed sm:p-6 sm:text-[13px]">
          {lines.map((line, i) => (
            <motion.p
              key={line.text}
              className={line.className}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8 + i * 0.12, duration: 0.4 }}
            >
              {line.text}
            </motion.p>
          ))}
          <motion.span
            className="inline-block h-4 w-2 bg-cyan/80"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            aria-hidden="true"
          />
        </div>
      </div>

      <motion.div
        className="absolute -bottom-4 left-4 glass rounded-2xl px-4 py-3 sm:left-6 sm:px-5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.6, duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan">
          Clear scope
        </p>
        <p className="mt-0.5 text-sm font-medium text-foreground">
          Reliable delivery
        </p>
      </motion.div>
    </div>
  );
}
