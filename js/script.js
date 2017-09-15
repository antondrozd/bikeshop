$(function() {
  var windowWidth = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth;

    if (windowWidth >= 1200) {
      document.querySelectorAll('.main-nav__item--with-drop').forEach(element=> {
        var dropList = element.querySelector('.main-nav__drop-list'),
            dropListHeight = dropList.clientHeight;
        dropList.style.maxHeight = 0;
        dropList.style.opacity = 0.5;
        dropList.style.transition = 'all .13s linear';

        element.addEventListener('mouseover', function () {
          dropList.style.transitionDelay = '.13s';
          dropList.style.maxHeight = dropListHeight+'px';
          dropList.style.opacity = 1;
        });

        element.addEventListener('mouseout', function () {
          dropList.style.transitionDelay = '0s';
          dropList.style.maxHeight = 0;
          dropList.style.opacity = 0.5;
        });
      });
    };

    if (windowWidth >= 768 && windowWidth < 1200) {

      var pageWrapper = document.querySelector('.page-wrapper'),
          headerWrapper = document.querySelector('.page-header__wrapper'),
          navMain = document.querySelector('.main-nav'),
          navToggle = document.querySelector('.main-nav__toggle');

      function toggleNav () {
        if (navMain.classList.contains('main-nav--closed')) {
          pageWrapper.classList.remove('page-wrapper--nav-closed');
          pageWrapper.classList.add('page-wrapper--nav-opened');
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
          document.body.appendChild(navMain);
          setTimeout(function () {
            pageWrapper.addEventListener('click', toggleNav);
          }, 300);
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
          pageWrapper.classList.add('page-wrapper--nav-closed');
          pageWrapper.classList.remove('page-wrapper--nav-opened');
          headerWrapper.appendChild(navMain);
          pageWrapper.removeEventListener('click', toggleNav);
        }
      };

      navToggle.addEventListener('click', toggleNav);

      document.querySelectorAll('.main-nav__item--with-drop').forEach(element=> {
        var dropList = element.querySelector('.main-nav__drop-list'),
            dropListHeight = dropList.clientHeight,
            dropToggle = document.querySelector('.main-nav__drop-toggle'),
            navList = document.querySelector('.main-nav__list');

        navList.style.display = 'none';
        dropList.style.maxHeight = 0;
        dropList.style.opacity = 0;
        dropList.style.transition = 'all .2s linear';

        dropToggle.addEventListener('click', function () {
          if (dropToggle.classList.contains('main-nav__drop-toggle--down')) {
            dropToggle.classList.remove('main-nav__drop-toggle--down');
            dropToggle.classList.add('main-nav__drop-toggle--up');
            dropToggle.innerHTML = '▲';
            dropList.style.maxHeight = dropListHeight+'px';
            dropList.style.opacity = 1;
          } else {
            dropToggle.classList.remove('main-nav__drop-toggle--up');
            dropToggle.classList.add('main-nav__drop-toggle--down');
            dropToggle.innerHTML = '▼';
            dropList.style.maxHeight = 0;
            dropList.style.opacity = 0;
          }
        });
      });
    };

    if (windowWidth < 768) {
      var navMain = document.querySelector('.main-nav'),
          navToggle = document.querySelector('.main-nav__toggle'),
          navList = document.querySelector('.main-nav__list'),
          navListHeight = navList.clientHeight;

      navMain.classList.remove('main-nav--nojs');

      navList.style.maxHeight = 0;
      navList.style.opacity = 0;
      navList.style.transition = 'all .3s linear';

      navToggle.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
          navList.style.maxHeight = navListHeight+'px';
          navList.style.opacity = 1;
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
          navList.style.maxHeight = 0;
          navList.style.opacity = 0;
        }
      });

      document.querySelectorAll('.main-nav__item--with-drop').forEach(element=> {
        var dropList = element.querySelector('.main-nav__drop-list'),
            dropListHeight = dropList.clientHeight,
            dropToggle = document.querySelector('.main-nav__drop-toggle');

        dropList.style.maxHeight = 0;
        dropList.style.opacity = 0;
        dropList.style.transition = 'all .3s linear';

        dropToggle.addEventListener('click', function () {
          if (dropToggle.classList.contains('main-nav__drop-toggle--down')) {
            dropToggle.classList.remove('main-nav__drop-toggle--down');
            dropToggle.classList.add('main-nav__drop-toggle--up');
            dropToggle.innerHTML = '▲';
            dropList.style.maxHeight = dropListHeight+'px';
            dropList.style.opacity = 1;
          } else {
            dropToggle.classList.remove('main-nav__drop-toggle--up');
            dropToggle.classList.add('main-nav__drop-toggle--down');
            dropToggle.innerHTML = '▼';
            dropList.style.maxHeight = 0;
            dropList.style.opacity = 0;
          }
        });
      });
    }
  });

  $('a[href^="#"]:not([href="#"])').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
    scrollTop: $(el).offset().top}, 1000);
    return false;
  });
