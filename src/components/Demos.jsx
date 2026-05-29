export default function Demos() {
  const demos = [
    {
      title: "Chat Demo",
      description: "Interactive chat with a fine-tuned model.",
      placeholder: true,
    },
    {
      title: "Embedding Visualizer",
      description: "Explore how text embeddings cluster semantically.",
      placeholder: true,
    },
    {
      title: "Prompt Playground",
      description: "Compare model outputs across different prompt strategies.",
      placeholder: true,
    },
  ];

  return (
    <section id="demos" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
          Demos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <div
              key={demo.title}
              className="p-6 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-purple-300 dark:hover:border-purple-700 transition-colors text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {demo.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {demo.description}
              </p>
              <span className="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
