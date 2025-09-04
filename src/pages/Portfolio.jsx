import React from 'react';

function Portfolio() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-t from-[#fff3e1]/30 via-white to-[#1595FF]/10 relative">
      
      {/* Seção 1: Portfólio Pesquisa */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              <span className="text-[#1595FF]">Portfólio Pesquisas</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-base">
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
                    <div className="w-10 h-10 bg-[#FF6339]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Programa de Qualificação Profissional
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-2 leading-relaxed text-sm">
                    Pesquisa financiada pelo Ministério de Turismo utilizada como base para o Programa de Qualificação Profissional do Turismo.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#FF6339] rounded-full flex items-center justify-center mr-3 mt-0.5">
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
                    <div className="w-10 h-10 bg-[#FF6339] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-[#FF6339] font-semibold text-xs">Capacitação</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 2: Estudo de Personas Nacional */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#FF6339]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Estudo de Personas Nacional
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-2 leading-relaxed text-sm">
                    Projeto misto (quali + quanti) de abrangência nacional que descobriu e desenhou todas as personas da empresa.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#FF6339] rounded-full flex items-center justify-center mr-3 mt-0.5">
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
                    <div className="w-12 h-12 bg-[#FF6339] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-[#FF6339] font-semibold text-xs">Personas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 3: Reformulação de Planos B2B */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#FF6339]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold text-base">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Reformulação de Planos B2B
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-base">
                    A partir de pesquisas exploratórias, foram descobertas oportunidades para a reformulação dos planos B2B da startup.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#FF6339] rounded-full flex items-center justify-center mr-3 mt-0.5">
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
                    <div className="w-12 h-12 bg-[#FF6339] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-[#FF6339] font-semibold text-xs">B2B</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 4: Versão Paga do App */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#FF6339]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold text-base">04</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Versão Paga do App
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-base">
                    Pesquisas exploratórias e tracking com 100+ usuários trouxeram insights que orientaram decisões estratégicas dos times de Produto, Comercial, Design e Marketing.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#FF6339] rounded-full flex items-center justify-center mr-3 mt-0.5">
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
                    <div className="w-12 h-12 bg-[#FF6339] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[#FF6339] font-semibold text-xs">Mobile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 5: Produtos de Crédito Fintech */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#FF6339]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <span className="text-[#1595FF] font-bold text-base">05</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#282828] leading-tight">
                        Produtos de Crédito Fintech
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-base">
                    Pesquisas exploratórias sobre aceitação e experiência dos novos produtos de crédito B2B e B2C da fintech.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1595FF]/5 to-[#1595FF]/10 rounded-lg p-4 border border-[#1595FF]/20">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#FF6339] rounded-full flex items-center justify-center mr-3 mt-0.5">
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
                    <div className="w-12 h-12 bg-[#FF6339] rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <p className="text-[#FF6339] font-semibold text-xs">Crédito</p>
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
              <span className="text-[#1595FF]">Portfólio Capacitações</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-base">
              Veja alguns resultados de capacitações realizadas em 10 anos de trajetória
            </p>
          </div>
          
          {/* Grid de Casos de Capacitação */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Caso 1: Projeto de Conclusão de Curso */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
                <div className="p-6">
                  {/* Header com número e ícone */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FF6339] to-[#FF8A65] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">01</span>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/20 rounded-lg flex items-center justify-center group-hover:from-[#1595FF]/20 group-hover:to-[#1595FF]/30 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#1595FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-lg font-bold text-[#282828] mb-3 leading-tight">
                    Suporte no Projeto de Conclusão de Curso
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Uma psicóloga especialista em EMDR estava finalizando sua pós-graduação em Terapia Cognitiva Comportamental e precisava de orientação especializada.
                  </p>
                  
                  {/* Nossa Abordagem */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#1595FF] mb-2">Nossa Abordagem</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Definição estratégica dos objetivos</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Técnicas de coleta de dados</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Análise e interpretação</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Redação acadêmica assertiva</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Resultado */}
                  <div className="bg-gradient-to-r from-[#FF6339]/5 to-[#FF6339]/10 rounded-lg p-3 border-l-4 border-[#FF6339]">
                    <p className="text-[#FF6339] font-semibold text-xs mb-1">Resultado</p>
                    <p className="text-[#FF6339] text-xs leading-relaxed">
                      Aprovação do projeto de conclusão de curso e conquista do certificado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Caso 2: Placeholder */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
                <div className="p-6">
                  {/* Header com número e ícone */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FF6339] to-[#FF8A65] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">02</span>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/20 rounded-lg flex items-center justify-center group-hover:from-[#1595FF]/20 group-hover:to-[#1595FF]/30 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#1595FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-lg font-bold text-[#282828] mb-3 leading-tight">
                    Orientação Pré-Projeto Acadêmico
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Uma empresária desejava ingressar em um mestrado acadêmico para se especializar. Entretanto, o seu desafio era a falta de conhecimento deste universo.
                  </p>
                  
                  {/* Nossa Abordagem */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#1595FF] mb-2">Nossa Abordagem</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Conceitos básicos de pesquisa</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Definir pergunta e objetivo de pesquisa</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Teoria e prática sobre método de pesquisas</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Redação técnica do projeto</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Resultado */}
                  <div className="bg-gradient-to-r from-[#FF6339]/5 to-[#FF6339]/10 rounded-lg p-3 border-l-4 border-[#FF6339]">
                    <p className="text-[#FF6339] font-semibold text-xs mb-1">Resultado</p>
                    <p className="text-[#FF6339] text-xs leading-relaxed">
                      A empresária conseguiu compreender o que é uma pesquisa acadêmica, escreveu o seu pré-projeto e foi aprovada no concurso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Caso 3: Placeholder */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
                <div className="p-6">
                  {/* Header com número e ícone */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FF6339] to-[#FF8A65] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">03</span>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/20 rounded-lg flex items-center justify-center group-hover:from-[#1595FF]/20 group-hover:to-[#1595FF]/30 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#1595FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-lg font-bold text-[#282828] mb-3 leading-tight">
                    Capacitação do Time de Atendimento
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    O time de atendimento da empresa estava com um desafio: tinha contato direto com os clientes, mas não sabia o que fazer com todos os dados que recebia diariamente.
                  </p>
                  
                  {/* Nossa Abordagem */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#1595FF] mb-2">Nossa Abordagem</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Construir roteiros com perguntas assertivas</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Elaborar questionários concisos e precisos</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Como analisar e interpretar resultados</span>
                      </li>
                      <li className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1595FF] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>Estruturar os resultados</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Resultado */}
                  <div className="bg-gradient-to-r from-[#FF6339]/5 to-[#FF6339]/10 rounded-lg p-3 border-l-4 border-[#FF6339]">
                    <p className="text-[#FF6339] font-semibold text-xs mb-1">Resultado</p>
                    <p className="text-[#FF6339] text-xs leading-relaxed">
                      Time de atendimento preparado para ser uma área mais estratégica na empresa.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Portfólio LPs */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              <span className="text-[#1595FF]">Portfólio LPs</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-base">
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
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-base">
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
