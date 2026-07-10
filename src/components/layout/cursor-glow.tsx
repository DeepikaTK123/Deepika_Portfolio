"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[2] mix-blend-screen hidden lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        x: x - 250,
        y: y - 250,
      }}
      animate={{ x: x - 250, y: y - 250 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      aria-hidden="true"
    />
  );
}
