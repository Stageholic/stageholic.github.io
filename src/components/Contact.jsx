import { profile } from "../data/profile";

export default function Contact() {
  const nonEmailLinks = profile.socialLinks.filter((l) => l.icon !== "email");
  const emailLink = profile.socialLinks.find((l) => l.icon === "email");

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
          I'm always open to discussing AI projects, research collaborations, or interesting
          opportunities.
        </p>

        {/* Buttons: GitHub, OpenReview */}
        <div className="flex justify-center gap-4 mb-6">
          {nonEmailLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
            >
              {{ github: "GitHub", openreview: "OpenReview" }[link.icon]}
            </a>
          ))}
        </div>

        {/* Email */}
        <a
          href={emailLink.url}
          className="text-base text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          {emailLink.url.replace("mailto:", "")}
        </a>
      </div>
    </section>
  );
}
