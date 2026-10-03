"use client";

import { useState, useEffect } from "react";

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}
