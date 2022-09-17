// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);
console.log(galleryItems);

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
       return `
  <a class="gallery__item" href="${preview}">
    <img
      class="gallery__image"
      src="${original}"
      alt="${description}"
    />
  </a>
`;})
    .join('');
};

    new SimpleLightbox('.gallery a',{
        captionsData: "alt",
    })