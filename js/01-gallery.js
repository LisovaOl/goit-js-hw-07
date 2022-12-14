import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
galleryContainer.addEventListener("click", onImagesGallaryClick);

function onImagesGallaryClick(evt) {
  evt.preventDefault();
  const imgSrc = evt.target.dataset.source;
  console.log(imgSrc);
  const instance = basicLightbox.create(`
    <img     
    src="${imgSrc}"
    >
    `);
  instance.show();
}
