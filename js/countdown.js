document.addEventListener("DOMContentLoaded", function () {
  const ddayElement = document.getElementById("dday");

  if (!ddayElement) return;

  const weddingDate = new Date("2026-09-20T11:00:00");
  const today = new Date();

  const diff = weddingDate - today;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  ddayElement.innerText =
    days > 0 ? `D-${days}` : days === 0 ? "D-DAY" : `D+${Math.abs(days)}`;
});