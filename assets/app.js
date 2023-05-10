$(".openbtn").click(function () {
  $("#myNav").addClass("active");
});

$(".closebtn").click(function () {
  $("#myNav").removeClass("active");
});

$(".search a").click(function () {
  $(".search-bar").addClass("active");
});

$(".search-close-ic a").click(function () {
  $(".search-bar").removeClass("active");
});
$(".showPassword").click(function () {
  $("#passwordInput").prop("type", "text");
});
$(".hidePassword").click(function () {
  $("#passwordInput").prop("type", "password");
});
$(".pass-show-hide-btn .icon").click(function () {
  $(".pass-show-hide-btn").toggleClass("eye");
});

$(".product-main-img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".product-detail-btnslider",
});
$(".product-detail-btnslider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".product-main-img-slider",
});

$(".side-card-slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".feature-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".client-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".brand-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(document).ready(function () {
       // check if the user has visited the website before
if (localStorage.getItem("visited") !== "true") {
  // if not, show the age verification modal
  $("#ageVerificationModal").modal("show");
  // set a flag in localStorage to indicate that the user has visited the website
  localStorage.setItem("visited", "true");
}

    });

// Initialize Wow
new WOW().init();


function openSideBar() {
  document.getElementById("sideBar").classList.add("show")
}
function closeSideBar() {
  document.getElementById("sideBar").classList.remove("show")
}