let currentPage = window.location.pathname;

// phoneMenu
function phoneMenu() {
  const btnPhoneMenu = document.querySelector("#btnPhoneMenu");
  const phoneMenu = document.querySelector("#phoneMenu");
  const body = document.querySelector("body");
  const btnNavMenu = document.querySelector("#btnNavMenu");
  const btnNavClose = document.querySelector("#btnNavClose");

  btnPhoneMenu.addEventListener("click", ()=> {
    phoneMenu.classList.toggle("d-none");
    body.classList.toggle("bg-mask-dark");
    btnNavMenu.classList.toggle("d-none");
    btnNavClose.classList.toggle("d-none");

    addEventListener("resize", ()=> {
      if (window.innerWidth > 768) {
        phoneMenu.classList.add("d-none");
        body.classList.remove("bg-mask-dark");
        btnNavMenu.classList.remove("d-none");
        btnNavClose.classList.add("d-none");
      }
    })
  })

  // search bar 手機板切換
  const btnPhoneSearch = document.querySelector("#btnPhoneSearch");
  const btnSearchArrow = document.querySelector("#btnSearchArrow");
  const searchPhoneNav = document.querySelector("#searchPhoneNav");

  btnPhoneSearch.addEventListener("click", () => {
    searchPhoneNav.classList.remove("d-none");
    searchPhoneNav.classList.add("animation-from-left");
  })

  btnSearchArrow.addEventListener("click", () => {
    searchPhoneNav.classList.add("d-none");
    searchPhoneNav.classList.remove("animation-from-left");
  })

  addEventListener("resize", ()=> {
    if (window.innerWidth > 768) {
      searchPhoneNav.classList.add("d-none");
      searchPhoneNav.classList.remove("animation-from-left");
    }
  })
}

// 藝術品系列頁面 篩選箭頭切換
function filterArrow() {
  const filters = document.querySelectorAll('.filter-button');

  filters.forEach(item => {
    item.addEventListener("click", ()=> {
      let btnArrows = item.querySelectorAll('i')
      btnArrows.forEach(btnArrow => {
        btnArrow.classList.toggle("d-none");
      });
    })
  })
}

// 藝術品系列頁面 篩選條件按鈕
function btnFilter() {
  const btnFilter = document.querySelector("#btnFilter");
  const btnFilterClose = document.querySelector("#btnFilterClose");
  const btnFilterCheck = document.querySelector("#btnFilterCheck");
  const filterModal = document.querySelector("#filterModal");
  const filterBackdrop = document.querySelector("#filterBackdrop");

  btnFilter.addEventListener("click", () => {
    openFilter();
  });
  btnFilterClose.addEventListener("click", () => {
    closeFilter()
  });
  filterBackdrop.addEventListener("click", () => {
    closeFilter()
  })

  function openFilter() {
    filterBackdrop.classList.add("filter-backdrop");
    filterModal.classList.add("filter");
    filterModal.classList.remove("d-none");

    btnFilterCheck.addEventListener("click", () => {
      closeFilter();
    })
  }

  function closeFilter() {
    filterModal.classList.remove("filter");
    filterModal.classList.add("d-none");
    filterBackdrop.classList.remove("filter-backdrop");
  }
}

// 市場排行 + / - 切換
function rankingBtnToggle() {
  const rankingItem = document.querySelectorAll('.ranking-item')

  rankingItem.forEach(item => {
    item.addEventListener("click", ()=> {
      if(item.classList.contains("triangle-br-plus")) {
        item.classList.toggle("triangle-br-minus");
      }
    })
  });
}

phoneMenu()

if(currentPage == '/artworks.html' ) {
  btnFilter();
  filterArrow();
} else if (currentPage == '/marketRanking.html') {
  rankingBtnToggle();
} else if (currentPage == '/artworks-detail.html') {
  filterArrow();
}