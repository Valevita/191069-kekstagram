'use strict';

window.uploadOverlay = document.querySelector('.upload-overlay');
window.imagePreview = window.uploadOverlay.querySelector('.filter-image-preview');
window.uploadFilterControls = window.uploadOverlay.querySelector('.upload-filter-controls');

window.setChosenFilter = function (filter) {
  var imagePreviewClass = '.filter-image-preview';
  var filterName = 'filter-' + filter;
  window.imagePreview.className = imagePreviewClass + ' ' + filterName;
};

window.initializeFilters = function () {
  window.uploadFilterControls.addEventListener('change', function (event) {
    if (event.target.type === 'radio') {
      window.setChosenFilter(event.target.value);
    }
  });
  window.uploadFilterControls.addEventListener('keydown', function (event) {
    if (window.isEnterKey(event)) {
      if (event.target.tagName === 'LABEL') {
        event.target.control.checked = true;
        window.setChosenFilter(event.target.control.defaultValue);
      }
    }
  });
};
