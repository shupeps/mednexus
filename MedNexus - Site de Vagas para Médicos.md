# MedNexus - Site de Vagas para Médicos

## Visão Geral
O MedNexus é uma plataforma moderna e responsiva para divulgação de vagas de trabalho voltadas especificamente para médicos. O site foi desenvolvido com base na inspiração do portal Mais Plantões da Acanto, mas com um design mais moderno e funcionalidades aprimoradas.

## Características Principais

### Design e Interface
- **Design Moderno**: Interface limpa e profissional com gradientes azuis
- **Responsivo**: Adaptável para desktop, tablet e mobile
- **Acessibilidade**: Cores contrastantes e navegação intuitiva
- **Identidade Visual**: Logo com estetoscópio e paleta de cores médicas

### Funcionalidades Implementadas

#### 1. Header e Navegação
- Logo MedJobs com ícone de estetoscópio
- Menu de navegação responsivo
- Botões de "Entrar" e "Cadastrar"
- Menu mobile com hambúrguer

#### 2. Seção Hero
- Título impactante com call-to-action
- Imagem de equipe médica profissional
- Estatística de médicos cadastrados (+1.200)
- Botões para "Buscar Vagas" e "Sou Estabelecimento"

#### 3. Sistema de Busca e Filtros
- **Busca por texto**: Especialidade, hospital ou cargo
- **Filtro por localização**: Dropdown com principais cidades
- **Busca em tempo real**: Filtragem automática conforme digitação
- **Resultados dinâmicos**: Atualização instantânea da lista

#### 4. Listagem de Vagas
- **6 vagas de exemplo** com dados realistas:
  - Médico Plantonista - UTI (São Paulo)
  - Cardiologista (Rio de Janeiro)
  - Médico Emergencista (Belo Horizonte)
  - Pediatra (Brasília)
  - Anestesiologista (Porto Alegre)
  - Médico do Trabalho (Curitiba)

- **Informações por vaga**:
  - Título da posição
  - Nome do hospital/clínica
  - Localização
  - Faixa salarial
  - Tipo de contrato (CLT/Plantão)
  - Especialidade
  - Badge "Urgente" para vagas prioritárias

#### 5. Seção "Como Funciona"
- Processo em 3 passos simples:
  1. **Cadastre-se**: Criar perfil profissional
  2. **Busque vagas**: Usar filtros para encontrar oportunidades
  3. **Candidate-se**: Aplicar e conectar com empregadores

#### 6. Depoimentos
- **3 depoimentos** de médicos fictícios
- Sistema de avaliação com estrelas
- Especialidades variadas (Cardiologista, Pediatra, Emergencista)

#### 7. Call-to-Action (CTA)
- Seção azul destacada
- Estatística de médicos cadastrados
- Botões para médicos e estabelecimentos

#### 8. Footer Completo
- Links organizados por categoria:
  - Para Médicos (Buscar Vagas, Criar Perfil, Dicas)
  - Para Estabelecimentos (Publicar Vaga, Buscar Médicos, Planos)
  - Informações de Contato
- Copyright e informações legais

## Tecnologias Utilizadas

### Frontend
- **React 18**: Framework JavaScript moderno
- **Vite**: Build tool rápido e eficiente
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Biblioteca de ícones moderna

### Componentes UI
- **shadcn/ui**: Componentes pré-construídos
- **Framer Motion**: Animações suaves (preparado)
- **React Router**: Navegação (preparado para expansão)

### Recursos Visuais
- **Imagens profissionais**: Equipes médicas, hospitais, equipamentos
- **Ícones médicos**: Estetoscópio, coração, usuários, busca
- **Gradientes**: Azul médico para azul claro

## Funcionalidades Técnicas

### Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: 768px (tablet), 1024px (desktop), 1280px (large)
- **Grid System**: Layout flexível com CSS Grid e Flexbox

### Interatividade
- **Estados Hover**: Efeitos visuais em botões e cards
- **Filtros Dinâmicos**: Busca em tempo real sem recarregar página
- **Menu Mobile**: Navegação colapsável para telas pequenas

### Performance
- **Otimização de Imagens**: Formatos modernos e compressão
- **Code Splitting**: Carregamento otimizado de componentes
- **CSS Modular**: Estilos organizados e reutilizáveis

## Estrutura de Arquivos

```
vagas-medicas/
├── public/
├── src/
│   ├── assets/          # Imagens e recursos
│   │   ├── equipe-medica.jpeg
│   │   ├── medicos-diversos.jpg
│   │   ├── estetoscopio.jpg
│   │   └── hospital-moderno.jpg
│   ├── components/
│   │   └── ui/          # Componentes shadcn/ui
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── index.html           # HTML base
└── package.json         # Dependências
```

## Como Executar

### Desenvolvimento
```bash
cd vagas-medicas
npm run dev --host
```
Acesse: http://localhost:5173

### Build para Produção
```bash
npm run build
```

### Deploy
O projeto está pronto para deploy em qualquer plataforma de hospedagem estática (Vercel, Netlify, etc.)

## Próximos Passos Sugeridos

### Funcionalidades Futuras
1. **Sistema de Autenticação**: Login/cadastro real
2. **Perfis de Usuário**: Médicos e estabelecimentos
3. **Candidaturas**: Sistema de aplicação para vagas
4. **Dashboard**: Painel administrativo
5. **Notificações**: Alertas de novas vagas
6. **Chat**: Comunicação entre médicos e empregadores
7. **Avaliações**: Sistema de feedback
8. **API Backend**: Integração com banco de dados

### Melhorias Técnicas
1. **Testes**: Unit tests e E2E tests
2. **SEO**: Meta tags e otimização
3. **PWA**: Progressive Web App
4. **Analytics**: Google Analytics/Hotjar
5. **Acessibilidade**: WCAG compliance
6. **Internacionalização**: Suporte a múltiplos idiomas

## Conclusão

O MedNexus foi desenvolvido como uma plataforma moderna e funcional para conectar médicos com oportunidades de trabalho. O site apresenta um design profissional, funcionalidades intuitivas e está preparado para expansão futura. A base sólida em React e Tailwind CSS permite fácil manutenção e adição de novas funcionalidades.

