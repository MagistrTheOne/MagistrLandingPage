"use client";

import { useState, useEffect } from "react";

export function HeroSection() {
  const [counters, setCounters] = useState({
    patents: 0,
    machines: 0,
    experience: 0,
    quality: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const targets = { patents: 22, machines: 18, experience: 10, quality: 100 };
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          patents: Math.floor(targets.patents * progress),
          machines: Math.floor(targets.machines * progress),
          experience: Math.floor(targets.experience * progress),
          quality: Math.floor(targets.quality * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text text-shadow">
            MagistrTheOne
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 gradient-accent">
            Senior Fullstack Developer + AI
          </div>
          <div className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Отец нейросетей • <span className="counter font-mono">{counters.patents}+</span> патента в области AI • Краснодар 2025
          </div>
        </div>

        {/* Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass glass-hover rounded-2xl p-6">
            <div className="text-3xl font-bold gradient-accent mb-2">NEON</div>
            <div className="text-sm text-gray-300">Quantum Tensor Graph</div>
            <div className="text-xs text-gray-400 mt-2">Квантовая нейросеть</div>
          </div>
          
          <div className="glass glass-hover rounded-2xl p-6">
            <div className="text-3xl font-bold gradient-accent mb-2">Prometheus</div>
            <div className="text-sm text-gray-300">Artificial General Intelligence</div>
            <div className="text-xs text-gray-400 mt-2">Искусственный общий интеллект</div>
          </div>
          
          <div className="glass glass-hover rounded-2xl p-6">
            <div className="text-3xl font-bold gradient-accent mb-2">EON</div>
            <div className="text-sm text-gray-300">Квантово-модульная архитектура</div>
            <div className="text-xs text-gray-400 mt-2">КМА система</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass glass-hover rounded-xl p-4">
            <div className="text-2xl font-bold gradient-accent counter">{counters.patents}+</div>
            <div className="text-sm text-gray-300">Патентов</div>
          </div>
          <div className="glass glass-hover rounded-xl p-4">
            <div className="text-2xl font-bold gradient-accent counter">{counters.machines}+</div>
            <div className="text-sm text-gray-300">Машин</div>
          </div>
          <div className="glass glass-hover rounded-xl p-4">
            <div className="text-2xl font-bold gradient-accent counter">{counters.experience}+</div>
            <div className="text-sm text-gray-300">Лет опыта</div>
          </div>
          <div className="glass glass-hover rounded-xl p-4">
            <div className="text-2xl font-bold gradient-accent counter">{counters.quality}%</div>
            <div className="text-sm text-gray-300">Качество</div>
          </div>
        </div>

        {/* Description */}
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="text-lg text-gray-200 leading-relaxed">
            Создаю, масштабирую и улучшаю системы с нуля. Эксперт в области искусственного интеллекта, 
            квантовых вычислений и fullstack разработки. Разработал революционные нейросетевые архитектуры, 
            получившие международное признание и защищенные патентами.
          </p>
        </div>
      </div>
    </section>
  );
}
