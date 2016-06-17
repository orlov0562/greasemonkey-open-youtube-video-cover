// ==UserScript==
// @name        youtube.com cover image
// @namespace   youtube.com
// @include     https://www.youtube.com/watch?v=*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

$(function(){
    $("<button/>", {
      class: 'yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup pause-resume-autoplay action-panel-trigger action-panel-trigger-share   yt-uix-tooltip yt-uix-button-toggled  ',
      html: '<span class="yt-uix-button-content">Cover image</span>',
    }).click(function(){
      var params = {};
      if (location.search) {
          var parts = location.search.substring(1).split('&');
          for (var i = 0; i < parts.length; i++) {
              var nv = parts[i].split('=');
              if (!nv[0]) continue;
              params[nv[0]] = nv[1] || true;
          }
      }    
      window.open("http://img.youtube.com/vi/"+params.v+"/maxresdefault.jpg", "_blank");
      return false;
    }).appendTo("#watch8-secondary-actions");
});
