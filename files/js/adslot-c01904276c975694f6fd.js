(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1iyJ":function(e,n,t){"use strict";t.r(n);t("eDyd")},3:function(e,n,t){e.exports=t("1iyJ")},eDyd:function(e,n){!function(){"use strict";function e(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=!(5<arguments.length&&void 0!==arguments[5])||arguments[5];if(!e||1!==e.nodeType)return!1;var d=e.getBoundingClientRect(),r=d.top-n,s=d.left,l=d.bottom,c=d.right,u=0,p=0,g=window.innerHeight,f=window.innerWidth;return a?u+o*i<=l&&p+t*i<=c&&r<=g-o*i&&s<=f-t*i:u<=r&&l<=g}function n(e){var n=window.location.href,t=e.replace(/[[]]/g,"\\$&"),o=new RegExp("[?&]".concat(t,"(=([^&#]*)|&|#|$)")).exec(n);return o&&o[2]?decodeURIComponent(o[2].replace(/\+/g,"")):""}function t(e,n,t){var o="".concat(e,"-").concat(n);try{performance.mark(o),performance.measure(e,t,o);var i=performance.getEntriesByName(e).pop();return i?Math.round(i.duration):0}catch(e){return 0}}function o(){var e=document.referrer||"",n=/([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/;return n.test(e)||n.test(window.location.href)}function i(e){var n=document.cookie.match(new RegExp("".concat(e,"=([^;]+)")));return n?n[1]:""}var a=5,d="f",r="r",s="n",l="c",c="a",u="s";function p(){return i("nyt-purr")[a]||""}function g(){return p()===u}function f(){return p()===c}(function(){var a,c,u=window.AdSlot4||{},v=window.performance&&window.performance.timing&&performance.timing.responseStart,w={},m=[],h=[],b=!1,y=!1,A=!0,E=!1,S=!1,z=p()===l,k=!1;if(u.init)return u;function O(e){e&&v&&e.setTargeting("request_time",(Date.now()-v).toString())}function L(e,n){window.googletag.cmd.push((function(){O(n),window.googletag.display(e)}))}function P(e,n,t){return window.googletag.defineSlot(e,n,t)}function T(e,n){var t=window.googletag;t.cmd.push((function(){e&&e.forEach((function(e){O(e)})),e&&n?t.pubads().refresh(e,n):e?t.pubads().refresh(e):n?t.pubads().refresh(null,n):t.pubads().refresh()}))}function j(e){var n=e.displayed,o=e.id,i=e.slot;u.events.publish({name:"AdCalled",value:{id:o,timeCalled:t(o,"timeCalled","responseStart")},scope:o}),b&&n?(T([i],y?null:{changeCorrelator:!1}),y=!1):(L(o,i),w[o].displayed=!0)}function R(){h=h.filter((function(n){var t=e(n.AdSlotElement,A?u.props.offset:0,0,0,0,A);return t&&j(n),!t}))}function C(e){var n=e.AdSlotElement,t={root:null,rootMargin:"".concat(u.props.offset,"px"),threshold:0},o=new IntersectionObserver((function(t,o){t[0].isIntersecting&&(j(e),o.unobserve(n))}),t);return o.observe(n),o}function I(){window.IntersectionObserver?(E=!0,window.IntersectionObserver.prototype.POLL_INTERVAL=1e3):document.addEventListener("scroll",function(e){var n=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1e3,o=null;return function(){for(var i=arguments.length,a=new Array(i),d=0;d<i;d++)a[d]=arguments[d];null===o&&(o=setTimeout((function(){e.apply(n,a),o=null}),t))}}(R,1e3))}function x(e){e.displayed||(E&&(e.observer=C(e)),h.push(e)),w[e.id]=e}function D(e){if(e.data.exclusive&&e.data.div){var n,t=e.data.div;switch(e.data.type){case"only-child":(i=(o={empty:(a=t,d=[],Object.keys(w).forEach((function(e){a!==e&&d.push(w[e])})),d)})&&o.empty||h).length&&i.forEach((function(e){e.observer&&e.observer.unobserve(e.AdSlotElement),u.events.publish({name:"AdEmpty",value:{type:e.id},scope:e.id})})),h=[],z=!0;break;case"family-plan":void 0!==(n=w[t]&&w[t].slot&&(w[t].slot.getResponseInformation()||{}).lineItemId)&&u.updateAdReq({adv:n,excl:"family"});break;case"blank":u.events.publish({name:"AdEmpty",value:{type:t},scope:e.data.div})}}var o,i,a,d}if(u.events=(a={},c={},{publish:function e(n){var t=n.name,o=void 0===t?"":t,i=n.value,d=void 0===i?{}:i,r=n.scope,s=void 0===r?"page":r;"all"!==s&&e({name:o,value:d,scope:"all"}),a[o]||(a[o]={}),a[o][s]||(a[o][s]=[]),a[o][s].push(d),c[o]&&c[o][s]&&c[o][s].forEach((function(e){e(d)}))},subscribe:function(e){var n=e.name,t=void 0===n?"":n,o=e.callback,i=void 0===o?function(){}:o,d=e.scope,r=void 0===d?"page":d;c[t]||(c[t]={}),c[t][r]||(c[t][r]=[]);var s=c[t][r].push(i)-1;return a[t]&&a[t][r]&&a[t][r].length&&a[t][r].forEach((function(e){i(e)})),{remove:function(){return c[t][r].splice(s,1)}}},unsubscribeToAll:function(e){Object.keys(c).forEach((function(n){c[n]&&c[n][e]&&delete c[n][e]})),Object.keys(a).forEach((function(n){a[n]&&a[n][e]&&delete a[n][e]}))}}),u.initializeAd=function(n,i){if(u.props){var a=u.props,d=a.adUnitPath,r=a.sizeMapping,s=a.hideTopAd,l=i.id,c=i.position,p=i.sizeKey,v=i.lazyLoad,w=i.truePosition,h=p||c,b=h in r?r[h]:r.default;if(("top"!==c||!s)&&!m.includes(l)&&l&&d&&b&&n&&n.classList&&!n.classList.contains("placed-ad"))if(f()||o()||g())u.events.publish({name:"AdEmpty",value:{type:"AdsDisabled"}});else if(z)u.events.publish({name:"AdEmpty",value:{type:l},scope:l});else{var y=window.googletag;y.cmd.push((function(){var o;if("undefined"!=typeof window&&window.document&&window.document.createElement&&window.self!==window.top){var i=window.outerWidth,a=b.reduce((function(e,n){var t=Number.isInteger(n[0])?n[0]:null,o=e.prevVp;return t<i&&o<t&&(e.prevVp=t,e.sizes=n[1]),e}),{prevVp:-1,sizes:[]});o=P(d,a.sizes,l)}else{o=P(d,[],l);var r=y.sizeMapping();b.forEach((function(e){r.addSize([e[0],0],e[1])})),o.defineSizeMapping(r.build())}var s=w||c;o.setTargeting("div",l),o.setTargeting("pos",s),o.setCollapseEmptyDiv(!0),o.addService(y.pubads());var p={id:l,slot:o,AdSlotElement:n,sizes:b};if(u.events.publish({name:"AdDefined",value:{id:l,sizes:b,truePosition:w,timeDefined:t(l,"timeDefined","responseStart"),slot:o},scope:l}),k)return L(l,o),p.displayed=!0,void x(p);v&&!e(n,0,0,0,0,A)||(u.events.publish({name:"AdCalled",value:{id:l,timeCalled:t(l,"timeCalled","responseStart")},scope:l}),L(l,o),p.displayed=!0),x(p)}))}}else u.events.subscribe({name:"AdSlotReady",callback:function(){return u.initializeAd(n,i)}})},u.fillPlacements=function(){var e=document.querySelectorAll(".place-ad:not(.placed-ad)");if(e)for(var n=0;n<e.length;n++){var t=e[n],o=t.id,i=t.dataset,a=i.position,d=i.sizeKey,r="false"!==i.lazyLoad;o&&a&&(u.initializeAd(t,{id:o,position:a,sizeKey:d,lazyLoad:r}),t.classList.add("placed-ad"))}},u.updateAdReq=function(e,n){window.googletag.cmd.push((function(){var t=u.props&&u.props.adTargeting||{};n||Object.keys(e).forEach((function(n){t[n]=e[n],window.googletag.pubads().setTargeting(n,"".concat(e[n]))})),w[n]&&Object.keys(e).forEach((function(t){w[n].slot.setTargeting(t,"".concat(e[t]))}))}))},u.getAdReq=function(){return u.props&&u.props.adTargeting||{}},u.refreshAds=function(){A=!(y=b=!0),h=[],m=[],E?Object.keys(w).forEach((function(e){var n=w[e],t=n.observer,o=n.displayed,i=n.AdSlotElement;h.push(n),o&&(t&&t.unobserve(i),n.observer=C(n))})):(Object.keys(w).forEach((function(e){h.push(w[e])})),k?h.forEach((function(e){j(e)})):R()),setTimeout((function(){A=!0}),2e3)},u.removeAdPlacement=function(e){window.googletag.cmd.push((function(){var n,t=window.googletag.pubads().getSlots().filter((function(n){return n.getSlotElementId()===e}));window.googletag.destroySlots(t),(n=e)&&m.push(n)}))},u.init=function(e){var a=e||{},l=a.adTargeting,c=void 0===l?{}:l,v=a.adUnitPath,w=void 0===v?"":v,m=a.offset,h=void 0===m?400:m,b=a.haltDFP,y=void 0!==b&&b,A=a.lockdownAds,E=void 0!==A&&A,z=a.hideTopAd,O=void 0!==z&&z,L=a.sizeMapping,P=void 0===L?{}:L,T=a.lazyApi,j=void 0===T?{}:T,R=y||g()||f();if(!S){c.vp=window.matchMedia("(min-width: 970px)").matches?"large":window.matchMedia("(min-width: 728px)").matches?"medium":"small",c.aid=i("nyt-a")||null,p()===d&&(c.purr="full");var C=n("ad-keywords");C&&(c.adv=C);var x=n("debugads");x&&(c.debugAdsQP=x),u.props={adTargeting:c,adUnitPath:w,offset:h,sizeMapping:P,hideTopAd:O,lazyApi:j},window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push((function(){c.gdprUser&&(window.googletag.pubads().setRequestNonPersonalizedAds(1),c.purr="npa"),p()===s&&(window.googletag.pubads().setRequestNonPersonalizedAds(1),c.purr="npa"),p()===r&&(window.googletag.pubads().setPrivacySettings({restrictDataProcessing:!0}),c.purr="rdp");var e,n,o,i=(e=c,n=window.googletag.pubads().getTargetingKeys(),Object.keys(e).filter((function(e){return n.indexOf(e)<0})).reduce((function(n,t){return n[t]=e[t],n}),{}));Object.keys(i).forEach((function(e){window.googletag.pubads().setTargeting(e,i[e])})),j.fetch&&j.render?(k=!0,o=j,window.googletag.cmd.push((function(){window.googletag.pubads().enableLazyLoad({fetchMarginPercent:o.fetch,renderMarginPercent:o.render}),window.googletag.enableServices()}))):(window.googletag.enableServices(),I()),u.fillPlacements(),window.googletag.pubads().addEventListener("slotRenderEnded",(function(e){var n=e.slot.getSlotElementId();e.timeRendered=t(n,"timeRendered","".concat(n,"-timeCalled")),e.isEmpty?u.events.publish({name:"AdEmpty",value:{type:n},scope:n}):u.events.publish({name:"AdRendered",value:e,scope:n})})),window.googletag.pubads().addEventListener("slotOnload",(function(e){var n=e.slot.getSlotElementId();e.timeLoaded=t(n,"timeLoaded","".concat(n,"-timeCalled")),u.events.publish({name:"AdLoaded",value:e,scope:n})})),window.googletag.pubads().addEventListener("impressionViewable",(function(e){var n=e.slot.getSlotElementId();e.timeViewed=t(n,"timeViewed","".concat(n,"-timeCalled")),u.events.publish({name:"AdViewable",value:e,scope:n})}))})),E?window.googletag.cmd.push((function(){window.googletag.pubads().setForceSafeFrame(!0)})):window.addEventListener("message",(function(e){(e.origin.match(/tpc\.googlesyndication\.com$/)||e.origin===window.location.origin)&&D(e)}),!1),function(e){if(o()||e)u.events.publish({name:"AdEmpty",value:{type:"AdsDisabled"}});else{var n,t,i,a,d=function(){var e=window.googletag;e?e.cmd.push((function(){e._loadStarted_?window.advBidxc&&!window.advBidxc.isAdServerLoaded&&(window.advBidxc.isAdServerLoaded=!0):u.events.publish({name:"AdEmpty",value:{type:"AdBlockOn"}})})):u.events.publish({name:"AdEmpty",value:{type:"GptError"}})};window.googletag&&window.googletag.apiReady?d():("https://securepubads.g.doubleclick.net/tag/js/gpt.js",n=d,t=function(){u.events.publish({name:"AdEmpty",value:{type:"GptError"}})},i=document.getElementsByTagName("head")[0],a=document.createElement("script"),n&&(a.onload=n),t&&(a.onerror=t),a.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",a.async=!0,i.appendChild(a))}}(R),u.events.publish({name:"AdSlotReady"}),S=!0}},u.cmd)for(;u.cmd.length;)u.cmd.shift()();u.cmd={length:0,push:function(e){e()}},window.AdSlot4=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){var o,i,a;o=e,a=t[i=n],i in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a}))}return e}({},u,{refresh:T})})()}()}},[[3,49]]]);
//# sourceMappingURL=adslot-c01904276c975694f6fd.js.map