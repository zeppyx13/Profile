"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import ProjectCard from "@/components/card/projectcard";

interface TechStack {
    IdTechStack: number;
    TechnologyName: string;
    TechnologyDescription: string;
}

interface Project {
    IdProject: number;
    ProjectTitle: string;
    Category: string;
    ProjectDescription: string;
    Year: number;
    Link: string;
    TechStack: TechStack[];
    Images?: string;
}

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await apiFetch<{ success: boolean; data: Project[] }>("/join/allprojects/");
                if (res.success && res.data) {
                    setProjects(res.data);
                }
            } catch (err) {
                console.error("Failed to fetch projects:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
                    My Projects
                </h2>

                {loading ? (
                    <p className="text-center text-gray-400">Loading projects...</p>
                ) : projects.length === 0 ? (
                    <p className="text-center text-gray-400">No projects found.</p>
                ) : (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.IdProject} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
