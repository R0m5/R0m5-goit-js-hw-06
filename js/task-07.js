const inputName = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputName.addEventListener("input", () => {
  textSpan.style.fontSize = `${inputName.value}px`;
});

// const inputName = document.querySelector("#font-size-control");
// const textSpan = document.querySelector("#text");

// inputName.addEventListener("input", (event) => {
//   textSpan.style.fontSize = `${event.currentTarget.value}px`;
//   console.log(event.currentTarget.value);
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// });

//  Other variant

// const fontSizeControl = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");

// fontSizeControl.addEventListener("input", function () {
//   text.style.fontSize = fontSizeControl.value + "px";
//   console.log(fontSizeControl.value);
// });
