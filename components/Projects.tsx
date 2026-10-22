"use client";

import { useState } from "react";

type Project = {
  title: string;
  category: "Full-Stack" | "AI / ML" | "Hardware";
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Human Safety App",
    category: "Full-Stack",
    description:
      "A safety-focused web app with an emergency alert button that notifies trusted contacts by email, plus emergency contact management. SMS alerts and live location tracking are planned next.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Nodemailer"],
    github: "https://github.com/shafinSI/human-safety",
    live: "https://human-safety.vercel.app",
    // image: "/projects/human-safety.png",
  },
  {
    title: "FlyRank ML Capstone",
    category: "AI / ML",
    description:
      "Capstone research paper from my FlyRank AI Machine Learning internship, with a consolidated notebook and figures. Results are reported as synthetic-fixture audits.",
    tech: ["Python", "Jupyter", "Machine Learning", "Research"],
    github: "https://github.com/shafinSI/my-flyrank-capstone",
    // image: "/projects/flyrank-capstone.png",
  },
  {
    title: "Healthcare ML: Heart Disease & Diabetes",
    category: "AI / ML",
    description:
      "Machine learning models that predict heart disease and diabetes risk, comparing different algorithms such as KNN and Gradient Boosting.",
    tech: ["Python", "Pandas", "Scikit-learn", "KNN", "Gradient Boosting"],
    github: "https://github.com/shafinSI/heart-disease-project",
    // image: "/projects/healthcare-ml.png",
  },
  {
    title: "Credit Scoring Model",
    category: "AI / ML",
    description:
      "A machine learning model that assesses credit risk from applicant financial data.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/shafinSI/CodeAlpha_CreditScoringModel-",
    // image: "/projects/credit-scoring.png",
  },
  {
    title: "Handwritten Character Recognition",
    category: "AI / ML",
    description:
      "A model that recognizes handwritten characters from images.",
    tech: ["Python", "Jupyter", "Deep Learning"],
    github:
      "https://github.com/shafinSI/CodeAlpha_Handwritten_Character_Recognition",
    // image: "/projects/handwritten.png",
  },
  {
    title: "Smart Rescue Robot",
    category: "Hardware",
    description:
      "An Arduino-based rescue robot with Bluetooth control, flame sensor, ultrasonic sensor, buzzer, and motor driver control.",
    tech: ["Arduino", "C++", "HC-05", "BTS7960", "Sensors"],
    github:
      "https://github.com/shafinSI/AI-Fire-Fighting-Human-Detection-Rescue-Robot",
    // image: "/projects/rescue-robot.png",
  },
];

const categories = ["All", "Full-Stack", "AI / ML", "Hardware"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="py-24 bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Projects</h2>
        <p className="text-gray-300 mb-8">
          Some of my full-stack, AI/ML, and hardware projects.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                active === category
                  ? "bg-cyan-500 border-cyan-500 text-white"
                  : "border-white/20 text-gray-300 hover:border-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visible.map((project) => (
            <div
              key={project.title}
              className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl mb-5 border border-white/10"
                />
              )}

              <p className="text-xs text-cyan-400 font-semibold mb-2">
                {project.category}
              </p>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-5 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-cyan-400 hover:underline font-semibold"
                  >
                    Live Demo ↗
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 hover:underline font-semibold"
                >
                  View GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}