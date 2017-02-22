'use strict';

window.load = (function () {
  var xhr = new XMLHttpRequest();

  return function (url, onLoad) {
    xhr.addEventListener('load', function (event) {
      if (event.target.status >= 200 && event.target.status < 300) {
        onLoad(event.target.response);
      }
    });
    xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.send();
  };
})();
