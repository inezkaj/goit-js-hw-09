const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let r=null;e.addEventListener("click",(e=>{r=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.querySelector("body").style.backgroundColor=e}),1e3)})),t.addEventListener("click",(e=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.16e320e1.js.map
