"use strict";

const serviceBtns = document.querySelectorAll(".service-buttons-list button");
const serviceSlides = document.querySelectorAll(".service-item");

const resetActiveSlides = () => {
  serviceSlides.forEach((item) => {
    item.classList.remove("service-item-show");
  });
  serviceBtns.forEach((item) => {
    item.classList.remove("service-button-active");
  });
};

serviceBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    resetActiveSlides();
    serviceSlides[i].classList.add("service-item-show");
    btn.classList.add("service-button-active");
  });
});