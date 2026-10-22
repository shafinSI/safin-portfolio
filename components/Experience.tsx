const experience = [
  {
    role: "Machine Learning Engineering Intern",
    org: "FlyRank AI",
    type: "Internship · Remote",
    period: "Jul 2026 - Present",
    points: [
      "Completing FlyRank's AI Fluency and Machine Learning certification tracks.",
      "Wrote a capstone research paper with a consolidated analysis notebook, published as a GitHub Pages site.",
    ],
    credential:
      "https://internship.flyrank.ai/verify?id=FR-D1-T668H-R789R&first_name=Shafin",
  },
  {
    role: "Volunteer Head",
    org: "UIU Robotics Club",
    type: "Leadership",
    period: "Present",
    points: [
      "Coordinate club activities and events for a team of student volunteers.",
    ],
    credential: "",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gray-950 text-white px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">Experience</h2>

        <div className="border-l border-cyan-400/40 pl-8 space-y-10">
          {experience.map((item) => (
            <div key={item.role + item.org} className="relative">
              <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400" />

              <h3 className="text-2xl font-bold">{item.role}</h3>
              <p className="text-cyan-300 font-semibold mt-1">{item.org}</p>
              <p className="text-sm text-gray-400 mt-1 mb-4">
                {item.type} · {item.period}
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-300 leading-7">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {item.credential && (
                <a
                  href={item.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 border border-cyan-400/40 text-cyan-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-black transition"
                >
                  ✓ View Verified Credential ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}