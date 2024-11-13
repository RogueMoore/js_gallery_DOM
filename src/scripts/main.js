'use strict';

const mainImage = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');
const listItems = document.querySelectorAll('.list-item');
const imgLink = document.querySelectorAll('.list-item__link');

galleryList.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    mainImage.src = event.target.parentElement.href;
  }

  event.preventDefault();
});

console.dir(mainImage);
