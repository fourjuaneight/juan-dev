!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var r,o,a;function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,r=t&&"classList"in document.createElement("p"),o={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null},a=function(t,e){return t.getAttribute("data-"+e)},c=function(t,e,n){var r="data-"+e;null!==n?t.setAttribute(r,n):t.removeAttribute(r)},s=function(t){return"true"===a(t,"was-processed")},l=function(t,e){return c(t,"ll-timeout",e)},u=function(t){return a(t,"ll-timeout")},f=function(t,e){var n,r=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)},d=function(t,e){t&&t(e)},_=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish)},v=function(t){for(var e,n=[],r=0;e=t.children[r];r+=1)"SOURCE"===e.tagName&&n.push(e);return n},b=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){b(t,"sizes",a(t,e.data_sizes)),b(t,"srcset",a(t,e.data_srcset)),b(t,"src",a(t,e.data_src))},h={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&v(n).forEach(function(t){g(t,e)}),g(t,e)},IFRAME:function(t,e){b(t,"src",a(t,e.data_src))},VIDEO:function(t,e){v(t).forEach(function(t){b(t,"src",a(t,e.data_src))}),b(t,"src",a(t,e.data_src)),t.load()}},p=function(t,e){r?t.classList.add(e):t.className+=(t.className?" ":"")+e},m=function(t,e,n){t.addEventListener(e,n)},y=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)},E=function(t,e,n){var o=n._settings,a=e?o.class_loaded:o.class_error,i=e?o.callback_loaded:o.callback_error,c=t.target;!function(t,e){r?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}(c,o.class_loading),p(c,a),d(i,c),_(n,-1)},k=["IMG","IFRAME","VIDEO"],I=function(t,e){var n=e._observer;x(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},O=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e,n){var r=e._settings;!n&&s(t)||(k.indexOf(t.tagName)>-1&&(function(t,e){var n=function n(o){E(o,!0,e),w(t,n,r)},r=function r(o){E(o,!1,e),w(t,n,r)};!function(t,e,n){m(t,"load",e),m(t,"loadeddata",e),m(t,"error",n)}(t,n,r)}(t,e),p(t,r.class_loading)),function(t,e){var n,r,o=e._settings,i=t.tagName,c=h[i];if(c)return c(t,o),_(e,1),void(e._elements=(n=e._elements,r=t,n.filter(function(t){return t!==r})));!function(t,e){var n=a(t,e.data_src),r=a(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),r&&(t.style.backgroundImage=r)}(t,o)}(t,e),function(t){c(t,"was-processed","true")}(t),d(r.callback_reveal,t),d(r.callback_set,t))},A=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e){var n=e._settings;d(n.callback_enter,t),n.load_delay?function(t,e){var n=e._settings.load_delay,r=u(t);r||(r=setTimeout(function(){I(t,e),O(t)},n),l(t,r))}(t,e):I(t,e)}(e.target,t):function(t,e){var n=e._settings;d(n.callback_exit,t),n.load_delay&&O(t)}(e.target,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},S=function(t,e){this._settings=function(t){return i({},o,t)}(t),this._loadingCount=0,A(this),this.update(e)};return S.prototype={update:function(t){var n=this,r=this._settings,o=t||r.container.querySelectorAll(r.elements_selector);this._elements=Array.prototype.slice.call(o).filter(function(t){return!s(t)}),!e&&this._observer?this._elements.forEach(function(t){n._observer.observe(t)}):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){x(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){I(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,r=0;n=e[r];r+=1)f(t,n);else f(t,e)}(S,window.lazyLoadOptions),S},"object"===c(e)&&void 0!==t?t.exports=a():void 0===(o="function"==typeof(r=a)?r.call(e,n,e,t):r)||(t.exports=o)},function(t,e,n){n(2),t.exports=n(3)},function(t,e,n){"use strict";n.r(e);var r=n(0);new(n.n(r).a)({class_error:"error",class_loading:"loading",elements_selector:".lazy",threshold:500})},function(t,e){document.querySelectorAll("a.header__link--nav").forEach(function(t){var e=t.getAttribute("data-target");t.addEventListener("click",function(){t.onclick=function(t){var e=function(t){return Math.floor(t.getBoundingClientRect().top)},n=document.getElementById(t);if(n){var r=e(n);window.scrollBy({behavior:"smooth",left:0,top:r});var o=setInterval(function(){var t=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===e(n)||t)&&(n.tabIndex="-1",n.focus(),clearInterval(o))},100);window.history.pushState("","","#".concat(t))}}(e)}),t.removeAttribute("href")})}]);