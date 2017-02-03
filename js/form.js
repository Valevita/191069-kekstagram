'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadFile = document.querySelector('#upload-file');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

uploadOverlay.classList.add('invisible');
uploadSelectImage.classList.remove('invisible');

uploadFile.addEventListener('change', function () {
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
});

uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
});

var filterImagePreview = document.querySelector('.filter-image-preview');
var uploadFilter = document.querySelectorAll('input[name = "upload-filter"]');

var currentFilterName = null;
var setNewFilter = function (filterName) {
  if (currentFilterName !== null) {
    filterImagePreview.classList.remove(currentFilterName);
  }
  filterImagePreview.classList.add(filterName);
  currentFilterName = filterName;
};
for (var i = 0; i < uploadFilter.length; i++) {
  uploadFilter[i].addEventListener('change', function (event) {
    setNewFilter(event.target.id.substring(7));
  });
}

var buttonImageSmaller = document.querySelector('.upload-resize-controls-button-dec');
var buttonImageBigger = document.querySelector('.upload-resize-controls-button-inc');
var controlsValue = document.querySelector('.upload-resize-controls-value');
var imagePreview = document.querySelector('.filter-image-preview');

controlsValue.value = '100%';

buttonImageSmaller.addEventListener('click', function () {
  var controlsValueNum = parseInt(controlsValue.value.substring(0, controlsValue.value.length - 1), 10);
  controlsValueNum = controlsValueNum - 25;
  if (controlsValueNum < 25) {
    controlsValueNum = 25;
  }
  var controlsValueNew = (controlsValueNum) + '%';
  var controlsValueScale = controlsValueNum * 0.01;
  controlsValue.value = controlsValueNew;
  imagePreview.style.transform = 'scale(' + controlsValueScale + ')';
});

buttonImageBigger.addEventListener('click', function () {
  var controlsValueNum = parseInt(controlsValue.value.substring(0, controlsValue.value.length - 1), 10);
  controlsValueNum = controlsValueNum + 25;
  if (controlsValueNum > 100) {
    controlsValueNum = 100;
  }
  var controlsValueNew = (controlsValueNum) + '%';
  var controlsValueScale = controlsValueNum * 0.01;
  controlsValue.value = controlsValueNew;
  imagePreview.style.transform = 'scale(' + controlsValueScale + ')';
});
