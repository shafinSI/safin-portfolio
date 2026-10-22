export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-8 mb-6">
          I am a final-year Computer Science and Engineering student at United
          International University, currently interning as a Machine Learning
          Engineer at FlyRank AI. I build full-stack apps with Next.js and
          Node.js, and machine learning models with Python and scikit-learn.
        </p>

        <p className="text-lg text-gray-300 leading-8 mb-10">
          I also lead the UIU Robotics Club as Volunteer Head. I am looking for
          opportunities in AI/ML, full-stack development, and tech-driven
          roles, with a special interest in smart mobility and EV
          infrastructure.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-cyan-400/30 p-6">
            <p className="text-cyan-400 font-semibold mb-2">Education</p>
            <p className="text-gray-300">
              Final-year CSE student, United International University
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/30 p-6">
            <p className="text-cyan-400 font-semibold mb-2">Internship</p>
            <p className="text-gray-300">
              Machine Learning Engineering Intern, FlyRank AI
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/30 p-6">
            <p className="text-cyan-400 font-semibold mb-2">Leadership</p>
            <p className="text-gray-300">
              Volunteer Head, UIU Robotics Club
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}