import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative h-[70vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://storage.googleapis.com/solstrive-assets/solar-panels-bg.mp4"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Strive for a Sustainable Future with Smarter Solar
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Monitor in real time, optimize with AI, and save more—effortlessly.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                href="/about"
                className="rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:opacity-90"
              >
                Learn More
              </Link>
              <Link
                href="/dashboard"
                className="rounded-md border border-white/70 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
              >
                See Dashboard
              </Link>
              <Link
                href="/buy"
                className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium hover:bg-emerald-600"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {["Energy Saved (kWh)", "CO₂ Reduced (t)", "Active Systems", "Avg. Efficiency", "Cleanings Triggered", "Alerts Resolved"].map(
            (label, idx) => (
              <div key={label} className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                <div className="text-2xl font-semibold text-gray-900 dark:text-white">{[120450, 804, 3275, "92%", 18450, 12980][idx]}</div>
                <div className="text-xs mt-1 text-gray-600 dark:text-gray-400">{label}</div>
              </div>
            )
          )}
        </div>
        <div className="mt-12 aspect-video w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-600">
          <iframe width="1090" height="615" src="https://www.youtube.com/embed/7OpM_zKGE4o?si=HGKzT8nuHHUWV-0X" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>
    </div>
  );
}
