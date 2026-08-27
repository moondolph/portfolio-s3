"use strict";
import { resolveLang } from "./i18n.js";

let typer = null;
let __typeitStartSeq = 0;

export function startTypeit(lang = resolveLang()) {
  const __seq = ++__typeitStartSeq;
  let el = document.querySelector("#typeitTarget");
  if (!el || typeof TypeIt === "undefined") return;

  if (typer) {
    try {
      typer.destroy();
    } catch {}
    typer = null;

    // TypeIt sometimes leaves an async timer in flight past destroy(), which would
    // otherwise keep writing into this element after the new instance starts and
    // interleave characters from two languages. Swap in a fresh, untouched node so
    // any stray write from the old instance lands on a detached element instead.
    const fresh = el.cloneNode(false);
    fresh.textContent = "";
    el.replaceWith(fresh);
    el = fresh;
  }

  const phrases = {
    ko: [
      "클라우드 & DevOps 엔지니어",
      "AWS/GCP 인프라를 설계하고 자동화하는 엔지니어",
      "클라우드 마이그레이션과 IaC를 다루는 엔지니어",
      "웹 개발부터 인프라 운영까지 경험한 엔지니어",
      "AI를 서비스 자동화에 연결하는 방법을 학습하는 엔지니어",
    ],
    ja: [
      "クラウド & DevOpsエンジニア",
      "AWS/GCPインフラを設計・自動化するエンジニア",
      "クラウド移行とIaCを担うエンジニア",
      "Web開発からインフラ運用まで経験したエンジニア",
      "AIを自動化に繋げる方法を学ぶエンジニア",
    ],
    en: [
      "a Cloud & DevOps Engineer",
      "an engineer who designs and automates AWS/GCP infrastructure",
      "an engineer specializing in cloud migration and IaC",
      "an engineer with experience from web development to infrastructure operations",
      "an engineer learning to connect AI into automation workflows",
    ],
  };

  const selected = phrases[lang] || phrases.en;
  typer = new TypeIt("#typeitTarget", { loop: true, speed: 76, lifeLike: true });
  selected.forEach((phrase) => {
    typer.type(phrase).pause(1100).delete();
  });
  typer.go();
}
