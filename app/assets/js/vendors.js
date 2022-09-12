// masonry
$('.masonry-row').imagesLoaded().progress( function() {
  $('.masonry-row').masonry({
    horizontalOrder: true
  }); // 渲染整體畫面
});

// AOS
// AOS.init();