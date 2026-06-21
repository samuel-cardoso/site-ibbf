# Integração com Resend

## Visão Geral

O [Resend](https://resend.com) é o serviço de envio de e-mail utilizado neste projeto. Ele é acionado quando um visitante preenche o formulário de confirmação de presença na página `/convite`, enviando uma notificação por e-mail para a igreja com os dados do confirmante.

---

## Fluxo Completo

```
Visitante acessa /convite
       ↓
Preenche o formulário (telefone, número de pessoas, nomes)
       ↓
Clica em "Confirmar Presença"
       ↓
[Client] convite/page.tsx → POST /api/send-confirmation
       ↓
[Server] app/api/send-confirmation/route.ts
       ↓
Resend envia e-mail para CONFIRMATION_EMAIL
```

---

## Arquivos Envolvidos

| Arquivo | Papel |
|---|---|
| `app/convite/page.tsx` | Formulário do lado do cliente. Coleta os dados e chama a API. |
| `app/api/send-confirmation/route.ts` | Rota de API (Next.js Route Handler). Recebe os dados, monta o e-mail e chama o Resend. |

---

## Variáveis de Ambiente

Definidas em `.env.local` (nunca commitar este arquivo).

| Variável | Obrigatória | Descrição |
|---|---|---|
| `RESEND_API_KEY` | Sim | Chave de API obtida no painel do Resend. |
| `RESEND_FROM_EMAIL` | Sim | Endereço de remetente (ex: `Igreja <contato@seudominio.com>`). Requer domínio verificado no Resend. |
| `CONFIRMATION_EMAIL` | Sim | E-mail de destino que receberá as confirmações (e-mail da igreja). |

Exemplo de `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=Igreja Batista Fundamental <noreply@ibbfcanoas.com.br>
CONFIRMATION_EMAIL=contato@ibbfcanoas.com.br
```

---

## O que o Formulário Envia

O `convite/page.tsx` faz um `POST` para `/api/send-confirmation` com o seguinte corpo JSON:

```json
{
  "contact": "51912345678",
  "numberOfPeople": "3",
  "names": ["João Silva", "Maria Silva", "Pedro Silva"]
}
```

- `contact`: telefone sem máscara (somente dígitos)
- `numberOfPeople`: quantidade de pessoas como string
- `names`: array com os nomes de cada pessoa (o primeiro é o responsável)

---

## O que a API Faz

### 1. Validação dos dados

Verifica se `contact`, `numberOfPeople` e `names` foram recebidos. Se algum estiver faltando, retorna `400`.

### 2. Monta o corpo do e-mail

Texto simples contendo telefone de contato, quantidade de pessoas e a lista numerada de nomes.

### 3. Verifica as variáveis de ambiente

A API tem três comportamentos distintos conforme o que estiver configurado:

#### Cenário A — `CONFIRMATION_EMAIL` não configurado
Apenas loga no console e retorna `200`. Nenhum e-mail é enviado.

#### Cenário B — `RESEND_API_KEY` não configurado
Loga os dados no console com uma instrução para configurar a chave. Retorna `200`.

#### Cenário C — Tudo configurado (produção)
Chama `resend.emails.send()` com os dados montados.

### 4. Fallback de domínio

Se o envio falhar com erro `422` (domínio não verificado), a API tenta novamente usando o endereço de teste do Resend:

```
from: "Igreja Batista Fundamental <onboarding@resend.dev>"
```

Esse domínio `@resend.dev` funciona sem verificação, mas **só entrega para o e-mail cadastrado na conta do Resend** (útil para desenvolvimento/testes).

---

## E-mail Enviado

**Assunto:**
```
Nova confirmação de presença - 1ª Igreja Batista Bíblica Fundamentalista de Canoas
```

**Corpo (texto simples):**
```
Nova confirmação de presença recebida!

Contato: 51912345678
Número de pessoas: 3

Lista de nomes:
1. João Silva
2. Maria Silva
3. Pedro Silva

---
Este email foi enviado automaticamente pelo formulário de convite da Igreja Batista Fundamental.
```

---

## Configuração no Painel do Resend

1. Acesse [resend.com](https://resend.com) e crie uma conta
2. Gere uma API Key em **API Keys → Create API Key**
3. Para usar um domínio próprio (ex: `@ibbfcanoas.com.br`), vá em **Domains → Add Domain** e siga as instruções de configuração de DNS
4. Enquanto o domínio não estiver verificado, use `onboarding@resend.dev` como remetente (o fallback da API já faz isso automaticamente)

---

## Domínio Verificado vs. Domínio de Teste

| | `onboarding@resend.dev` | Domínio próprio verificado |
|---|---|---|
| Configuração | Nenhuma | Requer DNS (MX, SPF, DKIM) |
| Entrega | Apenas para o e-mail da conta Resend | Qualquer destinatário |
| Ambiente | Desenvolvimento / testes | Produção |

---

## Validações do Formulário

O formulário em `convite/page.tsx` usa **Zod + React Hook Form** com as seguintes regras:

- **Telefone**: 10 ou 11 dígitos numéricos (com ou sem DDD de 2 dígitos)
- **Número de pessoas**: inteiro entre 1 e 50
- **Nomes**: mínimo 2 caracteres, máximo 100, sem números; gerado dinamicamente conforme o número de pessoas
