function App() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g fill="none" fillRule="evenodd">
              <g fill="#ffffff" fillOpacity="0.05">
                <circle cx="30" cy="30" r="2" />
              </g>
            </g>
          </svg>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/15 to-cyan-500/10 animate-pulse"></div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Tudo começa
              </span>
              <span className="block text-white">com uma pergunta</span>
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                que você não respondeu.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              A <span className="text-cyan-300 font-semibold">Niva</span>{" "}
              transforma dados em informações relevantes e acionáveis, ajudando
              a enxergar o que não é possível sem pesquisa.
            </p>

            {/* CTA Button */}
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
              <span className="relative z-10">Solicite uma proposta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center space-x-8 opacity-50">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* SERVICES SECTION */}
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
            {/* Service Card 1 */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-emerald-100/50 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-emerald-500/25">
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
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  Pesquisas Qualitativas, Quantitativas e Mistas
                </h3>

                {/* Decorative Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-teal-100/50 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-teal-500/25">
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
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                  Estudos de Percepção, Comportamentos e Tendências
                </h3>

                {/* Decorative Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-cyan-100/50 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-cyan-500/25">
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
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                  Análises Estratégicas Sob Medida
                </h3>

                {/* Decorative Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-blue-100/50 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/25">
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
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  Projetos para Empresas, Órgãos Públicos, Instituições Sem Fins
                  Lucrativos ou Universidades
                </h3>

                {/* Decorative Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
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

      {/* VALUES SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que está por trás do nosso propósito
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
          </div>

          {/* Values Presentation - Creative Layout */}
          <div className="relative">
            {/* Central Value Card */}
            <div className="flex justify-center mb-12">
              <div className="group relative bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-3xl p-10 border border-emerald-400/30 hover:border-emerald-300/50 transition-all duration-500 hover:scale-105 max-w-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-emerald-500/25">
                    <svg
                      className="w-12 h-12 text-white"
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

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Pilares para transformar dados em insights valiosos
                  </h3>
                  <p className="text-emerald-200 text-xl font-semibold"></p>
                </div>
              </div>
            </div>

            {/* Values Grid - Hexagonal Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {/* Value Card 1 */}
              <div className="group relative transform hover:scale-110 transition-all duration-500">
                <div className="bg-gradient-to-br from-emerald-400/20 to-teal-400/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/30 hover:border-emerald-200/50 transition-all duration-500 hover:bg-emerald-400/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    Cooperação e empatia
                  </h4>
                  <div className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>

              {/* Value Card 2 */}
              <div className="group relative transform hover:scale-110 transition-all duration-500">
                <div className="bg-gradient-to-br from-teal-400/20 to-cyan-400/20 backdrop-blur-sm rounded-2xl p-6 border border-teal-300/30 hover:border-teal-200/50 transition-all duration-500 hover:bg-teal-400/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <svg
                      className="w-8 h-8 text-white"
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
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                    Integridade intelectual
                  </h4>
                  <div className="w-8 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>

              {/* Value Card 3 */}
              <div className="group relative transform hover:scale-110 transition-all duration-500">
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-300/30 hover:border-cyan-200/50 transition-all duration-500 hover:bg-cyan-400/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg
                      className="w-8 h-8 text-white"
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
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    Compromisso e responsabilidade
                  </h4>
                  <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>

              {/* Value Card 4 */}
              <div className="group relative transform hover:scale-110 transition-all duration-500">
                <div className="bg-gradient-to-br from-blue-400/20 to-indigo-400/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/30 hover:border-blue-200/50 transition-all duration-500 hover:bg-blue-400/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <svg
                      className="w-8 h-8 text-white"
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
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    Propósito com impacto
                  </h4>
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>

              {/* Value Card 5 */}
              <div className="group relative transform hover:scale-110 transition-all duration-500">
                <div className="bg-gradient-to-br from-indigo-400/20 to-purple-400/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-300/30 hover:border-indigo-200/50 transition-all duration-500 hover:bg-indigo-400/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg
                      className="w-8 h-8 text-white"
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
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                    Legado e aprendizado contínuo
                  </h4>
                  <div className="w-8 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
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
          <div className="mt-16 flex justify-center space-x-8 opacity-30">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div
              className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </section>

      {/* CAREER SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Trajetória Profissional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Founder Introduction */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
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
          <div className="relative mb-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2014 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4 ml-auto">
                      <span className="text-white font-bold text-sm">2014</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Graduação em Turismo
                    </h3>
                    <p className="text-slate-600">
                      Comecei a graduação em turismo, pela Universidade Federal
                      de Pernambuco (UFPE).
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2016 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-sm">2016</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Início da Carreira de Pesquisadora
                    </h3>
                    <p className="text-slate-600">
                      Iniciei a carreira de pesquisadora, ainda na graduação,
                      numa pesquisa de consumo com abrangência nacional.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2019 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4 ml-auto">
                      <span className="text-white font-bold text-sm">2019</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Mestrado Concluído
                    </h3>
                    <p className="text-slate-600">
                      Concluí o mestrado pela UFPE, onde me especializei em
                      comportamento de consumo e publiquei diversos artigos
                      sobre o tema.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-sm">2020</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Projetos de Impacto Social
                    </h3>
                    <p className="text-slate-600">
                      Atuei em projetos de pesquisa de impacto social para
                      órgãos públicos, dentre eles o Ministério de Turismo.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2021 - First */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4 ml-auto">
                      <span className="text-white font-bold text-sm">2021</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Projeto numa Multinacional
                    </h3>
                    <p className="text-slate-600">
                      Conduzi um projeto nacional de grande impacto para o setor
                      comercial de uma multinacional, atuando end-to-end.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2021 - Second */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-sm">2021</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Programa de Mentoria
                    </h3>
                    <p className="text-slate-600">
                      Criei um programa de mentoria de pesquisa acadêmica,
                      focado em ensinar pesquisa para graduandos e
                      pós-graduandos.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-4 ml-auto">
                      <span className="text-white font-bold text-sm">2022</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      UX Research em Startup Unicórnio
                    </h3>
                    <p className="text-slate-600">
                      Ingressei no time de UX Research de uma startup brasileira
                      unicórnio, onde me especializei em pesquisa para produtos
                      digitais.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* 2025 - Niva Research */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-xl animate-pulse"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 shadow-xl border border-emerald-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform scale-105">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-sm">2025</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Criação da Niva Research
                    </h3>
                    <p className="text-emerald-100">
                      Agora estamos aqui, prontos para transformar seus dados em
                      insights valiosos!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Strategies */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-8">
              Estratégias de Pesquisa
            </h3>
            <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
              Utilizamos uma ampla gama de metodologias para garantir insights
              profundos e acionáveis
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
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
              ].map((strategy, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Icon Container */}
                  <div
                    className={`relative z-10 w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                  >
                    {strategy.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                      {strategy.name}
                    </h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-slate-700 text-lg font-medium">
                Cada estratégia é cuidadosamente selecionada e adaptada às
                necessidades específicas do seu projeto, garantindo resultados
                precisos e insights acionáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g fill="none" fillRule="evenodd">
              <g fill="#10b981" fillOpacity="0.05">
                <circle cx="30" cy="30" r="2" />
              </g>
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Uma carreira sólida, construída com o suporte de muitas pessoas
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              Veja o que dizem no LinkedIn:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>

            {/* LinkedIn Link */}
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/adriellysouza/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Ver perfil completo no LinkedIn
              </a>
            </div>
          </div>

          {/* Recommendations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Cíntia Miekusz",
                role: "Group Product Manager",
                company: "Produtos Financeiros",
                content:
                  "Tive o privilégio de trabalhar com a Adrielly em projetos desafiadores e posso dizer que sua atuação como profissional de pesquisa é inspiradora. Adrielly tem uma execução impecável, sempre buscando entregar valor real para o negócio e para os usuários. Além do domínio técnico e da capacidade analítica, se destaca pela colaboração, comunicação clara e postura proativa. Recomendo fortemente para qualquer desafio na área de pesquisas — é um talento que certamente eleva o padrão dos projetos em que se envolve.",
                avatar: "CM",
                delay: "0s",
              },
              {
                name: "Carla Borba",
                role: "Professora Universitária",
                company: "UFPE",
                content:
                  "Adrielly é uma profissional super competente e comprometida. Trabalhamos juntas e foi um tempo maravilhoso. Ela tem muito potencial e é autônoma e independente em projetos. Com a mínima orientação ela segue e volta com a entrega dos projetos resolvida. Super recomendo",
                avatar: "CB",
                delay: "0.2s",
              },
              {
                name: "Regina Fialho",
                role: "Especialista em Experiência do Usuário",
                company: "UX Specialist",
                content:
                  "Trabalhei com Adrielly em diversos projetos desde a universidade. Ela é uma pessoa extremamente ética, profissional e dedicada. O mix de soft e hard skills que ela possui também a tornam altamente qualificada e referência em sua área de atuação. Sobressaem-se sua atenção a detalhes, trabalho em equipe, criatividade, expertise em pesquisa e UX.",
                avatar: "RF",
                delay: "0.4s",
              },
              {
                name: "Carol Andrade",
                role: "Group Product Manager",
                company: "frete.com",
                content:
                  "Delly é uma pesquisadora sênior completa: atua na concepção da pesquisa, apoiando os stakeholders no levantamento de dúvidas/hipóteses, escrita de briefing e desenho da estratégia de pesquisa; passa pela execução de diferentes métodos de pesquisa e sumariza os principais insights em apresentações valiosas que servem como documentação e podem ser consumidas por diferentes públicos. Tive o prazer de trabalhar com ela no grupo Frete.com e acompanhar de perto suas ótimas entregas!",
                avatar: "CA",
                delay: "0.6s",
              },
              {
                name: "Júlia Piovesan",
                role: "Insights & Marketing",
                company: "Estratégia & Produto",
                content:
                  "A Adrielly é uma das melhores profissionais com quem tive a chance de trabalhar. Faz tudo com muita dedicação e entrega resultados incríveis. Além disso, sempre está disposta a ajudar todos e sempre traz iniciativas inovadoras que facilitam o dia a dia de todos. Foi um prazer imenso ter ela como uma parceira de trabalho!",
                avatar: "JP",
                delay: "0.8s",
              },
              {
                name: "Bruno Queirós",
                role: "Senior Product Designer",
                company: "frete.com",
                content:
                  "A Adrielly é uma das melhores pessoas com quem já pude duplar, e eu posso provar isso destacando os principais pontos depois de trabalhar com ela nesses últimos anos: Conhecimento prático, comunicação clara, orientada a dados e parceria. Não tenho dúvida que a empresa que tiver uma profissional como ela, terá um grande valor em mãos.",
                avatar: "BQ",
                delay: "1s",
              },
              {
                name: "Carla Cardoso dos Santos",
                role: "Pesquisa de Mercado",
                company: "UX Research",
                content:
                  "Tive o privilégio e a felicidade de conhecer e trabalhar com a Adrielly. Ela é uma pessoa extremamente agradável de se conviver. Além de ser excelente profissional e referência nos projetos de pesquisa quali, quanti e ux. Proporciona entrega de qualidade em tudo que se propõe a fazer. Qualquer empresa estará ganhando, e muito, tendo essa pessoa incrível no time.",
                avatar: "CC",
                delay: "1.2s",
              },
              {
                name: "Elisângela Farias",
                role: "Docente e Consultora",
                company: "Gestão & Turismo",
                content:
                  "Tive o privilégio de trabalhar pesquisa com Adrielly Souza, na Universidade Federal de Pernambuco e posso afirmar que sua dedicação e competência fizeram toda diferença. No período de colaboração demonstrou criatividade, proatividade, engajamento com demais colegas e um diferencial de liderança, ao direcionar, inspirar e melhorar com assertividade atividades desafiadoras propostas pela instituição, para alcance das metas estabelecidas. Recomendo sem hesitação para qualquer desafio que ela decida enfrentar.",
                avatar: "EF",
                delay: "1.4s",
              },
              {
                name: "Kauê Oliveira Mender",
                role: "UX Researcher",
                company: "Fretebras",
                content:
                  "A Adrielly é uma das melhores profissionais com quem eu já trabalhei. Não somente pela competência, mas, também, pela postura e profissionalismo. Pró ativa, sempre disponível e capaz de lidar com prazos e projetos desafiadores. Referência em quanti, quali e teste de usabilidade. Sempre busca evoluir e apoiar ao time. Além de ser uma pessoa extremamente agradável. Qualquer empresa teria sorte em tê-la em seu time.",
                avatar: "KO",
                delay: "1.6s",
              },
              {
                name: "Tharine Santana",
                role: "Staff Product Designer",
                company: "Stone",
                content:
                  "Vejo a Adrielly como referência no quesito de dar voz ao usuário. Sua capacidade crítica faz com que ela sempre levante pontos relevantes, e sua habilidade de comunicação torna suas apresentações muito proveitosas e didáticas. É proativa, trabalha bem em equipe e possui muita disposição em compartilhar seus conhecimentos. Além disso, conviver com ela é muito fácil, sua postura é sempre positiva e acolhedora.",
                avatar: "TS",
                delay: "1.8s",
              },
            ].map((recommendation, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-100 overflow-hidden opacity-0 animate-fade-in-up"
                style={{ animationDelay: recommendation.delay }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Recommendation Text */}
                  <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    "{recommendation.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      {recommendation.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                        {recommendation.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {recommendation.role} • {recommendation.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Loading Animation */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-slate-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <span className="text-sm font-medium">
                Carregando mais recomendações...
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Quer ver mais recomendações?
              </h3>
              <p className="text-emerald-100 mb-6">
                Acesse meu perfil completo no LinkedIn para ver todas as
                recomendações e conhecer melhor minha trajetória profissional.
              </p>
              <a
                href="https://www.linkedin.com/in/adriellysouza/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Ver perfil completo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
