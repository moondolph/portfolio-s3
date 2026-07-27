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
      "풀스택 · AI · 클라우드 엔지니어",
      "서비스를 개발하고 배포하고 운영하는 엔지니어",
      "AWS/GCP 인프라를 다루는 클라우드 엔지니어",
      "프론트엔드부터 인프라까지 경험한 엔지니어",
      "AI를 서비스에 연결하는 방법을 학습하는 엔지니어",
    ],
    ja: [
      "フルスタック・AI・クラウドエンジニア",
      "サービスを開発し、デプロイし、運用するエンジニア",
      "AWS/GCPを扱うクラウドエンジニア",
      "フロントエンドからインフラまで経験したエンジニア",
      "AIをサービスに繋げる方法を学ぶエンジニア",
    ],
    en: [
      "a Full Stack · AI · Cloud Engineer",
      "an engineer who builds, deploys, and operates services",
      "a Cloud Engineer working across AWS and GCP",
      "an engineer with experience from frontend to infrastructure",
      "an engineer learning to connect AI into real services",
    ],
  };

  const selected = phrases[lang] || phrases.en;
  typer = new TypeIt("#typeitTarget", { loop: true, speed: 76, lifeLike: true });
  selected.forEach((phrase) => {
    typer.type(phrase).pause(1100).delete();
  });
  typer.go();
}
