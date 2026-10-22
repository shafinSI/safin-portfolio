import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-4">
          I am open to internships, AI/ML and full-stack opportunities, and
          collaboration. Send me a message or reach out directly.
        </p>

        <p className="text-gray-300 mb-10">
          Email:{" "}
          <a
            href="mailto:shafinimtiaz21@gmail.com"
            className="text-cyan-400 hover:underline font-semibold"
          >
            shafinimtiaz21@gmail.com
          </a>
        </p>

        <ContactForm />

        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://github.com/shafinSI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shafin-imtiaz-81a084267/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}