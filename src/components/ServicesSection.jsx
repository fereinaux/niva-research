import React from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const achievements = [
    {
      number: "70+",
      title: "Pesquisas Realizadas",
      description: "Mais de 70 pesquisas já realizadas nos últimos 10 anos, tanto qualitativas como quantitativas",
      icon: "📊",
      gradient: "from-[#3b82f6] to-[#60a5fa]",
      bgGradient: "from-[#eff6ff] to-[#dbeafe]",
      borderColor: "border-[#3b82f6]/5",
      hoverColor: "group-hover:text-[#1d4ed8]",
      lineGradient: "from-[#3b82f6] to-[#60a5fa]",
      hoverBg: "from-[#3b82f6]/10 to-[#60a5fa]/10",
      shadowColor: "group-hover:shadow-[#3b82f6]/25"
    },
    {
      number: "10",
      title: "Artigos Publicados",
      description: "10 pesquisas publicadas em revistas renomadas, como a Revista Brasileira de Marketing",
      icon: "📚",
      gradient: "from-[#6366f1] to-[#818cf8]",
      bgGradient: "from-[#f5f3ff] to-[#ede9fe]",
      borderColor: "border-[#6366f1]/5",
      hoverColor: "group-hover:text-[#4338ca]",
      lineGradient: "from-[#6366f1] to-[#818cf8]",
      hoverBg: "from-[#6366f1]/10 to-[#818cf8]/10",
      shadowColor: "group-hover:shadow-[#6366f1]/25"
    },
    {
      number: "50+",
      title: "Citações Acadêmicas",
      description: "Relevância reconhecida das pesquisas realizadas, citadas por mais de 50 estudos diferentes",
      icon: "🎓",
      gradient: "from-[#0ea5e9] to-[#38bdf8]",
      bgGradient: "from-[#f0f9ff] to-[#e0f2fe]",
      borderColor: "border-[#0ea5e9]/5",
      hoverColor: "group-hover:text-[#0369a1]",
      lineGradient: "from-[#0ea5e9] to-[#38bdf8]",
      hoverBg: "from-[#0ea5e9]/10 to-[#38bdf8]/10",
      shadowColor: "group-hover:shadow-[#0ea5e9]/25"
    },
    {
      number: "🏆",
      title: "Reconhecimento no Mercado",
      description: "Uma trajetória de gratos reconhecimentos, prêmios, mérito salarial e promoção de cargo",
      icon: "⭐",
      gradient: "from-[#8b5cf6] to-[#a78bfa]",
      bgGradient: "from-[#faf5ff] to-[#f3e8ff]",
      borderColor: "border-[#8b5cf6]/5",
      hoverColor: "group-hover:text-[#6d28d9]",
      lineGradient: "from-[#8b5cf6] to-[#a78bfa]",
      hoverBg: "from-[#8b5cf6]/10 to-[#a78bfa]/10",
      shadowColor: "group-hover:shadow-[#8b5cf6]/25"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#fff3e1] via-[#fff3e1]/90 to-[#fff3e1]/80 relative overflow-hidden">
      {/* Enhanced visual effects with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/5 via-transparent to-[#ff2d2b]/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-[#60a5fa]/3 via-transparent to-[#f59e0b]/3"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3b10ff]/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#ff2d2b]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 left-32 w-32 h-32 bg-gradient-to-br from-[#60a5fa]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
      
      {/* Additional subtle shadows for depth */}
      <div className="absolute top-40 right-1/3 w-24 h-24 bg-gradient-to-br from-[#f59e0b]/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-tl from-[#3b10ff]/6 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2.5s" }}></div>
      
      {/* Horizontal gradient overlay for sophistication */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3e1]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title with enhanced effects */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6 relative">
            <span className="relative z-10">O que já entregamos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b10ff]/10 to-[#ff2d2b]/10 blur-2xl -z-10"></div>
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#3b10ff] to-[#ff2d2b] mx-auto rounded-full shadow-lg shadow-[#3b10ff]/30"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${achievement.bgGradient} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 ${achievement.borderColor} overflow-hidden border-2 backdrop-blur-sm`}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Floating Icon */}
              <div className="absolute top-4 right-4 text-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                {achievement.icon}
              </div>

              <div className="relative z-10">
                {/* Large Number/Icon */}
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {achievement.number}
                </div>

                {/* Title */}
                <h3 className={`text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4 ${achievement.hoverColor} transition-colors duration-300 leading-tight`}>
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Decorative Line */}
                <div className={`w-12 md:w-16 h-1 bg-gradient-to-r ${achievement.lineGradient} rounded-full group-hover:w-16 md:group-hover:w-20 transition-all duration-300`}></div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl`}></div>
              
              {/* Subtle Border Glow */}
              <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/produtos" className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-[#3b10ff] to-[#4f46e5] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3b10ff]/40">
            <span className="relative z-10 flex items-center">
              Conheça nossos produtos
              <svg
                className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 