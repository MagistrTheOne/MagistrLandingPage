export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js 15.5", level: 95 },
        { name: "React 19", level: 98 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS 4+", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Nuxt.js", level: 88 },
        { name: "Svelte", level: 80 },
        { name: "Astro", level: 75 },
        { name: "Web Components", level: 82 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Python", level: 98 },
        { name: "Go", level: 85 },
        { name: "Rust", level: 80 },
        { name: "Java", level: 88 },
        { name: "C++", level: 90 },
        { name: "PostgreSQL", level: 92 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 88 },
        { name: "GraphQL", level: 90 },
        { name: "REST API", level: 95 }
      ]
    },
    {
      title: "AI & ML",
      skills: [
        { name: "PyTorch", level: 98 },
        { name: "TensorFlow", level: 95 },
        { name: "Keras", level: 90 },
        { name: "Scikit-learn", level: 88 },
        { name: "OpenAI API", level: 92 },
        { name: "Computer Vision", level: 95 },
        { name: "NLP", level: 90 },
        { name: "Deep Learning", level: 98 },
        { name: "Neural Networks", level: 98 },
        { name: "Quantum ML", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Google Cloud", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 88 },
        { name: "Terraform", level: 85 },
        { name: "CI/CD", level: 92 },
        { name: "Microservices", level: 90 },
        { name: "Serverless", level: 85 },
        { name: "Edge Computing", level: 80 }
      ]
    },
    {
      title: "Mobile & Desktop",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 80 },
        { name: "Electron", level: 85 },
        { name: "Tauri", level: 75 },
        { name: "Swift", level: 70 },
        { name: "Kotlin", level: 75 },
        { name: "Cross-platform", level: 90 },
        { name: "PWA", level: 85 },
        { name: "Native Apps", level: 80 }
      ]
    },
    {
      title: "Specialized",
      skills: [
        { name: "Quantum Computing", level: 95 },
        { name: "Blockchain", level: 80 },
        { name: "Web3", level: 75 },
        { name: "IoT", level: 85 },
        { name: "AR/VR", level: 70 },
        { name: "Game Development", level: 75 },
        { name: "Real-time Systems", level: 90 },
        { name: "High Performance Computing", level: 88 }
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Технологический стек
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Полный спектр современных технологий для создания масштабируемых решений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-bold gradient-accent mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400 counter">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">
            Уровни экспертизы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-accent mb-2">Создаю</div>
              <div className="text-gray-300 mb-4">С нуля до продакшена</div>
              <div className="text-sm text-gray-400">
                Архитектура, дизайн, разработка, тестирование, деплой
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-accent mb-2">Масштабирую</div>
              <div className="text-gray-300 mb-4">Оптимизация и рост</div>
              <div className="text-sm text-gray-400">
                Производительность, нагрузка, микросервисы, кэширование
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-accent mb-2">Улучшаю</div>
              <div className="text-gray-300 mb-4">Рефакторинг и модернизация</div>
              <div className="text-sm text-gray-400">
                Код, архитектура, UX/UI, безопасность, мониторинг
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
