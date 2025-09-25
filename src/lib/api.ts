export async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    credentials: "include",
    ...options,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "API request failed");
  return data;
}