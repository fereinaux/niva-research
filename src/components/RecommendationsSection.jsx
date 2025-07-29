import React, { useState, useEffect } from 'react';

function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const recommendations = [
    {
      name: "Cíntia Miekusz",
      role: "Group Product Manager",
      company: "Produtos Financeiros",
      content:
        "Tive o privilégio de trabalhar com a Adrielly em projetos desafiadores e posso dizer que sua atuação como profissional de pesquisa é inspiradora. Adrielly tem uma execução impecável, sempre buscando entregar valor real para o negócio e para os usuários. Além do domínio técnico e da capacidade analítica, se destaca pela colaboração, comunicação clara e postura proativa. Recomendo fortemente para qualquer desafio na área de pesquisas — é um talento que certamente eleva o padrão dos projetos em que se envolve.",
      avatar: "CM",
      rating: 5,
    },
    {
      name: "Carla Borba",
      role: "Professora Universitária",
      company: "UFPE",
      content:
        "Adrielly é uma profissional super competente e comprometida. Trabalhamos juntas e foi um tempo maravilhoso. Ela tem muito potencial e é autônoma e independente em projetos. Com a mínima orientação ela segue e volta com a entrega dos projetos resolvida. Super recomendo",
      avatar: "CB",
      rating: 5,
    },
    {
      name: "Regina Fialho",
      role: "Especialista em Experiência do Usuário",
      company: "UX Specialist",
      content:
        "Trabalhei com Adrielly em diversos projetos desde a universidade. Ela é uma pessoa extremamente ética, profissional e dedicada. O mix de soft e hard skills que ela possui também a tornam altamente qualificada e referência em sua área de atuação. Sobressaem-se sua atenção a detalhes, trabalho em equipe, criatividade, expertise em pesquisa e UX.",
      avatar: "RF",
      rating: 5,
    },
    {
      name: "Carol Andrade",
      role: "Group Product Manager",
      company: "frete.com",
      content:
        "Delly é uma pesquisadora sênior completa: atua na concepção da pesquisa, apoiando os stakeholders no levantamento de dúvidas/hipóteses, escrita de briefing e desenho da estratégia de pesquisa; passa pela execução de diferentes métodos de pesquisa e sumariza os principais insights em apresentações valiosas que servem como documentação e podem ser consumidas por diferentes públicos. Tive o prazer de trabalhar com ela no grupo Frete.com e acompanhar de perto suas ótimas entregas!",
      avatar: "CA",
      rating: 5,
    },
    {
      name: "Júlia Piovesan",
      role: "Insights & Marketing",
      company: "Estratégia & Produto",
      content:
        "A Adrielly é uma das melhores profissionais com quem tive a chance de trabalhar. Faz tudo com muita dedicação e entrega resultados incríveis. Além disso, sempre está disposta a ajudar todos e sempre traz iniciativas inovadoras que facilitam o dia a dia de todos. Foi um prazer imenso ter ela como uma parceira de trabalho!",
      avatar: "JP",
      rating: 5,
    },
    {
      name: "Bruno Queirós",
      role: "Senior Product Designer",
      company: "frete.com",
      content:
        "A Adrielly é uma das melhores pessoas com quem já pude duplar, e eu posso provar isso destacando os principais pontos depois de trabalhar com ela nesses últimos anos: Conhecimento prático, comunicação clara, orientada a dados e parceria. Não tenho dúvida que a empresa que tiver uma profissional como ela, terá um grande valor em mãos.",
      avatar: "BQ",
      rating: 5,
    },
    {
      name: "Carla Cardoso dos Santos",
      role: "Pesquisa de Mercado",
      company: "UX Research",
      content:
        "Tive o privilégio e a felicidade de conhecer e trabalhar com a Adrielly. Ela é uma pessoa extremamente agradável de se conviver. Além de ser excelente profissional e referência nos projetos de pesquisa quali, quanti e ux. Proporciona entrega de qualidade em tudo que se propõe a fazer. Qualquer empresa estará ganhando, e muito, tendo essa pessoa incrível no time.",
      avatar: "CC",
      rating: 5,
    },
    {
      name: "Elisângela Farias",
      role: "Docente e Consultora",
      company: "Gestão & Turismo",
      content:
        "Tive o privilégio de trabalhar pesquisa com Adrielly Souza, na Universidade Federal de Pernambuco e posso afirmar que sua dedicação e competência fizeram toda diferença. No período de colaboração demonstrou criatividade, proatividade, engajamento com demais colegas e um diferencial de liderança, ao direcionar, inspirar e melhorar com assertividade atividades desafiadoras propostas pela instituição, para alcance das metas estabelecidas. Recomendo sem hesitação para qualquer desafio que ela decida enfrentar.",
      avatar: "EF",
      rating: 5,
    },
    {
      name: "Kauê Oliveira Mender",
      role: "UX Researcher",
      company: "Fretebras",
      content:
        "A Adrielly é uma das melhores profissionais com quem eu já trabalhei. Não somente pela competência, mas, também, pela postura e profissionalismo. Pró ativa, sempre disponível e capaz de lidar com prazos e projetos desafiadores. Referência em quanti, quali e teste de usabilidade. Sempre busca evoluir e apoiar ao time. Além de ser uma pessoa extremamente agradável. Qualquer empresa teria sorte em tê-la em seu time.",
      avatar: "KO",
      rating: 5,
    },
    {
      name: "Tharine Santana",
      role: "Staff Product Designer",
      company: "Stone",
      content:
        "Vejo a Adrielly como referência no quesito de dar voz ao usuário. Sua capacidade crítica faz com que ela sempre levante pontos relevantes, e sua habilidade de comunicação torna suas apresentações muito proveitosas e didáticas. É proativa, trabalha bem em equipe e possui muita disposição em compartilhar seus conhecimentos. Além disso, conviver com ela é muito fácil, sua postura é sempre positiva e acolhedora.",
      avatar: "TS",
      rating: 5,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextCard();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const nextCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToCard = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Recomendações Profissionais
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Uma carreira sólida, construída com o suporte de muitas pessoas
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Veja o que dizem sobre meu trabalho no LinkedIn e descubra como posso contribuir para o seu projeto
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevCard}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextCard}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>

                         {/* Testimonial Card */}
             <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-4 relative overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
               
               {/* Decorative Stars */}
               <div className="absolute bottom-8 right-8 opacity-20">
                 <div className="flex space-x-1">
                   {renderStars(recommendations[currentIndex].rating)}
                 </div>
               </div>
              
                             {/* Content */}
               <div className="relative z-10">
                 {/* Quote Icon */}
                 <div className="flex justify-center mb-8">
                   <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl flex items-center justify-center">
                     <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                     </svg>
                   </div>
                 </div>

                 {/* Testimonial Text */}
                 <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-12 italic">
                   "{recommendations[currentIndex].content}"
                 </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                    {recommendations[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">
                      {recommendations[currentIndex].name}
                    </h4>
                    <p className="text-slate-600">
                      {recommendations[currentIndex].role}
                    </p>
                    <p className="text-sm text-slate-500">
                      {recommendations[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 rounded-b-3xl overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / recommendations.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 scale-125 shadow-lg' 
                    : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-slate-500">
              {currentIndex + 1} de {recommendations.length} recomendações
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Quer ver mais recomendações?
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Acesse meu perfil completo no LinkedIn para ver todas as recomendações e conhecer melhor minha trajetória profissional.
              </p>
              <a
                href="https://www.linkedin.com/in/adriellysouza/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Ver perfil completo no LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default RecommendationsSection; 