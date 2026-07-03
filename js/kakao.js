document.addEventListener("DOMContentLoaded", function () {
    if (!Kakao.isInitialized()) {
        Kakao.init("7400414801fa68a6bec478724cb92a3b");
    }
});

function shareKakao() {

    const currentUrl = window.location.origin + window.location.pathname;

    Kakao.Share.sendDefault({
        objectType: "feed",

        content: {
            title: "황영환 ♥ 이미선 결혼식",
            description: "2026년 9월 20일 오전 11시\n광명무역센터컨벤션 3F 그랜드볼룸",
            imageUrl: currentUrl.replace(/\/$/, "") + "/images/hero.jpg",
            link: {
                mobileWebUrl: currentUrl,
                webUrl: currentUrl
            }
        },

        buttons: [
            {
                title: "청첩장 보기",
                link: {
                    mobileWebUrl: currentUrl,
                    webUrl: currentUrl
                }
            }
        ]
    });

}