"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const saved = localStorage.getItem("solstrive-theme");
    const initialDark = saved ? saved === "dark" : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("solstrive-theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}


