import React, { useState } from 'react';

function Contact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1 - Informações Básicas
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    
    // Step 2 - Informações da Empresa
    setor: '',
    tamanhoEmpresa: '',
    faturamento: '',
    localizacao: '',
    
    // Step 3 - Necessidades de Pesquisa
    servicosPrincipais: [],
    servicosExtras: [],
    objetivo: '',
    prazo: '',
    orcamento: '',
    
    // Step 4 - Detalhes do Projeto
    descricaoProjeto: '',
    publicoAlvo: '',
    metodologia: '',
    expectativas: '',
    
    // Step 5 - Contato e Preferências
    melhorHorario: '',
    preferenciaContato: '',
    comoConheceu: '',
    observacoes: ''
  });

  const servicosPrincipais = [
    { id: 'percepcao', label: 'Pesquisa de Percepção e Imagem' },
    { id: 'intencao', label: 'Pesquisa de Intenção de Compra e Teste de Aceitação' },
    { id: 'satisfacao', label: 'Pesquisa de Satisfação e Experiência' },
    { id: 'usabilidade', label: 'Teste de Usabilidade e Experiência Digital' },
    { id: 'clima', label: 'Pesquisa de Clima e Cultura Organizacional' },
    { id: 'comportamento', label: 'Estudos de Comportamento e Cultura' }
  ];

  const servicosExtras = [
    { id: 'workshop', label: 'Workshops para sensibilização' },
    { id: 'relatorios', label: 'Criação de relatórios visuais e executivos' },
    { id: 'formacao', label: 'Formação para equipes em cultura de pesquisa' },
    { id: 'capacitacao', label: 'Capacitação técnica para times de pesquisa' }
  ];

  const steps = [
    { title: 'Informações Básicas', icon: '👤' },
    { title: 'Sobre sua Empresa', icon: '🏢' },
    { title: 'Necessidades', icon: '🎯' },
    { title: 'Detalhes do Projeto', icon: '📋' },
    { title: 'Contato', icon: '📞' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Email corporativo *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  placeholder="seu.email@empresa.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Cargo *
                </label>
                <input
                  type="text"
                  value={formData.cargo}
                  onChange={(e) => handleInputChange('cargo', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  placeholder="Ex: Gerente de Marketing"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-emerald-100 text-sm font-semibold mb-2">
                Nome da empresa *
              </label>
              <input
                type="text"
                value={formData.empresa}
                onChange={(e) => handleInputChange('empresa', e.target.value)}
                className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                placeholder="Nome da sua empresa"
                required
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Setor de atuação *
                </label>
                <select
                  value={formData.setor}
                  onChange={(e) => handleInputChange('setor', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  required
                >
                  <option value="">Selecione o setor</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="saude">Saúde</option>
                  <option value="educacao">Educação</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="varejo">Varejo</option>
                  <option value="industria">Indústria</option>
                  <option value="servicos">Serviços</option>
                  <option value="governo">Governo</option>
                  <option value="ong">ONG</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Tamanho da empresa *
                </label>
                <select
                  value={formData.tamanhoEmpresa}
                  onChange={(e) => handleInputChange('tamanhoEmpresa', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  required
                >
                  <option value="">Selecione o tamanho</option>
                  <option value="startup">Micro (1-50 funcionários)</option>
                  <option value="pequena">Pequena (51-200 funcionários)</option>
                  <option value="media">Média (201-1000 funcionários)</option>
                  <option value="grande">Grande (1000+ funcionários)</option>
                  <option value="multinacional">Multinacional</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Faturamento anual
                </label>
                <select
                  value={formData.faturamento}
                  onChange={(e) => handleInputChange('faturamento', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Selecione o faturamento</option>
                  <option value="ate-100k">Até R$ 100 mil</option>
                  <option value="100k-500k">R$ 100 mil - R$ 500 mil</option>
                  <option value="500k-1m">R$ 500 mil - R$ 1 milhão</option>
                  <option value="1m-10m">R$ 1M - R$ 10M</option>
                  <option value="10m-100m">R$ 10M - R$ 100M</option>
                  <option value="100m-1b">R$ 100M - R$ 1B</option>
                  <option value="acima-1b">Acima de R$ 1B</option>
                </select>
              </div>
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Localização principal
                </label>
                <input
                  type="text"
                  value={formData.localizacao}
                  onChange={(e) => handleInputChange('localizacao', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  placeholder="Ex: São Paulo, SP"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 md:space-y-8">
            <div>
              <label className="block text-emerald-100 text-sm font-semibold mb-4 md:mb-6">
                Quais serviços principais você gostaria de contratar? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {servicosPrincipais.map((servico) => (
                  <div
                    key={servico.id}
                    onClick={() => {
                      const isSelected = formData.servicosPrincipais.includes(servico.id);
                      handleCheckboxChange('servicosPrincipais', servico.id, !isSelected);
                    }}
                    className={`relative p-4 md:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                      formData.servicosPrincipais.includes(servico.id)
                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400 shadow-lg shadow-emerald-500/25'
                        : 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/30'
                    }`}
                  >
                    {/* Check Icon */}
                    <div className={`absolute top-2 md:top-3 right-2 md:right-3 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      formData.servicosPrincipais.includes(servico.id)
                        ? 'bg-emerald-500 text-white scale-100'
                        : 'bg-white/20 text-transparent scale-75'
                    }`}>
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    {/* Service Icon */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 ${
                      formData.servicosPrincipais.includes(servico.id)
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/20 text-emerald-200'
                    }`}>
                      {servico.id === 'percepcao' && '🎯'}
                      {servico.id === 'intencao' && '💡'}
                      {servico.id === 'satisfacao' && '❤️'}
                      {servico.id === 'usabilidade' && '💻'}
                      {servico.id === 'clima' && '🏢'}
                      {servico.id === 'comportamento' && '🔍'}
                    </div>
                    
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 text-sm md:text-base ${
                      formData.servicosPrincipais.includes(servico.id)
                        ? 'text-white'
                        : 'text-emerald-100'
                    }`}>
                      {servico.label}
                    </h4>
                    
                    {/* Selection Indicator */}
                    <div className={`w-full h-1 rounded-full transition-all duration-300 ${
                      formData.servicosPrincipais.includes(servico.id)
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-400'
                        : 'bg-white/20'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-emerald-100 text-sm font-semibold mb-4 md:mb-6">
                Serviços complementares de interesse:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {servicosExtras.map((servico) => (
                  <div
                    key={servico.id}
                    onClick={() => {
                      const isSelected = formData.servicosExtras.includes(servico.id);
                      handleCheckboxChange('servicosExtras', servico.id, !isSelected);
                    }}
                    className={`relative p-4 md:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                      formData.servicosExtras.includes(servico.id)
                        ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-400 shadow-lg shadow-teal-500/25'
                        : 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:border-white/30'
                    }`}
                  >
                    {/* Check Icon */}
                    <div className={`absolute top-2 md:top-3 right-2 md:right-3 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      formData.servicosExtras.includes(servico.id)
                        ? 'bg-teal-500 text-white scale-100'
                        : 'bg-white/20 text-transparent scale-75'
                    }`}>
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    {/* Service Icon */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 ${
                      formData.servicosExtras.includes(servico.id)
                        ? 'bg-teal-500 text-white'
                        : 'bg-white/20 text-teal-200'
                    }`}>
                      {servico.id === 'workshop' && '📚'}
                      {servico.id === 'relatorios' && '📊'}
                      {servico.id === 'formacao' && '🎓'}
                      {servico.id === 'capacitacao' && '⚡'}
                    </div>
                    
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 text-sm md:text-base ${
                      formData.servicosExtras.includes(servico.id)
                        ? 'text-white'
                        : 'text-teal-100'
                    }`}>
                      {servico.label}
                    </h4>
                    
                    {/* Selection Indicator */}
                    <div className={`w-full h-1 rounded-full transition-all duration-300 ${
                      formData.servicosExtras.includes(servico.id)
                        ? 'bg-gradient-to-r from-teal-400 to-cyan-400'
                        : 'bg-white/20'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Objetivo principal da pesquisa *
                </label>
                <select
                  value={formData.objetivo}
                  onChange={(e) => handleInputChange('objetivo', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  required
                >
                  <option value="">Selecione o objetivo</option>
                  <option value="melhorar-produto">Melhorar produto/serviço</option>
                  <option value="entender-publico">Entender público-alvo</option>
                  <option value="avaliar-satisfacao">Avaliar satisfação</option>
                  <option value="testar-ideia">Testar nova ideia</option>
                  <option value="melhorar-experiencia">Melhorar experiência do usuário</option>
                  <option value="cultura-organizacional">Cultura organizacional</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Prazo desejado para início
                </label>
                <select
                  value={formData.prazo}
                  onChange={(e) => handleInputChange('prazo', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Selecione o prazo</option>
                  <option value="imediato">Imediato</option>
                  <option value="1-mes">1 mês</option>
                  <option value="3-meses">3 meses</option>
                  <option value="6-meses">6 meses</option>
                  <option value="sem-prazo">Sem prazo definido</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-emerald-100 text-sm font-semibold mb-2">
                Faixa de orçamento estimada
              </label>
              <select
                value={formData.orcamento}
                onChange={(e) => handleInputChange('orcamento', e.target.value)}
                className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
              >
                <option value="">Selecione o orçamento</option>
                <option value="ate-10k">Até R$ 10.000</option>
                <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                <option value="acima-100k">Acima de R$ 100.000</option>
                <option value="nao-definido">Ainda não definido</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-emerald-100 text-sm font-semibold mb-2">
                Descreva brevemente seu projeto ou necessidade *
              </label>
              <textarea
                value={formData.descricaoProjeto}
                onChange={(e) => handleInputChange('descricaoProjeto', e.target.value)}
                rows={4}
                className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none text-sm md:text-base"
                placeholder="Conte-nos sobre o que você precisa..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Público-alvo da pesquisa
                </label>
                <input
                  type="text"
                  value={formData.publicoAlvo}
                  onChange={(e) => handleInputChange('publicoAlvo', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                  placeholder="Ex: Clientes B2B, usuários finais, etc."
                />
              </div>
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Metodologia preferida
                </label>
                <select
                  value={formData.metodologia}
                  onChange={(e) => handleInputChange('metodologia', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Selecione a metodologia</option>
                  <option value="qualitativa">Qualitativa</option>
                  <option value="quantitativa">Quantitativa</option>
                  <option value="mista">Mista (Quali + Quanti)</option>
                  <option value="nao-sei">Não sei, preciso de orientação</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-emerald-100 text-sm font-semibold mb-2">
                Principais expectativas com a pesquisa
              </label>
              <textarea
                value={formData.expectativas}
                onChange={(e) => handleInputChange('expectativas', e.target.value)}
                rows={3}
                className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none text-sm md:text-base"
                placeholder="O que você espera alcançar com esta pesquisa?"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Melhor horário para contato
                </label>
                <select
                  value={formData.melhorHorario}
                  onChange={(e) => handleInputChange('melhorHorario', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Selecione o horário</option>
                  <option value="manha">Manhã (8h - 12h)</option>
                  <option value="tarde">Tarde (13h - 17h)</option>
                  <option value="noite">Noite (18h - 20h)</option>
                  <option value="flexivel">Flexível</option>
                </select>
              </div>
              <div>
                <label className="block text-emerald-100 text-sm font-semibold mb-2">
                  Preferência de contato
                </label>
                <select
                  value={formData.preferenciaContato}
                  onChange={(e) => handleInputChange('preferenciaContato', e.target.value)}
                  className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Selecione a preferência</option>
                  <option value="email">Email</option>
                  <option value="telefone">Telefone</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="videochamada">Videochamada</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-emerald-100 text-sm font-semibold mb-2">
                Como você conheceu a Niva Research?
              </label>
              <select
                value={formData.comoConheceu}
                onChange={(e) => handleInputChange('comoConheceu', e.target.value)}
                className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm md:text-base"
              >
                <option value="">Selecione a opção</option>
                <option value="google">Google</option>
                <option value="linkedin">LinkedIn</option>
                <option value="indicacao">Indicação</option>
                <option value="redes-sociais">Redes Sociais</option>
                <option value="evento">Evento</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-emerald-100 text-sm font-semibold mb-2">
                Observações adicionais
              </label>
              <textarea
                value={formData.observacoes}
                onChange={(e) => handleInputChange('observacoes', e.target.value)}
                rows={3}
                className="w-full px-3 md:px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none text-sm md:text-base"
                placeholder="Alguma informação adicional que gostaria de compartilhar..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Section 1 - Contact Form */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g fill="none" fillRule="evenodd">
              <g fill="#ffffff" fillOpacity="0.1">
                <circle cx="30" cy="30" r="2" />
              </g>
            </g>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4 md:mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 border border-white/20">
                <span className="text-emerald-200 text-xs md:text-sm font-medium">Vamos conversar?</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Conte-nos sobre seu{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                projeto
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto px-4">
              Preencha o formulário abaixo e nossa equipe entrará em contato para entender melhor suas necessidades.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 md:mb-8">
            <div className="flex justify-between items-center mb-3 md:mb-4 overflow-x-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-shrink-0">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-lg font-bold transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-white/20 text-emerald-200'
                  }`}>
                    {index < currentStep ? '✓' : step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-4 sm:w-8 md:w-16 h-1 mx-1 sm:mx-2 transition-all duration-300 ${
                      index < currentStep ? 'bg-emerald-500' : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="text-emerald-200 text-xs md:text-sm font-medium">
                Passo {currentStep + 1} de {steps.length}: {steps[currentStep].title}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/20">
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`w-full sm:w-auto px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                  currentStep === 0
                    ? 'bg-white/10 text-white/50 cursor-not-allowed'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Anterior
              </button>
              
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  Próximo
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  Enviar Formulário
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Section 2 - Footer */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-36 md:w-48 h-36 md:h-48 bg-teal-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Contact Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8">
              <a 
                href="mailto:dellysouza@nivaresearch.com" 
                className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-300 group-hover:text-emerald-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-emerald-100 group-hover:text-white transition-colors font-medium text-sm md:text-base">Email</span>
              </a>
              
              <a 
                href="https://web.whatsapp.com/send?phone=5581997436143" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-300 group-hover:text-emerald-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="text-emerald-100 group-hover:text-white transition-colors font-medium text-sm md:text-base">WhatsApp</span>
              </a>
              
              <a 
                href="https://instagram.com/nivaresearch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-300 group-hover:text-emerald-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-emerald-100 group-hover:text-white transition-colors font-medium text-sm md:text-base">Instagram</span>
              </a>
              
              <a 
                href="https://linkedin.com/nivaresearch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-300 group-hover:text-emerald-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-emerald-100 group-hover:text-white transition-colors font-medium text-sm md:text-base">LinkedIn</span>
              </a>
            </div>
            
            {/* Address and Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-emerald-100 font-medium text-sm md:text-base">Recife, PE</span>
              </div>
              <div className="text-emerald-200 text-xs md:text-sm leading-relaxed">
                Rua Othon Paraíso, 211, Apt 604, 52050-010
              </div>
              <div className="text-emerald-200 text-xs md:text-sm mt-2">
                Segunda à Sexta: 08h às 18h
              </div>
            </div>
            
            {/* Copyright */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
              <p className="text-emerald-300 text-xs md:text-sm">
                © 2024 Niva Research. Transformando dados em insights.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Contact; 