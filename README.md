# Landing Page Pede+ — Site Estático de Apresentação

## Overview

Este é o site estático de apresentação do **Pede+** — uma plataforma de cardápio digital personalizável para restaurantes.

A landing page está implementada como um **site HTML/CSS/JS puro** (sem framework ou build step), projetado para ser hospedado separadamente do app Next.js principal.

## Arquivos

- **`index.html`** — Marcação semântica de todas as seções: nav, hero com widget interativo, "como funciona", recursos, segmentos, planos, CTA final, footer.
- **`styles.css`** — Estilos com paleta herdada do app Pede+ (laranja/vermelho, claro/escuro), grid responsivo, motivo de comanda/recibo (bordas serrilhadas, preços em monoespaçado).
- **`script.js`** — Interatividade: theme toggle (claro/escuro, persistência em localStorage), widget do hero (troca entre 4 restaurantes fictícios), scroll suave, atualização de links de CTA.

## Paleta e Tipografia

A landing usa as mesmas cores e tipografia do app Pede+:

### Cores (Light / Dark)
```css
--accent: #ff4b2e / #ff6a45        /* Laranja principal, CTAs */
--accent-strong: #e23a1f / #ff8563 /* Laranja escuro, hover */
--accent-2: #ffb238 / #ffc24d      /* Laranja secundário */
--background: #fff7f0 / #180f0a    /* Fundo */
--foreground: #241511 / #fbeee3    /* Texto */
--ground-sunk: #fceee1 / #130b07   /* Cards, áreas de destaque */
--line: #eddccb / #3a2718          /* Bordas, divisores */
--ink-soft: #7a6459 / #b99a89      /* Texto muted/secundário */
--success: #2f8f6b / #4cb58a       /* Verde, status */
```

### Tipografia
- **Display/Corpo**: Geist (Google Fonts) + fallback system-font
- **Monoespaçado**: Geist Mono (Google Fonts) — usada em preços e links (`pede.plus/{slug}`)

## Seções da Página

1. **Nav** — Logo, links âncora, toggle de tema, botão CTA (sticky no topo).
2. **Hero** — Headline forte, subheadline, CTA principal, + widget interativo de cardápio (4 restaurantes fictícios, cores/itens mudam ao clicar).
3. **Como funciona** — 3 passos em estilo linha de comanda (numerados com borda pontilhada).
4. **Recursos** — Grid de 11 cards descrevendo funcionalidades do produto (personalização, cardápio ilimitado, "Monte o seu", QR Code, Caixa, mensagens, estoque Premium, financeiro Premium, equipe, modo claro/escuro, sem app).
5. **Segmentos** — 4 tipos de restaurante atendidos (hamburgueria, pizzaria, cafeteria, sushi bar).
6. **Planos** — Tabela de 3 planos (Free/Starter/Premium) com preços, limites, features.
7. **CTA Final** — Chamada para ação de fechamento + botão primário.
8. **Footer** — Logo, descrição, copyright.

## Interatividade

### Theme Toggle (Claro/Escuro)
- Botão no canto superior direito (ícone sol/lua).
- Alterna entre tema claro e escuro.
- Persistência via `localStorage.setItem("theme")`.
- Fallback para preferência do SO (`prefers-color-scheme: dark`).

### Widget Interativo do Hero
- 4 abas: "Hamburgueria do Luiz", "Pizzaria Napoli", "Café da Ana", "Sushi Kaze".
- Clique em uma aba:
  - Muda a cor de destaque do mockup.
  - Muda as iniciais do monograma (L, N, A, K).
  - Muda os itens exibidos (nome + preço em monoespaçado).
  - Muda o link exibido (`pede.plus/{slug}`).
- Implementado em vanilla JS, sem framework.

### CTA Links
- Todos os botões de "Criar conta" / "Começar grátis" apontam para `http://localhost:3000/entrar`.
- Constante `CTA_URL` no topo de `script.js` — trocar uma vez para atualizar todos os links.
- Quando houver domínio de produção real (ex: `app.pede.plus`), basta editar `CTA_URL`.

### Scroll Suave
- Links âncora internos (`#como-funciona`, `#recursos`, etc.) fazem scroll suave.
- Fallback para navegadores que não suportam `behavior: "smooth"`.

## Responsividade

- **Mobile-first**: Layout em coluna única até 640px.
- **Tablet**: Grid de 2 colunas para recursos/segmentos entre 640–1024px.
- **Desktop**: Grid de 3 colunas acima de 1024px.
- **Nav**: Menu de links escondido em mobile, exibido em desktop (>768px).
- **Demo widget**: Abas empilhadas em mobile, lado a lado em desktop.

## Como Usar Localmente

### Opção 1: Servidor Python (Built-in)
```bash
cd landingPage
python -m http.server 8000
# Abrir http://localhost:8000
```

### Opção 2: Qualquer servidor estático
```bash
# npm + http-server
npm install -g http-server
cd landingPage
http-server -p 8000

# Ou Node.js puro
node -e "require('http').createServer((q,s)=>require('fs').readFile('.$req.url,_=>s.end(_))).listen(8000)"
```

### Opção 3: Vercel, Netlify, GitHub Pages
1. Fazer fork/commit da pasta `landingPage/`.
2. Conectar repo à plataforma.
3. Apontar "root" para `landingPage/`.
4. Deploy automático.

## Produção

### URL do CTA
Antes de publicar:
1. Abrir `script.js`.
2. Trocar `CTA_URL = "http://localhost:3000/entrar"` para a URL real de produção (ex: `https://app.pede.plus/entrar`).
3. Commit e redeploy.

### Domain
- Domínio recomendado: `pede.plus` (já usado na landing como exemplo).
- Alternativa: `marketing.pede.plus`, `www.pede.plus`, ou subdomínio.
- Apontar DNS para o host de hospedagem (Vercel, Netlify, etc.).

### HTTPS
- Certificado SSL automático (Vercel, Netlify incluem).
- Se hospedagem própria: usar Let's Encrypt ou Cloudflare.

### Performance
- Sem dependências externas além do Google Fonts (carregadas via CDN).
- HTML/CSS/JS minificados em produção (opcional, tamanho atual é baixo).
- Cache do CSS/JS via headers HTTP (configurar no servidor).

## Conformidade com o Produto

A landing promete apenas recursos que **existem de verdade** no app Pede+:

✅ **Promessas seguras:**
- Personalização visual (logo, cores, link) — igual em todos os planos.
- Cardápio ilimitado (sem limites de produtos/categorias).
- "Monte o seu" com preço dinâmico em tempo real.
- QR Code por mesa com comandas que acumulam.
- Tela Caixa com divisão de conta e taxa de serviço.
- Central de mensagens/reclamações.
- Estoque e financeiro (Premium).
- Múltiplos usuários com papéis (Proprietário/Gerente/Atendente).
- Modo claro/escuro.
- Sem necessidade de instalar app.

❌ **Evitar prometer:**
- Pagamento online dentro da plataforma (não existe, fica fora).
- Upload real de imagem como recurso polido (hoje é campo de URL, não upload file real).
- Notificações push/SMS (não implementadas).
- App nativo iOS/Android (é web, "sem app" é um ponto positivo).
- Trial ou período de teste grátis (não existe — o plano Free já cumpre esse papel, sem cartão de crédito).

## Customização Futura

### Trocar cores da marca
1. Editar variáveis CSS em `styles.css` (`:root { ... }`).
2. Suporta tema claro e escuro — atualizar ambos os blocos.

### Trocar exemplos de restaurantes
1. Editar array `RESTAURANTS` em `script.js`.
2. Cada restaurante tem: `name`, `slug`, `initials`, `color`, `items`.

### Adicionar novas seções
1. Adicionar `<section id="...">` em `index.html`.
2. Adicionar classes CSS em `styles.css`.
3. Adicionar link âncora em `.nav-links`.
4. JS de interatividade (se necessário) em `script.js`.

### Integração com analytics
1. Adicionar Google Analytics ou similar no `<head>` de `index.html`.
2. Rastrear cliques de CTA via `window.gtag('event', '...')` em `script.js`.

## Suporte

- **Reportar bug**: Abrir issue no repositório Pede+.
- **Melhorias**: Pull request bem-vindo.
- **Deploy**: Documentado em cada plataforma (Vercel, Netlify, etc.).

---

**Última atualização**: 2026-07-26  
**Versão**: 1.0  
**Status**: Pronta para produção
