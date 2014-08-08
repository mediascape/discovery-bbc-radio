(function (ns, $container) {
  'use strict';

  // Find media player links
  var playableLinks = mediascape.bbcRadio.playableLinks($container);
  console.log('Found %o playableLinks', playableLinks.length);

  // Attach event handler
  _.forEach(
    playableLinks, 
    mediascape.ui.createEventInterceptor( mediascape.ui.createHandlerForEl )
  );

})(window, document.querySelector('body'));