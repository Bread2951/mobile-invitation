document.addEventListener("DOMContentLoaded", function () {
    if (!Kakao.isInitialized()) {
        Kakao.init("7400414801fa68a6bec478724cb92a3b");
    }
});

function shareKakao() {

    Kakao.Share.sendScrap({

        requestUrl: "https://bread2951.github.io/mobile-invitation/"

    });

}