$(function () {
  //Добавление класса по кол-ву товара
  $('.card').each(function () {
    var cardsQuantity = $(this).find('.card__stock').attr('data-quantity');

    //если вещей нет - блокируем всё
    if (cardsQuantity == 0) {
      $(this).addClass('zero').find('.card__stock small').text('Нет в наличии');
      $(this).find('button.btn').attr('disabled', true);
      $(this).find('.card__footer-right button').attr('disabled', true);
    } else {
      //обратное действие, нужно ли?
      $(this).removeClass('zero').find('.card__stock small').text('В наличии');
      $(this).find('button.btn').removeAttr('disabled');
      $(this).find('.card__footer-right button').removeAttr('disabled');
    }
  });

  //Добавление пустых карточек для сетки, clearfix
  // var cardRow = $('.card').parent();

  // for (i = 0; i < 5; i++) {
  //   cardRow.append('<div class="card-empty"></div>');
  // }
  // console.log();

  //сокрытие неактивных вкладок
  $('button.akb-select__btn').on('click', function () {
    $('button.akb-select__btn').removeAttr('disabled');
    $(this).attr('disabled', true);
    var thisDataToggle = $(this).attr('data-toggle');
    $('.akb-select__grid[data-toggle]').hide().removeClass('active');
    $('.akb-select__grid[data-toggle="' + thisDataToggle + '"')
      .show()
      .addClass('active');
  });

  //инкремент и декремент для теста
  $('.card__footer button').on('click', function () {
    //Сброс другой кнопки при disabled
    $(this).siblings('button').removeAttr('disabled');

    //текущее число
    var n = $(this).siblings('span').text();

    //кол-во товара
    var quantity = $(this)
      .parents('.card__footer')
      .find('.card__footer-left .card__stock')
      .attr('data-quantity');

    //инкремент
    if ($(this).is('[data-inc]')) {
      if (n >= quantity) {
        $(this).attr('disabled', true);
        return false;
      } else {
        n++;
        $(this).siblings('span').text(n);
      }
    }

    //декремент
    if ($(this).is('[data-dec]')) {
      if (n > 1) {
        n--;
        $(this).siblings('span').text(n);
      }
      if (n == 1) {
        $(this).attr('disabled', true);
        return false;
      }
    }
  });
});
