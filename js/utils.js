'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  var randomNumber = function (maxValue) {
    return Math.floor(Math.random() * maxValue);
  };

  return {
    isEnterKey: function (event) {
      return (event.keyCode === ENTER_KEY_CODE);
    },
    isEscapeKey: function (event) {
      return (event.keyCode === ESC_KEY_CODE);
    },
    getRandomElement: function (array) {
      return array[randomNumber(array.length)];
    }
  };
})();
