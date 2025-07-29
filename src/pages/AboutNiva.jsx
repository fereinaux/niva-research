import React from 'react';

function AboutNiva() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Quem faz a Niva Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g fill="none" fillRule="evenodd">
              <g fill="#ffffff" fillOpacity="0.1">
                <circle cx="30" cy="30" r="2" />
              </g>
            </g>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quem forma a Niva?
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Conheça um pouco da história da Delly.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center space-x-8 opacity-50">
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

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-12 shadow-2xl shadow-black/20 overflow-hidden transform hover:scale-110 transition-all duration-500 border-4 border-white/50 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=224&h=224&fit=crop&crop=face" 
                  alt="Delly - Pesquisadora e fundadora da Niva" 
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg md:text-xl text-emerald-100 leading-relaxed mb-4">
                Olá! Sou a Delly :) Estou há quase 10 anos realizando pesquisas e costumo dizer que, como boa curiosa nata, sinto que nasci para ser pesquisadora e responder dúvidas.
              </p>
              <p className="text-lg md:text-xl text-emerald-100 leading-relaxed">
                Após realizar pesquisas para universidades, órgãos públicos, multinacional e startup, o meu objetivo é levar para os projetos o melhor do que aprendi em cada um destes universos.
              </p>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full -translate-y-16 translate-x-16 opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full translate-y-12 -translate-x-12 opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Múltiplas experiências</h3>
                    <p className="text-slate-600 text-sm">10 anos de jornada em diferentes universos</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-emerald-600 text-lg">Universidades</div>
                          <div className="text-slate-600 text-sm">Acadêmico & Pesquisa</div>
                        </div>
                        <div className="text-2xl text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
                      </div>
                    </div>

                    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-teal-600 text-lg">Órgãos Públicos</div>
                          <div className="text-slate-600 text-sm">Governamental & Social</div>
                        </div>
                        <div className="text-2xl text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
                      </div>
                    </div>

                    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-cyan-600 text-lg">Multinacional</div>
                          <div className="text-slate-600 text-sm">Corporativo & Estratégico</div>
                        </div>
                        <div className="text-2xl text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
                      </div>
                    </div>

                    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-blue-600 text-lg">Startup</div>
                          <div className="text-slate-600 text-sm">Inovação & Agilidade</div>
                        </div>
                        <div className="text-2xl text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Origem da Niva Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Porque e como começamos?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A nossa história importa e, por causa dela, chegamos até aqui.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-emerald-500/10 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full -translate-y-16 translate-x-16 opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full translate-y-12 -translate-x-12 opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-8 shadow-lg shadow-emerald-500/25">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    A Niva nasceu da união entre pesquisa, legado e desejo de fazer diferença.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    O amor pela metodologia da pesquisa e a valorização de princípios é o que nos move.
                  </p>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    O nosso nome é uma homenagem ao Nivaldo, o pai e grande incentivador da trajetória profissional da Delly.
                  </p>
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-6 border-l-4 border-emerald-500">
                    <p className="text-lg md:text-xl font-semibold text-slate-800 leading-relaxed">
                      Somos uma empresa que honra os seus valores e não abre mão deles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl shadow-emerald-500/10">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full -translate-y-20 translate-x-20 opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full translate-y-16 -translate-x-16 opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  {/* Image Section */}
                  <div className="text-center mb-8">
                    <div className="relative inline-block">
                      <div className="w-32 h-32 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25 relative overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face" 
                          alt="Nivaldo - Pai e incentivador" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20"></div>
                      </div>
                      <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Uma empresa com propósito</h3>
                    <p className="text-slate-600 text-sm">
                      Em memória de Nivaldo Severiano
                    </p>
                  </div>
                  
                  {/* Three Pillars */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-emerald-700 text-sm">Expertise</span>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="font-semibold text-teal-700 text-sm">Legado</span>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-cyan-700 text-sm">Valores</span>
                    </div>
                  </div>
                  
                  {/* Decorative Quote */}
                  <div className="mt-6 text-center">
                    <div className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-4 py-2">
                      <p className="text-sm text-slate-600 italic">
                        "O amor pela pesquisa e a valorização de princípios"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Princípios Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Nossos Princípios</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Agora que você já nos conhece, entenda nossos pilares:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Princípio 1: Cooperação e empatia */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-emerald-100 overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full -translate-y-12 translate-x-12 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full translate-y-8 -translate-x-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Cooperação e empatia</h3>
                <p className="text-slate-600 leading-relaxed">
                  As pessoas importam muito para nós e elas são o começo, meio e fim de quem somos e o que fazemos.
                </p>
              </div>
            </div>

            {/* Princípio 2: Integridade intelectual e metodológica */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-teal-100 overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full -translate-y-12 translate-x-12 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full translate-y-8 -translate-x-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/25 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Integridade intelectual e metodológica</h3>
                <p className="text-slate-600 leading-relaxed">
                  Com anos de experiência no que fazemos, usamos a nossa expertise, para escolher métodos assertivos e alinhados com a necessidade.
                </p>
              </div>
            </div>

            {/* Princípio 3: Compromisso e responsabilidade */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-cyan-100 overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full -translate-y-12 translate-x-12 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full translate-y-8 -translate-x-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Compromisso e responsabilidade</h3>
                <p className="text-slate-600 leading-relaxed">
                  Não abrimos mão do nosso compromisso com quem nos contrata. Somos profissionais e prezamos por isso.
                </p>
              </div>
            </div>

            {/* Princípio 4: Propósito com impacto */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-blue-100 overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full -translate-y-12 translate-x-12 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full translate-y-8 -translate-x-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Propósito com impacto</h3>
                <p className="text-slate-600 leading-relaxed">
                  Acreditamos que os nossos pilares são realmente valiosos e entregam resultados palpáveis para os envolvidos.
                </p>
              </div>
            </div>

            {/* Princípio 5: Legado e aprendizado contínuo */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-indigo-100 overflow-hidden md:col-span-2 lg:col-span-1">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full -translate-y-12 translate-x-12 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full translate-y-8 -translate-x-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Legado e aprendizado contínuo</h3>
                <p className="text-slate-600 leading-relaxed">
                  A nossa trajetória nos conduziu até aqui e a nossa busca por aprendizados será o que nos levará adiante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar sua jornada conosco?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Vamos transformar suas dúvidas em insights valiosos
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Fale Conosco
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutNiva; 