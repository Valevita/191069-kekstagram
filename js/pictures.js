'use strict';

(function () {
  var DATA_URL = ' https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  var template = document.querySelector('#picture-template');
  var pictureToClone = template.content.querySelector('.picture');
  var picturesContainer = document.querySelector('.pictures');
  var pictureFilters = document.querySelector('.filters');

  var renderPictureElement = function (item) {
    var newPicture = pictureToClone.cloneNode(true);
    var image = newPicture.querySelector('img');
    var likes = newPicture.querySelector('.picture-likes');
    var comments = newPicture.querySelector('.picture-comments');

    image.src = item.url;
    likes.innerText = item.likes;
    comments.innerText = item.comments.length;

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
      isElementNew = arrayNew.indexOf(randomElement) === -1;
    }
    return randomElement;
  };

  window.load(DATA_URL, function (response) {
    var pictures = response;

    pictures.forEach(renderPictureElement);
    pictureFilters.classList.remove('hidden');

    pictureFilters.addEventListener('click', function (event) {
      removeAllPictures(picturesContainer);
      switch (event.target.value) {
        case 'popular':
          pictures.forEach(renderPictureElement);
          break;

        case 'new':
          var newPictures = [];

          for (var i = 0; i < 10; i++) {
            newPictures[i] = getRandomElementExcept(pictures, newPictures);
          }
          newPictures.forEach(renderPictureElement);
          break;

        case 'discussed':
          var sortedPictures = pictures.slice(pictures);

          sortedPictures.sort(function (item1, item2) {
            return item2.comments.length - item1.comments.length;
          });
          sortedPictures.forEach(renderPictureElement);
          break;
      }
    });
  });
})();

