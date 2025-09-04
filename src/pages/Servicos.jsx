import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  ShoppingCart, 
  Heart, 
  Monitor, 
  Users, 
  UserCheck, 
  TrendingUp, 
  Search,
  BarChart3,
  GraduationCap,
  Globe
} from 'lucide-react';

function Servicos() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const pesquisas = [
    {
      id: 'percepcao-imagem',
      titulo: 'Pesquisa de Percepção e Imagem',
      descricao: 'Entenda como sua marca, produto ou instituição é percebida pelo público.',
      quandoIndicada: 'Ideal para organizações que querem tomar decisões com base em dados reais de reputação, confiança, posicionamento e imagem de marca.',
      comoFazemos: 'Utilizamos métodos qualitativos e/ou quantitativos para identificar sentimentos, percepções e expectativas.',
      icone: Eye
    },
    {
      id: 'intencao-compra',
      titulo: 'Pesquisa de Intenção de Compra e Teste de Aceitação',
      descricao: 'Descubra o quanto o seu público está realmente disposto a comprar ou aderir a um produto, serviço ou ideia.',
      quandoIndicada: 'Ideal para empresas que estão testando novas soluções, validando ideias ou planejando lançamentos. Entender a intenção de compra ajuda a reduzir riscos e alinhar expectativas de mercado.',
      comoFazemos: 'Utilizamos métodos qualitativos e/ou quantitativos para explorar o desejo declarado, barreiras percebidas, motivadores de decisão e nível de aceitação antes do lançamento.',
      icone: ShoppingCart
    },
    {
      id: 'satisfacao-experiencia',
      titulo: 'Pesquisa de Satisfação e Experiência',
      descricao: 'Escute seus clientes, usuários ou beneficiários usando metodologias de pesquisa e abordagem empática.',
      quandoIndicada: 'Ideal para empresas que querem avaliar o grau de satisfação dos seus clientes/usuários e melhorar serviços, produtos ou políticas.',
      comoFazemos: 'Utilizamos métodos qualitativos e/ou quantitativos, como indicadores NPS, CSAT e mapeamento da jornada de experiência, para explorar a satisfação e a experiência.',
      icone: Heart
    },
    {
      id: 'teste-usabilidade',
      titulo: 'Teste de Usabilidade e Experiência Digital',
      descricao: 'Avalie se seu produto digital é intuitivo, funcional e agradável — antes de lançar (ou ajustar para novas versões).',
      quandoIndicada: 'Essencial para empresas que desenvolvem aplicativos, plataformas, e-commerces, sistemas internos ou qualquer solução digital voltada para o usuário final.',
      comoFazemos: 'Utilizamos métodos qualitativos e/ou quantitativos, além de um framework de teste de usabilidade, a fim de observar como as pessoas interagem com o seu produto e identificar pontos de fricção, dúvidas e melhorias.',
      icone: Monitor
    },
    {
      id: 'clima-cultura',
      titulo: 'Pesquisa de Clima e Cultura Organizacional',
      descricao: 'Entenda como as pessoas realmente vivem, sentem e constroem a cultura da sua organização.',
      quandoIndicada: 'Ideal para empresas em transformação cultural, processos de liderança, ESG, diversidade ou reposicionamento institucional.',
      comoFazemos: 'Utilizamos métodos qualitativos e/ou quantitativos para investigar os valores compartilhados (ou não), o nível de alinhamento entre discurso e prática, o engajamento e os pontos de tensão interna.',
      icone: Users
    },
    {
      id: 'estudo-personas',
      titulo: 'Estudo de Personas',
      descricao: 'Desenvolva perfis detalhados e realistas dos seus usuários para orientar decisões estratégicas.',
      quandoIndicada: 'Ideal para empresas que querem entender profundamente seu público-alvo, criar produtos mais alinhados às necessidades reais dos usuários e melhorar a comunicação e marketing.',
      comoFazemos: 'Utilizamos métodos qualitativos e quantitativos para criar personas baseadas em dados reais, incluindo pesquisas, entrevistas e análise comportamental.',
      icone: UserCheck
    },
    {
      id: 'analise-concorrencia',
      titulo: 'Análise de Concorrência',
      descricao: 'Entenda o posicionamento e estratégias dos seus concorrentes para identificar oportunidades de diferenciação.',
      quandoIndicada: 'Ideal para empresas que estão entrando em um novo mercado, lançando novos produtos ou querem se reposicionar estrategicamente.',
      comoFazemos: 'Utilizamos métodos de pesquisa documental, análise de produtos/serviços, entrevistas com usuários e benchmarking para mapear o ecossistema competitivo.',
      icone: TrendingUp
    },
    {
      id: 'pesquisas-demanda',
      titulo: 'Pesquisas sob demanda',
      descricao: 'Desenvolvemos pesquisas personalizadas para atender necessidades específicas do seu negócio.',
      quandoIndicada: 'Ideal para empresas com necessidades de pesquisa únicas que não se encaixam em metodologias padrão.',
      comoFazemos: 'Criamos metodologias customizadas baseadas nos objetivos específicos do cliente, combinando diferentes abordagens de pesquisa para obter insights precisos e acionáveis.',
      icone: Search
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#FF6339]/5 via-white to-[#1595FF]/5 relative">
      
      {/* Seção 1: Pesquisas */}
      <section id="pesquisas" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Elemento visual para Pesquisas */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-[#1595FF]/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-[#1595FF]" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6339] rounded-full"></div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-4">
              <span className="text-[#1595FF]">Pesquisas</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transformamos dados em insights estratégicos para seu negócio
            </p>
          </div>
          
          {/* Grid de Cards de Pesquisas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pesquisas.map((pesquisa) => {
              const IconComponent = pesquisa.icone;
              return (
                <div 
                  key={pesquisa.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Ícone */}
                    <div className="flex items-center justify-center w-12 h-12 bg-[#1595FF]/10 rounded-lg mb-4 group-hover:bg-[#1595FF]/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#1595FF]" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#282828] mb-3 leading-tight">
                      {pesquisa.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {pesquisa.descricao}
                    </p>
                  
                  {/* Conteúdo expandível */}
                  {expandedCards[pesquisa.id] && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <h4 className="font-semibold text-[#1595FF] mb-2">Quando é indicada?</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {pesquisa.quandoIndicada}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#FF6339] mb-2">Como fazemos?</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {pesquisa.comoFazemos}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Botão Ver Mais/Menos */}
                    <button
                      onClick={() => toggleCard(pesquisa.id)}
                      className="mt-4 w-full bg-[#fff3e1] text-[#282828] py-2 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-[#fff3e1]/90"
                    >
                      {expandedCards[pesquisa.id] ? 'Ver menos' : 'Ver mais'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção 2: Capacitações */}
      <section id="capacitacoes" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Elemento visual para Capacitações */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-[#FF6339]/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#FF6339]" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#1595FF] rounded-full"></div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-4">
              <span className="text-[#FF6339]">Capacitações</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos o potencial da sua equipe com conhecimento prático
            </p>
          </div>
          
          {/* Layout com Fotos e Cards */}
          <div className="max-w-6xl mx-auto">
            {/* Mobile: Pares de Foto + Card */}
            <div className="lg:hidden space-y-8">
              {/* Par 1: Individuais */}
              <div className="space-y-4">
                {/* Foto Individuais */}
                <div className="relative group">
                  <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src="/Fotos/capaindividual.png" 
                      alt="Capacitação Individual" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlay com título */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-xl">
                    <h3 className="text-white font-bold">Individuais</h3>
                  </div>
                </div>

                {/* Card Individuais */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group h-64">
                  <div className="p-8 h-full flex flex-col justify-center">
                    {/* Ícone */}
                    <div className="flex items-center justify-center w-12 h-12 bg-[#FF6339]/10 rounded-lg mb-6 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <UserCheck className="w-6 h-6 text-[#FF6339]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#282828] mb-4 leading-tight">
                      Individuais
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Para profissionais de mercado, entusiastas de pesquisa e alunos que querem aprofundar seus conhecimentos ou se preparar para mestrados acadêmicos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Par 2: Em equipe/grupos */}
              <div className="space-y-4">
                {/* Foto Em equipe/grupos */}
                <div className="relative group">
                  <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src="/Fotos/capagrupo.png" 
                      alt="Capacitação em Grupo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlay com título */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-xl">
                    <h3 className="text-white font-bold">Em equipe/grupos</h3>
                  </div>
                </div>

                {/* Card Em equipe/grupos */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group h-64">
                  <div className="p-8 h-full flex flex-col justify-center">
                    {/* Ícone */}
                    <div className="flex items-center justify-center w-12 h-12 bg-[#FF6339]/10 rounded-lg mb-6 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <Users className="w-6 h-6 text-[#FF6339]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#282828] mb-4 leading-tight">
                      Em equipe/grupos
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Para organizações que desejam fortalecer a cultura de pesquisa e transformar dados em estratégia dentro dos times.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Layout em 2 colunas */}
            <div className="hidden lg:grid grid-cols-2 gap-8">
              {/* Coluna 1: Fotos */}
              <div className="space-y-6">
                {/* Foto 1 - Individuais */}
                <div className="relative group">
                  <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src="/Fotos/capaindividual.png" 
                      alt="Capacitação Individual" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlay com título */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-xl">
                    <h3 className="text-white font-bold">Individuais</h3>
                  </div>
                </div>

                {/* Foto 2 - Em equipe/grupos */}
                <div className="relative group">
                  <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src="/Fotos/capagrupo.png" 
                      alt="Capacitação em Grupo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlay com título */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-xl">
                    <h3 className="text-white font-bold">Em equipe/grupos</h3>
                  </div>
                </div>
              </div>

              {/* Coluna 2: Cards de Conteúdo */}
              <div className="space-y-6">
                {/* Card Individuais */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group h-64">
                  <div className="p-8 h-full flex flex-col justify-center">
                    {/* Ícone */}
                    <div className="flex items-center justify-center w-12 h-12 bg-[#FF6339]/10 rounded-lg mb-6 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <UserCheck className="w-6 h-6 text-[#FF6339]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#282828] mb-4 leading-tight">
                      Individuais
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Para profissionais de mercado, entusiastas de pesquisa e alunos que querem aprofundar seus conhecimentos ou se preparar para mestrados acadêmicos.
                    </p>
                  </div>
                </div>

                {/* Card Em equipe/grupos */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group h-64">
                  <div className="p-8 h-full flex flex-col justify-center">
                    {/* Ícone */}
                    <div className="flex items-center justify-center w-12 h-12 bg-[#FF6339]/10 rounded-lg mb-6 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                      <Users className="w-6 h-6 text-[#FF6339]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#282828] mb-4 leading-tight">
                      Em equipe/grupos
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Para organizações que desejam fortalecer a cultura de pesquisa e transformar dados em estratégia dentro dos times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Destaque especial */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#FF6339]/5 to-[#1595FF]/5 rounded-xl p-8 border border-gray-100">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-8 h-8 bg-[#FF6339] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✨</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Aqui, você aprende a aplicar conceitos e métodos de forma prática, saindo com ferramentas reais para usar no dia a dia — seja em projetos acadêmicos ou no mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Landing Pages Orientadas por Dados */}
      <section id="landing-pages" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Elemento visual para Landing Pages */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1595FF]/10 to-[#FF6339]/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-[#1595FF]" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6339] rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#1595FF] rounded-full"></div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-4">
              <span className="text-[#1595FF]">Landing Pages</span>
              <span className="block text-[#FF6339]">orientadas por dados</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Criamos páginas de conversão baseadas em evidências e otimizadas para resultados
            </p>
          </div>
          
          {/* Grid de Cards de Landing Pages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* LP Simples */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-8">
                {/* Ícone */}
                <div className="flex items-center justify-center w-12 h-12 bg-[#1595FF]/10 rounded-lg mb-6 group-hover:bg-[#1595FF]/20 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-[#1595FF]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#282828] mb-4 leading-tight">
                  LP Simples
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ideal para apresentar sua empresa de forma clara e profissional.
                </p>

                {/* Lista de recursos */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1595FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Até 5 seções personalizadas (Hero, Sobre, Serviços, Depoimentos, Contato)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1595FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Design moderno e responsivo em todos os dispositivos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1595FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Otimização SEO básica (meta tags, títulos, estrutura semântica)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1595FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Integração com redes sociais (WhatsApp, Instagram, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1595FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Suporte inicial para ajustes e correções</span>
                  </li>
                </ul>

                {/* Recomendação */}
                <div className="bg-[#1595FF]/5 rounded-lg p-4 border-l-4 border-[#1595FF]">
                  <p className="text-[#1595FF] font-medium text-base">
                    Recomendado para quem precisa de uma presença digital sólida e rápida.
                  </p>
                </div>
              </div>
            </div>

            {/* LP Avançada */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-8">
                {/* Ícone */}
                <div className="flex items-center justify-center w-12 h-12 bg-[#FF6339]/10 rounded-lg mb-6 group-hover:bg-[#FF6339]/20 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-[#FF6339]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#282828] mb-4 leading-tight">
                  LP Avançada
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Além de apresentar, gera leads e oportunidades de negócio.
                </p>

                {/* Lista de recursos */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Tudo que a LP Simples inclui +</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Até 7 seções personalizadas (mais espaço para conteúdo estratégico)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Formulário de captura de leads integrado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Recebimento dos contatos no canal de preferência</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">Suporte ampliado, com acompanhamento pós-lançamento</span>
                  </li>
                </ul>

                {/* Recomendação */}
                <div className="bg-[#FF6339]/5 rounded-lg p-4 border-l-4 border-[#FF6339]">
                  <p className="text-[#FF6339] font-medium text-base">
                    Recomendado para quem quer crescer e transformar visitas em clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabela Comparativa */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4">
                Veja porque a <span className="text-[#FF6339]">LP baseada em dados</span> é melhor do que a <span className="text-[#1595FF]">convencional</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LP Convencional */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 px-6 py-4">
                  <h4 className="text-xl font-bold text-[#282828]">LP Convencional</h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Criada apenas com foco visual.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Uso de templates padronizados.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Comunicação genérica.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Pode até ficar bonita, mas não necessariamente converte.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* LP Baseada em Dados */}
              <div className="bg-white rounded-xl shadow-xl border-2 border-[#FF6339] overflow-hidden relative transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#FF6339]/15 to-[#1595FF]/15 px-6 py-4 relative">
                  {/* Badge de destaque */}
                  <div className="absolute top-2 right-2 bg-[#FF6339] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    RECOMENDADO
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#282828] pr-24">
                    LP Baseada em Dados <span className="text-[#FF6339]">(Niva)</span>
                  </h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Construída a partir de pesquisa e insights reais.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Design personalizado e estratégico.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Comunicação alinhada ao público-alvo.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#FF6339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Maior taxa de engajamento e conversão, porque fala o que deseja para quem importa.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Chamada Final */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-4">
              Pronto para <span className="text-[#1595FF]">impulsionar</span> seu negócio?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Vamos conversar sobre como nossos serviços podem ajudar você a alcançar seus objetivos
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <Link to="/contato">
                <button className="bg-[#1595FF] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1595FF]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Fale agora mesmo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Servicos;
