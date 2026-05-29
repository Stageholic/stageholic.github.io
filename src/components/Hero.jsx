import { profile } from "../data/profile";

const iconMap = {
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  openreview: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  email: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-2xl">
        {/* Avatar */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-5xl md:text-6xl font-bold text-purple-600 dark:text-purple-400 overflow-hidden ring-4 ring-purple-100 dark:ring-purple-900/50">
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          ) : (
            profile.name[0]
          )}
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-wide text-gray-900 dark:text-white mb-2"
          style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif' }}>
          {profile.nameZh}
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-gray-400 dark:text-gray-500 mb-6 tracking-tight">
          {profile.nameEn}
        </p>

        {/* Company / Affiliation */}
        {profile.companyZh && (
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-1"
            style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif' }}>
            {profile.companyZh}
          </p>
        )}
        {profile.companyEn && (
          <p className="text-base md:text-lg text-gray-400 dark:text-gray-500 mb-6">
            {profile.companyEn}
          </p>
        )}

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-12">
          {profile.socialLinks.map((link) => {
            const isMailto = link.url.startsWith("mailto:");
            return (
              <a
                key={link.name}
                href={link.url}
                {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
                className="p-3 rounded-full text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            );
          })}
        </div>

        {/* Scroll hint */}
        <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          Learn more
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
