'use strict';

/* window.ENTER_KEY_CODE = 13;
window.ESC_KEY_CODE = 27;

window.isEnterKey = function (event) {
  return (event.keyCode === window.ENTER_KEY_CODE);
};

window.isEscapeKey = function (event) {
  return (event.keyCode === window.ESC_KEY_CODE);
};*/

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  return {
    isEnterKey: function (event) {
      return (event.keyCode === ENTER_KEY_CODE);
    },
    isEscapeKey: function (event) {
      return (event.keyCode === ESC_KEY_CODE);
    }
  };
})();
