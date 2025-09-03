import React, { useState } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="/Logos/logooficial.png" 
              alt="niva RESEARCH" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#inicio" 
                onClick={() => handleSectionClick('inicio')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'inicio' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Início
              </a>
              <a 
                href="#sobre" 
                onClick={() => handleSectionClick('sobre')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'sobre' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                onClick={() => handleSectionClick('servicos')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'servicos' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Serviços
              </a>
              <a 
                href="#portfolio" 
                onClick={() => handleSectionClick('portfolio')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'portfolio' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Portfólio
              </a>
              <a 
                href="#blog" 
                onClick={() => handleSectionClick('blog')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'blog' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Blog
              </a>
              <a 
                href="#contato" 
                onClick={() => handleSectionClick('contato')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'contato' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Contato
              </a>
              <button className="ml-4 px-6 py-2 bg-[#FF6339] text-white text-sm font-medium rounded-lg hover:bg-[#FF6339]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Dê o primeiro passo
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
