(function (exports) {  
  'use strict';

  exports.domUtils = {
    preventFiring: function preventFiring(evt) {
      evt.preventDefault();
      evt.stopPropagation();
    }    
  };

})(window.mediascape = window.mediascape || {})