$(document).ready(function () {
    $('.home-reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        prevArrow: $('button.home-reviews-arrow-зкум'),
        nextArrow: $('button.home-reviews-arrow-next'),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

    $('[data-tab]').on('click', evt => {
        const clickedItem = $(evt.target)
        changeActiveTab(clickedItem.attr('data-tab'), clickedItem)
    })

    if (window.innerWidth < 767) {
        $('.home-port__inner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: $('button.home-port-arrow-prev'),
            nextArrow: $('button.home-port-arrow-next'),
        })
    }
});


const changeActiveTab = (newActiveTab, elem) => {
    $('[data-tabs-item]').css({ 'display': 'none' })
    $('.product-tabs__elem-item--active').removeClass('product-tabs__elem-item--active')


    $(`[data-tabs-item=${newActiveTab}]`).css({ 'display': 'block' })
    $(elem).addClass('product-tabs__elem-item--active')
}