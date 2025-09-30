"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

export interface Journey {
  id: number;
  year: string;
  title: string;
  description: string;
  place: string;
}

export function useJourneys() {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJourney = async () => {
      try {
        const res = await apiFetch<{ success: boolean; data: Journey[] }>(
          "/Journey"
        );
        if (res.success && res.data) {
          setJourneys(res.data);
        } else {
          setError("Failed to load journeys.");
        }
      } catch (err) {
        console.error("Failed to fetch journeys:", err);
        setError("Error fetching journeys.");
      } finally {
        setLoading(false);
      }
    };

    fetchJourney();
  }, []);

  return { journeys, loading, error };
}
