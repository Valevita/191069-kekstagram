'use strict';

(function () {
  var DATA_URL = ' https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  window.load(DATA_URL, function (response) {
    var pictures = response;
    var template = document.querySelector('#picture-template');
    var pictureToClone = template.content.querySelector('.picture');
    var picturesContainer = document.querySelector('.pictures');

    var createDOMElement = function (item) {
      var newPicture = pictureToClone.cloneNode(true);
      var image = newPicture.querySelector('img');
      var likes = newPicture.querySelector('.picture-likes');
      var comments = newPicture.querySelector('.picture-comments');

      picturesContainer.appendChild(newPicture);
      window.utils.addInfoToPicture(image, likes, comments, item);

      newPicture.addEventListener('click', function (event) {
        event.preventDefault();
        window.showGallery(item);
      });
    };

    pictures.forEach(createDOMElement);

  });
})();
