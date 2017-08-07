(function() {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
})();

(function() {
  var dropListToggle = document.querySelector('.main-nav__item--drop > a');
  var dropList = document.querySelector('.main-nav__drop-list');

  dropListToggle.addEventListener('click', function(e) {
    e.preventDefault();
    if (dropList.classList.contains('main-nav__drop-list--closed')) {
      dropList.classList.remove('main-nav__drop-list--closed');
      dropList.classList.add('main-nav__drop-list--opened');
    } else {
      dropList.classList.remove('main-nav__drop-list--opened');
      dropList.classList.add('main-nav__drop-list--closed');
    }
  });
})();

$(document).ready(function() {
  $('a[href^="#"]:not([href="#"])').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
    scrollTop: $(el).offset().top}, 1000);
    return false;
  });
});
