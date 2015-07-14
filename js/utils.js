(function (exports) {
  'use strict';

  exports.utils = {
    log: function () {
      console.log(arguments);
    },
    error: function () {
      console.error(arguments);
    }
  };

})(window.bbc = window.bbc || {})
