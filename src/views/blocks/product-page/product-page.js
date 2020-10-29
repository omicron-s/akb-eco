$(function () {
  //коллапс сылок по типу
  $('.product-desc').on('click', '.product-desc__more', function () {
    $(this).toggleClass('collapse');
    $(this)
      .siblings('.product-desc__list')
      .find('li:nth-child(n+11)')
      .toggleClass('collapse');
    $('html, body').animate(
      { scrollTop: $('.product-desc__list').offset().top },
      {
        duration: 200,
        easing: 'swing',
      }
    );
  });

  //Вызов окна скидки
  $('.product-desc__trade-banner').on('click', 'button', function () {
    $('.product-desc__trade-modal').toggleClass('show');
  });

  //Кнопочка close
  $('.product-desc__trade-modal').on('click', '.btn-close', function () {
    $('.product-desc__trade-modal').removeClass('show');
  });

  //Выбор
  $('.product-desc__trade-modal >.row').on('click', '.btn-i', function () {
    var dataToggle = $(this).attr('data-toggle');
    //удаление disabled с кнопок
    $(this).siblings('button').removeAttr('disabled');
    //установка disabled на нажатую кнопку
    $(this).attr('disabled', 'disabled');
    //выбор напряжения
    $('.product-desc__trade-modal ul[data-toggle]').hide().removeClass('show');
    $('.product-desc__trade-modal ul[data-toggle="' + dataToggle + '"]')
      .show()
      .addClass('show');
  });
});
