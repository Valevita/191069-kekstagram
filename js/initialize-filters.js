'use strict';

(function () {
  var uploadFilterControls = document.querySelector('.upload-filter-controls');

  window.initializeFilters = function (callback) {

    uploadFilterControls.addEventListener('change', function (event) {
      var eventChangeTarget = event.target;

      if (eventChangeTarget.type !== 'radio') {
        return;
      }
      if (typeof callback === 'function') {
        callback(eventChangeTarget.value);
      }
    });

    uploadFilterControls.addEventListener('keydown', function (event) {
      var eventKeydownTarget = event.target;

      if (!window.utils.isEnterKey(event)) {
        return;
      }
      if (eventKeydownTarget.tagName !== 'LABEL') {
        return;
      }
      event.target.control.checked = true;
      if (typeof callback === 'function') {
        callback(eventKeydownTarget.control.value);
      }
    });
  };
})();

