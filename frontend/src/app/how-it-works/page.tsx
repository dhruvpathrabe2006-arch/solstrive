const steps = [
  { title: "Install SolStrive", desc: "Set up panels and sensors." },
  { title: "Sensors Monitor", desc: "Track dust, temp, output." },
  { title: "Live Dashboard", desc: "See performance in real-time." },
  { title: "Save More", desc: "Automations boost efficiency." },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">How It Works</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {steps.map((s, i) => (
          <div key={s.title} className="border rounded-xl p-6 border-black/10 dark:border-white/10">
            <div className="text-xs opacity-70">Step {i + 1}</div>
            <div className="font-semibold">{s.title}</div>
            <div className="text-sm opacity-80">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


