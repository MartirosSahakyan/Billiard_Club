const barIcon = document.querySelector(".bar-icon");
const mobileMenu = document.querySelector(".mobile-menu__container");
const userDate = document.querySelector("#date");
const slides = document.querySelectorAll(".slide");

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

setCurrentDate(userDate);

barIcon.addEventListener("click", () => {
  bar1.classList.toggle("bar-rotate-minus");
  bar2.classList.toggle("bar-delete");
  bar3.classList.toggle("bar-rotate-plus");

  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});

let slideIndex = 0;
showSlides();
