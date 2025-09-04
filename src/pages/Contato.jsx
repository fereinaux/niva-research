import React, { useState } from 'react';

function Contato() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    // Etapa 1: Informações básicas
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    
    // Etapa 2: Tipo de produto (filtro)
    tipoProduto: [],
    
    // Etapa 3: Detalhes específicos por produto
    detalhesPesquisa: {
      tipoPesquisa: '',
      objetivo: '',
      publicoAlvo: '',
      prazo: '',
      orcamento: ''
    },
    detalhesCapacitacao: {
      tipoCapacitacao: '',
      numeroPessoas: '',
      nivelExperiencia: '',
      prazo: '',
      orcamento: ''
    },
    detalhesLandingPage: {
      tipoLandingPage: '',
      objetivo: '',
      publicoAlvo: '',
      prazo: '',
      orcamento: ''
    },
    
    // Etapa 4: Informações adicionais
    comoConheceu: '',
    comoContatar: '',
    observacoes: ''
  });

  const totalSteps = 4;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpa erro quando usuário preenche campos obrigatórios da etapa 1
    if (currentStep === 1 && showError) {
      const requiredFields = ['nome', 'email', 'telefone', 'empresa', 'cargo'];
      const updatedData = { ...formData, [field]: value };
      const allRequiredFilled = requiredFields.every(field => updatedData[field].trim() !== '');
      
      if (allRequiredFilled) {
        setShowError(false);
      }
    }
    
    // Limpa erro quando usuário preenche campos obrigatórios da etapa 4
    if (currentStep === 4 && showError) {
      const updatedData = { ...formData, [field]: value };
      if (updatedData.comoConheceu.trim() !== '' && updatedData.comoContatar.trim() !== '') {
        setShowError(false);
      }
    }
  };

  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
    
    // Limpa erro quando usuário seleciona um serviço
    if (field === 'tipoProduto' && showError) {
      setShowError(false);
    }
  };

  const handleDetailChange = (productType, field, value) => {
    setFormData(prev => ({
      ...prev,
      [`detalhes${productType}`]: {
        ...prev[`detalhes${productType}`],
        [field]: value
      }
    }));
    
    // Limpa erro quando usuário preenche campos obrigatórios da etapa 3
    if (currentStep === 3 && showError) {
      let allRequiredFilled = true;
      
      // Verifica campos obrigatórios baseado no tipo de produto selecionado
      if (formData.tipoProduto.includes('pesquisa')) {
        const updatedPesquisa = { ...formData.detalhesPesquisa, [field]: value };
        if (productType === 'Pesquisa') {
          allRequiredFilled = allRequiredFilled && updatedPesquisa.prazo.trim() !== '';
        } else {
          allRequiredFilled = allRequiredFilled && formData.detalhesPesquisa.prazo.trim() !== '';
        }
      }
      
      if (formData.tipoProduto.includes('capacitacao')) {
        const updatedCapacitacao = { ...formData.detalhesCapacitacao, [field]: value };
        if (productType === 'Capacitacao') {
          allRequiredFilled = allRequiredFilled && 
            updatedCapacitacao.prazo.trim() !== '' &&
            updatedCapacitacao.numeroPessoas.trim() !== '' &&
            updatedCapacitacao.nivelExperiencia.trim() !== '';
        } else {
          allRequiredFilled = allRequiredFilled && 
            formData.detalhesCapacitacao.prazo.trim() !== '' &&
            formData.detalhesCapacitacao.numeroPessoas.trim() !== '' &&
            formData.detalhesCapacitacao.nivelExperiencia.trim() !== '';
        }
      }
      
      if (formData.tipoProduto.includes('landingPage')) {
        const updatedLandingPage = { ...formData.detalhesLandingPage, [field]: value };
        if (productType === 'LandingPage') {
          allRequiredFilled = allRequiredFilled && updatedLandingPage.prazo.trim() !== '';
        } else {
          allRequiredFilled = allRequiredFilled && formData.detalhesLandingPage.prazo.trim() !== '';
        }
      }
      
      if (allRequiredFilled) {
        setShowError(false);
      }
    }
  };

  const nextStep = () => {
    // Validação para etapa 1 (informações básicas)
    if (currentStep === 1) {
      const requiredFields = ['nome', 'email', 'telefone', 'empresa', 'cargo'];
      const missingFields = requiredFields.filter(field => !formData[field].trim());
      
      if (missingFields.length > 0) {
        setShowError(true);
        return;
      }
    }
    
    // Validação para etapa 2 (pergunta filtro)
    if (currentStep === 2 && formData.tipoProduto.length === 0) {
      setShowError(true);
      return;
    }
    
    // Validação para etapa 3 (detalhes específicos)
    if (currentStep === 3) {
      let hasMissingRequired = false;
      
      // Validação para Pesquisa
      if (formData.tipoProduto.includes('pesquisa')) {
        if (!formData.detalhesPesquisa.prazo.trim()) {
          hasMissingRequired = true;
        }
      }
      
      // Validação para Capacitação
      if (formData.tipoProduto.includes('capacitacao')) {
        if (!formData.detalhesCapacitacao.prazo.trim() || 
            !formData.detalhesCapacitacao.numeroPessoas.trim() || 
            !formData.detalhesCapacitacao.nivelExperiencia.trim()) {
          hasMissingRequired = true;
        }
      }
      
      // Validação para Landing Page
      if (formData.tipoProduto.includes('landingPage')) {
        if (!formData.detalhesLandingPage.prazo.trim()) {
          hasMissingRequired = true;
        }
      }
      
      if (hasMissingRequired) {
        setShowError(true);
        return;
      }
    }
    
    // Validação para etapa 4 (informações adicionais)
    if (currentStep === 4) {
      if (!formData.comoConheceu.trim() || !formData.comoContatar.trim()) {
        setShowError(true);
        return;
      }
    }
    
    setShowError(false); // Limpa erro se validação passou
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#282828] mb-6">Informações básicas</h3>
      
      {showError && currentStep === 1 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs">!</span>
            </div>
            <p className="text-red-700 font-medium">
              Por favor, preencha todos os campos obrigatórios para continuar.
            </p>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome completo *
          </label>
          <input
            type="text"
            value={formData.nome}
            onChange={(e) => handleInputChange('nome', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
            placeholder="seu@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Telefone/WhatsApp *
          </label>
          <input
            type="tel"
            value={formData.telefone}
            onChange={(e) => handleInputChange('telefone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
            placeholder="(11) 99999-9999"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Empresa/Organização *
          </label>
          <input
            type="text"
            value={formData.empresa}
            onChange={(e) => handleInputChange('empresa', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
            placeholder="Nome da sua empresa"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cargo/Função *
          </label>
          <input
            type="text"
            value={formData.cargo}
            onChange={(e) => handleInputChange('cargo', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
            placeholder="Seu cargo ou função"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#282828] mb-6">Que tipo de serviço você precisa? *</h3>
      <p className="text-gray-600 mb-6">Selecione um ou mais serviços que você tem interesse:</p>
      
      {showError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs">!</span>
            </div>
            <p className="text-red-700 font-medium">
              Por favor, selecione pelo menos um tipo de serviço para continuar.
            </p>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            value: 'pesquisa', 
            label: 'Pesquisa', 
            description: 'Transforme dados em insights estratégicos',
            icon: '📊'
          },
          { 
            value: 'capacitacao', 
            label: 'Capacitação', 
            description: 'Desenvolva sua equipe com conhecimento prático',
            icon: '🎓'
          },
          { 
            value: 'landingPage', 
            label: 'Landing Page', 
            description: 'Páginas orientadas por dados e insights',
            icon: '🌐'
          }
        ].map((option) => (
          <label 
            key={option.value} 
            className={`flex flex-col p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
              formData.tipoProduto.includes(option.value)
                ? 'border-[#1595FF] bg-[#1595FF]/5'
                : 'border-gray-300 hover:border-[#1595FF]/50 hover:bg-gray-50'
            }`}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={formData.tipoProduto.includes(option.value)}
              onChange={(e) => handleArrayChange('tipoProduto', e.target.value)}
              className="sr-only"
            />
            <div className="text-center">
              <div className="text-4xl mb-3">{option.icon}</div>
              <h4 className="text-lg font-semibold text-[#282828] mb-2">{option.label}</h4>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => {
    const hasPesquisa = formData.tipoProduto.includes('pesquisa');
    const hasCapacitacao = formData.tipoProduto.includes('capacitacao');
    const hasLandingPage = formData.tipoProduto.includes('landingPage');

  return (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-[#282828] mb-6">Detalhes do seu projeto</h3>
        
        {showError && currentStep === 3 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">!</span>
              </div>
              <p className="text-red-700 font-medium">
                Por favor, preencha todos os campos obrigatórios para continuar.
              </p>
            </div>
          </div>
        )}
        
        {hasPesquisa && (
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-[#282828] mb-4 flex items-center">
              <span className="text-2xl mr-3">📊</span>
              Detalhes da Pesquisa
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de pesquisa *
                </label>
                <select
                  required
                  value={formData.detalhesPesquisa.tipoPesquisa}
                  onChange={(e) => handleDetailChange('Pesquisa', 'tipoPesquisa', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="percepcao-imagem">Percepção e Imagem</option>
                  <option value="intencao-compra">Intenção de Compra</option>
                  <option value="satisfacao">Satisfação e Experiência</option>
                  <option value="usabilidade">Teste de Usabilidade</option>
                  <option value="personas">Estudo de Personas</option>
                  <option value="concorrencia">Análise de Concorrência</option>
                  <option value="nao-sei">Não sei, preciso de orientação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prazo desejado *
                </label>
                <select
                  value={formData.detalhesPesquisa.prazo}
                  onChange={(e) => handleDetailChange('Pesquisa', 'prazo', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione um prazo</option>
                  <option value="urgente">Urgente (até 1 mês)</option>
                  <option value="1-2-meses">1-2 meses</option>
                  <option value="2-3-meses">2-3 meses</option>
                  <option value="3-6-meses">3-6 meses</option>
                  <option value="flexivel">Flexível</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Objetivo da pesquisa *
              </label>
              <textarea
                required
                value={formData.detalhesPesquisa.objetivo}
                onChange={(e) => handleDetailChange('Pesquisa', 'objetivo', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
                placeholder="O que você espera descobrir com esta pesquisa?"
              />
            </div>
          </div>
        )}

        {hasCapacitacao && (
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-[#282828] mb-4 flex items-center">
              <span className="text-2xl mr-3">🎓</span>
              Detalhes da Capacitação
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de capacitação *
                </label>
                <select
                  required
                  value={formData.detalhesCapacitacao.tipoCapacitacao}
                  onChange={(e) => handleDetailChange('Capacitacao', 'tipoCapacitacao', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="individual">Individual</option>
                  <option value="grupo">Em grupo/equipe</option>
                  <option value="ambos">Ambos</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de pessoas *
                </label>
                <input
                  type="number"
                  value={formData.detalhesCapacitacao.numeroPessoas}
                  onChange={(e) => handleDetailChange('Capacitacao', 'numeroPessoas', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
                  placeholder="Quantas pessoas participarão?"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prazo desejado *
              </label>
              <select
                value={formData.detalhesCapacitacao.prazo}
                onChange={(e) => handleDetailChange('Capacitacao', 'prazo', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
              >
                <option value="">Selecione um prazo</option>
                <option value="urgente">Urgente (até 1 mês)</option>
                <option value="1-2-meses">1-2 meses</option>
                <option value="2-3-meses">2-3 meses</option>
                <option value="3-6-meses">3-6 meses</option>
                <option value="flexivel">Flexível</option>
              </select>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Nível de experiência da equipe *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'iniciante', label: 'Iniciante - Nunca fizemos pesquisa antes' },
                  { value: 'basico', label: 'Básico - Já fizemos algumas pesquisas simples' },
                  { value: 'intermediario', label: 'Intermediário - Temos experiência moderada' },
                  { value: 'avancado', label: 'Avançado - Temos bastante experiência' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300">
                    <input
                      type="radio"
                      name="experienciaCapacitacao"
                      value={option.value}
                      checked={formData.detalhesCapacitacao.nivelExperiencia === option.value}
                      onChange={(e) => handleDetailChange('Capacitacao', 'nivelExperiencia', e.target.value)}
                      className="mr-3 text-[#1595FF] focus:ring-[#1595FF]"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {hasLandingPage && (
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-[#282828] mb-4 flex items-center">
              <span className="text-2xl mr-3">🌐</span>
              Detalhes da Landing Page
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de landing page *
                </label>
                <select
                  required
                  value={formData.detalhesLandingPage.tipoLandingPage}
                  onChange={(e) => handleDetailChange('LandingPage', 'tipoLandingPage', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="simples">LP Simples</option>
                  <option value="avancada">LP Avançada</option>
                  <option value="nao-sei">Não sei, preciso de orientação</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prazo desejado *
                </label>
                <select
                  value={formData.detalhesLandingPage.prazo}
                  onChange={(e) => handleDetailChange('LandingPage', 'prazo', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione um prazo</option>
                  <option value="urgente">Urgente (até 1 mês)</option>
                  <option value="1-2-meses">1-2 meses</option>
                  <option value="2-3-meses">2-3 meses</option>
                  <option value="flexivel">Flexível</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Objetivo da landing page *
              </label>
              <textarea
                required
                value={formData.detalhesLandingPage.objetivo}
                onChange={(e) => handleDetailChange('LandingPage', 'objetivo', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
                placeholder="O que você espera alcançar com esta landing page?"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#282828] mb-6">Informações adicionais</h3>
      
      {showError && currentStep === 4 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs">!</span>
            </div>
            <p className="text-red-700 font-medium">
              Por favor, preencha todos os campos obrigatórios para continuar.
            </p>
          </div>
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Como você conheceu a Niva Research? *
        </label>
        <select
          value={formData.comoConheceu}
          onChange={(e) => handleInputChange('comoConheceu', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
        >
          <option value="">Selecione uma opção</option>
          <option value="google">Google</option>
          <option value="linkedin">LinkedIn</option>
          <option value="instagram">Instagram</option>
          <option value="indicacao">Indicação</option>
          <option value="evento">Evento/Palestra</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Como deseja que a Niva entre em contato? *
        </label>
        <select
          value={formData.comoContatar}
          onChange={(e) => handleInputChange('comoContatar', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
        >
          <option value="">Selecione uma opção</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="telefone">Telefone</option>
          <option value="email">E-mail</option>
          <option value="qualquer">Qualquer um dos acima</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Observações adicionais
        </label>
        <textarea
          value={formData.observacoes}
          onChange={(e) => handleInputChange('observacoes', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1595FF] focus:border-transparent transition-all duration-300"
          placeholder="Alguma informação adicional que gostaria de compartilhar?"
        />
      </div>
      
      <div className="bg-[#1595FF]/5 border border-[#1595FF]/20 rounded-lg p-6">
        <h4 className="font-semibold text-[#1595FF] mb-2">Próximos passos:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Analisaremos suas informações</li>
          <li>• Entraremos em contato em até 24h</li>
          <li>• Agendaremos uma conversa gratuita (WhatsApp, Telefone ou E-mail)</li>
          <li>• Apresentaremos uma proposta personalizada</li>
        </ul>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#FF6339]/5 via-white to-[#1595FF]/5 relative">
      
      {/* Seção de Contato */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-6">
              Vamos <span className="text-[#1595FF]">conversar</span> sobre a sua necessidade?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Pronto para transformar dados em estratégia? Vamos juntos transformá-lo em estratégia com pesquisa e comunicação digital.
            </p>
            
            {/* Destaque especial */}
            <div className="bg-gradient-to-r from-[#FF6339]/10 to-[#1595FF]/10 rounded-xl p-6 border border-gray-100 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <div className="w-8 h-8 bg-[#FF6339] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">💬</span>
                </div>
                <h2 className="text-xl font-bold text-[#282828]">Primeira conversa gratuita</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Vamos entender suas necessidades e mostrar como podemos ajudar seu negócio a crescer com base em dados reais.
              </p>
            </div>
          </div>
          
          {/* Formulário Wizard */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              
              {/* Progress Bar */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Etapa {currentStep} de {totalSteps}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round((currentStep / totalSteps) * 100)}% concluído
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#1595FF] h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Form Content */}
              <div className="p-8">
                {renderCurrentStep()}
              </div>
              
              {/* Navigation Buttons */}
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    currentStep === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-[#1595FF] hover:bg-white border border-gray-300 hover:border-[#1595FF]'
                  }`}
                >
                  ← Anterior
                </button>
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-[#1595FF] text-white rounded-lg font-medium hover:bg-[#1595FF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Próximo →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-[#FF6339] text-white rounded-lg font-medium hover:bg-[#FF6339]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Enviar Formulário ✨
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contato;
