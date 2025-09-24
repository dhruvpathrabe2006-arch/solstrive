"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/buy", label: "Buy" },
  { href: "/how-it-works", label: "How It Works" },
  // Removed Testimonials and Roadmap per request
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    try {
      const token = typeof window !== "undefined" && localStorage.getItem("solstrive-token");
      setIsAuthed(Boolean(token));
    } catch {
      setIsAuthed(false);
    }
  }, [pathname]);

  const onLogout = () => {
    localStorage.removeItem("solstrive-token");
    setIsAuthed(false);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 dark:border-gray-600 backdrop-blur bg-white/80 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg text-gray-900 dark:text-white">
          SolStrive
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "font-medium underline underline-offset-4 text-gray-900 dark:text-white"
                    : "hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          {!isAuthed ? (
            <>
              <Link href="/login" className="text-sm hidden sm:inline-block hover:underline text-gray-700 dark:text-gray-300">
                Login
              </Link>
              <Link
                href="/signup"
                className="text-sm rounded-md px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="text-sm hidden sm:inline-block hover:underline text-gray-700 dark:text-gray-300">
                Dashboard
              </Link>
              <button
                onClick={onLogout}
                className="text-sm rounded-md px-3 py-1.5 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
              >
                Logout
              </button>
            </>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
