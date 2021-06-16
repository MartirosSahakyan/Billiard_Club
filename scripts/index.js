const barIcon = document.querySelector(".bar-icon");
const mobileMenu = document.querySelector(".mobile-menu__container");
const userDate = document.querySelector("#date");
const slides = document.querySelectorAll(".slide");

setCurrentDate(userDate);

barIcon.addEventListener("click", function () {
  barIcon.classList.toggle("bar-icon__change");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});

let slideIndex = 0;
showSlides();
