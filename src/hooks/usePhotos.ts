"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

export interface Photo {
  Images: any;
  IdPhoto: number;
  Title: string;
  url: string;
}

export function usePhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await apiFetch<{ success: boolean; data: Photo[] }>("/photos");
        if (res.success && res.data) {
          setPhotos(res.data);
        } else {
          setError("Failed to load photos.");
        }
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError("Error fetching photos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
}
