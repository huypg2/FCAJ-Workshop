document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const menuLinks = document.querySelectorAll("#menuList a");

  const closeSidebar = document.getElementById("closeSidebar");
  const openSidebar = document.getElementById("openSidebar");

  // =========================
  // SEARCH MENU
  // =========================
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

  // =========================
  // CLEAR SEARCH BUTTON
  // =========================
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

  // =========================
  // ACTIVE MENU + CHECK MARK
  // =========================
  const currentUrl = normalizePath(window.location.pathname);

  menuLinks.forEach(function (link) {
    const linkPath = normalizePath(new URL(link.href).pathname);

    if (currentUrl === linkPath) {
      link.classList.add("active");

      if (!link.querySelector("span")) {
        const check = document.createElement("span");
        check.textContent = "✓";
        link.appendChild(check);
      }
    }
  });

  function normalizePath(path) {
    if (!path.endsWith("/")) {
      path += "/";
    }
    return path;
  }

  // =========================
  // SIDEBAR ARROWS
  // =========================
  if (closeSidebar) {
    closeSidebar.addEventListener("click", function () {
      body.classList.add("sidebar-collapsed");
    });
  }

  if (openSidebar) {
    openSidebar.addEventListener("click", function () {
      body.classList.remove("sidebar-collapsed");
    });
  }
});
