(() => {
  const KAKAO_JAVASCRIPT_KEY = "b8ab2fa1e7602d86bb0e62ceb2d2d2a6";

  const shareButton = document.getElementById("kakaoShare");

  if (!shareButton) return;

  if (!window.Kakao) {
    console.error("카카오 JavaScript SDK를 불러오지 못했습니다.");
    return;
  }

  if (!Kakao.isInitialized()) {
    Kakao.init(KAKAO_JAVASCRIPT_KEY);
  }

  shareButton.addEventListener("click", () => {
    Kakao.Share.sendDefault({
      objectType: "feed",

      content: {
        title: "황영환 ♥ 이미선 결혼합니다",

        description:
          "2026년 9월 20일 오전 11시 · 광명무역센터컨벤션",

        imageUrl:
          new URL("images/og-image.jpg", window.location.href).href,

        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href
        }
      },

      buttons: [
        {
          title: "청첩장 보기",

          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href
          }
        }
      ]
    });
  });
})();