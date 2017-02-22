'use strict';

(function () {
  window.showGallery = function (data) {
    var gallery = document.querySelector('.gallery-overlay');
    var closeGallery = gallery.querySelector('.gallery-overlay-close');
    var image = gallery.querySelector('.gallery-overlay img');
    var likes = gallery.querySelector('.gallery-overlay .likes-count');
    var comments = gallery.querySelector('.gallery-overlay .comments-count');

    gallery.classList.remove('invisible');
    closeGallery.focus();

    window.addInfoToPicture(image, likes, comments, data);

    closeGallery.addEventListener('click', function () {
      gallery.classList.add('invisible');
    });

    closeGallery.addEventListener('keydown', function (event) {
      if (window.utils.isEnterKey(event)) {
        gallery.classList.add('invisible');
      }
    });
  };
})();
