$(function () {
  //Добавление пустых карточек для сетки, clearfix
  var catalogRow = $('.card').parent();

  for (var i = 0; i < 4; i++) {
    catalogRow.append('<div class="card-empty"></div>');
  }
});
