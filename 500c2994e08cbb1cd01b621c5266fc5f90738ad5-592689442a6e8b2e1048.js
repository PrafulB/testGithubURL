(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+Ivx":function(t,e,n){var r=n("I0Ir"),o=n("gpZl");t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},"/+ON":function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},"0fmR":function(t,e){var n=Array.isArray;t.exports=n},"1F0c":function(t,e,n){var r=n("Vpm3");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},"1Ig5":function(t,e,n){var r=n("fGZb");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},"1ZqO":function(t,e,n){var r=n("fGZb");t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},"1rdN":function(t,e){t.exports=function(){this.__data__=[],this.size=0}},"7DSV":function(t,e,n){var r=n("Bnr9"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},"7SqT":function(t,e,n){var r=n("y9gO"),o=n("Ig+8");t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},"7mwG":function(t,e,n){var r=n("qMG4"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},Bnr9:function(t,e,n){var r=n("+Ivx")(Object,"create");t.exports=r},CyyX:function(t,e,n){var r=n("Bnr9");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},D4iD:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},DLsW:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},DRYn:function(t,e,n){var r=n("oLW+");t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},F3gd:function(t,e,n){var r=n("Vpm3");t.exports=function(t){return r(this.__data__,t)>-1}},FQjp:function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},FXU7:function(t,e,n){var r=n("Bnr9"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},I0Ir:function(t,e,n){var r=n("7SqT"),o=n("IjVc"),a=n("Ig+8"),i=n("FQjp"),c=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,f=s.toString,l=u.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?p:c).test(i(t))}},IUPh:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},"Ig+8":function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},IjVc:function(t,e,n){var r,o=n("uk3S"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},IzE0:function(t,e,n){var r=n("ZFOA"),o=n("Na5S");t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},MCcO:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},NMgm:function(t,e,n){var r=n("IzE0");t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},Na5S:function(t,e,n){var r=n("yS5o");t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},Ncgn:function(t,e,n){var r=n("1rdN"),o=n("WdpZ"),a=n("1F0c"),i=n("F3gd"),c=n("XWGM");function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},NhIF:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},Vpm3:function(t,e,n){var r=n("DLsW");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},WAIO:function(t,e,n){var r=n("qacQ");t.exports=function(t){return null==t?"":r(t)}},WdpZ:function(t,e,n){var r=n("Vpm3"),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},XWGM:function(t,e,n){var r=n("Vpm3");t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},ZFOA:function(t,e,n){var r=n("0fmR"),o=n("febA"),a=n("iEqK"),i=n("WAIO");t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(i(t))}},aza3:function(t,e,n){var r=n("+Ivx")(n("7mwG"),"Map");t.exports=r},eNIv:function(t,e,n){"use strict";var r=n("Wbzz"),o=n("NMgm"),a=n.n(o),i=n("nNWW"),c=n.n(i),s=n("fCgX"),u=n.n(s),f="block mb-6 md:flex",l="w-full max-w-150",p="rounded-full transform transition-all duration-150 hover:scale-105",v="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20",h="text-5xl text-gray-900 font-bold leading-tight hover:text-black",d="text-gray-600",m="mt-6 uppercase tracking-wider",x="inline list-none pr-4",y="inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black";e.a=function(t){var e=t.metadata,n=void 0===e?{}:e,o=t.noBlog,i=void 0!==o&&o,s=a()(n,"author",!1),_=a()(n,"resume",!1),g=a()(n,"github",!1),b=a()(n,"linkedin",!1);return c.a.createElement("div",{className:f},c.a.createElement("div",{className:l},c.a.createElement(r.Link,{to:"/"},c.a.createElement("img",{className:p,src:u.a,alt:n.name}))),c.a.createElement("div",{className:v},c.a.createElement("h1",{className:h},c.a.createElement(r.Link,{to:"/"},n.name)),c.a.createElement("p",{className:d},n.description),c.a.createElement("ul",{className:m},s&&c.a.createElement("li",{className:x},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:y,href:"https://twitter.com/"+s},"Twitter")),g&&c.a.createElement("li",{className:x},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:y,href:g},"GitHub")),b&&c.a.createElement("li",{className:x},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:y,href:b},"LinkedIn")),_&&c.a.createElement("li",{className:x},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:y,href:_},"CV")),!i&&c.a.createElement("li",{className:x},c.a.createElement(r.Link,{className:y,to:"/blog"},"Blog")))))}},exHC:function(t,e,n){var r=n("7mwG").Symbol;t.exports=r},fCgX:function(t,e,n){t.exports=n.p+"static/profile-b6edf90b8a2a39897f639b8a177474c9.jpg"},fGZb:function(t,e,n){var r=n("NhIF");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},febA:function(t,e,n){var r=n("0fmR"),o=n("yS5o"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(i.test(t)||!a.test(t)||null!=e&&t in Object(e))}},g9DQ:function(t,e,n){var r=n("CyyX"),o=n("IUPh"),a=n("7DSV"),i=n("FXU7"),c=n("osmd");function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},gpZl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},hZgT:function(t,e,n){var r=n("rwJg"),o=n("1Ig5"),a=n("v0Ke"),i=n("iRXS"),c=n("1ZqO");function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},iEqK:function(t,e,n){var r=n("DRYn"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=i},iRXS:function(t,e,n){var r=n("fGZb");t.exports=function(t){return r(this,t).has(t)}},"oLW+":function(t,e,n){var r=n("hZgT");function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},osmd:function(t,e,n){var r=n("Bnr9");t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},qMG4:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("ysdO"))},qacQ:function(t,e,n){var r=n("exHC"),o=n("MCcO"),a=n("0fmR"),i=n("yS5o"),c=r?r.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},rwJg:function(t,e,n){var r=n("g9DQ"),o=n("Ncgn"),a=n("aza3");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},sfV8:function(t,e,n){var r=n("exHC"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(s){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},uk3S:function(t,e,n){var r=n("7mwG")["__core-js_shared__"];t.exports=r},v0Ke:function(t,e,n){var r=n("fGZb");t.exports=function(t){return r(this,t).get(t)}},y9gO:function(t,e,n){var r=n("exHC"),o=n("sfV8"),a=n("/+ON"),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},yS5o:function(t,e,n){var r=n("y9gO"),o=n("D4iD");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}}}]);
//# sourceMappingURL=500c2994e08cbb1cd01b621c5266fc5f90738ad5-592689442a6e8b2e1048.js.map