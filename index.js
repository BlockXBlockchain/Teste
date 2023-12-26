document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-menu");
    const navbar = document.querySelector(".navbar");
  
    toggleButton.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });
  