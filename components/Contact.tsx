export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Let's connect for projects, collaboration, internships, or opportunities.
        </p>

        <div className="space-y-4 mt-8">

          <p className="text-gray-300">
            📧 Email: shafinimtiaz21@gmail.com
          </p>

          <a
            href="https://github.com/shafinSI"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-cyan-400 hover:underline"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-cyan-400 hover:underline"
          >
            LinkedIn Profile
          </a>

        </div>

      </div>
    </section>
  );
}