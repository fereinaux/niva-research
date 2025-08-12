import React from 'react';

function CareerSection() {
  const timelineItems = [
    {
      year: "2014",
      title: "Graduação na UFPE",
      description: "Aos 17 anos, iniciei a graduação em turismo pela Universidade Federal de Pernambuco, onde fui laureada.",
      gradient: "from-[#3b10ff] to-[#4f46e5]",
      borderColor: "border-[#3b10ff]/20"
    },
    {
      year: "2016",
      title: "Início da Carreira de Pesquisadora",
      description: "Iniciei a carreira de pesquisadora, ainda na graduação, em uma pesquisa de consumo com abrangência nacional.",
      gradient: "from-[#ff2d2b] to-[#ef4444]",
      borderColor: "border-[#ff2d2b]/20"
    },
    {
      year: "2019",
      title: "Mestrado Concluído",
      description: "Concluí o mestrado pela UFPE, onde me especializei em comportamento de consumo e publiquei diversos artigos sobre o tema.",
      gradient: "from-[#60a5fa] to-[#3b82f6]",
      borderColor: "border-[#60a5fa]/20"
    },
    {
      year: "2020",
      title: "Projetos de Impacto Social",
      description: "Atuei em projetos de pesquisa de impacto social para órgãos públicos, entre eles o Ministério de Turismo.",
      gradient: "from-[#f59e0b] to-[#d97706]",
      borderColor: "border-[#f59e0b]/20"
    },
    {
      year: "2021",
      title: "Projeto numa Multinacional",
      description: "Conduzi um projeto nacional de grande impacto para o setor comercial de uma multinacional, atuando de ponta a ponta.",
      gradient: "from-[#3b10ff] to-[#6366f1]",
      borderColor: "border-[#3b10ff]/20"
    },
    {
      year: "2021",
      title: "Programa de Mentoria",
      description: "Criei um programa de mentoria de pesquisa acadêmica, focado em ensinar pesquisa para graduandos e pós-graduandos.",
      gradient: "from-[#ff2d2b] to-[#f87171]",
      borderColor: "border-[#ff2d2b]/20"
    },
    {
      year: "2022",
      title: "UX Research em Startup Unicórnio",
      description: "Ingressei no time de UX Research de uma startup brasileira unicórnio, onde me especializei em pesquisa para produtos digitais.",
      gradient: "from-[#60a5fa] to-[#38bdf8]",
      borderColor: "border-[#60a5fa]/20"
    },
    {
      year: "2025",
      title: "Criação da Niva Research",
      description: "Agora estamos aqui, prontos para transformar seus dados em insights valiosos!",
      gradient: "from-[#3b10ff] to-[#4f46e5]",
      borderColor: "border-[#3b10ff]/40",
      isCurrent: true
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#fff3e1] via-[#fff3e1]/90 to-[#fff3e1]/80 relative overflow-hidden">
      {/* Enhanced visual effects with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/5 via-transparent to-[#ff2d2b]/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-[#60a5fa]/3 via-transparent to-[#f59e0b]/3"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#37322c]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#37322c]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 left-32 w-32 h-32 bg-gradient-to-br from-[#37322c]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
      
      {/* Additional subtle shadows for depth */}
      <div className="absolute top-40 right-1/3 w-24 h-24 bg-gradient-to-br from-[#f59e0b]/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-tl from-[#3b10ff]/6 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2.5s" }}></div>
      
      {/* Horizontal gradient overlay for sophistication */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3e1]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title with enhanced effects */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6 relative">
            <span className="relative z-10">Trajetória profissional</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b10ff]/10 to-[#ff2d2b]/10 blur-2xl -z-10"></div>
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#3b10ff] to-[#ff2d2b] mx-auto rounded-full shadow-lg shadow-[#3b10ff]/30"></div>
        </div>

        {/* Founder Introduction */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="relative">
            {/* Compact presentation */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#3b10ff]/15 shadow-lg">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img 
                    src="/delly-nova.png" 
                    alt="Adrielly Souza - Fundadora da Niva Research" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {/* Subtle glow effect around avatar */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3b10ff]/20 to-[#ff2d2b]/20 blur-xl -z-10"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-[#3b10ff] rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                  Adrielly Souza
                </h3>
                <div className="w-2 h-2 bg-[#ff2d2b] rounded-full"></div>
              </div>
              
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                Fundadora da <span className="font-semibold text-[#3b10ff]">Niva Research</span>
              </p>
              
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3b10ff]/10 to-[#ff2d2b]/10 rounded-full border border-[#3b10ff]/20">
                <span className="text-sm font-medium text-slate-700">
                  ✨ 10 anos de experiência em pesquisa
                </span>
              </div>
            </div>
            
            {/* Subtle bottom accent */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#60a5fa] to-[#3b10ff] mx-auto mt-4 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 md:mb-20">
          {/* Timeline Line - Visible on all devices */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-[#3b10ff] to-[#ff2d2b] rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-6 md:space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Mobile Layout: Compact Timeline */}
                <div className="md:hidden">
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className={`w-3 h-3 bg-gradient-to-br ${item.gradient} rounded-full border-2 border-white shadow-lg flex-shrink-0 mt-2 ${item.isCurrent ? 'w-4 h-4 animate-pulse' : ''}`}></div>
                    
                    {/* Content Card */}
                    <div className={`flex-1 bg-white rounded-xl p-4 shadow-lg ${item.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.isCurrent ? 'bg-gradient-to-br from-[#3b10ff] to-[#4f46e5] shadow-xl hover:shadow-2xl hover:-translate-y-2 transform scale-105' : ''}`}>
                      <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-3 ${item.isCurrent ? 'bg-white/20' : ''}`}>
                        <span className={`font-bold text-xs ${item.isCurrent ? 'text-white' : 'text-white'}`}>{item.year}</span>
                      </div>
                      <h3 className={`text-base font-bold mb-2 ${item.isCurrent ? 'text-white' : 'text-slate-800'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm ${item.isCurrent ? 'text-white/90' : 'text-slate-600'} leading-relaxed`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout: Original Alternating */}
                <div className="hidden md:flex items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className={`bg-white rounded-2xl p-6 shadow-lg ${item.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.isCurrent ? 'bg-gradient-to-br from-[#3b10ff] to-[#4f46e5] shadow-xl hover:shadow-2xl hover:-translate-y-2 transform scale-105' : ''}`}>
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-4 ml-auto ${item.isCurrent ? 'bg-white/20' : ''}`}>
                            <span className={`font-bold text-sm ${item.isCurrent ? 'text-white' : 'text-white'}`}>{item.year}</span>
                          </div>
                          <h3 className={`text-lg font-bold mb-2 ${item.isCurrent ? 'text-white' : 'text-slate-800'}`}>
                            {item.title}
                          </h3>
                          <p className={item.isCurrent ? 'text-white/90' : 'text-slate-600'}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br ${item.gradient} rounded-full border-4 border-white shadow-lg ${item.isCurrent ? 'w-6 h-6 animate-pulse' : ''}`}></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br ${item.gradient} rounded-full border-4 border-white shadow-lg ${item.isCurrent ? 'w-6 h-6 animate-pulse' : ''}`}></div>
                      <div className="w-1/2 pl-8">
                        <div className={`bg-white rounded-2xl p-6 shadow-lg ${item.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.isCurrent ? 'bg-gradient-to-br from-[#3b10ff] to-[#4f46e5] shadow-xl hover:shadow-2xl hover:-translate-y-2 transform scale-105' : ''}`}>
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-4 ${item.isCurrent ? 'bg-white/20' : ''}`}>
                            <span className={`font-bold text-sm ${item.isCurrent ? 'text-white' : 'text-white'}`}>{item.year}</span>
                          </div>
                          <h3 className={`text-lg font-bold mb-2 ${item.isCurrent ? 'text-white' : 'text-slate-800'}`}>
                            {item.title}
                          </h3>
                          <p className={item.isCurrent ? 'text-white/90' : 'text-slate-600'}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

export default CareerSection; 