import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const galleryContainer = document.querySelector(`.gallery`);
const itemsMarkUp = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML(`beforeend`, itemsMarkUp);

function createGalleryItems(items) {
  return items.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
</div>`
  }).join('');
}

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: `alt`, captionsPosition: `bottom`, captionsDelay: 250
});