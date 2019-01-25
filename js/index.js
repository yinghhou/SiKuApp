(function ($) {
    $.fn.s8CircleInfoBox = function (options) {
        // set settings
        var settings = $.extend({
            autoSlide: false,
            slideSpeed: 5000,
            notResponsive: false,
            action: "mouseover",
            responsive: true,
            breakpoint: 160,
            hoverStyle: "circleSelect",
            spreadStyle: "all"
        }, options);
        var $container = $(this).find(".circleWrapper"),
            $fields = $container.find(".circleFeature"),
            fieldsLength = $fields.length,
            spreadStyle = settings.spreadStyle.toLowerCase(),
            underBreakPoint = true,
            $infoBox = $container.find(".circleBox");

        var current = -1, // 当前默认第几个显示
            intervalRef = null;
        var radius;

        var pauseSlideShow = false;

        if (settings.notResponsive) {
            $infoBox.addClass("noResponsive");
            $fields.addClass("noResponsive");
            $container.addClass("noResponsive");
        }
        // make the cyrcle
        var makeCircle = function () {
            var angle = 0;
            switch (spreadStyle) {
                case "left":
                    angle = 90;
                    break;
                case "top":
                    angle = 180;
                    break;
                case "right":
                    angle = 270;
                    break;
                default:
                    angle = 0;
                    break;
            }
            var step = (spreadStyle === "all") ? 360 / fieldsLength : 180 / (fieldsLength - 1);
            $container.css("height", $container.width());
            radius = $container.width() / 2;
            $fields.css("lineHeight", $fields.height() + "px");
            $fields.each(function () {
                var $this = $(this);
                $this.css({
                    'transform': 'rotate(' + angle + 'deg) translate(' + radius + 'px) rotate(' + (-1 * angle) + 'deg)'
                })

                angle += step;
            })
        };
        // 判断第几个显示
        var boxId;
        var inflate = function ($which) {
            $fields.removeClass(settings.hoverStyle);
            boxId = $which.attr("data-cyrcleBox");
            $which.addClass(settings.hoverStyle);
            $infoBox.filter("#" + boxId).fadeIn();
        };
        $fields.on(settings.action, function () {
            $infoBox.fadeOut();
            current = $(this).parent().index();
            inflate($(this));
        });
        // 窗体改变
        $(window).resize(function () {
            if (settings.responsive && !underBreakPoint) {
                makeCircle();
            }

            if ($(window).width() < settings.breakpoint) {
                underBreakPoint = true;
                pauseSlideShow = true;
                $fields.removeClass(settings.hoverStyle);
                $container.css("height", "auto");
            } else {
                underBreakPoint = false;
                pauseSlideShow = false;
                if (intervalRef === null && settings.autoSlide) {
                    firstTimeKickOff();
                }
            }
        });
        if ($(window).width() >= settings.breakpoint) {
            makeCircle();
            underBreakPoint = false;
            if (settings.autoSlide)
                firstTimeKickOff();
        }
    }
    // 点击关闭弹窗
    $(".glyphicon-remove").click(function () {
        $(this).parents(".circleBox").hide();
    })
})(jQuery);

$(function () {
    // swiper配置
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: -60,
        autoplayDisableOnInteraction: false,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            slideChangeTransitionEnd: function () {
                if (this.activeIndex == 3 || this.activeIndex == 6) {
                    // 三重礼
                    $(".good-present").hide();
                    $(".present").hide();
                    $(".present-3").show();
                } else if (this.activeIndex == 4) {
                    $(".good-present").hide();
                    $(".present").hide();
                    $(".present-1").show();
                } else {
                    // 二重礼
                    $(".good-present").hide();
                    $(".present").hide();
                    $(".present-2").show();
                }
            },
        },
    });
})








$(".inner-circle").addClass("inner-animation");
$(".circle1").s8CircleInfoBox()
$(".circle2").s8CircleInfoBox({
    autoSlide: false,
    action: "click"
})
$(".circle3").s8CircleInfoBox({
    notResponsive: true,
    hoverStyle: "circleSelect3",
    slideSpeed: 500,
    breakpoint: 0

})