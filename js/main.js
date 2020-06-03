$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
    $.scrollUp();
    $('#nav').slicknav();
});

$('.services .owl-carousel').owlCarousel({
    loop:true, 
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

$('.courses .owl-carousel').owlCarousel({
    loop:true, 
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
})

$('.testimonials .owl-carousel').owlCarousel({
    loop:true, 
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

$('.clients .owl-carousel').owlCarousel({
    loop:true, 
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:4,
        },
        1000:{
            items:6,
        }
    }
})
