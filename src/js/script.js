const ArrowLeft = document.getElementById("left");
const ArrowRight = document.getElementById("right");
const slides = document.querySelectorAll(".slide");
let indexSlide = 0;
ArrowRight.addEventListener("click", () => {
  if (indexSlide === slides.length - 1) {
    return;
  }
  removeActiveSlide();
  indexSlide++;
  addActiveSlide();
  opacityArrows();
});
ArrowLeft.addEventListener("click", () => {
  if (indexSlide === 0) {
    return;
  }
  removeActiveSlide();
  indexSlide--;
  addActiveSlide();
  opacityArrows();
});
function addActiveSlide() {
  slides[indexSlide].classList.add("active");
}
function removeActiveSlide() {
  const active = document.querySelector(".active");
  active.classList.remove("active");
}
function opacityArrows() {
  const lastImg = slides.length - 1 === indexSlide;
  if (lastImg) {
    ArrowRight.classList.add("opacity");
  } else if (indexSlide != 0) {
    ArrowLeft.classList.remove("opacity");
  } else {
    ArrowLeft.classList.add("opacity");
    ArrowRight.classList.remove("opacity");
  }
}
