import React from 'react';
import HistoriaNome from '../components/HistoriaNome';
import Valores from '../components/Valores';
import ChamadaFinalSobre from '../components/ChamadaFinalSobre';
import Footer from '../components/Footer';

function Sobre() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-r from-[#1595FF]/8 via-white to-[#1595FF]/8 relative">

      {/* Seção 1: Trajetória Delly */}
      <section id="trajetoria-delly" className="py-8 md:py-16 pb-32 md:pb-40 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-4">
              Conheça a mente por trás da
              <span className="text-[#1595FF] block">Niva Research</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma jornada de quase 10 anos transformando dados em insights estratégicos
            </p>
          </div>

          {/* Resumo */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#1595FF]">Adrielly Souza (Delly)</span> é a fundadora da Niva Research e atua há quase 10 anos no campo de pesquisas. Ao longo de sua trajetória, já conduziu projetos em diferentes contextos e desafios, passando por <span className="text-[#ff6339] font-semibold">universidades</span>, <span className="text-[#ff6339] font-semibold">órgãos públicos</span>, <span className="text-[#ff6339] font-semibold">multinacionais</span> e <span className="text-[#ff6339] font-semibold">startups</span>.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Essa diversidade de experiências trouxe não apenas repertório técnico, mas também a sensibilidade de compreender realidades distintas e transformar dados em insights estratégicos.
              </p>
            </div>

            {/* Foto da Delly */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-[#1595FF]/20">
                <img
                  src="/Fotos/delly.png"
                  alt="Adrielly Souza (Delly) - Fundadora da Niva Research"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Linha do Tempo */}
          <div className="relative">
            <h3 className="text-xl md:text-2xl font-bold text-[#282828] text-center mb-8 md:mb-12">
              10 anos de expertise comprovada em pesquisa estratégica
            </h3>


            {/* Layout Desktop - Linha central */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1595FF] to-[#1595FF]/50"></div>

            {/* Layout Mobile - Linha vertical à esquerda */}
            <div className="md:hidden absolute left-6 w-1 h-[calc(100%-2rem)] bg-gradient-to-b from-[#1595FF] to-[#1595FF]/50"></div>

            <div className="space-y-8 md:space-y-12">
              {/* 2014 */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Layout Mobile - Card à direita da linha */}
                <div className="md:hidden w-full pl-16 relative">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#1595FF] relative">
                    <div className="text-[#1595FF] font-bold text-base mb-2">2014</div>
                    <p className="text-sm text-gray-700">Aos 17 anos, Delly iniciou a sua graduação pela Universidade Federal de Pernambuco (UFPE).</p>
                  </div>
                  <div className="absolute left-[0.875rem] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1595FF] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Layout Desktop - Mantém o original */}
                <div className="hidden md:flex w-1/2 pr-8 text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1595FF]">
                    <div className="text-[#1595FF] font-bold text-lg mb-2">2014</div>
                    <p className="text-base text-gray-700">Aos 17 anos, Delly iniciou a sua graduação pela Universidade Federal de Pernambuco (UFPE).</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-[#1595FF] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="hidden md:block w-1/2 pl-8"></div>
              </div>

              {/* 2016 */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Layout Mobile - Card à direita da linha */}
                <div className="md:hidden w-full pl-16 relative">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#1595FF] relative">
                    <div className="text-[#1595FF] font-bold text-base mb-2">2016</div>
                    <p className="text-sm text-gray-700">Ainda na graduação, iniciou a carreira de pesquisadora, liderando uma pesquisa de consumo que teve abrangência nacional.</p>
                  </div>
                  <div className="absolute left-[0.875rem] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1595FF] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Layout Desktop - Mantém o original */}
                <div className="hidden md:block w-1/2 pr-8"></div>
                <div className="hidden md:block w-8 h-8 bg-[#1595FF] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="hidden md:block w-1/2 pl-8 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-[#1595FF]">
                    <div className="text-[#1595FF] font-bold text-lg mb-2">2016</div>
                    <p className="text-base text-gray-700">Ainda na graduação, iniciou a carreira de pesquisadora, liderando uma pesquisa de consumo que teve abrangência nacional.</p>
                  </div>
                </div>
              </div>

              {/* 2019 */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Layout Mobile - Card à direita da linha */}
                <div className="md:hidden w-full pl-16 relative">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#1595FF] relative">
                    <div className="text-[#1595FF] font-bold text-base mb-2">2019</div>
                    <p className="text-sm text-gray-700">Concluiu o mestrado na UFPE, onde se especializou em comportamento do consumidor e publicou diversos artigos sobre o tema.</p>
                  </div>
                  <div className="absolute left-[0.875rem] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1595FF] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Layout Desktop - Mantém o original */}
                <div className="hidden md:flex w-1/2 pr-8 text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1595FF]">
                    <div className="text-[#1595FF] font-bold text-lg mb-2">2019</div>
                    <p className="text-base text-gray-700">Concluiu o mestrado na UFPE, onde se especializou em comportamento do consumidor e publicou diversos artigos sobre o tema.</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-[#1595FF] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="hidden md:block w-1/2 pl-8"></div>
              </div>

              {/* 2020 */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Layout Mobile - Card à direita da linha */}
                <div className="md:hidden w-full pl-16 relative">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#1595FF] relative">
                    <div className="text-[#1595FF] font-bold text-base mb-2">2020</div>
                    <p className="text-sm text-gray-700">Atuou em projetos de pesquisa de impacto social para órgãos públicos, dentre eles o Ministério de Turismo.</p>
                  </div>
                  <div className="absolute left-[0.875rem] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1595FF] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Layout Desktop - Mantém o original */}
                <div className="hidden md:block w-1/2 pr-8"></div>
                <div className="hidden md:block w-8 h-8 bg-[#1595FF] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="hidden md:block w-1/2 pl-8 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-[#1595FF]">
                    <div className="text-[#1595FF] font-bold text-lg mb-2">2020</div>
                    <p className="text-base text-gray-700">Atuou em projetos de pesquisa de impacto social para órgãos públicos, dentre eles o Ministério de Turismo.</p>
                  </div>
                </div>
              </div>

              {/* 2021 - Primeiro */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Layout Mobile - Card à direita da linha */}
                <div className="md:hidden w-full pl-16 relative">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#1595FF] relative">
                    <div className="text-[#1595FF] font-bold text-base mb-2">2021</div>
                    <p className="text-sm text-gray-700">Conduziu um projeto nacional de grande impacto comercial para uma multinacional da indústria de cimento.</p>
                  </div>
                  <div className="absolute left-[0.875rem] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1595FF] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Layout Desktop - Mantém o original */}
                <div className="hidden md:flex w-1/2 pr-8 text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1595FF]">
                    <div className="text-[#1595FF] font-bold text-lg mb-2">2021</div>
                    <p className="text-base text-gray-700">Conduziu um projeto nacional de grande impacto comercial para uma multinacional da indústria de cimento.</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-[#1595FF] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="hidden md:block w-1/2 pl-8"></div>
              </div>

              {/* 2021 - Segundo */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Layout Mobile - Card à direita da linha */}
                <div className="md:hidden w-full pl-16 relative">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#1595FF] relative">
                    <div className="text-[#1595FF] font-bold text-base mb-2">2021</div>
                    <p className="text-sm text-gray-700">Foi (co)fundadora de uma mentoria focada no ensino da pesquisa acadêmica, direcionada para graduandos e pós-graduandos.</p>
                  </div>
                  <div className="absolute left-[0.875rem] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1595FF] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Layout Desktop - Mantém o original */}
                <div className="hidden md:block w-1/2 pr-8"></div>
                <div className="hidden md:block w-8 h-8 bg-[#1595FF] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="hidden md:block w-1/2 pl-8 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-[#1595FF]">
                    <div className="text-[#1595FF] font-bold text-lg mb-2">2021</div>
                    <p className="text-base text-gray-700">Foi (co)fundadora de uma mentoria focada no ensino da pesquisa acadêmica, direcionada para graduandos e pós-graduandos.</p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Layout Mobile - Card à direita da linha */}
                <div className="md:hidden w-full pl-16 relative">
                  <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#1595FF] relative">
                    <div className="text-[#1595FF] font-bold text-base mb-2">2022</div>
                    <p className="text-sm text-gray-700">Ingressou no time de UX Research de uma startup brasileira unicórnio, onde se especializou em pesquisa para produtos digitais.</p>
                  </div>
                  <div className="absolute left-[0.875rem] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#1595FF] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Layout Desktop - Mantém o original */}
                <div className="hidden md:flex w-1/2 pr-8 text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1595FF]">
                    <div className="text-[#1595FF] font-bold text-lg mb-2">2022</div>
                    <p className="text-base text-gray-700">Ingressou no time de UX Research de uma startup brasileira unicórnio, onde se especializou em pesquisa para produtos digitais.</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-[#1595FF] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                <div className="hidden md:block w-1/2 pl-8"></div>
              </div>

              {/* 2025 - Destaque especial */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Layout Mobile - Card à direita da linha */}
                <div className="md:hidden w-full pl-16 relative">
                  <div className="bg-gradient-to-r from-[#1595FF]/10 to-[#0ea5e9]/10 p-4 rounded-xl shadow-lg border-l-4 border-[#1595FF] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#1595FF] text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                      ATUAL
                    </div>
                    <div className="text-[#1595FF] font-bold text-base mb-2">2025</div>
                    <p className="text-sm text-gray-700 font-medium">Fundou a <span className="text-[#1595FF] font-bold">Niva Research</span> - transformando dados em insights estratégicos para empresas que buscam inovação e crescimento.</p>
                  </div>
                  <div className="absolute left-[0.375rem] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#1595FF] to-[#0ea5e9] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Layout Desktop - Mantém o original */}
                <div className="hidden md:block w-1/2 pr-8"></div>
                <div className="hidden md:flex w-12 h-12 bg-gradient-to-r from-[#1595FF] to-[#0ea5e9] rounded-full border-4 border-white shadow-xl flex-shrink-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="hidden md:block w-1/2 pl-8 mt-4 md:mt-0">
                  <div className="bg-gradient-to-r from-[#1595FF]/10 to-[#0ea5e9]/10 p-6 rounded-xl shadow-lg border-r-4 border-[#1595FF] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#1595FF] text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                      ATUAL
                    </div>
                    <div className="text-[#1595FF] font-bold text-lg mb-2">2025</div>
                    <p className="text-base text-gray-700 font-medium">Fundou a <span className="text-[#1595FF] font-bold">Niva Research</span> - transformando dados em insights estratégicos para empresas que buscam inovação e crescimento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: História do Nome */}
      <HistoriaNome />

      {/* Seção 3: Valores */}
      <Valores />

      {/* Seção 4: Chamada Final */}
      <ChamadaFinalSobre />
      <Footer />
    </div>
  );
}

export default Sobre;
