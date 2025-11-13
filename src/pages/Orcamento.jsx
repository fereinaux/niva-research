import React from 'react';

function Orcamento() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho do documento */}
      <div className="bg-gradient-to-r from-[#1595FF] to-[#FF6339] text-white py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between mb-4 gap-16 md:gap-32 lg:gap-48 xl:gap-64">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">Proposta Comercial</h1>
              <p className="text-lg md:text-xl text-white opacity-95 mb-2">Desenvolvimento de Website Institucional</p>
              <p className="text-sm text-white opacity-80 max-w-2xl mb-3">Transformando sua presença digital com soluções personalizadas e resultados que fazem a diferença</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-1 w-12 bg-white opacity-60 rounded-full"></div>
                <div className="h-1 w-2 bg-white opacity-40 rounded-full"></div>
                <div className="h-1 w-2 bg-white opacity-40 rounded-full"></div>
              </div>
            </div>
            <div className="text-right flex flex-col items-end flex-shrink-0">
              <img 
                src="/Logos/nivaaaa.png" 
                alt="Niva Agência" 
                className="h-12 md:h-16 mb-3"
              />
              <div className="text-sm text-white opacity-90 space-y-0.5 text-right">
                <p className="font-semibold text-base mb-1">Niva Agência</p>
                <p>contato@nivaagencia.com</p>
                <p>(81) 99743-6143</p>
                <p>@nivaagencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-8 md:py-12">
        
        {/* Informações do Cliente */}
        <div className="mb-8 pb-6 border-b-2 border-gray-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Cliente:</p>
              <p className="text-lg font-semibold text-[#282828]">Água Mineral Santa Joana</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Provedor:</p>
              <p className="text-lg font-semibold text-[#1595FF]">Niva Agência</p>
            </div>
          </div>
        </div>

        {/* Seção 1: Escopo do Projeto */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4 pb-2 border-b-2 border-[#1595FF]">
            1. Escopo do Projeto
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Projeto de criação e desenvolvimento de landing page</strong> em <strong>WordPress + Elementor</strong>, com <strong>6 páginas</strong>, podendo ser as seguintes (como exemplo):
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">•</span>
                <span><strong>Home</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">•</span>
                <span><strong>Quem Somos</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">•</span>
                <span><strong>Produtos / Portfólio</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">•</span>
                <span><strong>Sustentabilidade / Qualidade / Certificações</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">•</span>
                <span><strong>Notícias / Blog</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">•</span>
                <span><strong>Contato</strong> (formulário + mapa + redes sociais)</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-6 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Importante:</strong> Toda parte de conteúdo (textos, fotos, vídeos, logotipos) deve ser enviada pelo cliente.
            </p>
          </div>

          <div className="bg-[#1595FF]/5 border-l-4 border-[#1595FF] p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-[#282828] mb-4">Inclui no projeto:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span>Instalação e configuração do WordPress</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span>Configuração do Elementor</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span>Estrutura visual responsiva (desktop, tablet e mobile)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span>SEO básico (meta tags, estrutura de títulos, velocidade)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span>Formulário de contato</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span>Mapa de localização</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span>Linkagem das redes sociais</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span>Treinamento rápido (guia de como editar textos e imagens)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF6339] mr-3">✓</span>
                <span><strong>Domínio</strong> (válido por 1 ano - após esse período, deve ser renovado pelo cliente)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seção 2: Processo de Início do Projeto */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4 pb-2 border-b-2 border-[#1595FF]">
            2. Processo de Início do Projeto
          </h2>
          
          <div className="bg-gradient-to-r from-[#1595FF]/10 to-[#FF6339]/10 rounded-lg p-6 mb-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              O projeto contempla uma <strong>reunião online de alinhamento e briefing</strong> do projeto. 
              Após o pagamento da primeira parcela, será criado um <strong>grupo no WhatsApp</strong> para envio de todos os documentos necessários.
            </p>
          </div>
        </section>

        {/* Seção 3: Prazo de Entrega */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4 pb-2 border-b-2 border-[#1595FF]">
            3. Prazo de Entrega
          </h2>
          
          <div className="bg-gradient-to-r from-[#1595FF]/10 to-[#FF6339]/10 rounded-lg p-6 mb-4">
            <p className="text-lg font-semibold text-[#282828] mb-2">
              Até 4 semanas após:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-6">
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">→</span>
                <span>Aprovação da proposta</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">→</span>
                <span>Entrega de todos os conteúdos (textos, fotos, vídeos, logotipos)</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#1595FF] rounded-r-lg p-6">
            <h3 className="text-lg font-semibold text-[#282828] mb-4">Cronograma de acompanhamento:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">•</span>
                <span><strong>15 dias:</strong> Reunião para prévia do site</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1595FF] mr-3 font-bold">•</span>
                <span><strong>30 dias:</strong> Solicitação de aprovação final</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seção 4: Valor do Projeto */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4 pb-2 border-b-2 border-[#1595FF]">
            4. Valor do Projeto
          </h2>
          
          <div className="bg-gradient-to-br from-[#1595FF] to-[#FF6339] text-white rounded-xl p-8 mb-6 shadow-lg">
            <div className="text-center mb-6">
              <p className="text-4xl md:text-5xl font-bold mb-2">R$ 4.000,00</p>
              <p className="text-lg opacity-90">Valor total do projeto</p>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <p className="text-sm mb-1">💳 Pagamento via Pix com 10% de desconto</p>
              <p className="text-2xl font-bold">R$ 3.600,00</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#282828] mb-4">Forma de pagamento:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-2 border-[#1595FF]">
                <p className="font-semibold text-[#1595FF] mb-1">50%</p>
                <p className="text-gray-700">na assinatura da proposta</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-[#FF6339]">
                <p className="font-semibold text-[#FF6339] mb-1">50%</p>
                <p className="text-gray-700">na entrega final</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <p className="text-gray-700">
                <strong>Aceitamos:</strong> PIX e Cartão de Crédito/Débito
              </p>
            </div>
          </div>
        </section>

        {/* Seção 5: Suporte Pós-Entrega */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4 pb-2 border-b-2 border-[#1595FF]">
            5. Suporte Pós-Entrega (15 dias)
          </h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-[#282828] mb-4">Inclui ajustes e melhorias, como:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Correção ou ajuste de textos</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Substituição de fotos já existentes</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Troca ou inserção de vídeo simples</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Correção de alinhamentos visuais</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
                <span><strong>Ajustes de responsividade e refinamentos</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
            <h3 className="text-lg font-semibold text-[#282828] mb-4">Não inclui (válido para evitar conflitos):</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Mudança de tema</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Mudança na estrutura do site</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Criação de novas páginas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Reestruturação de layout</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Recriação do design</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Funcionalidades adicionais (login, área de membros, formulários avançados, automações)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">✗</span>
                <span>Qualquer ajuste que demande refazer parte do site</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seção 6: Itens não incluídos */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4 pb-2 border-b-2 border-[#1595FF]">
            6. Itens não incluídos no valor
          </h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 font-bold">•</span>
                <span><strong>Hospedagem</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 font-bold">•</span>
                <span><strong>Licenças premium</strong>, caso necessárias (Elementor Pro, plugins especiais, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 font-bold">•</span>
                <span><strong>E-commerce</strong> e compras com check-out automático</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 font-bold">•</span>
                <span><strong>Captação de fotos e vídeos</strong></span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#282828] mb-3">Hospedagem:</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              A hospedagem pode ser contratada conosco como um <strong>valor extra</strong> de <strong className="text-[#1595FF]">R$ 100/mês</strong>, 
              devendo ser pago todo dia <strong>01 de cada mês</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O cliente também pode contratar a hospedagem por conta própria.<br />
              Caso deseje, podemos indicar plataformas confiáveis.
            </p>
          </div>
        </section>

        {/* Seção 7: Validade da Proposta */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4 pb-2 border-b-2 border-[#1595FF]">
            7. Validade da Proposta
          </h2>
          
          <div className="bg-gradient-to-r from-[#1595FF]/10 to-[#FF6339]/10 rounded-lg p-6 text-center">
            <p className="text-xl font-semibold text-[#282828]">
              Esta proposta é válida por <span className="text-[#1595FF]">3 dias corridos</span>.
            </p>
          </div>
        </section>

        {/* Rodapé do documento */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <div className="text-center text-gray-600">
            <p className="font-semibold text-[#1595FF] mb-2">Niva Agência</p>
            <p className="text-sm">Proposta gerada em {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Orcamento;
