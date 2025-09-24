import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolStrive – Smarter Solar Monitoring",
  description: "Strive for a Sustainable Future with Smarter Solar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set theme class on first paint to prevent flash and ensure toggling works */}
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: inline bootstrap is intentional for first paint
          dangerouslySetInnerHTML={{
            __html: `(() => { try {
  const saved = localStorage.getItem('solstrive-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = saved ? saved === 'dark' : prefersDark;
  const root = document.documentElement;
  if (dark) root.classList.add('dark'); else root.classList.remove('dark');
} catch (_) {} })();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-7rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
