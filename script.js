const character = document.querySelector(".character");
const obstacle = document.querySelector(".obstacles");
const scoreText = document.querySelector(".score");
let score = 0;
let isStarted = false;

function jump() {
  if (character.classList !== "jump") {
    clearTimeout()
    character.classList.add("jump");
    setTimeout(() => {
      character.classList.remove("jump");
    }, 700);
  }
}