import Swiper, { Navigation, Keyboard, Pagination, Controller } from 'swiper';

$(function () {
  //свайпер
  Swiper.use([Navigation, Keyboard, Pagination, Controller]);

  var swiperProduct = new Swiper('.swiper-product', {
    slidesPerView: 1,
    keyboard: true,
    speed: 400,
    spaceBetween: -1,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
      },
    },
  });

  var swiperAttr = new Swiper('.compare-swiper', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: -1,
    centeredSlides: false,
    observer: true,
    observeParents: true,
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
      },
    },
  });

  //связка 2-х слайдеров
  swiperAttr.controller.control = swiperProduct;
  swiperProduct.controller.control = swiperAttr;

  // отмена табуляци для слайдов
  function swiperTabIndex() {
    $('.swiper-slide').find('a, button').attr('tabindex', '-1').blur(); // удаление фокуса с элемента
    $('.swiper-slide-active').find('a, button').removeAttr('tabindex');
  }

  // сразу инициализация функции
  swiperTabIndex();

  // for (let index = 0; index < swiperProduct.length; index++) {
  // табуляция только для одного активного слайда
  swiperProduct.on('slideChangeTransitionEnd', function () {
    swiperTabIndex();
  });

  //отмена центровки
  swiperProduct.on('touchStart', function () {
    swiperProduct.params.centeredSlides = false;
    swiperProduct.update();
    swiperAttr.params.centeredSlides = false;
    swiperAttr.update();
  });

  //отмена центровки
  swiperAttr.on('touchStart', function () {
    swiperAttr.params.centeredSlides = false;
    swiperAttr.update();
    swiperProduct.params.centeredSlides = false;
    swiperProduct.update();
  });

  //центровка с клавиш
  $(this).on('keydown', function (e) {
    if (e.which == 37 || e.which == 39) {
      swiperProduct.params.centeredSlides = true;
      swiperProduct.update();
      swiperAttr.params.centeredSlides = true;
      swiperAttr.update();
    }
  });
  // }

  //удаление из таблицы
  $('.card').on('click', '.btn-close', function () {
    var index = $(this).parents('.card').index();
    swiperProduct.removeSlide(index);
    swiperAttr.removeSlide(index);
    swiperProduct.updateSlides();
    swiperAttr.updateSlides();
    swiperProduct.updateSlidesClasses();
    swiperAttr.updateSlidesClasses();
  });

  //удаление аттрибутов
  $('.compare-page__list').on('click', 'button.btn-close', function () {
    var dataAttribute = $(this).parent().attr('data-attribute');
    $(
      '.compare-page__list-item[data-attribute="' + dataAttribute + '"]'
    ).remove();
  });

  //высота для строк
  function compareResize() {
    var numberItems = $('.compare-page__filter').find('li').length;
    for (var i = 0; i < numberItems; i++) {
      var maxH = 0;
      $('.compare-page__list')
        .find('li:eq(' + i + ')')
        .css('height', 'auto');
      $('.compare-page__list').each(function () {
        $(this)
          .find('li:eq(' + i + ')')
          .height();
        if (
          $(this)
            .find('li:eq(' + i + ')')
            .height() > maxH
        ) {
          maxH = $(this)
            .find('li:eq(' + i + ')')
            .height();
        }
      });
      $('.compare-page__list')
        .find('li:eq(' + i + ')')
        .height(maxH);
    }
    $('.compare-page__list').each(function () {
      var maxH = 0;
      var log;
      var index = 0;
      $(this).eq();
      // console.log(maxH);
      /*         $(this)
          .find('li')
          .each(function (i) {
            console.log(i);
            // $(this).eq(i).css('height', 'auto');
            // if ($(this).eq(i).height() > maxH) {
            //   maxH = $(this).eq(i).height();
            // }
            console.log($(this).eq(i).height());
            // $(this).eq(i).height(maxH);
          }); */
    });
  }
  compareResize();
  $(window).on('resize', function () {
    compareResize();
  });
});
