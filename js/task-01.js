// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

const categoriesItem = categoriesList.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});

// Other variants

// Variant 1 (Spread)
// const categoriesList = document.querySelectorAll("#categories li.item");
// console.log("Number of categories: ", categoriesItemRef.length);
// const result = [...listItems].map(
//   (item) => (
//     console.log(`Category: ${item.querySelector("h2").textContent}`),
//     console.log(`Elements: ${item.querySelectorAll("li").length}`)
//   )
// );

// Variant 2
// const arrayCategories = document.querySelector("#categories");
// const numberOfCategories = arrayCategories.children;
// console.log(`Number of categories: ${numberOfCategories.length}`);
// categoriesList.forEach((item) => {
//   console.log(`Category: ${item.querySelector("h2").textContent}`),
//   console.log(`Elements: ${item.querySelectorAll("li").length}`)

// Or

//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);

// Or

//   const titleText = element.querySelector("h2");
//   console.log(`Category: ${titleText.textContent}`);
//   const elementNumber = element.querySelectorAll("li");
//   console.log(`Elements: ${elementNumber.length}`);
// });

// Variant 3
// const categoriesItemRef = document.querySelectorAll("#categories li.item");
// console.log("Number of categories: ", categoriesItemRef.length);

// const itemTitleRef = document.querySelectorAll("#categories h2")
//   .forEach((title) => {
//     console.log("Category: ", title.textContent);

//     const categoriesElRef = title.parentNode.querySelectorAll("ul li");
//     console.log("Elements: ", categoriesElRef.length);
//   });
