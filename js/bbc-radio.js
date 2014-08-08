(function (exports) {  
  'use strict';
  
  var obj = {
    playableLinks: function (container) {
      return container.querySelectorAll('a[data-player-html5-stream]');
    },
    playlistUrl: function playlistUrl(el) {
      console.log('playlistUrl( %o )', el);
      return new Promise(function (resolve, reject) {
        var url = el.getAttribute('data-player-html5-stream');
        url ? resolve(url) : reject(url);
      });
    },
    extractStreamForUrl: function (url) {
      return obj.fetchPlsForUrl(url)
              .then(obj.parseStreamFromPls);
    },
    fetchPlsForUrl: function (url) {
      console.log('extractStreamForUrl( %o )', url);
      return xhr.get(url);
    },
    parseStreamFromPls: function (data) {
      return new Promise(function (resolve, reject) {
        var matches = data.match(/File[\d]=(.*)/);
        matches && matches.length > 1 ? resolve(matches[1]) : reject();
      });
    }
  }

  exports.radio = obj;

})(window.bbc = window.bbc || {})