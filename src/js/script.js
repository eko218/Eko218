
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

// ハンバーガーメニュー
// $(function(){
//     $('.header__drawer').on('click', function() {
//       $(this).toggleClass('is-active');
//       return false;
//     });
//   });
  
  $(function () {
    // ハンバーガーメニュー
   $(".js-hamburger,.js-drawer-menu").on('click', function () {
     if ($(".js-hamburger").hasClass("is-active")) {
       // $(".js-drawer-menu").fadeOut();
       $("body, html").css("overflow", "auto");
       $(".js-drawer-menu").removeClass("is-active");
       $(this).removeClass("is-active");
    } else {
       //  $(".js-drawer-menu").fadeIn();
       $("body, html").css("overflow", "hidden");
       $(".js-drawer-menu").addClass("is-active");
        $(this).addClass("is-active");
    }
    });
  });
});

// ドロワーメニューふわっとフェードイン
$(function(){
    $('.sp-nav').on('click', function(){
      $('.sp-nav__left, .sp-nav__right').toggleClass('is-active');
    });
  }());

