$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
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