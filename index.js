const REDIRECT_TIME = 1500;

// Handle slider

// Handle call button
const popupMeeting = document.querySelector(".pop-up-meeting");
const createBtn = document.querySelector(".btn__join");
const popupContainer = document.querySelector(".pop-up-container");
const createAfter = document.querySelector(".js-create-after");
const createNow = document.querySelector(".js-create-now");
const joiningNotification = document.querySelector(".joining");

popupMeeting.addEventListener("click", hidePopupMeeting);
// popupContainer.addEventListener("click", (event) => {
//   event.stopPropagation();
// });

function showPopupMeeting() {
  popupMeeting.classList.remove("hide");
}

function hidePopupMeeting() {
  popupMeeting.classList.add("hide");
}

createBtn.addEventListener("click", showPopupMeeting);
createAfter.addEventListener("click", () => {
  hidePopupMeeting();
  showModal();
});
createNow.addEventListener("click", (event) => {
  joiningNotification.style.display = "flex";
  setTimeout(() => {
    joiningNotification.style.display = "none";
    window.location.replace("./call.html");
  }, REDIRECT_TIME);
});

// Handle modal
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const modalCloseBtn = document.querySelector(".modal-header-close");

modal.addEventListener("click", hideModal);
modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
modalCloseBtn.addEventListener("click", hideModal);

function hideModal() {
  modal.style.display = "none";
}

function showModal() {
  modal.style.display = "flex";
}
