"use client";
import { api } from "@/lib/api";
import { useState } from "react";

export default function ForgotPage() {
  const [ok, setOk] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    try {
      await api("/api/auth/forgot", { method: "POST", body: JSON.stringify({ email }) });
      setOk(true);
    } catch (err: any) {
      setError(err.message || "Failed to send reset link");
    }
  };
  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
        <input name="email" className="border rounded-md px-3 py-2 bg-transparent" placeholder="Email" type="email" required />
        <button className="rounded-md bg-foreground text-background px-4 py-2 text-sm">Send Reset Link</button>
      </form>
      {ok && <div className="mt-3 text-sm text-emerald-500">Reset link sent.</div>}
      {error && <div className="mt-3 text-sm text-red-500">{error}</div>}
    </div>
  );
}


