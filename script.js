// URL do CTA — trocar aqui para domínio de produção quando tiver
const CTA_URL = "http://localhost:3000/entrar";

// Dados dos restaurantes fictícios para o widget interativo do hero
const RESTAURANTS = [
  {
    name: "Hamburgueria do Luiz",
    slug: "hamburgueria-do-luiz",
    initials: "L",
    color: "#ff4b2e", // accent
    items: [
      { name: "Hamburger Premium", price: "R$ 28,50" },
      { name: "Batata Frita", price: "R$ 12,00" },
      { name: "Refrigerante 1L", price: "R$ 8,90" },
    ],
  },
  {
    name: "Pizzaria Napoli",
    slug: "pizzaria-napoli",
    initials: "N",
    color: "#ffb238", // accent-2
    items: [
      { name: "Pizza Margherita", price: "R$ 45,00" },
      { name: "Refrigerante 2L", price: "R$ 10,50" },
      { name: "Sobremesa Gelada", price: "R$ 15,00" },
    ],
  },
  {
    name: "Café da Ana",
    slug: "cafe-da-ana",
    initials: "A",
    color: "#2f8f6b", // success (verde)
    items: [
      { name: "Café Especial", price: "R$ 6,50" },
      { name: "Bolo de Chocolate", price: "R$ 8,00" },
      { name: "Sanduíche Natural", price: "R$ 16,00" },
    ],
  },
  {
    name: "Sushi Kaze",
    slug: "sushi-kaze",
    initials: "K",
    color: "#4cb58a", // success (verde claro em dark mode)
    items: [
      { name: "Combinado Premium", price: "R$ 72,00" },
      { name: "Água com Gás", price: "R$ 5,00" },
      { name: "Wasabi Caseiro", price: "Cortesia" },
    ],
  },
];

// ============================================================================
// Inicialização ao carregar a página
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initDemoWidget();
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

  if (!mockup || !monogram || !itemsContainer || !linkElement) return;

  // Atualizar variáveis CSS e conteúdo
  mockup.style.setProperty("--accent-color", restaurant.color);
  monogram.textContent = restaurant.initials;
  monogram.style.backgroundColor = restaurant.color;

  // Limpar e remontar items
  itemsContainer.innerHTML = "";
  restaurant.items.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = "mockup-item";
    itemEl.innerHTML = `
      <div class="item-name">${item.name}</div>
      <div class="item-price">${item.price}</div>
    `;
    itemsContainer.appendChild(itemEl);
  });

  // Atualizar link
  linkElement.textContent = `pede.plus/${restaurant.slug}`;
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
