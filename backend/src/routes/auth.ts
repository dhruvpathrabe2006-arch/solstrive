import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { z } from "zod";

const router = Router();

// In-memory demo store
const users: Record<string, { id: string; name: string; email: string; passwordHash: string; role: "User" | "Admin"; avatarUrl: string | undefined }>
  = {};

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_change";

const signupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["User", "Admin"]).default("User"),
  avatarUrl: z.string().url().optional(),
});

router.post("/signup", async (req, res) => {
  const parse = signupSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });
  const { name, email, password, role, avatarUrl } = parse.data;
  if (users[email]) return res.status(409).json({ error: "Email already registered" });
  const passwordHash = await bcrypt.hash(password, 10);
  const id = `${Date.now()}`;
  users[email] = { id, name, email, passwordHash, role, avatarUrl };
  const token = jwt.sign({ sub: id, email, role }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id, name, email, role, avatarUrl } });
});

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(6) });
router.post("/login", async (req, res) => {
  const parse = loginSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });
  const { email, password } = parse.data;
  const user = users[email];
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ sub: user.id, email, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, avatarUrl: user.avatarUrl } });
});

const forgotSchema = z.object({ email: z.string().email() });
router.post("/forgot", (req, res) => {
  const parse = forgotSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });
  // Demo: pretend to send email
  res.json({ ok: true });
});

export default router;
