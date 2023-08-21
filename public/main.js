// Menu
const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu-fixed");
const menuClose = document.querySelector(".menu-close");

menuBar.addEventListener("click", function () {
  menu.classList.add("active");
});

menuClose.addEventListener("click", function () {
  menu.classList.remove("active");
});

document.body.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-bar")) {
    menu.classList.remove("active");
  }
});

// Slick
$(document).ready(function () {
  $(".popular-list ").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev'><i class='fa fa-angle-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next'><i class='fa fa-angle-right'></i></button>",

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
