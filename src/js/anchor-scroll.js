// скрипт плавной прокрутки страницы до якоря
let $root = $('html, body');
$('a[href^="#"]').click(function () {
  let href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 1000, function () {
    window.location.hash = href;
  });
  return false;
});
