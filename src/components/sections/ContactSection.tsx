export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Связь со мной
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готов к сотрудничеству и новым вызовам в области ИИ и разработки
          </p>
        </div>

        <div className="glass rounded-3xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold gradient-accent mb-4">
                MagistrTheOne
              </h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <span className="font-semibold">Должность:</span> Senior Fullstack Developer + AI
                </div>
                <div>
                  <span className="font-semibold">Специализация:</span> Искусственный интеллект, Квантовые вычисления
                </div>
                <div>
                  <span className="font-semibold">Локация:</span> Краснодар, Россия
                </div>
                <div>
                  <span className="font-semibold">Статус:</span> Доступен для проектов
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold">Telegram:</span> 
                      <a href="https://t.me/MagistrTheOne" target="_blank" rel="noopener noreferrer" 
                         className="ml-2 text-blue-400 hover:text-blue-300 transition-colors">
                        @MagistrTheOne
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold">Email:</span> 
                      <a href="mailto:maxonyushko71@gmail.com" 
                         className="ml-2 text-blue-400 hover:text-blue-300 transition-colors">
                        maxonyushko71@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold gradient-accent mb-4">
                Ключевые достижения
              </h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>• 22+ патента в области ИИ</div>
                <div>• Создатель NEON, Prometheus, EON</div>
                <div>• 33+ успешных проекта</div>
                <div>• Эксперт в квантовых вычислениях</div>
                <div>• Международное признание</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass glass-hover rounded-2xl p-6">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="font-bold gradient-accent mb-2">Коммерческие проекты</h3>
            <p className="text-sm text-gray-300">
              Разработка корпоративных решений с использованием ИИ
            </p>
          </div>
          
          <div className="glass glass-hover rounded-2xl p-6">
            <div className="text-3xl mb-4">🔬</div>
            <h3 className="font-bold gradient-accent mb-2">Исследования</h3>
            <p className="text-sm text-gray-300">
              Научные проекты в области квантового ИИ
            </p>
          </div>
          
          <div className="glass glass-hover rounded-2xl p-6">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="font-bold gradient-accent mb-2">Стартапы</h3>
            <p className="text-sm text-gray-300">
              Помощь в создании ИИ-продуктов с нуля
            </p>
          </div>
        </div>

        <div className="mt-12 glass rounded-2xl p-6">
          <p className="text-gray-300 mb-4">
            Готов обсудить ваш проект и предложить оптимальное решение
          </p>
          <div className="text-sm text-gray-400">
            © 2025 MagistrTheOne • Senior Fullstack Developer + AI • Краснодар
          </div>
        </div>
      </div>
    </section>
  );
}
