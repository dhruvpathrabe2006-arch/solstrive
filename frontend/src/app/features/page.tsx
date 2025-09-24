const hardware = [
  {
    title: "Single-Axis Solar Tracking",
    desc: "Panels automatically follow the sun for maximum energy capture.",
    icon: "🛰️",
  },
  {
    title: "Clockwork-Driven Rotation",
    desc: "Fail-safe mechanical rotation ensures uninterrupted operation.",
    icon: "⚙️",
  },
  {
    title: "Scheduled Daily Cleaning",
    desc: "Panels are cleaned automatically once per day to maintain efficiency.",
    icon: "🧼",
  },
  {
    title: "Weather & Night Protection",
    desc: "Safeguards panels from rain, extreme temperatures, and night-time.",
    icon: "🌧️",
  },
  {
    title: "Modular Design",
    desc: "Components are independent → easy upgrades or replacements.",
    icon: "🧩",
  },
  {
    title: "Low Maintenance & Reliable",
    desc: "Hardware-first design ensures long-term efficiency and durability.",
    icon: "🔩",
  },
];

const iot = [
  {
    title: "Real-Time Monitoring",
    desc: "Energy produced, efficiency %, CO₂ reduced, and money saved.",
    icon: "📈",
  },
  {
    title: "Manual & Smart Controls",
    desc: "Shutdown, Protection Mode, and Smart Mode accessible remotely.",
    icon: "🎛️",
  },
  {
    title: "Alerts & Notifications",
    desc: "Updates on efficiency, weather protection status, and system health.",
    icon: "🔔",
  },
  {
    title: "Reports & Insights",
    desc: "Downloadable daily/monthly reports, performance comparison with average users.",
    icon: "🗂️",
  },
];

function Section({ title, items }: { title: string; items: { title: string; desc: string; icon: string }[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="group border border-black/10 dark:border-white/10 rounded-xl p-6 transition hover:shadow-lg hover:-translate-y-0.5 bg-white dark:bg-gray-800"
          >
            <div className="text-3xl" aria-hidden>
              {f.icon}
            </div>
            <div className="mt-3 font-semibold text-gray-900 dark:text-white">{f.title}</div>
            <div className="text-sm opacity-80 text-gray-700 dark:text-gray-300">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">SolStrive Features</h1>
      <p className="mt-3 opacity-80">
        Hardware-first reliability with an intelligent IoT dashboard—built to maximize energy and minimize effort.
      </p>

      <Section title="Hardware Features" items={hardware} />
      <Section title="Dashboard & IoT Features" items={iot} />
    </div>
  );
}
