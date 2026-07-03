function openLightbox(src){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

const weddingDate = new Date("2026-09-20T11:00:00");
const today = new Date();

const diff = weddingDate - today;
const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

document.getElementById("dday").innerText =
  days > 0 ? `D-${days}` : days === 0 ? "D-DAY" : `D+${Math.abs(days)}`;

AOS.init({
  duration: 1000,
  once: true,
  offset: 120
});

if (typeof Swiper !== "undefined") {
  const swiper = new Swiper(".gallerySwiper", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 18,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function createPetal(){
  const petals = document.getElementById("petals");

  if (!petals) return;

  const petal = document.createElement("span");

  petal.className = "petal";
  petal.innerText = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (6 + Math.random() * 5) + "s";
  petal.style.fontSize = (12 + Math.random() * 10) + "px";

  petals.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 11000);
}

setInterval(createPetal, 900);

let isPlaying = false;

function toggleMusic(){
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("musicBtn");

  if(!isPlaying){
    bgm.play().then(() => {
      btn.classList.add("playing");
      btn.innerText = "♪";
      isPlaying = true;
    }).catch(() => {
      alert("음악 파일을 찾지 못했거나 브라우저에서 재생을 막았습니다.");
    });
  }else{
    bgm.pause();
    btn.classList.remove("playing");
    btn.innerText = "♫";
    isPlaying = false;
  }
}