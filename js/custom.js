(function ($) {

    // nav fixed 
    $("document").ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('.mobile-nav').addClass('fixed-top');
            } else {
                $('.mobile-nav').removeClass('fixed-top');
            }
        });
    });




    // header

    $('document').ready(function () {
        $('header .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: true,
            autoplay: false,
            animateOut: 'fadeOut',
            autoplayTimeout: 5000,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $('header .owl-carousel').on("changed.owl.carousel", function (event) {
            // selecting the current active item
            var item = event.item.index - 2;
            // first removing animation for all captions
            $('h5').removeClass('animated fadeInDown');
            $('.owl-item').not('.cloned').eq(item).find('h5').addClass('animated fadeInDown');

            $('h1').removeClass('animated zoomIn');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated zoomIn');

            $('button').removeClass('animated jackInTheBox');
            $('.owl-item').not('.cloned').eq(item).find('button').addClass('animated jackInTheBox');

        });
    });


    $('document').ready(function () {
        $('.testimonial .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    });


    //mobile nav 
    $('document').ready(function () {
        $('.mobile-nav .toggle .bar').click(function () {
            $('.mobile-nav .toggle .cross span').addClass('active');
            $('.mnav').addClass('active');
        });
        $('.mobile-nav .toggle .cross').click(function () {
            $('.mobile-nav .toggle .cross span').removeClass('active');
            $('.mobile-nav .toggle .bar span').removeClass('dactive');
            $('.mnav').removeClass('active');
        });
        $('.mobile-nav .toggle .bar').click(function () {
            $('.mobile-nav .toggle .bar span').addClass('dactive');
        });
    });



})(jQuery)
