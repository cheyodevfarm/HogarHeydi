// Aca capturamos los elementos para posteriormente aplicarles funciones

let slider = document.querySelector(".contenedor__slider");
let slider_individual = document.querySelectorAll(".section__header");
let nroImagen = 1;
let intervalo = 3000;
let anchoImagen = slider_individual[0].clientWidth;
// aca van las funciones0
window.addEventListener("resize", () => {
  width = slider_individual[0].clientWidth;
});
function animacionSlider() {
  slider.style.transform = "translateX(" + -anchoImagen * nroImagen + "px)";
  slider.style.transition = "transform 1s";
  nroImagen = nroImagen + 1;

  if (nroImagen === slider_individual.length) {
    setTimeout(() => {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      nroImagen = 1;
    }, 1500);
  }
}
setInterval(function () {
  animacionSlider();
}, intervalo);
