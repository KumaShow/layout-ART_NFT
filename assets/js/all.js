"use strict";

var currentPage = window.location.pathname; // phoneMenu

function phoneMenu() {
  var btnPhoneMenu = document.querySelector("#btnPhoneMenu");
  var phoneMenu = document.querySelector("#phoneMenu");
  var body = document.querySelector("body");
  var btnNavMenu = document.querySelector("#btnNavMenu");
  var btnNavClose = document.querySelector("#btnNavClose");
  btnPhoneMenu.addEventListener("click", function () {
    phoneMenu.classList.toggle("d-none");
    body.classList.toggle("bg-mask-dark");
    btnNavMenu.classList.toggle("d-none");
    btnNavClose.classList.toggle("d-none");
    addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        phoneMenu.classList.add("d-none");
        body.classList.remove("bg-mask-dark");
        btnNavMenu.classList.remove("d-none");
        btnNavClose.classList.add("d-none");
      }
    });
  }); // search bar 手機板切換

  var btnPhoneSearch = document.querySelector("#btnPhoneSearch");
  var btnSearchArrow = document.querySelector("#btnSearchArrow");
  var searchPhoneNav = document.querySelector("#searchPhoneNav");
  btnPhoneSearch.addEventListener("click", function () {
    searchPhoneNav.classList.remove("d-none");
    searchPhoneNav.classList.add("animation-from-left");
  });
  btnSearchArrow.addEventListener("click", function () {
    searchPhoneNav.classList.add("d-none");
    searchPhoneNav.classList.remove("animation-from-left");
  });
  addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      searchPhoneNav.classList.add("d-none");
      searchPhoneNav.classList.remove("animation-from-left");
    }
  });
} // 藝術品系列頁面 篩選箭頭切換


function filterArrow() {
  var filters = document.querySelectorAll('.filter-button');
  filters.forEach(function (item) {
    item.addEventListener("click", function () {
      var btnArrows = item.querySelectorAll('i');
      btnArrows.forEach(function (btnArrow) {
        btnArrow.classList.toggle("d-none");
      });
    });
  });
} // 藝術品系列頁面 篩選條件按鈕


function btnFilter() {
  var btnFilter = document.querySelector("#btnFilter");
  var btnFilterClose = document.querySelector("#btnFilterClose");
  var btnFilterCheck = document.querySelector("#btnFilterCheck");
  var filterModal = document.querySelector("#filterModal");
  var filterBackdrop = document.querySelector("#filterBackdrop");
  btnFilter.addEventListener("click", function () {
    openFilter();
  });
  btnFilterClose.addEventListener("click", function () {
    closeFilter();
  });
  filterBackdrop.addEventListener("click", function () {
    closeFilter();
  });

  function openFilter() {
    filterBackdrop.classList.add("filter-backdrop");
    filterModal.classList.add("filter");
    filterModal.classList.remove("d-none");
    btnFilterCheck.addEventListener("click", function () {
      closeFilter();
    });
  }

  function closeFilter() {
    filterModal.classList.remove("filter");
    filterModal.classList.add("d-none");
    filterBackdrop.classList.remove("filter-backdrop");
  }
} // 市場排行 + / - 切換


function rankingBtnToggle() {
  var rankingItem = document.querySelectorAll('.ranking-item');
  rankingItem.forEach(function (item) {
    item.addEventListener("click", function () {
      if (item.classList.contains("triangle-br-plus")) {
        item.classList.toggle("triangle-br-minus");
      }
    });
  });
}

phoneMenu();

if (currentPage == '/artworks.html') {
  btnFilter();
  filterArrow();
} else if (currentPage == '/marketRanking.html') {
  rankingBtnToggle();
} else if (currentPage == '/artworks-detail.html') {
  filterArrow();
}
"use strict";

// index 首頁 - Artist 熱門藝術家
var swiperArtist = new Swiper('.swiperArtist', {
  loop: true,
  slidesPerView: 1,
  simulateTouch: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      centeredSlides: true
    }
  }
}); // artworks-detail 藝術品細項 - Others 其餘作品

var swiperOther = new Swiper(".swiperOther", {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});
"use strict";

// masonry
$('.masonry-row').imagesLoaded().progress(function () {
  $('.masonry-row').masonry({
    horizontalOrder: true
  }); // 渲染整體畫面
}); // AOS
// AOS.init();
//# sourceMappingURL=all.js.map
