// src/i18n.js
const SUPPORTED = ["en", "ja", "ko"];
const DEFAULT_LANG = "ko";

function getLangFromQuery() {
  const params = new URLSearchParams(location.search);
  const l = params.get("lang");
  return SUPPORTED.includes(l) ? l : null;
}

function getLangFromStorage() {
  const l = localStorage.getItem("lang");
  return SUPPORTED.includes(l) ? l : null;
}

function getLangFromNavigator() {
  const nav = navigator.language?.toLowerCase() || "";
  if (nav.startsWith("ko")) return "ko";
  if (nav.startsWith("ja")) return "ja";
  return "en";
}

export function resolveLang() {
  return getLangFromQuery() || getLangFromStorage() || getLangFromNavigator() || DEFAULT_LANG;
}

async function loadDict(lang) {
  const res = await fetch(`./i18n/${lang}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("i18n load failed");
  return res.json();
}

function setText(node, value) {
  // 기본은 textContent로 안전하게 교체
  node.textContent = value;
}

function applyAttributes(translations) {
  // 필요하면 title/alt/placeholder 같은 속성도 번역
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    // 예: data-i18n-attr="title:nav.home;alt:alt.profile"
    const pairs = el
      .getAttribute("data-i18n-attr")
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
    pairs.forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const val = translations[key];
      if (val) el.setAttribute(attr, val);
    });
  });
}

function applyTexts(translations) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = translations[key];
    if (typeof val === "string") {
      // 일부 키는 줄바꿈/마크업 허용이 필요할 수 있음
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val.replace(/\n/g, "<br>");
      } else {
        setText(el, val);
      }
    }
  });
}

function applyMeta(translations, lang) {
  // <html lang>
  document.documentElement.setAttribute("lang", lang);

  // <title>
  if (translations["site.title"]) document.title = translations["site.title"];

  // <meta name="description">
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations["site.description"]) {
    metaDesc.setAttribute("content", translations["site.description"]);
  }

  // Open Graph (optional)
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && translations["og.title"]) ogTitle.setAttribute("content", translations["og.title"]);

  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType && translations["og.type"]) ogType.setAttribute("content", translations["og.type"]);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && translations["og.image"]) ogImage.setAttribute("content", translations["og.image"]);
}

export async function applyI18n(lang) {
  const dict = await loadDict(lang);
  applyTexts(dict);
  applyAttributes(dict);
  applyMeta(dict, lang);
}
