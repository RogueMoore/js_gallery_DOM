'use strict';

const mainImage = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    mainImage.src = e.target.parentElement.href;
  }
});

console.dir(mainImage);
