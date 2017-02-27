'use strict';

(function () {
  var uploadSelectImage = document.querySelector('#upload-select-image');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var controlsForm = document.querySelector('.upload-resize-controls');
  var uploadFile = uploadSelectImage.querySelector('#upload-file');
  var uploadFormCancel = uploadOverlay.querySelector('.upload-form-cancel');
  var imagePreview = uploadOverlay.querySelector('.filter-image-preview');
  var controlsValue = controlsForm.querySelector('.upload-resize-controls-value');
  var currentFilter = 'filter-none';

  var SCALE_STEP = 25;
  var SCALE_INIT_VALUE = '100%';

  var showForm = function (elementHide, elementShow) {
    elementHide.classList.add('invisible');
    elementShow.classList.remove('invisible');
  };

  var showOverlay = function () {
    showForm(uploadSelectImage, uploadOverlay);

    document.addEventListener('keydown', function (event) {
      if (window.utils.isEscapeKey(event)) {
        showForm(uploadOverlay, uploadSelectImage);
      }
    });
  };

  var resizeImage = function (percent) {
    var controlsValueScale = percent * 0.01;

    imagePreview.style.transform = 'scale(' + controlsValueScale + ')';
  };

  var changeFilter = function (filter) {
    var filterName = 'filter-' + filter;

    imagePreview.classList.remove(currentFilter);
    imagePreview.classList.add(filterName);
    currentFilter = filterName;
  };

  var resetForm = function () {
    controlsValue.value = SCALE_INIT_VALUE;
    resizeImage(parseInt(controlsValue.value, 10));
    imagePreview.classList.remove(currentFilter);
    imagePreview.classList.add('filter-none');
  };

  showForm(uploadOverlay, uploadSelectImage);

  uploadFile.addEventListener('change', function () {
    showOverlay();
    resetForm();
  });

  uploadFormCancel.addEventListener('click', function () {
    showForm(uploadOverlay, uploadSelectImage);
  });

  window.createScale(controlsForm, SCALE_STEP, SCALE_INIT_VALUE, resizeImage);
  window.initializeFilters(changeFilter);
})();
