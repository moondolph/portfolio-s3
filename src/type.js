"use strict";
import { resolveLang } from "./i18n.js";

let typer = null;
let __typeitStartSeq = 0;

export function startTypeit(lang = resolveLang()) {
  const __seq = ++__typeitStartSeq;
  const el = document.querySelector("#typeitTarget");
  if (!el || typeof TypeIt === "undefined") return;

  if (typer) {
    try {
      typer.destroy();
    } catch {}
    typer = null;
    el.textContent = "";
    el.innerHTML = "";
  }

  const phrases = {
    ko: ["클라우드 엔지니어", "DevOps 엔지니어", "배치 플랫폼 엔지니어", "AWS/GCP를 다루는 인프라 엔지니어"],
    ja: ["クラウドエンジニア", "DevOpsエンジニア", "バッチ基盤エンジニア", "AWS/GCPを扱うインフラエンジニア"],
    en: ["a Cloud Engineer", "a DevOps Engineer", "a Batch Platform Engineer", "an AWS/GCP Infrastructure Engineer"],
  };

  const selected = phrases[lang] || phrases.en;
  typer = new TypeIt("#typeitTarget", { loop: true, speed: 76, lifeLike: true });
  selected.forEach((phrase) => {
    typer.type(phrase).pause(1100).delete();
  });
  typer.go();
}
