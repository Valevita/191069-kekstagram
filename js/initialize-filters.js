'use strict';

(function () {
  window.uploadOverlay = document.querySelector('.upload-overlay');
  window.imagePreview = window.uploadOverlay.querySelector('.filter-image-preview');

  var setChosenFilter = function (filter) {
    var imagePreviewClass = 'filter-image-preview';
    var filterName = 'filter-' + filter;
    window.imagePreview.className = imagePreviewClass + ' ' + filterName;
  };

  window.initializeFilters = function (callback) {
    var uploadFilterControls = window.uploadOverlay.querySelector('.upload-filter-controls');

    uploadFilterControls.addEventListener('change', function (event) {
      var eventChangeTarget = event.target;
      if (eventChangeTarget.type === 'radio') {
        if (typeof callback === 'function') {
          callback(eventChangeTarget.value);
        }
      }
    });

    uploadFilterControls.addEventListener('keydown', function (event) {
      var eventKeydownTarget = event.target;
      if (window.utils.isEnterKey(event)) {
        if (eventKeydownTarget.tagName === 'LABEL') {
          event.target.control.checked = true;
          if (typeof callback === 'function') {
            callback(eventKeydownTarget.control.value);
          }
        }
      }
    });
  };

  window.initializeFilters(setChosenFilter);
})();

