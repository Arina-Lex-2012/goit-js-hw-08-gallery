import galleryList from './gallery-items.js'

// функция добавления элементов списка и ее вызов
const galleryEl = document.querySelector('ul');

const galleryListEl = []; 

function makeItemsOfGallery () {
for (let i = 0; i < galleryList.length; i+=1) {
  const galleryItemEl = document.createElement('li');
  galleryItemEl.classList.add('gallery__item');

  const galleryItemLinkEl = document.createElement('a');
  galleryItemLinkEl.classList.add('gallery__link');
  galleryItemLinkEl.href = galleryList[i].original;

  const galleryItemImageEl = document.createElement('img');
  galleryItemImageEl.classList.add('gallery__image');
  galleryItemImageEl.src = galleryList[i].preview;
  galleryItemImageEl.setAttribute ('data-source', galleryList[i].original);
  galleryItemImageEl.alt = galleryList[i].description;

  galleryItemLinkEl.appendChild(galleryItemImageEl);
  galleryItemEl.appendChild(galleryItemLinkEl);

  galleryListEl.push(galleryItemEl);
};

galleryEl.append(...galleryListEl);
};

makeItemsOfGallery();

//добавление слушателя событий на js-gallery и js-lightbox
const galleryItemsEl = document.querySelector('.js-gallery');
galleryItemsEl.addEventListener('click', onClick);

const lightboxEl = document.querySelector('.js-lightbox');

const galleryItemLinkEl = document.querySelector('a');

const lightboxImageEl =  document.querySelector('.lightbox__image');

//функция клика по изображению галереи
function onClick(event){
  console.log(event.target.nodeName);
  lightboxEl.classList.add('is-open'); 
  lightboxImageEl.src = galleryItemLinkEl.href;

  // if (event.target.nodeName === 'UL'){
  //   console.log(event.target.nodeName);
  //   console.log('UL');
  //   lightboxEl.classList.add('is-open'); 
  //   lightboxImageEl.src = galleryItemLinkEl.href;
  //   return;
  // } else{
  //   console.log('NOT UL');
  //   console.log(event.target.nodeName);
  // };
};

//  добавление слушателя событий на lightbox__button, lightbox__overlay и
//  функция закрытия модального окна
const modalButtonEl = document.querySelector('.lightbox__button');
modalButtonEl.addEventListener('click', closeModalWindow);

const overlayEl = document.querySelector('.lightbox__overlay');
overlayEl.addEventListener('click', closeModalWindow);

function closeModalWindow(){
  lightboxEl.classList.remove('is-open');
  lightboxImageEl.src = '';
};









