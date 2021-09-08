// Handle Infomation modal
const closeInfoModalBtn = document.querySelector(".info-modal-close-btn");
const infoModal = document.querySelector(".info-modal");
closeInfoModalBtn.addEventListener("click", () => {
  infoModal.style.display = "none";
});

// Handle options modal
let isOptionsModalOpen = false;
const optionsModal = document.querySelector(".options-modal");
const optionsBtn = document.querySelector(".footer-options-btn");

optionsBtn.addEventListener("click", () => {
  if (!isOptionsModalOpen) optionsModal.classList.remove("hide");
  else optionsModal.classList.add("hide");
  isOptionsModalOpen = !isOptionsModalOpen;
});

// Handle layout modal
const changeLayoutBtn = document.querySelector(".change-layout-js");

const layoutModal = document.querySelector(".layout-modal");
const layoutModalCloseBtn = document.querySelector(".layout-modal-close-btn");

changeLayoutBtn.addEventListener("click", () => {
  optionsModal.classList.add("hide");
  layoutModal.classList.remove("hide");
});

layoutModalCloseBtn.addEventListener("click", () => {
  layoutModal.classList.add("hide");
});

// Handle report problem modal
const reportProblemModal = document.querySelector(".report-problem-modal");
const reportProblemModalCloseBtn = document.querySelector(
  ".report-problem-close-btn"
);
const reportProblemBtn = document.querySelector(".report-problem-btn");
reportProblemBtn.addEventListener("click", () => {
  optionsModal.classList.add("hide");
  reportProblemModal.classList.remove("hide");
});
reportProblemModalCloseBtn.addEventListener("click", () => {
  reportProblemModal.classList.add("hide");
});

// Handle subtitle modal
const subtitleCloseBtn = document.querySelector(".subtitle-close-btn");
const subtitleModal = document.querySelector(".subtitle-modal");
subtitleCloseBtn.addEventListener("click", () => {
  subtitleModal.classList.add("hide");
});
const changeSubtitleBtn = document.querySelector(".change-subtitle-js");
changeSubtitleBtn.addEventListener("click", () => {
  optionsModal.classList.add("hide");
  subtitleModal.classList.remove("hide");
});

// Handle right side bar
let isRightSideBarOpen = false;

const rightSideBar = document.querySelector(".main-aside");
const groupSideBar = document.querySelector(".main-aside-group-js");
const chatSideBar = document.querySelector(".main-aside-chat-js");
const whiteboardSideBar = document.querySelector(".whiteboard-content");
const activitiesContent = document.querySelector(".activities-content");
const activitiesSideBar = document.querySelector(".main-aside-activities-js");
const secureSideBar = document.querySelector(".main-aside-secure-js");

const infoBtn = document.querySelector(".footer-info-btn");
const groupBtn = document.querySelector(".footer-group-btn");
const chatBtn = document.querySelector(".footer-chat-btn");
const whiteboardBackBtn = document.querySelector(".whiteboard-backward-btn");
const openWhiteboardBtn = document.querySelector(".activities-btn");
const activitiesBtn = document.querySelector(".footer-activities-btn");
const secureBtn = document.querySelector(".footer-secure-btn");

let isShowSideBar = false;
// let isShowGroupSideBar = false;

function handleSideBar(sideBar, check) {
  switch (check) {
    case true:
      sideBar.classList.remove("hide");
      break;
    case false:
      sideBar.classList.add("hide");
      break;
    default:
      break;
  }
}

infoBtn.addEventListener("click", () => {
  isShowSideBar = !isShowSideBar;
  handleSideBar(rightSideBar, isShowSideBar);
});
groupBtn.addEventListener("click", () => {
  isShowSideBar = !isShowSideBar;
  handleSideBar(groupSideBar, isShowSideBar);
});
chatBtn.addEventListener("click", () => {
  isShowSideBar = !isShowSideBar;
  handleSideBar(chatSideBar, isShowSideBar);
});
openWhiteboardBtn.addEventListener("click", () => {
  activitiesContent.classList.add("hide");
  whiteboardSideBar.classList.remove("hide");
});
whiteboardBackBtn.addEventListener("click", () => {
  whiteboardSideBar.classList.add("hide");
  activitiesContent.classList.remove("hide");
});
activitiesBtn.addEventListener("click", () => {
  isShowSideBar = !isShowSideBar;
  handleSideBar(activitiesSideBar, isShowSideBar);
});
secureBtn.addEventListener("click", () => {
  isShowSideBar = !isShowSideBar;
  handleSideBar(secureSideBar, isShowSideBar);
});

// Handle Vertical tab (Cài đặt) modal
function openTab(event, tabName) {
  const tabContents = document.querySelectorAll(".settings-tabcontent");
  const tabLinks = document.querySelectorAll(".tablinks");

  tabContents.forEach((tabContent) => {
    tabContent.classList.add("hide");
  });

  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active");
  });

  document.getElementById(tabName).classList.remove("hide");
  event.currentTarget.className += " active";

  // console.log(event.currentTarget);
}
document.getElementById("default-open").click();

// Handle close settings modal button
const settingsModal = document.querySelector(".settings-modal");
const settingsModalBtn = document.querySelector(".settings-js");
const settingsModalCloseBtn = document.querySelector(".settings-close-btn");
settingsModalBtn.addEventListener("click", () => {
  optionsModal.classList.add("hide");
  settingsModal.classList.remove("hide");
});
settingsModalCloseBtn.addEventListener("click", () => {
  settingsModal.classList.add("hide");
});

// Handle Footer buttons
function disableBtn(button, enableIcon, disableIcon) {
  disableIcon.classList.add("hide");
  enableIcon.classList.remove("hide");
  button.classList.replace("disable-btn", "enable-btn");
}

function enableBtn(button, enableIcon, disableIcon) {
  disableIcon.classList.remove("hide");
  enableIcon.classList.add("hide");
  button.classList.replace("enable-btn", "disable-btn");
}

let isMicroOn = false;
const microBtnFooter = document.querySelector(".micro-btn-footer");
const microEnable = document.querySelector(".micro-enable-footer");
const microDisable = document.querySelector(".micro-disable-footer");

microBtnFooter.addEventListener("click", () => {
  if (!isMicroOn) {
    enableBtn(microBtnFooter, microEnable, microDisable);
  } else {
    disableBtn(microBtnFooter, microEnable, microDisable);
  }
  isMicroOn = !isMicroOn;
});

let isVideoOn = false;
const videoBtnFooter = document.querySelector(".video-btn-footer");
const videoEnable = document.querySelector(".video-enable-footer");
const videoDisable = document.querySelector(".video-disable-footer");
videoBtnFooter.addEventListener("click", () => {
  if (!isVideoOn) {
    enableBtn(videoBtnFooter, videoEnable, videoDisable);
  } else {
    disableBtn(videoBtnFooter, videoEnable, videoDisable);
  }
  isVideoOn = !isVideoOn;
});
