(function ($) {
    "use strict";

    //sticky menu
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 0;
        if (window_top > 0) {
            $('.wrd_sticky').addClass('menu_fixed animated slideInDown');
        } else {
            $('.wrd_sticky').removeClass('menu_fixed animated slideInDown');
        }
    });

    //wow js
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        duration: 1000,
    });
    wow.init();

    //video popup
    var video_popup = $('.video_popup');
    if (video_popup.length > 0) {
        video_popup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    //data bg image sec
    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })


    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })

    $(".portfolio_slider").each(function () {
        var t = $(this),
            i = ($(this).attr("id"), $(this).data("perpage") || 5),
            a = $(this).data("loop") || "true",
            e = $(this).data("speed") || 300,
            o = $(this).data("space") || 30,
            l = $(this).data("effect") || "coverflow",
            c = $(this).data("center") || "true",
            pl = $(this).data("autoplay"),
            nex = $(this).data("next") || ".button-next",
            pre = $(this).data("prev") || ".button-prev",
            pag = $(this).data("pagination"),
            mous = $(this).data("mousewheel"),
            pagtype = $(this).data("paginationtype") || "bullets",
            d = $(this).data("direction") || "horizontal",
            cfr = $(this).data("rotate") || 0,
            cfs = $(this).data("stretch") || 0,
            cfd = $(this).data("depth") || 0,
            lops = $(this).data("loopslides"),
            scol = $(this).data("slidescolumn"),
            r = $(this).data("breakpoints");
        new Swiper(t, {
            slidesPerView: i,
            direction: d,
            spaceBetween: o,
            loop: a,
            speed: e,
            effect: l,
            breakpoints: r,
            centeredSlides: c,
            mousewheel: mous,
            slidesPerColumn: scol,
            slideToClickedSlide: true,
            loopedSlides: lops,
            autoplay: pl,
            grabCursor: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: cfr,
                stretch: cfs,
                depth: cfd,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: pag,
                type: pagtype,
                clickable: true
            },
            navigation: {
                nextEl: nex,
                prevEl: pre
            }
        })
    })

    //reviews slider
    $(".review_slider").each(function () {
        var t = $(this),
            i = ($(this).attr("id"), $(this).data("perpage") || 3),
            a = $(this).data("loop") || "true",
            e = $(this).data("speed") || 300,
            o = $(this).data("space") || 30,
            l = $(this).data("effect") || "coverflow",
            c = $(this).data("center") || "true",
            pl = $(this).data("autoplay"),
            nex = $(this).data("next"),
            pre = $(this).data("prev"),
            pag = $(this).data("pagination"),
            mous = $(this).data("mousewheel"),
            pagtype = $(this).data("paginationtype") || "bullets",
            d = $(this).data("direction") || "horizontal",
            cfr = $(this).data("rotate") || 0,
            cfs = $(this).data("stretch") || 0,
            cfd = $(this).data("depth") || 0,
            lops = $(this).data("loopslides"),
            scol = $(this).data("slidescolumn"),
            r = $(this).data("breakpoints");
        new Swiper(t, {
            slidesPerView: i,
            direction: d,
            spaceBetween: o,
            loop: a,
            speed: e,
            effect: l,
            centeredSlides: c,
            mousewheel: mous,
            slidesPerColumn: scol,
            slideToClickedSlide: true,
            loopedSlides: lops,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pl,
              },
            grabCursor: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: cfr,
                stretch: cfs,
                depth: cfd,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: pag,
                type: pagtype,
                clickable: true
            },
            navigation: {
                nextEl: nex,
                prevEl: pre
            }
        })
    })


    /* counter js */
    $('.count_number span').counterUp({
        delay: 10,
        time: 1000
    });


    //maasonry js
    $(".cre_addons_grid_wrapper").each(function () {
        var cre_addons_grid_wrapper = $('.cre_addons_grid_wrapper');
        if (cre_addons_grid_wrapper.length) {
            $(this).cre_dlAddonsGridLayout();
        }
    });

    //count up
    var counter = $('.counter');
    if (counter.length > 0) {
        counter.counterUp({
            time: 2000
        });
    }

    //top scroll
    var cre_top_scroll = $('.scroll_to_top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            cre_top_scroll.addClass('show');
        } else {
            cre_top_scroll.removeClass('show');
        }
    });
    cre_top_scroll.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

}(jQuery));