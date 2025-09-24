import { notFound } from "next/navigation";

const roadmap = [
  { quarter: "Q4 2025", items: ["AI weather prediction", "Improved IoT automations"] },
  { quarter: "Q1 2026", items: ["Robotic cleaning arms", "Fleet analytics 2.0"] },
];

export default function RoadmapPage() {
  // Page removed per request
  notFound();
}
