export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 text-center text-gray-300">
      <div className="flex justify-center gap-6 mb-4 text-sm">
        <a
          href="https://github.com/shafinSI"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shafin-imtiaz-81a084267/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-sm">© 2026 Shafin Imtiaz. All rights reserved.</p>
    </footer>
  );
}