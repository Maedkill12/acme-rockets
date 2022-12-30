const initApp = () => {
  const mobileBtn = document.querySelector("#mobile-button");
  const mobileMenu = document.querySelector("#mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    mobileBtn.classList.toggle("toggle-btn");
  };

  mobileBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
