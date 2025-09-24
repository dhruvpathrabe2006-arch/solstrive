import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./routes/auth";
import dashboardRouter from "./routes/dashboard";
import reportsRouter from "./routes/reports";
import feedbackRouter from "./routes/feedback";
import paymentsRouter from "./routes/payments";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/reports", reportsRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/payments", paymentsRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on :${port}`);
});


