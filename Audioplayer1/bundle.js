!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="public",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});new(n(1).AudioPlayer)(".audioPlayer",[{link:"Anbae Peranbae-Isaimini.Audio.mp3",fileName:"Anbae-Peranbe"},{link:"Vaathi-Coming-MassTamilan.io.mp3",fileName:"Vaathi Coming"},{link:"Chill Bro-Masstamilan.In.mp3",fileName:"Chill Bro"},{link:"K-391 & Alan Walker - Ignite (feat. Julie Bergan & Seungri).mp3",fileName:"Ignite"},{link:"Alan Walker, Sabrina Carpenter  (DownloadMaster.cc).mp3",fileName:"on my way"},{link:"Alan Walker - The Spectre.mp3",fileName:"The Spectre"},{link:"Alan Walker - Faded (DownloadMaster.cc).mp3",fileName:"Faded"},{link:"Alan Walker - Darkside (feat. Au Ra and Tomine Harket).mp3",fileName:"Darkside"},{link:"Alan Walker - Alone.mp3",fileName:"Alone"}])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AudioPlayer=void 0;var r=function(){function e(e,t){void 0===e&&(e=".audioPlayer"),void 0===t&&(t=[]),this.playerElem=document.querySelector(e),this.audio=t,this.currentPlay=null,this.formPlayerElements(),this.audioContent=null}return e.prototype.formPlayerElements=function(){this.audioElement=document.createElement("audio");var e=document.createElement("div");e.classList.add("playlist"),this.playerElem.appendChild(this.audioElement),this.playerElem.appendChild(e),this.formPlayListElements(e)},e.prototype.formPlayListElements=function(e){var t=this;this.audio.forEach((function(n){var r=document.createElement("a");r.href=n.link,r.innerHTML='<i class="fa fa-play"></i>'+n.fileName,t.eventListener(r),e.appendChild(r)}))},e.prototype.eventListener=function(e){var t=this;e.addEventListener("click",(function(n){n.preventDefault(),t.audioContent;var r=e.getAttribute("href")==(t.currentPlay&&t.currentPlay.getAttribute("href"));r&&!t.audioElement.paused?(t.Play(t.currentPlay),t.audioElement.pause()):r&&t.audioElement.paused?(t.Pause(t.currentPlay),t.audioElement.play()):(t.currentPlay&&t.Play(t.currentPlay),t.currentPlay=e,t.Pause(t.currentPlay),t.audioElement.src=t.currentPlay.getAttribute("href"),t.audioElement.play())}))},e.prototype.Pause=function(e){var t=e.querySelector("i");t.classList.add("fa-pause"),t.classList.remove("fa-play")},e.prototype.Play=function(e){var t=e.querySelector("i");t.classList.remove("fa-pause"),t.classList.add("fa-play")},e}();t.AudioPlayer=r}]);
