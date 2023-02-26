function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");
// создаем дивы функцией, где амаунт - количество дивов в инпуте
const createBoxes = (amount) => {
  // делаем новый массив путой
  const newElementsArray = [];
  // перебираем амаунт
  for (let i = 0; i < amount; i++) {
    // делаю переменную и создаю див
    let newElement = document.createElement("div");
    // даю стили
    newElement.style.width = `${30 + 10 * i}px`;
    newElement.style.height = `${30 + 10 * i}px`;
    // newElement.style.marginBottom ="10px";
    newElement.style.backgroundColor = getRandomHexColor();
    // пушим елемент в новый созданный массив
    newElementsArray.push(newElement);
  }
  // возвращаем наш массив с дивами
  return newElementsArray;
};
// вешаю прослушку на кнопку создать
createBtn.addEventListener("click", () => {
  // создаем дивов столько, сколько велью в инпуте в функции создания
  let createdBoxes = createBoxes(input.value);
  // вешаю дивы в коробку
  divBox.append(...createdBoxes);
});
// чистим коробку второй кнопкой
destroyBtn.addEventListener("click", () => (divBox.innerHTML = ""));
// просто прикольно
divBox.style.display = "flex";
divBox.style.flexWrap = "wrap";
divBox.style.gap = "10px";
