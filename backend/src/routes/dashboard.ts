import { Router } from "express";

const router = Router();

router.get("/stats", (_req, res) => {
  res.json({
    energyKwh: Math.round(Math.random() * 1000),
    efficiencyPercent: 80 + Math.round(Math.random() * 20),
    dustPercent: Math.round(Math.random() * 100),
    temperatureImpactPercent: -5 + Math.round(Math.random() * 10),
    savingsInr: Math.round(Math.random() * 5000),
    co2ReducedKg: Math.round(Math.random() * 500),
  });
});

router.post("/control", (req, res) => {
  const { action } = req.body || {};
  res.json({ ok: true, action });
});

export default router;
