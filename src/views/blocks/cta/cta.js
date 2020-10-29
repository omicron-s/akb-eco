import Inputmask from 'inputmask';

$(function () {
  var im = new Inputmask('+7(999)999-99-99');
  im.mask('#ctaPhone');
});
