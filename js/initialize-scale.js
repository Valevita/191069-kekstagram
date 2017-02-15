'use strict';

window.controlsForm = document.querySelector('.upload-resize-controls');

window.createScale = (function () {
  var MIN_VALUE = 25;
  var MAX_VALUE = 100;

  var controlsValue = window.controlsForm.querySelector('.upload-resize-controls-value');
  var imagePreview = window.uploadOverlay.querySelector('.filter-image-preview');

  var resizeImage = function (percent) {
    var controlsValueScale = percent * 0.01;
    imagePreview.style.transform = 'scale(' + controlsValueScale + ')';
  };

  var changePreviewValue = function (percent) {
    var controlsValueNew = percent + '%';
    controlsValue.value = controlsValueNew;
  };

  var percentStringToInt = function (string) {
    return parseInt(string.substring(0, string.length - 1), 10);
  };

  return function (element, step, value) {
    var newValue;
    controlsValue.value = value;
    element.addEventListener('click', function (event) {
      if (event.target.classList.contains('upload-resize-controls-button-dec')) {
        newValue = Math.max(percentStringToInt(controlsValue.value) - step, MIN_VALUE);
      } else if (event.target.classList.contains('upload-resize-controls-button-inc')) {
        newValue = Math.min(percentStringToInt(controlsValue.value) + step, MAX_VALUE);
      }
      changePreviewValue(newValue);
      resizeImage(newValue);
    });
  };
})();
