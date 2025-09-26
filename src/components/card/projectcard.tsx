"use client";
import { useState } from "react";
import { FaCode, FaList } from "react-icons/fa";

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

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [viewMode, setViewMode] = useState<"parsed" | "raw">("parsed");

    return (
        <div className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-red-600/30 transition">
            <div className="flex justify-end p-2">
                <button
                    onClick={() => setViewMode("parsed")}
                    className={`px-3 py-1 text-sm rounded-l-lg flex items-center gap-1 ${viewMode === "parsed"
                            ? "bg-red-600 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                >
                    <FaList /> Parsed
                </button>
                <button
                    onClick={() => setViewMode("raw")}
                    className={`px-3 py-1 text-sm rounded-r-lg flex items-center gap-1 ${viewMode === "raw"
                            ? "bg-red-600 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                >
                    <FaCode /> Raw
                </button>
            </div>

            {viewMode === "parsed" ? (
                <div className="p-4">
                    {project.Images && (
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${project.Images}`}
                            alt={project.ProjectTitle}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                    )}

                    <div className="flex gap-2 mb-2 flex-wrap">
                        <span className="px-3 py-1 text-xs bg-yellow-500 text-black font-semibold rounded-full">
                            {project.Category}
                        </span>
                        <span className="px-3 py-1 text-xs bg-blue-500 text-white font-semibold rounded-full">
                            {project.Year}
                        </span>
                    </div>

                    <h2 className="text-lg font-bold mb-2">{project.ProjectTitle}</h2>
                    <p className="text-gray-300 text-sm mb-3">{project.ProjectDescription}</p>

                    <p className="text-xs text-gray-400 mb-3">
                        Tech: {project.TechStack.map((t) => t.TechnologyName).join(", ")}
                    </p>

                    <a
                        href={project.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition"
                    >
                        Visit Project
                    </a>
                </div>
            ) : (
                <pre className="bg-gray-900 text-green-400 text-xs p-4 overflow-x-auto rounded-lg whitespace-pre-wrap">
                    {`{ 
  "title": "${project.ProjectTitle}",
  "year": ${project.Year},
  "category": "${project.Category}",
  "detail": {
    "description": "${project.ProjectDescription}",
    "Techstack": [
      ${project.TechStack.map((t) => `"${t.TechnologyName}"`).join(", ")}
    ],
    "LinkProject": "${project.Link || "N/A"}"
  }
}`}
                </pre>
            )}
        </div>
    );
};

export default ProjectCard;
