document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const menuLinks = document.querySelectorAll("#menuList a");

  const closeSidebar = document.getElementById("closeSidebar");
  const openSidebar = document.getElementById("openSidebar");

  function normalizePath(path) {
    path = path.replace("/index.html", "");

    if (!path.endsWith("/")) {
      path += "/";
    }

    return path;
  }

  function getViewedPages() {
    return JSON.parse(localStorage.getItem("viewedPages") || "[]");
  }

  function saveViewedPage(path) {
    const viewedPages = getViewedPages();

    if (!viewedPages.includes(path)) {
      viewedPages.push(path);
      localStorage.setItem("viewedPages", JSON.stringify(viewedPages));
    }
  }

  const currentUrl = normalizePath(window.location.pathname);

  // Lưu trang hiện tại là đã xem
  saveViewedPage(currentUrl);

  const viewedPages = getViewedPages();

  menuLinks.forEach(function (link) {
    const linkPath = normalizePath(new URL(link.href).pathname);

    // Trang đang mở
    if (currentUrl === linkPath) {
      link.classList.add("active");
    }

    // Trang đã từng xem
    if (viewedPages.includes(linkPath)) {
      link.classList.add("completed");
    }

    // Khi bấm vào menu thì lưu lại đã xem
    link.addEventListener("click", function () {
      saveViewedPage(linkPath);
    });
  });

  // Search menu
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const keyword = searchInput.value.toLowerCase().trim();

      menuLinks.forEach(function (link) {
        const text = link.textContent.toLowerCase();

        if (text.includes(keyword)) {
          link.style.display = "";
        } else {
          link.style.display = "none";
        }
      });

      if (clearSearch) {
        clearSearch.style.display = keyword ? "block" : "none";
      }
    });
  }

  // Clear search
  if (clearSearch && searchInput) {
    clearSearch.style.display = "none";

    clearSearch.addEventListener("click", function () {
      searchInput.value = "";
      searchInput.focus();

      menuLinks.forEach(function (link) {
        link.style.display = "";
      });

      clearSearch.style.display = "none";
    });
  }

  // Đóng sidebar
  if (closeSidebar) {
    closeSidebar.addEventListener("click", function () {
      body.classList.add("sidebar-collapsed");
    });
  }

  // Mở sidebar
  if (openSidebar) {
    openSidebar.addEventListener("click", function () {
      body.classList.remove("sidebar-collapsed");
    });
  }
});
