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
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Início
              </a>
              <a 
                href="#sobre" 
                onClick={() => handleSectionClick('sobre')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'sobre' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                onClick={() => handleSectionClick('servicos')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'servicos' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Serviços
              </a>
              <a 
                href="#portfolio" 
                onClick={() => handleSectionClick('portfolio')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'portfolio' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Portfólio
              </a>
              <a 
                href="#blog" 
                onClick={() => handleSectionClick('blog')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'blog' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Blog
              </a>
              <a 
                href="#contato" 
                onClick={() => handleSectionClick('contato')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === 'contato' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contato
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
