import React from 'react';

function ValuesSection() {
  const values = [
    {
      name: "Cooperação e empatia",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
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
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-400/20 to-teal-400/20",
      borderColor: "border-emerald-300/30",
      hoverBorderColor: "hover:border-emerald-200/50",
      hoverBg: "hover:bg-emerald-400/30",
      hoverTextColor: "group-hover:text-emerald-300",
      lineGradient: "from-emerald-400 to-teal-400"
    },
    {
      name: "Integridade intelectual",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-400/20 to-cyan-400/20",
      borderColor: "border-teal-300/30",
      hoverBorderColor: "hover:border-teal-200/50",
      hoverBg: "hover:bg-teal-400/30",
      hoverTextColor: "group-hover:text-teal-300",
      lineGradient: "from-teal-400 to-cyan-400"
    },
    {
      name: "Compromisso e responsabilidade",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-400/20 to-blue-400/20",
      borderColor: "border-cyan-300/30",
      hoverBorderColor: "hover:border-cyan-200/50",
      hoverBg: "hover:bg-cyan-400/30",
      hoverTextColor: "group-hover:text-cyan-300",
      lineGradient: "from-cyan-400 to-blue-400"
    },
    {
      name: "Propósito com impacto",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
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
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-400/20 to-indigo-400/20",
      borderColor: "border-blue-300/30",
      hoverBorderColor: "hover:border-blue-200/50",
      hoverBg: "hover:bg-blue-400/30",
      hoverTextColor: "group-hover:text-blue-300",
      lineGradient: "from-blue-400 to-indigo-400"
    },
    {
      name: "Legado e aprendizado contínuo",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8 text-white"
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
      gradient: "from-indigo-400 to-purple-500",
      bgGradient: "from-indigo-400/20 to-purple-400/20",
      borderColor: "border-indigo-300/30",
      hoverBorderColor: "hover:border-indigo-200/50",
      hoverBg: "hover:bg-indigo-400/30",
      hoverTextColor: "group-hover:text-indigo-300",
      lineGradient: "from-indigo-400 to-purple-400"
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
            Nossos valores
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Values Presentation - Creative Layout */}
        <div className="relative">
          {/* Central Value Card */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="group relative bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-emerald-400/30 hover:border-emerald-300/50 transition-all duration-500 hover:scale-105 max-w-2xl">
              <div className="text-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-emerald-500/25">
                  <svg
                    className="w-8 h-8 md:w-12 md:h-12 text-white"
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

                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 group-hover:text-emerald-300 transition-colors duration-300 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                  Pilares para transformar dados em insights valiosos
                </h3>
                <p className="text-emerald-200 text-lg md:text-xl font-semibold"></p>
              </div>
            </div>
          </div>

          {/* Values Grid - Hexagonal Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div key={index} className="group relative transform hover:scale-105 md:hover:scale-110 transition-all duration-500">
                <div className={`bg-gradient-to-br ${value.bgGradient} backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 ${value.borderColor} ${value.hoverBorderColor} transition-all duration-500 ${value.hoverBg}`}>
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${value.gradient} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {value.icon}
                  </div>
                  <h4 className={`text-base md:text-lg font-bold text-white mb-2 ${value.hoverTextColor} transition-colors duration-300 leading-tight`}>
                    {value.name}
                  </h4>
                  <div className={`w-6 md:w-8 h-0.5 md:h-1 bg-gradient-to-r ${value.lineGradient} rounded-full group-hover:w-10 md:group-hover:w-12 transition-all duration-300`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 400">
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 600 200 Q 300 150 200 300"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 600 200 Q 900 150 1000 300"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 600 200 Q 400 350 300 400"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 600 200 Q 800 350 900 400"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
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