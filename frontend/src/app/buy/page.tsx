import Link from "next/link";

const plans = [
  { name: "Basic", price: "₹9,999", features: ["Live Monitoring", "Dust Alerts"] },
  { name: "Premium", price: "₹24,999", features: ["AI Boost", "Predictive Maintenance", "Reports"] },
  { name: "Enterprise", price: "Contact", features: ["Fleet Dashboard", "SLAs", "Priority Support"] },
];

export default function BuyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Buy / Upgrade</h1>
      <p className="mt-2 opacity-80">Choose a plan that fits your solar goals.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="border border-black/10 dark:border-white/10 rounded-xl p-6">
            <div className="font-semibold">{p.name}</div>
            <div className="text-2xl mt-2">{p.price}</div>
            <ul className="mt-4 text-sm space-y-1">
              {p.features.map((f) => (
                <li key={f}>✅ {f}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="#" className="px-4 py-2 rounded-md bg-foreground text-background text-sm">
                Buy Now
              </Link>
              <Link href="#" className="px-4 py-2 rounded-md border text-sm">
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-xl border border-black/10 dark:border-white/10 p-6">
        <h2 className="font-semibold">Installation Process</h2>
        <ol className="mt-2 text-sm list-decimal list-inside space-y-1 opacity-90">
          <li>Book a site survey</li>
          <li>Delivery and mounting</li>
          <li>Sensor calibration</li>
          <li>Go live on dashboard</li>
        </ol>
      </div>
    </div>
  );
}


