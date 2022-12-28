// slick slider

$(document).ready(function () {
  $(".payment_walets_slider").slick({
    dots: true,
    autoplay: true,
    arrows: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//

// nav menu

{
  let toggleBtn = document.getElementById("toggle_nav");
  let mobileSide = document.getElementById("mobile_nav");
  toggleBtn.addEventListener("click", function () {
    mobileSide.classList.add("activeNav");
  });

  let crossBtn = document.getElementById("cross_btn");
  crossBtn.addEventListener("click", function () {
    mobileSide.classList.remove("activeNav");
  });
}
