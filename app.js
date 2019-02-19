let hidden = document.querySelector(".hidden");
let mobileMenu = document.querySelector(".mobile-menu");
let menuBtn = document.querySelector(".menuBtn");
let closeMenu = document.querySelector(".close-menu");
let feature = document.querySelector(".mobile-feat");
let price = document.querySelector(".mobile-price");
let signup = document.querySelector(".mobile-signup");

let menuToggle = function () {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
}

menuBtn.addEventListener("click", menuToggle);
feature.addEventListener("click", menuToggle);
price.addEventListener("click", menuToggle);
signup.addEventListener("click", menuToggle);
closeMenu.addEventListener("click", menuToggle);