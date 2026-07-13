(() => {
  const address = "경기도 광명시 일직로 72";
  const copyButton = document.getElementById("copyAddress");

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      await window.copyText(address);
      window.showToast("주소가 복사되었습니다.");
    });
  }
})();
