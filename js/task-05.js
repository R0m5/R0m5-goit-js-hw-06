const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});

// Other variants (без Anonymous)
// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });
