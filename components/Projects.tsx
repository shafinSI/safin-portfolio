const projects = [
  {
    title: "Human Safety App",
    description:
      "A safety-focused web application with emergency alert, nearest people notification, safety travel, guardian mode, and emergency contact features.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Nodemailer"],
    github: "https://github.com/shafinSI/human-safety",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "A machine learning project that predicts heart disease risk and compares different ML algorithms.",
    tech: ["Python", "Pandas", "Scikit-learn", "KNN", "Gradient Boosting"],
    github: "https://github.com/shafinSI/heart-disease-project",
  },
  {
    title: "Smart Rescue Robot",
    description:
      "An Arduino-based rescue robot with Bluetooth control, flame sensor, ultrasonic sensor, buzzer, and motor driver control.",
    tech: ["Arduino", "C++", "HC-05", "BTS7960", "Sensors"],
    github: "https://github.com/shafinSI",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-4 text-cyan-400">
          Projects
        </h2>

        <p className="text-gray-400 mb-12">
          Some of my academic, web development, AI, and hardware-based projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-block text-cyan-400 hover:underline font-semibold"
              >
                View GitHub →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}