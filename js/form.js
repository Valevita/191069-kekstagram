'use strict';

var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadFormCancel = window.uploadOverlay.querySelector('.upload-form-cancel');

var SCALE_STEP = 25;
var SCALE_INIT_VALUE = '100%';

var showForm = function (elementHide, elementShow) {
  elementHide.classList.add('invisible');
  elementShow.classList.remove('invisible');
};

var showOverlay = function () {
  showForm(uploadSelectImage, window.uploadOverlay);
  document.addEventListener('keydown', function (event) {
    if (window.utils.isEscapeKey(event)) {
      showForm(window.uploadOverlay, uploadSelectImage);
    }
  });
};

showForm(window.uploadOverlay, uploadSelectImage);

uploadFile.addEventListener('change', function () {
  showOverlay();
});

uploadFormCancel.addEventListener('click', function () {
  showForm(window.uploadOverlay, uploadSelectImage);
});

window.initializeFilters();

window.createScale(window.controlsForm, SCALE_STEP, SCALE_INIT_VALUE);


