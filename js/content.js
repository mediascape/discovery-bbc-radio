(function (ns, $container) {
  'use strict';

  // Find media player links
  var playableLinks = bbc.radio.playableLinks($container);
  console.log('Found %o playableLinks', playableLinks.length);

  // Resolve the links to playable streams
  var playableStreams = _.map(
    playableLinks, 
    resolvePlayableStreamFromEl
  ); 

  // When all streams have been found, add mediascape attribute
  // to DOM
  Promise.all(playableStreams)
         .then(function (streams) {
            _.forEach(streams, addMediaScapeDataAttributeForStream)
         });

  // Prevent default action when button is clicked
  _.forEach(
    playableLinks, 
    bbc.ui.createEventInterceptor(bbc.ui.createHandlerToPreventDefaultAction)
  );

  /*
    Given an element with data-html5-stream attribute
    turns that into a playable stream url.
    Resolves: { el: DOMElement, url: String }
    Rejects:  null
  */
  function resolvePlayableStreamFromEl(el) {
    return bbc.radio.playlistUrl(el)
                    .then(bbc.radio.extractStreamForUrl)
                    .then(function (url) {
                       return { el: el, url: url };
                    });
  }

  /*
    Adds a mediascape attribute to the element which 
    tells the mediascape discovery extension to provide
    a UI allowing selection of the stream
  */
  function addMediaScapeDataAttributeForStream(data) {
    if (data.el && data.url) {
      data.el.setAttribute('data-mediscape-playable-stream', data.url);
    }
  }

})(window, document.querySelector('body'));