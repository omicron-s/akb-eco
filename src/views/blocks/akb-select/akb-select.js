import Swiper, { Navigation, Keyboard, Pagination } from 'swiper';

$(function () {
  //сокрытие неактивных вкладок при загрузке страницы
  $('.akb-select__grid').not('.active').hide();

  //переключение вкладок
  $('button.akb-select__btn').on('click', function () {
    $('button.akb-select__btn').removeAttr('disabled');
    $(this).attr('disabled', true);
    var thisDataToggle = $(this).attr('data-toggle');
    $('.akb-select__grid[data-toggle]').hide().removeClass('active');
    $('.akb-select__grid[data-toggle="' + thisDataToggle + '"')
      .show()
      .addClass('active');
  });

  //свайпер
  Swiper.use([Navigation, Keyboard, Pagination]);

  var akbSwiper = new Swiper('.default-swiper', {
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
        slidesPerView: 3,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 5,
      },
    },
  });

  //отмена табуляци для слайдов
  function swiperTabIndex() {
    $('.swiper-slide').find('a, button').attr('tabindex', '-1').blur(); // удаление фокуса с элемента
    $('.swiper-slide-active').find('a, button').removeAttr('tabindex');
  }
  // сразу инициализация функции
  swiperTabIndex();

  for (let index = 0; index < akbSwiper.length; index++) {
    //табуляция только для одного активного слайда
    akbSwiper[index].on('slideChangeTransitionEnd', function () {
      swiperTabIndex();
    });

    //отмена центровки
    akbSwiper[index].on('touchStart', function () {
      akbSwiper[index].params.centeredSlides = false;
      akbSwiper[index].update();
    });

    //центровка с клавиш
    $(this).on('keydown', function (e) {
      if (e.which == 37 || e.which == 39) {
        akbSwiper[index].params.centeredSlides = true;
        akbSwiper[index].update();
      }
    });
  }
});
