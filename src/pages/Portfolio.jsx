import React from 'react';

function Portfolio() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-t from-[#fff3e1]/30 via-white to-[#1595FF]/10 relative">
      
      {/* Seção 1: Portfólio Pesquisa */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              <span className="text-[#1595FF]">Portfólio Pesquisa</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm">
              Conheça nossos projetos de pesquisa e os resultados alcançados
            </p>
          </div>
          
          {/* Lista Vertical de Projetos de Pesquisa */}
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Projeto 1: Programa de Qualificação Profissional */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                {/* Lado esquerdo - Conteúdo */}
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#1595FF]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#1595FF]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Programa de Qualificação Profissional
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-2 leading-relaxed text-sm text-xs">
                    Pesquisa financiada pelo Ministério de Turismo utilizada como base para o Programa de Qualificação Profissional do Turismo.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#1595FF] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#1595FF] font-semibold text-xs mb-1">Resultado Alcançado</p>
                        <p className="text-[#1595FF] font-medium">
                          Mais de 10 trabalhadores da Ilha de Itamaracá/PE capacitados pelo programa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Lado direito - Elemento visual */}
                <div className="lg:w-40 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/5 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-[#1595FF] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <p className="text-[#1595FF] font-semibold text-xs">Capacitação</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 2: Estudo de Personas Nacional */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#1595FF]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#1595FF]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Estudo de Personas Nacional
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-2 leading-relaxed text-sm text-xs">
                    Projeto misto (quali + quanti) de abrangência nacional que descobriu e desenhou todas as personas da empresa.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#1595FF] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#1595FF] font-semibold text-xs mb-1">Resultado Alcançado</p>
                        <p className="text-[#1595FF] font-medium">
                          Construímos um novo modelo de abordagem comercial centrado no usuário.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-40 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/5 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#1595FF] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-[#1595FF] font-semibold text-xs">Personas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 3: Reformulação de Planos B2B */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#1595FF]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#1595FF]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold text-base">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Reformulação de Planos B2B
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    A partir de pesquisas exploratórias, foram descobertas oportunidades para a reformulação dos planos B2B da startup.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#1595FF] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#1595FF] font-semibold text-xs mb-1">Resultado Alcançado</p>
                        <p className="text-[#1595FF] font-medium">
                          Os insights resultaram em 4 novos planos e aumento significativo da receita da empresa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-40 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/5 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#1595FF] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-[#1595FF] font-semibold text-xs">B2B</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 4: Versão Paga do App */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#1595FF]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#1595FF]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold text-base">04</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Versão Paga do App
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Pesquisas exploratórias e tracking com 100+ usuários trouxeram insights que orientaram decisões estratégicas dos times de Produto, Comercial, Design e Marketing.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#1595FF] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#1595FF] font-semibold text-xs mb-1">Resultado Alcançado</p>
                        <p className="text-[#1595FF] font-medium">
                          Mais de 100 mil usuários cadastrados no plano pago do app em 1 ano de lançamento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-40 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/5 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#1595FF] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[#1595FF] font-semibold text-xs">Mobile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 5: Produtos de Crédito Fintech */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#1595FF]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#1595FF]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold text-base">05</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Produtos de Crédito Fintech
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    Pesquisas exploratórias sobre aceitação e experiência dos novos produtos de crédito B2B e B2C da fintech.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#1595FF] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#1595FF] font-semibold text-xs mb-1">Resultado Alcançado</p>
                        <p className="text-[#1595FF] font-medium">
                          Redesenho e melhoria dos produtos, contribuindo diretamente para o aumento da receita de crédito.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-40 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/5 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#1595FF] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <p className="text-[#1595FF] font-semibold text-xs">Crédito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Portfólio Capacitações */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              <span className="text-[#FF6339]">Portfólio Capacitações</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm">
              Veja os resultados das capacitações realizadas
            </p>
          </div>
          
          {/* Conteúdo será adicionado posteriormente */}
        </div>
      </section>

      {/* Seção 3: Portfólio LPs */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              <span className="text-[#1595FF]">Portfólio LPs</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm">
              Landing Pages criadas com base em dados e insights reais
            </p>
          </div>
          
          {/* Conteúdo será adicionado posteriormente */}
        </div>
      </section>

      {/* Seção 4: Chamada Final Portfólio */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              Pronto para <span className="text-[#1595FF]">impulsionar</span> seu negócio?
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm">
              Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos
            </p>
          </div>
          
          {/* CTA será adicionado posteriormente */}
        </div>
      </section>

    </div>
  );
}

export default Portfolio;
