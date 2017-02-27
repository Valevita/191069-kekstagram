'use strict';

(function () {
  var controlsForm = document.querySelector('.upload-resize-controls');
  var controlsValue = controlsForm.querySelector('.upload-resize-controls-value');

  var changePreviewValue = function (percent) {
    var controlsValueNew = percent + '%';

    controlsValue.value = controlsValueNew;
  };

  window.createScale = (function () {
    var MIN_VALUE = 25;
    var MAX_VALUE = 100;

    return function (element, step, value, callback) {
      var newValue;

      controlsValue.value = value;

      element.addEventListener('click', function (event) {
        var eventTarget = event.target;

        if (eventTarget.classList.contains('upload-resize-controls-button-dec')) {
          newValue = Math.max(parseInt(controlsValue.value, 10) - step, MIN_VALUE);
        } else if (eventTarget.classList.contains('upload-resize-controls-button-inc')) {
          newValue = Math.min(parseInt(controlsValue.value, 10) + step, MAX_VALUE);
        }
        changePreviewValue(newValue);
        if (typeof callback === 'function') {
          callback(newValue);
        }
      });
    };
  })();
})();
