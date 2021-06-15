let modal = document.querySelector(".modal");
let openModalBtn = document.querySelectorAll(".card-btn");
let closeModalBtn = document.querySelector(".modal__close");
let modalTable = document.querySelector("#modal-table");
let modalPlace = document.querySelector("#modal-place");
let modalDate = document.querySelector("#modal-date");

setCurrentDate(modalDate)

openModalBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.style.display = "block";
    let dataTable = btn.getAttribute("data-table");
    let dataPlace = btn.getAttribute("data-place");
    // modalTable.setAttribute('value',dataTable)
    // modalPlace.setAttribute('value',dataPlace)
    modalTable.textContent = dataTable.toUpperCase();
    modalPlace.textContent = dataPlace.toUpperCase();
  });
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
