'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadFile = uploadSelectImage.querySelector('#upload-file');
var uploadFormCancel = uploadOverlay.querySelector('.upload-form-cancel');
var uploadFilterControls = uploadOverlay.querySelector('.upload-filter-controls');

var ESC_KEY_CODE = 27;

var showSelectImage = function () {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
};

var showOverlay = function () {
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === ESC_KEY_CODE) {
      uploadOverlay.classList.add('invisible');
      uploadSelectImage.classList.remove('invisible');
    }
  });
};

showSelectImage();

uploadFile.addEventListener('change', function () {
  showOverlay();
});

uploadFormCancel.addEventListener('click', function () {
  showSelectImage();
});


var filterImagePreview = uploadOverlay.querySelector('.filter-image-preview');

uploadFilterControls.addEventListener('change', function (event) {
  var imagePreviewClass = '.filter-image-preview';
  var filterName = 'filter-' + event.target.value;
  filterImagePreview.className = imagePreviewClass + ' ' + filterName;
});


var buttonImageSmaller = uploadOverlay.querySelector('.upload-resize-controls-button-dec');
var buttonImageBigger = uploadOverlay.querySelector('.upload-resize-controls-button-inc');
var controlsValue = uploadOverlay.querySelector('.upload-resize-controls-value');
var imagePreview = uploadOverlay.querySelector('.filter-image-preview');

var CONTROLS_STEP = 25;
var MIN_VALUE = 25;
var MAX_VALUE = 100;

var resizeImage = function (percent) {
  var controlsValueScale = percent * 0.01;
  imagePreview.style.transform = 'scale(' + controlsValueScale + ')';
};

var changePreviewValue = function (percent) {
  var controlsValueNew = percent + '%';
  controlsValue.value = controlsValueNew;
};

controlsValue.value = '100%';

var percentStringToInt = function (string) {
  return parseInt(string.substring(0, string.length - 1), 10);
};

buttonImageSmaller.addEventListener('click', function () {
  var controlsValueNum = Math.max(percentStringToInt(controlsValue.value) - CONTROLS_STEP, MIN_VALUE);
  changePreviewValue(controlsValueNum);
  resizeImage(controlsValueNum);
});

buttonImageBigger.addEventListener('click', function () {
  var controlsValueNum = Math.min(percentStringToInt(controlsValue.value) + CONTROLS_STEP, MAX_VALUE);
  changePreviewValue(controlsValueNum);
  resizeImage(controlsValueNum);
});
