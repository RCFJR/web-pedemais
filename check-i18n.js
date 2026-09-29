// Verifica paridade de chaves i18n: HTML x dicionários (pt-BR / en).
// Uso: node landingPage/check-i18n.js   (sem dependências)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const src = fs.readFileSync(path.join(__dirname, "script.js"), "utf8");

const ctx = { document: { addEventListener() {} }, window: {}, console };
vm.createContext(ctx);
vm.runInContext(src + "\n;this.__I18N = I18N; this.__R = RESTAURANTS;", ctx);
const I18N = ctx.__I18N;
const langs = Object.keys(I18N);

const used = new Set();
for (const m of html.matchAll(/data-i18n="([^"]+)"/g)) used.add(m[1]);
for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g))
  m[1].split(";").forEach((p) => used.add(p.slice(p.indexOf(":") + 1).trim()));
// Chaves geradas dinamicamente pelo widget do hero
ctx.__R.forEach((r, i) => {
  used.add(`demo.r${i}.name`);
  used.add(`demo.r${i}.slug`);
  r.prices.forEach((_, j) => used.add(`demo.r${i}.i${j}.name`));
  if (r.prices.includes(null)) used.add("demo.free");
});

let errors = 0;
const err = (msg) => { console.error("ERRO:", msg); errors++; };

for (const lang of langs) {
  for (const k of used) if (!(k in I18N[lang])) err(`[${lang}] chave usada mas ausente: ${k}`);
  for (const k of Object.keys(I18N[lang])) if (!used.has(k)) console.warn(`aviso [${lang}] chave nao usada: ${k}`);
  for (const [k, v] of Object.entries(I18N[lang])) if (!String(v).trim()) err(`[${lang}] vazio: ${k}`);
}
for (const a of langs) for (const b of langs) {
  if (a === b) continue;
  for (const k of Object.keys(I18N[a])) if (!(k in I18N[b])) err(`chave em ${a} mas nao em ${b}: ${k}`);
}

console.log(`${used.size} chaves usadas; idiomas: ${langs.join(", ")}; ${errors} erro(s)`);
process.exit(errors ? 1 : 0);
