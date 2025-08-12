import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// JourneyStep Component - New Design
function JourneyStep({ number, title, description, icon, color }) {
  const colorSchemes = {
    emerald: {
      primary: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700'
    },
    teal: {
      primary: 'from-teal-500 to-cyan-500',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-700'
    },
    cyan: {
      primary: 'from-cyan-500 to-blue-500',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-700'
    },
    blue: {
      primary: 'from-blue-500 to-indigo-500',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700'
    },
    indigo: {
      primary: 'from-indigo-500 to-purple-500',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700'
    },
    purple: {
      primary: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700'
    },
    pink: {
      primary: 'from-pink-500 to-rose-500',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      text: 'text-pink-700'
    },
    rose: {
      primary: 'from-rose-500 to-red-500',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-700'
    }
  };

  const scheme = colorSchemes[color];

  return (
    <div className="group h-full">
      {/* Main Card - Fixed Height */}
      <div className={`${scheme.bg} rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border ${scheme.border} shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${scheme.primary} rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {number}
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 mb-3 md:mb-4 text-lg md:text-xl leading-tight group-hover:text-slate-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200/50">
          <div className={`w-full h-2 bg-gradient-to-r ${scheme.primary} rounded-full group-hover:scale-x-110 transition-transform duration-500`}></div>
        </div>
      </div>
    </div>
  );
}

// ProductCard Component
function ProductCard({ title, description, when, how, icon, color }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorSchemes = {
    emerald: {
      gradient: 'from-[#3b10ff] to-[#4f46e5]',
      bg: 'from-[#f0f4ff] to-[#e0e7ff]',
      border: 'border-[#3b10ff]/30',
      text: 'text-[#1e1b4b]',
      iconBg: 'from-[#3b10ff] to-[#4f46e5]'
    },
    teal: {
      gradient: 'from-[#ff2d2b] to-[#ef4444]',
      bg: 'from-[#fef2f2] to-[#fee2e2]',
      border: 'border-[#ff2d2b]/30',
      text: 'text-[#7f1d1d]',
      iconBg: 'from-[#ff2d2b] to-[#ef4444]'
    },
    cyan: {
      gradient: 'from-[#60a5fa] to-[#3b82f6]',
      bg: 'from-[#eff6ff] to-[#dbeafe]',
      border: 'border-[#60a5fa]/30',
      text: 'text-[#1e3a8a]',
      iconBg: 'from-[#60a5fa] to-[#3b82f6]'
    },
    blue: {
      gradient: 'from-[#3b10ff] to-[#6366f1]',
      bg: 'from-[#f5f3ff] to-[#ede9fe]',
      border: 'border-[#3b10ff]/30',
      text: 'text-[#1e1b4b]',
      iconBg: 'from-[#3b10ff] to-[#6366f1]'
    },
    indigo: {
      gradient: 'from-[#ff2d2b] to-[#f87171]',
      bg: 'from-[#fef2f2] to-[#fecaca]',
      border: 'border-[#ff2d2b]/30',
      text: 'text-[#7f1d1d]',
      iconBg: 'from-[#ff2d2b] to-[#f87171]'
    },
    purple: {
      gradient: 'from-[#3b10ff] to-[#8b5cf6]',
      bg: 'from-[#faf5ff] to-[#f3e8ff]',
      border: 'border-[#3b10ff]/30',
      text: 'text-[#1e1b4b]',
      iconBg: 'from-[#3b10ff] to-[#8b5cf6]'
    },
    pink: {
      gradient: 'from-[#ff2d2b] to-[#ec4899]',
      bg: 'from-[#fdf2f8] to-[#fce7f3]',
      border: 'border-[#ff2d2b]/30',
      text: 'text-[#7f1d1d]',
      iconBg: 'from-[#ff2d2b] to-[#ec4899]'
    },
    rose: {
      gradient: 'from-[#60a5fa] to-[#f59e0b]',
      bg: 'from-[#fffbeb] to-[#fef3c7]',
      border: 'border-[#60a5fa]/30',
      text: 'text-[#92400e]',
      iconBg: 'from-[#60a5fa] to-[#f59e0b]'
    }
  };

  const scheme = colorSchemes[color];

  return (
    <div className={`relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br ${scheme.bg} border ${scheme.border} shadow-xl hover:shadow-2xl transition-all duration-150 hover:scale-[1.02]`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-slate-300/30 to-slate-200/30 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-slate-300/30 to-slate-200/30 rounded-full translate-y-8 md:translate-y-12 -translate-x-8 md:-translate-x-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 md:p-6 lg:p-8">
        {/* Icon */}
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${scheme.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-100`}>
            {icon}
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3 leading-tight group-hover:text-slate-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Expandable Content */}
        <div className={`transition-all duration-150 ease-out overflow-hidden ${
          isExpanded ? 'max-h-[800px] md:max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-slate-300/50">
            {/* When */}
            <div className="bg-white/80 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/50 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2 md:mb-3 flex items-center text-base md:text-lg">
                <div className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r ${scheme.iconBg} rounded-lg flex items-center justify-center mr-2 md:mr-3 shadow-md`}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Quando é indicada?
              </h4>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                {when}
              </p>
            </div>

            {/* How */}
            <div className="bg-white/80 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/50 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2 md:mb-3 flex items-center text-base md:text-lg">
                <div className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r ${scheme.iconBg} rounded-lg flex items-center justify-center mr-2 md:mr-3 shadow-md`}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                Como fazemos?
              </h4>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                {how}
              </p>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 md:mt-6 w-full flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all duration-100 group/btn ${
            isExpanded
              ? `bg-gradient-to-r ${scheme.iconBg} text-white hover:shadow-xl hover:shadow-slate-500/25`
              : 'bg-white/90 text-slate-700 hover:bg-white hover:shadow-lg border border-slate-200'
          }`}
        >
          <span>{isExpanded ? 'Ver menos' : 'Saiba mais'}</span>
          <svg 
            className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-100 ${isExpanded ? 'rotate-180 scale-110' : 'group-hover/btn:translate-y-1'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/0 via-slate-400/0 to-slate-300/0 group-hover:from-slate-500/5 group-hover:via-slate-400/5 group-hover:to-slate-300/5 transition-all duration-150 rounded-2xl md:rounded-3xl"></div>
    </div>
  );
}

function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Section 1 - Produtos Principais */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#37322c] via-[#2a2a2a] to-[#1f1f1f] relative overflow-hidden">
        {/* Enhanced visual effects with multiple layers - same as HeroSection */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/15 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#ff2d2b]/15 to-transparent"></div>
        
        {/* Animated floating elements - same as HeroSection */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3b10ff]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#ff2d2b]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 left-32 w-32 h-32 bg-gradient-to-br from-[#60a5fa]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
        
        {/* Additional subtle shadows for depth */}
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-gradient-to-br from-[#f59e0b]/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-tl from-[#3b10ff]/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2.5s" }}></div>
        
        {/* Horizontal gradient overlay for sophistication */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3e1]/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 md:mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 border border-white/20">
                <span className="text-[#fff3e1] text-xs md:text-sm font-medium">Nossas Soluções</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#fff3e1] mb-4 md:mb-6 leading-tight">
              Conheça nossos{" "}
              <span className="bg-gradient-to-r from-[#ff2d2b] via-[#ef4444] to-[#f87171] bg-clip-text text-transparent">
                produtos
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#fff3e1]/80 max-w-4xl mx-auto px-4">
              Soluções personalizadas em pesquisa para transformar dados em insights acionáveis
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Product 1 */}
            <ProductCard
              title="Pesquisa de Percepção e Imagem"
              description="Entenda como sua marca, produto ou instituição é percebida pelo público."
              when="Ideal para organizações que querem tomar decisões com base em dados reais de reputação, confiança, posicionamento e imagem de marca."
              how="Utilizamos métodos qualitativos e/ou quantitativos para identificar sentimentos, percepções e expectativas."
              icon="🎯"
              color="emerald"
            />

            {/* Product 2 */}
            <ProductCard
              title="Pesquisa de Intenção de Compra e Teste de Aceitação"
              description="Descubra o quanto o seu público está realmente disposto a comprar ou aderir a um produto, serviço ou ideia."
              when="Ideal para empresas que estão testando novas soluções, validando ideias ou planejando lançamentos. Entender a intenção de compra ajuda a reduzir riscos e alinhar expectativas de mercado."
              how="Utilizamos métodos qualitativos e/ou quantitativos para explorar o desejo declarado, barreiras percebidas, motivadores de decisão e nível de aceitação antes do lançamento."
              icon="💡"
              color="teal"
            />

            {/* Product 3 */}
            <ProductCard
              title="Pesquisa de Satisfação e Experiência"
              description="Escute seus clientes, usuários ou beneficiários usando metodologias de pesquisa e abordagem empática."
              when="Ideal para empresas que querem avaliar o grau de satisfação dos seus clientes/usuários e melhorar serviços, produtos ou políticas."
              how="Utilizamos métodos qualitativos e/ou quantitativos, como indicadores NPS, CSAT e mapeamento da jornada de experiência, para explorar a satisfação e a experiência."
              icon="❤️"
              color="cyan"
            />

            {/* Product 4 */}
            <ProductCard
              title="Teste de Usabilidade e Experiência Digital"
              description="Avalie se seu produto digital é intuitivo, funcional e agradável — antes de lançar (ou ajustar para novas versões)."
              when="Essencial para empresas que desenvolvem aplicativos, plataformas, e-commerces, sistemas internos ou qualquer solução digital voltada para o usuário final."
              how="Utilizamos métodos qualitativos e/ou quantitativos, além de um framework de teste de usabilidade, a fim de observar como as pessoas interagem com o seu produto e identificar pontos de fricção, dúvidas e melhorias."
              icon="💻"
              color="blue"
            />

            {/* Product 5 */}
            <ProductCard
              title="Pesquisa de Clima e Cultura Organizacional"
              description="Entenda como as pessoas realmente vivem, sentem e constroem a cultura da sua organização."
              when="Ideal para empresas em transformação cultural, processos de liderança, ESG, diversidade ou reposicionamento institucional."
              how="Utilizamos métodos qualitativos e/ou quantitativos para investigar os valores compartilhados (ou não), o nível de alinhamento entre discurso e prática, o engajamento e os pontos de tensão interna."
              icon="🏢"
              color="indigo"
            />

            {/* Product 6 */}
            <ProductCard
              title="Estudos de Comportamento e Cultura"
              description="Explore hábitos, valores, crenças e padrões que moldam o comportamento das pessoas."
              when="Ideal para entidades, especialmente órgãos públicos, que desejam emergir no cotidiano do público para identificar oportunidades, tensões e necessidades — essenciais para criação de políticas públicas."
              how="Utilizamos métodos qualitativos (entrevistas em profundidade, grupos focais, etnografia ou netnografia) para emergir e entender o contexto."
              icon="🔍"
              color="purple"
            />

            {/* Product 7 */}
            <ProductCard
              title="Estudo de Personas"
              description="Desenvolva perfis detalhados e realistas dos seus usuários para orientar decisões estratégicas."
              when="Ideal para empresas que querem entender profundamente seu público-alvo, criar produtos mais alinhados às necessidades reais dos usuários e melhorar a comunicação e marketing."
              how="Utilizamos métodos qualitativos e quantitativos para criar personas baseadas em dados reais, incluindo pesquisas, entrevistas e análise comportamental."
              icon="👥"
              color="pink"
            />

            {/* Product 8 */}
            <ProductCard
              title="Análise de Concorrência"
              description="Entenda o posicionamento e estratégias dos seus concorrentes para identificar oportunidades de diferenciação."
              when="Ideal para empresas que estão entrando em um novo mercado, lançando novos produtos ou querem se reposicionar estrategicamente."
              how="Utilizamos métodos de pesquisa documental, análise de produtos/serviços, entrevistas com usuários e benchmarking para mapear o ecossistema competitivo."
              icon="🏆"
              color="rose"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Jornada de Pesquisa */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 md:mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-4 md:px-6 py-2 shadow-lg">
                <span className="text-white text-xs md:text-sm font-medium">Nosso Processo</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
              Não sabe como é o processo de uma{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                pesquisa? Entenda agora!
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto px-4">
              Após a contratação, essa será a nossa jornada de 10 passos juntos.
            </p>
          </div>

          {/* Journey Steps */}
          <div className="space-y-4 md:space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              <JourneyStep
                number="1"
                title="Briefing e alinhamentos"
                description="Definimos objetivos, escopo e expectativas do projeto"
                icon="📋"
                color="emerald"
              />
              <JourneyStep
                number="2"
                title="Organização de dados existentes"
                description="Levantamos e organizamos informações já disponíveis"
                icon="📊"
                color="teal"
              />
              <JourneyStep
                number="3"
                title="Planejamento metodológico"
                description="Definimos métodos, técnicas e cronograma detalhado"
                icon="🎯"
                color="cyan"
              />
              <JourneyStep
                number="4"
                title="Aprovação do plano"
                description="Validamos metodologia e cronograma com o cliente"
                icon="✅"
                color="blue"
              />
              <JourneyStep
                number="5"
                title="Elaboração de instrumentos"
                description="Criamos roteiros, questionários e materiais de pesquisa"
                icon="✍️"
                color="indigo"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              <JourneyStep
                number="6"
                title="Recrutamento de participantes"
                description="Selecionamos e convidamos pessoas para a pesquisa"
                icon="👥"
                color="purple"
              />
              <JourneyStep
                number="7"
                title="Campo para coleta de dados"
                description="Realizamos entrevistas, aplicamos questionários"
                icon="🎤"
                color="pink"
              />
              <JourneyStep
                number="8"
                title="Análise dos dados"
                description="Processamos e interpretamos as informações coletadas"
                icon="🔍"
                color="rose"
              />
              <JourneyStep
                number="9"
                title="Elaboração da entrega"
                description="Preparamos relatórios e apresentações finais"
                icon="📝"
                color="emerald"
              />
              <JourneyStep
                number="10"
                title="Entrega final"
                description="Apresentamos resultados e insights acionáveis"
                icon="🎉"
                color="teal"
              />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-emerald-100">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">
                Pronto para começar sua jornada?
              </h3>
              <p className="text-slate-600 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Cada passo é cuidadosamente planejado para garantir resultados de qualidade e insights valiosos para sua organização.
              </p>
              <Link to="/contato" className="inline-flex items-center px-4 md:px-6 lg:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Produtos Extras */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 md:mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-4 md:px-6 py-2 shadow-lg">
                <span className="text-white text-xs md:text-sm font-medium">Serviços Complementares</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
              Serviços que{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                potencializam seus resultados
              </span>
            </h2>
          </div>

          {/* Extra Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Workshop */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    Workshops para sensibilização
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Sessões interativas para sensibilizar equipes com os insights obtidos nas pesquisas.
                  </p>
                </div>
              </div>
            </div>

            {/* Relatórios */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-teal-700 transition-colors duration-300">
                    Criação de relatórios visuais e executivos
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Relatórios customizados com visualizações atrativas e linguagem executiva.
                  </p>
                </div>
              </div>
            </div>

            {/* Formação */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                    Formação para equipes em cultura de pesquisa
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Programas para desenvolver uma cultura organizacional baseada em evidências.
                  </p>
                </div>
              </div>
            </div>

            {/* Capacitação */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    Capacitação técnica para times de pesquisa
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Treinamentos especializados em metodologias e técnicas de pesquisa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Chamada Final */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-36 md:w-48 h-36 md:h-48 bg-teal-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-block mb-6 md:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 border border-white/20">
                <span className="text-emerald-200 text-xs md:text-sm font-medium">Vamos conversar?</span>
              </div>
            </div>
            
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Pronto para transformar{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                dados em insights?
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Nossa equipe está pronta para entender suas necessidades e criar soluções personalizadas que gerem resultados reais para sua organização.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <Link to="/contato" className="group relative inline-flex items-center justify-center px-4 md:px-6 lg:px-8 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold text-emerald-600 bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Agendar uma conversa
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
              <p className="text-emerald-200 text-base md:text-lg">
                Resposta em até 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products; 