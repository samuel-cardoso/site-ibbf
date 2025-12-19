# Plataforma IBBF - Site Institucional

Site institucional da **1ª Igreja Batista Bíblica Fundamentalista de Canoas**, desenvolvido com Next.js 15 e React 19. Um site moderno, responsivo e acessível para apresentar informações sobre a igreja, programação de cultos e eventos, além de facilitar o contato com a congregação e gerenciar confirmações de presença.

## 🚀 Tecnologias

Este projeto utiliza as seguintes tecnologias:

- **[Next.js 15.5.3](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1.0](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e não estilizados
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI construídos com Radix UI e Tailwind CSS
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[Resend](https://resend.com/)** - API de envio de emails
- **[Sonner](https://sonner.emilkowal.ski/)** - Sistema de notificações toast

## ✨ Funcionalidades

### 🏠 Página Inicial (`/`)
- **Hero Section**: Seção de boas-vindas com imagem de fundo e call-to-actions
- **Sobre Nós**: Apresentação da igreja, missão e valores com link para programação
- **Programação**: Exibição dos cultos e eventos semanais em cards organizados
- **Contato**: Informações de contato e mapa interativo do Google Maps
- **Footer**: Rodapé com informações da igreja, links rápidos e redes sociais

### 📖 Página "No que cremos" (`/no-que-cremos`)
- **Confissão de Fé**: Página dedicada apresentando os pontos fundamentais da confissão de fé
- **Accordion Interativo**: Seções expansíveis com conteúdo detalhado sobre cada ponto doutrinário
- **Referências Bíblicas**: Cada seção inclui referências bíblicas relevantes
- **9 Pontos Principais**: 
  - As Escrituras
  - Deus e a Trindade
  - O Decreto de Deus
  - A Queda do Homem
  - Cristo, o Mediador
  - A Vocação Eficaz
  - Justificação, Adoção e Santificação
  - Perseverança dos Santos
  - A Lei de Deus

### 🎫 Página de Convite (`/convite`)
- **Página Dedicada**: Página especial para convites de eventos e cultos
- **Formulário de Confirmação**: Sistema completo de confirmação de presença com:
  - Validação de telefone/WhatsApp com máscara automática
  - Campos dinâmicos para múltiplas pessoas (até 50)
  - Validação de nomes (sem números)
  - Envio automático de email via Resend
- **Compartilhamento Social**: Botões para compartilhar via WhatsApp e copiar link
- **Design Elegante**: Interface com tipografia especial e gradientes
- **Informações da Igreja**: Endereço e horários de cultos exibidos na página

### 📅 Página de Agenda (`/agenda`)
- **Google Calendar Integrado**: Calendário completo de eventos da igreja integrado via iframe
- **Eventos Regulares**: Exibição dos horários fixos de cultos e reuniões
- **Design Consistente**: Segue os padrões visuais do site com tipografia e cores da igreja
- **Responsivo**: Calendário adaptado para todos os dispositivos
- **Configurável**: ID do calendário configurável via variável de ambiente

### 🔒 Página de Política de Privacidade (`/ldpg`)
- **LGPD Compliance**: Página com política de privacidade e proteção de dados
- **Visualizador de PDF**: Exibe o documento de política de privacidade
- **Acesso Rápido**: Link para abrir PDF em nova aba

### 🎨 Recursos de UX/UI
- ✅ **Design Responsivo**: Totalmente adaptado para mobile, tablet e desktop
- ✅ **Scroll Suave Dinâmico**: Navegação fluida entre seções com cálculo automático da altura do navbar
- ✅ **Page Title Dinâmico**: Título da página atualiza conforme a seção visível (apenas na home)
- ✅ **Botão Voltar ao Topo**: Aparece automaticamente no mobile ao sair da primeira seção
- ✅ **Navbar Fixa**: Menu de navegação sempre visível com backdrop blur e logo da igreja
- ✅ **Menu Mobile**: Menu hambúrguer responsivo para dispositivos móveis
- ✅ **Google Maps Integrado**: Mapa interativo com localização da igreja
- ✅ **404 Personalizado**: Página de erro customizada
- ✅ **Notificações Toast**: Feedback visual para ações do usuário (Sonner)
- ✅ **Validação de Formulários**: Validação em tempo real com mensagens de erro claras

### 🔍 SEO e Analytics
- ✅ **Metadata Completa**: Configuração de SEO para todas as páginas
- ✅ **Open Graph Tags**: Suporte para compartilhamento em redes sociais
- ✅ **Twitter Cards**: Cards otimizados para Twitter
- ✅ **Sitemap Automático**: Sitemap gerado automaticamente (`/sitemap.xml`)
- ✅ **Google Analytics**: Integração com Google Tag (configurável via variável de ambiente)
- ✅ **Robots.txt**: Configuração para crawlers de busca

### 🎯 Componentes Principais

#### Componentes da Home
- **Navbar**: Menu de navegação fixo com links para todas as seções e logo da igreja
- **Hero**: Seção principal com imagem de fundo e botões de ação
- **About**: Seção sobre a igreja com imagem e texto descritivo
- **Schedule**: Grid de cards com programação semanal
- **Contact**: Cards de contato e mapa do Google Maps
- **Footer**: Rodapé com informações da igreja, links rápidos e redes sociais
- **ScrollToTop**: Botão flutuante para voltar ao topo (apenas mobile)
- **HashScrollHandler**: Componente que gerencia scroll automático ao carregar página com hash na URL
- **BibleVerse**: Componente para exibir versículos bíblicos

#### Componentes UI (shadcn/ui)
- **Accordion**: Componente de acordeão usado na página "No que cremos"
- **Button**: Botões estilizados e acessíveis
- **Card**: Cards para exibir conteúdo
- **Dialog**: Modais e diálogos
- **Form**: Componentes de formulário com validação
- **Input**: Campos de entrada estilizados
- **Label**: Labels acessíveis para formulários
- **Sonner**: Sistema de notificações toast

#### Componentes Utilitários
- **GoogleAnalytics**: Componente para integração com Google Tag
- **PageTitle**: Componente que gerencia títulos dinâmicos das páginas

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no [Resend](https://resend.com/) (opcional, para envio de emails)
- Conta no [Google Analytics](https://analytics.google.com/) (opcional, para analytics)

### Passos

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd plataforma-ibbf
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` e configure:
```env
# URL do site (usado para SEO e sitemap)
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com

# Google Analytics ID (ex: S-SJE35SKSAH)
NEXT_PUBLIC_GA_ID=S-SJE35SKSAH

# Email para receber confirmações de presença
CONFIRMATION_EMAIL=seu-email@exemplo.com

# API Key do Resend (obtenha em https://resend.com/api-keys)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Email remetente (use onboarding@resend.dev para testes)
RESEND_FROM_EMAIL=Igreja Batista Fundamental <onboarding@resend.dev>

# ID do Google Calendar (opcional, para página de agenda)
# Para obter: Google Calendar > Configurações do calendário > Compartilhar > Copiar ID
# Formato: exemplo@gmail.com ou c_xxxxxxxxxxxxx@group.calendar.google.com
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=seu-calendario@gmail.com
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse [http://localhost:3000](http://localhost:3000) no navegador

### 📧 Configuração de Email (Resend)

Para habilitar o envio automático de emails de confirmação:

1. Crie uma conta no [Resend](https://resend.com/)
2. Obtenha sua API Key em **API Keys**
3. Para testes, use o domínio `onboarding@resend.dev`
4. Para produção, adicione e verifique seu domínio em **Domains**

**Nota**: Se as variáveis de email não estiverem configuradas, o sistema ainda funcionará, mas apenas registrará as confirmações no console do servidor.

### 📊 Configuração do Google Analytics

1. Crie uma propriedade no [Google Analytics](https://analytics.google.com/)
2. Obtenha seu ID de medição (formato: `G-XXXXXXXXXX` ou `S-XXXXXXXXXX`)
3. Adicione o ID na variável de ambiente `NEXT_PUBLIC_GA_ID`
4. O Google Tag será carregado automaticamente em todas as páginas

### 📅 Configuração do Google Calendar

Para exibir eventos no calendário da página `/agenda`:

1. Acesse o [Google Calendar](https://calendar.google.com/)
2. Crie um calendário ou use um existente
3. Vá em **Configurações** > **Configurações do calendário**
4. Role até a seção **Compartilhar com pessoas específicas** ou **Integrar calendário**
5. Copie o **ID do calendário** (formato: `exemplo@gmail.com` ou `c_xxxxxxxxxxxxx@group.calendar.google.com`)
6. Adicione o ID na variável de ambiente `NEXT_PUBLIC_GOOGLE_CALENDAR_ID`
7. Certifique-se de que o calendário está **público** ou configurado para ser visualizado via embed

**Nota**: Se a variável não estiver configurada, a página ainda funcionará, mas exibirá um calendário genérico do Google.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px (md)
- **Tablet**: ≥ 768px (md)
- **Desktop**: ≥ 1024px (lg)

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack (mais rápido, mas pode ter warnings de HMR)
npm run dev

# Desenvolvimento com Webpack (mais estável, sem warnings de HMR)
npm run dev:webpack

# Build de produção com Turbopack
npm run build

# Build de produção com Webpack
npm run build:webpack

# Iniciar servidor de produção
npm start

# Limpar cache do Next.js (útil se houver problemas)
npm run clean
```

### ⚠️ Nota sobre Warnings de HMR

Se você estiver vendo erros como `unrecognized HMR message "{"event":"ping"}"`, isso é um bug conhecido do Turbopack no Next.js 15 que não afeta a funcionalidade do site. Você pode:

1. **Ignorar os warnings** - Eles não afetam o funcionamento
2. **Usar Webpack** - Execute `npm run dev:webpack` em vez de `npm run dev`
3. **Limpar o cache** - Execute `npm run clean` e reinicie o servidor

## 🎨 Design System

O projeto utiliza um design system customizado com:

- **Cores**: Paleta tradicional de igreja com tons de vermelho/burgundy
- **Tipografia**: 
  - `font-heading`: Crimson Text (títulos)
  - `font-body`: Roboto (texto geral)
  - `font-script`: Great Vibes (títulos especiais e decorativos)
  - `font-mono`: Roboto Mono (código e texto monoespaçado)
- **Componentes**: Baseados em shadcn/ui com customizações específicas do projeto

## 📋 Estrutura de Pastas

```
plataforma-ibbf/
├── app/                          # Rotas Next.js (App Router)
│   ├── api/                      # API Routes
│   │   └── send-confirmation/    # Endpoint de confirmação de presença
│   │       └── route.ts
│   ├── convite/                  # Página de convite
│   │   ├── layout.tsx            # Metadata específica da página
│   │   └── page.tsx
│   ├── no-que-cremos/            # Página "No que cremos"
│   │   ├── layout.tsx            # Metadata específica da página
│   │   └── page.tsx
│   ├── agenda/                   # Página de Agenda de Eventos
│   │   ├── layout.tsx            # Metadata específica da página
│   │   └── page.tsx
│   ├── ldpg/                     # Página de Política de Privacidade
│   │   ├── layout.tsx            # Metadata específica da página
│   │   └── page.tsx
│   ├── layout.tsx                # Layout raiz com metadata global
│   ├── page.tsx                  # Página inicial
│   ├── not-found.tsx             # Página 404 personalizada
│   ├── sitemap.ts                # Sitemap automático
│   └── globals.css               # Estilos globais
├── components/
│   ├── home/                     # Componentes da página inicial
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Schedule.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── HashScrollHandler.tsx
│   │   ├── GoogleMap.tsx
│   │   └── BibleVerse.tsx
│   ├── ui/                       # Componentes UI reutilizáveis (shadcn/ui)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── sonner.tsx
│   ├── GoogleAnalytics.tsx        # Componente de Google Analytics
│   ├── PageTitle.tsx             # Componente de título dinâmico
│   └── v-gustavo/                # Componentes legados (não utilizados)
├── hooks/
│   └── page-title/               # Custom hooks para título dinâmico
│       ├── usePageTitle.tsx
│       └── useDynamicPageTitle.tsx
├── lib/
│   ├── confissao-de-fe.ts        # Dados da confissão de fé
│   ├── utils.ts                  # Funções utilitárias
│   └── types.ts                  # Tipos TypeScript
├── public/
│   ├── assets/                   # Imagens e recursos
│   │   ├── logo-igreja.png
│   │   ├── logo-igreja-branca.png
│   │   ├── hero-church.jpg
│   │   └── church-building.jpg
│   └── privacidade.pdf           # PDF da política de privacidade
├── robots.txt                    # Configuração para crawlers
├── next.config.ts                # Configuração do Next.js
├── tsconfig.json                 # Configuração do TypeScript
└── package.json                  # Dependências do projeto
```

## 🚀 Funcionalidades Técnicas

### Scroll Automático Inteligente
- Calcula dinamicamente a altura do navbar em tempo de execução
- Ajusta automaticamente quando a altura do header muda
- Funciona com hash na URL (`/#sobre`, `/#contato`, etc.)
- Suporte para navegação entre páginas e seções

### Validação de Formulários
- Validação em tempo real com React Hook Form + Zod
- Máscara automática de telefone brasileiro (formato: (00) 00000-0000)
- Validação de nomes (sem números)
- Campos dinâmicos que se adaptam ao número de pessoas
- Feedback visual com mensagens de erro claras
- Validação no cliente e no servidor

### Sistema de Notificações
- Toast notifications com Sonner
- Feedback visual para todas as ações do usuário
- Suporte para sucesso, erro e informações
- Posicionamento configurável
- Animações suaves

### API de Confirmação
- Endpoint: `/api/send-confirmation`
- Método: POST
- Validação de dados no servidor
- Envio de email via Resend
- Fallback para logs quando email não configurado
- Tratamento de erros robusto

### SEO e Metadata
- Metadata estática e dinâmica por página
- Open Graph tags para redes sociais
- Twitter Cards
- Sitemap XML automático
- Robots.txt configurado
- Títulos dinâmicos baseados em seções visíveis (home page)

## 🔐 Variáveis de Ambiente

| Variável | Descrição | Obrigatória | Padrão |
|----------|-----------|-------------|--------|
| `NEXT_PUBLIC_SITE_URL` | URL do site para SEO e sitemap | Não | `http://localhost:3000` |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics | Não | - |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_ID` | ID do Google Calendar para página de agenda | Não | - |
| `CONFIRMATION_EMAIL` | Email para receber confirmações | Não | - |
| `RESEND_API_KEY` | API Key do Resend | Não | - |
| `RESEND_FROM_EMAIL` | Email remetente do Resend | Não | `onboarding@resend.dev` |

## 📝 Licença

Este projeto é privado e pertence à 1ª Igreja Batista Bíblica Fundamentalista de Canoas.
