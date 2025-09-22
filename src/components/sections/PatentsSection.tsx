export function PatentsSection() {
  const patents = [
    {
      id: "RU2025001",
      title: "Квантовая нейросетевая архитектура NEON",
      category: "Искусственный интеллект",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025002", 
      title: "Система искусственного общего интеллекта Prometheus",
      category: "AGI",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025003",
      title: "Квантово-модульная архитектура EON",
      category: "Квантовые вычисления",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025004",
      title: "Метод оптимизации нейронных сетей",
      category: "Машинное обучение",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025005",
      title: "Алгоритм квантового машинного обучения",
      category: "Квантовый ИИ",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025006",
      title: "Система адаптивного обучения нейросетей",
      category: "Deep Learning",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025007",
      title: "Архитектура распределенных нейросетей",
      category: "Распределенные системы",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025008",
      title: "Метод квантовой оптимизации",
      category: "Квантовые алгоритмы",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025009",
      title: "Система генерации контента на основе ИИ",
      category: "Генеративный ИИ",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025010",
      title: "Алгоритм компьютерного зрения нового поколения",
      category: "Computer Vision",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025011",
      title: "Система обработки естественного языка",
      category: "NLP",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025012",
      title: "Метод предиктивной аналитики",
      category: "Аналитика",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025013",
      title: "Архитектура автономного машинного обучения",
      category: "AutoML",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025014",
      title: "Система квантового симулятора",
      category: "Квантовые симуляторы",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025015",
      title: "Алгоритм когнитивной обработки",
      category: "Когнитивные системы",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025016",
      title: "Метод глубокого рассуждения",
      category: "Reasoning",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025017",
      title: "Система квантовой классификации",
      category: "Квантовые алгоритмы",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025018",
      title: "Архитектура нейросетевого оптимизатора",
      category: "Оптимизация",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025019",
      title: "Метод квантового обучения",
      category: "Квантовое обучение",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025020",
      title: "Система когнитивного движка",
      category: "Когнитивные системы",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025021",
      title: "Алгоритм синтеза нейросетей",
      category: "Архитектура ИИ",
      year: "2025",
      status: "Действующий"
    },
    {
      id: "RU2025022",
      title: "Метод квантовой генерации",
      category: "Квантовая генерация",
      year: "2025",
      status: "Действующий"
    }
  ];

  const achievements = [
    {
      title: "Международное признание",
      description: "Работы опубликованы в ведущих научных журналах",
      icon: "🏆"
    },
    {
      title: "Технологические прорывы",
      description: "Революционные решения в области ИИ",
      icon: "🚀"
    },
    {
      title: "Коммерческий успех",
      description: "Внедрение в крупнейшие корпорации",
      icon: "💼"
    },
    {
      title: "Научное лидерство",
      description: "Ведущий эксперт в области квантового ИИ",
      icon: "🎓"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Патенты и достижения
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            22+ патента в области искусственного интеллекта и квантовых вычислений
          </p>
        </div>

        {/* Patents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {patents.map((patent, index) => (
            <div key={index} className="glass glass-hover rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-400 font-mono">{patent.id}</span>
                <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full border border-green-400/20">
                  {patent.status}
                </span>
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{patent.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">{patent.category}</span>
                <span className="text-xs text-gray-400">{patent.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="font-bold gradient-accent mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Patent Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-accent mb-2">22+</div>
            <div className="text-sm text-gray-300">Патентов</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-accent mb-2">100%</div>
            <div className="text-sm text-gray-300">Действующих</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-accent mb-2">2025</div>
            <div className="text-sm text-gray-300">Год регистрации</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-accent mb-2">ИИ</div>
            <div className="text-sm text-gray-300">Область</div>
          </div>
        </div>
      </div>
    </section>
  );
}
