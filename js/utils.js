'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  return {
    isEnterKey: function (event) {
      return (event.keyCode === ENTER_KEY_CODE);
    },
    isEscapeKey: function (event) {
      return (event.keyCode === ESC_KEY_CODE);
    },

    addInfoToPicture: function (image, likes, comments, data) {
      image.src = data.url;
      likes.innerText = data.likes;
      comments.innerText = data.comments.length;
    }
  };
})();
