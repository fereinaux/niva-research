import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);

  const openImageModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
    setZoomLevel(1); // Reset zoom when opening
    setImagePosition({ x: 0, y: 0 }); // Reset position when opening
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setZoomLevel(1); // Reset zoom when closing
    setImagePosition({ x: 0, y: 0 }); // Reset position when closing
    setTouchStart(null); // Reset touch state when closing
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 10)); // Max zoom 10x
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.25)); // Min zoom 0.25x
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 }); // Reset position when resetting zoom
  };

  const moveImage = (direction) => {
    const moveDistance = 50; // Pixels to move per click
    
    setImagePosition(prev => {
      let newX = prev.x;
      let newY = prev.y;
      
      switch(direction) {
        case 'up':
          newY = prev.y + moveDistance;
          break;
        case 'down':
          newY = prev.y - moveDistance;
          break;
        case 'left':
          newX = prev.x + moveDistance;
          break;
        case 'right':
          newX = prev.x - moveDistance;
          break;
        default:
          break;
      }
      
      return { x: newX, y: newY };
    });
  };

  const resetPosition = () => {
    setImagePosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const deltaX = e.deltaX;
    const deltaY = e.deltaY;
    
    setImagePosition(prev => ({
      x: prev.x - deltaX * 0.5,
      y: prev.y - deltaY * 0.5
    }));
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!touchStart) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    
    setImagePosition(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));
    
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-t from-[#fff3e1]/30 via-white to-[#1595FF]/10 relative">
      
      {/* Seção 1: Portfólio Pesquisa */}
      <section id="portfolio-pesquisas" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              <span className="text-[#282828]">Portfólio</span> <span className="text-[#1595FF]">Pesquisas</span>
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
      <section id="portfolio-capacitacoes" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              <span className="text-[#282828]">Portfólio</span> <span className="text-[#1595FF]">Capacitações</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-base">
              Veja alguns resultados de capacitações realizadas em 10 anos de trajetória
            </p>
          </div>
          
          {/* Grid de Casos de Capacitação */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Caso 1: Projeto de Conclusão de Curso */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group animate-fade-in-up hover:scale-105 hover:-translate-y-2">
                <div className="p-6">
                  {/* Header com número e ícone */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FF6339] to-[#FF8A65] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">01</span>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1595FF]/10 to-[#1595FF]/20 rounded-lg flex items-center justify-center group-hover:from-[#1595FF]/20 group-hover:to-[#1595FF]/30 group-hover:rotate-12 transition-all duration-300">
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
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group animate-fade-in-up hover:scale-105 hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
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
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group animate-fade-in-up hover:scale-105 hover:-translate-y-2" style={{animationDelay: '0.4s'}}>
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
      <section id="portfolio-landing-pages" className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-2">
              <span className="text-[#282828]">Portfólio</span> <span className="text-[#1595FF]">Landing Pages</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-base">
              Páginas profissionais e institucionais criadas com base em dados e insights reais
            </p>
          </div>
          
          {/* Grid de Landing Pages */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* LP 1: Communicare */}
              <div className="group cursor-pointer" onClick={() => openImageModal('/LPs/communicare.png', 'Landing Page Communicare')}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Preview da LP */}
                  <div className="relative overflow-hidden">
                    <img 
                      src="/LPs/communicare.png" 
                      alt="Landing Page Communicare" 
                      className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-6 h-6 text-[#1595FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Informações da LP */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#FF6339] to-[#FF8A65] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">01</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#282828] mb-2">Communicare</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Landing page institucional para uma clínica interdisciplinar especializada em desenvolvimento infanto juvenil.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#1595FF] font-semibold bg-[#1595FF]/10 px-3 py-1 rounded-full">
                        Saúde
                      </span>
                      <span className="text-xs text-gray-500">Clique para ver completa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LP 2: Souza Comex */}
              <div className="group cursor-pointer" onClick={() => openImageModal('/LPs/souzacomex.png', 'Landing Page Souza Comex')}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Preview da LP */}
                  <div className="relative overflow-hidden">
                    <img 
                      src="/LPs/souzacomex.png" 
                      alt="Landing Page Souza Comex" 
                      className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-6 h-6 text-[#1595FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Informações da LP */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#FF6339] to-[#FF8A65] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">02</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#282828] mb-2">Souza Comex</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Página profissional para uma empresa de comércio exterior, que atua com documentação e processos aduaneiros.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#FF6339] font-semibold bg-[#FF6339]/10 px-3 py-1 rounded-full">
                        Aduaneiro
                      </span>
                      <span className="text-xs text-gray-500">Clique para ver completa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LP 3: SysIgreja */}
              <div className="group cursor-pointer" onClick={() => openImageModal('/LPs/sysigreja.png', 'Landing Page SysIgreja')}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Preview da LP */}
                  <div className="relative overflow-hidden">
                    <img 
                      src="/LPs/sysigreja.png" 
                      alt="Landing Page SysIgreja" 
                      className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-6 h-6 text-[#1595FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Informações da LP */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#FF6339] to-[#FF8A65] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">03</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#282828] mb-2">SysIgreja</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Landing page institucional desenvolvida para uma empresa de software, especialista em gestão de eventos e instituições cristãs.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#1595FF] font-semibold bg-[#1595FF]/10 px-3 py-1 rounded-full">
                        Software
                      </span>
                      <span className="text-xs text-gray-500">Clique para ver completa</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
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
          
          {/* CTA */}
          <div className="text-center">
            <Link to="/contato">
              <button className="bg-gradient-to-r from-[#1595FF] to-[#0D7AE5] hover:from-[#0D7AE5] hover:to-[#1595FF] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="text-lg">Comece agora mesmo</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal de Visualização de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Controles do Modal */}
            <div className="absolute -top-12 right-0 flex items-center gap-3 z-10">
              {/* Controles de Navegação */}
              <div className="flex flex-col items-center gap-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                {/* Controle Superior */}
                <button
                  onClick={(e) => { e.stopPropagation(); moveImage('up'); }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                  title="Mover para cima"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                
                {/* Controles Laterais */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); moveImage('left'); }}
                    className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                    title="Mover para esquerda"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Botão Central - Reset Position */}
                  <button
                    onClick={(e) => { e.stopPropagation(); resetPosition(); }}
                    className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                    title="Centralizar imagem"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); moveImage('right'); }}
                    className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                    title="Mover para direita"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* Controle Inferior */}
                <button
                  onClick={(e) => { e.stopPropagation(); moveImage('down'); }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                  title="Mover para baixo"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Controles de Zoom */}
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                <button
                  onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                  disabled={zoomLevel <= 0.25}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                
                <span className="text-white text-sm font-medium min-w-[3rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                
                <button
                  onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                  disabled={zoomLevel >= 10}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                
                <button
                  onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                  className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
                  title="Reset Zoom"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
              
              {/* Botão de fechar */}
              <button
                onClick={closeImageModal}
                className="text-white hover:text-gray-300 transition-colors duration-200 p-2 bg-black/50 backdrop-blur-sm rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Imagem */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-full max-h-[90vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain transition-transform duration-200 ease-in-out"
                style={{ 
                  transform: `scale(${zoomLevel}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                  transformOrigin: 'center center'
                }}
                onClick={(e) => e.stopPropagation()}
                onWheel={handleWheel}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Portfolio;
