import { profile } from "../data/profile";

export default function Publications() {
  return (
    <section id="publications" className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 text-center">
          Publications
        </h2>
        <div className="space-y-6">
          {profile.publications.map((pub, i) => {
            const isLinked = pub.link && pub.link !== "#";
            const sharedClasses =
              "group block p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg transition-all duration-300";
            const content = (
              <>
                <h5
                  className={`text-lg font-semibold text-gray-900 dark:text-white ${
                    isLinked
                      ? "group-hover:text-purple-600 dark:group-hover:text-purple-400"
                      : ""
                  } transition-colors`}
                >
                  {pub.title}
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {pub.authors.split(", ").map((author, j) => (
                    <span key={j}>
                      {j > 0 && ", "}
                      {author === "Jimin Chen" ? (
                        <span className="font-semibold text-purple-600 dark:text-purple-400">
                          {author}
                        </span>
                      ) : (
                        author
                      )}
                    </span>
                  ))}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mt-2">
                  <span>{pub.venue}</span>
                  <span>·</span>
                  <time dateTime={pub.date}>
                    {new Date(pub.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </time>
                </div>
              </>
            );
            const extraProps = isLinked
              ? { href: pub.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            const Tag = isLinked ? "a" : "div";
            return (
              <Tag key={i} className={sharedClasses} {...extraProps}>
                {content}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
