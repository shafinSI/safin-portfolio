import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 text-white">
      <div className="text-center max-w-4xl w-full">
        <p className="text-cyan-400 font-semibold mb-6">
          Welcome to my portfolio
        </p>

        <div className="relative w-full mb-10 rounded-3xl overflow-hidden border border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.2)]">
          <Image
            src="/og-image.png"
            alt="Shafin Imtiaz — Full Stack Developer & AI Enthusiast"
            width={1200}
            height={630}
            priority
            className="w-full h-auto"
          />
        </div>

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
