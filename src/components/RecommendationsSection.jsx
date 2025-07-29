import React, { useState } from 'react';

function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const recommendations = [
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
  ];

  // Navigation functions
  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
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

        {/* Recommendations Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

                    {/* Cards Container */}
          <div className="flex justify-center overflow-hidden px-16">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(calc(50% - ${(currentIndex * 336) + 160}px))`,
                width: `${recommendations.length * 336}px`
              }}
            >
                            {recommendations.map((recommendation, index) => {
                const isActive = index === currentIndex;
                
                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-80 transition-all duration-300 ${
                      isActive ? 'scale-100' : 'scale-95 opacity-80'
                    }`}
                  >
                   <div
                     className="group relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 border border-slate-100 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                   >

                    {/* Quote Icon */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full flex items-center justify-center opacity-60">
                      <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      {/* Recommendation Text */}
                      <blockquote className="text-slate-700 text-sm leading-relaxed mb-4 italic line-clamp-4">
                        "{recommendation.content}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {recommendation.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">
                            {recommendation.name}
                          </h4>
                          <p className="text-xs text-slate-600">
                            {recommendation.role} • {recommendation.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
                               );
               })}
             </div>
           </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-emerald-500 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
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
  );
}

export default RecommendationsSection; 