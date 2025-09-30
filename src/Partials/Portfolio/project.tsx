"use client";
import ProjectCard from "@/components/card/projectcard";
import { useProjects } from "@/hooks/useProjects";

export default function ProjectsSection() {
    const { projects, loading, error } = useProjects();

    return (
        <section id="projects" className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
                    My Projects
                </h2>

                {loading ? (
                    <p className="text-center text-gray-400">Loading projects...</p>
                ) : error ? (
                    <p className="text-center text-red-400">{error}</p>
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
