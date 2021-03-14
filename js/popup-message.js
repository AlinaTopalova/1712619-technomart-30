"use strict";

const messageLink = document.querySelector(".contacts-map-button");
const messagePopup = document.querySelector(".modal-message");
const messageClose = messagePopup.querySelector(".modal-close-button");
const messageForm = messagePopup.querySelector(".modal-message-form");
const messageUserName = messagePopup.querySelector(".message-user-name");
const messageUserEmail = messagePopup.querySelector(".message-user-email");
const messageText = messagePopup.querySelector(".message-text");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

messageLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
  
  if (storageName) {
    messageUserName.value = storageName;
    messageUserEmail.focus();
  } else {
    messageUserName.focus();
  }

  if (storageEmail) {
    messageUserEmail.value = storageEmail;
    messageText.focus();
  } else {
    messageUserEmail.focus();
  }
});

messageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  messagePopup.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function (evt) {
  if (!messageUserName.value || !messageUserEmail.value || !messageText) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-error");
    window.requestAnimationFrame(() => messagePopup.classList.add("modal-error"));
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", messageUserName.value);
      localStorage.setItem("email", messageUserEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (messagePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
      messagePopup.classList.remove("modal-error");
    }
  }
});