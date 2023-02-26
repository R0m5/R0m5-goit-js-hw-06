const inputName = document.querySelector("#validation-input");

inputName.addEventListener("blur", () => {
  if (inputName.value.length == inputName.dataset.length) {
    inputName.classList.add("valid");
    inputName.classList.remove("invalid");
  } else {
    inputName.classList.add("invalid");
    inputName.classList.remove("valid");
  }
});

// const inputEl = document.getElementById("validation-input");

// inputEl.addEventListener("blur", () => {
//   const requiredLength = inputEl.getAttribute("data-length");
//   const currentLength = inputEl.value.length;

//   if (currentLength == requiredLength) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// });
