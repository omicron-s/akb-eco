$(function () {
  //Добавление по кнопке сравнение
  $('button.compare-icon').on('click', function () {
    var items = $('#diagram small').text();
    if ($(this).attr('data-compare')) {
      $(this).removeAttr('data-compare');
      items--;
    } else {
      $(this).attr('data-compare', true);
      items++;
    }
    $('#diagram small').text(items);
  });
});
