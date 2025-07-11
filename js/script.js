function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");

  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  } else {
    navbar.style.display = "block";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Dropdown functionality
  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      let dropdownMenu = toggle.nextElementSibling;

      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
      } else {
        document.querySelectorAll(".dropdown").forEach((menu) => {
          menu.style.display = "none"; // Close other dropdowns
        });
        dropdownMenu.style.display = "block";
      }
    });
  });
});
