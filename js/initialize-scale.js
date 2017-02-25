'use strict';

(function () {
  window.controlsForm = document.querySelector('.upload-resize-controls');
  window.controlsValue = window.controlsForm.querySelector('.upload-resize-controls-value');
  window.percentStringToInt = function (string) {
    return parseInt(string.substring(0, string.length - 1), 10);
  };

  window.createScale = (function () {
    var MIN_VALUE = 25;
    var MAX_VALUE = 100;

    var changePreviewValue = function (percent) {
      var controlsValueNew = percent + '%';
      window.controlsValue.value = controlsValueNew;
    };

    return function (element, step, value, callback) {
      var newValue;
      window.controlsValue.value = value;
      element.addEventListener('click', function (event) {
        if (event.target.classList.contains('upload-resize-controls-button-dec')) {
          newValue = Math.max(window.percentStringToInt(window.controlsValue.value) - step, MIN_VALUE);
        } else if (event.target.classList.contains('upload-resize-controls-button-inc')) {
          newValue = Math.min(window.percentStringToInt(window.controlsValue.value) + step, MAX_VALUE);
        }
        changePreviewValue(newValue);
        if (typeof callback === 'function') {
          callback(newValue);
        }
      });
    };
  })();
})();
