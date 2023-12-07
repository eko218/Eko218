
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

// mvスライダー
 var swiper = new Swiper(".js-mv-swiper", {
      loop: true,
      effect: 'fade', // フェードのエフェクト
        autoplay: {
          delay: 3000, // ４秒後に次の画像へ
          disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
        },
        speed: 2000, // ２秒かけながら次の画像へ移動
 });

//  campaignスライダー
var swiper = new Swiper(".js-campaign-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

// フッター手前で止まるボタン
$(function () {
  const pageTop = $(".js-page-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});
