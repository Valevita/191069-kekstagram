'use strict';

window.imagePreview = document.querySelector('.filter-image-preview');
window.ENTER_KEY_CODE = 13;

window.setChosenFilter = function (filter) {
  var imagePreviewClass = '.filter-image-preview';
  var filterName = 'filter-' + filter;
  window.imagePreview.className = imagePreviewClass + ' ' + filterName;
};

window.initializeFilters = function (event) {
  if (event.type === 'change') {
    if (event.target.type === 'radio') {
      window.setChosenFilter(event.target.value);
    }

  } else if (event.type === 'keydown') {
    if (event.keyCode === window.ENTER_KEY_CODE) {
      if (event.target.tagName === 'LABEL') {
        event.target.control.checked = true;
        window.setChosenFilter(event.target.control.defaultValue);
      }
    }
  }
};
