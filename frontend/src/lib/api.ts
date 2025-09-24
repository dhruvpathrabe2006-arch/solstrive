const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}` as string, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options && options.headers ? options.headers : {}),
    },
    cache: "no-store",
  });
  if (!res.ok) {
    // Try to parse JSON error bodies to extract a useful message
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      try {
        const data = (await res.json()) as any;
        const msg = data?.error || data?.message || JSON.stringify(data);
        throw new Error(msg);
      } catch {
        // fall back to text below
      }
    }
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) return (await res.json()) as T;
  // @ts-expect-error allow non-json in a pinch
  return (await res.text()) as T;
}

export { API_BASE };
