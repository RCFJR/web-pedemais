// URL do CTA — trocar aqui para domínio de produção quando tiver
const CTA_URL = "https://pedemaisapp.nextcodebrasil.com.br/";

// Dados dos restaurantes fictícios para o widget interativo do hero.
// Nomes, slugs e itens são textos traduzíveis: ficam no dicionário I18N
// (chaves demo.r{i}.name, demo.r{i}.slug, demo.r{i}.i{j}.name).
// Preços são números (null = "Cortesia"), formatados por idioma.
const RESTAURANTS = [
  {
    initials: "L",
    color: "#ff4b2e", // accent
    prices: [28.5, 12.0, 8.9],
  },
  {
    initials: "N",
    color: "#ffb238", // accent-2
    prices: [45.0, 10.5, 15.0],
  },
  {
    initials: "A",
    color: "#2f8f6b", // success (verde)
    prices: [6.5, 8.0, 16.0],
  },
  {
    initials: "K",
    color: "#4cb58a", // success (verde claro em dark mode)
    prices: [72.0, 5.0, null],
  },
];

// ============================================================================
// Internacionalização (i18n) — pt-BR / en
// Para adicionar idioma ou chave, veja a seção "i18n" do README.md.
// ============================================================================

const DEFAULT_LANG = "pt-BR";
const SUPPORTED_LANGS = ["pt-BR", "en"];
const LANG_STORAGE_KEY = "pede-lang";
const PRICE_LOCALES = { "pt-BR": "pt-BR", en: "en-US" };

const I18N = {
  "pt-BR": {
    "meta.title": "Pede+ — O cardápio digital que veste sua marca",
    "meta.description": "Plataforma de cardápio digital personalizável para restaurantes. Logo, paleta de cores e link exclusivo, em minutos. Sem mensalidade, sem surpresas.",

    "nav.how": "Como funciona",
    "nav.features": "Recursos",
    "nav.plans": "Planos",
    "nav.segments": "Para seu restaurante",
    "nav.signup": "Criar conta",
    "nav.themeToggle": "Alternar tema",
    "nav.language": "Idioma",
    "nav.langPt": "Português (Brasil)",
    "nav.langEn": "English",

    "hero.title": "O cardápio digital que veste a marca do seu restaurante",
    "hero.subtitle": "Personalize logo, cores e link exclusivo em minutos. Sem desenvolvimento, sem complicação.",
    "hero.cta": "Começar grátis agora",
    "hero.note": "Sem cartão de crédito. Cria sua conta em 2 minutos.",

    "demo.menu": "Cardápio",
    "demo.free": "Cortesia",
    "demo.r0.name": "Hamburgueria do Luiz",
    "demo.r0.slug": "hamburgueria-do-luiz",
    "demo.r0.i0.name": "Hamburger Premium",
    "demo.r0.i1.name": "Batata Frita",
    "demo.r0.i2.name": "Refrigerante 1L",
    "demo.r1.name": "Pizzaria Napoli",
    "demo.r1.slug": "pizzaria-napoli",
    "demo.r1.i0.name": "Pizza Margherita",
    "demo.r1.i1.name": "Refrigerante 2L",
    "demo.r1.i2.name": "Sobremesa Gelada",
    "demo.r2.name": "Café da Ana",
    "demo.r2.slug": "cafe-da-ana",
    "demo.r2.i0.name": "Café Especial",
    "demo.r2.i1.name": "Bolo de Chocolate",
    "demo.r2.i2.name": "Sanduíche Natural",
    "demo.r3.name": "Sushi Kaze",
    "demo.r3.slug": "sushi-kaze",
    "demo.r3.i0.name": "Combinado Premium",
    "demo.r3.i1.name": "Água com Gás",
    "demo.r3.i2.name": "Wasabi Caseiro",

    "how.title": "Como funciona em 3 passos",
    "how.s1.title": "Crie sua conta",
    "how.s1.text": "Login com Google em segundos. Sem complicação, sem senha para lembrar.",
    "how.s2.title": "Personalize seu cardápio",
    "how.s2.text": "Adicione logo, escolha 3 cores e crie um link exclusivo. Tudo em minutos, com preview em tempo real.",
    "how.s3.title": "Compartilhe e receba pedidos",
    "how.s3.text": "Link para delivery, QR Code para mesa, ou compartilhe no WhatsApp. Tudo pronto. Os pedidos chegam no seu painel.",

    "feat.title": "Recursos completos, sem pegadinha",
    "feat.subtitle": "Tudo que você precisa para rodar seu restaurante digital, mesmo no plano grátis.",
    "feat.brand.title": "Marca própria",
    "feat.brand.text": "Logo, 3 cores de destaque e link exclusivo. Seu cardápio, sua identidade. Mesmo no plano grátis.",
    "feat.unlimited.title": "Cardápio ilimitado",
    "feat.unlimited.text": "Quantos produtos e categorias quiser. Sem limites de itens, mesmo no Free.",
    "feat.build.title": "Monte o seu",
    "feat.build.text": "Pizzas, bolos, lanches — com preço dinâmico que muda em tempo real conforme o cliente monta.",
    "feat.qr.title": "QR Code por mesa",
    "feat.qr.text": "Pedidos na mesa acumulam em uma única comanda. Feche a conta quando quiser, com ou sem taxa de serviço.",
    "feat.cashier.title": "Caixa + divisão",
    "feat.cashier.text": "Divida a conta por 2, 3, 4 pessoas na hora do fechamento. Transparência total.",
    "feat.support.title": "Central de atendimento",
    "feat.support.text": "Mensagens e reclamações dos clientes em um único lugar. Sem sair da plataforma.",
    "feat.stock.title": "Controle de estoque",
    "feat.stock.text": "Acompanhe quantidades, alertas de baixo estoque e esgotamento automático.",
    "feat.finance.title": "Financeiro",
    "feat.finance.text": "Contas a pagar e receber, despesas recorrentes, saldo do mês.",
    "feat.team.title": "Equipe",
    "feat.team.text": "Proprietário, Gerente, Atendente — cada um vê o que precisa. Sem expor dados sensíveis.",
    "feat.theme.title": "Tema claro/escuro",
    "feat.theme.text": "Escolha qual tema você prefere. A mesma beleza em qualquer tela.",
    "feat.noapp.title": "Sem app para instalar",
    "feat.noapp.text": "Cardápio abre direto no navegador. Compartilhe um link, seus clientes abrem e pronto.",
    "badge.premium": "Premium",

    "seg.title": "Qualquer restaurante é bem-vindo",
    "seg.subtitle": "Pede+ funciona para qualquer tipo de negócio. Aproveita a escala da plataforma e o poder de customização.",
    "seg.burger.title": "🍔 Hamburgueria",
    "seg.burger.text": "Combos, extras customizáveis, promoções do dia — tudo com preço em tempo real.",
    "seg.pizza.title": "🍕 Pizzaria",
    "seg.pizza.text": "\"Monte a sua\" com sabores, tamanhos e borda — cada escolha muda o preço ao vivo.",
    "seg.cafe.title": "☕ Cafeteria",
    "seg.cafe.text": "Bebidas, bolos, lanches — cardápio visual que faz água na boca mesmo pela foto.",
    "seg.sushi.title": "🍣 Sushi Bar",
    "seg.sushi.text": "Cardápios longos ficam organizados. Controle de estoque garante não vender o que falta.",

    "plans.title": "Planos para todo tamanho",
    "plans.subtitle": "Comece grátis. Evolua quando precisar. Sem contrato, sem burocracia, sem surpresas.",
    "plans.popular": "Popular",
    "plans.unit": "/mês",
    "plans.cta": "Começar agora",
    "plans.free.price": "Grátis",
    "plans.free.cta": "Começar grátis",
    "plans.free.note": "Ideal para testar e pequenos restaurantes.",
    "plans.starter.price": "R$ 39,90",
    "plans.starter.note": "Melhor para restaurantes em crescimento.",
    "plans.premium.price": "R$ 89,90",
    "plans.premium.note": "Completo. Sem limitações.",
    "plans.f.custom": "✓ Personalização completa (logo, cores, link)",
    "plans.f.orders100": "✓ Até 100 pedidos/mês",
    "plans.f.orders1000": "✓ Até 1.000 pedidos/mês",
    "plans.f.ordersUnlimited": "✓ Pedidos ilimitados",
    "plans.f.tables10": "✓ Até 10 mesas/comandas",
    "plans.f.tables50": "✓ Até 50 mesas/comandas",
    "plans.f.tablesUnlimited": "✓ Mesas/comandas ilimitadas",
    "plans.f.menu": "✓ Cardápio ilimitado",
    "plans.f.build": "✓ \"Monte o seu\" ilimitado",
    "plans.f.link": "✓ Pedidos por link e QR Code",
    "plans.f.messages": "✓ Central de mensagens",
    "plans.f.noStock": "✗ Estoque e financeiro",
    "plans.f.stock": "✓ Estoque e financeiro",
    "plans.note.strong": "A personalização visual é igual em todos os planos.",
    "plans.note.text": "O que muda é o volume de pedidos, mesas e acesso a estoque/financeiro. Comece grátis, faça upgrade quando precisar — sem pró-rata, sem complicação.",

    "cta.title": "Pronto para começar?",
    "cta.text": "Crie seu cardápio digital em 2 minutos. Grátis, sem cartão de crédito.",
    "cta.primary": "Criar minha conta agora",
    "cta.support": "Conversar com suporte",

    "footer.tagline": "O cardápio digital que veste sua marca.",
    "footer.copy": "© 2026 Pede+. Todos os direitos reservados.",
  },

  en: {
    "meta.title": "Pede+ — The digital menu that wears your brand",
    "meta.description": "Customizable digital menu platform for restaurants. Your logo, color palette and a unique link, in minutes. No monthly fee, no surprises.",

    "nav.how": "How it works",
    "nav.features": "Features",
    "nav.plans": "Pricing",
    "nav.segments": "For your restaurant",
    "nav.signup": "Sign up",
    "nav.themeToggle": "Toggle theme",
    "nav.language": "Language",
    "nav.langPt": "Português (Brasil)",
    "nav.langEn": "English",

    "hero.title": "The digital menu that wears your restaurant's brand",
    "hero.subtitle": "Customize your logo, colors and unique link in minutes. No development, no hassle.",
    "hero.cta": "Start free now",
    "hero.note": "No credit card required. Create your account in 2 minutes.",

    "demo.menu": "Menu",
    "demo.free": "Complimentary",
    "demo.r0.name": "Luiz's Burger Joint",
    "demo.r0.slug": "luizs-burger-joint",
    "demo.r0.i0.name": "Premium Burger",
    "demo.r0.i1.name": "French Fries",
    "demo.r0.i2.name": "Soda 1L",
    "demo.r1.name": "Napoli Pizzeria",
    "demo.r1.slug": "napoli-pizzeria",
    "demo.r1.i0.name": "Margherita Pizza",
    "demo.r1.i1.name": "Soda 2L",
    "demo.r1.i2.name": "Frozen Dessert",
    "demo.r2.name": "Ana's Café",
    "demo.r2.slug": "anas-cafe",
    "demo.r2.i0.name": "Specialty Coffee",
    "demo.r2.i1.name": "Chocolate Cake",
    "demo.r2.i2.name": "Natural Sandwich",
    "demo.r3.name": "Sushi Kaze",
    "demo.r3.slug": "sushi-kaze",
    "demo.r3.i0.name": "Premium Combo",
    "demo.r3.i1.name": "Sparkling Water",
    "demo.r3.i2.name": "Homemade Wasabi",

    "how.title": "How it works in 3 steps",
    "how.s1.title": "Create your account",
    "how.s1.text": "Sign in with Google in seconds. No hassle, no password to remember.",
    "how.s2.title": "Customize your menu",
    "how.s2.text": "Add your logo, pick 3 colors and create a unique link. All in minutes, with a real-time preview.",
    "how.s3.title": "Share and receive orders",
    "how.s3.text": "A link for delivery, a QR Code for the table, or share on WhatsApp. You're all set. Orders arrive in your dashboard.",

    "feat.title": "Complete features, no catch",
    "feat.subtitle": "Everything you need to run your digital restaurant, even on the free plan.",
    "feat.brand.title": "Your own brand",
    "feat.brand.text": "Logo, 3 accent colors and a unique link. Your menu, your identity. Even on the free plan.",
    "feat.unlimited.title": "Unlimited menu",
    "feat.unlimited.text": "As many products and categories as you want. No item limits, even on Free.",
    "feat.build.title": "Build your own",
    "feat.build.text": "Pizzas, cakes, sandwiches — with dynamic pricing that updates in real time as the customer builds.",
    "feat.qr.title": "QR Code per table",
    "feat.qr.text": "Table orders add up on a single tab. Close the bill whenever you want, with or without a service fee.",
    "feat.cashier.title": "Cashier + bill splitting",
    "feat.cashier.text": "Split the bill between 2, 3 or 4 people at checkout. Total transparency.",
    "feat.support.title": "Customer support hub",
    "feat.support.text": "Customer messages and complaints in one place. Without leaving the platform.",
    "feat.stock.title": "Inventory control",
    "feat.stock.text": "Track quantities, low-stock alerts and automatic sold-out handling.",
    "feat.finance.title": "Finance",
    "feat.finance.text": "Accounts payable and receivable, recurring expenses, monthly balance.",
    "feat.team.title": "Team",
    "feat.team.text": "Owner, Manager, Waiter — everyone sees what they need. No sensitive data exposed.",
    "feat.theme.title": "Light/dark theme",
    "feat.theme.text": "Pick the theme you prefer. The same look and feel on any screen.",
    "feat.noapp.title": "No app to install",
    "feat.noapp.text": "The menu opens right in the browser. Share a link, your customers open it, and that's it.",
    "badge.premium": "Premium",

    "seg.title": "Every restaurant is welcome",
    "seg.subtitle": "Pede+ works for any type of business. Take advantage of the platform's scale and its customization power.",
    "seg.burger.title": "🍔 Burger joint",
    "seg.burger.text": "Combos, customizable extras, daily specials — all with real-time pricing.",
    "seg.pizza.title": "🍕 Pizzeria",
    "seg.pizza.text": "\"Build your own\" with flavors, sizes and crust — every choice updates the price live.",
    "seg.cafe.title": "☕ Café",
    "seg.cafe.text": "Drinks, cakes, snacks — a visual menu that makes your mouth water, even from a photo.",
    "seg.sushi.title": "🍣 Sushi bar",
    "seg.sushi.text": "Long menus stay organized. Inventory control makes sure you never sell what you've run out of.",

    "plans.title": "Plans for every size",
    "plans.subtitle": "Start free. Upgrade when you need to. No contract, no red tape, no surprises.",
    "plans.popular": "Popular",
    "plans.unit": "/month",
    "plans.cta": "Get started",
    "plans.free.price": "Free",
    "plans.free.cta": "Start free",
    "plans.free.note": "Ideal for testing and small restaurants.",
    "plans.starter.price": "R$ 39.90",
    "plans.starter.note": "Best for growing restaurants.",
    "plans.premium.price": "R$ 89.90",
    "plans.premium.note": "Complete. No limits.",
    "plans.f.custom": "✓ Full customization (logo, colors, link)",
    "plans.f.orders100": "✓ Up to 100 orders/month",
    "plans.f.orders1000": "✓ Up to 1,000 orders/month",
    "plans.f.ordersUnlimited": "✓ Unlimited orders",
    "plans.f.tables10": "✓ Up to 10 tables/tabs",
    "plans.f.tables50": "✓ Up to 50 tables/tabs",
    "plans.f.tablesUnlimited": "✓ Unlimited tables/tabs",
    "plans.f.menu": "✓ Unlimited menu",
    "plans.f.build": "✓ Unlimited \"Build your own\"",
    "plans.f.link": "✓ Orders via link and QR Code",
    "plans.f.messages": "✓ Message center",
    "plans.f.noStock": "✗ Inventory and finance",
    "plans.f.stock": "✓ Inventory and finance",
    "plans.note.strong": "Visual customization is the same on every plan.",
    "plans.note.text": "What changes is the volume of orders, tables and access to inventory/finance. Start free, upgrade when you need to — no proration, no hassle.",

    "cta.title": "Ready to get started?",
    "cta.text": "Create your digital menu in 2 minutes. Free, no credit card required.",
    "cta.primary": "Create my account now",
    "cta.support": "Talk to support",

    "footer.tagline": "The digital menu that wears your brand.",
    "footer.copy": "© 2026 Pede+. All rights reserved.",
  },
};

let currentLang = DEFAULT_LANG;
let currentRestaurantIndex = 0;

// Retorna a tradução da chave no idioma atual (fallback: pt-BR; senão null)
function t(key, lang = currentLang) {
  const dict = I18N[lang] || {};
  if (key in dict) return dict[key];
  if (key in I18N[DEFAULT_LANG]) return I18N[DEFAULT_LANG][key];
  console.warn(`[i18n] chave ausente: ${key}`);
  return null;
}

function detectLang() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  } catch (e) {
    /* localStorage indisponível: segue para navigator.language */
  }
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("pt")) return "pt-BR";
  if (nav.startsWith("en")) return "en";
  return DEFAULT_LANG;
}

function initI18n() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang, true));
  });
  setLanguage(detectLang(), false);
}

function setLanguage(lang, persist) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;
  document.documentElement.lang = lang;

  if (persist) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {
      /* ignora: a preferência só vale nesta sessão */
    }
  }

  applyTranslations(); // inclui <title> e meta description
  updateLangSwitcher();
  updateMockup(currentRestaurantIndex); // re-renderiza o widget do hero
}

function applyTranslations() {
  // Texto: textContent por padrão; innerHTML só em chaves marcadas com
  // data-i18n-html (conteúdo estático e confiável do dicionário acima).
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value === null) return;
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = value;
    else el.textContent = value;
  });

  // Atributos: data-i18n-attr="atributo:chave" (vários separados por ";")
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const idx = pair.indexOf(":");
      if (idx < 0) return;
      const value = t(pair.slice(idx + 1).trim());
      if (value !== null) el.setAttribute(pair.slice(0, idx).trim(), value);
    });
  });
}

function updateLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
  });
}

function formatPrice(value) {
  if (value === null) return t("demo.free");
  return (
    "R$ " +
    value.toLocaleString(PRICE_LOCALES[currentLang], {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

// ============================================================================
// Inicialização ao carregar a página
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initDemoWidget();
  initI18n();
  initCTALinks();
});

// ============================================================================
// Tema claro/escuro
// ============================================================================

function initTheme() {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = storedTheme || (prefersDark ? "dark" : "light");

  applyTheme(theme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || theme;
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeToggleIcon(theme);
}

function updateThemeToggleIcon(theme) {
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  if (sunIcon && moonIcon) {
    if (theme === "dark") {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    } else {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }
  }
}

// ============================================================================
// Widget interativo do hero (troca entre restaurantes)
// ============================================================================

function initDemoWidget() {
  const tabs = document.querySelectorAll(".demo-tab");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active de todos
      tabs.forEach((t) => t.classList.remove("active"));
      // Adiciona active no clicado
      tab.classList.add("active");
      // Atualiza o mockup
      currentRestaurantIndex = index;
      updateMockup(index);
    });
  });

  // Inicializar com o primeiro restaurante
  updateMockup(0);
}

function updateMockup(restaurantIndex) {
  const restaurant = RESTAURANTS[restaurantIndex];
  const mockup = document.querySelector(".demo-mockup");
  const monogram = document.querySelector(".mockup-monogram");
  const itemsContainer = document.querySelector(".mockup-items");
  const linkElement = document.querySelector(".mockup-link span");

  if (!restaurant || !mockup || !monogram || !itemsContainer || !linkElement) return;

  // Atualizar variáveis CSS e conteúdo
  mockup.style.setProperty("--accent-color", restaurant.color);
  monogram.textContent = restaurant.initials;
  monogram.style.backgroundColor = restaurant.color;

  // Limpar e remontar items (textContent: sem HTML vindo do dicionário)
  itemsContainer.innerHTML = "";
  restaurant.prices.forEach((price, j) => {
    const itemEl = document.createElement("div");
    itemEl.className = "mockup-item";

    const nameEl = document.createElement("div");
    nameEl.className = "item-name";
    nameEl.textContent = t(`demo.r${restaurantIndex}.i${j}.name`);

    const priceEl = document.createElement("div");
    priceEl.className = "item-price";
    priceEl.textContent = formatPrice(price);

    itemEl.append(nameEl, priceEl);
    itemsContainer.appendChild(itemEl);
  });

  // Atualizar link
  linkElement.textContent = `pede.plus/${t(`demo.r${restaurantIndex}.slug`)}`;
}

// ============================================================================
// Atualizar todos os links de CTA para a URL configurada
// ============================================================================

function initCTALinks() {
  // Encontrar todos os links com href="#cta" ou href="#entrar" e trocar para CTA_URL
  const ctaLinks = document.querySelectorAll('a[href="#cta"], a[href="#entrar"]');
  ctaLinks.forEach((link) => {
    link.href = CTA_URL;
  });

  // Botão de "Conversar com suporte" fica como "#" (placeholder)
  // se quiser um Mailto ou Slack, trocar aqui
}

// ============================================================================
// Scroll suave para links âncora (fallback, navegadores modernos já fazem)
// ============================================================================

document.addEventListener("click", (e) => {
  const target = e.target.closest("a[href^='#']");
  if (!target) return;

  const href = target.getAttribute("href");
  if (href === "#") return;

  const element = document.querySelector(href);
  if (element) {
    e.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
  }
});
