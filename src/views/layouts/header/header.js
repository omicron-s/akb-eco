$(function () {
  //переключение поиска по клику мышки и отключение условия по hover
  $('.header__search.input-search input').on('click', function () {
    $('.search-block').addClass('active');
    //условие что инпут не в фокусе
    $(this).on('focusout', function () {
      $('.search-block').removeClass('active');
      $(this).off('focusout');
    });
  });

  // если нет фокуса на input или ссылке внутри - отключить окно поиска
  $('.header__search.input-search input, .search-block a').on(
    'focusout',
    function () {
      $('.search-block').removeClass('active');
    }
  );

  // если фокус на ссылке внутри - не отключать окно поиска
  $('.search-block a').on('focus', function () {
    $('.search-block').addClass('active');
  });

  //переключение поиска по клавише энтер и отключение фокуса
  $('.header__search.input-search input').on('keydown', function (e) {
    //Если нажата клавиша enter
    if (e.which == 13) {
      $('.search-block').addClass('active');

      //Если инпут пустой - то скрыть окно поиска
      if ($(this).val().length == 0) {
        $('.search-block').removeClass('active');
      }
    }
  });

  //переключение суперменю по клику
  $('#superMenu >a').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.navbar__supermenu').toggleClass('hover');
    if (!$('#superMenu a').hasClass('active')) {
      $('.supermenu__collapse').removeClass('collapse');
      $('.navbar__supermenu').removeClass('hover');
      $('.supermenu__title span').removeClass('spin');
    }
  });

  // проверка на кол-во вещей в сравении
  $('.compare-header small').on('DOMSubtreeModified', function () {
    if ($(this).text() == '' || $(this).text() == '0') {
      $(this).hide().addClass('hide');
    } else {
      $(this).show().removeClass('hide');
    }
  });

  /****** Мобилка ******/
  $('.header__burger').on('click', function () {
    $(this).toggleClass('active');
    $('.navbar').toggleClass('active');
    $('.header__row >.row').toggleClass('active');
    //удаление всех свойств после закрытия окна
    if (!$(this).hasClass('active')) {
      $('.navbar').removeClass('active');
      $('.header__row >.row').removeClass('active');
      $('.supermenu__collapse').removeClass('collapse');
      $('#superMenu a').removeClass('active');
      $('.navbar__supermenu').removeClass('hover');
      $('.supermenu__title span').removeClass('spin');
    }
  });

  //коллапс сылок по типу
  $('.supermenu__title').on('click', function (e) {
    var windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      e.preventDefault();
      $(this).parent().find('.supermenu__collapse').toggleClass('collapse');
      $(this).find('span').toggleClass('spin');
    }
  });
});
