import { articles } from "../data/articles";

export default function Articles() {
  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
          Articles
        </h2>
        <div className="space-y-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group block pb-8 border-b border-gray-200 dark:border-gray-800 last:border-0"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-2">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{article.tags[0]}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {article.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
