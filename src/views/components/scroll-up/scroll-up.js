$(function () {
  var btn = $('.footer .scroll-up');

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop() + window.innerHeight;
    var footerOffset = $('.footer').offset().top;
    var windowWidth = window.innerWidth;
    console.log(scroll);
    //появление кнопки при скролле вниз после половины экрана
    if ($(window).scrollTop() > window.innerHeight / 2) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }

    //Если скролл ниже высоты окна - то кнопка появится
    if (windowWidth >= 768 && $(window).scrollTop() > window.innerHeight) {
      // фиксация если скролл дошел до футера для больших экранов
      if (scroll > footerOffset) {
        btn.addClass('absolute');
      } else {
        btn.removeClass('absolute');
      }
    } else {
      // фиксация если скролл дошел до footer для маленьких экранов, высота кнопки + отступ кнопки и оступ от высоты   footer
      if (
        scroll - 75 > footerOffset &&
        $(window).scrollTop() > window.innerHeight
      ) {
        btn.addClass('absolute');
      } else {
        btn.removeClass('absolute');
      }
    }
  });

  //Сдвиг вверх
  btn.on('click', function () {
    $('html, body').animate(
      { scrollTop: 0 },
      {
        duration: 400,
        easing: 'swing',
      }
    );
  });
});
