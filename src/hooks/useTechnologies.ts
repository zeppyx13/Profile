"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

export interface Technology {
  IdTechStack: number;
  Tech: string;
  Description: string;
  Images: string;
}

export function useTechnologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await apiFetch<{ success: boolean; data: Technology[] }>(
          "/Technology"
        );
        if (res.success && res.data) {
          setTechnologies(res.data);
        } else {
          setError("Failed to load technologies.");
        }
      } catch (err) {
        console.error("Failed to fetch technologies:", err);
        setError("Error fetching technologies.");
      } finally {
        setLoading(false);
      }
    };

    fetchTech();
  }, []);

  return { technologies, loading, error };
}
