'use strict';

(function () {
  var gallery = document.querySelector('.gallery-overlay');
  var closeGallery = gallery.querySelector('.gallery-overlay-close');
  var image = gallery.querySelector('.gallery-overlay img');
  var likes = gallery.querySelector('.gallery-overlay .likes-count');
  var comments = gallery.querySelector('.gallery-overlay .comments-count');

  var showGalleryWindow = function () {
    gallery.classList.add('invisible');
  };

  window.showGallery = function (data) {
    gallery.classList.remove('invisible');
    closeGallery.focus();

    image.src = data.url;
    likes.innerText = data.likes;
    comments.innerText = data.comments.length;

    closeGallery.addEventListener('click', showGalleryWindow);
    closeGallery.addEventListener('keydown', function (event) {
      if (window.utils.isEnterKey(event)) {
        showGalleryWindow();
      }
    });
  };
})();
