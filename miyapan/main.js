/////////////////////////////////////////////// fadeIn

var window_h = $(window).height();

$(window).on("scroll", function () {
  var scroll_top = $(window).scrollTop();

  $(".js_fadein").each(function () {
    var elem_h = $(this).offset().top;
    if (scroll_top >= elem_h - window_h + 200) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

/////////////////////////////////////////////// page Top
$(function () {
  var pageTop_btn = $(".page__top");
  pageTop_btn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      pageTop_btn.fadeIn();
    } else {
      pageTop_btn.fadeOut();
    }
  });
  $(".page__top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      "swing"
    );
    return false;
  });
});
