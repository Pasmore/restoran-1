const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("disp");
});

const audio = document.querySelector("#audio");
const btnka = document.querySelector("#btnka");

btnka.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
});
