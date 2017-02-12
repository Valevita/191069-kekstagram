'use strict';

window.ENTER_KEY_CODE = 13;
window.ESC_KEY_CODE = 27;

window.isEnterKey = function (event) {
  return (event.keyCode === window.ENTER_KEY_CODE);
};

window.isEscapeKey = function (event) {
  return (event.keyCode === window.ESC_KEY_CODE);
};
