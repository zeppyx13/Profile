"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

interface TechStack {
  IdTechStack: number;
  TechnologyName: string;
  TechnologyDescription: string;
}

export interface Project {
  IdProject: number;
  ProjectTitle: string;
  Category: string;
  ProjectDescription: string;
  Year: number;
  Link: string;
  TechStack: TechStack[];
  Images?: string;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await apiFetch<{ success: boolean; data: Project[] }>(
          "/join/allprojects/"
        );
        if (res.success && res.data) {
          setProjects(res.data);
        } else {
          setError("Failed to load projects.");
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Error fetching projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
