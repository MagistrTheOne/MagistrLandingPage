"use client";

import { useState, useEffect } from "react";

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl gradient-accent">
              MagistrTheOne
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Навыки
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection("patents")}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Патенты
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Публикации
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Контакты
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-30 glass border-b border-white/10 md:hidden">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Навыки
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Проекты
            </button>
            <button
              onClick={() => scrollToSection("patents")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Патенты
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Публикации
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Контакты
            </button>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top glass glass-hover rounded-full p-3 ${isVisible ? "visible" : ""}`}
        aria-label="Наверх"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
}
