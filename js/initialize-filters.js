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
      if (event.target.type === 'radio') {
        if (typeof callback === 'function') {
          callback(event.target.value);
        }
      }
    });

    uploadFilterControls.addEventListener('keydown', function (event) {
      if (window.utils.isEnterKey(event)) {
        if (event.target.tagName === 'LABEL') {
          event.target.control.checked = true;
          if (typeof callback === 'function') {
            callback(event.target.control.value);
          }
        }
      }
    });
  };

  window.initializeFilters(setChosenFilter);
})();

