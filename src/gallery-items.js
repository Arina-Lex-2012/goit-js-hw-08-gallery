export default [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

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









