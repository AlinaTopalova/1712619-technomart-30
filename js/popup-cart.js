"use strict"

const cartLinks = document.querySelector(".products-list");
const catalogCartLinks = document.querySelector(".catalog-products-list");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close-button");

cartLinks.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("buy")) {
  evt.preventDefault();
  cartPopup.classList.add("modal-cart-show");
  }
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-cart-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
    }
  }
});