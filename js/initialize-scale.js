'use strict';

window.CONTROLS_STEP = 25;
window.MIN_VALUE = 25;
window.MAX_VALUE = 100;

window.controlsValue = document.querySelector('.upload-resize-controls-value');
window.buttonImageSmaller = document.querySelector('.upload-resize-controls-button-dec');
window.buttonImageBigger = document.querySelector('.upload-resize-controls-button-inc');

var resizeImage = function (percent) {
  var controlsValueScale = percent * 0.01;
  window.imagePreview.style.transform = 'scale(' + controlsValueScale + ')';
};

var changePreviewValue = function (percent) {
  var controlsValueNew = percent + '%';
  window.controlsValue.value = controlsValueNew;
};

var percentStringToInt = function (string) {
  return parseInt(string.substring(0, string.length - 1), 10);
};

window.createScale = function (element, step, value) {
  element.addEventListener('click', function () {
    if (element === window.buttonImageSmaller) {
      value = Math.max(percentStringToInt(window.controlsValue.value) - window.CONTROLS_STEP, window.MIN_VALUE);
    } else if (element === window.buttonImageBigger) {
      value = Math.min(percentStringToInt(window.controlsValue.value) + window.CONTROLS_STEP, window.MAX_VALUE);
    }
    changePreviewValue(value);
    resizeImage(value);
  });
};
