import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Função para scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  // Função para scroll suave para uma seção específica
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Função combinada para fechar menu mobile e fazer scroll
  const handleNavigation = () => {
    closeMobileMenu();
    scrollToTop();
  };

  // Função para navegação com scroll para seção específica
  const handleSectionNavigation = (pageKey, sectionId) => {
    closeMobileMenu();
    
    // Tratamento especial para a página inicial (inicio)
    if (pageKey === 'inicio') {
      // Se não estamos na página inicial, navegar primeiro
      if (location.pathname !== '/') {
        navigate(`/#${sectionId}`);
        // Aguardar a navegação e depois fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 500);
      } else {
        // Se já estamos na página inicial, apenas fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    } else if (pageKey === 'sobre') {
      // Tratamento especial para a página sobre
      if (location.pathname !== '/sobre') {
        navigate(`/sobre#${sectionId}`);
        // Aguardar a navegação e depois fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 500);
      } else {
        // Se já estamos na página sobre, apenas fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    } else if (pageKey === 'servicos') {
      // Tratamento especial para a página servicos
      if (location.pathname !== '/servicos') {
        navigate(`/servicos#${sectionId}`);
        // Aguardar a navegação e depois fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 500);
      } else {
        // Se já estamos na página servicos, apenas fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    } else if (pageKey === 'portfolio') {
      // Tratamento especial para a página portfolio
      if (location.pathname !== '/portfolio') {
        navigate(`/portfolio#${sectionId}`);
        // Aguardar a navegação e depois fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 500);
      } else {
        // Se já estamos na página portfolio, apenas fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    } else {
      // Para outras páginas, manter o comportamento original
      if (location.pathname !== `/${pageKey}`) {
        // Usar navigate para mudar de página
        navigate(`/${pageKey}#${sectionId}`);
        // Aguardar a navegação e depois fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 500);
      } else {
        // Se já estamos na página correta, apenas fazer scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    }
  };

  // Funções para controlar dropdowns
  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Funções para controlar dropdowns mobile
  const handleMobileDropdownClick = (dropdown) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  // Dados das seções de cada página
  const pageSections = {
    inicio: [
      { name: 'Geral', id: 'inicio' },
      { name: 'Resumo', id: 'resumo-servicos' },
      { name: 'Nossos números', id: 'big-numbers' },
      { name: 'Depoimentos', id: 'depoimentos' }
    ],
    sobre: [
      { name: 'A fundadora', id: 'trajetoria-delly' },
      { name: 'Nossa história', id: 'historia-nome' },
      { name: 'Nossos valores', id: 'valores' }
    ],
    servicos: [
      { name: 'Pesquisas', id: 'pesquisas' },
      { name: 'Capacitações', id: 'capacitacoes' },
      { name: 'Landing Pages', id: 'landing-pages' }
    ],
    portfolio: [
      { name: 'Portfólio Pesquisas', id: 'portfolio-pesquisas' },
      { name: 'Portfólio Capacitações', id: 'portfolio-capacitacoes' },
      { name: 'Portfólio Landing Pages', id: 'portfolio-landing-pages' }
    ]
  };

  // Componente para renderizar dropdown desktop
  const renderDropdown = (pageKey, pageName) => {
    const sections = pageSections[pageKey];
    if (!sections) return null;

    return (
      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
        {sections.map((section, index) => {
          // Tratamento especial para páginas específicas
          let linkTo;
          if (pageKey === 'inicio') {
            linkTo = `/#${section.id}`;
          } else if (pageKey === 'sobre') {
            linkTo = `/sobre#${section.id}`;
          } else if (pageKey === 'servicos') {
            linkTo = `/servicos#${section.id}`;
          } else if (pageKey === 'portfolio') {
            linkTo = `/portfolio#${section.id}`;
          } else {
            linkTo = `/${pageKey}#${section.id}`;
          }
          
          return (
            <Link
              key={index}
              to={linkTo}
              onClick={() => handleSectionNavigation(pageKey, section.id)}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1595FF]/5 hover:text-[#1595FF] transition-all duration-200"
            >
              {section.name}
            </Link>
          );
        })}
      </div>
    );
  };

  // Componente para renderizar dropdown mobile
  const renderMobileDropdown = (pageKey) => {
    const sections = pageSections[pageKey];
    if (!sections) return null;

    return (
      <div className="ml-4 mt-2 space-y-1">
        {sections.map((section, index) => {
          // Tratamento especial para páginas específicas
          let linkTo;
          if (pageKey === 'inicio') {
            linkTo = `/#${section.id}`;
          } else if (pageKey === 'sobre') {
            linkTo = `/sobre#${section.id}`;
          } else if (pageKey === 'servicos') {
            linkTo = `/servicos#${section.id}`;
          } else if (pageKey === 'portfolio') {
            linkTo = `/portfolio#${section.id}`;
          } else {
            linkTo = `/${pageKey}#${section.id}`;
          }
          
          return (
            <Link
              key={index}
              to={linkTo}
              onClick={() => handleSectionNavigation(pageKey, section.id)}
              className="block px-3 py-2 text-sm text-gray-600 hover:text-[#1595FF] hover:bg-gray-50 rounded-md transition-all duration-200"
            >
              {section.name}
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={scrollToTop}>
              <img 
                src="/Logos/logooficial.png" 
                alt="niva RESEARCH" 
                className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6 xl:space-x-8">
              {/* Início */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('inicio')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === '/' 
                      ? 'bg-[#1595FF] text-white' 
                      : 'text-[#282828] hover:text-[#1595FF]'
                  }`}
                >
                  Início
                </Link>
                {activeDropdown === 'inicio' && renderDropdown('inicio', 'Início')}
              </div>

              {/* Sobre */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('sobre')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/sobre" 
                  onClick={scrollToTop}
                  className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === '/sobre' 
                      ? 'bg-[#1595FF] text-white' 
                      : 'text-[#282828] hover:text-[#1595FF]'
                  }`}
                >
                  Sobre
                </Link>
                {activeDropdown === 'sobre' && renderDropdown('sobre', 'Sobre')}
              </div>

              {/* Serviços */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('servicos')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/servicos" 
                  onClick={scrollToTop}
                  className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === '/servicos' 
                      ? 'bg-[#1595FF] text-white' 
                      : 'text-[#282828] hover:text-[#1595FF]'
                  }`}
                >
                  Serviços
                </Link>
                {activeDropdown === 'servicos' && renderDropdown('servicos', 'Serviços')}
              </div>

              {/* Portfólio */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('portfolio')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/portfolio" 
                  onClick={scrollToTop}
                  className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === '/portfolio' 
                      ? 'bg-[#1595FF] text-white' 
                      : 'text-[#282828] hover:text-[#1595FF]'
                  }`}
                >
                  Portfólio
                </Link>
                {activeDropdown === 'portfolio' && renderDropdown('portfolio', 'Portfólio')}
              </div>

              {/* Contato */}
              <Link 
                to="/contato" 
                onClick={scrollToTop}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/contato' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Contato
              </Link>
              <Link to="/contato" onClick={scrollToTop}>
                <button className="ml-4 px-4 xl:px-6 py-2 bg-[#FF6339] text-white text-sm font-semibold rounded-lg hover:bg-[#FF6339]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Dê o primeiro passo
                </button>
              </Link>
            </div>
          </nav>

          {/* Mobile CTA Button and Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* CTA Button - Always visible on mobile */}
            <Link to="/contato" onClick={handleNavigation}>
              <button className="px-3 py-2 bg-[#FF6339] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#FF6339]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Dê o primeiro passo
              </button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#282828] hover:text-[#1595FF] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1595FF] transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {/* Início */}
            <div>
              <button
                onClick={() => handleMobileDropdownClick('inicio')}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center justify-between ${
                  location.pathname === '/' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
                }`}
              >
                Início
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileDropdown === 'inicio' ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMobileDropdown === 'inicio' && renderMobileDropdown('inicio')}
            </div>

            {/* Sobre */}
            <div>
              <button
                onClick={() => handleMobileDropdownClick('sobre')}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center justify-between ${
                  location.pathname === '/sobre' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
                }`}
              >
                Sobre
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileDropdown === 'sobre' ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMobileDropdown === 'sobre' && renderMobileDropdown('sobre')}
            </div>

            {/* Serviços */}
            <div>
              <button
                onClick={() => handleMobileDropdownClick('servicos')}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center justify-between ${
                  location.pathname === '/servicos' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
                }`}
              >
                Serviços
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileDropdown === 'servicos' ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMobileDropdown === 'servicos' && renderMobileDropdown('servicos')}
            </div>

            {/* Portfólio */}
            <div>
              <button
                onClick={() => handleMobileDropdownClick('portfolio')}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center justify-between ${
                  location.pathname === '/portfolio' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
                }`}
              >
                Portfólio
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileDropdown === 'portfolio' ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMobileDropdown === 'portfolio' && renderMobileDropdown('portfolio')}
            </div>

            {/* Contato */}
            <Link 
              to="/contato" 
              onClick={handleNavigation}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === '/contato' 
                  ? 'bg-[#1595FF] text-white' 
                  : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
              }`}
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
