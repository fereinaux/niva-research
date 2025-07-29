# Estrutura de Componentes - Niva Research

Este projeto foi refatorado para melhor organização e manutenibilidade, dividindo o arquivo principal em componentes menores e reutilizáveis.

## Estrutura de Arquivos

```
src/
├── App.jsx                    # Componente principal (agora simplificado)
├── components/
│   ├── HeroSection.jsx        # Seção hero com título principal e CTA
│   ├── ServicesSection.jsx    # Seção de serviços oferecidos
│   ├── ValuesSection.jsx      # Seção de valores da empresa
│   ├── CareerSection.jsx      # Seção de trajetória profissional
│   └── RecommendationsSection.jsx # Seção de recomendações do LinkedIn
├── index.css                  # Estilos globais e animações
└── main.jsx                   # Ponto de entrada da aplicação
```

## Componentes

### 1. HeroSection
- **Responsabilidade**: Seção principal com título, subtítulo e botão CTA
- **Características**: 
  - Background gradiente animado
  - Elementos flutuantes decorativos
  - Animações de entrada
  - Design responsivo

### 2. ServicesSection
- **Responsabilidade**: Apresentação dos serviços oferecidos
- **Características**:
  - Grid de cards de serviços
  - Efeitos hover interativos
  - Ícones SVG personalizados
  - Gradientes coloridos por serviço

### 3. ValuesSection
- **Responsabilidade**: Apresentação dos valores da empresa
- **Características**:
  - Layout hexagonal com cards de valores
  - Linhas de conexão SVG
  - Background escuro com elementos decorativos
  - Animações de hover

### 4. CareerSection
- **Responsabilidade**: Timeline da carreira profissional
- **Características**:
  - Timeline interativo com anos
  - Cards de estratégias de pesquisa
  - Introdução da fundadora
  - Design responsivo

### 5. RecommendationsSection
- **Responsabilidade**: Exibição de recomendações do LinkedIn
- **Características**:
  - Grid de cards de recomendações
  - Animações de entrada escalonadas
  - Links para LinkedIn
  - Efeitos hover sofisticados

## Benefícios da Refatoração

1. **Manutenibilidade**: Cada componente tem uma responsabilidade específica
2. **Reutilização**: Componentes podem ser reutilizados em outras páginas
3. **Legibilidade**: Código mais fácil de entender e modificar
4. **Performance**: Carregamento mais eficiente
5. **Colaboração**: Múltiplos desenvolvedores podem trabalhar em componentes diferentes

## Animações CSS

As animações personalizadas estão definidas em `src/index.css`:
- `animate-gradient`: Gradiente animado para textos
- `animate-float`: Movimento flutuante para elementos decorativos
- `animate-fade-in-up`: Animação de entrada para cards

## Tecnologias Utilizadas

- **React**: Framework principal
- **Tailwind CSS**: Estilização
- **Vite**: Build tool
- **SVG**: Ícones e elementos gráficos

## Como Executar

```bash
npm install
npm run dev
```

## Próximos Passos

- [ ] Adicionar testes unitários para cada componente
- [ ] Implementar lazy loading para melhor performance
- [ ] Criar componentes de UI reutilizáveis (botões, cards, etc.)
- [ ] Adicionar TypeScript para melhor tipagem
- [ ] Implementar tema escuro/claro 