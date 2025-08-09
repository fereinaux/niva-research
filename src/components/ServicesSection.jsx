import React from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const achievements = [
    {
      number: "70+",
      title: "Pesquisas Realizadas",
      description: "Mais de 70 pesquisas já realizadas nos últimos 10 anos, tanto qualitativas como quantitativas",
      icon: "📊",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-100/50",
      hoverColor: "group-hover:text-emerald-700",
      lineGradient: "from-emerald-500 to-teal-500",
      hoverBg: "from-emerald-500/10 to-teal-500/10",
      shadowColor: "group-hover:shadow-emerald-500/25"
    },
    {
      number: "10",
      title: "Artigos Publicados",
      description: "10 pesquisas publicadas em revistas renomadas, como a Revista Brasileira de Marketing",
      icon: "📚",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-100/50",
      hoverColor: "group-hover:text-teal-700",
      lineGradient: "from-teal-500 to-cyan-500",
      hoverBg: "from-teal-500/10 to-cyan-500/10",
      shadowColor: "group-hover:shadow-teal-500/25"
    },
    {
      number: "50+",
      title: "Citações Acadêmicas",
      description: "Relevância reconhecida das pesquisas realizadas, citadas por mais de 50 estudos diferentes",
      icon: "🎓",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-100/50",
      hoverColor: "group-hover:text-cyan-700",
      lineGradient: "from-cyan-500 to-blue-500",
      hoverBg: "from-cyan-500/10 to-blue-500/10",
      shadowColor: "group-hover:shadow-cyan-500/25"
    },
    {
      number: "🏆",
      title: "Reconhecimento no Mercado",
      description: "Reconhecimentos no mercado, com uma trajetória de mérito salarial e promoção de cargo",
      icon: "⭐",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100/50",
      hoverColor: "group-hover:text-blue-700",
      lineGradient: "from-blue-500 to-indigo-500",
      hoverBg: "from-blue-500/10 to-indigo-500/10",
      shadowColor: "group-hover:shadow-blue-500/25"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
            O que já entregamos
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${achievement.bgGradient} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 ${achievement.borderColor} overflow-hidden border-2`}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Floating Icon */}
              <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
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
          <Link to="/produtos" className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
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
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 