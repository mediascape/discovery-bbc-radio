(function (exports) {
  'use strict';

  var domUtils = exports.domUtils,
      utils = exports.utils,
      bbcRadio = exports.bbcRadio;

  exports.ui = {
    createEventInterceptor: function createEventInterceptor(handlerFactory) {
      return function (el) {
        utils.log('Attach ', el);
        el.addEventListener('click', handlerFactory(el));
      };
    },
    createHandlerToPreventDefaultAction: function (el) {
      return function eventHandler(evt) {
        domUtils.preventFiring(evt);
      };
    },
    createHandlerForEl: function (el) {
      return function eventHandler(evt) {
        var target = traverseParentsToFindNode(evt.target, el);
        console.log('Event: Target ', target);
        if (target) {
          domUtils.preventFiring(evt);
          bbcRadio.playlistUrl(target)
                  .then(bbcRadio.extractStreamForUrl)
                  .then(utils.log);
        }
      };
    }
  };

  function traverseParentsToFindNode(node, target) {
    if ( target === node ) {
      return node;
    } else if ( node.parentNode ) {
      return traverseParentsToFindNode( node.parentNode, target );
    }
  }

})(window.bbc = window.bbc || {})
