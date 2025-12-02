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

### 🏠 Página Inicial
- **Hero Section**: Seção de boas-vindas com imagem de fundo e call-to-actions
- **Sobre Nós**: Apresentação da igreja, missão e valores com link para programação
- **Programação**: Exibição dos cultos e eventos semanais em cards organizados
- **Contato**: Informações de contato e mapa interativo do Google Maps
- **Footer**: Rodapé com informações da igreja, links rápidos e redes sociais

### 🎫 Página de Convite
- **Página Dedicada**: Página especial para convites de eventos e cultos
- **Formulário de Confirmação**: Sistema completo de confirmação de presença com:
  - Validação de telefone/WhatsApp com máscara automática
  - Campos dinâmicos para múltiplas pessoas (até 50)
  - Validação de nomes (sem números)
  - Envio automático de email via Resend
- **Compartilhamento Social**: Botões para compartilhar via WhatsApp e copiar link
- **Design Elegante**: Interface com tipografia especial e gradientes

### 🎨 Recursos de UX/UI
- ✅ **Design Responsivo**: Totalmente adaptado para mobile, tablet e desktop
- ✅ **Scroll Suave Dinâmico**: Navegação fluida entre seções com cálculo automático da altura do navbar
- ✅ **Page Title Dinâmico**: Título da página atualiza conforme a seção visível
- ✅ **Botão Voltar ao Topo**: Aparece automaticamente no mobile ao sair da primeira seção
- ✅ **Navbar Fixa**: Menu de navegação sempre visível com backdrop blur e logo da igreja
- ✅ **Menu Mobile**: Menu hambúrguer responsivo para dispositivos móveis
- ✅ **Google Maps Integrado**: Mapa interativo com localização da igreja
- ✅ **404 Personalizado**: Página de erro customizada
- ✅ **Notificações Toast**: Feedback visual para ações do usuário (Sonner)
- ✅ **Validação de Formulários**: Validação em tempo real com mensagens de erro claras

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

#### Página de Convite
- **Formulário de Confirmação**: Formulário completo com validação e campos dinâmicos
- **Compartilhamento**: Seção com botões para compartilhar convite


## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm
- Conta no [Resend](https://resend.com/) (opcional, para envio de emails)

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

# Email para receber confirmações de presença
CONFIRMATION_EMAIL=seu-email@exemplo.com

# API Key do Resend (obtenha em https://resend.com/api-keys)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Email remetente (use onboarding@resend.dev para testes)
RESEND_FROM_EMAIL=Igreja Batista Fundamental <onboarding@resend.dev>
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

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px (md)
- **Tablet**: ≥ 768px (md)
- **Desktop**: ≥ 1024px (lg)

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🎨 Design System

O projeto utiliza um design system customizado com:

- **Cores**: Paleta tradicional de igreja com tons de vermelho/burgundy
- **Tipografia**: 
  - `font-heading`: Crimson Text (títulos)
  - `font-body`: Roboto (texto geral)
  - `font-script`: Fonte script para títulos especiais
- **Componentes**: Baseados em shadcn/ui com customizações

## 📋 Estrutura de Pastas

```
plataforma-ibbf/
├── app/                    # Rotas Next.js (App Router)
│   ├── api/               # API Routes
│   │   └── send-confirmation/  # Endpoint de confirmação
│   ├── convite/           # Página de convite
│   └── page.tsx           # Página inicial
├── components/
│   ├── home/              # Componentes da página inicial
│   └── ui/                # Componentes UI reutilizáveis (shadcn/ui)
├── hooks/                 # Custom hooks
│   └── page-title/        # Hooks para título dinâmico
├── lib/                   # Utilitários e helpers
│   └── utils.ts           # Funções utilitárias
└── public/                # Arquivos estáticos
    └── assets/            # Imagens e recursos
```

## 🚀 Funcionalidades Técnicas

### Scroll Automático Inteligente
- Calcula dinamicamente a altura do navbar em tempo de execução
- Ajusta automaticamente quando a altura do header muda
- Funciona com hash na URL (`/#sobre`, `/#contato`, etc.)

### Validação de Formulários
- Validação em tempo real com React Hook Form + Zod
- Máscara automática de telefone brasileiro
- Validação de nomes (sem números)
- Feedback visual com mensagens de erro claras

### Sistema de Notificações
- Toast notifications com Sonner
- Feedback visual para todas as ações do usuário
- Sucesso, erro e informações

## 📝 Licença

Este projeto é privado e pertence à 1ª Igreja Batista Bíblica Fundamentalista de Canoas.

