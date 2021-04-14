let modalCatalog = document.querySelector('.modal__catalog');

// === создаем иконки изображений === //
const createImg = (src) => {
    let thumbImg = document.createElement('img');
    thumbImg.classList.add('modal__img');
    thumbImg.setAttribute('src', src);
    return thumbImg;
}

const createThumbsImg = (parent) => {
    let parentCopy = parent;
    for (let i = 0, ln = store.modalPhoto.length; i < ln; i++) {
        let thumbImg = createImg(store.modalPhoto[i]);
        parentCopy.appendChild(thumbImg);
    }
    return parentCopy;
}

createThumbsImg(modalCatalog);






const closeButton = document.querySelector('.modal-window__close');
const modalWindow = document.querySelector('.modal-window');
let thumbImgCollection = [...document.querySelectorAll('.modal__img')];
let modalImg = document.querySelector('.modal-window__img');
let arrowPrev = document.querySelector('.modal-window__arrow-prev');
let arrowNext = document.querySelector('.modal-window__arrow-next');

let indexModalPhoto;

thumbImgCollection.forEach((el, i) => {
    el.addEventListener('click', () => {
        modalImg.setAttribute('src', store.modalPhoto[i]);
        modalWindow.style.display = 'block';
        indexModalPhoto = i;
    })
});


closeButton.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});

arrowPrev.addEventListener('click', () => {
    (indexModalPhoto < 1) ?  indexModalPhoto = store.modalPhoto.length : indexModalPhoto;
    modalImg.setAttribute('src', store.modalPhoto[indexModalPhoto-=1])
})

arrowNext.addEventListener('click', () => {
    (indexModalPhoto > store.modalPhoto.length-2) ?  indexModalPhoto = 0 : indexModalPhoto;
    modalImg.setAttribute('src', store.modalPhoto[indexModalPhoto+=1])
})


