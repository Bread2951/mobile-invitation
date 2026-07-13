(() => {
  const toast = document.getElementById("toast");
  let toastTimer;

  window.showToast = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  };

  window.copyText = async text => {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  document.querySelectorAll(".copy-account").forEach(button => {
    button.addEventListener("click", async () => {
      await window.copyText(button.dataset.copy);
      window.showToast("계좌번호가 복사되었습니다.");
    });
  });

  const copyUrl = document.getElementById("copyUrl");
  if (copyUrl) {
    copyUrl.addEventListener("click", async () => {
      await window.copyText(location.href);
      window.showToast("청첩장 주소가 복사되었습니다.");
    });
  }
})();
