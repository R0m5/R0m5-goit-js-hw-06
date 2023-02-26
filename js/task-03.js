const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listIm = document.querySelector(".gallery");

const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img class="picture" src=${url} width = '280' alt='${alt}'></img></li>`
  )
  .join("");

// Adding all the markup in one operation
// listIm.innerHTML = markup;
// Or
listIm.insertAdjacentHTML("beforeend", markup);

listIm.style.display = "flex";
listIm.style.gap = "30px";
listIm.style.listStyle = "none";
listIm.style.justifyContent = "center";

// Other Variant

// const galleryListRef = document.querySelector(".gallery");
// galleryListRef.classList.add("list");

// const makeGalleryItem = (images) => {
//   return images.map((image) => {
//     const liRef = document.createElement("li");
//     liRef.insertAdjacentHTML(
//       "beforeend",
//       `<img src="${image.url}" width = '400' alt="${image.alt}">`
//     );

//     return liRef;
//   });
// };

// galleryListRef.append(...makeGalleryItem(images));
