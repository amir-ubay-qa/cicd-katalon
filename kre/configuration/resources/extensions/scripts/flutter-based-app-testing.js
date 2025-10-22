(function(){"use strict";function c(t){new MutationObserver(r=>{r.some(s=>!(s.type!=="childList"||s.addedNodes.length===0))&&t()}).observe(document,{childList:!0,subtree:!0})}function i(){u()&&l(document)}function l(t){if(!t)return;t.querySelectorAll("flt-semantics-placeholder").forEach(e=>{e instanceof HTMLElement&&!e.activated&&(e.activated=!0,e.click())}),o(t),t.querySelectorAll("flt-glass-pane").forEach(e=>{e instanceof HTMLElement&&a(e)})}function a(t){!t||t.activated||(t.activated=!0,l(t.shadowRoot))}function o(t){const n="flutter-override-styles";if(t.getElementById(n))return;const e=document.createElement("style");e.innerHTML=`
    flt-semantics {
      pointer-events: all !important;
    }
    flt-semantics-container {
      left: 0;
      top: 0;
    }
  `,e.id=n,(t instanceof Document?t.head:t).appendChild(e)}function u(){return!!document.querySelector("flutter-view, flt-glass-pane, flt-semantics-placeholder")}function f(){i(),c(()=>{i()})}f()})();
