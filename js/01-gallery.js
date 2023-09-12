import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery");
const markup = galleryItems.map(({preview,original,description}) => 
` <li class="gallery__item"> <a class="gallery__link" href="${original}"> <img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`
);
container.insertAdjacentHTML("afterbegin", markup.join(''));
container.addEventListener("click", onClick);

  function onClick(event) {
    const {target} = event;
    event.preventDefault();
    if(!target.classList.contains("gallery__image")){
        return;
    }
    console.log(target.dataset.source)
    const instance = basicLightbox.create(` <div>
      <img class="open" src="${target.dataset.source}" alt="${target.alt}" width="1148">
       </div>`);
      instance.show();


      document.addEventListener('keydown', function(event) {
        if(event.key === "Escape"){
            return instance.close();
      }
    });
  }