import { Router } from "express";

const router = Router();

router.get("/daily.csv", (_req, res) => {
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=solstrive-daily.csv");
  res.send("date,energy_kwh,efficiency_percent\n2025-09-17,123,92\n");
});

router.get("/monthly.pdf", (_req, res) => {
  // Placeholder PDF bytes
  const pdf = Buffer.from("255044462d312e34", "hex");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=solstrive-monthly.pdf");
  res.send(pdf);
});

export default router;
