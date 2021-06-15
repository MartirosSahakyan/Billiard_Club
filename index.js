// import {setCurrentDate} from "./helper";
function setCurrentDate(tag) {
  const makeTwoDigit = (num) => (String(num).length === 1 ? `0${num}` : num);
  const dateNow = new Date();
  let year = dateNow.getFullYear();
  let month = makeTwoDigit(dateNow.getMonth() + 1);
  let date = dateNow.getDate();
  let hour = dateNow.getHours();
  let minute = dateNow.getMinutes();
  let dateValue = `${year}-${month}-${date}T${hour}:${minute}`;
  tag.setAttribute("value", dateValue);
}

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
