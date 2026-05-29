import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
          About
        </h2>

        {/* Avatar + name */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-3xl font-bold text-purple-600 dark:text-purple-400 shrink-0 overflow-hidden">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.nameZh} className="w-full h-full object-cover" />
            ) : (
              profile.nameZh[0]
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif' }}>
              {profile.nameZh}
            </h3>
            <p className="text-lg text-gray-400 dark:text-gray-500">{profile.nameEn}</p>
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
                    <p className="font-semibold text-gray-900 dark:text-white"
                      style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif' }}>
                      {edu.schoolZh}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.schoolEn}</p>
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
                    <p className="font-semibold text-gray-900 dark:text-white"
                      style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif' }}>
                      {exp.companyZh}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.companyEn}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.role}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">{exp.period}</p>
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
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

      </div>
    </section>
  );
}
