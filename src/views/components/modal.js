$(function () {
  $('.zones__marker').on('click', function () {
    var id = $(this).attr('id');
    var body = $('body').width();
    var scrollWidth = window.innerWidth - body;

    $('#' + id + 'Modal')
      .addClass('overlay')
      .trigger('focus');
    $('body').addClass('fixed');
    if (scrollWidth > 0) {
      $('body').css('padding-right', scrollWidth);
    }
  });
  $('.modal__btn').on('click', function () {
    $('body').css('padding-right', 0);
    $('.modal').removeClass('overlay');
    $('body').removeClass('fixed');
  });
});
