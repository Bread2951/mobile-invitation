document.addEventListener("DOMContentLoaded", function () {

    window.openLightbox = function(src){

        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");

        if(!lightbox || !lightboxImg) return;

        lightboxImg.src = src;
        lightbox.style.display = "flex";
    }

    window.closeLightbox = function(){

        const lightbox = document.getElementById("lightbox");

        if(!lightbox) return;

        lightbox.style.display = "none";
    }

    if(typeof Swiper !== "undefined"){

        new Swiper(".gallerySwiper",{

            loop:true,

            centeredSlides:true,

            spaceBetween:18,

            autoplay:{
                delay:3000,
                disableOnInteraction:false
            },

            pagination:{
                el:".swiper-pagination",
                clickable:true
            }

        });

    }

});