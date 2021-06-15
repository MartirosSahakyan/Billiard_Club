const barIcon = document.querySelector(".bar-icon");
const mobileMenu = document.querySelector(".mobile-menu__container");
const userDate = document.querySelector("#date");
setCurrentDate(userDate);

barIcon.addEventListener("click", function () {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});
