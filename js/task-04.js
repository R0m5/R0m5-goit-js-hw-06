const valueEl = document.querySelector("#value");
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

incrementEl.addEventListener("click", add);
decrementEl.addEventListener("click", subtract);

function add() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function subtract() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
