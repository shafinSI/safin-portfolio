export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 text-white">
      <div className="text-center max-w-5xl">
        <p className="text-cyan-400 font-semibold mb-4">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-cyan-400">Shafin Imtiaz</span>
        </h1>

        <h2 className="text-xl md:text-3xl text-gray-300 mb-6">
          Full Stack Developer | AI Enthusiast | Cybersecurity Learner
        </h2>

        <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          I build modern web applications, AI-powered solutions, and
          safety-focused technology projects using Next.js, React, TypeScript,
          Python, and Arduino.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/shafinSI"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}