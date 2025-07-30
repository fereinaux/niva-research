import React, { useState } from 'react';

// ProductCard Component
function ProductCard({ title, description, when, how, icon, color }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorSchemes = {
    emerald: {
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      bg: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      iconBg: 'from-emerald-500 to-teal-500'
    },
    teal: {
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      bg: 'from-teal-50 to-cyan-50',
      border: 'border-teal-200',
      text: 'text-teal-700',
      iconBg: 'from-teal-500 to-cyan-500'
    },
    cyan: {
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      bg: 'from-cyan-50 to-blue-50',
      border: 'border-cyan-200',
      text: 'text-cyan-700',
      iconBg: 'from-cyan-500 to-blue-500'
    },
    blue: {
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      bg: 'from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      iconBg: 'from-blue-500 to-indigo-500'
    },
    indigo: {
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bg: 'from-indigo-50 to-purple-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
      iconBg: 'from-indigo-500 to-purple-500'
    },
    purple: {
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bg: 'from-purple-50 to-pink-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      iconBg: 'from-purple-500 to-pink-500'
    }
  };

  const scheme = colorSchemes[color];

  return (
    <div className={`relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br ${scheme.bg} border ${scheme.border} shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Icon and Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-16 h-16 bg-gradient-to-r ${scheme.iconBg} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            {icon}
          </div>
          <div className={`px-3 py-1 bg-gradient-to-r ${scheme.iconBg} rounded-full text-white text-xs font-semibold shadow-md`}>
            {color.toUpperCase()}
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-slate-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            {description}
          </p>
        </div>

        {/* Expandable Content */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-6 pt-6 border-t border-slate-200/50">
            {/* When */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center text-lg">
                <div className={`w-8 h-8 bg-gradient-to-r ${scheme.iconBg} rounded-lg flex items-center justify-center mr-3 shadow-md`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Quando é indicada?
              </h4>
              <p className="text-slate-700 leading-relaxed">
                {when}
              </p>
            </div>

            {/* How */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center text-lg">
                <div className={`w-8 h-8 bg-gradient-to-r ${scheme.iconBg} rounded-lg flex items-center justify-center mr-3 shadow-md`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                Como fazemos?
              </h4>
              <p className="text-slate-700 leading-relaxed">
                {how}
              </p>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-6 w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 group/btn ${
            isExpanded
              ? `bg-gradient-to-r ${scheme.iconBg} text-white hover:shadow-xl hover:shadow-emerald-500/25`
              : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-lg border border-slate-200/50'
          }`}
        >
          <span>{isExpanded ? 'Ver menos' : 'Saiba mais'}</span>
          <svg 
            className={`w-6 h-6 transition-all duration-500 ${isExpanded ? 'rotate-180 scale-110' : 'group-hover/btn:translate-y-1'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:via-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-700 rounded-3xl"></div>
    </div>
  );
}

function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Section 1 - Produtos Principais */}
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
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
                <span className="text-emerald-200 text-sm font-medium">Nossas Soluções</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Conheça nossos{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                produtos
              </span>
            </h1>
            
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto">
              Soluções personalizadas em pesquisa para transformar dados em insights acionáveis
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Seção 2
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Em construção
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Seção 3
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Em construção
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seção 4
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Em construção
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products; 