document.addEventListener("DOMContentLoaded", function () {
  let isPlaying = false;

  window.toggleMusic = function () {
    const bgm = document.getElementById("bgm");
    const btn = document.getElementById("musicBtn");

    if (!bgm || !btn) return;

    bgm.volume = 0.5;

    if (!isPlaying) {
      bgm.play().then(() => {
        btn.classList.add("playing");
        btn.innerText = "♪";
        isPlaying = true;
      }).catch((error) => {
        alert("음악 재생 실패: " + error.message);
      });
    } else {
      bgm.pause();
      btn.classList.remove("playing");
      btn.innerText = "♫";
      isPlaying = false;
    }
  };
});