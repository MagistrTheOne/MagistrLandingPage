export function ProjectsSection() {
  const mainMachines = [
    { 
      name: "NEON-QTG", 
      type: "Квантовая нейросеть", 
      status: "Development",
      description: "Революционная квантовая нейросетевая архитектура"
    },
    { 
      name: "Prometheus-AGI", 
      type: "Искусственный общий интеллект", 
      status: "Development",
      description: "Система искусственного общего интеллекта"
    },
    { 
      name: "EON-КМА", 
      type: "Квантово-модульная архитектура", 
      status: "Development",
      description: "Инновационная квантово-модульная архитектура"
    },
    { name: "QuantumVision", type: "Компьютерное зрение", status: "Production" },
    { name: "NeuralLinguist", type: "Обработка естественного языка", status: "Production" },
    { name: "DeepPredictor", type: "Предиктивная аналитика", status: "Production" },
    { name: "AutoML-Engine", type: "Автоматическое машинное обучение", status: "Production" },
    { name: "QuantumOptimizer", type: "Квантовая оптимизация", status: "Production" },
    { name: "NeuralSynthesizer", type: "Генерация контента", status: "Production" },
    { name: "CognitiveProcessor", type: "Когнитивная обработка", status: "Production" },
    { name: "AdaptiveLearner", type: "Адаптивное обучение", status: "Production" },
    { name: "QuantumClassifier", type: "Квантовая классификация", status: "Production" },
    { name: "NeuralArchitect", type: "Архитектура нейросетей", status: "Production" },
    { name: "DeepReasoner", type: "Глубокое рассуждение", status: "Production" },
    { name: "QuantumSimulator", type: "Квантовый симулятор", status: "Production" },
    { name: "NeuralOptimizer", type: "Оптимизация нейросетей", status: "Production" },
    { name: "CognitiveEngine", type: "Когнитивный движок", status: "Production" },
    { name: "QuantumLearner", type: "Квантовое обучение", status: "Production" }
  ];

  const additionalProjects = [
    { name: "BlockchainAI", type: "Блокчейн + ИИ", status: "Development" },
    { name: "IoT-Intelligence", type: "Интернет вещей", status: "Production" },
    { name: "AR-Vision", type: "Дополненная реальность", status: "Beta" },
    { name: "VoiceSynthesizer", type: "Синтез речи", status: "Production" },
    { name: "ImageGenerator", type: "Генерация изображений", status: "Production" },
    { name: "CodeAssistant", type: "Помощник программиста", status: "Production" },
    { name: "DataAnalyzer", type: "Анализ данных", status: "Production" },
    { name: "SecurityAI", type: "ИИ безопасность", status: "Production" },
    { name: "MedicalAI", type: "Медицинский ИИ", status: "Research" },
    { name: "FinancialAI", type: "Финансовый ИИ", status: "Production" },
    { name: "GameAI", type: "Игровой ИИ", status: "Production" },
    { name: "EducationAI", type: "Образовательный ИИ", status: "Beta" },
    { name: "ClimateAI", type: "Климатический ИИ", status: "Research" },
    { name: "SpaceAI", type: "Космический ИИ", status: "Research" },
    { name: "RoboticsAI", type: "Робототехника", status: "Development" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "text-green-400 bg-green-400/10 border-green-400/20";
      case "Beta": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "Development": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "Research": return "text-purple-400 bg-purple-400/10 border-purple-400/20";
      default: return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Витрина проектов
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Более 33 машин и проектов в области искусственного интеллекта
          </p>
        </div>

        {/* Main Machines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold gradient-accent mb-8 text-center">
            Основные машины (18+)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainMachines.map((machine, index) => (
              <div key={index} className="glass glass-hover rounded-xl p-4 tooltip" data-tooltip={machine.description}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white">{machine.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(machine.status)}`}>
                    {machine.status}
                  </span>
                </div>
                <p className="text-sm text-gray-300">{machine.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-2xl font-bold gradient-accent mb-8 text-center">
            Дополнительные проекты (15+)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalProjects.map((project, index) => (
              <div key={index} className="glass glass-hover rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white">{project.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-300">{project.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-accent mb-2">33+</div>
            <div className="text-sm text-gray-300">Проектов</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-accent mb-2">18+</div>
            <div className="text-sm text-gray-300">В продакшене</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-accent mb-2">15+</div>
            <div className="text-sm text-gray-300">В разработке</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-accent mb-2">100%</div>
            <div className="text-sm text-gray-300">Успешность</div>
          </div>
        </div>
      </div>
    </section>
  );
}
