"use client";

import { useEffect, useMemo, useState } from "react";
import { api, API_BASE } from "@/lib/api";

type Stat = { label: string; value: string | number };

export default function DashboardPage() {
  const [stats, setStats] = useState<Stat[]>([
    { label: "Energy Produced (kWh)", value: 0 },
    { label: "Efficiency", value: "-" },
    { label: "Dust Level", value: "-" },
    { label: "Temperature Impact", value: "-" },
    { label: "Savings (₹)", value: 0 },
    { label: "CO₂ Reduced (kg)", value: 0 },
  ]);

  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const pull = async () => {
      try {
        const data = await api<{
          energyKwh: number;
          efficiencyPercent: number;
          dustPercent: number;
          temperatureImpactPercent: number;
          savingsInr: number;
          co2ReducedKg: number;
        }>("/api/dashboard/stats");
        setStats([
          { label: "Energy Produced (kWh)", value: data.energyKwh },
          { label: "Efficiency", value: `${data.efficiencyPercent}%` },
          { label: "Dust Level", value: `${data.dustPercent}%` },
          { label: "Temperature Impact", value: `${data.temperatureImpactPercent}%` },
          { label: "Savings (₹)", value: data.savingsInr },
          { label: "CO₂ Reduced (kg)", value: data.co2ReducedKg },
        ]);
      } catch (e) {
        // ignore for demo
      }
    };
    pull();
    const id = setInterval(pull, 2000);
    return () => clearInterval(id);
  }, []);

  const controls = useMemo(
    () => [
      { label: "Shutdown System", action: () => api("/api/dashboard/control", { method: "POST", body: JSON.stringify({ action: "shutdown" }) }) },
      { label: "Clean Panels", action: () => api("/api/dashboard/control", { method: "POST", body: JSON.stringify({ action: "clean" }) }) },
      { label: "Protection Mode", action: () => api("/api/dashboard/control", { method: "POST", body: JSON.stringify({ action: "protect" }) }) },
      { label: "Restart System", action: () => api("/api/dashboard/control", { method: "POST", body: JSON.stringify({ action: "restart" }) }) },
      { label: "Smart Mode", action: () => api("/api/dashboard/control", { method: "POST", body: JSON.stringify({ action: "smart" }) }) },
    ],
    []
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <div className="text-sm opacity-70">{s.label}</div>
            <div className="mt-2 text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 lg:col-span-2">
          <div className="font-semibold">Graphs</div>
          <div className="mt-2 h-64 w-full rounded bg-black/5 dark:bg-white/10" />
          <div className="mt-2 text-xs opacity-70">Daily / Monthly / Yearly</div>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <div className="font-semibold">Controls</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {controls.map((c) => (
              <button
                key={c.label}
                onClick={c.action}
                className="rounded-md border px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <div className="font-semibold">Notifications</div>
          <ul className="mt-3 space-y-2 text-sm">
            {notifications.length === 0 && (
              <li className="opacity-70">No notifications yet.</li>
            )}
            {notifications.map((n, i) => (
              <li key={i} className="rounded border px-3 py-2">{n}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 lg:col-span-2">
          <div className="font-semibold">Reports</div>
          <div className="mt-3 flex gap-3">
            <a href={`${API_BASE}/api/reports/monthly.pdf`} className="rounded-md border px-3 py-2 text-sm">Download Monthly PDF</a>
            <a href={`${API_BASE}/api/reports/daily.csv`} className="rounded-md border px-3 py-2 text-sm">Download Daily CSV</a>
            <button className="rounded-md border px-3 py-2 text-sm">Compare Users</button>
          </div>
        </div>
      </div>
    </div>
  );
}


