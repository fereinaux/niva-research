import React, { useState } from 'react';

function CareerSection() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const timelineItems = [
    {
      year: "2014",
      title: "Graduação em Turismo",
      description: "Comecei a graduação em turismo, pela Universidade Federal de Pernambuco (UFPE).",
      gradient: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-100"
    },
    {
      year: "2016",
      title: "Início da Carreira de Pesquisadora",
      description: "Iniciei a carreira de pesquisadora, ainda na graduação, numa pesquisa de consumo com abrangência nacional.",
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
      description: "Atuei em projetos de pesquisa de impacto social para órgãos públicos, dentre eles o Ministério de Turismo.",
      gradient: "from-blue-500 to-indigo-500",
      borderColor: "border-blue-100"
    },
    {
      year: "2021",
      title: "Projeto numa Multinacional",
      description: "Conduzi um projeto nacional de grande impacto para o setor comercial de uma multinacional, atuando end-to-end.",
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

  const researchStrategies = [
    {
      name: "Questionários (Survey)",
      description: "Coleta estruturada de dados quantitativos",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Entrevistas",
      description: "Conversas profundas para insights qualitativos",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "Grupos Focais",
      description: "Discussões colaborativas em grupo",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Testes de Usabilidade",
      description: "Avaliação da experiência do usuário",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Testes de Conceito",
      description: "Validação de ideias e propostas",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "NPS",
      description: "Net Promoter Score para satisfação",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "CSAT",
      description: "Customer Satisfaction Score",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Pesquisas Documentais",
      description: "Análise de documentos e fontes secundárias",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "from-rose-500 to-red-500",
    },
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
              Me chamo{" "}
              <span className="font-bold text-emerald-600">
                Adrielly Souza (Delly)
              </span>
              , sou a fundadora da Niva Research e estou há quase 10 anos
              realizando pesquisas. Já conduzi projetos de pesquisa em
              diversas frentes, atuando em universidades, órgãos públicos,
              multinacional e startup.
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

        {/* Research Strategies */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-8">
            Estratégias de Pesquisa
          </h3>
          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto">
            Utilizamos uma ampla gama de metodologias para garantir insights
            profundos e acionáveis
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
            {researchStrategies.map((strategy, index) => (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className="group relative bg-white rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 overflow-hidden cursor-pointer"
              >
                {/* Background Pattern */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`relative z-10 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${strategy.color} rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-all duration-300 shadow-md`}
                >
                  <div className="w-4 h-4 md:w-5 md:h-5 text-white flex items-center justify-center">
                    {strategy.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h4 className="text-xs md:text-sm font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-300 leading-tight">
                    {strategy.name}
                  </h4>
                  
                  {/* Expandable Description */}
                  <div className={`overflow-hidden transition-all duration-300 ${expandedCards[index] ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                  
                  {/* Expand/Collapse Arrow */}
                  <div className={`mt-1 transition-transform duration-300 ${expandedCards[index] ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                ></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 md:mt-8 group relative bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-2xl mx-auto border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-60 rounded-xl md:rounded-2xl"></div>
            
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-xl md:rounded-t-2xl"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                  Cada estratégia pensada sob medida
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  Cada estratégia é cuidadosamente selecionada e adaptada às necessidades específicas do seu projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerSection; 