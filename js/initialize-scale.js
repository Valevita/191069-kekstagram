'use strict';

window.MIN_VALUE = 25;
window.MAX_VALUE = 100;

window.controlsForm = document.querySelector('.upload-resize-controls');
window.controlsValue = window.controlsForm.querySelector('.upload-resize-controls-value');

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
  var newValue;
  window.controlsValue.value = value;
  element.addEventListener('click', function (event) {
    if (event.target.classList.contains('upload-resize-controls-button-dec')) {
      newValue = Math.max(percentStringToInt(window.controlsValue.value) - step, window.MIN_VALUE);
    } else if (event.target.classList.contains('upload-resize-controls-button-inc')) {
      newValue = Math.min(percentStringToInt(window.controlsValue.value) + step, window.MAX_VALUE);
    }
    changePreviewValue(newValue);
    resizeImage(newValue);
  });
};
