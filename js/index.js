window.onload = function () {
    // var swiper = new Swiper('.swiper-container', {
    //     autoplay: false,
    //     speed: 1000,
    //     autoplayDisableOnInteraction: false,
    //     loop: true,
    //     centeredSlides: true,
    //     slidesPerView: 2,
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true,
    //     breakpoints: {
    //         668: {
    //             slidesPerView: 1,
    //         }
    //     }
    // });



    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: '2',
        centeredSlides: true,
        spaceBetween: 20,
        autoplayDisableOnInteraction: false,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            slideChangeTransitionEnd: function () {
                if (this.activeIndex == 2 || this.activeIndex == 5) {
                    $(".rights-content>div").hide();
                    $(".rights-content").find(".content-1").show();
                } else if (this.activeIndex == 3) {
                    $(".rights-content>div").hide();
                    $(".rights-content").find(".content-2").show();
                } else {
                    $(".rights-content>div").hide();
                    $(".rights-content").find(".content-3").show();
                }
            },
        }, 
    });

}




