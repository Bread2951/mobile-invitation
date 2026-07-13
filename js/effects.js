(() => {
  document.querySelectorAll(".accordion-head").forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".accordion").classList.toggle("open");
    });
  });

  document.querySelectorAll("[data-modal-open]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modalOpen);
      if (!modal) return;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (!modal) return;
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  });
})();
