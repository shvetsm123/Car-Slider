const slides = document.querySelectorAll(".slide");

for (let ch of slides) {
  ch.addEventListener("click", () => {
    clearActiveClasses();

    ch.classList.add("active");
  });
}
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
