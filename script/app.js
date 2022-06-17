//  Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 44,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // when window width is >= 600px
    breakpoints: {
      331: {
        slidesPerView: 2,
      },
      200: {
        slidesPerView: 2,
      }

    },
  });




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