MediaScape BBC Radio Discovery Extensions
===

This Chrome Extension looks for "Now Playing" links on BBC Radio sites and replace with mediascape attributes, allowing you to pay the streams on a mediascape device.

For detailed installation of all components see [discovery-audio-stream-controller](https://github.com/mediascape/discovery-audio-stream-controller/blob/master/INSTALL.md).

Web page authors can indicate that they have playable streams by adding the `mediascape-playable-stream` attribute to a DOM element within their pages. When clicked, that DOM element will display a list of available devices on the local network. Selecting a device from the list will start the stream playing on the remote device.
