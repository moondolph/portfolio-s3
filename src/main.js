"use strict";

import { resolveLang, applyI18n } from "./i18n.js";
import { startTypeit } from "./type.js";
import { initHeader } from "./features/header.js";
import { initArrowUp } from "./features/scroll_fade.js";
import { initVisitorCounter } from "./features/visitor_counter.js";

initHeader();
initArrowUp();
initVisitorCounter();

const select = document.getElementById("langSelect");
const current = resolveLang();
select.value = current;

let __langChangeSeq = 0;

// 최초 렌더
{
  const seq = ++__langChangeSeq;
  applyI18n(current).then(() => {
    if (seq !== __langChangeSeq) return;
    if (select.value !== current) return;
    startTypeit(current);
  });
}

// 언어 변경 시
select.addEventListener("change", async (e) => {
  const lang = e.target.value;
  const seq = ++__langChangeSeq;
  localStorage.setItem("lang", lang);

  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url.toString());

  await applyI18n(lang);
  if (seq !== __langChangeSeq) return;
  if (select.value !== lang) return;
  startTypeit(lang); // 기존 TypeIt 파기 후 재시작 (latest-only)
});
