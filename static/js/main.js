const searchInput = document.getElementById("searchInput");
const menuLinks = document.querySelectorAll("#menuList a");

searchInput.addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();

  menuLinks.forEach(function (link) {
    const text = link.textContent.toLowerCase();

    if (text.includes(keyword)) {
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }
  });
});

const currentUrl = window.location.pathname;

menuLinks.forEach(function (link) {
  const linkPath = new URL(link.href).pathname;

  if (currentUrl === linkPath) {
    link.classList.add("active");
  }
});
