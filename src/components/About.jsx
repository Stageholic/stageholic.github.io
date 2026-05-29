import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
          About
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
