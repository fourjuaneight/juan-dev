function asyncGeneratorStep(e,t,r,a,o,n,c){try{var i=e[n](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(a,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var n=e.apply(t,r);function c(e){asyncGeneratorStep(n,a,o,c,i,"next",e)}function i(e){asyncGeneratorStep(n,a,o,c,i,"throw",e)}c(void 0)})}}var worker=new Worker("ww.js"),size=getComputedStyle(document.body).getPropertyValue("--base"),makeNoise=function(){var e=_asyncToGenerator(function*(e){var t=document.createElement("canvas");t.width=t.height=size,t.getContext("2d").putImageData(new ImageData(e,size,size),0,0);var r=yield new Promise(function(e){return t.toBlob(e,"image/png")}),a=URL.createObjectURL(r),o=document.createElement("div");o.classList.add("noise"),o.style="background-image: url(".concat(a,")"),document.body.appendChild(o)});return function(t){return e.apply(this,arguments)}}();worker.postMessage(size),worker.onmessage=function(e){makeNoise(e.data)};var toggle=document.querySelector("#theme"),root=document.querySelector("html");toggle.addEventListener("input",function(){switch(toggle.checked){case!1:localStorage.setItem("theme","light");break;case!0:localStorage.setItem("theme","dark")}switch(root.getAttribute("data-theme")){case"dark":root.setAttribute("data-theme","light");break;case"light":root.setAttribute("data-theme","dark")}});