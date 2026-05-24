const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "API Routes", "MongoDB", "Nodemailer"],
  },
  {
    title: "Programming",
    items: ["C", "C++", "Python", "Java"],
  },
  {
    title: "AI / ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-bold mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}