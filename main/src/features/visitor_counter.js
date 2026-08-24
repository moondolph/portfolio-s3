"use strict";

const API_URL = "https://4xe1z5ur8a.execute-api.ap-northeast-2.amazonaws.com/visit";

function todayKST() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

export async function initVisitorCounter() {
  const todayEl = document.getElementById("visitorToday");
  const totalEl = document.getElementById("visitorTotal");
  if (!todayEl || !totalEl) return;

  const flagKey = `portfolioVisited_${todayKST()}`;
  const alreadyCounted = localStorage.getItem(flagKey) === "1";

  try {
    const res = await fetch(`${API_URL}?incr=${alreadyCounted ? "0" : "1"}`);
    if (!res.ok) throw new Error(`visitor counter request failed: ${res.status}`);
    const { today, total } = await res.json();

    if (!alreadyCounted) localStorage.setItem(flagKey, "1");

    todayEl.textContent = today.toLocaleString();
    totalEl.textContent = total.toLocaleString();
  } catch {
    todayEl.textContent = "-";
    totalEl.textContent = "-";
  }
}
