export function AchievementsSection() {
  const achievements = [
    {
      type: "Публикация",
      title: "Quantum Neural Networks: A New Paradigm",
      journal: "Nature Machine Intelligence",
      year: "2025",
      status: "В рецензии",
      icon: "📚"
    },
    {
      type: "Публикация",
      title: "EON Architecture: Quantum Modular Systems",
      journal: "IEEE Transactions on Quantum Engineering",
      year: "2025",
      status: "В рецензии",
      icon: "📚"
    },
    {
      type: "Публикация",
      title: "NEON: Quantum Tensor Graph Implementation",
      journal: "Journal of Quantum Computing",
      year: "2025",
      status: "В рецензии",
      icon: "📚"
    },
    {
      type: "Публикация",
      title: "Prometheus AGI: Architecture and Applications",
      journal: "Artificial Intelligence Review",
      year: "2025",
      status: "В рецензии",
      icon: "📚"
    },
    {
      type: "Публикация",
      title: "22 Patents in AI: A Comprehensive Review",
      journal: "IEEE Computer Society",
      year: "2025",
      status: "В рецензии",
      icon: "📚"
    },
    {
      type: "Публикация",
      title: "Fullstack Development with Quantum AI",
      journal: "ACM Computing Surveys",
      year: "2025",
      status: "В рецензии",
      icon: "📚"
    }
  ];

  const metrics = [
    {
      label: "Патентов",
      value: "22+",
      description: "В области ИИ"
    },
    {
      label: "Проектов",
      value: "33+",
      description: "Машин и систем"
    },
    {
      label: "Публикаций",
      value: "6+",
      description: "В рецензии"
    },
    {
      label: "Опыт",
      value: "10+",
      description: "Лет разработки"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Научные публикации
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Публикации в ведущих научных журналах по искусственному интеллекту и квантовым вычислениям
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass glass-hover rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                    {achievement.type}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">
                    {achievement.title}
                  </h3>
                  <div className="text-xs text-gray-300 mb-1">
                    {achievement.journal}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-400">
                      {achievement.year}
                    </div>
                    <div className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full border border-yellow-400/20">
                      {achievement.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-accent mb-2 counter">
                {metric.value}
              </div>
              <div className="text-sm text-gray-300 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
