'use strict';

(function () {
  var DATA_URL = ' https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  var template = document.querySelector('#picture-template');
  var pictureToClone = template.content.querySelector('.picture');
  var picturesContainer = document.querySelector('.pictures');
  var pictureFilters = document.querySelector('.filters');

  window.addInfoToPicture = function (image, likes, comments, data) {
    image.src = data.url;
    likes.innerText = data.likes;
    comments.innerText = data.comments.length;
  };

  var renderPictureElement = function (item) {
    var newPicture = pictureToClone.cloneNode(true);
    var image = newPicture.querySelector('img');
    var likes = newPicture.querySelector('.picture-likes');
    var comments = newPicture.querySelector('.picture-comments');

    window.addInfoToPicture(image, likes, comments, item);
    picturesContainer.appendChild(newPicture);

    newPicture.addEventListener('click', function (event) {
      event.preventDefault();
      window.showGallery(item);
    });
  };

  var removeAllPictures = function (parent) {
    parent.innerHTML = '';
  };

  var getRandomElementExcept = function (array, arrayNew) {
    var isElementNew = false;
    var randomElement;

    while (!isElementNew) {
      randomElement = window.utils.getRandomElement(array);
      isElementNew = true;
      if (arrayNew.indexOf(randomElement) !== -1) {
        isElementNew = false;
      }
    }
    return randomElement;
  };

  window.load(DATA_URL, function (response) {
    var pictures = response;

    pictures.forEach(renderPictureElement);
    pictureFilters.classList.remove('hidden');

    pictureFilters.addEventListener('click', function (event) {
      switch (event.target.value) {
        case 'popular':
          removeAllPictures(picturesContainer);
          pictures.forEach(renderPictureElement);
          break;

        case 'new':
          removeAllPictures(picturesContainer);
          var newPicturesArray = [];

          for (var i = 0; i < 10; i++) {
            newPicturesArray[newPicturesArray.length] = getRandomElementExcept(pictures, newPicturesArray);
          }
          newPicturesArray.forEach(renderPictureElement);
          break;

        case 'discussed':
          removeAllPictures(picturesContainer);
          var sortedPicturesArray = pictures.slice(pictures);

          sortedPicturesArray.sort(function (item1, item2) {
            return item2.comments.length - item1.comments.length;
          });
          sortedPicturesArray.forEach(renderPictureElement);
          break;
      }
    });
  });
})();

