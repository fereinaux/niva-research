import React from 'react';

function ValuesSection() {
  const impacts = [
    {
      client: "Ministério do Turismo",
      title: "Programa de Qualificação Profissional",
      description: "Pesquisa financiada pelo MTur que criou o novo Programa de Qualificação Profissional do Turismo, capacitando mais de 10 trabalhadores na Ilha de Itamaracá/PE.",
      icon: "🏛️",
      result: "10+ trabalhadores capacitados",
      gradient: "from-[#3b10ff] to-[#4f46e5]",
      bgGradient: "from-[#fff3e1] to-[#fff3e1]/90",
      borderColor: "border-[#3b10ff]/10",
      hoverBorderColor: "hover:border-[#3b10ff]/25",
      hoverBg: "hover:bg-[#3b10ff]/8",
      hoverTextColor: "group-hover:text-[#3b10ff]",
      lineGradient: "from-[#3b10ff] to-[#4f46e5]"
    },
    {
      client: "Intercement",
      title: "Estudo de Personas Nacional",
      description: "Projeto misto (quali + quanti) de abrangência nacional que criou novo modelo de abordagem comercial baseado em personas e capacitou todo o time de vendas.",
      icon: "🌎",
      result: "Novo modelo comercial",
      gradient: "from-[#ff2d2b] to-[#ef4444]",
      bgGradient: "from-[#fff3e1] to-[#fff3e1]/90",
      borderColor: "border-[#ff2d2b]/10",
      hoverBorderColor: "hover:border-[#ff2d2b]/25",
      hoverBg: "hover:bg-[#ff2d2b]/8",
      hoverTextColor: "group-hover:text-[#ff2d2b]",
      lineGradient: "from-[#ff2d2b] to-[#ef4444]"
    },
    {
      client: "Fretebras",
      title: "Reformulação de Planos B2B",
      description: "Pesquisas exploratórias usadas para a reformulação dos planos B2B da startup. Os insights resultaram em 4 novos planos e aumento significativo da receita da empresa.",
      icon: "💼",
      result: "4 novos planos + ↗️ receita",
      gradient: "from-[#60a5fa] to-[#3b82f6]",
      bgGradient: "from-[#fff3e1] to-[#fff3e1]/90",
      borderColor: "border-[#60a5fa]/10",
      hoverBorderColor: "hover:border-[#60a5fa]/25",
      hoverBg: "hover:bg-[#60a5fa]/8",
      hoverTextColor: "group-hover:text-[#60a5fa]",
      lineGradient: "from-[#60a5fa] to-[#3b82f6]"
    },
    {
      client: "Fretebras",
      title: "Versão Paga do App",
      description: "Pesquisas exploratórias e tracking com 100+ usuários. Insights orientaram decisões estratégicas dos times de Produto, Comercial, Design e Marketing. Resultado: 100k+ users no plano VIP em 1 ano.",
      icon: "📱",
      result: "100k+ usuários VIP",
      gradient: "from-[#f59e0b] to-[#d97706]",
      bgGradient: "from-[#fff3e1] to-[#fff3e1]/90",
      borderColor: "border-[#f59e0b]/10",
      hoverBorderColor: "hover:border-[#f59e0b]/25",
      hoverBg: "hover:bg-[#f59e0b]/8",
      hoverTextColor: "group-hover:text-[#f59e0b]",
      lineGradient: "from-[#f59e0b] to-[#d97706]"
    },
    {
      client: "Fretebras",
      title: "Produtos de Crédito Fintech",
      description: "Pesquisas exploratórias sobre aceitação e experiência dos produtos de crédito B2B e B2C da fintech. Contribuíram para o redesenho dos produtos e aumento da receita de crédito.",
      icon: "💳",
      result: "Redesenho + ↗️ receita crédito",
      gradient: "from-[#3b10ff] to-[#6366f1]",
      bgGradient: "from-[#fff3e1] to-[#fff3e1]/90",
      borderColor: "border-[#3b10ff]/10",
      hoverBorderColor: "hover:border-[#3b10ff]/25",
      hoverBg: "hover:bg-[#3b10ff]/8",
      hoverTextColor: "group-hover:text-[#3b10ff]",
      lineGradient: "from-[#3b10ff] to-[#6366f1]"
    },
    {
      client: "Impacto Geral",
      title: "Transformando Dados em Resultados",
      description: "Mais de 10 anos transformando insights de pesquisa em decisões estratégicas que geram impacto real no mercado. Cada projeto é uma oportunidade de criar valor.",
      icon: "🚀",
      result: "Resultados mensuráveis",
      gradient: "from-[#ff2d2b] to-[#f87171]",
      bgGradient: "from-[#fff3e1] to-[#fff3e1]/90",
      borderColor: "border-[#ff2d2b]/10",
      hoverBorderColor: "hover:border-[#ff2d2b]/25",
      hoverBg: "hover:bg-[#ff2d2b]/8",
      hoverTextColor: "group-hover:text-[#ff2d2b]",
      lineGradient: "from-[#ff2d2b] to-[#f87171]"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#37322c] via-[#2a2a2a] to-[#1f1f1f] relative overflow-hidden">
      {/* Subtle circular shadows for consistency with hero section */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3b10ff]/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#ff2d2b]/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 left-32 w-32 h-32 bg-gradient-to-br from-[#60a5fa]/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/4 right-32 w-36 h-36 bg-gradient-to-bl from-[#3b10ff]/28 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-tr from-[#ff2d2b]/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      
      {/* Additional subtle shadows */}
      <div className="absolute top-40 right-1/3 w-24 h-24 bg-gradient-to-br from-[#60a5fa]/22 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-tl from-[#3b10ff]/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2.5s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff3e1] mb-4 md:mb-6">
            Alguns impactos de pesquisas já realizadas
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#3b10ff] to-[#ff2d2b] mx-auto rounded-full"></div>
        </div>

        {/* Impacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-1`}
            >
              {/* Main Card Container */}
              <div className={`relative bg-gradient-to-br ${impact.bgGradient} backdrop-blur-sm rounded-2xl p-6 md:p-7 border ${impact.borderColor} transition-all duration-500 ${impact.hoverBorderColor} ${impact.hoverBg}`}>
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${impact.gradient} rounded-t-2xl`}></div>
                
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Floating Icon with Glow */}
                <div className="absolute top-4 right-4 text-2xl md:text-3xl opacity-40 group-hover:opacity-60 transition-all duration-500">
                  {impact.icon}
                  <div className={`absolute inset-0 bg-gradient-to-r ${impact.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Client Badge with Enhanced Design */}
                  <div className={`inline-flex items-center px-3 py-2 bg-gradient-to-r ${impact.gradient} rounded-xl text-white text-xs font-bold shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full mr-2"></div>
                    {impact.client}
                  </div>

                  {/* Title with Enhanced Typography */}
                  <h3 className={`text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-xl md:group-hover:text-2xl transition-all duration-500 ${impact.hoverTextColor}`}>
                    {impact.title}
                  </h3>

                  {/* Description with Better Spacing */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {impact.description}
                  </p>

                  {/* Enhanced Result Section */}
                  <div className="flex items-center justify-between pt-3">
                    <div className={`inline-flex items-center px-3 py-2 bg-gradient-to-r ${impact.gradient} bg-opacity-20 rounded-lg border border-white/20 backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300`}>
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${impact.gradient} rounded-full mr-2 animate-pulse`}></div>
                      <span className="text-white text-xs md:text-sm font-semibold">
                        {impact.result}
                      </span>
                    </div>
                    
                    {/* Enhanced Decorative Line */}
                    <div className={`w-12 md:w-16 h-1 bg-gradient-to-r ${impact.lineGradient} rounded-full group-hover:w-16 md:group-hover:w-20 transition-all duration-500 shadow-lg`}></div>
                  </div>
                </div>

                {/* Enhanced Hover Effects */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${impact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${impact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-xl`}></div>
              </div>

              {/* Floating Elements on Hover */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-transparent to-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150" style={{ transitionDelay: "0.1s" }}></div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 md:mt-16 flex justify-center space-x-4 md:space-x-8 opacity-30">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#3b10ff] rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-[#ff2d2b] rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-[#60a5fa] rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-[#6366f1] rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="w-2 h-2 md:w-3 md:h-3 bg-[#8b5cf6] rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection; 