$(function () {
  //сокрытие неактивных вкладок
  $('.selection-grid__row').not('.active').hide();

  //Добавление пустых карточек для сетки, clearfix
  var selectionRow = $('.selection__link').parent();

  for (var i = 0; i < 13; i++) {
    selectionRow.append('<div class="selection__link-empty"></div>');
  }

  $('button.selection__btn-type').on('click', function () {
    $('button.selection__btn-type').removeAttr('disabled');
    $(this).attr('disabled', true);
    var thisDataToggle = $(this).attr('data-toggle');
    $('.selection__grid-row[data-toggle]').hide().removeClass('active');
    $('.selection__grid-row[data-toggle="' + thisDataToggle + '"]')
      .show()
      .addClass('active');
  });
});
