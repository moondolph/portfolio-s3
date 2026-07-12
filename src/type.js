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
    ko: [
      "클라우드 엔지니어",
      "DevOps 엔지니어",
      "언어의 장벽 없이 일하는 글로벌 인프라 엔지니어",
      "AWS/GCP를 다루는 인프라 엔지니어",
      "프론트,백엔드,인프라 모두 경험있는 멀티플레이어 엔지니어",
    ],
    ja: [
      "クラウドエンジニア",
      "DevOpsエンジニア",
      "言語の壁なく働くグローバルインフラエンジニア",
      "AWS/GCPを扱うインフラエンジニア",
      "フロント・バックエンド・インフラを経験したマルチプレイヤーエンジニア",
    ],
    en: [
      "a Cloud Engineer",
      "a DevOps Engineer",
      "a Global Infra Engineer, no language barrier",
      "an AWS/GCP Infrastructure Engineer",
      "a Multi-role Engineer across Frontend, Backend, and Infra",
    ],
  };

  const selected = phrases[lang] || phrases.en;
  typer = new TypeIt("#typeitTarget", { loop: true, speed: 76, lifeLike: true });
  selected.forEach((phrase) => {
    typer.type(phrase).pause(1100).delete();
  });
  typer.go();
}
