"use strict"

const catalogSlides = document.querySelectorAll(".offer-slide");
const nextSlideBtn = document.querySelector(".right-button");
const previousSlideBtn = document.querySelector(".left-button");

let currentSlide = 0;

let nextSlide = function() {
    goToSlide(currentSlide + 1);
}
 
let previousSlide = function() {
    goToSlide(currentSlide - 1);
}

let goToSlide = function(n) {
  catalogSlides[currentSlide].classList.remove("offer-slide-show");
  currentSlide = (n + catalogSlides.length) % catalogSlides.length;
  catalogSlides[currentSlide].classList.add("offer-slide-show");
}

nextSlideBtn.addEventListener("click", nextSlide);
previousSlideBtn.addEventListener("click", previousSlide);