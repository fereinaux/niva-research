import React from 'react';

function ValuesSection() {
  const impacts = [
    {
      client: "Ministério do Turismo",
      title: "Programa de Qualificação Profissional",
      description: "Pesquisa financiada pelo MTur que criou o novo Programa de Qualificação Profissional do Turismo, capacitando mais de 10 trabalhadores na Ilha de Itamaracá/PE.",
      icon: "🏛️",
      result: "10+ trabalhadores capacitados",
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-400/20 to-teal-400/20",
      borderColor: "border-emerald-300/30",
      hoverBorderColor: "hover:border-emerald-200/50",
      hoverBg: "hover:bg-emerald-400/30",
      hoverTextColor: "group-hover:text-emerald-300",
      lineGradient: "from-emerald-400 to-teal-400"
    },
    {
      client: "Intercement",
      title: "Estudo de Personas Nacional",
      description: "Projeto misto (quali + quanti) de abrangência nacional que criou novo modelo de abordagem comercial baseado em personas e capacitou todo o time de vendas.",
      icon: "🌎",
      result: "Novo modelo comercial",
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-400/20 to-cyan-400/20",
      borderColor: "border-teal-300/30",
      hoverBorderColor: "hover:border-teal-200/50",
      hoverBg: "hover:bg-teal-400/30",
      hoverTextColor: "group-hover:text-teal-300",
      lineGradient: "from-teal-400 to-cyan-400"
    },
    {
      client: "Fretebras",
      title: "Reformulação de Planos B2B",
      description: "Pesquisas exploratórias usadas para a reformulação dos planos B2B da startup. Os insights resultaram em 4 novos planos e aumento significativo da receita da empresa.",
      icon: "💼",
      result: "4 novos planos + ↗️ receita",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-400/20 to-blue-400/20",
      borderColor: "border-cyan-300/30",
      hoverBorderColor: "hover:border-cyan-200/50",
      hoverBg: "hover:bg-cyan-400/30",
      hoverTextColor: "group-hover:text-cyan-300",
      lineGradient: "from-cyan-400 to-blue-400"
    },
    {
      client: "Fretebras",
      title: "Versão Paga do App",
      description: "Pesquisas exploratórias e tracking com 100+ usuários entrevistados. Insights orientaram decisões estratégicas dos times de Produto, Comercial, Design e Marketing. Resultado: 100k+ usuários no plano VIP em 1 ano.",
      icon: "📱",
      result: "100k+ usuários VIP",
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-400/20 to-indigo-400/20",
      borderColor: "border-blue-300/30",
      hoverBorderColor: "hover:border-blue-200/50",
      hoverBg: "hover:bg-blue-400/30",
      hoverTextColor: "group-hover:text-blue-300",
      lineGradient: "from-blue-400 to-indigo-400"
    },
    {
      client: "Fretebras",
      title: "Produtos de Crédito Fintech",
      description: "Pesquisas exploratórias sobre aceitação e experiência dos produtos de crédito B2B e B2C da fintech. Contribuíram para o redesenho dos produtos e aumento da receita de crédito.",
      icon: "💳",
      result: "Redesenho + ↗️ receita crédito",
      gradient: "from-indigo-400 to-purple-500",
      bgGradient: "from-indigo-400/20 to-purple-400/20",
      borderColor: "border-indigo-300/30",
      hoverBorderColor: "hover:border-indigo-200/50",
      hoverBg: "hover:bg-indigo-400/30",
      hoverTextColor: "group-hover:text-indigo-300",
      lineGradient: "from-indigo-400 to-purple-400"
    },
    {
      client: "Impacto Geral",
      title: "Transformando Dados em Resultados",
      description: "Mais de 10 anos transformando insights de pesquisa em decisões estratégicas que geram impacto real no mercado. Cada projeto é uma oportunidade de criar valor.",
      icon: "🚀",
      result: "Resultados mensuráveis",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-400/20 to-pink-400/20",
      borderColor: "border-purple-300/30",
      hoverBorderColor: "hover:border-purple-200/50",
      hoverBg: "hover:bg-purple-400/30",
      hoverTextColor: "group-hover:text-purple-300",
      lineGradient: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-50">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g fill="none" fillRule="evenodd">
            <g fill="#ffffff" fillOpacity="0.03">
              <circle cx="30" cy="30" r="2" />
            </g>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Alguns impactos de pesquisas já realizadas
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Impacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${impact.bgGradient} backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border ${impact.borderColor} ${impact.hoverBorderColor} transition-all duration-500 ${impact.hoverBg} hover:scale-105 hover:shadow-2xl`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl md:rounded-2xl`}></div>
              
              {/* Floating Icon */}
              <div className="absolute top-4 right-4 text-2xl md:text-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                {impact.icon}
              </div>

              <div className="relative z-10">
                {/* Client Badge */}
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${impact.gradient} rounded-full text-white text-xs md:text-sm font-semibold mb-4 shadow-lg`}>
                  {impact.client}
                </div>

                {/* Title */}
                <h3 className={`text-lg md:text-xl font-bold text-white mb-3 ${impact.hoverTextColor} transition-colors duration-300 leading-tight`}>
                  {impact.title}
                </h3>

                {/* Description */}
                <p className="text-emerald-200 text-sm md:text-base leading-relaxed mb-4 line-clamp-4">
                  {impact.description}
                </p>

                {/* Result Badge */}
                <div className="flex items-center justify-between">
                  <div className={`inline-flex items-center px-3 py-2 bg-gradient-to-r ${impact.gradient} bg-opacity-20 rounded-lg border border-white/20`}>
                    <span className="text-white text-sm md:text-base font-semibold">
                      {impact.result}
                    </span>
                  </div>
                  
                  {/* Decorative Line */}
                  <div className={`w-8 md:w-12 h-1 bg-gradient-to-r ${impact.lineGradient} rounded-full group-hover:w-12 md:group-hover:w-16 transition-all duration-300`}></div>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${impact.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 md:mt-16 flex justify-center space-x-4 md:space-x-8 opacity-30">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-teal-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-indigo-400 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection; 