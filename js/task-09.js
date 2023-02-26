function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const bcgColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", modifyColor);

function modifyColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  bcgColor.textContent = randomColor;
}
