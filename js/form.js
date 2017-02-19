'use strict';

(function () {
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
})();

(function () {
  var SCALE_STEP = 25;
  var SCALE_INIT_VALUE = '100%';

  var resizeImage = function (percent) {
    var controlsValueScale = percent * 0.01;
    window.imagePreview.style.transform = 'scale(' + controlsValueScale + ')';
  };

  window.createScale(window.controlsForm, SCALE_STEP, SCALE_INIT_VALUE, resizeImage);

})();

