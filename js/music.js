(() => {
  const audio = document.getElementById("bgMusic");
  const button = document.getElementById("musicToggle");
  if (!audio || !button) return;

  button.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        button.classList.add("playing");
        button.setAttribute("aria-label", "배경음악 정지");
      } else {
        audio.pause();
        button.classList.remove("playing");
        button.setAttribute("aria-label", "배경음악 재생");
      }
    } catch (error) {
      console.warn("음악 파일을 확인해 주세요.", error);
    }
  });
})();
