import * as customFunctions from './modules/functions.js'
customFunctions.handleToTop()
customFunctions.handleDropdownsOpen()
customFunctions.handleBurgerClick()
customFunctions.handleQuantityBtnsClick()
customFunctions.handleTabs()
customFunctions.handleFilters()
customFunctions.handleRangeSlider1()
customFunctions.handleRangeSlider2()
// vendors

// swiper
const swiperBanner = new Swiper('.swiper--banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        1440: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

const swiperSale = new Swiper('.swiper--sale', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,

    breakpoints: {
        // when window width is >= 320px

        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        999: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 3,
            spaceBetween: 26,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--sale',
        prevEl: '.swiper-button-prev--sale',
    },
})
const swiperRecommendations = new Swiper('.swiper--recommendations', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 48,

    breakpoints: {
        // when window width is >= 320px

        1440: {
            slidesPerView: 5,
            spaceBetween: 48,
        },
        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        320: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--recommendations',
        prevEl: '.swiper-button-prev--recommendations',
    },
})

const swiperNew = new Swiper('.swiper--new', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        },

        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--new',
        prevEl: '.swiper-button-prev--new',
    },
})
const swiperOtherGoods = new Swiper('.swiper--other-goods', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        },

        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--other-goods',
        prevEl: '.swiper-button-prev--other-goods',
    },
})
const swiperManufacturerGoods = new Swiper('.swiper--manufacturer-goods', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        },

        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--manufacturer-goods',
        prevEl: '.swiper-button-prev--manufacturer-goods',
    },
})
const swiperAdvantages = new Swiper('.swiper--advantages', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 0,

    initialSlide: 4,

    breakpoints: {
        // when window width is >= 320px

        320: {
            slidesPerView: 2.5,
            centeredSlides: true,
            spaceBetween: 20,
        },
    },

})

const swiperProductGallery = new Swiper('.swiper--product-gallery', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next--product-gallery',
        prevEl: '.swiper-button-prev--product-gallery',
    },
})

const swiperProduct = new Swiper('.swiper--product', {
    thumbs: {
        swiper: swiperProductGallery,
    },
})

const swiperReviews = new Swiper('.swiper--reviews', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 21,
    slidesPerView: 4,

    breakpoints: {
        // when window width is >= 320px
        1440: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        999: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: '.swiper-pagination--reviews',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--reviews',
        prevEl: '.swiper-button-prev--reviews',
    },
})


const swiperBasketAllTheSlider = new Swiper('.basket-all-the-slider__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 35,
    navigation: {
        nextEl: '.basket-all-the-slider__button-prev',
        prevEl: '.basket-all-the-slider__button-next',
    },
})

var inputer = document.querySelector('.f__input');
inputer.onclick = function() {
console.log('да');
   if( window.innerWidth < 769 ){
        document.querySelector('.header--mobile').classList.add('header__active');
   }
}

let svg = document.querySelector('.svg__back');
svg.onclick = function() {
    document.querySelector('.header--mobile').classList.remove('header__active');
}






// $('.catalog-content-card__btn').click(function () {
//     $('.catalog-content-card').addClass('catalog-content-card_active');
// });

// $("#catalog-content__list .catalog-content__item .catalog-content-card__btn").click(function(e) {
//     e.preventDefault();
//     $("#catalog-content__list .catalog-content__item .catalog-content-card").removeClass('catalog-content-card_active');
//     $(this).addClass('catalog-content-card_active');
// })

// $('#catalog-content__list li button').on('click', function(){
//     $('#catalog-content__list li .catalog-content-card').toggleClass('catalog-content-card_active');
// });

// $('#catalog-content__list .catalog-content__item .catalog-content-card__btn').on('click', function(){
//     $('#catalog-content__list .catalog-content__item .catalog-content-card').addClass('catalog-content-card_active').parent().siblings().children().removeClass('catalog-content-card_active');
// });


// $(".catalog-content-card__btn.active").next(".catalog-content-card").slideDown();
// $('#catalog-content__list').on('click', '.catalog-content-card__btn', function (e) {
//     e.preventDefault();
//     $('.catalog-content-card')
//         .toggleClass("catalog-content-card_active")
//         .next('.catalog-content-card');
// })

//
// $('.catalog-content__list .catalog-content__item').on('click', '.catalog-content-card__btn', function (e) {
//     e.preventDefault();
//     $('.catalog-content__list .catalog-content__item')
//         .toggleClass("catalog-content-card_active")
//         .next('.faq-accordion-main__body')
//         .toggleClass("catalog-content-card_active")
//      ;
// })

// $('#catalog__section li .catalog-content-card').on('click', '.catalog-content-card__btn', function(){
//     $('li .catalog-content-card').toggleClass('catalog-content-card_active');
// });

// $('.catalog-content__list .catalog-content__item').on('click', '.catalog-content-card__btn', function() {
//     $('.catalog-content__item')
//         .addClass('catalog-content-card_active').siblings().removeClass('catalog-content-card_active')
//         .closest('.catalog-content__item').find('.catalog-content__item').removeClass('catalog-content-card_active')
//         .eq($(this).index()).addClass('catalog-content-card_active');
// });


// var gallery = document.querySelector('.catalog-content__list');
// var link = document.querySelectorAll('.catalog-content__item');
// var btn = document.querySelectorAll('.catalog-content-card__btn');
//
// for (var i=0; i<link.length; i++) {
//     link[i].btn.addEventListener('click', function(evt) {
//         evt.preventDefault();
//         link.forEach(c => {
//             c.classList.remove('catalog-content-card_active');
//         })
//         $(link).addClass('catalog-content-card_active');
//     })
// }



//аккардионы
$(".faq-accordion-main__head.active").next(".faq-accordion-main__body").slideDown();
$('.faq-accordion-main').on('click', '.faq-accordion-main__head', function (e) {
    e.preventDefault();
    $(this)
        .toggleClass("active")
        .next('.faq-accordion-main__body')
        .not(':animated')
        .slideToggle();
})
$(".faq-accordion-small__head.active").next(".faq-accordion-small__body").slideDown();
$('.faq-accordion-small').on('click', '.faq-accordion-small__head', function (e) {
    e.preventDefault();
    $(this)
        .toggleClass("active")
        .next('.faq-accordion-small__body')
        .not(':animated')
        .slideToggle();
})

//телефон
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});