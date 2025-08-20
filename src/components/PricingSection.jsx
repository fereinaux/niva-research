import React from 'react';
import { Link } from 'react-router-dom';

function PricingSection() {
  return (
    <div className="min-h-screen bg-[#fafaf0] relative overflow-hidden pt-20">
      {/* Clean background */}
      
      {/* Main Content */}
      <div className="relative z-10 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Logo */}
          <div className="text-center mb-12">
            {/* Cabeçalho da Empresa */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center justify-end mb-6">
                {/* Informações da Empresa */}
                <div className="text-right text-sm text-gray-600">
                  <div className="font-semibold text-gray-800 mb-1">NIVA RESEARCH</div>
                  <div>Por Adrielly Souza & Felipe Reinaux</div>
                  <div className="mt-2">
                    <div>📧 dellysouzas@gmail.com</div>
                    <div>📱 (81) 99743-6143</div>
                    <div>🌐 www.nivaresearch.com</div>
                  </div>
                </div>
              </div>
              
              {/* Linha separadora */}
              <div className="border-b-2 border-[#3b10ff]/30 mb-6"></div>
              
              {/* Informações do Orçamento */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div className="text-left mb-2 md:mb-0">
                  <div className="text-sm text-gray-600">Data: <span className="font-medium text-gray-800">15/01/2025</span></div>
                  <div className="text-sm text-gray-800">Orçamento Nº: <span className="font-medium text-gray-800">#2025-015</span></div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Validade: <span className="font-medium text-gray-800">30 dias</span></div>
                  <div className="text-sm text-gray-600">Forma de Pagamento: <span className="font-medium text-gray-800">PIX ou Cartão</span></div>
                </div>
              </div>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                Orçamento LP: Communicare Clínica
              </h1>
              <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-[#3b10ff]/20 to-[#60a5fa]/20 rounded-full border border-[#3b10ff]/40 mb-4">
                <span className="text-lg md:text-xl text-[#3b10ff] font-bold">
                  ✨ 100% Personalizada ✨
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transforme sua presença digital com landing pages modernas, responsivas e 
                otimizadas para conversão. Cada projeto é único e feito sob medida.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* LP Simples */}
            <div className="group relative bg-gradient-to-br from-white via-gray-50/50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#3b10ff]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3b10ff]/20 shadow-lg">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3b10ff] to-[#4f46e5] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">LP Simples</h3>
                <p className="text-gray-600">Ideal para apresentar os produtos/serviços da empresa</p>
              </div>

              {/* Price */}
                              <div className="text-center mb-8 p-6 bg-gradient-to-br from-gray-50 via-[#3b10ff]/15 to-gray-100 rounded-xl border border-[#3b10ff]/25">
                <div className="text-4xl font-bold text-[#3b10ff] mb-2">R$ 750</div>
                <div className="text-gray-600 font-medium">Prazo: 5 dias úteis</div>
              </div>

              {/* Services Breakdown */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b border-gray-200 pb-2">SERVIÇOS INCLUSOS</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3b10ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Design responsivo e moderno</span>
                      <p className="text-sm text-gray-500 mt-1">Layout adaptável para todos os dispositivos com design atual</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3b10ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Até 5 seções personalizadas</span>
                      <p className="text-sm text-gray-500 mt-1">Hero, sobre, serviços, depoimentos e contato</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3b10ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Otimização para SEO básico</span>
                      <p className="text-sm text-gray-500 mt-1">Meta tags, títulos e estrutura semântica</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3b10ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Integração com redes sociais</span>
                      <p className="text-sm text-gray-500 mt-1">Botões de redirect para WhatsApp, Instagram, etc</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#3b10ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Suporte por 10 dias</span>
                      <p className="text-sm text-gray-500 mt-1">Ajustes e correções após o lançamento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LP Avançada */}
            <div className="group relative bg-gradient-to-br from-white via-[#3b10ff]/8 to-white rounded-2xl p-8 border-2 border-[#3b10ff]/40 hover:border-[#3b10ff]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3b10ff]/30 shadow-lg">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Mais Popular
                </div>
              </div>

              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#ff2d2b] to-[#ef4444] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">LP Avançada</h3>
                <p className="text-gray-600">Além de apresentar serviços, ideal para gerar leads</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8 p-6 bg-gradient-to-br from-[#3b10ff]/25 via-[#3b10ff]/20 to-[#3b10ff]/15 rounded-xl border border-[#3b10ff]/40">
                <div className="text-4xl font-bold text-[#3b10ff] mb-2">R$ 1.000</div>
                <div className="text-gray-600 font-medium">Prazo: 7 dias úteis</div>
              </div>

              {/* Services Breakdown */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b border-gray-200 pb-2">SERVIÇOS INCLUSOS</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ff2d2b] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Tudo da LP Simples +</span>
                      <p className="text-sm text-gray-500 mt-1">Todos os serviços do pacote básico incluídos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ff2d2b] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Até 7 seções personalizadas</span>
                      <p className="text-sm text-gray-500 mt-1">Mais espaço para conteúdo e conversão</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ff2d2b] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Formulário de captura de leads</span>
                      <p className="text-sm text-gray-500 mt-1">Sistema profissional para coleta de contatos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ff2d2b] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Controle de leads</span>
                      <p className="text-sm text-gray-500 mt-1">Ambiente personalizado para acessar seus leads</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#ff2d2b] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Suporte por 30 dias</span>
                      <p className="text-sm text-gray-500 mt-1">Suporte e manutenção</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">O que está incluído em ambos os pacotes?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-gray-700">Design exclusivo e personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-gray-700">Código limpo e otimizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-gray-700">Testes em múltiplos dispositivos</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-gray-700">Entrega em até 24h após aprovação</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-gray-700">Revisões durante o projeto</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-gray-700">Backup e segurança</span>
                </div>

              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-gray-700">Suporte técnico especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-gray-700">Domínio incluso por 1 ano *</span>
                </div>
              </div>
            </div>
            
            {/* Important Note about Domain */}
            <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <div>
                  <p className="text-sm text-amber-800 font-medium">
                    <span className="font-semibold">Importante:</span> Após 1 ano (a contar da data do pagamento da entrega final), o domínio deve ser renovado com a Niva Research. 
                    Caso contrário, o site poderá sair do ar. Entraremos em contato com 30 dias de antecedência para renovação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Services */}
          <div className="bg-gradient-to-br from-white via-[#3b10ff]/15 to-white rounded-2xl p-8 border-2 border-[#3b10ff]/40 shadow-lg max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Serviços Extras Disponíveis</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Hospedagem Mensal */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-[#3b10ff]/40">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3b10ff] to-[#60a5fa] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">Hospedagem Mensal</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#3b10ff]">R$ 100</div>
                        <div className="text-sm text-gray-600">por mês</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>O que é uma hospedagem?</strong> É como "alugar um espaço" na internet para seu site ficar disponível 24h por dia. 
                      Sem hospedagem, sua landing page não pode ser acessada pelos visitantes. Este valor pode ficar por conta da empresa contratante, 
                      de forma que a Niva não se responsabilizará por isso.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-[#3b10ff]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Disponível para contratar a qualquer momento</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ajustes e Manutenções Extras */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-[#3b10ff]/40">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff2d2b] to-[#ef4444] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">Ajustes e Manutenções Extras</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#ff2d2b]">A combinar</div>
                        <div className="text-sm text-gray-600">sob consulta</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong>O que são ajustes e manutenções extras?</strong> São as modificações, correções e atualizações solicitadas 
                      fora do período coberto pelo plano contratado. Inclui alterações de conteúdo, ajustes de design, correções de bugs 
                      e outras modificações que não estão previstas no escopo inicial do projeto.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-[#ff2d2b]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Valor sob consulta conforme complexidade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Formas de Pagamento</h3>
            
            {/* Payment Schedule */}
            <div className="mb-8 p-6 bg-gradient-to-br from-[#3b10ff]/20 via-[#60a5fa]/15 to-[#3b10ff]/20 rounded-xl border border-[#3b10ff]/40">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Como funciona o pagamento?</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg border border-[#3b10ff]/40">
                  <div className="w-12 h-12 bg-[#3b10ff] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Início do Projeto</h5>
                  <p className="text-sm text-gray-600">50% do valor total para iniciar o desenvolvimento da sua landing page</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-[#3b10ff]/40">
                  <div className="w-12 h-12 bg-[#3b10ff] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Entrega Final</h5>
                  <p className="text-sm text-gray-600">Os outros 50% devem ser pagos no ato da entrega da LP pronta</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">PIX</h4>
                <p className="text-green-700 font-semibold text-sm">Sem taxas adicionais</p>
                <p className="text-xs text-gray-600 mt-1">Pagamento instantâneo e seguro</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cartão de Crédito</h4>
                <p className="text-blue-700 font-semibold text-sm">Com taxas da administradora</p>
                <p className="text-xs text-gray-600 mt-1">Parcelamento em até 12x</p>
              </div>
            </div>
            

          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-white via-[#3b10ff]/15 to-white rounded-2xl p-8 border-2 border-[#3b10ff]/40 shadow-lg max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Por que escolher uma LP 100% personalizada?</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#3b10ff]/50">
                    <th className="text-left py-4 px-4 text-lg font-bold text-gray-900">Características</th>
                    <th className="text-center py-4 px-4 text-lg font-bold text-[#3b10ff]">LP 100% Personalizada</th>
                    <th className="text-center py-4 px-4 text-lg font-bold text-gray-500">LP com Plataformas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-700">Design</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        ✨ Exclusivo e único
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        ⚠️ Templates limitados
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-700">Personalização</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        🎯 100% sob medida
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        🔒 Limitações da plataforma
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-700">Performance</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        ⚡ Código otimizado
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        🐌 Código desnecessário
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-700">SEO</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        📈 Estrutura semântica
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        📉 Limitações de SEO
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-700">Controle</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        🎮 Controle total
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        🚫 Dependente da plataforma
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-700">Custo a longo prazo</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        💰 Investimento único
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        💸 Taxas mensais
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-gray-500 text-sm">
            <p>© 2025 Niva Research. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection; 