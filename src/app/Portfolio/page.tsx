"use client"
import { loadEnvConfig, processEnv } from "@next/env";
import React, {useState, useEffect} from "react";
import Navbar from "@/components/Navbar";
const Portfolio = () => {
  const baseURL = process.env.BASE_URL;
  const KEY = process.env.API_KEY;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(`${baseURL}/api/projects`, {
        headers: {
          Authorization: `Bearer ${KEY}`,
        },
      });
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>My Portfolio</h1>
    </div>
  );
};

export default Portfolio;
