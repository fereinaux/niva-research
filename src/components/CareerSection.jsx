import React from 'react';

function CareerSection() {
  const timelineItems = [
    {
      year: "2014",
      title: "Graduação na UFPE",
      description: "Aos 17 anos, iniciei a graduação em turismo pela Universidade Federal de Pernambuco, onde fui laureada.",
      gradient: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-100"
    },
    {
      year: "2016",
      title: "Início da Carreira de Pesquisadora",
      description: "Iniciei a carreira de pesquisadora, ainda na graduação, em uma pesquisa de consumo com abrangência nacional.",
      gradient: "from-teal-500 to-cyan-500",
      borderColor: "border-teal-100"
    },
    {
      year: "2019",
      title: "Mestrado Concluído",
      description: "Concluí o mestrado pela UFPE, onde me especializei em comportamento de consumo e publiquei diversos artigos sobre o tema.",
      gradient: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-100"
    },
    {
      year: "2020",
      title: "Projetos de Impacto Social",
      description: "Atuei em projetos de pesquisa de impacto social para órgãos públicos, entre eles o Ministério de Turismo.",
      gradient: "from-blue-500 to-indigo-500",
      borderColor: "border-blue-100"
    },
    {
      year: "2021",
      title: "Projeto numa Multinacional",
      description: "Conduzi um projeto nacional de grande impacto para o setor comercial de uma multinacional, atuando de ponta a ponta.",
      gradient: "from-indigo-500 to-purple-500",
      borderColor: "border-indigo-100"
    },
    {
      year: "2021",
      title: "Programa de Mentoria",
      description: "Criei um programa de mentoria de pesquisa acadêmica, focado em ensinar pesquisa para graduandos e pós-graduandos.",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-100"
    },
    {
      year: "2022",
      title: "UX Research em Startup Unicórnio",
      description: "Ingressei no time de UX Research de uma startup brasileira unicórnio, onde me especializei em pesquisa para produtos digitais.",
      gradient: "from-pink-500 to-rose-500",
      borderColor: "border-pink-100"
    },
    {
      year: "2025",
      title: "Criação da Niva Research",
      description: "Agora estamos aqui, prontos para transformar seus dados em insights valiosos!",
      gradient: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-400",
      isCurrent: true
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
            Trajetória profissional
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Founder Introduction */}
        <div className="text-center mb-8 md:mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Sou a{" "}
              <span className="font-bold text-emerald-600">
                Adrielly Souza (Delly)
              </span>
              , fundadora da Niva Research. Estou há quase 10 anos
              realizando pesquisas, conduzindo projetos em
              diversas frentes, como universidades, órgãos públicos,
              multinacional e startups.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 md:mb-20">
          {/* Timeline Line - Visible on all devices */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>

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
                    <div className={`flex-1 bg-white rounded-xl p-4 shadow-lg ${item.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.isCurrent ? 'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform scale-105' : ''}`}>
                      <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-3 ${item.isCurrent ? 'bg-white/20' : ''}`}>
                        <span className={`font-bold text-xs ${item.isCurrent ? 'text-white' : 'text-white'}`}>{item.year}</span>
                      </div>
                      <h3 className={`text-base font-bold mb-2 ${item.isCurrent ? 'text-white' : 'text-slate-800'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm ${item.isCurrent ? 'text-emerald-100' : 'text-slate-600'} leading-relaxed`}>
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
                        <div className={`bg-white rounded-2xl p-6 shadow-lg ${item.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.isCurrent ? 'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform scale-105' : ''}`}>
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-4 ml-auto ${item.isCurrent ? 'bg-white/20' : ''}`}>
                            <span className={`font-bold text-sm ${item.isCurrent ? 'text-white' : 'text-white'}`}>{item.year}</span>
                          </div>
                          <h3 className={`text-lg font-bold mb-2 ${item.isCurrent ? 'text-white' : 'text-slate-800'}`}>
                            {item.title}
                          </h3>
                          <p className={item.isCurrent ? 'text-emerald-100' : 'text-slate-600'}>
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
                        <div className={`bg-white rounded-2xl p-6 shadow-lg ${item.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.isCurrent ? 'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform scale-105' : ''}`}>
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-4 ${item.isCurrent ? 'bg-white/20' : ''}`}>
                            <span className={`font-bold text-sm ${item.isCurrent ? 'text-white' : 'text-white'}`}>{item.year}</span>
                          </div>
                          <h3 className={`text-lg font-bold mb-2 ${item.isCurrent ? 'text-white' : 'text-slate-800'}`}>
                            {item.title}
                          </h3>
                          <p className={item.isCurrent ? 'text-emerald-100' : 'text-slate-600'}>
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