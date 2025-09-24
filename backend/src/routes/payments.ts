import { Router } from "express";

const router = Router();

router.post("/checkout", (req, res) => {
  const { plan } = req.body || {};
  // Demo: return a fake payment URL
  res.json({ url: `https://checkout.stripe.dev/session/demo-${plan || "basic"}` });
});

export default router;
