//
// $('.lines').on( "click", function() {$('.mobile-menu').css( "left", "0");
//   $('.mobile-menu').addClass('active');
// });
let close = document.querySelectorAll(".mobile-link");
$(close).on("click", function () {
  $("#mobile-menu").css("left", "-270px");
  $("#mobile-menu").removeClass("active");
  $(".top").removeClass("clicked");
  $(".bottom").removeClass("clacked");
  $(".middle").removeClass("cloked");
});

$(".lines").on("click", function () {
  var m = document.getElementById("mobile-menu");
  if (m.style.left === "-270px") {
    m.style.left = "0";
    $(".top").addClass("clicked");
    $(".bottom").addClass("clacked");
    $(".middle").addClass("cloked");
    $(m).addClass("active");
  } else {
    m.style.left = "-270px";
    $(m).removeClass("active");
    $(".top").removeClass("clicked");
    $(".bottom").removeClass("clacked");
    $(".middle").removeClass("cloked");
  }
});

// Here we change the nav background and a tag color.
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 20) {
    $("nav").css("background", "#fff");
    $("nav").addClass("scrolled");
    $("ul.menu-ul li a").css("color", "#333");
    $(".line").css("background", "#FE5151");
    $(".logo h4").css("color", "#333");
  } else if ($(this).scrollTop() < 10) {
    $("nav").css("background", "transparent");
    $("nav").removeClass("scrolled");
    $("ul.menu-ul li a").css("color", "#fff");
    $(".line").css("background", "#fff");
    $(".logo h4").css("color", "#fff");
  }
});

//Animate the scrolling on nav a click
$(".nav-link, .mobile-link, #to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500
  );
  return false;
});
