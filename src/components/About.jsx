import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
          About
        </h2>

        {/* Avatar + name */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-3xl font-bold text-purple-600 dark:text-purple-400 shrink-0 overflow-hidden">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
            ) : (
              profile.name[0]
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{profile.name}</h3>
            <p className="text-lg text-purple-600 dark:text-purple-400">{profile.title}</p>
          </div>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-10">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Education & Experience grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {profile.education.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                Education
              </h4>
              <div className="space-y-4">
                {profile.education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-semibold text-gray-900 dark:text-white">{edu.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.degree}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {profile.experience.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                Experience
              </h4>
              <div className="space-y-4">
                {profile.experience.map((exp, i) => (
                  <div key={i}>
                    <p className="font-semibold text-gray-900 dark:text-white">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.role}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">{exp.period}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Skills */}
        <div className="mb-10">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
            Skills
          </h4>
          <div className="flex flex-wrap gap-2">
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

        {/* Independent Articles */}
        {profile.articles.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Articles
            </h4>
            <div className="space-y-6">
              {profile.articles.map((article, i) => (
                <a
                  key={i}
                  href={article.link}
                  className="group block pb-6 border-b border-gray-200 dark:border-gray-800 last:border-0"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-1">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{article.tags.join(", ")}</span>
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {article.title}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{article.summary}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
