'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadFormCancel = uploadOverlay.querySelector('.upload-form-cancel');
var uploadFilterControls = uploadOverlay.querySelector('.upload-filter-controls');

var ESC_KEY_CODE = 27;

var showForm = function (elementHide, elementShow) {
  elementHide.classList.add('invisible');
  elementShow.classList.remove('invisible');
};

var showOverlay = function () {
  showForm(uploadSelectImage, uploadOverlay);
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === ESC_KEY_CODE) {
      showForm(uploadOverlay, uploadSelectImage);
    }
  });
};

showForm(uploadOverlay, uploadSelectImage);

uploadFile.addEventListener('change', function () {
  showOverlay();
});

uploadFormCancel.addEventListener('click', function () {
  showForm(uploadOverlay, uploadSelectImage);
});


uploadFilterControls.addEventListener('change', window.initializeFilters);
uploadFilterControls.addEventListener('keydown', window.initializeFilters);

window.controlsValue.value = '100%';
window.createScale(window.buttonImageSmaller, window.CONTROLS_STEP, window.controlsValue.value);
window.createScale(window.buttonImageBigger, window.CONTROLS_STEP, window.controlsValue.value);

