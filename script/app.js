//  Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 44,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // when window width is >= 600px
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 0,
      }

     },
  });

  /********************** Mobile Menu ***********************/
'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();


/********************** Mobile Menu ***********************/




// Accordion

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

