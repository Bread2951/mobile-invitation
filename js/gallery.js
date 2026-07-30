(() => {
  const items = [...document.querySelectorAll(".gallery-item")];
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImage");

  lightboxImage.setAttribute("draggable", "false");
  lightboxImage.style.touchAction = "none";
  lightboxImage.style.userSelect = "none";
  lightboxImage.style.webkitUserDrag = "none";

  if (!lightbox || !image || !items.length) return;

  const sources = items.map(item => item.querySelector("img").src);
  let current = 0;

  function show(index) {
    current = (index + sources.length) % sources.length;
    image.src = sources[current];
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  items.forEach((item, index) => item.addEventListener("click", () => show(index)));
  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => show(current - 1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => show(current + 1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();

(() => {
  const galleryGrid = document.getElementById("galleryGrid");
  const galleryMoreBtn = document.getElementById("galleryMoreBtn");

  if (!galleryGrid || !galleryMoreBtn) return;

  galleryMoreBtn.addEventListener("click", () => {
    const isExpanded = galleryGrid.classList.toggle("is-expanded");
    const buttonText = galleryMoreBtn.querySelector("span");

    galleryMoreBtn.classList.toggle("is-open", isExpanded);

    if (buttonText) {
      buttonText.textContent = isExpanded ? "접기" : "더보기";
    }
  });
})();