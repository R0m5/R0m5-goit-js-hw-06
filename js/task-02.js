const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientRef = document.querySelector("#ingredients");

const itemCreate = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");

  return ingredientEl;
});
ingredientRef.append(...itemCreate);

// Others variants

//  Variant 1: Тут без "createElement"

// const list = document.querySelector("#ingredients");

// const markup = ingredients
//   .map((ingredient) => `<li class="list-item">${ingredient}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

//  Variant 2

// let list = document.querySelector("#ingredients");

// ingredients.map((ingredient) => {
//   const markup = document.createElement("li");
//   markup.textContent = ingredient;
//   markup.classList.add("elememt");
//   list.append(markup);
// });

//  Variant 3

// const ul = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ul.appendChild(li);
// });

// Variant 4

// const list = document.querySelector("#ingredients");
// const liArray = [];

// // for (const item of ingredients)
// ingredients.forEach((ingredient) => {
//   const elem = document.createElement("li");
//   elem.textContent = ingredient;
//   elem.className = "item";
//   liArray.push(elem);
// });

// list.append(...liArray);
