"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ children, delay = 0, dir, className = "" }: { children: React.ReactNode; delay?: number; dir?: "left" | "right"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ "--d": `${delay}ms` } as React.CSSProperties} className={`reveal ${dir ? `reveal-${dir}` : ""} ${className}`}>{children}</div>;
}
