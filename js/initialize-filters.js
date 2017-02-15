'use strict';

window.uploadOverlay = document.querySelector('.upload-overlay');

window.initializeFilters = (function () {
  var imagePreview = window.uploadOverlay.querySelector('.filter-image-preview');
  var uploadFilterControls = window.uploadOverlay.querySelector('.upload-filter-controls');

  var setChosenFilter = function (filter) {
    var imagePreviewClass = '.filter-image-preview';
    var filterName = 'filter-' + filter;
    imagePreview.className = imagePreviewClass + ' ' + filterName;
  };

  uploadFilterControls.addEventListener('change', function (event) {
    if (event.target.type === 'radio') {
      setChosenFilter(event.target.value);
    }
  });

  uploadFilterControls.addEventListener('keydown', function (event) {
    if (window.utils.isEnterKey(event)) {
      if (event.target.tagName === 'LABEL') {
        event.target.control.checked = true;
        setChosenFilter(event.target.control.defaultValue);
      }
    }
  });
})();

