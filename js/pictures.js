'use strict';

(function () {
  var DATA_URL = ' https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  window.addInfoToPicture = function (image, likes, comments, data) {
    image.src = data.url;
    likes.innerText = data.likes;
    comments.innerText = data.comments.length;
  };

  window.load(DATA_URL, function (response) {
    window.pictures = response;

    var template = document.querySelector('#picture-template');
    var pictureToClone = template.content.querySelector('.picture');
    var picturesContainer = document.querySelector('.pictures');
    var pictureFilters = document.querySelector('.filters');

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


    var removeAllPictures = function (parent) {
      parent.innerHTML = '';
    };

    var getRandomElementExcept = function (array, arraynew) {
      var isElementNew = false;
      var randomElement;

      while (!isElementNew) {
        randomElement = window.utils.getRandomElement(array);
        isElementNew = true;
        if (arraynew.indexOf(randomElement) !== -1) {
          isElementNew = false;
        }
      }
      return randomElement;
    };


    pictureFilters.classList.remove('hidden');

    pictureFilters.addEventListener('click', function (event) {
      switch (event.target.value) {
        case 'popular':
          removeAllPictures(picturesContainer);
          window.pictures.forEach(renderPictureElement);
          break;

        case 'new':
          removeAllPictures(picturesContainer);
          var newPicturesArray = [];
          var i = 0;
          while (i < 10) {
            newPicturesArray[newPicturesArray.length] = getRandomElementExcept(window.pictures, newPicturesArray);
            i++;
          }
          newPicturesArray.forEach(renderPictureElement);
          break;

        case 'discussed':
          removeAllPictures(picturesContainer);
          var sortedPicturesArray = window.pictures.slice(window.pictures);
          sortedPicturesArray.sort(function (item1, item2) {
            return item2.comments.length - item1.comments.length;
          });
          sortedPicturesArray.forEach(renderPictureElement);
          break;
      }
    });

  });
})();

