'use strict';

var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadFormCancel = window.uploadOverlay.querySelector('.upload-form-cancel');

var showForm = function (elementHide, elementShow) {
  elementHide.classList.add('invisible');
  elementShow.classList.remove('invisible');
};

var showOverlay = function () {
  showForm(uploadSelectImage, window.uploadOverlay);
  document.addEventListener('keydown', function (event) {
    if (window.isEscapeKey(event)) {
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

window.createScale(window.controlsForm, 25, '100%');


