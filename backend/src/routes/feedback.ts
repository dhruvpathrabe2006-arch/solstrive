import { Router } from "express";

const router = Router();

type Feedback = { id: string; rating: number; comment: string; photoUrl?: string };
const store: Feedback[] = [];

router.get("/", (_req, res) => {
  res.json(store);
});

router.post("/", (req, res) => {
  const { rating, comment, photoUrl } = req.body || {};
  if (!rating || rating < 1 || rating > 5) return res.status(400).json({ error: "Rating 1-5 required" });
  const fb: Feedback = { id: `${Date.now()}`, rating, comment: comment || "", photoUrl };
  store.unshift(fb);
  res.status(201).json(fb);
});

export default router;
