import React from 'react';

function ServicesSection() {
  const services = [
    {
      title: "Pesquisas Qualitativas, Quantitativas e Mistas",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-100/50",
      hoverColor: "group-hover:text-emerald-700",
      lineGradient: "from-emerald-500 to-teal-500",
      hoverBg: "from-emerald-500/10 to-teal-500/10",
      shadowColor: "group-hover:shadow-emerald-500/25"
    },
    {
      title: "Estudos de Percepção, Comportamentos e Tendências",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-100/50",
      hoverColor: "group-hover:text-teal-700",
      lineGradient: "from-teal-500 to-cyan-500",
      hoverBg: "from-teal-500/10 to-cyan-500/10",
      shadowColor: "group-hover:shadow-teal-500/25"
    },
    {
      title: "Análises Estratégicas Sob Medida",
      icon: (
        <svg
          className="w-10 h-10 text-white"
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
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-100/50",
      hoverColor: "group-hover:text-cyan-700",
      lineGradient: "from-cyan-500 to-blue-500",
      hoverBg: "from-cyan-500/10 to-blue-500/10",
      shadowColor: "group-hover:shadow-cyan-500/25"
    },
    {
      title: "Projetos para Empresas, Órgãos Públicos, Instituições Sem Fins Lucrativos ou Universidades",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            O que entregamos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${service.borderColor} overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Icon Container */}
              <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${service.shadowColor}`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-xl font-bold text-slate-800 mb-4 ${service.hoverColor} transition-colors duration-300`}>
                  {service.title}
                </h3>

                {/* Decorative Line */}
                <div className={`w-12 h-1 bg-gradient-to-r ${service.lineGradient} rounded-full mb-4 group-hover:w-16 transition-all duration-300`}></div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
            <span className="relative z-10 flex items-center">
              Veja nossos serviços
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 