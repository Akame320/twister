$(document).ready(function(){
    $('.home-reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        prevArrow: $('button.home-reviews-arrow-зкум'),
        nextArrow: $('button.home-reviews-arrow-next'),
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    })
});
