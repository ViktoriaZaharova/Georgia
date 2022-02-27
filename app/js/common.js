$('.reviews-slider').slick({
    slidesToShow: 2,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
