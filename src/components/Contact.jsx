import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
          I'm always open to discussing LLM projects, research collaborations, or interesting
          opportunities.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          {profile.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
            >
              {{ github: "GitHub", twitter: "Twitter", email: "Email" }[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
