'use strict';

window.addInfoToPicture = function (image, likes, comments, data) {
  image.src = data.url;
  likes.innerText = data.likes;
  comments.innerText = data.comments.length;
};


(function () {
  var DATA_URL = ' https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  window.load(DATA_URL, function (response) {
    window.pictures = response;

    var template = document.querySelector('#picture-template');
    var pictureToClone = template.content.querySelector('.picture');
    var picturesContainer = document.querySelector('.pictures');

    var renderPictureElement = function (item) {
      var newPicture = pictureToClone.cloneNode(true);
      var image = newPicture.querySelector('img');
      var likes = newPicture.querySelector('.picture-likes');
      var comments = newPicture.querySelector('.picture-comments');

      picturesContainer.appendChild(newPicture);
      window.addInfoToPicture(image, likes, comments, item);

      newPicture.addEventListener('click', function (event) {
        event.preventDefault();
        window.showGallery(item);
      });
    };

    window.pictures.forEach(renderPictureElement);


    var pictureFilters = document.querySelector('.filters');
    var popularPictures = document.querySelector('#filter-popular');
    var newPictures = document.querySelector('#filter-new');
    var discussedPictures = document.querySelector('#filter-discussed');

    var removeAllPictures = function (parent) {
      var i = parent.childElementCount;
      while (i !== 0) {
        parent.removeChild(parent.childNodes[i]);
        i--;
      }
    };

    var getRandomElementExcept = function (array, arraynew) {
      var isElementNew = false;
      var randomElement;

      while (!isElementNew) {
        randomElement = window.utils.getRandomElement(array);
        isElementNew = true;
        arraynew.forEach(function (item) {
          if (randomElement === item) {
            isElementNew = false;
          }
        });
      }
      return randomElement;
    };


    pictureFilters.classList.remove('hidden');

    popularPictures.addEventListener('click', function () {
      removeAllPictures(picturesContainer);
      window.pictures.forEach(renderPictureElement);
    });

    newPictures.addEventListener('click', function () {
      var newPicturesArray = [];
      var i = 0;
      while (i < 10) {
        newPicturesArray[newPicturesArray.length] = getRandomElementExcept(window.pictures, newPicturesArray);
        i++;
      }
      removeAllPictures(picturesContainer);
      newPicturesArray.forEach(renderPictureElement);
    });

    discussedPictures.addEventListener('click', function () {
      removeAllPictures(picturesContainer);
      var newPicturesArray = window.pictures.slice(window.pictures);
      newPicturesArray.sort(function (item1, item2) {
        return item2.comments.length - item1.comments.length;
      });
      newPicturesArray.forEach(renderPictureElement);
    });
  });
})();

