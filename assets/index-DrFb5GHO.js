function uC(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var hC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var iM={exports:{}},qd={},rM={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=Symbol.for("react.element"),dC=Symbol.for("react.portal"),fC=Symbol.for("react.fragment"),pC=Symbol.for("react.strict_mode"),mC=Symbol.for("react.profiler"),gC=Symbol.for("react.provider"),vC=Symbol.for("react.context"),yC=Symbol.for("react.forward_ref"),xC=Symbol.for("react.suspense"),_C=Symbol.for("react.memo"),SC=Symbol.for("react.lazy"),Oy=Symbol.iterator;function MC(n){return n===null||typeof n!="object"?null:(n=Oy&&n[Oy]||n["@@iterator"],typeof n=="function"?n:null)}var sM={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oM=Object.assign,aM={};function La(n,e,t){this.props=n,this.context=e,this.refs=aM,this.updater=t||sM}La.prototype.isReactComponent={};La.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};La.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function lM(){}lM.prototype=La.prototype;function m0(n,e,t){this.props=n,this.context=e,this.refs=aM,this.updater=t||sM}var g0=m0.prototype=new lM;g0.constructor=m0;oM(g0,La.prototype);g0.isPureReactComponent=!0;var By=Array.isArray,cM=Object.prototype.hasOwnProperty,v0={current:null},uM={key:!0,ref:!0,__self:!0,__source:!0};function hM(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cM.call(e,i)&&!uM.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pc,type:n,key:s,ref:o,props:r,_owner:v0.current}}function wC(n,e){return{$$typeof:Pc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function y0(n){return typeof n=="object"&&n!==null&&n.$$typeof===Pc}function bC(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var zy=/\/+/g;function dp(n,e){return typeof n=="object"&&n!==null&&n.key!=null?bC(""+n.key):e.toString(36)}function uh(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Pc:case dC:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+dp(o,0):i,By(r)?(t="",n!=null&&(t=n.replace(zy,"$&/")+"/"),uh(r,e,t,"",function(c){return c})):r!=null&&(y0(r)&&(r=wC(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(zy,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",By(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+dp(s,a);o+=uh(s,e,t,l,r)}else if(l=MC(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+dp(s,a++),o+=uh(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Kc(n,e,t){if(n==null)return n;var i=[],r=0;return uh(n,i,"","",function(s){return e.call(t,s,r++)}),i}function TC(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var bn={current:null},hh={transition:null},EC={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:hh,ReactCurrentOwner:v0};function dM(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Kc,forEach:function(n,e,t){Kc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Kc(n,function(){e++}),e},toArray:function(n){return Kc(n,function(e){return e})||[]},only:function(n){if(!y0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Qe.Component=La;Qe.Fragment=fC;Qe.Profiler=mC;Qe.PureComponent=m0;Qe.StrictMode=pC;Qe.Suspense=xC;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EC;Qe.act=dM;Qe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=oM({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=v0.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)cM.call(e,l)&&!uM.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pc,type:n.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(n){return n={$$typeof:vC,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:gC,_context:n},n.Consumer=n};Qe.createElement=hM;Qe.createFactory=function(n){var e=hM.bind(null,n);return e.type=n,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(n){return{$$typeof:yC,render:n}};Qe.isValidElement=y0;Qe.lazy=function(n){return{$$typeof:SC,_payload:{_status:-1,_result:n},_init:TC}};Qe.memo=function(n,e){return{$$typeof:_C,type:n,compare:e===void 0?null:e}};Qe.startTransition=function(n){var e=hh.transition;hh.transition={};try{n()}finally{hh.transition=e}};Qe.unstable_act=dM;Qe.useCallback=function(n,e){return bn.current.useCallback(n,e)};Qe.useContext=function(n){return bn.current.useContext(n)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(n){return bn.current.useDeferredValue(n)};Qe.useEffect=function(n,e){return bn.current.useEffect(n,e)};Qe.useId=function(){return bn.current.useId()};Qe.useImperativeHandle=function(n,e,t){return bn.current.useImperativeHandle(n,e,t)};Qe.useInsertionEffect=function(n,e){return bn.current.useInsertionEffect(n,e)};Qe.useLayoutEffect=function(n,e){return bn.current.useLayoutEffect(n,e)};Qe.useMemo=function(n,e){return bn.current.useMemo(n,e)};Qe.useReducer=function(n,e,t){return bn.current.useReducer(n,e,t)};Qe.useRef=function(n){return bn.current.useRef(n)};Qe.useState=function(n){return bn.current.useState(n)};Qe.useSyncExternalStore=function(n,e,t){return bn.current.useSyncExternalStore(n,e,t)};Qe.useTransition=function(){return bn.current.useTransition()};Qe.version="18.3.1";rM.exports=Qe;var z=rM.exports;const fM=nM(z),AC=uC({__proto__:null,default:fM},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CC=z,RC=Symbol.for("react.element"),PC=Symbol.for("react.fragment"),IC=Object.prototype.hasOwnProperty,LC=CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NC={key:!0,ref:!0,__self:!0,__source:!0};function pM(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)IC.call(e,i)&&!NC.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:RC,type:n,key:s,ref:o,props:r,_owner:LC.current}}qd.Fragment=PC;qd.jsx=pM;qd.jsxs=pM;iM.exports=qd;var S=iM.exports,zm={},mM={exports:{}},Kn={},gM={exports:{}},vM={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,X){var Q=D.length;D.push(X);e:for(;0<Q;){var de=Q-1>>>1,Ce=D[de];if(0<r(Ce,X))D[de]=X,D[Q]=Ce,Q=de;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],Q=D.pop();if(Q!==X){D[0]=Q;e:for(var de=0,Ce=D.length,tt=Ce>>>1;de<tt;){var Z=2*(de+1)-1,ae=D[Z],Se=Z+1,ce=D[Se];if(0>r(ae,Q))Se<Ce&&0>r(ce,ae)?(D[de]=ce,D[Se]=Q,de=Se):(D[de]=ae,D[Z]=Q,de=Z);else if(Se<Ce&&0>r(ce,Q))D[de]=ce,D[Se]=Q,de=Se;else break e}}return X}function r(D,X){var Q=D.sortIndex-X.sortIndex;return Q!==0?Q:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var X=t(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=D)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(c)}}function _(D){if(x=!1,y(D),!g)if(t(l)!==null)g=!0,j(T);else{var X=t(c);X!==null&&Y(_,X.startTime-D)}}function T(D,X){g=!1,x&&(x=!1,f(C),C=-1),p=!0;var Q=d;try{for(y(X),h=t(l);h!==null&&(!(h.expirationTime>X)||D&&!L());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Ce=de(h.expirationTime<=X);X=n.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===t(l)&&i(l),y(X)}else i(l);h=t(l)}if(h!==null)var tt=!0;else{var Z=t(c);Z!==null&&Y(_,Z.startTime-X),tt=!1}return tt}finally{h=null,d=Q,p=!1}}var w=!1,A=null,C=-1,b=5,M=-1;function L(){return!(n.unstable_now()-M<b)}function O(){if(A!==null){var D=n.unstable_now();M=D;var X=!0;try{X=A(!0,D)}finally{X?B():(w=!1,A=null)}}else w=!1}var B;if(typeof v=="function")B=function(){v(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=O,B=function(){$.postMessage(null)}}else B=function(){m(O,0)};function j(D){A=D,w||(w=!0,B())}function Y(D,X){C=m(function(){D(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,j(T))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Q=d;d=X;try{return D()}finally{d=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=d;d=D;try{return X()}finally{d=Q}},n.unstable_scheduleCallback=function(D,X,Q){var de=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?de+Q:de):Q=de,D){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Q+Ce,D={id:u++,callback:X,priorityLevel:D,startTime:Q,expirationTime:Ce,sortIndex:-1},Q>de?(D.sortIndex=Q,e(c,D),t(l)===null&&D===t(c)&&(x?(f(C),C=-1):x=!0,Y(_,Q-de))):(D.sortIndex=Ce,e(l,D),g||p||(g=!0,j(T))),D},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(D){var X=d;return function(){var Q=d;d=X;try{return D.apply(this,arguments)}finally{d=Q}}}})(vM);gM.exports=vM;var DC=gM.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UC=z,Yn=DC;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yM=new Set,Wl={};function uo(n,e){va(n,e),va(n+"Capture",e)}function va(n,e){for(Wl[n]=e,n=0;n<e.length;n++)yM.add(e[n])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vm=Object.prototype.hasOwnProperty,kC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vy={},Hy={};function FC(n){return Vm.call(Hy,n)?!0:Vm.call(Vy,n)?!1:kC.test(n)?Hy[n]=!0:(Vy[n]=!0,!1)}function OC(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function BC(n,e,t,i){if(e===null||typeof e>"u"||OC(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){tn[n]=new Tn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];tn[e]=new Tn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){tn[n]=new Tn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){tn[n]=new Tn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){tn[n]=new Tn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){tn[n]=new Tn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){tn[n]=new Tn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){tn[n]=new Tn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){tn[n]=new Tn(n,5,!1,n.toLowerCase(),null,!1,!1)});var x0=/[\-:]([a-z])/g;function _0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(x0,_0);tn[e]=new Tn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(x0,_0);tn[e]=new Tn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(x0,_0);tn[e]=new Tn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){tn[n]=new Tn(n,1,!1,n.toLowerCase(),null,!1,!1)});tn.xlinkHref=new Tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){tn[n]=new Tn(n,1,!1,n.toLowerCase(),null,!0,!0)});function S0(n,e,t,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BC(e,t,r,i)&&(t=null),i||r===null?FC(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var br=UC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jc=Symbol.for("react.element"),Vo=Symbol.for("react.portal"),Ho=Symbol.for("react.fragment"),M0=Symbol.for("react.strict_mode"),Hm=Symbol.for("react.profiler"),xM=Symbol.for("react.provider"),_M=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),Gm=Symbol.for("react.suspense"),Wm=Symbol.for("react.suspense_list"),b0=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),SM=Symbol.for("react.offscreen"),Gy=Symbol.iterator;function ja(n){return n===null||typeof n!="object"?null:(n=Gy&&n[Gy]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,fp;function pl(n){if(fp===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);fp=e&&e[1]||""}return`
`+fp+n}var pp=!1;function mp(n,e){if(!n||pp)return"";pp=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{pp=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?pl(n):""}function zC(n){switch(n.tag){case 5:return pl(n.type);case 16:return pl("Lazy");case 13:return pl("Suspense");case 19:return pl("SuspenseList");case 0:case 2:case 15:return n=mp(n.type,!1),n;case 11:return n=mp(n.type.render,!1),n;case 1:return n=mp(n.type,!0),n;default:return""}}function jm(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ho:return"Fragment";case Vo:return"Portal";case Hm:return"Profiler";case M0:return"StrictMode";case Gm:return"Suspense";case Wm:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _M:return(n.displayName||"Context")+".Consumer";case xM:return(n._context.displayName||"Context")+".Provider";case w0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case b0:return e=n.displayName||null,e!==null?e:jm(n.type)||"Memo";case Fr:e=n._payload,n=n._init;try{return jm(n(e))}catch{}}return null}function VC(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jm(e);case 8:return e===M0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ts(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function MM(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HC(n){var e=MM(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Qc(n){n._valueTracker||(n._valueTracker=HC(n))}function wM(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=MM(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ah(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xm(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Wy(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ts(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bM(n,e){e=e.checked,e!=null&&S0(n,"checked",e,!1)}function qm(n,e){bM(n,e);var t=ts(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ym(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ym(n,e.type,ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function jy(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ym(n,e,t){(e!=="number"||Ah(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ml=Array.isArray;function ca(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ts(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function $m(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Xy(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(ml(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ts(t)}}function TM(n,e){var t=ts(e.value),i=ts(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function qy(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function EM(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zm(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?EM(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var eu,AM=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function jl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var wl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GC=["Webkit","ms","Moz","O"];Object.keys(wl).forEach(function(n){GC.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),wl[e]=wl[n]})});function CM(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||wl.hasOwnProperty(n)&&wl[n]?(""+e).trim():e+"px"}function RM(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=CM(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var WC=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Km(n,e){if(e){if(WC[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Jm(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qm=null;function T0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var eg=null,ua=null,ha=null;function Yy(n){if(n=Nc(n)){if(typeof eg!="function")throw Error(se(280));var e=n.stateNode;e&&(e=Jd(e),eg(n.stateNode,n.type,e))}}function PM(n){ua?ha?ha.push(n):ha=[n]:ua=n}function IM(){if(ua){var n=ua,e=ha;if(ha=ua=null,Yy(n),e)for(n=0;n<e.length;n++)Yy(e[n])}}function LM(n,e){return n(e)}function NM(){}var gp=!1;function DM(n,e,t){if(gp)return n(e,t);gp=!0;try{return LM(n,e,t)}finally{gp=!1,(ua!==null||ha!==null)&&(NM(),IM())}}function Xl(n,e){var t=n.stateNode;if(t===null)return null;var i=Jd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var tg=!1;if(gr)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){tg=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{tg=!1}function jC(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var bl=!1,Ch=null,Rh=!1,ng=null,XC={onError:function(n){bl=!0,Ch=n}};function qC(n,e,t,i,r,s,o,a,l){bl=!1,Ch=null,jC.apply(XC,arguments)}function YC(n,e,t,i,r,s,o,a,l){if(qC.apply(this,arguments),bl){if(bl){var c=Ch;bl=!1,Ch=null}else throw Error(se(198));Rh||(Rh=!0,ng=c)}}function ho(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function UM(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function $y(n){if(ho(n)!==n)throw Error(se(188))}function $C(n){var e=n.alternate;if(!e){if(e=ho(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return $y(r),n;if(s===i)return $y(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function kM(n){return n=$C(n),n!==null?FM(n):null}function FM(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=FM(n);if(e!==null)return e;n=n.sibling}return null}var OM=Yn.unstable_scheduleCallback,Zy=Yn.unstable_cancelCallback,ZC=Yn.unstable_shouldYield,KC=Yn.unstable_requestPaint,Ot=Yn.unstable_now,JC=Yn.unstable_getCurrentPriorityLevel,E0=Yn.unstable_ImmediatePriority,BM=Yn.unstable_UserBlockingPriority,Ph=Yn.unstable_NormalPriority,QC=Yn.unstable_LowPriority,zM=Yn.unstable_IdlePriority,Yd=null,ki=null;function e2(n){if(ki&&typeof ki.onCommitFiberRoot=="function")try{ki.onCommitFiberRoot(Yd,n,void 0,(n.current.flags&128)===128)}catch{}}var Si=Math.clz32?Math.clz32:i2,t2=Math.log,n2=Math.LN2;function i2(n){return n>>>=0,n===0?32:31-(t2(n)/n2|0)|0}var tu=64,nu=4194304;function gl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ih(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=gl(a):(s&=o,s!==0&&(i=gl(s)))}else o=t&~r,o!==0?i=gl(o):s!==0&&(i=gl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Si(e),r=1<<t,i|=n[t],e&=~r;return i}function r2(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s2(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Si(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=r2(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ig(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function VM(){var n=tu;return tu<<=1,!(tu&4194240)&&(tu=64),n}function vp(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ic(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Si(e),n[e]=t}function o2(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Si(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function A0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Si(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var pt=0;function HM(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var GM,C0,WM,jM,XM,rg=!1,iu=[],Xr=null,qr=null,Yr=null,ql=new Map,Yl=new Map,zr=[],a2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ky(n,e){switch(n){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":ql.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(e.pointerId)}}function qa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Nc(e),e!==null&&C0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function l2(n,e,t,i,r){switch(e){case"focusin":return Xr=qa(Xr,n,e,t,i,r),!0;case"dragenter":return qr=qa(qr,n,e,t,i,r),!0;case"mouseover":return Yr=qa(Yr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ql.set(s,qa(ql.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Yl.set(s,qa(Yl.get(s)||null,n,e,t,i,r)),!0}return!1}function qM(n){var e=Bs(n.target);if(e!==null){var t=ho(e);if(t!==null){if(e=t.tag,e===13){if(e=UM(t),e!==null){n.blockedOn=e,XM(n.priority,function(){WM(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function dh(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=sg(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Qm=i,t.target.dispatchEvent(i),Qm=null}else return e=Nc(t),e!==null&&C0(e),n.blockedOn=t,!1;e.shift()}return!0}function Jy(n,e,t){dh(n)&&t.delete(e)}function c2(){rg=!1,Xr!==null&&dh(Xr)&&(Xr=null),qr!==null&&dh(qr)&&(qr=null),Yr!==null&&dh(Yr)&&(Yr=null),ql.forEach(Jy),Yl.forEach(Jy)}function Ya(n,e){n.blockedOn===e&&(n.blockedOn=null,rg||(rg=!0,Yn.unstable_scheduleCallback(Yn.unstable_NormalPriority,c2)))}function $l(n){function e(r){return Ya(r,n)}if(0<iu.length){Ya(iu[0],n);for(var t=1;t<iu.length;t++){var i=iu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Xr!==null&&Ya(Xr,n),qr!==null&&Ya(qr,n),Yr!==null&&Ya(Yr,n),ql.forEach(e),Yl.forEach(e),t=0;t<zr.length;t++)i=zr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<zr.length&&(t=zr[0],t.blockedOn===null);)qM(t),t.blockedOn===null&&zr.shift()}var da=br.ReactCurrentBatchConfig,Lh=!0;function u2(n,e,t,i){var r=pt,s=da.transition;da.transition=null;try{pt=1,R0(n,e,t,i)}finally{pt=r,da.transition=s}}function h2(n,e,t,i){var r=pt,s=da.transition;da.transition=null;try{pt=4,R0(n,e,t,i)}finally{pt=r,da.transition=s}}function R0(n,e,t,i){if(Lh){var r=sg(n,e,t,i);if(r===null)Ap(n,e,i,Nh,t),Ky(n,i);else if(l2(r,n,e,t,i))i.stopPropagation();else if(Ky(n,i),e&4&&-1<a2.indexOf(n)){for(;r!==null;){var s=Nc(r);if(s!==null&&GM(s),s=sg(n,e,t,i),s===null&&Ap(n,e,i,Nh,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ap(n,e,i,null,t)}}var Nh=null;function sg(n,e,t,i){if(Nh=null,n=T0(i),n=Bs(n),n!==null)if(e=ho(n),e===null)n=null;else if(t=e.tag,t===13){if(n=UM(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Nh=n,null}function YM(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JC()){case E0:return 1;case BM:return 4;case Ph:case QC:return 16;case zM:return 536870912;default:return 16}default:return 16}}var Gr=null,P0=null,fh=null;function $M(){if(fh)return fh;var n,e=P0,t=e.length,i,r="value"in Gr?Gr.value:Gr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return fh=r.slice(n,1<i?1-i:void 0)}function ph(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ru(){return!0}function Qy(){return!1}function Jn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ru:Qy,this.isPropagationStopped=Qy,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},I0=Jn(Na),Lc=Rt({},Na,{view:0,detail:0}),d2=Jn(Lc),yp,xp,$a,$d=Rt({},Lc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:L0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$a&&($a&&n.type==="mousemove"?(yp=n.screenX-$a.screenX,xp=n.screenY-$a.screenY):xp=yp=0,$a=n),yp)},movementY:function(n){return"movementY"in n?n.movementY:xp}}),ex=Jn($d),f2=Rt({},$d,{dataTransfer:0}),p2=Jn(f2),m2=Rt({},Lc,{relatedTarget:0}),_p=Jn(m2),g2=Rt({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),v2=Jn(g2),y2=Rt({},Na,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),x2=Jn(y2),_2=Rt({},Na,{data:0}),tx=Jn(_2),S2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b2(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=w2[n])?!!e[n]:!1}function L0(){return b2}var T2=Rt({},Lc,{key:function(n){if(n.key){var e=S2[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ph(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M2[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:L0,charCode:function(n){return n.type==="keypress"?ph(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ph(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),E2=Jn(T2),A2=Rt({},$d,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nx=Jn(A2),C2=Rt({},Lc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:L0}),R2=Jn(C2),P2=Rt({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),I2=Jn(P2),L2=Rt({},$d,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),N2=Jn(L2),D2=[9,13,27,32],N0=gr&&"CompositionEvent"in window,Tl=null;gr&&"documentMode"in document&&(Tl=document.documentMode);var U2=gr&&"TextEvent"in window&&!Tl,ZM=gr&&(!N0||Tl&&8<Tl&&11>=Tl),ix=" ",rx=!1;function KM(n,e){switch(n){case"keyup":return D2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function JM(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Go=!1;function k2(n,e){switch(n){case"compositionend":return JM(e);case"keypress":return e.which!==32?null:(rx=!0,ix);case"textInput":return n=e.data,n===ix&&rx?null:n;default:return null}}function F2(n,e){if(Go)return n==="compositionend"||!N0&&KM(n,e)?(n=$M(),fh=P0=Gr=null,Go=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ZM&&e.locale!=="ko"?null:e.data;default:return null}}var O2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sx(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!O2[n.type]:e==="textarea"}function QM(n,e,t,i){PM(i),e=Dh(e,"onChange"),0<e.length&&(t=new I0("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var El=null,Zl=null;function B2(n){uw(n,0)}function Zd(n){var e=Xo(n);if(wM(e))return n}function z2(n,e){if(n==="change")return e}var ew=!1;if(gr){var Sp;if(gr){var Mp="oninput"in document;if(!Mp){var ox=document.createElement("div");ox.setAttribute("oninput","return;"),Mp=typeof ox.oninput=="function"}Sp=Mp}else Sp=!1;ew=Sp&&(!document.documentMode||9<document.documentMode)}function ax(){El&&(El.detachEvent("onpropertychange",tw),Zl=El=null)}function tw(n){if(n.propertyName==="value"&&Zd(Zl)){var e=[];QM(e,Zl,n,T0(n)),DM(B2,e)}}function V2(n,e,t){n==="focusin"?(ax(),El=e,Zl=t,El.attachEvent("onpropertychange",tw)):n==="focusout"&&ax()}function H2(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Zd(Zl)}function G2(n,e){if(n==="click")return Zd(e)}function W2(n,e){if(n==="input"||n==="change")return Zd(e)}function j2(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var wi=typeof Object.is=="function"?Object.is:j2;function Kl(n,e){if(wi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Vm.call(e,r)||!wi(n[r],e[r]))return!1}return!0}function lx(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cx(n,e){var t=lx(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=lx(t)}}function nw(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?nw(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function iw(){for(var n=window,e=Ah();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ah(n.document)}return e}function D0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function X2(n){var e=iw(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&nw(t.ownerDocument.documentElement,t)){if(i!==null&&D0(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=cx(t,s);var o=cx(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var q2=gr&&"documentMode"in document&&11>=document.documentMode,Wo=null,og=null,Al=null,ag=!1;function ux(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ag||Wo==null||Wo!==Ah(i)||(i=Wo,"selectionStart"in i&&D0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Al&&Kl(Al,i)||(Al=i,i=Dh(og,"onSelect"),0<i.length&&(e=new I0("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Wo)))}function su(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var jo={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},wp={},rw={};gr&&(rw=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function Kd(n){if(wp[n])return wp[n];if(!jo[n])return n;var e=jo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in rw)return wp[n]=e[t];return n}var sw=Kd("animationend"),ow=Kd("animationiteration"),aw=Kd("animationstart"),lw=Kd("transitionend"),cw=new Map,hx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(n,e){cw.set(n,e),uo(e,[n])}for(var bp=0;bp<hx.length;bp++){var Tp=hx[bp],Y2=Tp.toLowerCase(),$2=Tp[0].toUpperCase()+Tp.slice(1);ls(Y2,"on"+$2)}ls(sw,"onAnimationEnd");ls(ow,"onAnimationIteration");ls(aw,"onAnimationStart");ls("dblclick","onDoubleClick");ls("focusin","onFocus");ls("focusout","onBlur");ls(lw,"onTransitionEnd");va("onMouseEnter",["mouseout","mouseover"]);va("onMouseLeave",["mouseout","mouseover"]);va("onPointerEnter",["pointerout","pointerover"]);va("onPointerLeave",["pointerout","pointerover"]);uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z2=new Set("cancel close invalid load scroll toggle".split(" ").concat(vl));function dx(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,YC(i,e,void 0,n),n.currentTarget=null}function uw(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;dx(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;dx(r,a,c),s=l}}}if(Rh)throw n=ng,Rh=!1,ng=null,n}function Mt(n,e){var t=e[dg];t===void 0&&(t=e[dg]=new Set);var i=n+"__bubble";t.has(i)||(hw(e,n,2,!1),t.add(i))}function Ep(n,e,t){var i=0;e&&(i|=4),hw(t,n,i,e)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Jl(n){if(!n[ou]){n[ou]=!0,yM.forEach(function(t){t!=="selectionchange"&&(Z2.has(t)||Ep(t,!1,n),Ep(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ou]||(e[ou]=!0,Ep("selectionchange",!1,e))}}function hw(n,e,t,i){switch(YM(e)){case 1:var r=u2;break;case 4:r=h2;break;default:r=R0}t=r.bind(null,e,t,n),r=void 0,!tg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ap(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Bs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}DM(function(){var c=s,u=T0(t),h=[];e:{var d=cw.get(n);if(d!==void 0){var p=I0,g=n;switch(n){case"keypress":if(ph(t)===0)break e;case"keydown":case"keyup":p=E2;break;case"focusin":g="focus",p=_p;break;case"focusout":g="blur",p=_p;break;case"beforeblur":case"afterblur":p=_p;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ex;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=p2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=R2;break;case sw:case ow:case aw:p=v2;break;case lw:p=I2;break;case"scroll":p=d2;break;case"wheel":p=N2;break;case"copy":case"cut":case"paste":p=x2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=nx}var x=(e&4)!==0,m=!x&&n==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,y;v!==null;){y=v;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,f!==null&&(_=Xl(v,f),_!=null&&x.push(Ql(v,_,y)))),m)break;v=v.return}0<x.length&&(d=new p(d,g,null,t,u),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Qm&&(g=t.relatedTarget||t.fromElement)&&(Bs(g)||g[vr]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Bs(g):null,g!==null&&(m=ho(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=ex,_="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(x=nx,_="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:Xo(p),y=g==null?d:Xo(g),d=new x(_,v+"leave",p,t,u),d.target=m,d.relatedTarget=y,_=null,Bs(u)===c&&(x=new x(f,v+"enter",g,t,u),x.target=y,x.relatedTarget=m,_=x),m=_,p&&g)t:{for(x=p,f=g,v=0,y=x;y;y=Mo(y))v++;for(y=0,_=f;_;_=Mo(_))y++;for(;0<v-y;)x=Mo(x),v--;for(;0<y-v;)f=Mo(f),y--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=Mo(x),f=Mo(f)}x=null}else x=null;p!==null&&fx(h,d,p,x,!1),g!==null&&m!==null&&fx(h,m,g,x,!0)}}e:{if(d=c?Xo(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=z2;else if(sx(d))if(ew)T=W2;else{T=H2;var w=V2}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=G2);if(T&&(T=T(n,c))){QM(h,T,t,u);break e}w&&w(n,d,c),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Ym(d,"number",d.value)}switch(w=c?Xo(c):window,n){case"focusin":(sx(w)||w.contentEditable==="true")&&(Wo=w,og=c,Al=null);break;case"focusout":Al=og=Wo=null;break;case"mousedown":ag=!0;break;case"contextmenu":case"mouseup":case"dragend":ag=!1,ux(h,t,u);break;case"selectionchange":if(q2)break;case"keydown":case"keyup":ux(h,t,u)}var A;if(N0)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Go?KM(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(ZM&&t.locale!=="ko"&&(Go||C!=="onCompositionStart"?C==="onCompositionEnd"&&Go&&(A=$M()):(Gr=u,P0="value"in Gr?Gr.value:Gr.textContent,Go=!0)),w=Dh(c,C),0<w.length&&(C=new tx(C,n,null,t,u),h.push({event:C,listeners:w}),A?C.data=A:(A=JM(t),A!==null&&(C.data=A)))),(A=U2?k2(n,t):F2(n,t))&&(c=Dh(c,"onBeforeInput"),0<c.length&&(u=new tx("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=A))}uw(h,e)})}function Ql(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Dh(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xl(n,t),s!=null&&i.unshift(Ql(n,s,r)),s=Xl(n,e),s!=null&&i.push(Ql(n,s,r))),n=n.return}return i}function Mo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fx(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Xl(t,s),l!=null&&o.unshift(Ql(t,l,a))):r||(l=Xl(t,s),l!=null&&o.push(Ql(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var K2=/\r\n?/g,J2=/\u0000|\uFFFD/g;function px(n){return(typeof n=="string"?n:""+n).replace(K2,`
`).replace(J2,"")}function au(n,e,t){if(e=px(e),px(n)!==e&&t)throw Error(se(425))}function Uh(){}var lg=null,cg=null;function ug(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hg=typeof setTimeout=="function"?setTimeout:void 0,Q2=typeof clearTimeout=="function"?clearTimeout:void 0,mx=typeof Promise=="function"?Promise:void 0,eR=typeof queueMicrotask=="function"?queueMicrotask:typeof mx<"u"?function(n){return mx.resolve(null).then(n).catch(tR)}:hg;function tR(n){setTimeout(function(){throw n})}function Cp(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),$l(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);$l(e)}function $r(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function gx(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Da=Math.random().toString(36).slice(2),Li="__reactFiber$"+Da,ec="__reactProps$"+Da,vr="__reactContainer$"+Da,dg="__reactEvents$"+Da,nR="__reactListeners$"+Da,iR="__reactHandles$"+Da;function Bs(n){var e=n[Li];if(e)return e;for(var t=n.parentNode;t;){if(e=t[vr]||t[Li]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=gx(n);n!==null;){if(t=n[Li])return t;n=gx(n)}return e}n=t,t=n.parentNode}return null}function Nc(n){return n=n[Li]||n[vr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function Jd(n){return n[ec]||null}var fg=[],qo=-1;function cs(n){return{current:n}}function wt(n){0>qo||(n.current=fg[qo],fg[qo]=null,qo--)}function xt(n,e){qo++,fg[qo]=n.current,n.current=e}var ns={},pn=cs(ns),kn=cs(!1),eo=ns;function ya(n,e){var t=n.type.contextTypes;if(!t)return ns;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Fn(n){return n=n.childContextTypes,n!=null}function kh(){wt(kn),wt(pn)}function vx(n,e,t){if(pn.current!==ns)throw Error(se(168));xt(pn,e),xt(kn,t)}function dw(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,VC(n)||"Unknown",r));return Rt({},t,i)}function Fh(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ns,eo=pn.current,xt(pn,n),xt(kn,kn.current),!0}function yx(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=dw(n,e,eo),i.__reactInternalMemoizedMergedChildContext=n,wt(kn),wt(pn),xt(pn,n)):wt(kn),xt(kn,t)}var tr=null,Qd=!1,Rp=!1;function fw(n){tr===null?tr=[n]:tr.push(n)}function rR(n){Qd=!0,fw(n)}function us(){if(!Rp&&tr!==null){Rp=!0;var n=0,e=pt;try{var t=tr;for(pt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}tr=null,Qd=!1}catch(r){throw tr!==null&&(tr=tr.slice(n+1)),OM(E0,us),r}finally{pt=e,Rp=!1}}return null}var Yo=[],$o=0,Oh=null,Bh=0,ri=[],si=0,to=null,rr=1,sr="";function Ls(n,e){Yo[$o++]=Bh,Yo[$o++]=Oh,Oh=n,Bh=e}function pw(n,e,t){ri[si++]=rr,ri[si++]=sr,ri[si++]=to,to=n;var i=rr;n=sr;var r=32-Si(i)-1;i&=~(1<<r),t+=1;var s=32-Si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,rr=1<<32-Si(e)+r|t<<r|i,sr=s+n}else rr=1<<s|t<<r|i,sr=n}function U0(n){n.return!==null&&(Ls(n,1),pw(n,1,0))}function k0(n){for(;n===Oh;)Oh=Yo[--$o],Yo[$o]=null,Bh=Yo[--$o],Yo[$o]=null;for(;n===to;)to=ri[--si],ri[si]=null,sr=ri[--si],ri[si]=null,rr=ri[--si],ri[si]=null}var Xn=null,jn=null,bt=!1,xi=null;function mw(n,e){var t=oi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function xx(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Xn=n,jn=$r(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Xn=n,jn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=to!==null?{id:rr,overflow:sr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=oi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Xn=n,jn=null,!0):!1;default:return!1}}function pg(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mg(n){if(bt){var e=jn;if(e){var t=e;if(!xx(n,e)){if(pg(n))throw Error(se(418));e=$r(t.nextSibling);var i=Xn;e&&xx(n,e)?mw(i,t):(n.flags=n.flags&-4097|2,bt=!1,Xn=n)}}else{if(pg(n))throw Error(se(418));n.flags=n.flags&-4097|2,bt=!1,Xn=n}}}function _x(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function lu(n){if(n!==Xn)return!1;if(!bt)return _x(n),bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ug(n.type,n.memoizedProps)),e&&(e=jn)){if(pg(n))throw gw(),Error(se(418));for(;e;)mw(n,e),e=$r(e.nextSibling)}if(_x(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){jn=$r(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}jn=null}}else jn=Xn?$r(n.stateNode.nextSibling):null;return!0}function gw(){for(var n=jn;n;)n=$r(n.nextSibling)}function xa(){jn=Xn=null,bt=!1}function F0(n){xi===null?xi=[n]:xi.push(n)}var sR=br.ReactCurrentBatchConfig;function Za(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function cu(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Sx(n){var e=n._init;return e(n._payload)}function vw(n){function e(f,v){if(n){var y=f.deletions;y===null?(f.deletions=[v],f.flags|=16):y.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Qr(f,v),f.index=0,f.sibling=null,f}function s(f,v,y){return f.index=y,n?(y=f.alternate,y!==null?(y=y.index,y<v?(f.flags|=2,v):y):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,y,_){return v===null||v.tag!==6?(v=kp(y,f.mode,_),v.return=f,v):(v=r(v,y),v.return=f,v)}function l(f,v,y,_){var T=y.type;return T===Ho?u(f,v,y.props.children,_,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&Sx(T)===v.type)?(_=r(v,y.props),_.ref=Za(f,v,y),_.return=f,_):(_=Sh(y.type,y.key,y.props,null,f.mode,_),_.ref=Za(f,v,y),_.return=f,_)}function c(f,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Fp(y,f.mode,_),v.return=f,v):(v=r(v,y.children||[]),v.return=f,v)}function u(f,v,y,_,T){return v===null||v.tag!==7?(v=Ys(y,f.mode,_,T),v.return=f,v):(v=r(v,y),v.return=f,v)}function h(f,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kp(""+v,f.mode,y),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jc:return y=Sh(v.type,v.key,v.props,null,f.mode,y),y.ref=Za(f,null,v),y.return=f,y;case Vo:return v=Fp(v,f.mode,y),v.return=f,v;case Fr:var _=v._init;return h(f,_(v._payload),y)}if(ml(v)||ja(v))return v=Ys(v,f.mode,y,null),v.return=f,v;cu(f,v)}return null}function d(f,v,y,_){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(f,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Jc:return y.key===T?l(f,v,y,_):null;case Vo:return y.key===T?c(f,v,y,_):null;case Fr:return T=y._init,d(f,v,T(y._payload),_)}if(ml(y)||ja(y))return T!==null?null:u(f,v,y,_,null);cu(f,y)}return null}function p(f,v,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(y)||null,a(v,f,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jc:return f=f.get(_.key===null?y:_.key)||null,l(v,f,_,T);case Vo:return f=f.get(_.key===null?y:_.key)||null,c(v,f,_,T);case Fr:var w=_._init;return p(f,v,y,w(_._payload),T)}if(ml(_)||ja(_))return f=f.get(y)||null,u(v,f,_,T,null);cu(v,_)}return null}function g(f,v,y,_){for(var T=null,w=null,A=v,C=v=0,b=null;A!==null&&C<y.length;C++){A.index>C?(b=A,A=null):b=A.sibling;var M=d(f,A,y[C],_);if(M===null){A===null&&(A=b);break}n&&A&&M.alternate===null&&e(f,A),v=s(M,v,C),w===null?T=M:w.sibling=M,w=M,A=b}if(C===y.length)return t(f,A),bt&&Ls(f,C),T;if(A===null){for(;C<y.length;C++)A=h(f,y[C],_),A!==null&&(v=s(A,v,C),w===null?T=A:w.sibling=A,w=A);return bt&&Ls(f,C),T}for(A=i(f,A);C<y.length;C++)b=p(A,f,C,y[C],_),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?C:b.key),v=s(b,v,C),w===null?T=b:w.sibling=b,w=b);return n&&A.forEach(function(L){return e(f,L)}),bt&&Ls(f,C),T}function x(f,v,y,_){var T=ja(y);if(typeof T!="function")throw Error(se(150));if(y=T.call(y),y==null)throw Error(se(151));for(var w=T=null,A=v,C=v=0,b=null,M=y.next();A!==null&&!M.done;C++,M=y.next()){A.index>C?(b=A,A=null):b=A.sibling;var L=d(f,A,M.value,_);if(L===null){A===null&&(A=b);break}n&&A&&L.alternate===null&&e(f,A),v=s(L,v,C),w===null?T=L:w.sibling=L,w=L,A=b}if(M.done)return t(f,A),bt&&Ls(f,C),T;if(A===null){for(;!M.done;C++,M=y.next())M=h(f,M.value,_),M!==null&&(v=s(M,v,C),w===null?T=M:w.sibling=M,w=M);return bt&&Ls(f,C),T}for(A=i(f,A);!M.done;C++,M=y.next())M=p(A,f,C,M.value,_),M!==null&&(n&&M.alternate!==null&&A.delete(M.key===null?C:M.key),v=s(M,v,C),w===null?T=M:w.sibling=M,w=M);return n&&A.forEach(function(O){return e(f,O)}),bt&&Ls(f,C),T}function m(f,v,y,_){if(typeof y=="object"&&y!==null&&y.type===Ho&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Jc:e:{for(var T=y.key,w=v;w!==null;){if(w.key===T){if(T=y.type,T===Ho){if(w.tag===7){t(f,w.sibling),v=r(w,y.props.children),v.return=f,f=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&Sx(T)===w.type){t(f,w.sibling),v=r(w,y.props),v.ref=Za(f,w,y),v.return=f,f=v;break e}t(f,w);break}else e(f,w);w=w.sibling}y.type===Ho?(v=Ys(y.props.children,f.mode,_,y.key),v.return=f,f=v):(_=Sh(y.type,y.key,y.props,null,f.mode,_),_.ref=Za(f,v,y),_.return=f,f=_)}return o(f);case Vo:e:{for(w=y.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(f,v.sibling),v=r(v,y.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=Fp(y,f.mode,_),v.return=f,f=v}return o(f);case Fr:return w=y._init,m(f,v,w(y._payload),_)}if(ml(y))return g(f,v,y,_);if(ja(y))return x(f,v,y,_);cu(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,y),v.return=f,f=v):(t(f,v),v=kp(y,f.mode,_),v.return=f,f=v),o(f)):t(f,v)}return m}var _a=vw(!0),yw=vw(!1),zh=cs(null),Vh=null,Zo=null,O0=null;function B0(){O0=Zo=Vh=null}function z0(n){var e=zh.current;wt(zh),n._currentValue=e}function gg(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function fa(n,e){Vh=n,O0=Zo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Dn=!0),n.firstContext=null)}function ci(n){var e=n._currentValue;if(O0!==n)if(n={context:n,memoizedValue:e,next:null},Zo===null){if(Vh===null)throw Error(se(308));Zo=n,Vh.dependencies={lanes:0,firstContext:n}}else Zo=Zo.next=n;return e}var zs=null;function V0(n){zs===null?zs=[n]:zs.push(n)}function xw(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,V0(e)):(t.next=r.next,r.next=t),e.interleaved=t,yr(n,i)}function yr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Or=!1;function H0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _w(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function lr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Zr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yr(n,t)}return r=i.interleaved,r===null?(e.next=e,V0(i)):(e.next=r.next,r.next=e),i.interleaved=e,yr(n,t)}function mh(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,A0(n,t)}}function Mx(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Hh(n,e,t,i){var r=n.updateQueue;Or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,x=a;switch(d=e,p=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Rt({},h,d);break e;case 2:Or=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);io|=o,n.lanes=o,n.memoizedState=h}}function wx(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Dc={},Fi=cs(Dc),tc=cs(Dc),nc=cs(Dc);function Vs(n){if(n===Dc)throw Error(se(174));return n}function G0(n,e){switch(xt(nc,e),xt(tc,n),xt(Fi,Dc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zm(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Zm(e,n)}wt(Fi),xt(Fi,e)}function Sa(){wt(Fi),wt(tc),wt(nc)}function Sw(n){Vs(nc.current);var e=Vs(Fi.current),t=Zm(e,n.type);e!==t&&(xt(tc,n),xt(Fi,t))}function W0(n){tc.current===n&&(wt(Fi),wt(tc))}var Tt=cs(0);function Gh(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pp=[];function j0(){for(var n=0;n<Pp.length;n++)Pp[n]._workInProgressVersionPrimary=null;Pp.length=0}var gh=br.ReactCurrentDispatcher,Ip=br.ReactCurrentBatchConfig,no=0,Ct=null,Ht=null,Yt=null,Wh=!1,Cl=!1,ic=0,oR=0;function rn(){throw Error(se(321))}function X0(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!wi(n[t],e[t]))return!1;return!0}function q0(n,e,t,i,r,s){if(no=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gh.current=n===null||n.memoizedState===null?uR:hR,n=t(i,r),Cl){s=0;do{if(Cl=!1,ic=0,25<=s)throw Error(se(301));s+=1,Yt=Ht=null,e.updateQueue=null,gh.current=dR,n=t(i,r)}while(Cl)}if(gh.current=jh,e=Ht!==null&&Ht.next!==null,no=0,Yt=Ht=Ct=null,Wh=!1,e)throw Error(se(300));return n}function Y0(){var n=ic!==0;return ic=0,n}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Ct.memoizedState=Yt=n:Yt=Yt.next=n,Yt}function ui(){if(Ht===null){var n=Ct.alternate;n=n!==null?n.memoizedState:null}else n=Ht.next;var e=Yt===null?Ct.memoizedState:Yt.next;if(e!==null)Yt=e,Ht=n;else{if(n===null)throw Error(se(310));Ht=n,n={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Yt===null?Ct.memoizedState=Yt=n:Yt=Yt.next=n}return Yt}function rc(n,e){return typeof e=="function"?e(n):e}function Lp(n){var e=ui(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=Ht,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((no&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=u,io|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,wi(i,e.memoizedState)||(Dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ct.lanes|=s,io|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Np(n){var e=ui(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);wi(s,e.memoizedState)||(Dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Mw(){}function ww(n,e){var t=Ct,i=ui(),r=e(),s=!wi(i.memoizedState,r);if(s&&(i.memoizedState=r,Dn=!0),i=i.queue,$0(Ew.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Yt!==null&&Yt.memoizedState.tag&1){if(t.flags|=2048,sc(9,Tw.bind(null,t,i,r,e),void 0,null),$t===null)throw Error(se(349));no&30||bw(t,e,r)}return r}function bw(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Tw(n,e,t,i){e.value=t,e.getSnapshot=i,Aw(e)&&Cw(n)}function Ew(n,e,t){return t(function(){Aw(e)&&Cw(n)})}function Aw(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!wi(n,t)}catch{return!0}}function Cw(n){var e=yr(n,1);e!==null&&Mi(e,n,1,-1)}function bx(n){var e=Pi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rc,lastRenderedState:n},e.queue=n,n=n.dispatch=cR.bind(null,Ct,n),[e.memoizedState,n]}function sc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Rw(){return ui().memoizedState}function vh(n,e,t,i){var r=Pi();Ct.flags|=n,r.memoizedState=sc(1|e,t,void 0,i===void 0?null:i)}function ef(n,e,t,i){var r=ui();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var o=Ht.memoizedState;if(s=o.destroy,i!==null&&X0(i,o.deps)){r.memoizedState=sc(e,t,s,i);return}}Ct.flags|=n,r.memoizedState=sc(1|e,t,s,i)}function Tx(n,e){return vh(8390656,8,n,e)}function $0(n,e){return ef(2048,8,n,e)}function Pw(n,e){return ef(4,2,n,e)}function Iw(n,e){return ef(4,4,n,e)}function Lw(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Nw(n,e,t){return t=t!=null?t.concat([n]):null,ef(4,4,Lw.bind(null,e,n),t)}function Z0(){}function Dw(n,e){var t=ui();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&X0(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Uw(n,e){var t=ui();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&X0(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function kw(n,e,t){return no&21?(wi(t,e)||(t=VM(),Ct.lanes|=t,io|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=t)}function aR(n,e){var t=pt;pt=t!==0&&4>t?t:4,n(!0);var i=Ip.transition;Ip.transition={};try{n(!1),e()}finally{pt=t,Ip.transition=i}}function Fw(){return ui().memoizedState}function lR(n,e,t){var i=Jr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Ow(n))Bw(e,t);else if(t=xw(n,e,t,i),t!==null){var r=Sn();Mi(t,n,i,r),zw(t,e,i)}}function cR(n,e,t){var i=Jr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ow(n))Bw(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,wi(a,o)){var l=e.interleaved;l===null?(r.next=r,V0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=xw(n,e,r,i),t!==null&&(r=Sn(),Mi(t,n,i,r),zw(t,e,i))}}function Ow(n){var e=n.alternate;return n===Ct||e!==null&&e===Ct}function Bw(n,e){Cl=Wh=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function zw(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,A0(n,t)}}var jh={readContext:ci,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},uR={readContext:ci,useCallback:function(n,e){return Pi().memoizedState=[n,e===void 0?null:e],n},useContext:ci,useEffect:Tx,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,vh(4194308,4,Lw.bind(null,e,n),t)},useLayoutEffect:function(n,e){return vh(4194308,4,n,e)},useInsertionEffect:function(n,e){return vh(4,2,n,e)},useMemo:function(n,e){var t=Pi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Pi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=lR.bind(null,Ct,n),[i.memoizedState,n]},useRef:function(n){var e=Pi();return n={current:n},e.memoizedState=n},useState:bx,useDebugValue:Z0,useDeferredValue:function(n){return Pi().memoizedState=n},useTransition:function(){var n=bx(!1),e=n[0];return n=aR.bind(null,n[1]),Pi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ct,r=Pi();if(bt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),$t===null)throw Error(se(349));no&30||bw(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Tx(Ew.bind(null,i,s,n),[n]),i.flags|=2048,sc(9,Tw.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Pi(),e=$t.identifierPrefix;if(bt){var t=sr,i=rr;t=(i&~(1<<32-Si(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ic++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=oR++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},hR={readContext:ci,useCallback:Dw,useContext:ci,useEffect:$0,useImperativeHandle:Nw,useInsertionEffect:Pw,useLayoutEffect:Iw,useMemo:Uw,useReducer:Lp,useRef:Rw,useState:function(){return Lp(rc)},useDebugValue:Z0,useDeferredValue:function(n){var e=ui();return kw(e,Ht.memoizedState,n)},useTransition:function(){var n=Lp(rc)[0],e=ui().memoizedState;return[n,e]},useMutableSource:Mw,useSyncExternalStore:ww,useId:Fw,unstable_isNewReconciler:!1},dR={readContext:ci,useCallback:Dw,useContext:ci,useEffect:$0,useImperativeHandle:Nw,useInsertionEffect:Pw,useLayoutEffect:Iw,useMemo:Uw,useReducer:Np,useRef:Rw,useState:function(){return Np(rc)},useDebugValue:Z0,useDeferredValue:function(n){var e=ui();return Ht===null?e.memoizedState=n:kw(e,Ht.memoizedState,n)},useTransition:function(){var n=Np(rc)[0],e=ui().memoizedState;return[n,e]},useMutableSource:Mw,useSyncExternalStore:ww,useId:Fw,unstable_isNewReconciler:!1};function vi(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function vg(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var tf={isMounted:function(n){return(n=n._reactInternals)?ho(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Sn(),r=Jr(n),s=lr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Zr(n,s,r),e!==null&&(Mi(e,n,r,i),mh(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Sn(),r=Jr(n),s=lr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Zr(n,s,r),e!==null&&(Mi(e,n,r,i),mh(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Sn(),i=Jr(n),r=lr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Zr(n,r,i),e!==null&&(Mi(e,n,i,t),mh(e,n,i))}};function Ex(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Kl(t,i)||!Kl(r,s):!0}function Vw(n,e,t){var i=!1,r=ns,s=e.contextType;return typeof s=="object"&&s!==null?s=ci(s):(r=Fn(e)?eo:pn.current,i=e.contextTypes,s=(i=i!=null)?ya(n,r):ns),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tf,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Ax(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&tf.enqueueReplaceState(e,e.state,null)}function yg(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},H0(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ci(s):(s=Fn(e)?eo:pn.current,r.context=ya(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vg(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tf.enqueueReplaceState(r,r.state,null),Hh(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ma(n,e){try{var t="",i=e;do t+=zC(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Dp(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function xg(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var fR=typeof WeakMap=="function"?WeakMap:Map;function Hw(n,e,t){t=lr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){qh||(qh=!0,Rg=i),xg(n,e)},t}function Gw(n,e,t){t=lr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){xg(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){xg(n,e),typeof i!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Cx(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new fR;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=AR.bind(null,n,e,t),e.then(n,n))}function Rx(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Px(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=lr(-1,1),e.tag=2,Zr(t,e,1))),t.lanes|=1),n)}var pR=br.ReactCurrentOwner,Dn=!1;function yn(n,e,t,i){e.child=n===null?yw(e,null,t,i):_a(e,n.child,t,i)}function Ix(n,e,t,i,r){t=t.render;var s=e.ref;return fa(e,r),i=q0(n,e,t,i,s,r),t=Y0(),n!==null&&!Dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,xr(n,e,r)):(bt&&t&&U0(e),e.flags|=1,yn(n,e,i,r),e.child)}function Lx(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!rv(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Ww(n,e,s,i,r)):(n=Sh(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Kl,t(o,i)&&n.ref===e.ref)return xr(n,e,r)}return e.flags|=1,n=Qr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Ww(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Kl(s,i)&&n.ref===e.ref)if(Dn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Dn=!0);else return e.lanes=n.lanes,xr(n,e,r)}return _g(n,e,t,i,r)}function jw(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Jo,Wn),Wn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,xt(Jo,Wn),Wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,xt(Jo,Wn),Wn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,xt(Jo,Wn),Wn|=i;return yn(n,e,r,t),e.child}function Xw(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function _g(n,e,t,i,r){var s=Fn(t)?eo:pn.current;return s=ya(e,s),fa(e,r),t=q0(n,e,t,i,s,r),i=Y0(),n!==null&&!Dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,xr(n,e,r)):(bt&&i&&U0(e),e.flags|=1,yn(n,e,t,r),e.child)}function Nx(n,e,t,i,r){if(Fn(t)){var s=!0;Fh(e)}else s=!1;if(fa(e,r),e.stateNode===null)yh(n,e),Vw(e,t,i),yg(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=ci(c):(c=Fn(t)?eo:pn.current,c=ya(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ax(e,o,i,c),Or=!1;var d=e.memoizedState;o.state=d,Hh(e,i,o,r),l=e.memoizedState,a!==i||d!==l||kn.current||Or?(typeof u=="function"&&(vg(e,t,u,i),l=e.memoizedState),(a=Or||Ex(e,t,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,_w(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:vi(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ci(l):(l=Fn(t)?eo:pn.current,l=ya(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Ax(e,o,i,l),Or=!1,d=e.memoizedState,o.state=d,Hh(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||kn.current||Or?(typeof p=="function"&&(vg(e,t,p,i),g=e.memoizedState),(c=Or||Ex(e,t,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Sg(n,e,t,i,s,r)}function Sg(n,e,t,i,r,s){Xw(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&yx(e,t,!1),xr(n,e,s);i=e.stateNode,pR.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=_a(e,n.child,null,s),e.child=_a(e,null,a,s)):yn(n,e,a,s),e.memoizedState=i.state,r&&yx(e,t,!0),e.child}function qw(n){var e=n.stateNode;e.pendingContext?vx(n,e.pendingContext,e.pendingContext!==e.context):e.context&&vx(n,e.context,!1),G0(n,e.containerInfo)}function Dx(n,e,t,i,r){return xa(),F0(r),e.flags|=256,yn(n,e,t,i),e.child}var Mg={dehydrated:null,treeContext:null,retryLane:0};function wg(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yw(n,e,t){var i=e.pendingProps,r=Tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),xt(Tt,r&1),n===null)return mg(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sf(o,i,0,null),n=Ys(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=wg(t),e.memoizedState=Mg,n):K0(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return mR(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Qr(a,s):(s=Ys(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?wg(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Mg,i}return s=n.child,n=s.sibling,i=Qr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function K0(n,e){return e=sf({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function uu(n,e,t,i){return i!==null&&F0(i),_a(e,n.child,null,t),n=K0(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function mR(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Dp(Error(se(422))),uu(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sf({mode:"visible",children:i.children},r,0,null),s=Ys(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_a(e,n.child,null,o),e.child.memoizedState=wg(o),e.memoizedState=Mg,s);if(!(e.mode&1))return uu(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Dp(s,i,void 0),uu(n,e,o,i)}if(a=(o&n.childLanes)!==0,Dn||a){if(i=$t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yr(n,r),Mi(i,n,r,-1))}return iv(),i=Dp(Error(se(421))),uu(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=CR.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,jn=$r(r.nextSibling),Xn=e,bt=!0,xi=null,n!==null&&(ri[si++]=rr,ri[si++]=sr,ri[si++]=to,rr=n.id,sr=n.overflow,to=e),e=K0(e,i.children),e.flags|=4096,e)}function Ux(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),gg(n.return,e,t)}function Up(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function $w(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(yn(n,e,i.children,t),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ux(n,t,e);else if(n.tag===19)Ux(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(xt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Gh(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Up(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Gh(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Up(e,!0,t,null,s);break;case"together":Up(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yh(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function xr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),io|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=Qr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Qr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function gR(n,e,t){switch(e.tag){case 3:qw(e),xa();break;case 5:Sw(e);break;case 1:Fn(e.type)&&Fh(e);break;case 4:G0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(zh,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Tt,Tt.current&1),e.flags|=128,null):t&e.child.childLanes?Yw(n,e,t):(xt(Tt,Tt.current&1),n=xr(n,e,t),n!==null?n.sibling:null);xt(Tt,Tt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return $w(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,jw(n,e,t)}return xr(n,e,t)}var Zw,bg,Kw,Jw;Zw=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};bg=function(){};Kw=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Vs(Fi.current);var s=null;switch(t){case"input":r=Xm(n,r),i=Xm(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=$m(n,r),i=$m(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Uh)}Km(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jw=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ka(n,e){if(!bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function sn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function vR(n,e,t){var i=e.pendingProps;switch(k0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return Fn(e.type)&&kh(),sn(e),null;case 3:return i=e.stateNode,Sa(),wt(kn),wt(pn),j0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(lu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xi!==null&&(Lg(xi),xi=null))),bg(n,e),sn(e),null;case 5:W0(e);var r=Vs(nc.current);if(t=e.type,n!==null&&e.stateNode!=null)Kw(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return sn(e),null}if(n=Vs(Fi.current),lu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[ec]=s,n=(e.mode&1)!==0,t){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<vl.length;r++)Mt(vl[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Wy(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":Xy(i,s),Mt("invalid",i)}Km(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&au(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&au(i.textContent,a,n),r=["children",""+a]):Wl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Mt("scroll",i)}switch(t){case"input":Qc(i),jy(i,s,!0);break;case"textarea":Qc(i),qy(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Uh)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=EM(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Li]=e,n[ec]=i,Zw(n,e,!1,!1),e.stateNode=n;e:{switch(o=Jm(t,i),t){case"dialog":Mt("cancel",n),Mt("close",n),r=i;break;case"iframe":case"object":case"embed":Mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<vl.length;r++)Mt(vl[r],n);r=i;break;case"source":Mt("error",n),r=i;break;case"img":case"image":case"link":Mt("error",n),Mt("load",n),r=i;break;case"details":Mt("toggle",n),r=i;break;case"input":Wy(n,i),r=Xm(n,i),Mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),Mt("invalid",n);break;case"textarea":Xy(n,i),r=$m(n,i),Mt("invalid",n);break;default:r=i}Km(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?RM(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AM(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&jl(n,l):typeof l=="number"&&jl(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",n):l!=null&&S0(n,s,l,o))}switch(t){case"input":Qc(n),jy(n,i,!1);break;case"textarea":Qc(n),qy(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ts(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ca(n,!!i.multiple,s,!1):i.defaultValue!=null&&ca(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Uh)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(n&&e.stateNode!=null)Jw(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=Vs(nc.current),Vs(Fi.current),lu(e)){if(i=e.stateNode,t=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==t)&&(n=Xn,n!==null))switch(n.tag){case 3:au(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&au(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return sn(e),null;case 13:if(wt(Tt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&jn!==null&&e.mode&1&&!(e.flags&128))gw(),xa(),e.flags|=98560,s=!1;else if(s=lu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Li]=e}else xa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else xi!==null&&(Lg(xi),xi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Tt.current&1?Gt===0&&(Gt=3):iv())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return Sa(),bg(n,e),n===null&&Jl(e.stateNode.containerInfo),sn(e),null;case 10:return z0(e.type._context),sn(e),null;case 17:return Fn(e.type)&&kh(),sn(e),null;case 19:if(wt(Tt),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ka(s,!1);else{if(Gt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Gh(n),o!==null){for(e.flags|=128,Ka(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return xt(Tt,Tt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ot()>wa&&(e.flags|=128,i=!0,Ka(s,!1),e.lanes=4194304)}else{if(!i)if(n=Gh(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ka(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!bt)return sn(e),null}else 2*Ot()-s.renderingStartTime>wa&&t!==1073741824&&(e.flags|=128,i=!0,Ka(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,t=Tt.current,xt(Tt,i?t&1|2:t&1),e):(sn(e),null);case 22:case 23:return nv(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Wn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function yR(n,e){switch(k0(e),e.tag){case 1:return Fn(e.type)&&kh(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Sa(),wt(kn),wt(pn),j0(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return W0(e),null;case 13:if(wt(Tt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));xa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return wt(Tt),null;case 4:return Sa(),null;case 10:return z0(e.type._context),null;case 22:case 23:return nv(),null;case 24:return null;default:return null}}var hu=!1,un=!1,xR=typeof WeakSet=="function"?WeakSet:Set,be=null;function Ko(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Lt(n,e,i)}else t.current=null}function Tg(n,e,t){try{t()}catch(i){Lt(n,e,i)}}var kx=!1;function _R(n,e){if(lg=Lh,n=iw(),D0(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(cg={focusedElem:n,selectionRange:t},Lh=!1,be=e;be!==null;)if(e=be,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,be=n;else for(;be!==null;){e=be;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:vi(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(_){Lt(e,e.return,_)}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}return g=kx,kx=!1,g}function Rl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tg(e,t,s)}r=r.next}while(r!==i)}}function nf(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Eg(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Qw(n){var e=n.alternate;e!==null&&(n.alternate=null,Qw(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Li],delete e[ec],delete e[dg],delete e[nR],delete e[iR])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function eb(n){return n.tag===5||n.tag===3||n.tag===4}function Fx(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||eb(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ag(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Uh));else if(i!==4&&(n=n.child,n!==null))for(Ag(n,e,t),n=n.sibling;n!==null;)Ag(n,e,t),n=n.sibling}function Cg(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Cg(n,e,t),n=n.sibling;n!==null;)Cg(n,e,t),n=n.sibling}var Zt=null,yi=!1;function Ar(n,e,t){for(t=t.child;t!==null;)tb(n,e,t),t=t.sibling}function tb(n,e,t){if(ki&&typeof ki.onCommitFiberUnmount=="function")try{ki.onCommitFiberUnmount(Yd,t)}catch{}switch(t.tag){case 5:un||Ko(t,e);case 6:var i=Zt,r=yi;Zt=null,Ar(n,e,t),Zt=i,yi=r,Zt!==null&&(yi?(n=Zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Zt.removeChild(t.stateNode));break;case 18:Zt!==null&&(yi?(n=Zt,t=t.stateNode,n.nodeType===8?Cp(n.parentNode,t):n.nodeType===1&&Cp(n,t),$l(n)):Cp(Zt,t.stateNode));break;case 4:i=Zt,r=yi,Zt=t.stateNode.containerInfo,yi=!0,Ar(n,e,t),Zt=i,yi=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tg(t,e,o),r=r.next}while(r!==i)}Ar(n,e,t);break;case 1:if(!un&&(Ko(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Lt(t,e,a)}Ar(n,e,t);break;case 21:Ar(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,Ar(n,e,t),un=i):Ar(n,e,t);break;default:Ar(n,e,t)}}function Ox(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new xR),e.forEach(function(i){var r=RR.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function fi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Zt=a.stateNode,yi=!1;break e;case 3:Zt=a.stateNode.containerInfo,yi=!0;break e;case 4:Zt=a.stateNode.containerInfo,yi=!0;break e}a=a.return}if(Zt===null)throw Error(se(160));tb(s,o,r),Zt=null,yi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nb(e,n),e=e.sibling}function nb(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(e,n),Ri(n),i&4){try{Rl(3,n,n.return),nf(3,n)}catch(x){Lt(n,n.return,x)}try{Rl(5,n,n.return)}catch(x){Lt(n,n.return,x)}}break;case 1:fi(e,n),Ri(n),i&512&&t!==null&&Ko(t,t.return);break;case 5:if(fi(e,n),Ri(n),i&512&&t!==null&&Ko(t,t.return),n.flags&32){var r=n.stateNode;try{jl(r,"")}catch(x){Lt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bM(r,s),Jm(a,o);var c=Jm(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?RM(r,h):u==="dangerouslySetInnerHTML"?AM(r,h):u==="children"?jl(r,h):S0(r,u,h,c)}switch(a){case"input":qm(r,s);break;case"textarea":TM(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ca(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ca(r,!!s.multiple,s.defaultValue,!0):ca(r,!!s.multiple,s.multiple?[]:"",!1))}r[ec]=s}catch(x){Lt(n,n.return,x)}}break;case 6:if(fi(e,n),Ri(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){Lt(n,n.return,x)}}break;case 3:if(fi(e,n),Ri(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{$l(e.containerInfo)}catch(x){Lt(n,n.return,x)}break;case 4:fi(e,n),Ri(n);break;case 13:fi(e,n),Ri(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ev=Ot())),i&4&&Ox(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(un=(c=un)||u,fi(e,n),un=c):fi(e,n),Ri(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(be=n,u=n.child;u!==null;){for(h=be=u;be!==null;){switch(d=be,p=d.child,d.tag){case 0:case 11:case 14:case 15:Rl(4,d,d.return);break;case 1:Ko(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Lt(i,t,x)}}break;case 5:Ko(d,d.return);break;case 22:if(d.memoizedState!==null){zx(h);continue}}p!==null?(p.return=d,be=p):zx(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=CM("display",o))}catch(x){Lt(n,n.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Lt(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:fi(e,n),Ri(n),i&4&&Ox(n);break;case 21:break;default:fi(e,n),Ri(n)}}function Ri(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(eb(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jl(r,""),i.flags&=-33);var s=Fx(n);Cg(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Fx(n);Ag(n,a,o);break;default:throw Error(se(161))}}catch(l){Lt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function SR(n,e,t){be=n,ib(n)}function ib(n,e,t){for(var i=(n.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=hu;var c=un;if(hu=o,(un=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?Vx(r):l!==null?(l.return=o,be=l):Vx(r);for(;s!==null;)be=s,ib(s),s=s.sibling;be=r,hu=a,un=c}Bx(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Bx(n)}}function Bx(n){for(;be!==null;){var e=be;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||nf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:vi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wx(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}wx(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&$l(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}un||e.flags&512&&Eg(e)}catch(d){Lt(e,e.return,d)}}if(e===n){be=null;break}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}}function zx(n){for(;be!==null;){var e=be;if(e===n){be=null;break}var t=e.sibling;if(t!==null){t.return=e.return,be=t;break}be=e.return}}function Vx(n){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{nf(4,e)}catch(l){Lt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{Eg(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{Eg(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===n){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var MR=Math.ceil,Xh=br.ReactCurrentDispatcher,J0=br.ReactCurrentOwner,li=br.ReactCurrentBatchConfig,at=0,$t=null,zt=null,Qt=0,Wn=0,Jo=cs(0),Gt=0,oc=null,io=0,rf=0,Q0=0,Pl=null,Ln=null,ev=0,wa=1/0,er=null,qh=!1,Rg=null,Kr=null,du=!1,Wr=null,Yh=0,Il=0,Pg=null,xh=-1,_h=0;function Sn(){return at&6?Ot():xh!==-1?xh:xh=Ot()}function Jr(n){return n.mode&1?at&2&&Qt!==0?Qt&-Qt:sR.transition!==null?(_h===0&&(_h=VM()),_h):(n=pt,n!==0||(n=window.event,n=n===void 0?16:YM(n.type)),n):1}function Mi(n,e,t,i){if(50<Il)throw Il=0,Pg=null,Error(se(185));Ic(n,t,i),(!(at&2)||n!==$t)&&(n===$t&&(!(at&2)&&(rf|=t),Gt===4&&Vr(n,Qt)),On(n,i),t===1&&at===0&&!(e.mode&1)&&(wa=Ot()+500,Qd&&us()))}function On(n,e){var t=n.callbackNode;s2(n,e);var i=Ih(n,n===$t?Qt:0);if(i===0)t!==null&&Zy(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Zy(t),e===1)n.tag===0?rR(Hx.bind(null,n)):fw(Hx.bind(null,n)),eR(function(){!(at&6)&&us()}),t=null;else{switch(HM(i)){case 1:t=E0;break;case 4:t=BM;break;case 16:t=Ph;break;case 536870912:t=zM;break;default:t=Ph}t=hb(t,rb.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function rb(n,e){if(xh=-1,_h=0,at&6)throw Error(se(327));var t=n.callbackNode;if(pa()&&n.callbackNode!==t)return null;var i=Ih(n,n===$t?Qt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=$h(n,i);else{e=i;var r=at;at|=2;var s=ob();($t!==n||Qt!==e)&&(er=null,wa=Ot()+500,qs(n,e));do try{TR();break}catch(a){sb(n,a)}while(!0);B0(),Xh.current=s,at=r,zt!==null?e=0:($t=null,Qt=0,e=Gt)}if(e!==0){if(e===2&&(r=ig(n),r!==0&&(i=r,e=Ig(n,r))),e===1)throw t=oc,qs(n,0),Vr(n,i),On(n,Ot()),t;if(e===6)Vr(n,i);else{if(r=n.current.alternate,!(i&30)&&!wR(r)&&(e=$h(n,i),e===2&&(s=ig(n),s!==0&&(i=s,e=Ig(n,s))),e===1))throw t=oc,qs(n,0),Vr(n,i),On(n,Ot()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Ns(n,Ln,er);break;case 3:if(Vr(n,i),(i&130023424)===i&&(e=ev+500-Ot(),10<e)){if(Ih(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=hg(Ns.bind(null,n,Ln,er),e);break}Ns(n,Ln,er);break;case 4:if(Vr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*MR(i/1960))-i,10<i){n.timeoutHandle=hg(Ns.bind(null,n,Ln,er),i);break}Ns(n,Ln,er);break;case 5:Ns(n,Ln,er);break;default:throw Error(se(329))}}}return On(n,Ot()),n.callbackNode===t?rb.bind(null,n):null}function Ig(n,e){var t=Pl;return n.current.memoizedState.isDehydrated&&(qs(n,e).flags|=256),n=$h(n,e),n!==2&&(e=Ln,Ln=t,e!==null&&Lg(e)),n}function Lg(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function wR(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!wi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(n,e){for(e&=~Q0,e&=~rf,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Si(e),i=1<<t;n[t]=-1,e&=~i}}function Hx(n){if(at&6)throw Error(se(327));pa();var e=Ih(n,0);if(!(e&1))return On(n,Ot()),null;var t=$h(n,e);if(n.tag!==0&&t===2){var i=ig(n);i!==0&&(e=i,t=Ig(n,i))}if(t===1)throw t=oc,qs(n,0),Vr(n,e),On(n,Ot()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ns(n,Ln,er),On(n,Ot()),null}function tv(n,e){var t=at;at|=1;try{return n(e)}finally{at=t,at===0&&(wa=Ot()+500,Qd&&us())}}function ro(n){Wr!==null&&Wr.tag===0&&!(at&6)&&pa();var e=at;at|=1;var t=li.transition,i=pt;try{if(li.transition=null,pt=1,n)return n()}finally{pt=i,li.transition=t,at=e,!(at&6)&&us()}}function nv(){Wn=Jo.current,wt(Jo)}function qs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Q2(t)),zt!==null)for(t=zt.return;t!==null;){var i=t;switch(k0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kh();break;case 3:Sa(),wt(kn),wt(pn),j0();break;case 5:W0(i);break;case 4:Sa();break;case 13:wt(Tt);break;case 19:wt(Tt);break;case 10:z0(i.type._context);break;case 22:case 23:nv()}t=t.return}if($t=n,zt=n=Qr(n.current,null),Qt=Wn=e,Gt=0,oc=null,Q0=rf=io=0,Ln=Pl=null,zs!==null){for(e=0;e<zs.length;e++)if(t=zs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}zs=null}return n}function sb(n,e){do{var t=zt;try{if(B0(),gh.current=jh,Wh){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wh=!1}if(no=0,Yt=Ht=Ct=null,Cl=!1,ic=0,J0.current=null,t===null||t.return===null){Gt=1,oc=e,zt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Rx(o);if(p!==null){p.flags&=-257,Px(p,o,a,s,e),p.mode&1&&Cx(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Cx(s,c,e),iv();break e}l=Error(se(426))}}else if(bt&&a.mode&1){var m=Rx(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Px(m,o,a,s,e),F0(Ma(l,a));break e}}s=l=Ma(l,a),Gt!==4&&(Gt=2),Pl===null?Pl=[s]:Pl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Hw(s,l,e);Mx(s,f);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Kr===null||!Kr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Gw(s,a,e);Mx(s,_);break e}}s=s.return}while(s!==null)}lb(t)}catch(T){e=T,zt===t&&t!==null&&(zt=t=t.return);continue}break}while(!0)}function ob(){var n=Xh.current;return Xh.current=jh,n===null?jh:n}function iv(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),$t===null||!(io&268435455)&&!(rf&268435455)||Vr($t,Qt)}function $h(n,e){var t=at;at|=2;var i=ob();($t!==n||Qt!==e)&&(er=null,qs(n,e));do try{bR();break}catch(r){sb(n,r)}while(!0);if(B0(),at=t,Xh.current=i,zt!==null)throw Error(se(261));return $t=null,Qt=0,Gt}function bR(){for(;zt!==null;)ab(zt)}function TR(){for(;zt!==null&&!ZC();)ab(zt)}function ab(n){var e=ub(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,e===null?lb(n):zt=e,J0.current=null}function lb(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=yR(t,e),t!==null){t.flags&=32767,zt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Gt=6,zt=null;return}}else if(t=vR(t,e,Wn),t!==null){zt=t;return}if(e=e.sibling,e!==null){zt=e;return}zt=e=n}while(e!==null);Gt===0&&(Gt=5)}function Ns(n,e,t){var i=pt,r=li.transition;try{li.transition=null,pt=1,ER(n,e,t,i)}finally{li.transition=r,pt=i}return null}function ER(n,e,t,i){do pa();while(Wr!==null);if(at&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(o2(n,s),n===$t&&(zt=$t=null,Qt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||du||(du=!0,hb(Ph,function(){return pa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=li.transition,li.transition=null;var o=pt;pt=1;var a=at;at|=4,J0.current=null,_R(n,t),nb(t,n),X2(cg),Lh=!!lg,cg=lg=null,n.current=t,SR(t),KC(),at=a,pt=o,li.transition=s}else n.current=t;if(du&&(du=!1,Wr=n,Yh=r),s=n.pendingLanes,s===0&&(Kr=null),e2(t.stateNode),On(n,Ot()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(qh)throw qh=!1,n=Rg,Rg=null,n;return Yh&1&&n.tag!==0&&pa(),s=n.pendingLanes,s&1?n===Pg?Il++:(Il=0,Pg=n):Il=0,us(),null}function pa(){if(Wr!==null){var n=HM(Yh),e=li.transition,t=pt;try{if(li.transition=null,pt=16>n?16:n,Wr===null)var i=!1;else{if(n=Wr,Wr=null,Yh=0,at&6)throw Error(se(331));var r=at;for(at|=4,be=n.current;be!==null;){var s=be,o=s.child;if(be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:Rl(8,u,s)}var h=u.child;if(h!==null)h.return=u,be=h;else for(;be!==null;){u=be;var d=u.sibling,p=u.return;if(Qw(u),u===c){be=null;break}if(d!==null){d.return=p,be=d;break}be=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Rl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,be=f;break e}be=s.return}}var v=n.current;for(be=v;be!==null;){o=be;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,be=y;else e:for(o=v;be!==null;){if(a=be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nf(9,a)}}catch(T){Lt(a,a.return,T)}if(a===o){be=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,be=_;break e}be=a.return}}if(at=r,us(),ki&&typeof ki.onPostCommitFiberRoot=="function")try{ki.onPostCommitFiberRoot(Yd,n)}catch{}i=!0}return i}finally{pt=t,li.transition=e}}return!1}function Gx(n,e,t){e=Ma(t,e),e=Hw(n,e,1),n=Zr(n,e,1),e=Sn(),n!==null&&(Ic(n,1,e),On(n,e))}function Lt(n,e,t){if(n.tag===3)Gx(n,n,t);else for(;e!==null;){if(e.tag===3){Gx(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kr===null||!Kr.has(i))){n=Ma(t,n),n=Gw(e,n,1),e=Zr(e,n,1),n=Sn(),e!==null&&(Ic(e,1,n),On(e,n));break}}e=e.return}}function AR(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Sn(),n.pingedLanes|=n.suspendedLanes&t,$t===n&&(Qt&t)===t&&(Gt===4||Gt===3&&(Qt&130023424)===Qt&&500>Ot()-ev?qs(n,0):Q0|=t),On(n,e)}function cb(n,e){e===0&&(n.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var t=Sn();n=yr(n,e),n!==null&&(Ic(n,e,t),On(n,t))}function CR(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),cb(n,t)}function RR(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),cb(n,t)}var ub;ub=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||kn.current)Dn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Dn=!1,gR(n,e,t);Dn=!!(n.flags&131072)}else Dn=!1,bt&&e.flags&1048576&&pw(e,Bh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yh(n,e),n=e.pendingProps;var r=ya(e,pn.current);fa(e,t),r=q0(null,e,i,n,r,t);var s=Y0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fn(i)?(s=!0,Fh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,H0(e),r.updater=tf,e.stateNode=r,r._reactInternals=e,yg(e,i,n,t),e=Sg(null,e,i,!0,s,t)):(e.tag=0,bt&&s&&U0(e),yn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(yh(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=IR(i),n=vi(i,n),r){case 0:e=_g(null,e,i,n,t);break e;case 1:e=Nx(null,e,i,n,t);break e;case 11:e=Ix(null,e,i,n,t);break e;case 14:e=Lx(null,e,i,vi(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),_g(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Nx(n,e,i,r,t);case 3:e:{if(qw(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_w(n,e),Hh(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ma(Error(se(423)),e),e=Dx(n,e,i,t,r);break e}else if(i!==r){r=Ma(Error(se(424)),e),e=Dx(n,e,i,t,r);break e}else for(jn=$r(e.stateNode.containerInfo.firstChild),Xn=e,bt=!0,xi=null,t=yw(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xa(),i===r){e=xr(n,e,t);break e}yn(n,e,i,t)}e=e.child}return e;case 5:return Sw(e),n===null&&mg(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ug(i,r)?o=null:s!==null&&ug(i,s)&&(e.flags|=32),Xw(n,e),yn(n,e,o,t),e.child;case 6:return n===null&&mg(e),null;case 13:return Yw(n,e,t);case 4:return G0(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=_a(e,null,i,t):yn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Ix(n,e,i,r,t);case 7:return yn(n,e,e.pendingProps,t),e.child;case 8:return yn(n,e,e.pendingProps.children,t),e.child;case 12:return yn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(zh,i._currentValue),i._currentValue=o,s!==null)if(wi(s.value,o)){if(s.children===r.children&&!kn.current){e=xr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=lr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),gg(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),gg(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fa(e,t),r=ci(r),i=i(r),e.flags|=1,yn(n,e,i,t),e.child;case 14:return i=e.type,r=vi(i,e.pendingProps),r=vi(i.type,r),Lx(n,e,i,r,t);case 15:return Ww(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),yh(n,e),e.tag=1,Fn(i)?(n=!0,Fh(e)):n=!1,fa(e,t),Vw(e,i,r),yg(e,i,r,t),Sg(null,e,i,!0,n,t);case 19:return $w(n,e,t);case 22:return jw(n,e,t)}throw Error(se(156,e.tag))};function hb(n,e){return OM(n,e)}function PR(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,e,t,i){return new PR(n,e,t,i)}function rv(n){return n=n.prototype,!(!n||!n.isReactComponent)}function IR(n){if(typeof n=="function")return rv(n)?1:0;if(n!=null){if(n=n.$$typeof,n===w0)return 11;if(n===b0)return 14}return 2}function Qr(n,e){var t=n.alternate;return t===null?(t=oi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Sh(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")rv(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ho:return Ys(t.children,r,s,e);case M0:o=8,r|=8;break;case Hm:return n=oi(12,t,e,r|2),n.elementType=Hm,n.lanes=s,n;case Gm:return n=oi(13,t,e,r),n.elementType=Gm,n.lanes=s,n;case Wm:return n=oi(19,t,e,r),n.elementType=Wm,n.lanes=s,n;case SM:return sf(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case xM:o=10;break e;case _M:o=9;break e;case w0:o=11;break e;case b0:o=14;break e;case Fr:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=oi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ys(n,e,t,i){return n=oi(7,n,i,e),n.lanes=t,n}function sf(n,e,t,i){return n=oi(22,n,i,e),n.elementType=SM,n.lanes=t,n.stateNode={isHidden:!1},n}function kp(n,e,t){return n=oi(6,n,null,e),n.lanes=t,n}function Fp(n,e,t){return e=oi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function LR(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vp(0),this.expirationTimes=vp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vp(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sv(n,e,t,i,r,s,o,a,l){return n=new LR(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=oi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},H0(s),n}function NR(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vo,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function db(n){if(!n)return ns;n=n._reactInternals;e:{if(ho(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(Fn(t))return dw(n,t,e)}return e}function fb(n,e,t,i,r,s,o,a,l){return n=sv(t,i,!0,n,r,s,o,a,l),n.context=db(null),t=n.current,i=Sn(),r=Jr(t),s=lr(i,r),s.callback=e??null,Zr(t,s,r),n.current.lanes=r,Ic(n,r,i),On(n,i),n}function of(n,e,t,i){var r=e.current,s=Sn(),o=Jr(r);return t=db(t),e.context===null?e.context=t:e.pendingContext=t,e=lr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Zr(r,e,o),n!==null&&(Mi(n,r,o,s),mh(n,r,o)),o}function Zh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wx(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ov(n,e){Wx(n,e),(n=n.alternate)&&Wx(n,e)}function DR(){return null}var pb=typeof reportError=="function"?reportError:function(n){console.error(n)};function av(n){this._internalRoot=n}af.prototype.render=av.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));of(n,e,null,null)};af.prototype.unmount=av.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ro(function(){of(null,n,null,null)}),e[vr]=null}};function af(n){this._internalRoot=n}af.prototype.unstable_scheduleHydration=function(n){if(n){var e=jM();n={blockedOn:null,target:n,priority:e};for(var t=0;t<zr.length&&e!==0&&e<zr[t].priority;t++);zr.splice(t,0,n),t===0&&qM(n)}};function lv(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jx(){}function UR(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Zh(o);s.call(c)}}var o=fb(e,i,n,0,null,!1,!1,"",jx);return n._reactRootContainer=o,n[vr]=o.current,Jl(n.nodeType===8?n.parentNode:n),ro(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Zh(l);a.call(c)}}var l=sv(n,0,!1,null,null,!1,!1,"",jx);return n._reactRootContainer=l,n[vr]=l.current,Jl(n.nodeType===8?n.parentNode:n),ro(function(){of(e,l,t,i)}),l}function cf(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zh(o);a.call(l)}}of(e,o,n,r)}else o=UR(t,e,n,r,i);return Zh(o)}GM=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=gl(e.pendingLanes);t!==0&&(A0(e,t|1),On(e,Ot()),!(at&6)&&(wa=Ot()+500,us()))}break;case 13:ro(function(){var i=yr(n,1);if(i!==null){var r=Sn();Mi(i,n,1,r)}}),ov(n,1)}};C0=function(n){if(n.tag===13){var e=yr(n,134217728);if(e!==null){var t=Sn();Mi(e,n,134217728,t)}ov(n,134217728)}};WM=function(n){if(n.tag===13){var e=Jr(n),t=yr(n,e);if(t!==null){var i=Sn();Mi(t,n,e,i)}ov(n,e)}};jM=function(){return pt};XM=function(n,e){var t=pt;try{return pt=n,e()}finally{pt=t}};eg=function(n,e,t){switch(e){case"input":if(qm(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Jd(i);if(!r)throw Error(se(90));wM(i),qm(i,r)}}}break;case"textarea":TM(n,t);break;case"select":e=t.value,e!=null&&ca(n,!!t.multiple,e,!1)}};LM=tv;NM=ro;var kR={usingClientEntryPoint:!1,Events:[Nc,Xo,Jd,PM,IM,tv]},Ja={findFiberByHostInstance:Bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FR={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=kM(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||DR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Yd=fu.inject(FR),ki=fu}catch{}}Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kR;Kn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lv(e))throw Error(se(200));return NR(n,e,null,t)};Kn.createRoot=function(n,e){if(!lv(n))throw Error(se(299));var t=!1,i="",r=pb;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sv(n,1,!1,null,null,t,!1,i,r),n[vr]=e.current,Jl(n.nodeType===8?n.parentNode:n),new av(e)};Kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=kM(e),n=n===null?null:n.stateNode,n};Kn.flushSync=function(n){return ro(n)};Kn.hydrate=function(n,e,t){if(!lf(e))throw Error(se(200));return cf(null,n,e,!0,t)};Kn.hydrateRoot=function(n,e,t){if(!lv(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=pb;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=fb(e,null,n,1,t??null,r,!1,s,o),n[vr]=e.current,Jl(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new af(e)};Kn.render=function(n,e,t){if(!lf(e))throw Error(se(200));return cf(null,n,e,!1,t)};Kn.unmountComponentAtNode=function(n){if(!lf(n))throw Error(se(40));return n._reactRootContainer?(ro(function(){cf(null,null,n,!1,function(){n._reactRootContainer=null,n[vr]=null})}),!0):!1};Kn.unstable_batchedUpdates=tv;Kn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!lf(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return cf(n,e,t,!1,i)};Kn.version="18.3.1-next-f1338f8080-20240426";function mb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mb)}catch(n){console.error(n)}}mb(),mM.exports=Kn;var OR=mM.exports,Xx=OR;zm.createRoot=Xx.createRoot,zm.hydrateRoot=Xx.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ac(){return ac=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ac.apply(this,arguments)}var jr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(jr||(jr={}));const qx="popstate";function BR(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ng("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Kh(r)}return VR(e,t,null,n)}function Dt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function gb(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zR(){return Math.random().toString(36).substr(2,8)}function Yx(n,e){return{usr:n.state,key:n.key,idx:e}}function Ng(n,e,t,i){return t===void 0&&(t=null),ac({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ua(e):e,{state:t,key:e&&e.key||i||zR()})}function Kh(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ua(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function VR(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=jr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(ac({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=jr.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:a,location:x.location,delta:f})}function d(m,f){a=jr.Push;let v=Ng(x.location,m,f);c=u()+1;let y=Yx(v,c),_=x.createHref(v);try{o.pushState(y,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(_)}s&&l&&l({action:a,location:x.location,delta:1})}function p(m,f){a=jr.Replace;let v=Ng(x.location,m,f);c=u();let y=Yx(v,c),_=x.createHref(v);o.replaceState(y,"",_),s&&l&&l({action:a,location:x.location,delta:0})}function g(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Kh(m);return v=v.replace(/ $/,"%20"),Dt(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let x={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(qx,h),l=m,()=>{r.removeEventListener(qx,h),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let f=g(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:p,go(m){return o.go(m)}};return x}var $x;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})($x||($x={}));function HR(n,e,t){return t===void 0&&(t="/"),GR(n,e,t,!1)}function GR(n,e,t,i){let r=typeof e=="string"?Ua(e):e,s=ba(r.pathname||"/",t);if(s==null)return null;let o=vb(n);WR(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=tP(s);a=QR(o[l],c,i)}return a}function vb(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Dt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=es([i,l.relativePath]),u=t.concat(l);s.children&&s.children.length>0&&(Dt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),vb(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:KR(c,s.index),routesMeta:u})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of yb(s.path))r(s,o,l)}),e}function yb(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=yb(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function WR(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:JR(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const jR=/^:[\w-]+$/,XR=3,qR=2,YR=1,$R=10,ZR=-2,Zx=n=>n==="*";function KR(n,e){let t=n.split("/"),i=t.length;return t.some(Zx)&&(i+=ZR),e&&(i+=qR),t.filter(r=>!Zx(r)).reduce((r,s)=>r+(jR.test(s)?XR:s===""?YR:$R),i)}function JR(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function QR(n,e,t){let{routesMeta:i}=n,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",h=Jh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!h&&c&&t&&!i[i.length-1].route.index&&(h=Jh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:es([s,h.pathname]),pathnameBase:sP(es([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=es([s,h.pathnameBase]))}return o}function Jh(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=eP(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,h)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[h];return p&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:n}}function eP(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),gb(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function tP(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gb(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function ba(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function nP(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Ua(n):n;return{pathname:t?t.startsWith("/")?t:iP(t,e):e,search:oP(i),hash:aP(r)}}function iP(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Op(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rP(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function xb(n,e){let t=rP(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function _b(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=Ua(n):(r=ac({},n),Dt(!r.pathname||!r.pathname.includes("?"),Op("?","pathname","search",r)),Dt(!r.pathname||!r.pathname.includes("#"),Op("#","pathname","hash",r)),Dt(!r.search||!r.search.includes("#"),Op("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=t;else{let h=e.length-1;if(!i&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=nP(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const es=n=>n.join("/").replace(/\/\/+/g,"/"),sP=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),oP=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,aP=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lP(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Sb=["post","put","patch","delete"];new Set(Sb);const cP=["get",...Sb];new Set(cP);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},lc.apply(this,arguments)}const uf=z.createContext(null),Mb=z.createContext(null),hs=z.createContext(null),hf=z.createContext(null),fo=z.createContext({outlet:null,matches:[],isDataRoute:!1}),wb=z.createContext(null);function uP(n,e){let{relative:t}=e===void 0?{}:e;Uc()||Dt(!1);let{basename:i,navigator:r}=z.useContext(hs),{hash:s,pathname:o,search:a}=ff(n,{relative:t}),l=o;return i!=="/"&&(l=o==="/"?i:es([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Uc(){return z.useContext(hf)!=null}function po(){return Uc()||Dt(!1),z.useContext(hf).location}function bb(n){z.useContext(hs).static||z.useLayoutEffect(n)}function df(){let{isDataRoute:n}=z.useContext(fo);return n?wP():hP()}function hP(){Uc()||Dt(!1);let n=z.useContext(uf),{basename:e,future:t,navigator:i}=z.useContext(hs),{matches:r}=z.useContext(fo),{pathname:s}=po(),o=JSON.stringify(xb(r,t.v7_relativeSplatPath)),a=z.useRef(!1);return bb(()=>{a.current=!0}),z.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let h=_b(c,JSON.parse(o),s,u.relative==="path");n==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:es([e,h.pathname])),(u.replace?i.replace:i.push)(h,u.state,u)},[e,i,o,s,n])}function ff(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=z.useContext(hs),{matches:r}=z.useContext(fo),{pathname:s}=po(),o=JSON.stringify(xb(r,i.v7_relativeSplatPath));return z.useMemo(()=>_b(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function dP(n,e){return fP(n,e)}function fP(n,e,t,i){Uc()||Dt(!1);let{navigator:r}=z.useContext(hs),{matches:s}=z.useContext(fo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=po(),u;if(e){var h;let m=typeof e=="string"?Ua(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Dt(!1),u=m}else u=c;let d=u.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=HR(n,{pathname:p}),x=yP(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:es([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:es([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,i);return e&&x?z.createElement(hf.Provider,{value:{location:lc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:jr.Pop}},x):x}function pP(){let n=MP(),e=lP(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:r},t):null,null)}const mP=z.createElement(pP,null);class gP extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?z.createElement(fo.Provider,{value:this.props.routeContext},z.createElement(wb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vP(n){let{routeContext:e,match:t,children:i}=n,r=z.useContext(uf);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),z.createElement(fo.Provider,{value:e},i)}function yP(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=(r=t)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||Dt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(t&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let h=o[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:d,errors:p}=t,g=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,h,d)=>{let p,g=!1,x=null,m=null;t&&(p=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||mP,l&&(c<0&&d===0?(g=!0,m=null):c===d&&(g=!0,m=h.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,d+1)),v=()=>{let y;return p?y=x:g?y=m:h.route.Component?y=z.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=u,z.createElement(vP,{match:h,routeContext:{outlet:u,matches:f,isDataRoute:t!=null},children:y})};return t&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?z.createElement(gP,{location:t.location,revalidation:t.revalidation,component:x,error:p,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var Tb=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Tb||{}),Qh=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Qh||{});function xP(n){let e=z.useContext(uf);return e||Dt(!1),e}function _P(n){let e=z.useContext(Mb);return e||Dt(!1),e}function SP(n){let e=z.useContext(fo);return e||Dt(!1),e}function Eb(n){let e=SP(),t=e.matches[e.matches.length-1];return t.route.id||Dt(!1),t.route.id}function MP(){var n;let e=z.useContext(wb),t=_P(Qh.UseRouteError),i=Eb(Qh.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function wP(){let{router:n}=xP(Tb.UseNavigateStable),e=Eb(Qh.UseNavigateStable),t=z.useRef(!1);return bb(()=>{t.current=!0}),z.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,lc({fromRouteId:e},s)))},[n,e])}const Kx={};function bP(n,e){Kx[e]||(Kx[e]=!0,console.warn(e))}const Jx=(n,e,t)=>bP(n,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+n+"` future flag to opt-in early. ")+("For more information, see "+t+"."));function TP(n,e){n!=null&&n.v7_startTransition||Jx("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(n!=null&&n.v7_relativeSplatPath)&&!e&&Jx("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Rn(n){Dt(!1)}function EP(n){let{basename:e="/",children:t=null,location:i,navigationType:r=jr.Pop,navigator:s,static:o=!1,future:a}=n;Uc()&&Dt(!1);let l=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:l,navigator:s,static:o,future:lc({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Ua(i));let{pathname:u="/",search:h="",hash:d="",state:p=null,key:g="default"}=i,x=z.useMemo(()=>{let m=ba(u,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:p,key:g},navigationType:r}},[l,u,h,d,p,g,r]);return x==null?null:z.createElement(hs.Provider,{value:c},z.createElement(hf.Provider,{children:t,value:x}))}function AP(n){let{children:e,location:t}=n;return dP(Dg(e),t)}new Promise(()=>{});function Dg(n,e){e===void 0&&(e=[]);let t=[];return z.Children.forEach(n,(i,r)=>{if(!z.isValidElement(i))return;let s=[...e,r];if(i.type===z.Fragment){t.push.apply(t,Dg(i.props.children,s));return}i.type!==Rn&&Dt(!1),!i.props.index||!i.props.children||Dt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Dg(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ed(){return ed=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ed.apply(this,arguments)}function Ab(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function CP(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function RP(n,e){return n.button===0&&(!e||e==="_self")&&!CP(n)}const PP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],IP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],LP="6";try{window.__reactRouterVersion=LP}catch{}const NP=z.createContext({isTransitioning:!1}),DP="startTransition",Qx=AC[DP];function UP(n){let{basename:e,children:t,future:i,window:r}=n,s=z.useRef();s.current==null&&(s.current=BR({window:r,v5Compat:!0}));let o=s.current,[a,l]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=z.useCallback(h=>{c&&Qx?Qx(()=>l(h)):l(h)},[l,c]);return z.useLayoutEffect(()=>o.listen(u),[o,u]),z.useEffect(()=>TP(i),[i]),z.createElement(EP,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:i})}const kP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mo=z.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:h}=e,d=Ab(e,PP),{basename:p}=z.useContext(hs),g,x=!1;if(typeof c=="string"&&FP.test(c)&&(g=c,kP))try{let y=new URL(window.location.href),_=c.startsWith("//")?new URL(y.protocol+c):new URL(c),T=ba(_.pathname,p);_.origin===y.origin&&T!=null?c=T+_.search+_.hash:x=!0}catch{}let m=uP(c,{relative:r}),f=BP(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:h});function v(y){i&&i(y),y.defaultPrevented||f(y)}return z.createElement("a",ed({},d,{href:g||m,onClick:x||s?i:v,ref:t,target:l}))}),Qa=z.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:u}=e,h=Ab(e,IP),d=ff(l,{relative:h.relative}),p=po(),g=z.useContext(Mb),{navigator:x,basename:m}=z.useContext(hs),f=g!=null&&zP(d)&&c===!0,v=x.encodeLocation?x.encodeLocation(d).pathname:d.pathname,y=p.pathname,_=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(y=y.toLowerCase(),_=_?_.toLowerCase():null,v=v.toLowerCase()),_&&m&&(_=ba(_,m)||_);const T=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let w=y===v||!o&&y.startsWith(v)&&y.charAt(T)==="/",A=_!=null&&(_===v||!o&&_.startsWith(v)&&_.charAt(v.length)==="/"),C={isActive:w,isPending:A,isTransitioning:f},b=w?i:void 0,M;typeof s=="function"?M=s(C):M=[s,w?"active":null,A?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(C):a;return z.createElement(mo,ed({},h,{"aria-current":b,className:M,ref:t,style:L,to:l,viewTransition:c}),typeof u=="function"?u(C):u)});var Ug;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ug||(Ug={}));var e_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(e_||(e_={}));function OP(n){let e=z.useContext(uf);return e||Dt(!1),e}function BP(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=df(),c=po(),u=ff(n,{relative:o});return z.useCallback(h=>{if(RP(h,t)){h.preventDefault();let d=i!==void 0?i:Kh(c)===Kh(u);l(n,{replace:d,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,t,n,s,o,a])}function zP(n,e){e===void 0&&(e={});let t=z.useContext(NP);t==null&&Dt(!1);let{basename:i}=OP(Ug.useViewTransitionState),r=ff(n,{relative:e.relative});if(!t.isTransitioning)return!1;let s=ba(t.currentLocation.pathname,i)||t.currentLocation.pathname,o=ba(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Jh(r.pathname,o)!=null||Jh(r.pathname,s)!=null}function VP(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,r)=>r==="create"?n:(e.has(r)||e.set(r,n(r)),e.get(r))})}function pf(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const kg=n=>Array.isArray(n);function Cb(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function cc(n){return typeof n=="string"||Array.isArray(n)}function t_(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function cv(n,e,t,i){if(typeof e=="function"){const[r,s]=t_(i);e=e(t!==void 0?t:n.custom,r,s)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[r,s]=t_(i);e=e(t!==void 0?t:n.custom,r,s)}return e}function mf(n,e,t){const i=n.getProps();return cv(i,e,t!==void 0?t:i.custom,n)}const uv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],hv=["initial",...uv],kc=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],go=new Set(kc),cr=n=>n*1e3,ur=n=>n/1e3,HP={type:"spring",stiffness:500,damping:25,restSpeed:10},GP=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),WP={type:"keyframes",duration:.8},jP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XP=(n,{keyframes:e})=>e.length>2?WP:go.has(n)?n.startsWith("scale")?GP(e[1]):HP:jP;function dv(n,e){return n?n[e]||n.default||n:void 0}const qP={skipAnimations:!1,useManualTiming:!1},YP=n=>n!==null;function gf(n,{repeat:e,repeatType:t="loop"},i){const r=n.filter(YP),s=e&&t!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const dn=n=>n;function $P(n){let e=new Set,t=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),n()),c(o)}const l={schedule:(c,u=!1,h=!1)=>{const p=h&&i?e:t;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{t.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,t]=[t,e],t.clear(),e.forEach(a),i=!1,r&&(r=!1,l.process(c))}};return l}const pu=["read","resolveKeyframes","update","preRender","render","postRender"],ZP=40;function Rb(n,e){let t=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>t=!0,o=pu.reduce((f,v)=>(f[v]=$P(s),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:d}=o,p=()=>{const f=performance.now();t=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,ZP),1),r.timestamp=f,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),h.process(r),d.process(r),r.isProcessing=!1,t&&e&&(i=!1,n(p))},g=()=>{t=!0,i=!0,r.isProcessing||n(p)};return{schedule:pu.reduce((f,v)=>{const y=o[v];return f[v]=(_,T=!1,w=!1)=>(t||g(),y.schedule(_,T,w)),f},{}),cancel:f=>{for(let v=0;v<pu.length;v++)o[pu[v]].cancel(f)},state:r,steps:o}}const{schedule:mt,cancel:is,state:Kt,steps:Bp}=Rb(typeof requestAnimationFrame<"u"?requestAnimationFrame:dn,!0),Pb=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,KP=1e-7,JP=12;function QP(n,e,t,i,r){let s,o,a=0;do o=e+(t-e)/2,s=Pb(o,i,r)-n,s>0?t=o:e=o;while(Math.abs(s)>KP&&++a<JP);return o}function Fc(n,e,t,i){if(n===e&&t===i)return dn;const r=s=>QP(s,0,1,n,t);return s=>s===0||s===1?s:Pb(r(s),e,i)}const Ib=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Lb=n=>e=>1-n(1-e),Nb=Fc(.33,1.53,.69,.99),fv=Lb(Nb),Db=Ib(fv),Ub=n=>(n*=2)<1?.5*fv(n):.5*(2-Math.pow(2,-10*(n-1))),pv=n=>1-Math.sin(Math.acos(n)),kb=Lb(pv),Fb=Ib(pv),Ob=n=>/^0[^.\s]+$/u.test(n);function e3(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ob(n):!0}let Fg=dn;const Bb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),zb=n=>e=>typeof e=="string"&&e.startsWith(n),Vb=zb("--"),t3=zb("var(--"),mv=n=>t3(n)?n3.test(n.split("/*")[0].trim()):!1,n3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,i3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function r3(n){const e=i3.exec(n);if(!e)return[,];const[,t,i,r]=e;return[`--${t??i}`,r]}function Hb(n,e,t=1){const[i,r]=r3(n);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Bb(o)?parseFloat(o):o}return mv(r)?Hb(r,e,t+1):r}const rs=(n,e,t)=>t>e?e:t<n?n:t,ka={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},uc={...ka,transform:n=>rs(0,1,n)},mu={...ka,default:1},Oc=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),kr=Oc("deg"),Oi=Oc("%"),Oe=Oc("px"),s3=Oc("vh"),o3=Oc("vw"),n_={...Oi,parse:n=>Oi.parse(n)/100,transform:n=>Oi.transform(n*100)},a3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),i_=n=>n===ka||n===Oe,r_=(n,e)=>parseFloat(n.split(", ")[e]),s_=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return r_(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?r_(s[1],n):0}},l3=new Set(["x","y","z"]),c3=kc.filter(n=>!l3.has(n));function u3(n){const e=[];return c3.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const Ta={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:s_(4,13),y:s_(5,14)};Ta.translateX=Ta.x;Ta.translateY=Ta.y;const Gb=n=>e=>e.test(n),h3={test:n=>n==="auto",parse:n=>n},Wb=[ka,Oe,Oi,kr,o3,s3,h3],o_=n=>Wb.find(Gb(n)),$s=new Set;let Og=!1,Bg=!1;function jb(){if(Bg){const n=Array.from($s).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const r=u3(i);r.length&&(t.set(i,r),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=t.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Bg=!1,Og=!1,$s.forEach(n=>n.complete()),$s.clear()}function Xb(){$s.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Bg=!0)})}function d3(){Xb(),jb()}class gv{constructor(e,t,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?($s.add(this),Og||(Og=!0,mt.read(Xb),mt.resolveKeyframes(jb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&t){const l=i.readValue(t,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),$s.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,$s.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ll=n=>Math.round(n*1e5)/1e5,vv=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function f3(n){return n==null}const p3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yv=(n,e)=>t=>!!(typeof t=="string"&&p3.test(t)&&t.startsWith(n)||e&&!f3(t)&&Object.prototype.hasOwnProperty.call(t,e)),qb=(n,e,t)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(vv);return{[n]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},m3=n=>rs(0,255,n),zp={...ka,transform:n=>Math.round(m3(n))},Hs={test:yv("rgb","red"),parse:qb("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+zp.transform(n)+", "+zp.transform(e)+", "+zp.transform(t)+", "+Ll(uc.transform(i))+")"};function g3(n){let e="",t="",i="",r="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),r=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),r=n.substring(4,5),e+=e,t+=t,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const zg={test:yv("#"),parse:g3,transform:Hs.transform},Qo={test:yv("hsl","hue"),parse:qb("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Oi.transform(Ll(e))+", "+Oi.transform(Ll(t))+", "+Ll(uc.transform(i))+")"},cn={test:n=>Hs.test(n)||zg.test(n)||Qo.test(n),parse:n=>Hs.test(n)?Hs.parse(n):Qo.test(n)?Qo.parse(n):zg.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Hs.transform(n):Qo.transform(n)},v3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function y3(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(vv))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(v3))===null||t===void 0?void 0:t.length)||0)>0}const Yb="number",$b="color",x3="var",_3="var(",a_="${}",S3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hc(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(S3,l=>(cn.test(l)?(i.color.push(s),r.push($b),t.push(cn.parse(l))):l.startsWith(_3)?(i.var.push(s),r.push(x3),t.push(l)):(i.number.push(s),r.push(Yb),t.push(parseFloat(l))),++s,a_)).split(a_);return{values:t,split:a,indexes:i,types:r}}function Zb(n){return hc(n).values}function Kb(n){const{split:e,types:t}=hc(n),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=t[o];a===Yb?s+=Ll(r[o]):a===$b?s+=cn.transform(r[o]):s+=r[o]}return s}}const M3=n=>typeof n=="number"?0:n;function w3(n){const e=Zb(n);return Kb(n)(e.map(M3))}const ss={test:y3,parse:Zb,createTransformer:Kb,getAnimatableNone:w3},b3=new Set(["brightness","contrast","saturate","opacity"]);function T3(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(vv)||[];if(!i)return n;const r=t.replace(i,"");let s=b3.has(e)?1:0;return i!==t&&(s*=100),e+"("+s+r+")"}const E3=/\b([a-z-]*)\(.*?\)/gu,Vg={...ss,getAnimatableNone:n=>{const e=n.match(E3);return e?e.map(T3).join(" "):n}},A3={borderWidth:Oe,borderTopWidth:Oe,borderRightWidth:Oe,borderBottomWidth:Oe,borderLeftWidth:Oe,borderRadius:Oe,radius:Oe,borderTopLeftRadius:Oe,borderTopRightRadius:Oe,borderBottomRightRadius:Oe,borderBottomLeftRadius:Oe,width:Oe,maxWidth:Oe,height:Oe,maxHeight:Oe,top:Oe,right:Oe,bottom:Oe,left:Oe,padding:Oe,paddingTop:Oe,paddingRight:Oe,paddingBottom:Oe,paddingLeft:Oe,margin:Oe,marginTop:Oe,marginRight:Oe,marginBottom:Oe,marginLeft:Oe,backgroundPositionX:Oe,backgroundPositionY:Oe},C3={rotate:kr,rotateX:kr,rotateY:kr,rotateZ:kr,scale:mu,scaleX:mu,scaleY:mu,scaleZ:mu,skew:kr,skewX:kr,skewY:kr,distance:Oe,translateX:Oe,translateY:Oe,translateZ:Oe,x:Oe,y:Oe,z:Oe,perspective:Oe,transformPerspective:Oe,opacity:uc,originX:n_,originY:n_,originZ:Oe},l_={...ka,transform:Math.round},xv={...A3,...C3,zIndex:l_,size:Oe,fillOpacity:uc,strokeOpacity:uc,numOctaves:l_},R3={...xv,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:Vg,WebkitFilter:Vg},_v=n=>R3[n];function Jb(n,e){let t=_v(n);return t!==Vg&&(t=ss),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const P3=new Set(["auto","none","0"]);function I3(n,e,t){let i=0,r;for(;i<n.length&&!r;){const s=n[i];typeof s=="string"&&!P3.has(s)&&hc(s).values.length&&(r=n[i]),i++}if(r&&t)for(const s of e)n[s]=Jb(t,r)}class Qb extends gv{constructor(e,t,i,r,s){super(e,t,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),mv(c))){const u=Hb(c,t.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!a3.has(i)||e.length!==2)return;const[r,s]=e,o=o_(r),a=o_(s);if(o!==a)if(i_(o)&&i_(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let r=0;r<e.length;r++)e3(e[r])&&i.push(r);i.length&&I3(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ta[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const s=t.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=Ta[i](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Sv(n){return typeof n=="function"}let Mh;function L3(){Mh=void 0}const Bi={now:()=>(Mh===void 0&&Bi.set(Kt.isProcessing||qP.useManualTiming?Kt.timestamp:performance.now()),Mh),set:n=>{Mh=n,queueMicrotask(L3)}},c_=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ss.test(n)||n==="0")&&!n.startsWith("url("));function N3(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function D3(n,e,t,i){const r=n[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=n[n.length-1],o=c_(r,e),a=c_(s,e);return!o||!a?!1:N3(n)||(t==="spring"||Sv(t))&&i}const U3=40;class eT{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Bi.now(),this.options={autoplay:e,delay:t,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>U3?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&d3(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Bi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!D3(e,i,r,s))if(o)this.options.duration=0;else{l==null||l(gf(e,this.options,t)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,t);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function tT(n,e){return e?n*(1e3/e):0}const k3=5;function nT(n,e,t){const i=Math.max(e-k3,0);return tT(t-n(i),e-i)}const Vp=.001,F3=.01,O3=10,B3=.05,z3=1;function V3({duration:n=800,bounce:e=.25,velocity:t=0,mass:i=1}){let r,s,o=1-e;o=rs(B3,z3,o),n=rs(F3,O3,ur(n)),o<1?(r=c=>{const u=c*o,h=u*n,d=u-t,p=Hg(c,o),g=Math.exp(-h);return Vp-d/p*g},s=c=>{const h=c*o*n,d=h*t+t,p=Math.pow(o,2)*Math.pow(c,2)*n,g=Math.exp(-h),x=Hg(Math.pow(c,2),o);return(-r(c)+Vp>0?-1:1)*((d-p)*g)/x}):(r=c=>{const u=Math.exp(-c*n),h=(c-t)*n+1;return-Vp+u*h},s=c=>{const u=Math.exp(-c*n),h=(t-c)*(n*n);return u*h});const a=5/n,l=G3(r,s,a);if(n=cr(n),isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:n}}}const H3=12;function G3(n,e,t){let i=t;for(let r=1;r<H3;r++)i=i-n(i)/e(i);return i}function Hg(n,e){return n*Math.sqrt(1-e*e)}const W3=["duration","bounce"],j3=["stiffness","damping","mass"];function u_(n,e){return e.some(t=>n[t]!==void 0)}function X3(n){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!u_(n,j3)&&u_(n,W3)){const t=V3(n);e={...e,...t,mass:1},e.isResolvedFromDuration=!0}return e}function iT({keyframes:n,restDelta:e,restSpeed:t,...i}){const r=n[0],s=n[n.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:u,velocity:h,isResolvedFromDuration:d}=X3({...i,velocity:-ur(i.velocity||0)}),p=h||0,g=l/(2*Math.sqrt(a*c)),x=s-r,m=ur(Math.sqrt(a/c)),f=Math.abs(x)<5;t||(t=f?.01:2),e||(e=f?.005:.5);let v;if(g<1){const y=Hg(m,g);v=_=>{const T=Math.exp(-g*m*_);return s-T*((p+g*m*x)/y*Math.sin(y*_)+x*Math.cos(y*_))}}else if(g===1)v=y=>s-Math.exp(-m*y)*(x+(p+m*x)*y);else{const y=m*Math.sqrt(g*g-1);v=_=>{const T=Math.exp(-g*m*_),w=Math.min(y*_,300);return s-T*((p+g*m*x)*Math.sinh(w)+y*x*Math.cosh(w))/y}}return{calculatedDuration:d&&u||null,next:y=>{const _=v(y);if(d)o.done=y>=u;else{let T=0;g<1&&(T=y===0?cr(p):nT(v,y,_));const w=Math.abs(T)<=t,A=Math.abs(s-_)<=e;o.done=w&&A}return o.value=o.done?s:_,o}}}function h_({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=n[0],d={done:!1,value:h},p=C=>a!==void 0&&C<a||l!==void 0&&C>l,g=C=>a===void 0?l:l===void 0||Math.abs(a-C)<Math.abs(l-C)?a:l;let x=t*e;const m=h+x,f=o===void 0?m:o(m);f!==m&&(x=f-h);const v=C=>-x*Math.exp(-C/i),y=C=>f+v(C),_=C=>{const b=v(C),M=y(C);d.done=Math.abs(b)<=c,d.value=d.done?f:M};let T,w;const A=C=>{p(d.value)&&(T=C,w=iT({keyframes:[d.value,g(d.value)],velocity:nT(y,C,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:C=>{let b=!1;return!w&&T===void 0&&(b=!0,_(C),A(C)),T!==void 0&&C>=T?w.next(C-T):(!b&&_(C),d)}}}const q3=Fc(.42,0,1,1),Y3=Fc(0,0,.58,1),rT=Fc(.42,0,.58,1),$3=n=>Array.isArray(n)&&typeof n[0]!="number",Mv=n=>Array.isArray(n)&&typeof n[0]=="number",d_={linear:dn,easeIn:q3,easeInOut:rT,easeOut:Y3,circIn:pv,circInOut:Fb,circOut:kb,backIn:fv,backInOut:Db,backOut:Nb,anticipate:Ub},f_=n=>{if(Mv(n)){Fg(n.length===4);const[e,t,i,r]=n;return Fc(e,t,i,r)}else if(typeof n=="string")return Fg(d_[n]!==void 0),d_[n];return n},Z3=(n,e)=>t=>e(n(t)),hr=(...n)=>n.reduce(Z3),Ea=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},Et=(n,e,t)=>n+(e-n)*t;function Hp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function K3({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let r=0,s=0,o=0;if(!e)r=s=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;r=Hp(l,a,n+1/3),s=Hp(l,a,n),o=Hp(l,a,n-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function td(n,e){return t=>t>0?e:n}const Gp=(n,e,t)=>{const i=n*n,r=t*(e*e-i)+i;return r<0?0:Math.sqrt(r)},J3=[zg,Hs,Qo],Q3=n=>J3.find(e=>e.test(n));function p_(n){const e=Q3(n);if(!e)return!1;let t=e.parse(n);return e===Qo&&(t=K3(t)),t}const m_=(n,e)=>{const t=p_(n),i=p_(e);if(!t||!i)return td(n,e);const r={...t};return s=>(r.red=Gp(t.red,i.red,s),r.green=Gp(t.green,i.green,s),r.blue=Gp(t.blue,i.blue,s),r.alpha=Et(t.alpha,i.alpha,s),Hs.transform(r))},Gg=new Set(["none","hidden"]);function eI(n,e){return Gg.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function tI(n,e){return t=>Et(n,e,t)}function wv(n){return typeof n=="number"?tI:typeof n=="string"?mv(n)?td:cn.test(n)?m_:rI:Array.isArray(n)?sT:typeof n=="object"?cn.test(n)?m_:nI:td}function sT(n,e){const t=[...n],i=t.length,r=n.map((s,o)=>wv(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)t[o]=r[o](s);return t}}function nI(n,e){const t={...n,...e},i={};for(const r in t)n[r]!==void 0&&e[r]!==void 0&&(i[r]=wv(n[r])(n[r],e[r]));return r=>{for(const s in i)t[s]=i[s](r);return t}}function iI(n,e){var t;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=n.indexes[o][r[o]],l=(t=n.values[a])!==null&&t!==void 0?t:0;i[s]=l,r[o]++}return i}const rI=(n,e)=>{const t=ss.createTransformer(e),i=hc(n),r=hc(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Gg.has(n)&&!r.values.length||Gg.has(e)&&!i.values.length?eI(n,e):hr(sT(iI(i,r),r.values),t):td(n,e)};function oT(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Et(n,e,t):wv(n)(n,e)}function sI(n,e,t){const i=[],r=t||oT,s=n.length-1;for(let o=0;o<s;o++){let a=r(n[o],n[o+1]);if(e){const l=Array.isArray(e)?e[o]||dn:e;a=hr(l,a)}i.push(a)}return i}function oI(n,e,{clamp:t=!0,ease:i,mixer:r}={}){const s=n.length;if(Fg(s===e.length),s===1)return()=>e[0];if(s===2&&n[0]===n[1])return()=>e[1];n[0]>n[s-1]&&(n=[...n].reverse(),e=[...e].reverse());const o=sI(e,i,r),a=o.length,l=c=>{let u=0;if(a>1)for(;u<n.length-2&&!(c<n[u+1]);u++);const h=Ea(n[u],n[u+1],c);return o[u](h)};return t?c=>l(rs(n[0],n[s-1],c)):l}function aI(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const r=Ea(0,e,i);n.push(Et(t,1,r))}}function lI(n){const e=[0];return aI(e,n.length-1),e}function cI(n,e){return n.map(t=>t*e)}function uI(n,e){return n.map(()=>e||rT).splice(0,n.length-1)}function nd({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const r=$3(i)?i.map(f_):f_(i),s={done:!1,value:e[0]},o=cI(t&&t.length===e.length?t:lI(e),n),a=oI(o,e,{ease:Array.isArray(r)?r:uI(e,r)});return{calculatedDuration:n,next:l=>(s.value=a(l),s.done=l>=n,s)}}const g_=2e4;function hI(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<g_;)e+=t,i=n.next(e);return e>=g_?1/0:e}const dI=n=>{const e=({timestamp:t})=>n(t);return{start:()=>mt.update(e,!0),stop:()=>is(e),now:()=>Kt.isProcessing?Kt.timestamp:Bi.now()}},fI={decay:h_,inertia:h_,tween:nd,keyframes:nd,spring:iT},pI=n=>n/100;class bv extends eT{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:t,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||gv,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,t,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Sv(t)?t:fI[t]||nd;let l,c;a!==nd&&typeof e[0]!="number"&&(l=hr(pI,oT(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=hI(u));const{calculatedDuration:h}=u,d=h+r,p=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:C}=this.options;return{done:!0,value:C[C.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:g,repeatDelay:x,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let y=this.currentTime,_=s;if(p){const C=Math.min(this.currentTime,u)/h;let b=Math.floor(C),M=C%1;!M&&C>=1&&(M=1),M===1&&b--,b=Math.min(b,p+1),!!(b%2)&&(g==="reverse"?(M=1-M,x&&(M-=x/h)):g==="mirror"&&(_=o)),y=rs(0,1,M)*h}const T=v?{done:!1,value:l[0]}:_.next(y);a&&(T.value=a(T.value));let{done:w}=T;!v&&c!==null&&(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return A&&r!==void 0&&(T.value=gf(l,this.options,r)),m&&m(T.value),A&&this.finish(),T}get duration(){const{resolved:e}=this;return e?ur(e.calculatedDuration):0}get time(){return ur(this.currentTime)}set time(e){e=cr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ur(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=dI,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),t&&t();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const mI=new Set(["opacity","clipPath","filter","transform"]),gI=10,vI=(n,e)=>{let t="";const i=Math.max(Math.round(e/gI),2);for(let r=0;r<i;r++)t+=n(Ea(0,i-1,r))+", ";return`linear(${t.substring(0,t.length-2)})`};function Tv(n){let e;return()=>(e===void 0&&(e=n()),e)}const yI={linearEasing:void 0};function xI(n,e){const t=Tv(n);return()=>{var i;return(i=yI[e])!==null&&i!==void 0?i:t()}}const id=xI(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function aT(n){return!!(typeof n=="function"&&id()||!n||typeof n=="string"&&(n in Wg||id())||Mv(n)||Array.isArray(n)&&n.every(aT))}const yl=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,Wg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:yl([0,.65,.55,1]),circOut:yl([.55,0,1,.45]),backIn:yl([.31,.01,.66,-.59]),backOut:yl([.33,1.53,.69,.99])};function lT(n,e){if(n)return typeof n=="function"&&id()?vI(n,e):Mv(n)?yl(n):Array.isArray(n)?n.map(t=>lT(t,e)||Wg.easeOut):Wg[n]}function _I(n,e,t,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:t};l&&(c.offset=l);const u=lT(a,r);return Array.isArray(u)&&(c.easing=u),n.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function v_(n,e){n.timeline=e,n.onfinish=null}const SI=Tv(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),rd=10,MI=2e4;function wI(n){return Sv(n.type)||n.type==="spring"||!aT(n.ease)}function bI(n,e){const t=new bv({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const r=[];let s=0;for(;!i.done&&s<MI;)i=t.sample(s),r.push(i.value),s+=rd;return{times:void 0,keyframes:r,duration:s-rd,ease:"linear"}}const cT={anticipate:Ub,backInOut:Db,circInOut:Fb};function TI(n){return n in cT}class y_ extends eT{constructor(e){super(e);const{name:t,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new Qb(s,(o,a)=>this.onKeyframesResolved(o,a),t,i,r),this.resolver.scheduleResolve()}initPlayback(e,t){var i;let{duration:r=300,times:s,ease:o,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(typeof o=="string"&&id()&&TI(o)&&(o=cT[o]),wI(this.options)){const{onComplete:d,onUpdate:p,motionValue:g,element:x,...m}=this.options,f=bI(e,m);e=f.keyframes,e.length===1&&(e[1]=e[0]),r=f.duration,s=f.times,o=f.ease,a="keyframes"}const h=_I(l.owner.current,c,e,{...this.options,duration:r,times:s,ease:o});return h.startTime=u??this.calcStartTime(),this.pendingTimeline?(v_(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:d}=this.options;l.set(gf(e,this.options,t)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:r,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return ur(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return ur(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=cr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return dn;const{animation:i}=t;v_(i,e)}return dn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:d,...p}=this.options,g=new bv({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),x=cr(this.time);c.setWithVelocity(g.sample(x-rd).value,g.sample(x).value,rd)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;return SI()&&i&&mI.has(i)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const EI=Tv(()=>window.ScrollTimeline!==void 0);class AI{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(r=>EI()&&r.attachTimeline?r.attachTimeline(e):t(r));return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function CI({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Ev=(n,e,t,i={},r,s)=>o=>{const a=dv(i,n)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-cr(l);let u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:n,motionValue:e,element:s?void 0:r};CI(a)||(u={...u,...XP(n,u)}),u.duration&&(u.duration=cr(u.duration)),u.repeatDelay&&(u.repeatDelay=cr(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!s&&e.get()!==void 0){const d=gf(u.keyframes,a);if(d!==void 0)return mt.update(()=>{u.onUpdate(d),u.onComplete()}),new AI([])}return!s&&y_.supports(u)?new y_(u):new bv(u)},RI=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),PI=n=>kg(n)?n[n.length-1]||0:n;function Av(n,e){n.indexOf(e)===-1&&n.push(e)}function Cv(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Rv{constructor(){this.subscriptions=[]}add(e){return Av(this.subscriptions,e),()=>Cv(this.subscriptions,e)}notify(e,t,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const x_=30,II=n=>!isNaN(parseFloat(n));class LI{constructor(e,t={}){this.version="11.11.17",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Bi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Bi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=II(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Rv);const i=this.events[e].add(t);return e==="change"?()=>{i(),mt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Bi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>x_)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,x_);return tT(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function dc(n,e){return new LI(n,e)}function NI(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,dc(t))}function DI(n,e){const t=mf(n,e);let{transitionEnd:i={},transition:r={},...s}=t||{};s={...s,...i};for(const o in s){const a=PI(s[o]);NI(n,o,a)}}const Pv=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),UI="framerAppearId",uT="data-"+Pv(UI);function hT(n){return n.props[uT]}const hn=n=>!!(n&&n.getVelocity);function kI(n){return!!(hn(n)&&n.add)}function jg(n,e){const t=n.getValue("willChange");if(kI(t))return t.add(e)}function FI({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function dT(n,e,{delay:t=0,transitionOverride:i,type:r}={}){var s;let{transition:o=n.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&n.animationState&&n.animationState.getState()[r];for(const h in l){const d=n.getValue(h,(s=n.latestValues[h])!==null&&s!==void 0?s:null),p=l[h];if(p===void 0||u&&FI(u,h))continue;const g={delay:t,...dv(o||{},h)};let x=!1;if(window.MotionHandoffAnimation){const f=hT(n);if(f){const v=window.MotionHandoffAnimation(f,h,mt);v!==null&&(g.startTime=v,x=!0)}}jg(n,h),d.start(Ev(h,d,p,n.shouldReduceMotion&&go.has(h)?{type:!1}:g,n,x));const m=d.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{mt.update(()=>{a&&DI(n,a)})}),c}function Xg(n,e,t={}){var i;const r=mf(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(s=t.transitionOverride);const o=r?()=>Promise.all(dT(n,r,t)):()=>Promise.resolve(),a=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=s;return OI(n,e,u+c,h,d,t)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(t.delay)])}function OI(n,e,t=0,i=0,r=1,s){const o=[],a=(n.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(n.variantChildren).sort(BI).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Xg(c,e,{...s,delay:t+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function BI(n,e){return n.sortNodePosition(e)}function zI(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Xg(n,s,t));i=Promise.all(r)}else if(typeof e=="string")i=Xg(n,e,t);else{const r=typeof e=="function"?mf(n,e,t.custom):e;i=Promise.all(dT(n,r,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const VI=hv.length;function fT(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?fT(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<VI;t++){const i=hv[t],r=n.props[i];(cc(r)||r===!1)&&(e[i]=r)}return e}const HI=[...uv].reverse(),GI=uv.length;function WI(n){return e=>Promise.all(e.map(({animation:t,options:i})=>zI(n,t,i)))}function jI(n){let e=WI(n),t=__(),i=!0;const r=l=>(c,u)=>{var h;const d=mf(n,u,l==="exit"?(h=n.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:p,transitionEnd:g,...x}=d;c={...c,...x,...g}}return c};function s(l){e=l(n)}function o(l){const{props:c}=n,u=fT(n.parent)||{},h=[],d=new Set;let p={},g=1/0;for(let m=0;m<GI;m++){const f=HI[m],v=t[f],y=c[f]!==void 0?c[f]:u[f],_=cc(y),T=f===l?v.isActive:null;T===!1&&(g=m);let w=y===u[f]&&y!==c[f]&&_;if(w&&i&&n.manuallyAnimateOnMount&&(w=!1),v.protectedKeys={...p},!v.isActive&&T===null||!y&&!v.prevProp||pf(y)||typeof y=="boolean")continue;const A=XI(v.prevProp,y);let C=A||f===l&&v.isActive&&!w&&_||m>g&&_,b=!1;const M=Array.isArray(y)?y:[y];let L=M.reduce(r(f),{});T===!1&&(L={});const{prevResolvedValues:O={}}=v,B={...O,...L},W=Y=>{C=!0,d.has(Y)&&(b=!0,d.delete(Y)),v.needsAnimating[Y]=!0;const D=n.getValue(Y);D&&(D.liveStyle=!1)};for(const Y in B){const D=L[Y],X=O[Y];if(p.hasOwnProperty(Y))continue;let Q=!1;kg(D)&&kg(X)?Q=!Cb(D,X):Q=D!==X,Q?D!=null?W(Y):d.add(Y):D!==void 0&&d.has(Y)?W(Y):v.protectedKeys[Y]=!0}v.prevProp=y,v.prevResolvedValues=L,v.isActive&&(p={...p,...L}),i&&n.blockInitialAnimation&&(C=!1),C&&(!(w&&A)||b)&&h.push(...M.map(Y=>({animation:Y,options:{type:f}})))}if(d.size){const m={};d.forEach(f=>{const v=n.getBaseTarget(f),y=n.getValue(f);y&&(y.liveStyle=!0),m[f]=v??null}),h.push({animation:m})}let x=!!h.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(x=!1),i=!1,x?e(h):Promise.resolve()}function a(l,c){var u;if(t[l].isActive===c)return Promise.resolve();(u=n.variantChildren)===null||u===void 0||u.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),t[l].isActive=c;const h=o(l);for(const d in t)t[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>t,reset:()=>{t=__(),i=!0}}}function XI(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Cb(e,n):!1}function ys(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function __(){return{animate:ys(!0),whileInView:ys(),whileHover:ys(),whileTap:ys(),whileDrag:ys(),whileFocus:ys(),exit:ys()}}class ds{constructor(e){this.isMounted=!1,this.node=e}update(){}}class qI extends ds{constructor(e){super(e),e.animationState||(e.animationState=jI(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();pf(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let YI=0;class $I extends ds{constructor(){super(...arguments),this.id=YI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const ZI={animation:{Feature:qI},exit:{Feature:$I}},pT=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function vf(n,e="page"){return{point:{x:n[`${e}X`],y:n[`${e}Y`]}}}const KI=n=>e=>pT(e)&&n(e,vf(e));function or(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function dr(n,e,t,i){return or(n,e,KI(t),i)}const S_=(n,e)=>Math.abs(n-e);function JI(n,e){const t=S_(n.x,e.x),i=S_(n.y,e.y);return Math.sqrt(t**2+i**2)}class mT{constructor(e,t,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=jp(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=JI(h.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:g}=h,{timestamp:x}=Kt;this.history.push({...g,timestamp:x});const{onStart:m,onMove:f}=this.handlers;d||(m&&m(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Wp(d,this.transformPagePoint),mt.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=jp(h.type==="pointercancel"?this.lastMoveEventInfo:Wp(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,m),g&&g(h,m)},!pT(e))return;this.dragSnapToOrigin=s,this.handlers=t,this.transformPagePoint=i,this.contextWindow=r||window;const o=vf(e),a=Wp(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Kt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=t;u&&u(e,jp(a,this.history)),this.removeListeners=hr(dr(this.contextWindow,"pointermove",this.handlePointerMove),dr(this.contextWindow,"pointerup",this.handlePointerUp),dr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),is(this.updatePoint)}}function Wp(n,e){return e?{point:e(n.point)}:n}function M_(n,e){return{x:n.x-e.x,y:n.y-e.y}}function jp({point:n},e){return{point:n,delta:M_(n,gT(e)),offset:M_(n,QI(e)),velocity:eL(e,.1)}}function QI(n){return n[0]}function gT(n){return n[n.length-1]}function eL(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const r=gT(n);for(;t>=0&&(i=n[t],!(r.timestamp-i.timestamp>cr(e)));)t--;if(!i)return{x:0,y:0};const s=ur(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function vT(n){let e=null;return()=>{const t=()=>{e=null};return e===null?(e=n,t):!1}}const w_=vT("dragHorizontal"),b_=vT("dragVertical");function yT(n){let e=!1;if(n==="y")e=b_();else if(n==="x")e=w_();else{const t=w_(),i=b_();t&&i?e=()=>{t(),i()}:(t&&t(),i&&i())}return e}function xT(){const n=yT(!0);return n?(n(),!1):!0}function ea(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const _T=1e-4,tL=1-_T,nL=1+_T,ST=.01,iL=0-ST,rL=0+ST;function $n(n){return n.max-n.min}function sL(n,e,t){return Math.abs(n-e)<=t}function T_(n,e,t,i=.5){n.origin=i,n.originPoint=Et(e.min,e.max,n.origin),n.scale=$n(t)/$n(e),n.translate=Et(t.min,t.max,n.origin)-n.originPoint,(n.scale>=tL&&n.scale<=nL||isNaN(n.scale))&&(n.scale=1),(n.translate>=iL&&n.translate<=rL||isNaN(n.translate))&&(n.translate=0)}function Nl(n,e,t,i){T_(n.x,e.x,t.x,i?i.originX:void 0),T_(n.y,e.y,t.y,i?i.originY:void 0)}function E_(n,e,t){n.min=t.min+e.min,n.max=n.min+$n(e)}function oL(n,e,t){E_(n.x,e.x,t.x),E_(n.y,e.y,t.y)}function A_(n,e,t){n.min=e.min-t.min,n.max=n.min+$n(e)}function Dl(n,e,t){A_(n.x,e.x,t.x),A_(n.y,e.y,t.y)}function aL(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Et(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Et(t,n,i.max):Math.min(n,t)),n}function C_(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function lL(n,{top:e,left:t,bottom:i,right:r}){return{x:C_(n.x,t,r),y:C_(n.y,e,i)}}function R_(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function cL(n,e){return{x:R_(n.x,e.x),y:R_(n.y,e.y)}}function uL(n,e){let t=.5;const i=$n(n),r=$n(e);return r>i?t=Ea(e.min,e.max-i,n.min):i>r&&(t=Ea(n.min,n.max-r,e.min)),rs(0,1,t)}function hL(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const qg=.35;function dL(n=qg){return n===!1?n=0:n===!0&&(n=qg),{x:P_(n,"left","right"),y:P_(n,"top","bottom")}}function P_(n,e,t){return{min:I_(n,e),max:I_(n,t)}}function I_(n,e){return typeof n=="number"?n:n[e]||0}const L_=()=>({translate:0,scale:1,origin:0,originPoint:0}),ta=()=>({x:L_(),y:L_()}),N_=()=>({min:0,max:0}),Ft=()=>({x:N_(),y:N_()});function ii(n){return[n("x"),n("y")]}function MT({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function fL({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function pL(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Xp(n){return n===void 0||n===1}function Yg({scale:n,scaleX:e,scaleY:t}){return!Xp(n)||!Xp(e)||!Xp(t)}function Ds(n){return Yg(n)||wT(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function wT(n){return D_(n.x)||D_(n.y)}function D_(n){return n&&n!=="0%"}function sd(n,e,t){const i=n-t,r=e*i;return t+r}function U_(n,e,t,i,r){return r!==void 0&&(n=sd(n,r,i)),sd(n,t,i)+e}function $g(n,e=0,t=1,i,r){n.min=U_(n.min,e,t,i,r),n.max=U_(n.max,e,t,i,r)}function bT(n,{x:e,y:t}){$g(n.x,e.translate,e.scale,e.originPoint),$g(n.y,t.translate,t.scale,t.originPoint)}const k_=.999999999999,F_=1.0000000000001;function mL(n,e,t,i=!1){const r=t.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=t[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ia(n,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,bT(n,o)),i&&Ds(s.latestValues)&&ia(n,s.latestValues))}e.x<F_&&e.x>k_&&(e.x=1),e.y<F_&&e.y>k_&&(e.y=1)}function na(n,e){n.min=n.min+e,n.max=n.max+e}function O_(n,e,t,i,r=.5){const s=Et(n.min,n.max,r);$g(n,e,t,s,i)}function ia(n,e){O_(n.x,e.x,e.scaleX,e.scale,e.originX),O_(n.y,e.y,e.scaleY,e.scale,e.originY)}function TT(n,e){return MT(pL(n.getBoundingClientRect(),e))}function gL(n,e,t){const i=TT(n,t),{scroll:r}=e;return r&&(na(i.x,r.offset.x),na(i.y,r.offset.y)),i}const ET=({current:n})=>n?n.ownerDocument.defaultView:null,vL=new WeakMap;class yL{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ft(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(vf(u,"page").point)},s=(u,h)=>{const{drag:d,dragPropagation:p,onDragStart:g}=this.getProps();if(d&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=yT(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ii(m=>{let f=this.getAxisMotionValue(m).get()||0;if(Oi.test(f)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[m];y&&(f=$n(y)*(parseFloat(f)/100))}}this.originPoint[m]=f}),g&&mt.postRender(()=>g(u,h)),jg(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:g,onDrag:x}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:m}=h;if(p&&this.currentDirection===null){this.currentDirection=xL(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,m),this.updateAxis("y",h.point,m),this.visualElement.render(),x&&x(u,h)},a=(u,h)=>this.stop(u,h),l=()=>ii(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new mT(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:ET(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&mt.postRender(()=>s(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:r}=this.getProps();if(!i||!gu(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=aL(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;t&&ea(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=lL(r.layoutBox,t):this.constraints=!1,this.elastic=dL(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ii(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=hL(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!ea(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=gL(i,r.root,this.visualElement.getTransformPagePoint());let o=cL(r.layout.layoutBox,s);if(t){const a=t(fL(o));this.hasMutatedConstraints=!!a,a&&(o=MT(a))}return o}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ii(u=>{if(!gu(u,t,this.currentDirection))return;let h=l&&l[u]||{};o&&(h={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return jg(this.visualElement,e),i.start(Ev(e,i,0,t,this.visualElement,!1))}stopAnimation(){ii(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ii(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[t];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){ii(t=>{const{drag:i}=this.getProps();if(!gu(t,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(t);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[t];s.set(e[t]-Et(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!ea(t)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ii(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=uL({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),ii(o=>{if(!gu(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Et(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;vL.set(this.visualElement,this);const e=this.visualElement.current,t=dr(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();ea(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),mt.read(i);const o=or(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(ii(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=l[u].translate,h.set(h.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),t(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=qg,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function gu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function xL(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class _L extends ds{constructor(e){super(e),this.removeGroupControls=dn,this.removeListeners=dn,this.controls=new yL(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||dn}unmount(){this.removeGroupControls(),this.removeListeners()}}const B_=n=>(e,t)=>{n&&mt.postRender(()=>n(e,t))};class SL extends ds{constructor(){super(...arguments),this.removePointerDownListener=dn}onPointerDown(e){this.session=new mT(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ET(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:B_(e),onStart:B_(t),onMove:i,onEnd:(s,o)=>{delete this.session,r&&mt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=dr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const yf=z.createContext(null);function ML(){const n=z.useContext(yf);if(n===null)return[!0,null];const{isPresent:e,onExitComplete:t,register:i}=n,r=z.useId();z.useEffect(()=>i(r),[]);const s=z.useCallback(()=>t&&t(r),[r,t]);return!e&&t?[!1,s]:[!0]}const Iv=z.createContext({}),AT=z.createContext({}),wh={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function z_(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const el={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Oe.test(n))n=parseFloat(n);else return n;const t=z_(n,e.target.x),i=z_(n,e.target.y);return`${t}% ${i}%`}},wL={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,r=ss.parse(n);if(r.length>5)return i;const s=ss.createTransformer(n),o=typeof r[0]!="number"?1:0,a=t.x.scale*e.x,l=t.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=Et(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},od={};function bL(n){Object.assign(od,n)}const{schedule:Lv,cancel:_8}=Rb(queueMicrotask,!1);class TL extends z.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;bL(EL),s&&(t.group&&t.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),wh.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==t||t===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||mt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Lv.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function CT(n){const[e,t]=ML(),i=z.useContext(Iv);return S.jsx(TL,{...n,layoutGroup:i,switchLayoutGroup:z.useContext(AT),isPresent:e,safeToRemove:t})}const EL={borderRadius:{...el,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:el,borderTopRightRadius:el,borderBottomLeftRadius:el,borderBottomRightRadius:el,boxShadow:wL},RT=["TopLeft","TopRight","BottomLeft","BottomRight"],AL=RT.length,V_=n=>typeof n=="string"?parseFloat(n):n,H_=n=>typeof n=="number"||Oe.test(n);function CL(n,e,t,i,r,s){r?(n.opacity=Et(0,t.opacity!==void 0?t.opacity:1,RL(i)),n.opacityExit=Et(e.opacity!==void 0?e.opacity:1,0,PL(i))):s&&(n.opacity=Et(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let o=0;o<AL;o++){const a=`border${RT[o]}Radius`;let l=G_(e,a),c=G_(t,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||H_(l)===H_(c)?(n[a]=Math.max(Et(V_(l),V_(c),i),0),(Oi.test(c)||Oi.test(l))&&(n[a]+="%")):n[a]=c}(e.rotate||t.rotate)&&(n.rotate=Et(e.rotate||0,t.rotate||0,i))}function G_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const RL=PT(0,.5,kb),PL=PT(.5,.95,dn);function PT(n,e,t){return i=>i<n?0:i>e?1:t(Ea(n,e,i))}function W_(n,e){n.min=e.min,n.max=e.max}function ti(n,e){W_(n.x,e.x),W_(n.y,e.y)}function j_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function X_(n,e,t,i,r){return n-=e,n=sd(n,1/t,i),r!==void 0&&(n=sd(n,1/r,i)),n}function IL(n,e=0,t=1,i=.5,r,s=n,o=n){if(Oi.test(e)&&(e=parseFloat(e),e=Et(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Et(s.min,s.max,i);n===s&&(a-=e),n.min=X_(n.min,e,t,a,r),n.max=X_(n.max,e,t,a,r)}function q_(n,e,[t,i,r],s,o){IL(n,e[t],e[i],e[r],e.scale,s,o)}const LL=["x","scaleX","originX"],NL=["y","scaleY","originY"];function Y_(n,e,t,i){q_(n.x,e,LL,t?t.x:void 0,i?i.x:void 0),q_(n.y,e,NL,t?t.y:void 0,i?i.y:void 0)}function $_(n){return n.translate===0&&n.scale===1}function IT(n){return $_(n.x)&&$_(n.y)}function Z_(n,e){return n.min===e.min&&n.max===e.max}function DL(n,e){return Z_(n.x,e.x)&&Z_(n.y,e.y)}function K_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function LT(n,e){return K_(n.x,e.x)&&K_(n.y,e.y)}function J_(n){return $n(n.x)/$n(n.y)}function Q_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class UL{constructor(){this.members=[]}add(e){Av(this.members,e),e.scheduleRender()}remove(e){if(Cv(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(r=>e===r);if(t===0)return!1;let i;for(let r=t;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function kL(n,e,t){let i="";const r=n.x.translate/e.x,s=n.y.translate/e.y,o=(t==null?void 0:t.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:p,skewY:g}=t;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=n.x.scale*e.x,l=n.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const FL=(n,e)=>n.depth-e.depth;class OL{constructor(){this.children=[],this.isDirty=!1}add(e){Av(this.children,e),this.isDirty=!0}remove(e){Cv(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(FL),this.isDirty=!1,this.children.forEach(e)}}function bh(n){const e=hn(n)?n.get():n;return RI(e)?e.toValue():e}function BL(n,e){const t=Bi.now(),i=({timestamp:r})=>{const s=r-t;s>=e&&(is(i),n(s-e))};return mt.read(i,!0),()=>is(i)}function zL(n){return n instanceof SVGElement&&n.tagName!=="svg"}function VL(n,e,t){const i=hn(n)?n:dc(n);return i.start(Ev("",i,e,t)),i.animation}const Us={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},xl=typeof window<"u"&&window.MotionDebug!==void 0,qp=["","X","Y","Z"],HL={visibility:"hidden"},e1=1e3;let GL=0;function Yp(n,e,t,i){const{latestValues:r}=e;r[n]&&(t[n]=r[n],e.setStaticValue(n,0),i&&(i[n]=0))}function NT(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=hT(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:r,layoutId:s}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",mt,!(r||s))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&NT(i)}function DT({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=GL++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xl&&(Us.totalNodes=Us.resolvedTargetDeltas=Us.recalculatedProjection=0),this.nodes.forEach(XL),this.nodes.forEach(KL),this.nodes.forEach(JL),this.nodes.forEach(qL),xl&&window.MotionDebug.record(Us)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new OL)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Rv),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=zL(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),n){let h;const d=()=>this.root.updateBlockedByResize=!1;n(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=BL(d,250),wh.hasAnimatedSinceResize&&(wh.hasAnimatedSinceResize=!1,this.nodes.forEach(n1))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||iN,{onLayoutAnimationStart:m,onLayoutAnimationComplete:f}=u.getProps(),v=!this.targetLayout||!LT(this.targetLayout,g)||p,y=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,y);const _={...dv(x,"layout"),onPlay:m,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_)}else d||n1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,is(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(QL),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&NT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(t1);return}this.isUpdating||this.nodes.forEach($L),this.isUpdating=!1,this.nodes.forEach(ZL),this.nodes.forEach(WL),this.nodes.forEach(jL),this.clearAllSnapshots();const a=Bi.now();Kt.delta=rs(0,1e3/60,a-Kt.timestamp),Kt.timestamp=a,Kt.isProcessing=!0,Bp.update.process(Kt),Bp.preRender.process(Kt),Bp.render.process(Kt),Kt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lv.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(YL),this.sharedNodes.forEach(eN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,mt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){mt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ft(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!IT(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Ds(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),rN(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Ft();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(sN))){const{scroll:u}=this.root;u&&(na(l.x,u.offset.x),na(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Ft();if(ti(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&ti(l,o),na(l.x,h.offset.x),na(l.y,h.offset.y))}return l}applyTransform(o,a=!1){const l=Ft();ti(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ia(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ds(u.latestValues)&&ia(l,u.latestValues)}return Ds(this.latestValues)&&ia(l,this.latestValues),l}removeTransform(o){const a=Ft();ti(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ds(c.latestValues))continue;Yg(c.latestValues)&&c.updateSnapshot();const u=Ft(),h=c.measurePageBox();ti(u,h),Y_(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Ds(this.latestValues)&&Y_(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Kt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=Kt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ft(),this.relativeTargetOrigin=Ft(),Dl(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),ti(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ft(),this.targetWithTransforms=Ft()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ti(this.target,this.layout.layoutBox),bT(this.target,this.targetDelta)):ti(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ft(),this.relativeTargetOrigin=Ft(),Dl(this.relativeTargetOrigin,this.target,p.target),ti(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}xl&&Us.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Yg(this.parent.latestValues)||wT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Kt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;ti(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;mL(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Ft());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(j_(this.prevProjectionDelta.x,this.projectionDelta.x),j_(this.prevProjectionDelta.y,this.projectionDelta.y)),Nl(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!Q_(this.projectionDelta.x,this.prevProjectionDelta.x)||!Q_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),xl&&Us.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ta(),this.projectionDelta=ta(),this.projectionDeltaWithTransform=ta()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=ta();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Ft(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,x=p!==g,m=this.getStack(),f=!m||m.members.length<=1,v=!!(x&&!f&&this.options.crossfade===!0&&!this.path.some(nN));this.animationProgress=0;let y;this.mixTargetDelta=_=>{const T=_/1e3;i1(h.x,o.x,T),i1(h.y,o.y,T),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Dl(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tN(this.relativeTarget,this.relativeTargetOrigin,d,T),y&&DL(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Ft()),ti(y,this.relativeTarget)),x&&(this.animationValues=u,CL(u,c,this.latestValues,T,v,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(is(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=mt.update(()=>{wh.hasAnimatedSinceResize=!0,this.currentAnimation=VL(0,e1,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(e1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&UT(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ft();const h=$n(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=$n(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}ti(a,l),ia(a,u),Nl(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new UL),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Yp("z",o,c,this.animationValues);for(let u=0;u<qp.length;u++)Yp(`rotate${qp[u]}`,o,c,this.animationValues),Yp(`skew${qp[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return HL;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=bh(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=bh(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ds(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=kL(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const x in od){if(d[x]===void 0)continue;const{correct:m,applyTo:f}=od[x],v=c.transform==="none"?d[x]:m(d[x],h);if(f){const y=f.length;for(let _=0;_<y;_++)c[f[_]]=v}else c[x]=v}return this.options.layoutId&&(c.pointerEvents=h===this?bh(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(t1),this.root.sharedNodes.clear()}}}function WL(n){n.updateLayout()}function jL(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=n.layout,{animationType:s}=n.options,o=t.source!==n.layout.source;s==="size"?ii(h=>{const d=o?t.measuredBox[h]:t.layoutBox[h],p=$n(d);d.min=i[h].min,d.max=d.min+p}):UT(s,t.layoutBox,i)&&ii(h=>{const d=o?t.measuredBox[h]:t.layoutBox[h],p=$n(i[h]);d.max=d.min+p,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[h].max=n.relativeTarget[h].min+p)});const a=ta();Nl(a,i,t.layoutBox);const l=ta();o?Nl(l,n.applyTransform(r,!0),t.measuredBox):Nl(l,i,t.layoutBox);const c=!IT(a);let u=!1;if(!n.resumeFrom){const h=n.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:p}=h;if(d&&p){const g=Ft();Dl(g,t.layoutBox,d.layoutBox);const x=Ft();Dl(x,i,p.layoutBox),LT(g,x)||(u=!0),h.options.layoutRoot&&(n.relativeTarget=x,n.relativeTargetOrigin=g,n.relativeParent=h)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function XL(n){xl&&Us.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function qL(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function YL(n){n.clearSnapshot()}function t1(n){n.clearMeasurements()}function $L(n){n.isLayoutDirty=!1}function ZL(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function n1(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function KL(n){n.resolveTargetDelta()}function JL(n){n.calcProjection()}function QL(n){n.resetSkewAndRotation()}function eN(n){n.removeLeadSnapshot()}function i1(n,e,t){n.translate=Et(e.translate,0,t),n.scale=Et(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function r1(n,e,t,i){n.min=Et(e.min,t.min,i),n.max=Et(e.max,t.max,i)}function tN(n,e,t,i){r1(n.x,e.x,t.x,i),r1(n.y,e.y,t.y,i)}function nN(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const iN={duration:.45,ease:[.4,0,.1,1]},s1=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),o1=s1("applewebkit/")&&!s1("chrome/")?Math.round:dn;function a1(n){n.min=o1(n.min),n.max=o1(n.max)}function rN(n){a1(n.x),a1(n.y)}function UT(n,e,t){return n==="position"||n==="preserve-aspect"&&!sL(J_(e),J_(t),.2)}function sN(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const oN=DT({attachResizeListener:(n,e)=>or(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$p={current:void 0},kT=DT({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!$p.current){const n=new oN({});n.mount(window),n.setOptions({layoutScroll:!0}),$p.current=n}return $p.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),aN={pan:{Feature:SL},drag:{Feature:_L,ProjectionNode:kT,MeasureLayout:CT}};function l1(n,e){const t=e?"pointerenter":"pointerleave",i=e?"onHoverStart":"onHoverEnd",r=(s,o)=>{if(s.pointerType==="touch"||xT())return;const a=n.getProps();n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",e);const l=a[i];l&&mt.postRender(()=>l(s,o))};return dr(n.current,t,r,{passive:!n.getProps()[i]})}class lN extends ds{mount(){this.unmount=hr(l1(this.node,!0),l1(this.node,!1))}unmount(){}}class cN extends ds{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hr(or(this.node.current,"focus",()=>this.onFocus()),or(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const FT=(n,e)=>e?n===e?!0:FT(n,e.parentElement):!1;function Zp(n,e){if(!e)return;const t=new PointerEvent("pointer"+n);e(t,vf(t))}class uN extends ds{constructor(){super(...arguments),this.removeStartListeners=dn,this.removeEndListeners=dn,this.removeAccessibleListeners=dn,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=dr(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:h}=this.node.getProps(),d=!h&&!FT(this.node.current,a.target)?u:c;d&&mt.update(()=>d(a,l))},{passive:!(i.onTap||i.onPointerUp)}),o=dr(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=hr(s,o),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Zp("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&mt.postRender(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=or(this.node.current,"keyup",o),Zp("down",(a,l)=>{this.startPress(a,l)})},t=or(this.node.current,"keydown",e),i=()=>{this.isPressing&&Zp("cancel",(s,o)=>this.cancelPress(s,o))},r=or(this.node.current,"blur",i);this.removeAccessibleListeners=hr(t,r)}}startPress(e,t){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&mt.postRender(()=>i(e,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!xT()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&mt.postRender(()=>i(e,t))}mount(){const e=this.node.getProps(),t=dr(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=or(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=hr(t,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Zg=new WeakMap,Kp=new WeakMap,hN=n=>{const e=Zg.get(n.target);e&&e(n)},dN=n=>{n.forEach(hN)};function fN({root:n,...e}){const t=n||document;Kp.has(t)||Kp.set(t,{});const i=Kp.get(t),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(dN,{root:n,...e})),i[r]}function pN(n,e,t){const i=fN(e);return Zg.set(n,t),i.observe(n),()=>{Zg.delete(n),i.unobserve(n)}}const mN={some:0,all:1};class gN extends ds{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:r="some",once:s}=e,o={root:t?t.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:mN[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=c?u:h;d&&d(l)};return pN(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(vN(e,t))&&this.startObserver()}unmount(){}}function vN({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const yN={inView:{Feature:gN},tap:{Feature:uN},focus:{Feature:cN},hover:{Feature:lN}},xN={layout:{ProjectionNode:kT,MeasureLayout:CT}},Nv=z.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),xf=z.createContext({}),Dv=typeof window<"u",OT=Dv?z.useLayoutEffect:z.useEffect,BT=z.createContext({strict:!1});function _N(n,e,t,i,r){var s,o;const{visualElement:a}=z.useContext(xf),l=z.useContext(BT),c=z.useContext(yf),u=z.useContext(Nv).reducedMotion,h=z.useRef();i=i||l.renderer,!h.current&&i&&(h.current=i(n,{visualState:e,parent:a,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=h.current,p=z.useContext(AT);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&SN(h.current,t,r,p);const g=z.useRef(!1);z.useInsertionEffect(()=>{d&&g.current&&d.update(t,c)});const x=t[uT],m=z.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return OT(()=>{d&&(g.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Lv.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())}),z.useEffect(()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,x)}),m.current=!1))}),d}function SN(n,e,t,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:zT(n.parent)),n.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&ea(a),visualElement:n,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function zT(n){if(n)return n.options.allowProjection!==!1?n.projection:zT(n.parent)}function MN(n,e,t){return z.useCallback(i=>{i&&n.mount&&n.mount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):ea(t)&&(t.current=i))},[e])}function _f(n){return pf(n.animate)||hv.some(e=>cc(n[e]))}function VT(n){return!!(_f(n)||n.variants)}function wN(n,e){if(_f(n)){const{initial:t,animate:i}=n;return{initial:t===!1||cc(t)?t:void 0,animate:cc(i)?i:void 0}}return n.inherit!==!1?e:{}}function bN(n){const{initial:e,animate:t}=wN(n,z.useContext(xf));return z.useMemo(()=>({initial:e,animate:t}),[c1(e),c1(t)])}function c1(n){return Array.isArray(n)?n.join(" "):n}const u1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Aa={};for(const n in u1)Aa[n]={isEnabled:e=>u1[n].some(t=>!!e[t])};function TN(n){for(const e in n)Aa[e]={...Aa[e],...n[e]}}const EN=Symbol.for("motionComponentSymbol");function AN({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:r}){n&&TN(n);function s(a,l){let c;const u={...z.useContext(Nv),...a,layoutId:CN(a)},{isStatic:h}=u,d=bN(a),p=i(a,h);if(!h&&Dv){RN();const g=PN(u);c=g.MeasureLayout,d.visualElement=_N(r,p,u,e,g.ProjectionNode)}return S.jsxs(xf.Provider,{value:d,children:[c&&d.visualElement?S.jsx(c,{visualElement:d.visualElement,...u}):null,t(r,a,MN(p,d.visualElement,l),p,h,d.visualElement)]})}const o=z.forwardRef(s);return o[EN]=r,o}function CN({layoutId:n}){const e=z.useContext(Iv).id;return e&&n!==void 0?e+"-"+n:n}function RN(n,e){z.useContext(BT).strict}function PN(n){const{drag:e,layout:t}=Aa;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const IN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Uv(n){return typeof n!="string"||n.includes("-")?!1:!!(IN.indexOf(n)>-1||/[A-Z]/u.test(n))}function HT(n,{style:e,vars:t},i,r){Object.assign(n.style,e,r&&r.getProjectionStyles(i));for(const s in t)n.style.setProperty(s,t[s])}const GT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function WT(n,e,t,i){HT(n,e,void 0,i);for(const r in e.attrs)n.setAttribute(GT.has(r)?r:Pv(r),e.attrs[r])}function jT(n,{layout:e,layoutId:t}){return go.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!od[n]||n==="opacity")}function kv(n,e,t){var i;const{style:r}=n,s={};for(const o in r)(hn(r[o])||e.style&&hn(e.style[o])||jT(o,n)||((i=t==null?void 0:t.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function XT(n,e,t){const i=kv(n,e,t);for(const r in n)if(hn(n[r])||hn(e[r])){const s=kc.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=n[r]}return i}function Fv(n){const e=z.useRef(null);return e.current===null&&(e.current=n()),e.current}function LN({scrapeMotionValuesFromProps:n,createRenderState:e,onMount:t},i,r,s){const o={latestValues:NN(i,r,s,n),renderState:e()};return t&&(o.mount=a=>t(i,a,o)),o}const qT=n=>(e,t)=>{const i=z.useContext(xf),r=z.useContext(yf),s=()=>LN(n,e,i,r);return t?s():Fv(s)};function NN(n,e,t,i){const r={},s=i(n,{});for(const d in s)r[d]=bh(s[d]);let{initial:o,animate:a}=n;const l=_f(n),c=VT(n);e&&c&&!l&&n.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=t?t.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!pf(h)){const d=Array.isArray(h)?h:[h];for(let p=0;p<d.length;p++){const g=cv(n,d[p]);if(g){const{transitionEnd:x,transition:m,...f}=g;for(const v in f){let y=f[v];if(Array.isArray(y)){const _=u?y.length-1:0;y=y[_]}y!==null&&(r[v]=y)}for(const v in x)r[v]=x[v]}}}return r}const Ov=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),YT=()=>({...Ov(),attrs:{}}),$T=(n,e)=>e&&typeof n=="number"?e.transform(n):n,DN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},UN=kc.length;function kN(n,e,t){let i="",r=!0;for(let s=0;s<UN;s++){const o=kc[s],a=n[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||t){const c=$T(a,xv[o]);if(!l){r=!1;const u=DN[o]||o;i+=`${u}(${c}) `}t&&(e[o]=c)}}return i=i.trim(),t?i=t(e,r?"":i):r&&(i="none"),i}function Bv(n,e,t){const{style:i,vars:r,transformOrigin:s}=n;let o=!1,a=!1;for(const l in e){const c=e[l];if(go.has(l)){o=!0;continue}else if(Vb(l)){r[l]=c;continue}else{const u=$T(c,xv[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||t?i.transform=kN(e,n.transform,t):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function h1(n,e,t){return typeof n=="string"?n:Oe.transform(e+t*n)}function FN(n,e,t){const i=h1(e,n.x,n.width),r=h1(t,n.y,n.height);return`${i} ${r}`}const ON={offset:"stroke-dashoffset",array:"stroke-dasharray"},BN={offset:"strokeDashoffset",array:"strokeDasharray"};function zN(n,e,t=1,i=0,r=!0){n.pathLength=1;const s=r?ON:BN;n[s.offset]=Oe.transform(-i);const o=Oe.transform(e),a=Oe.transform(t);n[s.array]=`${o} ${a}`}function zv(n,{attrX:e,attrY:t,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,h){if(Bv(n,c,h),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:d,style:p,dimensions:g}=n;d.transform&&(g&&(p.transform=d.transform),delete d.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=FN(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),t!==void 0&&(d.y=t),i!==void 0&&(d.scale=i),o!==void 0&&zN(d,o,a,l,!1)}const Vv=n=>typeof n=="string"&&n.toLowerCase()==="svg",VN={useVisualState:qT({scrapeMotionValuesFromProps:XT,createRenderState:YT,onMount:(n,e,{renderState:t,latestValues:i})=>{mt.read(()=>{try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}),mt.render(()=>{zv(t,i,Vv(e.tagName),n.transformTemplate),WT(e,t)})}})},HN={useVisualState:qT({scrapeMotionValuesFromProps:kv,createRenderState:Ov})};function ZT(n,e,t){for(const i in e)!hn(e[i])&&!jT(i,t)&&(n[i]=e[i])}function GN({transformTemplate:n},e){return z.useMemo(()=>{const t=Ov();return Bv(t,e,n),Object.assign({},t.vars,t.style)},[e])}function WN(n,e){const t=n.style||{},i={};return ZT(i,t,n),Object.assign(i,GN(n,e)),i}function jN(n,e){const t={},i=WN(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const XN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ad(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||XN.has(n)}let KT=n=>!ad(n);function qN(n){n&&(KT=e=>e.startsWith("on")?!ad(e):n(e))}try{qN(require("@emotion/is-prop-valid").default)}catch{}function YN(n,e,t){const i={};for(const r in n)r==="values"&&typeof n.values=="object"||(KT(r)||t===!0&&ad(r)||!e&&!ad(r)||n.draggable&&r.startsWith("onDrag"))&&(i[r]=n[r]);return i}function $N(n,e,t,i){const r=z.useMemo(()=>{const s=YT();return zv(s,e,Vv(i),n.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(n.style){const s={};ZT(s,n.style,n),r.style={...s,...r.style}}return r}function ZN(n=!1){return(t,i,r,{latestValues:s},o)=>{const l=(Uv(t)?$N:jN)(i,s,o,t),c=YN(i,typeof t=="string",n),u=t!==z.Fragment?{...c,...l,ref:r}:{},{children:h}=i,d=z.useMemo(()=>hn(h)?h.get():h,[h]);return z.createElement(t,{...u,children:d})}}function KN(n,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Uv(i)?VN:HN,preloadedFeatures:n,useRender:ZN(r),createVisualElement:e,Component:i};return AN(o)}}const Kg={current:null},JT={current:!1};function JN(){if(JT.current=!0,!!Dv)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Kg.current=n.matches;n.addListener(e),e()}else Kg.current=!1}function QN(n,e,t){for(const i in e){const r=e[i],s=t[i];if(hn(r))n.addValue(i,r);else if(hn(s))n.addValue(i,dc(r,{owner:n}));else if(s!==r)if(n.hasValue(i)){const o=n.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=n.getStaticValue(i);n.addValue(i,dc(o!==void 0?o:r,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const d1=new WeakMap,eD=[...Wb,cn,ss],tD=n=>eD.find(Gb(n)),f1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class nD{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=gv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=Bi.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,mt.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=_f(t),this.isVariantNode=VT(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in h){const p=h[d];l[d]!==void 0&&hn(p)&&p.set(l[d],!1)}}mount(e){this.current=e,d1.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),JT.current||JN(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Kg.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){d1.delete(this.current),this.projection&&this.projection.unmount(),is(this.notifyUpdate),is(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=go.has(e),r=t.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&mt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=t.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Aa){const t=Aa[e];if(!t)continue;const{isEnabled:i,Feature:r}=t;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ft()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<f1.length;i++){const r=f1[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=QN(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=dc(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Bb(r)||Ob(r))?r=parseFloat(r):!tD(r)&&ss.test(t)&&(r=Jb(e,t)),this.setBaseTarget(e,hn(r)?r.get():r)),hn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=cv(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!hn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Rv),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class QT extends nD{constructor(){super(...arguments),this.KeyframeResolver=Qb}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}}function iD(n){return window.getComputedStyle(n)}class rD extends QT{constructor(){super(...arguments),this.type="html",this.renderInstance=HT}readValueFromInstance(e,t){if(go.has(t)){const i=_v(t);return i&&i.default||0}else{const i=iD(e),r=(Vb(t)?i.getPropertyValue(t):i[t])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return TT(e,t)}build(e,t,i){Bv(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return kv(e,t,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;hn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class sD extends QT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ft}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(go.has(t)){const i=_v(t);return i&&i.default||0}return t=GT.has(t)?t:Pv(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return XT(e,t,i)}build(e,t,i){zv(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,r){WT(e,t,i,r)}mount(e){this.isSVGTag=Vv(e.tagName),super.mount(e)}}const oD=(n,e)=>Uv(n)?new sD(e):new rD(e,{allowProjection:n!==z.Fragment}),aD=KN({...ZI,...yN,...aN,...xN},oD),re=VP(aD);class lD extends z.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function cD({children:n,isPresent:e}){const t=z.useId(),i=z.useRef(null),r=z.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=z.useContext(Nv);return z.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=t;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),S.jsx(lD,{isPresent:e,childRef:i,sizeRef:r,children:z.cloneElement(n,{ref:i})})}const uD=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Fv(hD),l=z.useId(),c=z.useCallback(h=>{a.set(h,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=z.useMemo(()=>({id:l,initial:e,isPresent:t,custom:r,onExitComplete:c,register:h=>(a.set(h,!1),()=>a.delete(h))}),s?[Math.random(),c]:[t,c]);return z.useMemo(()=>{a.forEach((h,d)=>a.set(d,!1))},[t]),z.useEffect(()=>{!t&&!a.size&&i&&i()},[t]),o==="popLayout"&&(n=S.jsx(cD,{isPresent:t,children:n})),S.jsx(yf.Provider,{value:u,children:n})};function hD(){return new Map}const vu=n=>n.key||"";function p1(n){const e=[];return z.Children.forEach(n,t=>{z.isValidElement(t)&&e.push(t)}),e}const ma=({children:n,exitBeforeEnter:e,custom:t,initial:i=!0,onExitComplete:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=z.useMemo(()=>p1(n),[n]),l=a.map(vu),c=z.useRef(!0),u=z.useRef(a),h=Fv(()=>new Map),[d,p]=z.useState(a),[g,x]=z.useState(a);OT(()=>{c.current=!1,u.current=a;for(let v=0;v<g.length;v++){const y=vu(g[v]);l.includes(y)?h.delete(y):h.get(y)!==!0&&h.set(y,!1)}},[g,l.length,l.join("-")]);const m=[];if(a!==d){let v=[...a];for(let y=0;y<g.length;y++){const _=g[y],T=vu(_);l.includes(T)||(v.splice(y,0,_),m.push(_))}o==="wait"&&m.length&&(v=m),x(p1(v)),p(a);return}const{forceRender:f}=z.useContext(Iv);return S.jsx(S.Fragment,{children:g.map(v=>{const y=vu(v),_=a===g||l.includes(y),T=()=>{if(h.has(y))h.set(y,!0);else return;let w=!0;h.forEach(A=>{A||(w=!1)}),w&&(f==null||f(),x(u.current),r&&r())};return S.jsx(uD,{isPresent:_,initial:!c.current||i?void 0:!1,custom:_?void 0:t,presenceAffectsLayout:s,mode:o,onExitComplete:_?void 0:T,children:v},y)})})};var Jg=new Map,yu=new WeakMap,m1=0,dD=void 0;function fD(n){return n?(yu.has(n)||(m1+=1,yu.set(n,m1.toString())),yu.get(n)):"0"}function pD(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?fD(n.root):n[e]}`).toString()}function mD(n){const e=pD(n);let t=Jg.get(e);if(!t){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&r.some(u=>a.intersectionRatio>=u);n.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=i.get(a.target))==null||l.forEach(u=>{u(c,a)})})},n);r=s.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:s,elements:i},Jg.set(e,t)}return t}function gD(n,e,t={},i=dD){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=n.getBoundingClientRect();return e(i,{isIntersecting:i,target:n,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=mD(t),a=o.get(n)||[];return o.has(n)||o.set(n,a),a.push(e),s.observe(n),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(n),s.unobserve(n)),o.size===0&&(s.disconnect(),Jg.delete(r))}}function Gi({threshold:n,delay:e,trackVisibility:t,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[h,d]=z.useState(null),p=z.useRef(),[g,x]=z.useState({inView:!!a,entry:void 0});p.current=c,z.useEffect(()=>{if(o||!h)return;let y;return y=gD(h,(_,T)=>{x({inView:_,entry:T}),p.current&&p.current(_,T),T.isIntersecting&&s&&y&&(y(),y=void 0)},{root:r,rootMargin:i,threshold:n,trackVisibility:t,delay:e},l),()=>{y&&y()}},[Array.isArray(n)?n.toString():n,h,r,i,s,o,t,l,e]);const m=(u=g.entry)==null?void 0:u.target,f=z.useRef();!h&&m&&!s&&!o&&f.current!==m&&(f.current=m,x({inView:!!a,entry:void 0}));const v=[d,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const Qn=({children:n})=>S.jsx(re.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:n});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Fe=(n,e)=>{const t=z.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>z.createElement("svg",{ref:u,...vD,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${yD(n)}`,a].join(" "),...c},[...e.map(([h,d])=>z.createElement(h,d)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=Fe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=Fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=Fe("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=Fe("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=Fe("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=Fe("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=Fe("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=Fe("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=Fe("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=Fe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=Fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=Fe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=Fe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=Fe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=Fe("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=Fe("FileSearch",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=Fe("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=Fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=Fe("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=Fe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=Fe("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=Fe("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=Fe("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=Fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=Fe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Fe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=Fe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=Fe("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=Fe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=Fe("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=Fe("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=Fe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=Fe("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=Fe("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=Fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=Fe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=Fe("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=Fe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=Fe("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=Fe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=Fe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=Fe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=Fe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=Fe("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=Fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=Fe("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eU=Fe("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),tU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsx(nU,{}),S.jsx(iU,{}),S.jsx(rU,{}),S.jsx(sU,{})]})})}),nU=()=>S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsxs("h1",{className:"text-5xl md:text-6xl font-bold mb-6",children:["Transform Your ",S.jsx("span",{className:"text-gradient",children:"Digital Presence"})]}),S.jsx("p",{className:"text-[#94979e] text-xl max-w-3xl mx-auto mb-8",children:"We create innovative digital solutions that help businesses thrive in the modern world."}),S.jsx(re.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:S.jsxs(mo,{to:"/contact",className:"inline-flex items-center gap-2 bg-[#9dff13] text-[#03030a] px-8 py-3 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors",children:["Get Started",S.jsx(Sf,{size:20})]})})]}),iU=()=>{const n=[{icon:Mf,title:"Web Development",description:"Custom websites and web applications",path:"/services/web-development"},{icon:bf,title:"Graphic Design",description:"Stunning visual designs and branding",path:"/services/graphic-design"},{icon:wf,title:"Data Analysis",description:"Transform data into insights",path:"/services/data-analysis"},{icon:Tf,title:"Social Media",description:"Engage and grow your audience",path:"/services/social-media"}];return S.jsxs("div",{className:"mb-20",children:[S.jsx(re.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-3xl font-bold mb-12 text-center",children:"Our Services"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((e,t)=>S.jsx(re.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:t*.2,ease:"easeOut"},whileHover:{y:-10},className:"relative bg-[#03030a] border border-[#ffffff15] rounded-xl overflow-hidden group",children:S.jsxs(mo,{to:e.path,children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#9dff13]/5 to-[#9dff13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),S.jsxs("div",{className:"p-6 relative z-10",children:[S.jsx(e.icon,{className:"w-12 h-12 text-[#9dff13] mb-4"}),S.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-[#9dff13] transition-colors",children:e.title}),S.jsx("p",{className:"text-[#94979e] group-hover:text-white transition-colors",children:e.description})]})]})},t))})]})},rU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1});return S.jsxs(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},className:"mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Why Choose Us"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:oU.map((t,i)=>S.jsxs(re.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.2,ease:"easeOut"},whileHover:{y:-10},className:"relative bg-[#03030a] border border-[#ffffff15] rounded-xl overflow-hidden group",children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#9dff13]/5 to-[#9dff13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),S.jsxs("div",{className:"p-6 relative z-10",children:[S.jsx(re.div,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},className:"p-3 bg-[#9dff13]/10 rounded-xl w-fit mb-4",children:S.jsx(t.icon,{className:"w-8 h-8 text-[#9dff13]"})}),S.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-[#9dff13] transition-colors",children:t.title}),S.jsx("p",{className:"text-[#94979e] group-hover:text-white transition-colors",children:t.description})]})]},i))})]})},sU=()=>S.jsxs(re.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center bg-[#03030a]/80 backdrop-blur-sm p-12 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Get Started?"}),S.jsx("p",{className:"text-[#94979e] text-xl mb-8",children:"Let's transform your ideas into reality."}),S.jsx(re.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:S.jsxs(mo,{to:"/contact",className:"inline-flex items-center gap-2 bg-[#9dff13] text-[#03030a] px-8 py-3 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors",children:["Contact Us",S.jsx(Sf,{size:20})]})})]}),oU=[{icon:Mf,title:"Innovation",description:"Cutting-edge solutions for modern challenges"},{icon:bf,title:"Quality",description:"Exceptional results that exceed expectations"},{icon:Tf,title:"Support",description:"Dedicated assistance every step of the way"}],aU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:["Our ",S.jsx("span",{className:"text-gradient",children:"Services"})]}),S.jsx("p",{className:"text-[#94979e] text-xl max-w-3xl mx-auto",children:"Comprehensive digital solutions to help your business grow and succeed"})]}),S.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20",children:lU.map((n,e)=>S.jsx(cU,{...n,index:e},e))}),S.jsx(uU,{})]})})}),lU=[{icon:Mf,title:"Web Development",description:"Custom websites and web applications built with cutting-edge technologies.",features:["Responsive Design","E-commerce Solutions","Progressive Web Apps","Custom CMS Development"],path:"/services/web-development",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"},{icon:bf,title:"Graphic Design",description:"Creative designs that capture attention and communicate your message.",features:["Brand Identity","UI/UX Design","Marketing Materials","Social Media Graphics"],path:"/services/graphic-design",image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"},{icon:wf,title:"Data Analysis",description:"Transform your data into actionable insights for better decision making.",features:["Business Intelligence","Data Visualization","Predictive Analytics","Statistical Analysis"],path:"/services/data-analysis",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"},{icon:Tf,title:"Social Media",description:"Build and grow your brand presence across social platforms.",features:["Content Strategy","Community Management","Paid Advertising","Analytics & Reporting"],path:"/services/social-media",image:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80"}],cU=({icon:n,title:e,description:t,features:i,path:r,image:s,index:o})=>S.jsx(re.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:o*.2,ease:"easeOut"},whileHover:{y:-10},className:"group relative bg-[#03030a]/80 backdrop-blur-sm border border-[#ffffff15] rounded-xl overflow-hidden cursor-pointer",children:S.jsxs(mo,{to:r,className:"block",children:[S.jsxs("div",{className:"absolute inset-0",children:[S.jsx("img",{src:s,alt:e,className:"w-full h-full object-cover opacity-10 transition-transform duration-500 group-hover:scale-110"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#03030a] via-[#03030a]/90 to-[#03030a]/70"})]}),S.jsxs("div",{className:"relative p-8",children:[S.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[S.jsx(re.div,{className:"p-3 bg-[#9dff13]/10 rounded-xl",whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},children:S.jsx(n,{className:"w-8 h-8 text-[#9dff13]"})}),S.jsx("h3",{className:"text-2xl font-bold group-hover:text-[#9dff13] transition-colors duration-300",children:e})]}),S.jsx("p",{className:"text-[#94979e] mb-8 text-lg group-hover:text-white transition-colors duration-300",children:t}),S.jsx("ul",{className:"space-y-3 mb-8",children:i.map((a,l)=>S.jsxs(re.li,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:l*.1},className:"flex items-center gap-3 text-[#dde2ff]",children:[S.jsx("span",{className:"w-2 h-2 bg-[#9dff13] rounded-full group-hover:scale-150 transition-transform duration-300"}),a]},l))}),S.jsxs(re.div,{className:"inline-flex items-center gap-2 text-[#9dff13] font-semibold",whileHover:{x:10},transition:{type:"spring",stiffness:400,damping:10},children:["Learn More",S.jsx(re.span,{animate:{x:[0,5,0]},transition:{duration:1.5,repeat:1/0},children:"→"})]})]})]})}),uU=()=>{const n=[{number:"01",title:"Discovery",description:"Understanding your needs and objectives"},{number:"02",title:"Strategy",description:"Developing a tailored solution"},{number:"03",title:"Implementation",description:"Bringing your vision to life"},{number:"04",title:"Support",description:"Ongoing maintenance and optimization"}];return S.jsxs(re.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Our Process"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((e,t)=>S.jsxs(re.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.2},whileHover:{y:-5},className:"text-center p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-all duration-300",children:[S.jsx(re.div,{className:"text-4xl font-bold text-[#9dff13] mb-4",whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},children:e.number}),S.jsx("h3",{className:"text-xl font-semibold mb-2",children:e.title}),S.jsx("p",{className:"text-[#94979e]",children:e.description})]},t))})]})},hU="/assets/ceo-BKcAnD2Q.jpg",dU="/assets/tech-lead-BSeBA4hq.jpg",fU="/assets/creative-lead-BLUrhwmy.jpg",pU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:["About ",S.jsx("span",{className:"text-gradient",children:"SysClu"})]}),S.jsx("p",{className:"text-[#94979e] text-xl max-w-3xl mx-auto",children:"We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions."})]}),S.jsx(mU,{}),S.jsx(gU,{}),S.jsx(vU,{})]})})}),mU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{number:"100+",label:"Clients Served"},{number:"150+",label:"Projects Completed"},{number:"5+",label:"Years Experience"},{number:"98%",label:"Client Satisfaction"}];return S.jsx(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},className:"grid grid-cols-2 md:grid-cols-4 gap-8 mb-20",children:t.map((i,r)=>S.jsxs("div",{className:"text-center",children:[S.jsx("h3",{className:"text-4xl font-bold text-[#9dff13] mb-2",children:i.number}),S.jsx("p",{className:"text-[#94979e]",children:i.label})]},r))})},gU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{name:"Avinash Kumar",role:"CEO & Founder",image:hU},{name:"Ashutosh Kumar",role:"Technical Director",image:dU},{name:"Anshuman Mishra",role:"Creative Lead",image:fU}];return S.jsxs(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},className:"mb-20",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Our Leadership Team"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:t.map((i,r)=>S.jsxs(re.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.2,ease:"easeOut"},whileHover:{y:-10},className:"relative bg-[#03030a] border border-[#ffffff15] rounded-xl overflow-hidden group flex flex-col items-center",children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#9dff13]/5 to-[#9dff13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),S.jsxs("div",{className:"p-6 relative z-10 flex flex-col items-center w-full",children:[S.jsxs(re.div,{whileHover:{scale:1.05},transition:{duration:.2},className:"relative w-48 h-48 rounded-full overflow-hidden",children:[S.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"}),S.jsx("div",{className:"absolute inset-0 border-2 border-[#9dff13] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),S.jsx(re.h3,{className:"text-xl font-semibold mb-1 mt-4 text-white group-hover:text-[#9dff13] transition-colors duration-300 text-center",children:i.name}),S.jsx(re.p,{className:"text-[#94979e] group-hover:text-white transition-colors duration-300 text-center",children:i.role})]})]},r))})]})},vU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{icon:Ef,title:"Innovation",description:"Pushing boundaries with cutting-edge solutions"},{icon:Af,title:"Collaboration",description:"Working together to achieve excellence"},{icon:eE,title:"Quality",description:"Delivering exceptional results every time"},{icon:tE,title:"Growth",description:"Continuously evolving and improving"}];return S.jsxs(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},className:"bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Our Values"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:t.map((i,r)=>S.jsxs("div",{className:"text-center p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-all duration-300",children:[S.jsx(i.icon,{className:"w-12 h-12 text-[#9dff13] mx-auto mb-4"}),S.jsx("h3",{className:"text-xl font-semibold mb-2",children:i.title}),S.jsx("p",{className:"text-[#94979e]",children:i.description})]},r))})]})},yU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:["Get in ",S.jsx("span",{className:"text-gradient",children:"Touch"})]}),S.jsx("p",{className:"text-[#94979e] text-xl max-w-3xl mx-auto",children:"Have a project in mind? Let's discuss how we can help bring your ideas to life."})]}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20",children:[S.jsx(xU,{}),S.jsx(_U,{})]})]})})}),xU=()=>{const n=[{value:"web-development",label:"Web Development"},{value:"graphic-design",label:"Graphic Design"},{value:"data-analysis",label:"Data Analysis"},{value:"social-media",label:"Social Media Management"},{value:"other",label:"Other"}];return S.jsxs(re.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Send us a Message"}),S.jsxs("form",{className:"space-y-6",children:[S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[S.jsxs("div",{children:[S.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-[#94979e] mb-2",children:"Name"}),S.jsx("input",{type:"text",id:"name",className:`w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
                focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
                transition-all duration-200 placeholder-[#94979e]/50`,placeholder:"John Doe"})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-[#94979e] mb-2",children:"Email"}),S.jsx("input",{type:"email",id:"email",className:`w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
                focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
                transition-all duration-200 placeholder-[#94979e]/50`,placeholder:"john@example.com"})]})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-[#94979e] mb-2",children:"Service"}),S.jsx("div",{className:"relative select-container",children:S.jsxs("select",{id:"service",className:`w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
                focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
                transition-all duration-200 appearance-none cursor-pointer`,defaultValue:"",children:[S.jsx("option",{value:"",disabled:!0,children:"Select a service"}),n.map(e=>S.jsx("option",{value:e.value,children:e.label},e.value))]})})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-[#94979e] mb-2",children:"Subject"}),S.jsx("input",{type:"text",id:"subject",className:`w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
              focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
              transition-all duration-200 placeholder-[#94979e]/50`,placeholder:"Brief subject of your message"})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-[#94979e] mb-2",children:"Message"}),S.jsx("textarea",{id:"message",rows:6,className:`w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
              focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
              transition-all duration-200 placeholder-[#94979e]/50 resize-none`,placeholder:"Tell us about your project..."})]}),S.jsxs(re.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:`w-full bg-[#9dff13] text-[#03030a] py-3 rounded-lg font-semibold 
            hover:bg-[#8ae610] transition-all duration-200 flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-[#9dff13] focus:ring-offset-2 
            focus:ring-offset-[#03030a]`,children:[S.jsx(qD,{size:20}),"Send Message"]})]})]})},_U=()=>{const n=[{icon:zD,title:"Email",details:"contact@sysclu.com",link:"mailto:contact@sysclu.com",color:"from-[#9dff13]/20 to-[#8ae610]/5"},{icon:jD,title:"Phone",details:"+91 8252173458",link:"tel:+918252173458",color:"from-[#9dff13]/20 to-[#8ae610]/5"},{icon:v1,title:"Location",details:"Buxar, Bihar, 802101",link:"https://maps.google.com/?q=Buxar,Bihar",color:"from-[#9dff13]/20 to-[#8ae610]/5"},{icon:y1,title:"Social Media",details:"Follow us @sysclu",link:"https://www.instagram.com/sysclu",color:"from-[#9dff13]/20 to-[#8ae610]/5"}];return S.jsxs(re.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-2xl font-bold mb-8",children:"Contact Information"}),S.jsx("div",{className:"grid gap-6",children:n.map((e,t)=>S.jsxs(re.a,{href:e.link,target:e.icon===v1||e.icon===y1?"_blank":void 0,rel:"noopener noreferrer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:t*.1},className:"group relative flex items-center gap-6 p-6 rounded-xl bg-gradient-to-br from-[#ffffff08] to-transparent border border-[#ffffff08] hover:border-[#9dff13]/20 transition-all duration-300",children:[S.jsx("div",{className:`absolute inset-0 rounded-xl bg-gradient-to-r ${e.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}),S.jsx("div",{className:"relative z-10",children:S.jsx(re.div,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},className:"p-4 bg-[#9dff13]/10 rounded-xl group-hover:bg-[#9dff13]/20 transition-colors duration-300",children:S.jsx(e.icon,{className:"w-6 h-6 text-[#9dff13]"})})}),S.jsxs("div",{className:"relative z-10 flex-grow",children:[S.jsx("h3",{className:"font-semibold text-lg mb-1 text-white group-hover:text-[#9dff13] transition-colors duration-300",children:e.title}),S.jsx("p",{className:"text-[#94979e] group-hover:text-white transition-colors duration-300",children:e.details})]}),S.jsx(re.div,{className:"relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",children:S.jsx(Sf,{className:"w-5 h-5 text-[#9dff13]"})})]},t))})]})},SU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-20",children:[S.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:["Expand Your ",S.jsx("span",{className:"text-gradient",children:"Knowledge"})]}),S.jsx("p",{className:"text-[#94979e] text-xl max-w-3xl mx-auto",children:"Access our comprehensive learning resources and take your skills to the next level."})]}),S.jsx(MU,{}),S.jsx(wU,{})]})})}),MU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{icon:wD,title:"Comprehensive Courses",description:"In-depth learning materials covering various IT domains"},{icon:QD,title:"Video Tutorials",description:"Step-by-step video guides for practical learning"},{icon:Af,title:"Community Support",description:"Connect with peers and experts for guidance"},{icon:DD,title:"Certifications",description:"Earn certificates to showcase your expertise"}];return S.jsx(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20",children:t.map((i,r)=>S.jsxs("div",{className:"p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-colors",children:[S.jsx(i.icon,{className:"w-12 h-12 text-[#9dff13] mb-4"}),S.jsx("h3",{className:"text-xl font-semibold mb-2",children:i.title}),S.jsx("p",{className:"text-[#94979e]",children:i.description})]},r))})},wU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{title:"Web Development Fundamentals",duration:"8 weeks",level:"Beginner",image:"https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"},{title:"Advanced UI/UX Design",duration:"10 weeks",level:"Intermediate",image:"https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80"},{title:"Data Analysis Masterclass",duration:"12 weeks",level:"Advanced",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"}];return S.jsxs(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Featured Courses"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((i,r)=>S.jsxs("div",{className:"rounded-xl overflow-hidden bg-[#ffffff08] hover:bg-[#ffffff12] transition-colors",children:[S.jsx("img",{src:i.image,alt:i.title,className:"w-full h-48 object-cover"}),S.jsxs("div",{className:"p-6",children:[S.jsx("h3",{className:"text-xl font-semibold mb-2",children:i.title}),S.jsxs("div",{className:"flex justify-between text-[#94979e]",children:[S.jsx("span",{children:i.duration}),S.jsx("span",{children:i.level})]}),S.jsx("button",{className:"w-full mt-4 bg-[#9dff13] text-[#03030a] py-2 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors",children:"Enroll Now"})]})]},r))})]})},Cf=({title:n,subtitle:e})=>S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-20",children:[S.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:[n," ",S.jsx("span",{className:"text-gradient",children:"Services"})]}),S.jsx("p",{className:"text-[#94979e] text-xl max-w-3xl mx-auto",children:e})]}),Rf=({technologies:n})=>S.jsxs(re.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"mb-20",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Technology Stack"}),S.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:n.map((e,t)=>S.jsx(re.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{delay:t*.1},className:"p-4 rounded-lg bg-[#ffffff08] text-center hover:bg-[#ffffff12] transition-colors",children:e},t))})]}),Pf=()=>{const n=df();return S.jsxs(re.button,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3},onClick:()=>n("/services"),className:"flex items-center gap-2 text-[#dde2ff] hover:text-[#9dff13] transition-colors mb-8",children:[S.jsx(_D,{size:20}),S.jsx("span",{children:"Back to Services"})]})},bU=[{icon:Mf,title:"Custom Development",description:"Tailored solutions built from scratch to meet your specific needs"},{icon:ND,title:"Responsive Design",description:"Websites that work flawlessly across all devices and screen sizes"},{icon:$D,title:"Progressive Web Apps",description:"Web apps that offer native-like experience on mobile devices"},{icon:wf,title:"Database Integration",description:"Robust data management solutions for your applications"},{icon:LD,title:"Performance Optimization",description:"Lightning-fast loading speeds and optimal user experience"},{icon:BD,title:"Security",description:"Advanced security measures to protect your web applications"}],TU=["React","Node.js","TypeScript","Next.js","MongoDB","PostgreSQL","AWS","Docker","GraphQL"],EU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-16",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[S.jsx(Pf,{}),S.jsxs("div",{className:"bg-[#03030a]/80 backdrop-blur-md border border-[#ffffff08] rounded-xl p-6 mt-24",children:[S.jsx(Cf,{title:"Web Development",subtitle:"Creating powerful, scalable, and beautiful web applications"}),S.jsx("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:bU.map((n,e)=>S.jsxs(re.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:e*.2,ease:"easeOut"},whileHover:{y:-10},className:"relative bg-[#03030a] border border-[#ffffff15] rounded-xl overflow-hidden group",children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#9dff13]/5 to-[#9dff13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),S.jsxs("div",{className:"p-6 relative z-10",children:[S.jsx(re.div,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},className:"p-3 bg-[#9dff13]/10 rounded-xl w-fit mb-4",children:S.jsx(n.icon,{className:"w-8 h-8 text-[#9dff13]"})}),S.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-[#9dff13] transition-colors",children:n.title}),S.jsx("p",{className:"text-[#94979e] group-hover:text-white transition-colors",children:n.description})]})]},e))}),S.jsxs("div",{className:"space-y-8",children:[S.jsx(Rf,{technologies:TU}),S.jsx(AU,{}),S.jsx(CU,{})]})]})]})})}),AU=()=>{const n=[{title:"E-commerce Platform",description:"Full-stack e-commerce solution with advanced features",image:"https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",category:"Web App"},{title:"CMS Dashboard",description:"Custom content management system with real-time updates",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",category:"Dashboard"},{title:"SaaS Application",description:"Cloud-based software solution for business management",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",category:"SaaS"}];return S.jsxs(re.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-[#03030a]/60 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Featured Projects"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map((e,t)=>S.jsxs(re.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.2},className:"group relative bg-[#03030a]/40 backdrop-blur-sm rounded-xl overflow-hidden",children:[S.jsx("div",{className:"aspect-w-16 aspect-h-9",children:S.jsx("img",{src:e.image,alt:e.title,className:"w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"})}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:S.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[S.jsx("span",{className:"text-[#9dff13] text-sm font-medium mb-2 block",children:e.category}),S.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:e.title}),S.jsx("p",{className:"text-[#94979e] text-sm",children:e.description})]})})]},t))})]})},CU=()=>{const n=[{phase:"Planning",description:"Project scope and requirements analysis",icon:ID,details:{title:"Discovery & Planning Phase",points:["Requirement gathering and analysis","Project scope definition","Technology stack selection","Timeline and milestone planning","Resource allocation"],image:"https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"}},{phase:"Design",description:"UI/UX design and prototyping",icon:WD,details:{title:"Design & Prototyping",points:["Wireframe creation","UI/UX design","Interactive prototypes","Design system development","Client feedback integration"],image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"}},{phase:"Development",description:"Frontend and backend implementation",icon:FD,details:{title:"Development & Implementation",points:["Frontend development","Backend API creation","Database architecture","Integration of features","Code review and optimization"],image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"}},{phase:"Testing",description:"Quality assurance and bug fixing",icon:ZD,details:{title:"Testing & Quality Assurance",points:["Unit testing","Integration testing","Performance optimization","Security testing","Cross-browser compatibility"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"}},{phase:"Deployment",description:"Launch and maintenance",icon:tE,details:{title:"Deployment & Maintenance",points:["Server configuration","Deployment automation","Performance monitoring","Regular updates","Ongoing support"],image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"}}],[e,t]=z.useState(null),i=window.innerWidth<768;return S.jsxs(re.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-[#03030a]/60 backdrop-blur-sm p-4 md:p-8 rounded-xl border border-[#ffffff08] mb-8",children:[S.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center",children:"Our Development Process"}),S.jsxs("div",{className:"relative max-w-5xl mx-auto",children:[S.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#9dff13]/20 via-[#9dff13]/10 to-transparent hidden md:block"}),n.map((r,s)=>S.jsx("div",{className:`
              mb-12 last:mb-0 relative 
              ${i?"pl-4":s%2===0?"pr-1/2":"pl-1/2"}
            `,children:S.jsxs(re.div,{initial:{opacity:0,x:i?-20:s%2===0?-50:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:s*.2},className:"relative",onMouseEnter:()=>!i&&t(s),onMouseLeave:()=>!i&&t(null),onClick:()=>i&&t(e===s?null:s),children:[S.jsx("div",{className:`
                absolute top-0 
                ${i?"left-0 -translate-x-1/2":"left-1/2 -translate-x-1/2"} 
                -translate-y-1/2
              `,children:S.jsx(re.div,{whileHover:{scale:1.2},className:"w-8 h-8 md:w-12 md:h-12 bg-[#9dff13]/10 rounded-full border-2 border-[#9dff13] flex items-center justify-center",children:S.jsx(r.icon,{className:"w-4 h-4 md:w-6 md:h-6 text-[#9dff13]"})})}),S.jsxs("div",{className:`
                bg-[#ffffff08] rounded-xl p-4 md:p-6
                ${i?"ml-6":s%2===0?"mr-12":"ml-12"}
                hover:bg-[#ffffff10] transition-colors duration-300
                cursor-pointer md:cursor-default
              `,children:[S.jsx("h3",{className:"text-lg md:text-xl font-bold text-white mb-2",children:r.phase}),S.jsx("p",{className:"text-sm md:text-base text-[#94979e]",children:r.description}),S.jsx(ma,{children:e===s&&S.jsx(re.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"overflow-hidden mt-4",children:S.jsx("div",{className:"pt-4 border-t border-[#ffffff15]",children:S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[S.jsxs("div",{className:"relative h-24 md:h-32 rounded-lg overflow-hidden",children:[S.jsx("img",{src:r.details.image,alt:r.phase,className:"w-full h-full object-cover"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#03030a] to-transparent"})]}),S.jsx("ul",{className:"space-y-2",children:r.details.points.map((o,a)=>S.jsxs(re.li,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:a*.1},className:"flex items-center gap-2 text-[#94979e] text-xs md:text-sm",children:[S.jsx("span",{className:"w-1 h-1 bg-[#9dff13] rounded-full flex-shrink-0"}),o]},a))})]})})})})]})]})},s))]})]})},Hv=({icon:n,title:e,description:t,index:i})=>S.jsxs(re.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.2,ease:"easeOut"},whileHover:{y:-10},className:"relative bg-[#03030a] border border-[#ffffff15] rounded-xl overflow-hidden group",children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#9dff13]/5 to-[#9dff13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),S.jsxs("div",{className:"p-6 relative z-10",children:[S.jsx(re.div,{whileHover:{scale:1.1},transition:{type:"spring",stiffness:400,damping:10},className:"p-3 bg-[#9dff13]/10 rounded-xl w-fit mb-4",children:S.jsx(n,{className:"w-8 h-8 text-[#9dff13]"})}),S.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-[#9dff13] transition-colors",children:e}),S.jsx("p",{className:"text-[#94979e] group-hover:text-white transition-colors",children:t})]})]}),RU=[{icon:bf,title:"Brand Identity",description:"Create a unique and memorable brand identity that resonates with your audience"},{icon:GD,title:"UI/UX Design",description:"Design intuitive and engaging user interfaces for web and mobile applications"},{icon:UD,title:"Visual Design",description:"Create stunning visuals that capture attention and communicate your message"},{icon:ED,title:"Illustration",description:"Custom illustrations and graphics that bring your ideas to life"},{icon:Ef,title:"Marketing Design",description:"Eye-catching marketing materials that drive engagement"},{icon:Af,title:"Social Media",description:"Engaging social media graphics that build your online presence"}],PU=["Adobe Creative Suite","Figma","Sketch","After Effects","Illustrator","Photoshop","InDesign","Blender"],IU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsx(Pf,{}),S.jsxs("div",{className:"bg-[#03030a]/80 backdrop-blur-md border border-[#ffffff08] rounded-xl p-8",children:[S.jsx(Cf,{title:"Graphic Design",subtitle:"Creating visually stunning designs that tell your story"}),S.jsx("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20",children:RU.map((n,e)=>S.jsx(Hv,{...n,index:e},e))}),S.jsxs("div",{className:"space-y-12",children:[S.jsx(Rf,{technologies:PU}),S.jsx(LU,{})]})]})]})})}),LU=()=>{const n=[{title:"Brand Identity",description:"Complete brand identity design including logo, color palette, and guidelines",image:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",category:"Branding"},{title:"UI/UX Design",description:"Modern and intuitive user interface design for mobile applications",image:"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",category:"UI/UX"},{title:"Marketing Campaign",description:"Comprehensive visual design for multi-channel marketing campaigns",image:"https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",category:"Marketing"}];return S.jsxs(re.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Featured Work"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map((e,t)=>S.jsxs(re.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.2},className:"group relative bg-[#ffffff08] rounded-xl overflow-hidden",children:[S.jsx("div",{className:"aspect-w-16 aspect-h-9",children:S.jsx("img",{src:e.image,alt:e.title,className:"w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"})}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:S.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[S.jsx("span",{className:"text-[#9dff13] text-sm font-medium mb-2 block",children:e.category}),S.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:e.title}),S.jsx("p",{className:"text-[#94979e] text-sm",children:e.description})]})})]},t))})]})},NU=[{icon:wf,title:"Data Collection",description:"Gather and organize data from multiple sources efficiently"},{icon:nE,title:"Data Mining",description:"Extract valuable patterns and insights from large datasets"},{icon:SD,title:"Statistical Analysis",description:"Advanced statistical methods to validate hypotheses"},{icon:XD,title:"Data Visualization",description:"Create compelling visual representations of data"},{icon:KD,title:"Predictive Analytics",description:"Forecast trends and make data-driven predictions"},{icon:bD,title:"Machine Learning",description:"Implement ML models for advanced data analysis"}],DU=["Python","R","Tableau","Power BI","TensorFlow","Pandas","SQL","Jupyter"],UU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsx(Pf,{}),S.jsxs("div",{className:"bg-[#03030a]/80 backdrop-blur-md border border-[#ffffff08] rounded-xl p-8",children:[S.jsx(Cf,{title:"Data Analysis",subtitle:"Transform raw data into actionable insights"}),S.jsx("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20",children:NU.map((n,e)=>S.jsx(Hv,{...n,index:e},e))}),S.jsxs("div",{className:"space-y-12",children:[S.jsx(Rf,{technologies:DU}),S.jsx(kU,{})]})]})]})})}),kU=()=>{const n=[{title:"Market Analysis",description:"Comprehensive market trend analysis for e-commerce platform",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",category:"Business Intelligence"},{title:"Predictive Modeling",description:"Sales forecasting model with 95% accuracy",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",category:"Machine Learning"},{title:"Data Visualization",description:"Interactive dashboard for real-time performance monitoring",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",category:"Analytics"}];return S.jsxs(re.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-[#03030a]/60 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Success Stories"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map((e,t)=>S.jsxs(re.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.2},className:"group relative bg-[#03030a]/40 backdrop-blur-sm rounded-xl overflow-hidden",children:[S.jsx("div",{className:"aspect-w-16 aspect-h-9",children:S.jsx("img",{src:e.image,alt:e.title,className:"w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"})}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:S.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[S.jsx("span",{className:"text-[#9dff13] text-sm font-medium mb-2 block",children:e.category}),S.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:e.title}),S.jsx("p",{className:"text-[#94979e] text-sm",children:e.description})]})})]},t))})]})},FU=[{icon:Tf,title:"Content Strategy",description:"Develop engaging content strategies that resonate with your audience"},{icon:Af,title:"Community Management",description:"Build and nurture your online community across platforms"},{icon:MD,title:"Analytics & Reporting",description:"Track and analyze social media performance metrics"},{icon:HD,title:"Engagement",description:"Increase audience interaction and brand loyalty"},{icon:Ef,title:"Paid Advertising",description:"Strategic paid social campaigns that drive results"},{icon:AD,title:"Content Calendar",description:"Organized content planning and scheduling"}],OU=["Instagram","Facebook","Twitter","LinkedIn","TikTok","Pinterest","YouTube","Buffer"],BU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsx(Pf,{}),S.jsxs("div",{className:"bg-[#03030a]/80 backdrop-blur-md border border-[#ffffff08] rounded-xl p-8",children:[S.jsx(Cf,{title:"Social Media Management",subtitle:"Build your brand's presence across social platforms"}),S.jsx("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20",children:FU.map((n,e)=>S.jsx(Hv,{...n,index:e},e))}),S.jsxs("div",{className:"space-y-12",children:[S.jsx(Rf,{technologies:OU}),S.jsx(zU,{})]})]})]})})}),zU=()=>{const n=[{title:"Brand Growth Campaign",description:"Increased social media following by 200% in 3 months",image:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",category:"Social Growth"},{title:"Influencer Marketing",description:"Successful collaboration with industry influencers",image:"https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",category:"Marketing"},{title:"Content Strategy",description:"Developed comprehensive content strategy for brand awareness",image:"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",category:"Strategy"}];return S.jsxs(re.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Success Stories"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map((e,t)=>S.jsxs(re.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.2},className:"group relative bg-[#ffffff08] rounded-xl overflow-hidden",children:[S.jsx("div",{className:"aspect-w-16 aspect-h-9",children:S.jsx("img",{src:e.image,alt:e.title,className:"w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"})}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:S.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[S.jsx("span",{className:"text-[#9dff13] text-sm font-medium mb-2 block",children:e.category}),S.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:e.title}),S.jsx("p",{className:"text-[#94979e] text-sm",children:e.description})]})})]},t))})]})},VU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsx(re.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-4xl font-bold mb-8",children:"Privacy Policy"}),S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"space-y-6 text-[#94979e]",children:[S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"1. Information We Collect"}),S.jsx("p",{children:"We collect information that you provide directly to us, including:"}),S.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[S.jsx("li",{children:"Name and contact information"}),S.jsx("li",{children:"Account credentials"}),S.jsx("li",{children:"Communication preferences"}),S.jsx("li",{children:"Service usage information"})]})]}),S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"2. How We Use Your Information"}),S.jsx("p",{children:"We use the information we collect to:"}),S.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[S.jsx("li",{children:"Provide and maintain our services"}),S.jsx("li",{children:"Process your transactions"}),S.jsx("li",{children:"Send you technical notices and support messages"}),S.jsx("li",{children:"Communicate with you about products, services, and events"})]})]}),S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"3. Information Sharing"}),S.jsx("p",{children:"We do not sell or rent your personal information to third parties. We may share your information with:"}),S.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[S.jsx("li",{children:"Service providers who assist in our operations"}),S.jsx("li",{children:"Professional advisers"}),S.jsx("li",{children:"Law enforcement when required by law"})]})]}),S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"4. Security"}),S.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."})]}),S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"5. Contact Us"}),S.jsx("p",{children:"If you have any questions about this Privacy Policy, please contact us at:"}),S.jsx("p",{className:"mt-2",children:"Email: privacy@sysclu.com"})]})]})]})})}),HU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsx(re.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-4xl font-bold mb-8",children:"Terms of Service"}),S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"space-y-6 text-[#94979e]",children:[S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"1. Acceptance of Terms"}),S.jsx("p",{children:"By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations."})]}),S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"2. Use License"}),S.jsx("p",{children:"Permission is granted to temporarily access our services for personal, non-commercial use only. This license does not include:"}),S.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2",children:[S.jsx("li",{children:"Modifying or copying our materials"}),S.jsx("li",{children:"Using materials for commercial purposes"}),S.jsx("li",{children:"Attempting to reverse engineer any software"}),S.jsx("li",{children:"Removing any copyright or proprietary notations"})]})]}),S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"3. Service Modifications"}),S.jsx("p",{children:"We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service."})]}),S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"4. Limitation of Liability"}),S.jsx("p",{children:"We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services."})]}),S.jsxs("section",{children:[S.jsx("h2",{className:"text-2xl font-semibold text-[#dde2ff] mb-4",children:"5. Governing Law"}),S.jsx("p",{children:"These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions."})]})]})]})})}),GU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-20",children:[S.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:["Find the Perfect ",S.jsx("span",{className:"text-gradient",children:"Freelancer"})]}),S.jsx("p",{className:"text-[#94979e] text-xl max-w-3xl mx-auto",children:"Connect with skilled professionals for your next project."})]}),S.jsx(WU,{}),S.jsx(jU,{}),S.jsx(XU,{})]})})}),WU=()=>S.jsx("div",{className:"mb-16",children:S.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[S.jsx("div",{className:"flex-1",children:S.jsx("input",{type:"text",placeholder:"Search skills or services...",className:"w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff20] focus:border-[#9dff13] focus:outline-none"})}),S.jsx("button",{className:"bg-[#9dff13] text-[#03030a] px-8 py-3 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors",children:"Search Freelancers"})]})}),jU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{name:"Alex Johnson",role:"Full Stack Developer",rating:4.9,hourlyRate:"$45",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"},{name:"Sarah Chen",role:"UI/UX Designer",rating:4.8,hourlyRate:"$40",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"},{name:"Mike Wilson",role:"Data Analyst",rating:4.7,hourlyRate:"$35",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"}];return S.jsx(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20",children:t.map((i,r)=>S.jsxs("div",{className:"p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-colors",children:[S.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[S.jsx("img",{src:i.image,alt:i.name,className:"w-16 h-16 rounded-full object-cover"}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-semibold",children:i.name}),S.jsx("p",{className:"text-[#94979e]",children:i.role})]})]}),S.jsxs("div",{className:"flex justify-between items-center mb-4",children:[S.jsxs("div",{className:"flex items-center gap-1",children:[S.jsx(iE,{className:"w-5 h-5 text-[#9dff13]"}),S.jsx("span",{children:i.rating})]}),S.jsxs("div",{className:"text-[#94979e]",children:[i.hourlyRate,"/hr"]})]}),S.jsx("button",{className:"w-full bg-[#9dff13] text-[#03030a] py-2 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors",children:"View Profile"})]},r))})},XU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{icon:nE,title:"Easy to Find",description:"Quick and simple process to find the right talent"},{icon:iE,title:"Top Talent",description:"Access to highly skilled and verified professionals"},{icon:YD,title:"Secure Hiring",description:"Protected payments and confidential information"},{icon:RD,title:"Competitive Rates",description:"Find professionals within your budget"}];return S.jsxs(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Why Choose Us"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:t.map((i,r)=>S.jsxs("div",{className:"text-center p-6 rounded-xl bg-[#ffffff08]",children:[S.jsx(i.icon,{className:"w-12 h-12 text-[#9dff13] mx-auto mb-4"}),S.jsx("h3",{className:"text-xl font-semibold mb-2",children:i.title}),S.jsx("p",{className:"text-[#94979e]",children:i.description})]},r))})]})},qU=()=>S.jsx(Qn,{children:S.jsx("div",{className:"min-h-screen pt-20",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[S.jsxs(re.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-20",children:[S.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:["Find Your Next ",S.jsx("span",{className:"text-gradient",children:"Opportunity"})]}),S.jsx("p",{className:"text-[#94979e] text-xl max-w-3xl mx-auto",children:"Showcase your skills and connect with clients looking for your expertise."})]}),S.jsx(YU,{}),S.jsx($U,{}),S.jsx(ZU,{})]})})}),YU=()=>S.jsxs("div",{className:"mb-16 p-8 rounded-xl bg-[#ffffff08]",children:[S.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Complete Your Profile"}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium mb-2",children:"Professional Title"}),S.jsx("input",{type:"text",placeholder:"e.g., Full Stack Developer",className:"w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff20] focus:border-[#9dff13] focus:outline-none"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium mb-2",children:"Hourly Rate ($)"}),S.jsx("input",{type:"number",placeholder:"e.g., 45",className:"w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff20] focus:border-[#9dff13] focus:outline-none"})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium mb-2",children:"Skills"}),S.jsx("textarea",{placeholder:"List your key skills...",rows:5,className:"w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff20] focus:border-[#9dff13] focus:outline-none"})]})]}),S.jsx("button",{className:"mt-6 bg-[#9dff13] text-[#03030a] px-8 py-3 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors",children:"Update Profile"})]}),$U=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{title:"Senior React Developer",company:"Tech Solutions Inc.",type:"Full-time",budget:"$60-80k/year",description:"Looking for an experienced React developer to join our team..."},{title:"UI/UX Designer",company:"Creative Studio",type:"Contract",budget:"$45/hour",description:"Seeking a talented designer for our upcoming projects..."},{title:"Data Scientist",company:"Analytics Pro",type:"Part-time",budget:"$50/hour",description:"Need a data scientist for analyzing customer behavior..."}];return S.jsxs(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},className:"mb-20",children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"Latest Opportunities"}),S.jsx("div",{className:"space-y-6",children:t.map((i,r)=>S.jsxs("div",{className:"p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-colors",children:[S.jsxs("div",{className:"flex justify-between items-start mb-4",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-xl font-semibold",children:i.title}),S.jsx("p",{className:"text-[#94979e]",children:i.company})]}),S.jsxs("div",{className:"text-right",children:[S.jsx("span",{className:"bg-[#9dff13] text-[#03030a] px-3 py-1 rounded-full text-sm font-medium",children:i.type}),S.jsx("p",{className:"text-[#94979e] mt-2",children:i.budget})]})]}),S.jsx("p",{className:"text-[#94979e]",children:i.description}),S.jsx("button",{className:"mt-4 bg-[#ffffff12] text-[#dde2ff] px-6 py-2 rounded-lg hover:bg-[#ffffff20] transition-colors",children:"Apply Now"})]},r))})]})},ZU=()=>{const[n,e]=Gi({triggerOnce:!0,threshold:.1}),t=[{icon:TD,title:"Create Profile",description:"Set up your professional profile"},{icon:Ef,title:"Find Jobs",description:"Browse relevant opportunities"},{icon:CD,title:"Submit Proposals",description:"Apply to interesting projects"},{icon:eE,title:"Get Hired",description:"Start working and earning"}];return S.jsxs(re.div,{ref:n,initial:{opacity:0,y:50},animate:e?{opacity:1,y:0}:{},transition:{duration:.5},children:[S.jsx("h2",{className:"text-3xl font-bold mb-12 text-center",children:"How It Works"}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:t.map((i,r)=>S.jsxs("div",{className:"text-center p-6 rounded-xl bg-[#ffffff08]",children:[S.jsx(i.icon,{className:"w-12 h-12 text-[#9dff13] mx-auto mb-4"}),S.jsx("h3",{className:"text-xl font-semibold mb-2",children:i.title}),S.jsx("p",{className:"text-[#94979e]",children:i.description})]},r))})]})},KU=()=>S.jsxs(re.svg,{width:"120",height:"40",viewBox:"0 0 120 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"overflow-visible",children:[S.jsx(re.path,{d:"M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z",fill:"#03030a",stroke:"#9dff13",strokeWidth:"2",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:1.5,ease:"easeInOut"}}),S.jsx(re.path,{d:"M20 10L28.6603 15V25L20 30L11.3397 25V15L20 10Z",stroke:"#9dff13",strokeWidth:"1.5",strokeDasharray:"2 2",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:1}}),S.jsx(re.circle,{cx:"20",cy:"10",r:"2",fill:"#9dff13",initial:{scale:0},animate:{scale:1},transition:{delay:1,duration:.3}}),S.jsx(re.circle,{cx:"28.6603",cy:"15",r:"2",fill:"#9dff13",initial:{scale:0},animate:{scale:1},transition:{delay:1.1,duration:.3}}),S.jsx(re.circle,{cx:"28.6603",cy:"25",r:"2",fill:"#9dff13",initial:{scale:0},animate:{scale:1},transition:{delay:1.2,duration:.3}}),S.jsx(re.circle,{cx:"20",cy:"30",r:"2",fill:"#9dff13",initial:{scale:0},animate:{scale:1},transition:{delay:1.3,duration:.3}}),S.jsx(re.circle,{cx:"11.3397",cy:"25",r:"2",fill:"#9dff13",initial:{scale:0},animate:{scale:1},transition:{delay:1.4,duration:.3}}),S.jsx(re.circle,{cx:"11.3397",cy:"15",r:"2",fill:"#9dff13",initial:{scale:0},animate:{scale:1},transition:{delay:1.5,duration:.3}}),S.jsx(re.text,{x:"45",y:"25",fill:"#ffffff",fontSize:"24",fontWeight:"bold",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:1.6,duration:.5},children:"SysClu"})]}),x1=()=>{const n=df();return S.jsxs(re.button,{onClick:()=>n("/contact"),className:"relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-transparent rounded-lg group w-full md:w-auto",children:[S.jsx("span",{className:"absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#9dff13] group-hover:translate-x-0 ease",children:S.jsx(Sf,{className:"text-[#03030a] w-5 h-5"})}),S.jsx("span",{className:"absolute flex items-center justify-center w-full h-full text-[#9dff13] transition-all duration-300 transform group-hover:translate-x-full ease",children:"Get Started"}),S.jsx("span",{className:"relative invisible",children:"Get Started"})]})},JU=()=>{const[n,e]=z.useState(!1),[t,i]=z.useState(!1),r=z.useRef(null);df();const s=po();z.useEffect(()=>{e(!1),i(!1)},[s.pathname]),z.useEffect(()=>{const a=l=>{r.current&&!r.current.contains(l.target)&&i(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const o=[{path:"/",label:"Home"},{path:"/services",label:"Services"},{path:"/learning",label:"Learning"},{label:"Work",submenu:[{path:"/hire-freelancer",label:"Hire Freelancer"},{path:"/get-hired",label:"Get Hired"}]},{path:"/about",label:"About"},{path:"/contact",label:"Contact"}];return S.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-[#03030a]/95 backdrop-blur-md border-b border-[#ffffff08] shadow-lg",children:[S.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:S.jsxs("div",{className:"flex items-center justify-between h-16",children:[S.jsx(Qa,{to:"/",className:"flex-shrink-0",children:S.jsx(KU,{})}),S.jsx("div",{className:"hidden md:flex md:items-center md:space-x-8",children:o.map((a,l)=>a.submenu?S.jsxs("div",{className:"relative",ref:r,children:[S.jsxs("button",{onClick:()=>i(!t),className:"flex items-center gap-1 text-base text-[#dde2ff] hover:text-[#9dff13] transition-colors py-2",children:[a.label,S.jsx(re.div,{animate:{rotate:t?180:0},transition:{duration:.2},children:S.jsx(g1,{size:16})})]}),S.jsx(ma,{children:t&&S.jsx(re.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"absolute top-full left-0 mt-2 w-48 rounded-lg bg-[#03030a]/95 backdrop-blur-md border border-[#ffffff08] shadow-xl py-2",children:a.submenu.map((c,u)=>S.jsx(Qa,{to:c.path,onClick:()=>i(!1),className:({isActive:h})=>`block px-4 py-2 text-[#dde2ff] hover:bg-[#ffffff08] hover:text-[#9dff13] transition-colors ${h?"text-[#9dff13] bg-[#ffffff08]":""}`,children:c.label},u))})})]},l):S.jsx(Qa,{to:a.path,className:({isActive:c})=>`nav-link text-base hover:text-[#9dff13] transition-colors py-2 ${c?"text-[#9dff13]":"text-[#dde2ff]"}`,children:a.label},l))}),S.jsx("div",{className:"hidden md:flex items-center",children:S.jsx(x1,{})}),S.jsx("button",{onClick:()=>e(!n),className:"md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#dde2ff] hover:text-[#9dff13] transition-colors mr-2","aria-label":"Toggle menu",children:n?S.jsx(rE,{size:24}):S.jsx(VD,{size:24})})]})}),S.jsx(ma,{children:n&&S.jsx(re.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.2},className:"md:hidden bg-[#03030a]/95 backdrop-blur-md border-b border-[#ffffff08]",children:S.jsxs("div",{className:"px-4 py-2 space-y-2",children:[o.map((a,l)=>a.submenu?S.jsxs("div",{className:"py-2",children:[S.jsxs("button",{onClick:()=>i(!t),className:"w-full flex items-center justify-between text-[#dde2ff] hover:text-[#9dff13] transition-colors py-3 px-2",children:[S.jsx("span",{children:a.label}),S.jsx(re.div,{animate:{rotate:t?180:0},transition:{duration:.2},children:S.jsx(g1,{size:16})})]}),S.jsx(ma,{children:t&&S.jsx(re.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"pl-4 space-y-2 mt-2",children:a.submenu.map((c,u)=>S.jsx(Qa,{to:c.path,className:({isActive:h})=>`block py-2 px-2 text-base ${h?"text-[#9dff13]":"text-[#dde2ff]"} hover:text-[#9dff13] transition-colors`,onClick:()=>{i(!1),e(!1)},children:c.label},u))})})]},l):S.jsx(Qa,{to:a.path,className:({isActive:c})=>`block py-3 px-2 text-base ${c?"text-[#9dff13]":"text-[#dde2ff]"} hover:text-[#9dff13] transition-colors`,onClick:()=>e(!1),children:a.label},l)),S.jsx("div",{className:"py-3 px-2",children:S.jsx(x1,{})})]})})})]})},QU=()=>{const n={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},e={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return S.jsxs("footer",{className:"bg-[#03030a] border-t border-[#ffffff08] mt-auto relative overflow-hidden",children:[S.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[S.jsx("div",{className:"absolute w-96 h-96 bg-[#9dff13] rounded-full blur-[128px] opacity-10 -top-48 -left-48 animate-blob"}),S.jsx("div",{className:"absolute w-96 h-96 bg-[#9dff13] rounded-full blur-[128px] opacity-10 -bottom-48 -right-48 animate-blob animation-delay-2000"})]}),S.jsxs(re.div,{variants:n,initial:"hidden",whileInView:"show",viewport:{once:!0},className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10",children:[S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",children:[S.jsxs(re.div,{variants:e,children:[S.jsx(mo,{to:"/",className:"text-2xl font-bold text-gradient mb-4 inline-block",children:"SysClu"}),S.jsx("p",{className:"text-[#94979e] mb-4",children:"Transforming businesses through innovative digital solutions."}),S.jsxs("div",{className:"flex space-x-4",children:[S.jsx(tl,{Icon:PD,href:"https://www.facebook.com/profile.php?id=61569718163716&mibextid=ZbWKwL"}),S.jsx(tl,{Icon:JD,href:"https://x.com/syscluinfo?t=IetImTeD-juW1BvMjKwVIQ&s=09"}),S.jsx(tl,{Icon:kD,href:"https://www.instagram.com/sysclu/profilecard/?igsh=OWk2cDhhOTNsdTBk"}),S.jsx(tl,{Icon:OD,href:"https://www.linkedin.com/company/105066538/admin/dashboard/"}),S.jsx(tl,{Icon:eU,href:"https://youtube.com/@sysclu?si=UAT2V5hkDAgOm6FZ"})]})]}),S.jsxs(re.div,{variants:e,children:[S.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Services"}),S.jsxs("ul",{className:"space-y-2",children:[S.jsx(Cr,{text:"Web Development",to:"/services/web-development"}),S.jsx(Cr,{text:"Graphic Design",to:"/services/graphic-design"}),S.jsx(Cr,{text:"Data Analysis",to:"/services/data-analysis"}),S.jsx(Cr,{text:"Social Media",to:"/services/social-media"})]})]}),S.jsxs(re.div,{variants:e,children:[S.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Company"}),S.jsxs("ul",{className:"space-y-2",children:[S.jsx(Cr,{text:"About Us",to:"/about"}),S.jsx(Cr,{text:"Contact",to:"/contact"}),S.jsx(Cr,{text:"Privacy Policy",to:"/privacy-policy"}),S.jsx(Cr,{text:"Terms of Service",to:"/terms-of-service"})]})]}),S.jsxs(re.div,{variants:e,children:[S.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Contact"}),S.jsxs("ul",{className:"space-y-2 text-[#94979e]",children:[S.jsx("li",{children:"Buxar"}),S.jsx("li",{children:"Bihar, 802101"}),S.jsx("li",{children:S.jsx("a",{href:"mailto:contact@sysclu.com",className:"hover:text-[#9dff13] transition-colors",children:"contact@sysclu.com"})}),S.jsx("li",{children:S.jsx("a",{href:"tel:+918252173458",className:"hover:text-[#9dff13] transition-colors",children:"+91 8252173458"})})]})]})]}),S.jsx(re.div,{variants:e,className:"border-t border-[#ffffff08] pt-8 text-center text-[#94979e]",children:S.jsxs("p",{children:["© ",new Date().getFullYear()," SysClu. All rights reserved."]})})]})]})},tl=({Icon:n,href:e})=>S.jsx(re.a,{href:e,className:"w-10 h-10 rounded-full bg-[#ffffff08] flex items-center justify-center hover:bg-[#ffffff12] transition-colors",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.95},children:S.jsx(n,{className:"w-5 h-5"})}),Cr=({text:n,to:e="#"})=>S.jsx("li",{children:S.jsx(mo,{to:e,className:"text-[#94979e] hover:text-[#9dff13] transition-colors",children:n})}),_1=["Transforming ideas into digital reality","Innovation meets excellence","Building the future of technology","Creating seamless digital experiences","Empowering businesses through technology","Where creativity meets functionality"],ek=()=>{const[n,e]=z.useState("");return z.useEffect(()=>{const t=_1[Math.floor(Math.random()*_1.length)];e(t)},[]),S.jsxs(re.div,{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03030a]",initial:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[S.jsx(re.div,{className:"w-20 h-20 border-4 border-[#9dff13] rounded-full mb-8",animate:{rotate:360,borderRadius:["50%","30%","50%"]},transition:{duration:2,repeat:1/0,ease:"linear"}}),S.jsx(re.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-[#dde2ff] text-xl font-medium text-center max-w-md px-4",children:n})]})},S1=["Innovating for tomorrow","Creating digital excellence","Transforming ideas into reality","Building the future","Designing success"],tk=()=>{const[n,e]=z.useState("");return z.useEffect(()=>{const t=S1[Math.floor(Math.random()*S1.length)];e(t)},[]),S.jsxs(re.div,{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03030a]",initial:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[S.jsx(re.div,{className:"w-16 h-16 border-4 border-[#9dff13] border-t-transparent rounded-full",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),S.jsx(re.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.2},className:"mt-4 text-lg text-[#dde2ff]",children:n})]})},nk=()=>{const[n,e]=z.useState(!1);return z.useEffect(()=>{const t=setTimeout(()=>{e(!0)},1e3);return()=>clearTimeout(t)},[]),S.jsx(ma,{children:n&&S.jsxs(re.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",stiffness:500,damping:30},className:"fixed bottom-4 right-4 z-50 w-96 bg-[#03030a] border border-[#ffffff08] rounded-lg shadow-xl overflow-hidden",children:[S.jsxs("div",{className:"p-6",children:[S.jsxs("div",{className:"flex items-start justify-between",children:[S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("div",{className:"p-2 bg-[#9dff13]/10 rounded-lg",children:S.jsx(xD,{className:"w-6 h-6 text-[#9dff13]"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"font-semibold text-white",children:"Development Notice"}),S.jsx("p",{className:"mt-1 text-sm text-[#94979e]",children:"This website is currently under development. Some features might not work as expected."})]})]}),S.jsx("button",{onClick:()=>e(!1),className:"text-[#94979e] hover:text-white transition-colors",children:S.jsx(rE,{size:20})})]}),S.jsx("div",{className:"mt-4 flex gap-3",children:S.jsx(re.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>e(!1),className:"flex-1 px-4 py-2 bg-[#9dff13] text-[#03030a] rounded-lg font-medium hover:bg-[#8ae610] transition-colors",children:"Got it"})})]}),S.jsx(re.div,{initial:{width:"100%"},animate:{width:"0%"},transition:{duration:10,ease:"linear"},onAnimationComplete:()=>e(!1),className:"h-1 bg-[#9dff13]"})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="170",ik={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rk={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sE=0,Qg=1,oE=2,sk=3,ok=0,Gv=1,aE=2,Ii=3,_r=0,Mn=1,Ni=2,fr=0,Zs=1,e0=2,t0=3,n0=4,lE=5,Hr=100,cE=101,uE=102,hE=103,dE=104,fE=200,pE=201,mE=202,gE=203,ld=204,cd=205,vE=206,yE=207,xE=208,_E=209,SE=210,ME=211,wE=212,bE=213,TE=214,ud=0,hd=1,dd=2,so=3,fd=4,pd=5,md=6,gd=7,Bc=0,EE=1,AE=2,pr=0,CE=1,RE=2,PE=3,IE=4,LE=5,NE=6,DE=7,i0="attached",UE="detached",Lf=300,Sr=301,os=302,fc=303,pc=304,Fa=306,mc=1e3,ai=1001,gc=1002,en=1003,Wv=1004,ak=1004,ra=1005,lk=1005,Wt=1006,Ul=1007,ck=1007,Di=1008,uk=1008,Hi=1009,jv=1010,Xv=1011,Ca=1012,Nf=1013,Mr=1014,Un=1015,Oa=1016,Df=1017,Uf=1018,oo=1020,qv=35902,Yv=1021,$v=1022,_n=1023,Zv=1024,Kv=1025,Ks=1026,ao=1027,kf=1028,zc=1029,Jv=1030,Ff=1031,hk=1032,Of=1033,kl=33776,Fl=33777,Ol=33778,Bl=33779,vd=35840,yd=35841,xd=35842,_d=35843,Sd=36196,Md=37492,wd=37496,bd=37808,Td=37809,Ed=37810,Ad=37811,Cd=37812,Rd=37813,Pd=37814,Id=37815,Ld=37816,Nd=37817,Dd=37818,Ud=37819,kd=37820,Fd=37821,zl=36492,Od=36494,Bd=36495,Qv=36283,zd=36284,Vd=36285,Hd=36286,kE=2200,FE=2201,OE=2202,vc=2300,Gd=2301,Th=2302,Gs=2400,Ws=2401,yc=2402,Bf=2500,ey=2501,dk=0,fk=1,pk=2,BE=3200,zE=3201,mk=3202,gk=3203,fs=0,VE=1,nr="",In="srgb",vo="srgb-linear",Vc="linear",ft="srgb",vk=0,ks=7680,yk=7681,xk=7682,_k=7683,Sk=34055,Mk=34056,wk=5386,bk=512,Tk=513,Ek=514,Ak=515,Ck=516,Rk=517,Pk=518,r0=519,HE=512,GE=513,WE=514,ty=515,jE=516,XE=517,qE=518,YE=519,xc=35044,Ik=35048,Lk=35040,Nk=35045,Dk=35049,Uk=35041,kk=35046,Fk=35050,Ok=35042,Bk="100",s0="300 es",Ui=2e3,_c=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let M1=1234567;const Js=Math.PI/180,Ra=180/Math.PI;function qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function ny(n,e){return(n%e+e)%e}function zk(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Vk(n,e,t){return n!==e?(t-n)/(e-n):0}function Vl(n,e,t){return(1-t)*n+t*e}function Hk(n,e,t,i){return Vl(n,e,1-Math.exp(-t*i))}function Gk(n,e=1){return e-Math.abs(ny(n,e*2)-e)}function Wk(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jk(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xk(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qk(n,e){return n+Math.random()*(e-n)}function Yk(n){return n*(.5-Math.random())}function $k(n){n!==void 0&&(M1=n);let e=M1+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zk(n){return n*Js}function Kk(n){return n*Ra}function Jk(n){return(n&n-1)===0&&n!==0}function Qk(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function eF(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tF(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nF={DEG2RAD:Js,RAD2DEG:Ra,generateUUID:qn,clamp:Nt,euclideanModulo:ny,mapLinear:zk,inverseLerp:Vk,lerp:Vl,damp:Hk,pingpong:Gk,smoothstep:Wk,smootherstep:jk,randInt:Xk,randFloat:qk,randFloatSpread:Yk,seededRandom:$k,degToRad:Zk,radToDeg:Kk,isPowerOfTwo:Jk,ceilPowerOfTwo:Qk,floorPowerOfTwo:eF,setQuaternionFromProperEuler:tF,normalize:qe,denormalize:xn};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],v=r[1],y=r[4],_=r[7],T=r[2],w=r[5],A=r[8];return s[0]=o*x+a*v+l*T,s[3]=o*m+a*y+l*w,s[6]=o*f+a*_+l*A,s[1]=c*x+u*v+h*T,s[4]=c*m+u*y+h*w,s[7]=c*f+u*_+h*A,s[2]=d*x+p*v+g*T,s[5]=d*m+p*y+g*w,s[8]=d*f+p*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jp.makeScale(e,t)),this}rotate(e){return this.premultiply(Jp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jp=new Xe;function $E(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}const iF={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function sa(n,e){return new iF[n](e)}function Sc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ZE(){const n=Sc("canvas");return n.style.display="block",n}const w1={};function _l(n){n in w1||(w1[n]=!0,console.warn(n))}function rF(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function sF(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oF(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(n.r=mr(n.r),n.g=mr(n.g),n.b=mr(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(n.r=ga(n.r),n.g=ga(n.g),n.b=ga(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===nr?Vc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const b1=[.64,.33,.3,.6,.15,.06],T1=[.2126,.7152,.0722],E1=[.3127,.329],A1=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C1=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[vo]:{primaries:b1,whitePoint:E1,transfer:Vc,toXYZ:A1,fromXYZ:C1,luminanceCoefficients:T1,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:b1,whitePoint:E1,transfer:ft,toXYZ:A1,fromXYZ:C1,luminanceCoefficients:T1,outputColorSpaceConfig:{drawingBufferColorSpace:In}}});let wo;class KE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wo===void 0&&(wo=Sc("canvas")),wo.width=e.width,wo.height=e.height;const i=wo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mr(t[i]/255)*255):t[i]=mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aF=0;class js{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aF++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qp(r[o].image)):s.push(Qp(r[o]))}else s=Qp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?KE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lF=0;class Ut extends Wi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=ai,r=ai,s=Wt,o=Di,a=_n,l=Hi,c=Ut.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lF++}),this.uuid=qn(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Lf;Ut.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(p+1)/2,T=(f+1)/2,w=(u+d)/4,A=(h+x)/4,C=(g+m)/4;return y>_&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=w/r,s=C/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=C/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JE extends Wi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new js(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends JE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zf extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cF extends bi{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new zf(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class iy extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uF extends bi{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new iy(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class Bn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*x,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,f*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const _=a*v;if(l=l*m+d*_,c=c*m+p*_,u=u*m+g*_,h=h*m+x*_,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(R1.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(R1.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return em.copy(this).projectOnVector(e),this.sub(em)}reflect(e){return this.sub(em.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const em=new I,R1=new Bn;class wn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xu.copy(i.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),_u.subVectors(this.max,nl),bo.subVectors(e.a,nl),To.subVectors(e.b,nl),Eo.subVectors(e.c,nl),Rr.subVectors(To,bo),Pr.subVectors(Eo,To),xs.subVectors(bo,Eo);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-xs.z,xs.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,xs.z,0,-xs.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-xs.y,xs.x,0];return!tm(t,bo,To,Eo,_u)||(t=[1,0,0,0,1,0,0,0,1],!tm(t,bo,To,Eo,_u))?!1:(Su.crossVectors(Rr,Pr),t=[Su.x,Su.y,Su.z],tm(t,bo,To,Eo,_u))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new I,new I,new I,new I,new I,new I,new I,new I],pi=new I,xu=new wn,bo=new I,To=new I,Eo=new I,Rr=new I,Pr=new I,xs=new I,nl=new I,_u=new I,Su=new I,_s=new I;function tm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_s.fromArray(n,s);const a=r.x*Math.abs(_s.x)+r.y*Math.abs(_s.y)+r.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hF=new wn,il=new I,nm=new I;class fn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hF.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const t=il.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(il,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(nm)),this.expandByPoint(il.copy(e.center).sub(nm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new I,im=new I,Mu=new I,Ir=new I,rm=new I,wu=new I,sm=new I;class Ba{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){im.copy(e).add(t).multiplyScalar(.5),Mu.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(im);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Mu),a=Ir.dot(this.direction),l=-Ir.dot(Mu),c=Ir.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(im).addScaledVector(Mu,d),p}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),r=$i.dot($i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,r,s){rm.subVectors(t,e),wu.subVectors(i,e),sm.crossVectors(rm,wu);let o=this.direction.dot(sm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ir.subVectors(this.origin,e);const l=a*this.direction.dot(wu.crossVectors(Ir,wu));if(l<0)return null;const c=a*this.direction.dot(rm.cross(Ir));if(c<0||l+c>o)return null;const u=-a*Ir.dot(sm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,i,r,s,o,a,l,c,u,h,d,p,g,x,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,p,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ao.setFromMatrixColumn(e,0).length(),s=1/Ao.setFromMatrixColumn(e,1).length(),o=1/Ao.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dF,e,fF)}lookAt(e,t,i){const r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Lr.crossVectors(i,Hn),Lr.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Lr.crossVectors(i,Hn)),Lr.normalize(),bu.crossVectors(Hn,Lr),r[0]=Lr.x,r[4]=bu.x,r[8]=Hn.x,r[1]=Lr.y,r[5]=bu.y,r[9]=Hn.y,r[2]=Lr.z,r[6]=bu.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],y=i[7],_=i[11],T=i[15],w=r[0],A=r[4],C=r[8],b=r[12],M=r[1],L=r[5],O=r[9],B=r[13],W=r[2],$=r[6],j=r[10],Y=r[14],D=r[3],X=r[7],Q=r[11],de=r[15];return s[0]=o*w+a*M+l*W+c*D,s[4]=o*A+a*L+l*$+c*X,s[8]=o*C+a*O+l*j+c*Q,s[12]=o*b+a*B+l*Y+c*de,s[1]=u*w+h*M+d*W+p*D,s[5]=u*A+h*L+d*$+p*X,s[9]=u*C+h*O+d*j+p*Q,s[13]=u*b+h*B+d*Y+p*de,s[2]=g*w+x*M+m*W+f*D,s[6]=g*A+x*L+m*$+f*X,s[10]=g*C+x*O+m*j+f*Q,s[14]=g*b+x*B+m*Y+f*de,s[3]=v*w+y*M+_*W+T*D,s[7]=v*A+y*L+_*$+T*X,s[11]=v*C+y*O+_*j+T*Q,s[15]=v*b+y*B+_*Y+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],v=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,_=u*x*c-g*h*c+g*a*p-o*x*p-u*a*f+o*h*f,T=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,w=t*v+i*y+r*_+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=y*A,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*A,e[8]=_*A,e[9]=(g*h*s-u*x*s-g*i*p+t*x*p+u*i*f-t*h*f)*A,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*f+t*a*f)*A,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*A,e[12]=T*A,e[13]=(u*x*r-g*h*r+g*i*d-t*x*d-u*i*m+t*h*m)*A,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,x=o*u,m=o*h,f=a*h,v=l*c,y=l*u,_=l*h,T=i.x,w=i.y,A=i.z;return r[0]=(1-(x+f))*T,r[1]=(p+_)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(p-_)*w,r[5]=(1-(d+f))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+y)*A,r[9]=(m-v)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ao.set(r[0],r[1],r[2]).length();const o=Ao.set(r[4],r[5],r[6]).length(),a=Ao.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mi.copy(this);const c=1/s,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ui){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Ui)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_c)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ui){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,p=(i+r)*u;let g,x;if(a===Ui)g=(o+s)*h,x=-2*h;else if(a===_c)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ao=new I,mi=new Ve,dF=new I(0,0,0),fF=new I(1,1,1),Lr=new I,bu=new I,Hn=new I,P1=new Ve,I1=new Bn;class Zn{constructor(e=0,t=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return P1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P1,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return I1.setFromEuler(this),this.setFromQuaternion(I1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pF=0;const L1=new I,Co=new Bn,Zi=new Ve,Tu=new I,rl=new I,mF=new I,gF=new Bn,N1=new I(1,0,0),D1=new I(0,1,0),U1=new I(0,0,1),k1={type:"added"},vF={type:"removed"},Ro={type:"childadded",child:null},om={type:"childremoved",child:null};class lt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pF++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new I,t=new Zn,i=new Bn,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Xe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.multiply(Co),this}rotateOnWorldAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.premultiply(Co),this}rotateX(e){return this.rotateOnAxis(N1,e)}rotateY(e){return this.rotateOnAxis(D1,e)}rotateZ(e){return this.rotateOnAxis(U1,e)}translateOnAxis(e,t){return L1.copy(e).applyQuaternion(this.quaternion),this.position.add(L1.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(N1,e)}translateY(e){return this.translateOnAxis(D1,e)}translateZ(e){return this.translateOnAxis(U1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tu.copy(e):Tu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(rl,Tu,this.up):Zi.lookAt(Tu,rl,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),Co.setFromRotationMatrix(Zi),this.quaternion.premultiply(Co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k1),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vF),om.child=e,this.dispatchEvent(om),om.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k1),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,mF),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,gF,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}lt.DEFAULT_UP=new I(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new I,Ki=new I,am=new I,Ji=new I,Po=new I,Io=new I,F1=new I,lm=new I,cm=new I,um=new I,hm=new ot,dm=new ot,fm=new ot;class Nn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gi.subVectors(e,t),r.cross(gi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gi.subVectors(r,t),Ki.subVectors(i,t),am.subVectors(e,t);const o=gi.dot(gi),a=gi.dot(Ki),l=gi.dot(am),c=Ki.dot(Ki),u=Ki.dot(am),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return hm.setScalar(0),dm.setScalar(0),fm.setScalar(0),hm.fromBufferAttribute(e,t),dm.fromBufferAttribute(e,i),fm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(hm,s.x),o.addScaledVector(dm,s.y),o.addScaledVector(fm,s.z),o}static isFrontFacing(e,t,i,r){return gi.subVectors(i,t),Ki.subVectors(e,t),gi.cross(Ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),gi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Po.subVectors(r,i),Io.subVectors(s,i),lm.subVectors(e,i);const l=Po.dot(lm),c=Io.dot(lm);if(l<=0&&c<=0)return t.copy(i);cm.subVectors(e,r);const u=Po.dot(cm),h=Io.dot(cm);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Po,o);um.subVectors(e,s);const p=Po.dot(um),g=Io.dot(um);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Io,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return F1.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(F1,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector(Po,o).addScaledVector(Io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const QE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function pm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class _e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=ny(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=pm(o,s,e+1/3),this.g=pm(o,s,e),this.b=pm(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const i=QE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return nt.fromWorkingColorSpace(an.copy(this),e),Math.round(Nt(an.r*255,0,255))*65536+Math.round(Nt(an.g*255,0,255))*256+Math.round(Nt(an.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(an.copy(this),t);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=In){nt.fromWorkingColorSpace(an.copy(this),e);const t=an.r,i=an.g,r=an.b;return e!==In?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Eu);const i=Vl(Nr.h,Eu.h,t),r=Vl(Nr.s,Eu.s,t),s=Vl(Nr.l,Eu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new _e;_e.NAMES=QE;let yF=0;class mn extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yF++}),this.uuid=qn(),this.name="",this.blending=Zs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==cd&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ps extends mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ir=xF();function xF(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Pn(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Nt(n,-65504,65504),ir.floatView[0]=n;const e=ir.uint32View[0],t=e>>23&511;return ir.baseTable[t]+((e&8388607)>>ir.shiftTable[t])}function Sl(n){const e=n>>10;return ir.uint32View[0]=ir.mantissaTable[ir.offsetTable[e]+(n&1023)]+ir.exponentTable[e],ir.floatView[0]}const _F={toHalfFloat:Pn,fromHalfFloat:Sl},Bt=new I,Au=new te;class gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Au.fromBufferAttribute(this,t),Au.applyMatrix3(e),this.setXY(t,Au.x,Au.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}}class SF extends gt{constructor(e,t,i){super(new Int8Array(e),t,i)}}class MF extends gt{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class wF extends gt{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class bF extends gt{constructor(e,t,i){super(new Int16Array(e),t,i)}}class ry extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class TF extends gt{constructor(e,t,i){super(new Int32Array(e),t,i)}}class sy extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class EF extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Sl(this.array[e*this.itemSize]);return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=Pn(t),this}getY(e){let t=Sl(this.array[e*this.itemSize+1]);return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=Pn(t),this}getZ(e){let t=Sl(this.array[e*this.itemSize+2]);return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=Pn(t),this}getW(e){let t=Sl(this.array[e*this.itemSize+3]);return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=Pn(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.array[e+0]=Pn(t),this.array[e+1]=Pn(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[e+0]=Pn(t),this.array[e+1]=Pn(i),this.array[e+2]=Pn(r),this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[e+0]=Pn(t),this.array[e+1]=Pn(i),this.array[e+2]=Pn(r),this.array[e+3]=Pn(s),this}}class Re extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let AF=0;const ni=new Ve,mm=new lt,Lo=new I,Gn=new wn,sl=new wn,qt=new I;class Ke extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AF++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($E(e)?sy:ry)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return mm.lookAt(e),mm.updateMatrix(),this.applyMatrix4(mm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];sl.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Gn.min,sl.min),Gn.expandByPoint(qt),qt.addVectors(Gn.max,sl.max),Gn.expandByPoint(qt)):(Gn.expandByPoint(sl.min),Gn.expandByPoint(sl.max))}Gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(Lo.fromBufferAttribute(e,c),qt.add(Lo)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new I,l[C]=new I;const c=new I,u=new I,h=new I,d=new te,p=new te,g=new te,x=new I,m=new I;function f(C,b,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[C].add(x),a[b].add(x),a[M].add(x),l[C].add(m),l[b].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,b=v.length;C<b;++C){const M=v[C],L=M.start,O=M.count;for(let B=L,W=L+O;B<W;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new I,_=new I,T=new I,w=new I;function A(C){T.fromBufferAttribute(r,C),w.copy(T);const b=a[C];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(w,b);const L=_.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,b=v.length;C<b;++C){const M=v[C],L=M.start,O=M.count;for(let B=L,W=L+O;B<W;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new gt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ke,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O1=new Ve,Ss=new Ba,Cu=new fn,B1=new I,Ru=new I,Pu=new I,Iu=new I,gm=new I,Lu=new I,z1=new I,Nu=new I;class Vt extends lt{constructor(e=new Ke,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Lu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(gm.fromBufferAttribute(h,e),o?Lu.addScaledVector(gm,u):Lu.addScaledVector(gm.sub(t),u))}t.add(Lu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cu.copy(i.boundingSphere),Cu.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(Cu.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Cu,B1)===null||Ss.origin.distanceToSquared(B1)>(e.far-e.near)**2))&&(O1.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(O1),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,T=y;_<T;_+=3){const w=a.getX(_),A=a.getX(_+1),C=a.getX(_+2);r=Du(this,f,e,i,c,u,h,w,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);r=Du(this,o,e,i,c,u,h,v,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,T=y;_<T;_+=3){const w=_,A=_+1,C=_+2;r=Du(this,f,e,i,c,u,h,w,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=m,y=m+1,_=m+2;r=Du(this,o,e,i,c,u,h,v,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function CF(n,e,t,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_r,a),l===null)return null;Nu.copy(a),Nu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Nu);return c<t.near||c>t.far?null:{distance:c,point:Nu.clone(),object:n}}function Du(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ru),n.getVertexPosition(l,Pu),n.getVertexPosition(c,Iu);const u=CF(n,e,t,i,Ru,Pu,Iu,z1);if(u){const h=new I;Nn.getBarycoord(z1,Ru,Pu,Iu,h),r&&(u.uv=Nn.getInterpolatedAttribute(r,a,l,c,h,new te)),s&&(u.uv1=Nn.getInterpolatedAttribute(s,a,l,c,h,new te)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Nn.getNormal(Ru,Pu,Iu,d.normal),u.face=d,u.barycoord=h}return u}class yo extends Ke{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2));function g(x,m,f,v,y,_,T,w,A,C,b){const M=_/A,L=T/C,O=_/2,B=T/2,W=w/2,$=A+1,j=C+1;let Y=0,D=0;const X=new I;for(let Q=0;Q<j;Q++){const de=Q*L-B;for(let Ce=0;Ce<$;Ce++){const tt=Ce*M-O;X[x]=tt*v,X[m]=de*y,X[f]=W,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[f]=w>0?1:-1,u.push(X.x,X.y,X.z),h.push(Ce/A),h.push(1-Q/C),Y+=1}}for(let Q=0;Q<C;Q++)for(let de=0;de<A;de++){const Ce=d+de+$*Q,tt=d+de+$*(Q+1),Z=d+(de+1)+$*(Q+1),ae=d+(de+1)+$*Q;l.push(Ce,tt,ae),l.push(tt,Z,ae),D+=6}a.addGroup(p,D,b),p+=D,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=Pa(n[t]);for(const r in i)e[r]=i[r]}return e}function RF(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eA(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const tA={clone:Pa,merge:vn};var PF=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IF=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PF,this.fragmentShader=IF,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=RF(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hf extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new I,V1=new te,H1=new te;class Jt extends Hf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,V1,H1),t.subVectors(H1,V1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const No=-90,Do=1;class nA extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(No,Do,e,t);r.layers=this.layers,this.add(r);const s=new Jt(No,Do,e,t);s.layers=this.layers,this.add(s);const o=new Jt(No,Do,e,t);o.layers=this.layers,this.add(o);const a=new Jt(No,Do,e,t);a.layers=this.layers,this.add(a);const l=new Jt(No,Do,e,t);l.layers=this.layers,this.add(l);const c=new Jt(No,Do,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_c)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hc extends Ut{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iA extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yo(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:fr});s.uniforms.tEquirect.value=t;const o=new Vt(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Wt),new nA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const vm=new I,LF=new I,NF=new Xe;class Br{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vm.subVectors(i,t).cross(LF.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||NF.getNormalMatrix(e),r=this.coplanarPoint(vm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new fn,Uu=new I;class Gc{constructor(e=new Br,t=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],v=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-s,d-c,m-p,_-f).normalize(),i[1].setComponents(l+s,d+c,m+p,_+f).normalize(),i[2].setComponents(l+o,d+u,m+g,_+v).normalize(),i[3].setComponents(l-o,d-u,m-g,_-v).normalize(),i[4].setComponents(l-a,d-h,m-x,_-y).normalize(),t===Ui)i[5].setComponents(l+a,d+h,m+x,_+y).normalize();else if(t===_c)i[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Uu.x=r.normal.x>0?e.max.x:e.min.x,Uu.y=r.normal.y>0?e.max.y:e.min.y,Uu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rA(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function DF(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class za extends Ke{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const v=f*d-o;for(let y=0;y<c;y++){const _=y*h-s;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const y=v+c*f,_=v+c*(f+1),T=v+1+c*(f+1),w=v+1+c*f;p.push(y,_,w),p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.widthSegments,e.heightSegments)}}var UF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kF=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BF=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VF=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GF=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,WF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qF=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YF=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$F=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZF=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eO=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iO=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rO=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sO=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oO=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lO=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cO=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uO=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hO="gl_FragColor = linearToOutputTexel( gl_FragColor );",dO=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pO=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mO=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gO=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yO=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xO=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_O=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SO=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MO=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wO=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bO=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TO=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EO=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AO=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CO=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RO=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IO=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LO=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NO=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DO=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UO=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kO=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FO=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OO=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BO=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zO=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VO=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HO=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GO=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WO=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jO=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XO=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qO=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YO=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$O=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZO=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KO=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JO=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QO=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nB=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iB=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rB=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sB=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oB=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aB=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lB=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cB=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uB=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hB=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dB=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pB=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mB=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gB=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vB=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yB=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xB=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_B=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SB=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MB=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wB=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bB=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TB=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EB=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AB=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CB=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RB=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NB=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DB=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UB=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FB=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BB=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zB=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VB=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HB=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GB=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jB=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XB=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qB=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YB=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$B=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZB=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KB=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JB=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QB=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,s4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:UF,alphahash_pars_fragment:kF,alphamap_fragment:FF,alphamap_pars_fragment:OF,alphatest_fragment:BF,alphatest_pars_fragment:zF,aomap_fragment:VF,aomap_pars_fragment:HF,batching_pars_vertex:GF,batching_vertex:WF,begin_vertex:jF,beginnormal_vertex:XF,bsdfs:qF,iridescence_fragment:YF,bumpmap_pars_fragment:$F,clipping_planes_fragment:ZF,clipping_planes_pars_fragment:KF,clipping_planes_pars_vertex:JF,clipping_planes_vertex:QF,color_fragment:eO,color_pars_fragment:tO,color_pars_vertex:nO,color_vertex:iO,common:rO,cube_uv_reflection_fragment:sO,defaultnormal_vertex:oO,displacementmap_pars_vertex:aO,displacementmap_vertex:lO,emissivemap_fragment:cO,emissivemap_pars_fragment:uO,colorspace_fragment:hO,colorspace_pars_fragment:dO,envmap_fragment:fO,envmap_common_pars_fragment:pO,envmap_pars_fragment:mO,envmap_pars_vertex:gO,envmap_physical_pars_fragment:AO,envmap_vertex:vO,fog_vertex:yO,fog_pars_vertex:xO,fog_fragment:_O,fog_pars_fragment:SO,gradientmap_pars_fragment:MO,lightmap_pars_fragment:wO,lights_lambert_fragment:bO,lights_lambert_pars_fragment:TO,lights_pars_begin:EO,lights_toon_fragment:CO,lights_toon_pars_fragment:RO,lights_phong_fragment:PO,lights_phong_pars_fragment:IO,lights_physical_fragment:LO,lights_physical_pars_fragment:NO,lights_fragment_begin:DO,lights_fragment_maps:UO,lights_fragment_end:kO,logdepthbuf_fragment:FO,logdepthbuf_pars_fragment:OO,logdepthbuf_pars_vertex:BO,logdepthbuf_vertex:zO,map_fragment:VO,map_pars_fragment:HO,map_particle_fragment:GO,map_particle_pars_fragment:WO,metalnessmap_fragment:jO,metalnessmap_pars_fragment:XO,morphinstance_vertex:qO,morphcolor_vertex:YO,morphnormal_vertex:$O,morphtarget_pars_vertex:ZO,morphtarget_vertex:KO,normal_fragment_begin:JO,normal_fragment_maps:QO,normal_pars_fragment:eB,normal_pars_vertex:tB,normal_vertex:nB,normalmap_pars_fragment:iB,clearcoat_normal_fragment_begin:rB,clearcoat_normal_fragment_maps:sB,clearcoat_pars_fragment:oB,iridescence_pars_fragment:aB,opaque_fragment:lB,packing:cB,premultiplied_alpha_fragment:uB,project_vertex:hB,dithering_fragment:dB,dithering_pars_fragment:fB,roughnessmap_fragment:pB,roughnessmap_pars_fragment:mB,shadowmap_pars_fragment:gB,shadowmap_pars_vertex:vB,shadowmap_vertex:yB,shadowmask_pars_fragment:xB,skinbase_vertex:_B,skinning_pars_vertex:SB,skinning_vertex:MB,skinnormal_vertex:wB,specularmap_fragment:bB,specularmap_pars_fragment:TB,tonemapping_fragment:EB,tonemapping_pars_fragment:AB,transmission_fragment:CB,transmission_pars_fragment:RB,uv_pars_fragment:PB,uv_pars_vertex:IB,uv_vertex:LB,worldpos_vertex:NB,background_vert:DB,background_frag:UB,backgroundCube_vert:kB,backgroundCube_frag:FB,cube_vert:OB,cube_frag:BB,depth_vert:zB,depth_frag:VB,distanceRGBA_vert:HB,distanceRGBA_frag:GB,equirect_vert:WB,equirect_frag:jB,linedashed_vert:XB,linedashed_frag:qB,meshbasic_vert:YB,meshbasic_frag:$B,meshlambert_vert:ZB,meshlambert_frag:KB,meshmatcap_vert:JB,meshmatcap_frag:QB,meshnormal_vert:e4,meshnormal_frag:t4,meshphong_vert:n4,meshphong_frag:i4,meshphysical_vert:r4,meshphysical_frag:s4,meshtoon_vert:o4,meshtoon_frag:a4,points_vert:l4,points_frag:c4,shadow_vert:u4,shadow_frag:h4,sprite_vert:d4,sprite_frag:f4},pe={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},_i={basic:{uniforms:vn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:vn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:vn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:vn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:vn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:vn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:vn([pe.points,pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:vn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:vn([pe.common,pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:vn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:vn([pe.sprite,pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:vn([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:vn([pe.lights,pe.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};_i.physical={uniforms:vn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ku={r:0,b:0,g:0},ws=new Zn,p4=new Ve;function m4(n,e,t,i,r,s,o){const a=new _e(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1;const _=g(v);_===null?f(a,l):_&&_.isColor&&(f(_,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===Fa)?(u===void 0&&(u=new Vt(new yo(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Pa(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ws.copy(y.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(p4.makeRotationFromEuler(ws)),u.material.toneMapped=nt.getTransfer(_.colorSpace)!==ft,(h!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Vt(new za(2,2),new Ti({name:"BackgroundMaterial",uniforms:Pa(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,y){v.getRGB(ku,eA(n)),i.buffers.color.setClear(ku.r,ku.g,ku.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:x,addToRenderList:m}}function g4(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,L,O,B,W){let $=!1;const j=h(B,O,L);s!==j&&(s=j,c(s.object)),$=p(M,B,O,W),$&&g(M,B,O,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,_(M,L,O,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,L,O){const B=O.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let $=W[L.id];$===void 0&&($={},W[L.id]=$);let j=$[B];return j===void 0&&(j=d(l()),$[B]=j),j}function d(M){const L=[],O=[],B=[];for(let W=0;W<t;W++)L[W]=0,O[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,L,O,B){const W=s.attributes,$=L.attributes;let j=0;const Y=O.getAttributes();for(const D in Y)if(Y[D].location>=0){const Q=W[D];let de=$[D];if(de===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(M,L,O,B){const W={},$=L.attributes;let j=0;const Y=O.getAttributes();for(const D in Y)if(Y[D].location>=0){let Q=$[D];Q===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),W[D]=de,j++}s.attributes=W,s.attributesNum=j,s.index=B}function x(){const M=s.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const O=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;O[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),W[M]!==L&&(n.vertexAttribDivisor(M,L),W[M]=L)}function v(){const M=s.newAttributes,L=s.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==M[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function y(M,L,O,B,W,$,j){j===!0?n.vertexAttribIPointer(M,L,O,W,$):n.vertexAttribPointer(M,L,O,B,W,$)}function _(M,L,O,B){x();const W=B.attributes,$=O.getAttributes(),j=L.defaultAttributeValues;for(const Y in $){const D=$[Y];if(D.location>=0){let X=W[Y];if(X===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const Q=X.normalized,de=X.itemSize,Ce=e.get(X);if(Ce===void 0)continue;const tt=Ce.buffer,Z=Ce.type,ae=Ce.bytesPerElement,Se=Z===n.INT||Z===n.UNSIGNED_INT||X.gpuType===Nf;if(X.isInterleavedBufferAttribute){const ce=X.data,ke=ce.stride,We=X.offset;if(ce.isInstancedInterleavedBuffer){for(let He=0;He<D.locationSize;He++)f(D.location+He,ce.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let He=0;He<D.locationSize;He++)m(D.location+He);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let He=0;He<D.locationSize;He++)y(D.location+He,de/D.locationSize,Z,Q,ke*ae,(We+de/D.locationSize*He)*ae,Se)}else{if(X.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)f(D.location+ce,X.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ce=0;ce<D.locationSize;ce++)m(D.location+ce);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ce=0;ce<D.locationSize;ce++)y(D.location+ce,de/D.locationSize,Z,Q,de*ae,de/D.locationSize*ce*ae,Se)}}else if(j!==void 0){const Q=j[Y];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(D.location,Q);break;case 3:n.vertexAttrib3fv(D.location,Q);break;case 4:n.vertexAttrib4fv(D.location,Q);break;default:n.vertexAttrib1fv(D.location,Q)}}}}v()}function T(){C();for(const M in i){const L=i[M];for(const O in L){const B=L[O];for(const W in B)u(B[W].object),delete B[W];delete L[O]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const O in L){const B=L[O];for(const W in B)u(B[W].object),delete B[W];delete L[O]}delete i[M.id]}function A(M){for(const L in i){const O=i[L];if(O[M.id]===void 0)continue;const B=O[M.id];for(const W in B)u(B[W].object),delete B[W];delete O[M.id]}}function C(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function v4(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y4(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==_n&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function x4(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Br,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,y=v*4;let _=f.clippingState||null;l.value=_,_=u(g,d,y,p);for(let T=0;T!==y;++T)_[T]=t[T];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=p;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _4(n){let e=new WeakMap;function t(o,a){return a===fc?o.mapping=Sr:a===pc&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fc||a===pc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iA(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gf extends Hf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oa=4,G1=[.125,.215,.35,.446,.526,.582],Os=20,ym=new Gf,W1=new _e;let xm=null,_m=0,Sm=0,Mm=!1;const Fs=(1+Math.sqrt(5))/2,Uo=1/Fs,j1=[new I(-Fs,Uo,0),new I(Fs,Uo,0),new I(-Uo,0,Fs),new I(Uo,0,Fs),new I(0,Fs,-Uo),new I(0,Fs,Uo),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class o0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){xm=this._renderer.getRenderTarget(),_m=this._renderer.getActiveCubeFace(),Sm=this._renderer.getActiveMipmapLevel(),Mm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xm,_m,Sm),this._renderer.xr.enabled=Mm,e.scissorTest=!1,Fu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xm=this._renderer.getRenderTarget(),_m=this._renderer.getActiveCubeFace(),Sm=this._renderer.getActiveMipmapLevel(),Mm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Oa,format:_n,colorSpace:vo,depthBuffer:!1},r=X1(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X1(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S4(s)),this._blurMaterial=M4(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,ym)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(W1),u.toneMapping=pr,u.autoClear=!1;const p=new ps({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new Vt(new yo,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(W1),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;Fu(r,v*y,f>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Sr||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ym)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=j1[(r-s-1)%j1.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Os-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Os;m>Os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Os}`);const f=[];let v=0;for(let A=0;A<Os;++A){const C=A/x,b=Math.exp(-C*C/2);f.push(b),A===0?v+=b:A<m&&(v+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const _=this._sizeLods[r],T=3*_*(r>y-oa?r-y+oa:0),w=4*(this._cubeSize-_);Fu(t,T,w,3*_,2*_),l.setRenderTarget(t),l.render(h,ym)}}function S4(n){const e=[],t=[],i=[];let r=n;const s=n-oa+1+G1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-oa?l=G1[o-n+oa-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),y=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,C=w>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(b,x*g*w),y.set(d,m*g*w);const M=[w,w,w,w,w,w];_.set(M,f*g*w)}const T=new Ke;T.setAttribute("position",new gt(v,x)),T.setAttribute("uv",new gt(y,m)),T.setAttribute("faceIndex",new gt(_,f)),e.push(T),r>oa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function X1(n,e,t){const i=new bi(n,e,t);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function M4(n,e,t){const i=new Float32Array(Os),r=new I(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function q1(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Y1(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function oy(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function w4(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fc||l===pc,u=l===Sr||l===os;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new o0(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new o0(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function b4(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_l("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function T4(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let y=0,_=v.length;y<_;y+=3){const T=v[y+0],w=v[y+1],A=v[y+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){const v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const T=y+0,w=y+1,A=y+2;d.push(T,w,w,A,A,T)}}else return;const m=new($E(d)?sy:ry)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function E4(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function h(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*x[v];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function A4(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function C4(n,e,t){const i=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let T=a.attributes.position.count*_,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*h),C=new zf(A,T,w,h);C.type=Un,C.needsUpdate=!0;const b=_*4;for(let L=0;L<h;L++){const O=f[L],B=v[L],W=y[L],$=T*w*4*L;for(let j=0;j<O.count;j++){const Y=j*b;g===!0&&(r.fromBufferAttribute(O,j),A[$+Y+0]=r.x,A[$+Y+1]=r.y,A[$+Y+2]=r.z,A[$+Y+3]=0),x===!0&&(r.fromBufferAttribute(B,j),A[$+Y+4]=r.x,A[$+Y+5]=r.y,A[$+Y+6]=r.z,A[$+Y+7]=0),m===!0&&(r.fromBufferAttribute(W,j),A[$+Y+8]=r.x,A[$+Y+9]=r.y,A[$+Y+10]=r.z,A[$+Y+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new te(T,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function R4(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ay extends Ut{constructor(e,t,i,r,s,o,a,l,c,u=Ks){if(u!==Ks&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ks&&(i=Mr),i===void 0&&u===ao&&(i=oo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sA=new Ut,$1=new ay(1,1),oA=new zf,aA=new iy,lA=new Hc,Z1=[],K1=[],J1=new Float32Array(16),Q1=new Float32Array(9),eS=new Float32Array(4);function Va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Z1[r];if(s===void 0&&(s=new Float32Array(r),Z1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wf(n,e){let t=K1[e];t===void 0&&(t=new Int32Array(e),K1[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function P4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function I4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function L4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function N4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function D4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,i))return;eS.set(i),n.uniformMatrix2fv(this.addr,!1,eS),Xt(t,i)}}function U4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,i))return;Q1.set(i),n.uniformMatrix3fv(this.addr,!1,Q1),Xt(t,i)}}function k4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,i))return;J1.set(i),n.uniformMatrix4fv(this.addr,!1,J1),Xt(t,i)}}function F4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function O4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function B4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function z4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function V4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function H4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function G4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function W4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function j4(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($1.compareFunction=ty,s=$1):s=sA,t.setTexture2D(e||s,r)}function X4(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||aA,r)}function q4(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||lA,r)}function Y4(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||oA,r)}function $4(n){switch(n){case 5126:return P4;case 35664:return I4;case 35665:return L4;case 35666:return N4;case 35674:return D4;case 35675:return U4;case 35676:return k4;case 5124:case 35670:return F4;case 35667:case 35671:return O4;case 35668:case 35672:return B4;case 35669:case 35673:return z4;case 5125:return V4;case 36294:return H4;case 36295:return G4;case 36296:return W4;case 35678:case 36198:case 36298:case 36306:case 35682:return j4;case 35679:case 36299:case 36307:return X4;case 35680:case 36300:case 36308:case 36293:return q4;case 36289:case 36303:case 36311:case 36292:return Y4}}function Z4(n,e){n.uniform1fv(this.addr,e)}function K4(n,e){const t=Va(e,this.size,2);n.uniform2fv(this.addr,t)}function J4(n,e){const t=Va(e,this.size,3);n.uniform3fv(this.addr,t)}function Q4(n,e){const t=Va(e,this.size,4);n.uniform4fv(this.addr,t)}function ez(n,e){const t=Va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tz(n,e){const t=Va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nz(n,e){const t=Va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iz(n,e){n.uniform1iv(this.addr,e)}function rz(n,e){n.uniform2iv(this.addr,e)}function sz(n,e){n.uniform3iv(this.addr,e)}function oz(n,e){n.uniform4iv(this.addr,e)}function az(n,e){n.uniform1uiv(this.addr,e)}function lz(n,e){n.uniform2uiv(this.addr,e)}function cz(n,e){n.uniform3uiv(this.addr,e)}function uz(n,e){n.uniform4uiv(this.addr,e)}function hz(n,e,t){const i=this.cache,r=e.length,s=Wf(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||sA,s[o])}function dz(n,e,t){const i=this.cache,r=e.length,s=Wf(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||aA,s[o])}function fz(n,e,t){const i=this.cache,r=e.length,s=Wf(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||lA,s[o])}function pz(n,e,t){const i=this.cache,r=e.length,s=Wf(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||oA,s[o])}function mz(n){switch(n){case 5126:return Z4;case 35664:return K4;case 35665:return J4;case 35666:return Q4;case 35674:return ez;case 35675:return tz;case 35676:return nz;case 5124:case 35670:return iz;case 35667:case 35671:return rz;case 35668:case 35672:return sz;case 35669:case 35673:return oz;case 5125:return az;case 36294:return lz;case 36295:return cz;case 36296:return uz;case 35678:case 36198:case 36298:case 36306:case 35682:return hz;case 35679:case 36299:case 36307:return dz;case 35680:case 36300:case 36308:case 36293:return fz;case 36289:case 36303:case 36311:case 36292:return pz}}class gz{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$4(t.type)}}class vz{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mz(t.type)}}class yz{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const wm=/(\w+)(\])?(\[|\.)?/g;function tS(n,e){n.seq.push(e),n.map[e.id]=e}function xz(n,e,t){const i=n.name,r=i.length;for(wm.lastIndex=0;;){const s=wm.exec(i),o=wm.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tS(t,c===void 0?new gz(a,n,e):new vz(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new yz(a),tS(t,h)),t=h}}}class Eh{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xz(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function nS(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _z=37297;let Sz=0;function Mz(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const iS=new Xe;function wz(n){nt._getMatrix(iS,nt.workingColorSpace,n);const e=`mat3( ${iS.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Vc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rS(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Mz(n.getShaderSource(e),o)}else return r}function bz(n,e){const t=wz(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tz(n,e){let t;switch(e){case CE:t="Linear";break;case RE:t="Reinhard";break;case PE:t="Cineon";break;case IE:t="ACESFilmic";break;case NE:t="AgX";break;case DE:t="Neutral";break;case LE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ou=new I;function Ez(){nt.getLuminanceCoefficients(Ou);const n=Ou.x.toFixed(4),e=Ou.y.toFixed(4),t=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Az(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function Cz(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Rz(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ml(n){return n!==""}function sS(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oS(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pz=/^[ \t]*#include +<([\w\d./]+)>/gm;function a0(n){return n.replace(Pz,Lz)}const Iz=new Map;function Lz(n,e){let t=Ze[e];if(t===void 0){const i=Iz.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return a0(t)}const Nz=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aS(n){return n.replace(Nz,Dz)}function Dz(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lS(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uz(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===aE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function kz(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case os:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fz(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function Oz(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bc:e="ENVMAP_BLENDING_MULTIPLY";break;case EE:e="ENVMAP_BLENDING_MIX";break;case AE:e="ENVMAP_BLENDING_ADD";break}return e}function Bz(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zz(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Uz(t),c=kz(t),u=Fz(t),h=Oz(t),d=Bz(t),p=Az(t),g=Cz(s),x=r.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ml).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ml).join(`
`),f.length>0&&(f+=`
`)):(m=[lS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),f=[lS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pr?"#define TONE_MAPPING":"",t.toneMapping!==pr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==pr?Tz("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,bz("linearToOutputTexel",t.outputColorSpace),Ez(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ml).join(`
`)),o=a0(o),o=sS(o,t),o=oS(o,t),a=a0(a),a=sS(a,t),a=oS(a,t),o=aS(o),a=aS(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+o,_=v+f+a,T=nS(r,r.VERTEX_SHADER,y),w=nS(r,r.FRAGMENT_SHADER,_);r.attachShader(x,T),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(T).trim(),W=r.getShaderInfoLog(w).trim();let $=!0,j=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,w);else{const Y=rS(r,T,"vertex"),D=rS(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+Y+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||W==="")&&(j=!1);j&&(L.diagnostics={runnable:$,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(T),r.deleteShader(w),C=new Eh(r,x),b=Rz(r,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,_z)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sz++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let Vz=0;class Hz{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Gz(e),t.set(e,i)),i}}class Gz{constructor(e){this.id=Vz++,this.code=e,this.usedTimes=0}}function Wz(n,e,t,i,r,s,o){const a=new Vf,l=new Hz,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,O,B){const W=O.fog,$=B.geometry,j=b.isMeshStandardMaterial?O.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),D=Y&&Y.mapping===Fa?Y.image.height:null,X=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,de=Q!==void 0?Q.length:0;let Ce=0;$.morphAttributes.position!==void 0&&(Ce=1),$.morphAttributes.normal!==void 0&&(Ce=2),$.morphAttributes.color!==void 0&&(Ce=3);let tt,Z,ae,Se;if(X){const dt=_i[X];tt=dt.vertexShader,Z=dt.fragmentShader}else tt=b.vertexShader,Z=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);const ce=n.getRenderTarget(),ke=n.state.buffers.depth.getReversed(),We=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,rt=!!b.map,ne=!!b.matcap,ue=!!Y,N=!!b.aoMap,De=!!b.lightMap,oe=!!b.bumpMap,Te=!!b.normalMap,fe=!!b.displacementMap,Be=!!b.emissiveMap,Me=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,V=b.clearcoat>0,K=b.dispersion>0,ie=b.iridescence>0,J=b.sheen>0,Pe=b.transmission>0,me=E&&!!b.anisotropyMap,we=V&&!!b.clearcoatMap,et=V&&!!b.clearcoatNormalMap,le=V&&!!b.clearcoatRoughnessMap,Ee=ie&&!!b.iridescenceMap,ze=ie&&!!b.iridescenceThicknessMap,Ge=J&&!!b.sheenColorMap,Ae=J&&!!b.sheenRoughnessMap,it=!!b.specularMap,Je=!!b.specularColorMap,vt=!!b.specularIntensityMap,U=Pe&&!!b.transmissionMap,ge=Pe&&!!b.thicknessMap,q=!!b.gradientMap,ee=!!b.alphaMap,xe=b.alphaTest>0,ve=!!b.alphaHash,Ye=!!b.extensions;let Pt=pr;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Pt=n.toneMapping);const nn={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:Z,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:We,instancingColor:We&&B.instanceColor!==null,instancingMorph:We&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:vo,alphaToCoverage:!!b.alphaToCoverage,map:rt,matcap:ne,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:D,aoMap:N,lightMap:De,bumpMap:oe,normalMap:Te,displacementMap:d&&fe,emissiveMap:Be,normalMapObjectSpace:Te&&b.normalMapType===VE,normalMapTangentSpace:Te&&b.normalMapType===fs,metalnessMap:Me,roughnessMap:P,anisotropy:E,anisotropyMap:me,clearcoat:V,clearcoatMap:we,clearcoatNormalMap:et,clearcoatRoughnessMap:le,dispersion:K,iridescence:ie,iridescenceMap:Ee,iridescenceThicknessMap:ze,sheen:J,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:it,specularColorMap:Je,specularIntensityMap:vt,transmission:Pe,transmissionMap:U,thicknessMap:ge,gradientMap:q,opaque:b.transparent===!1&&b.blending===Zs&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:xe,alphaHash:ve,combine:b.combine,mapUv:rt&&x(b.map.channel),aoMapUv:N&&x(b.aoMap.channel),lightMapUv:De&&x(b.lightMap.channel),bumpMapUv:oe&&x(b.bumpMap.channel),normalMapUv:Te&&x(b.normalMap.channel),displacementMapUv:fe&&x(b.displacementMap.channel),emissiveMapUv:Be&&x(b.emissiveMap.channel),metalnessMapUv:Me&&x(b.metalnessMap.channel),roughnessMapUv:P&&x(b.roughnessMap.channel),anisotropyMapUv:me&&x(b.anisotropyMap.channel),clearcoatMapUv:we&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(b.sheenRoughnessMap.channel),specularMapUv:it&&x(b.specularMap.channel),specularColorMapUv:Je&&x(b.specularColorMap.channel),specularIntensityMapUv:vt&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:ge&&x(b.thicknessMap.channel),alphaMapUv:ee&&x(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Te||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(rt||ee),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ke,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:rt&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ft,decodeVideoTextureEmissive:Be&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ni,flipSided:b.side===Mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ye&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&b.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const M=g[b.type];let L;if(M){const O=_i[M];L=tA.clone(O.uniforms)}else L=b.uniforms;return L}function T(b,M){let L;for(let O=0,B=u.length;O<B;O++){const W=u[O];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new zz(n,M,b,s),u.push(L)),L}function w(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:C}}function jz(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Xz(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uS(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,g,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,g,x,m){const f=o(h,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,x,m){const f=o(h,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Xz),i.length>1&&i.sort(d||cS),r.length>1&&r.sort(d||cS)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qz(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new uS,n.set(i,[o])):r>=s.length?(o=new uS,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yz(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new _e};break;case"SpotLight":t={position:new I,direction:new I,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function $z(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Zz=0;function Kz(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jz(n){const e=new Yz,t=$z(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new Ve,o=new Ve;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,y=0,_=0,T=0,w=0,A=0;c.sort(Kz);for(let b=0,M=c.length;b<M;b++){const L=c[b],O=L.color,B=L.intensity,W=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*B,h+=O.g*B,d+=O.b*B;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],B);A++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,D=t.get(L);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(O).multiplyScalar(B),j.distance=W,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[x]=j;const Y=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,Y.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[x]=Y.matrix,L.castShadow){const D=t.get(L);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=$,_++}x++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(O).multiplyScalar(B),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const Y=L.shadow,D=t.get(L);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=j,g++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(B),j.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[f]=j,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==T||C.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=T,C.numLightProbes=A,i.version=Zz++)}function l(c,u){let h=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function hS(n){const e=new Jz(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qz(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hS(n),e.set(r,[a])):s>=o.length?(a=new hS(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ly extends mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=BE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eV=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tV=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nV(n,e,t){let i=new Gc;const r=new te,s=new te,o=new ot,a=new ly({depthPacking:zE}),l=new cy,c={},u=t.maxTextureSize,h={[_r]:Mn,[Mn]:_r,[Ni]:Ni},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:eV,fragmentShader:tV}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gv;let f=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(fr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==Ii&&this.type===Ii,W=f===Ii&&this.type!==Ii;for(let $=0,j=w.length;$<j;$++){const Y=w[$],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||B===!0||W===!0){const de=this.type!==Ii?{minFilter:en,magFilter:en}:{};D.map!==null&&D.map.dispose(),D.map=new bi(r.x,r.y,de),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const Q=D.getViewportCount();for(let de=0;de<Q;de++){const Ce=D.getViewport(de);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),O.viewport(o),D.updateMatrices(Y,de),i=D.getFrustum(),_(A,C,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===Ii&&v(D,C),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,L)};function v(w,A){const C=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,C,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,C,p,x,null)}function y(w,A,C,b){let M=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=M.uuid,B=A.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let $=W[B];$===void 0&&($=M.clone(),W[B]=$,A.addEventListener("dispose",T)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,b===Ii?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=C}return M}function _(w,A,C,b,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),W=w.material;if(Array.isArray(W)){const $=B.groups;for(let j=0,Y=$.length;j<Y;j++){const D=$[j],X=W[D.materialIndex];if(X&&X.visible){const Q=y(w,X,b,M);w.onBeforeShadow(n,w,A,C,B,Q,D),n.renderBufferDirect(C,null,B,Q,w,D),w.onAfterShadow(n,w,A,C,B,Q,D)}}}else if(W.visible){const $=y(w,W,b,M);w.onBeforeShadow(n,w,A,C,B,$,null),n.renderBufferDirect(C,null,B,$,w,null),w.onAfterShadow(n,w,A,C,B,$,null)}}const O=w.children;for(let B=0,W=O.length;B<W;B++)_(O[B],A,C,b,M)}function T(w){w.target.removeEventListener("dispose",T);for(const C in c){const b=c[C],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const iV={[ud]:hd,[dd]:md,[fd]:gd,[so]:pd,[hd]:ud,[md]:dd,[gd]:fd,[pd]:so};function rV(n,e){function t(){let U=!1;const ge=new ot;let q=null;const ee=new ot(0,0,0,0);return{setMask:function(xe){q!==xe&&!U&&(n.colorMask(xe,xe,xe,xe),q=xe)},setLocked:function(xe){U=xe},setClear:function(xe,ve,Ye,Pt,nn){nn===!0&&(xe*=Pt,ve*=Pt,Ye*=Pt),ge.set(xe,ve,Ye,Pt),ee.equals(ge)===!1&&(n.clearColor(xe,ve,Ye,Pt),ee.copy(ge))},reset:function(){U=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let U=!1,ge=!1,q=null,ee=null,xe=null;return{setReversed:function(ve){if(ge!==ve){const Ye=e.get("EXT_clip_control");ge?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const Pt=xe;xe=null,this.setClear(Pt)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?ce(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(ve){q!==ve&&!U&&(n.depthMask(ve),q=ve)},setFunc:function(ve){if(ge&&(ve=iV[ve]),ee!==ve){switch(ve){case ud:n.depthFunc(n.NEVER);break;case hd:n.depthFunc(n.ALWAYS);break;case dd:n.depthFunc(n.LESS);break;case so:n.depthFunc(n.LEQUAL);break;case fd:n.depthFunc(n.EQUAL);break;case pd:n.depthFunc(n.GEQUAL);break;case md:n.depthFunc(n.GREATER);break;case gd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ve}},setLocked:function(ve){U=ve},setClear:function(ve){xe!==ve&&(ge&&(ve=1-ve),n.clearDepth(ve),xe=ve)},reset:function(){U=!1,q=null,ee=null,xe=null,ge=!1}}}function r(){let U=!1,ge=null,q=null,ee=null,xe=null,ve=null,Ye=null,Pt=null,nn=null;return{setTest:function(dt){U||(dt?ce(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(dt){ge!==dt&&!U&&(n.stencilMask(dt),ge=dt)},setFunc:function(dt,hi,Xi){(q!==dt||ee!==hi||xe!==Xi)&&(n.stencilFunc(dt,hi,Xi),q=dt,ee=hi,xe=Xi)},setOp:function(dt,hi,Xi){(ve!==dt||Ye!==hi||Pt!==Xi)&&(n.stencilOp(dt,hi,Xi),ve=dt,Ye=hi,Pt=Xi)},setLocked:function(dt){U=dt},setClear:function(dt){nn!==dt&&(n.clearStencil(dt),nn=dt)},reset:function(){U=!1,ge=null,q=null,ee=null,xe=null,ve=null,Ye=null,Pt=null,nn=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,y=null,_=null,T=null,w=null,A=new _e(0,0,0),C=0,b=!1,M=null,L=null,O=null,B=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(D)[1]),j=Y>=1):D.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),j=Y>=2);let X=null,Q={};const de=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),tt=new ot().fromArray(de),Z=new ot().fromArray(Ce);function ae(U,ge,q,ee){const xe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(U,ve),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<q;Ye++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ge+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ve}const Se={};Se[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(so),oe(!1),Te(Qg),ce(n.CULL_FACE),N(fr);function ce(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function ke(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function We(U,ge){return h[U]!==ge?(n.bindFramebuffer(U,ge),h[U]=ge,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function He(U,ge){let q=p,ee=!1;if(U){q=d.get(ge),q===void 0&&(q=[],d.set(ge,q));const xe=U.textures;if(q.length!==xe.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ye=xe.length;ve<Ye;ve++)q[ve]=n.COLOR_ATTACHMENT0+ve;q.length=xe.length,ee=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(q)}function rt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const ne={[Hr]:n.FUNC_ADD,[cE]:n.FUNC_SUBTRACT,[uE]:n.FUNC_REVERSE_SUBTRACT};ne[hE]=n.MIN,ne[dE]=n.MAX;const ue={[fE]:n.ZERO,[pE]:n.ONE,[mE]:n.SRC_COLOR,[ld]:n.SRC_ALPHA,[SE]:n.SRC_ALPHA_SATURATE,[xE]:n.DST_COLOR,[vE]:n.DST_ALPHA,[gE]:n.ONE_MINUS_SRC_COLOR,[cd]:n.ONE_MINUS_SRC_ALPHA,[_E]:n.ONE_MINUS_DST_COLOR,[yE]:n.ONE_MINUS_DST_ALPHA,[ME]:n.CONSTANT_COLOR,[wE]:n.ONE_MINUS_CONSTANT_COLOR,[bE]:n.CONSTANT_ALPHA,[TE]:n.ONE_MINUS_CONSTANT_ALPHA};function N(U,ge,q,ee,xe,ve,Ye,Pt,nn,dt){if(U===fr){x===!0&&(ke(n.BLEND),x=!1);return}if(x===!1&&(ce(n.BLEND),x=!0),U!==lE){if(U!==m||dt!==b){if((f!==Hr||_!==Hr)&&(n.blendEquation(n.FUNC_ADD),f=Hr,_=Hr),dt)switch(U){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case e0:n.blendFunc(n.ONE,n.ONE);break;case t0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case n0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case e0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case t0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case n0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,T=null,w=null,A.set(0,0,0),C=0,m=U,b=dt}return}xe=xe||ge,ve=ve||q,Ye=Ye||ee,(ge!==f||xe!==_)&&(n.blendEquationSeparate(ne[ge],ne[xe]),f=ge,_=xe),(q!==v||ee!==y||ve!==T||Ye!==w)&&(n.blendFuncSeparate(ue[q],ue[ee],ue[ve],ue[Ye]),v=q,y=ee,T=ve,w=Ye),(Pt.equals(A)===!1||nn!==C)&&(n.blendColor(Pt.r,Pt.g,Pt.b,nn),A.copy(Pt),C=nn),m=U,b=!1}function De(U,ge){U.side===Ni?ke(n.CULL_FACE):ce(n.CULL_FACE);let q=U.side===Mn;ge&&(q=!q),oe(q),U.blending===Zs&&U.transparent===!1?N(fr):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const ee=U.stencilWrite;a.setTest(ee),ee&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function Te(U){U!==sE?(ce(n.CULL_FACE),U!==L&&(U===Qg?n.cullFace(n.BACK):U===oE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),L=U}function fe(U){U!==O&&(j&&n.lineWidth(U),O=U)}function Be(U,ge,q){U?(ce(n.POLYGON_OFFSET_FILL),(B!==ge||W!==q)&&(n.polygonOffset(ge,q),B=ge,W=q)):ke(n.POLYGON_OFFSET_FILL)}function Me(U){U?ce(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function P(U){U===void 0&&(U=n.TEXTURE0+$-1),X!==U&&(n.activeTexture(U),X=U)}function E(U,ge,q){q===void 0&&(X===null?q=n.TEXTURE0+$-1:q=X);let ee=Q[q];ee===void 0&&(ee={type:void 0,texture:void 0},Q[q]=ee),(ee.type!==U||ee.texture!==ge)&&(X!==q&&(n.activeTexture(q),X=q),n.bindTexture(U,ge||Se[U]),ee.type=U,ee.texture=ge)}function V(){const U=Q[X];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(U){tt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function Ae(U){Z.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function it(U,ge){let q=c.get(ge);q===void 0&&(q=new WeakMap,c.set(ge,q));let ee=q.get(U);ee===void 0&&(ee=n.getUniformBlockIndex(ge,U.name),q.set(U,ee))}function Je(U,ge){const ee=c.get(ge).get(U);l.get(ge)!==ee&&(n.uniformBlockBinding(ge,ee,U.__bindingPointIndex),l.set(ge,ee))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,Q={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,y=null,_=null,T=null,w=null,A=new _e(0,0,0),C=0,b=!1,M=null,L=null,O=null,B=null,W=null,tt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:ke,bindFramebuffer:We,drawBuffers:He,useProgram:rt,setBlending:N,setMaterial:De,setFlipSided:oe,setCullFace:Te,setLineWidth:fe,setPolygonOffset:Be,setScissorTest:Me,activeTexture:P,bindTexture:E,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:Ee,texImage3D:ze,updateUBOMapping:it,uniformBlockBinding:Je,texStorage2D:et,texStorage3D:le,texSubImage2D:J,texSubImage3D:Pe,compressedTexSubImage2D:me,compressedTexSubImage3D:we,scissor:Ge,viewport:Ae,reset:vt}}function sV(n,e){const t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2):(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0),n}function oV(n,e){const t=n.image&&n.image.width?n.image.width/n.image.height:1;return t>e?(n.repeat.x=e/t,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0):(n.repeat.x=1,n.repeat.y=t/e,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2),n}function aV(n){return n.repeat.x=1,n.repeat.y=1,n.offset.x=0,n.offset.y=0,n}function l0(n,e,t,i){const r=lV(i);switch(t){case Yv:return n*e;case Zv:return n*e;case Kv:return n*e*2;case kf:return n*e/r.components*r.byteLength;case zc:return n*e/r.components*r.byteLength;case Jv:return n*e*2/r.components*r.byteLength;case Ff:return n*e*2/r.components*r.byteLength;case $v:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case Of:return n*e*4/r.components*r.byteLength;case kl:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yd:case _d:return Math.max(n,16)*Math.max(e,8)/4;case vd:case xd:return Math.max(n,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zl:case Od:case Bd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qv:case zd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vd:case Hd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lV(n){switch(n){case Hi:case jv:return{byteLength:1,components:1};case Ca:case Xv:case Oa:return{byteLength:2,components:1};case Df:case Uf:return{byteLength:2,components:4};case Mr:case Nf:case Un:return{byteLength:4,components:1};case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}const cV={contain:sV,cover:oV,fill:aV,getByteLength:l0};function uV(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):Sc("canvas")}function x(P,E,V){let K=1;const ie=Me(P);if((ie.width>V||ie.height>V)&&(K=V/Math.max(ie.width,ie.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(K*ie.width),Pe=Math.floor(K*ie.height);h===void 0&&(h=g(J,Pe));const me=E?g(J,Pe):h;return me.width=J,me.height=Pe,me.getContext("2d").drawImage(P,0,0,J,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Pe+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,E,V,K,ie=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=E;if(E===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),E===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),E===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),E===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),E===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),E===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),E===n.RGBA){const Pe=ie?Vc:nt.getTransfer(K);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Pe===ft?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(P,E){let V;return P?E===null||E===Mr||E===oo?V=n.DEPTH24_STENCIL8:E===Un?V=n.DEPTH32F_STENCIL8:E===Ca&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Mr||E===oo?V=n.DEPTH_COMPONENT24:E===Un?V=n.DEPTH_COMPONENT32F:E===Ca&&(V=n.DEPTH_COMPONENT16),V}function T(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==Wt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),M(E)}function C(P){const E=i.get(P);if(E.__webglInit===void 0)return;const V=P.source,K=d.get(V);if(K){const ie=K[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(P),Object.keys(K).length===0&&d.delete(V)}i.remove(P)}function b(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const V=P.source,K=d.get(V);delete K[E.__cacheKey],o.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let ie=0;ie<E.__webglFramebuffer[K].length;ie++)n.deleteFramebuffer(E.__webglFramebuffer[K][ie]);else n.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)n.deleteFramebuffer(E.__webglFramebuffer[K]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=P.textures;for(let K=0,ie=V.length;K<ie;K++){const J=i.get(V[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[K])}i.remove(P)}let L=0;function O(){L=0}function B(){const P=L;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function W(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){const V=i.get(P);if(P.isVideoTexture&&fe(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,P,E);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function j(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Z(V,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function Y(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Z(V,P,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function D(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){ae(V,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}const X={[mc]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[gc]:n.MIRRORED_REPEAT},Q={[en]:n.NEAREST,[Wv]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Ul]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},de={[HE]:n.NEVER,[YE]:n.ALWAYS,[GE]:n.LESS,[ty]:n.LEQUAL,[WE]:n.EQUAL,[qE]:n.GEQUAL,[jE]:n.GREATER,[XE]:n.NOTEQUAL};function Ce(P,E){if(E.type===Un&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Wt||E.magFilter===Ul||E.magFilter===ra||E.magFilter===Di||E.minFilter===Wt||E.minFilter===Ul||E.minFilter===ra||E.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,X[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,X[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,X[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Q[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===en||E.minFilter!==ra&&E.minFilter!==Di||E.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function tt(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const K=E.source;let ie=d.get(K);ie===void 0&&(ie={},d.set(K,ie));const J=W(E);if(J!==P.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[J].usedTimes++;const Pe=ie[P.__cacheKey];Pe!==void 0&&(ie[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&b(E)),P.__cacheKey=J,P.__webglTexture=ie[J].texture}return V}function Z(P,E,V){let K=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=n.TEXTURE_3D);const ie=tt(P,E),J=E.source;t.bindTexture(K,P.__webglTexture,n.TEXTURE0+V);const Pe=i.get(J);if(J.version!==Pe.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);const me=nt.getPrimaries(nt.workingColorSpace),we=E.colorSpace===nr?null:nt.getPrimaries(E.colorSpace),et=E.colorSpace===nr||me===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let le=x(E.image,!1,r.maxTextureSize);le=Be(E,le);const Ee=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let Ge=y(E.internalFormat,Ee,ze,E.colorSpace,E.isVideoTexture);Ce(K,E);let Ae;const it=E.mipmaps,Je=E.isVideoTexture!==!0,vt=Pe.__version===void 0||ie===!0,U=J.dataReady,ge=T(E,le);if(E.isDepthTexture)Ge=_(E.format===ao,E.type),vt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Ge,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ge,le.width,le.height,0,Ee,ze,null));else if(E.isDataTexture)if(it.length>0){Je&&vt&&t.texStorage2D(n.TEXTURE_2D,ge,Ge,it[0].width,it[0].height);for(let q=0,ee=it.length;q<ee;q++)Ae=it[q],Je?U&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Ee,ze,Ae.data):t.texImage2D(n.TEXTURE_2D,q,Ge,Ae.width,Ae.height,0,Ee,ze,Ae.data);E.generateMipmaps=!1}else Je?(vt&&t.texStorage2D(n.TEXTURE_2D,ge,Ge,le.width,le.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Ee,ze,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,le.width,le.height,0,Ee,ze,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ge,it[0].width,it[0].height,le.depth);for(let q=0,ee=it.length;q<ee;q++)if(Ae=it[q],E.format!==_n)if(Ee!==null)if(Je){if(U)if(E.layerUpdates.size>0){const xe=l0(Ae.width,Ae.height,E.format,E.type);for(const ve of E.layerUpdates){const Ye=Ae.data.subarray(ve*xe/Ae.data.BYTES_PER_ELEMENT,(ve+1)*xe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ve,Ae.width,Ae.height,1,Ee,Ye)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,le.depth,Ee,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ge,Ae.width,Ae.height,le.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,le.depth,Ee,ze,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ge,Ae.width,Ae.height,le.depth,0,Ee,ze,Ae.data)}else{Je&&vt&&t.texStorage2D(n.TEXTURE_2D,ge,Ge,it[0].width,it[0].height);for(let q=0,ee=it.length;q<ee;q++)Ae=it[q],E.format!==_n?Ee!==null?Je?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Ee,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ge,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?U&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Ee,ze,Ae.data):t.texImage2D(n.TEXTURE_2D,q,Ge,Ae.width,Ae.height,0,Ee,ze,Ae.data)}else if(E.isDataArrayTexture)if(Je){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ge,le.width,le.height,le.depth),U)if(E.layerUpdates.size>0){const q=l0(le.width,le.height,E.format,E.type);for(const ee of E.layerUpdates){const xe=le.data.subarray(ee*q/le.data.BYTES_PER_ELEMENT,(ee+1)*q/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,Ee,ze,xe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ee,ze,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,le.width,le.height,le.depth,0,Ee,ze,le.data);else if(E.isData3DTexture)Je?(vt&&t.texStorage3D(n.TEXTURE_3D,ge,Ge,le.width,le.height,le.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ee,ze,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,le.width,le.height,le.depth,0,Ee,ze,le.data);else if(E.isFramebufferTexture){if(vt)if(Je)t.texStorage2D(n.TEXTURE_2D,ge,Ge,le.width,le.height);else{let q=le.width,ee=le.height;for(let xe=0;xe<ge;xe++)t.texImage2D(n.TEXTURE_2D,xe,Ge,q,ee,0,Ee,ze,null),q>>=1,ee>>=1}}else if(it.length>0){if(Je&&vt){const q=Me(it[0]);t.texStorage2D(n.TEXTURE_2D,ge,Ge,q.width,q.height)}for(let q=0,ee=it.length;q<ee;q++)Ae=it[q],Je?U&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ee,ze,Ae):t.texImage2D(n.TEXTURE_2D,q,Ge,Ee,ze,Ae);E.generateMipmaps=!1}else if(Je){if(vt){const q=Me(le);t.texStorage2D(n.TEXTURE_2D,ge,Ge,q.width,q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,ze,le)}else t.texImage2D(n.TEXTURE_2D,0,Ge,Ee,ze,le);m(E)&&f(K),Pe.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ae(P,E,V){if(E.image.length!==6)return;const K=tt(P,E),ie=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const J=i.get(ie);if(ie.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+V);const Pe=nt.getPrimaries(nt.workingColorSpace),me=E.colorSpace===nr?null:nt.getPrimaries(E.colorSpace),we=E.colorSpace===nr||Pe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let ee=0;ee<6;ee++)!et&&!le?Ee[ee]=x(E.image[ee],!0,r.maxCubemapSize):Ee[ee]=le?E.image[ee].image:E.image[ee],Ee[ee]=Be(E,Ee[ee]);const ze=Ee[0],Ge=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),it=y(E.internalFormat,Ge,Ae,E.colorSpace),Je=E.isVideoTexture!==!0,vt=J.__version===void 0||K===!0,U=ie.dataReady;let ge=T(E,ze);Ce(n.TEXTURE_CUBE_MAP,E);let q;if(et){Je&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,it,ze.width,ze.height);for(let ee=0;ee<6;ee++){q=Ee[ee].mipmaps;for(let xe=0;xe<q.length;xe++){const ve=q[xe];E.format!==_n?Ge!==null?Je?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,ve.width,ve.height,Ge,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,it,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,ve.width,ve.height,Ge,Ae,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,it,ve.width,ve.height,0,Ge,Ae,ve.data)}}}else{if(q=E.mipmaps,Je&&vt){q.length>0&&ge++;const ee=Me(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,it,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){Je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee[ee].width,Ee[ee].height,Ge,Ae,Ee[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,it,Ee[ee].width,Ee[ee].height,0,Ge,Ae,Ee[ee].data);for(let xe=0;xe<q.length;xe++){const Ye=q[xe].image[ee].image;Je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,Ye.width,Ye.height,Ge,Ae,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,it,Ye.width,Ye.height,0,Ge,Ae,Ye.data)}}else{Je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ge,Ae,Ee[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,it,Ge,Ae,Ee[ee]);for(let xe=0;xe<q.length;xe++){const ve=q[xe];Je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,Ge,Ae,ve.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,it,Ge,Ae,ve.image[ee])}}}m(E)&&f(n.TEXTURE_CUBE_MAP),J.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Se(P,E,V,K,ie,J){const Pe=s.convert(V.format,V.colorSpace),me=s.convert(V.type),we=y(V.internalFormat,Pe,me,V.colorSpace),et=i.get(E),le=i.get(V);if(le.__renderTarget=E,!et.__hasExternalTextures){const Ee=Math.max(1,E.width>>J),ze=Math.max(1,E.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,we,Ee,ze,E.depth,0,Pe,me,null):t.texImage2D(ie,J,we,Ee,ze,0,Pe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Te(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ie,le.__webglTexture,0,oe(E)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ie,le.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(P,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const K=E.depthTexture,ie=K&&K.isDepthTexture?K.type:null,J=_(E.stencilBuffer,ie),Pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=oe(E);Te(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,J,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,J,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,P)}else{const K=E.textures;for(let ie=0;ie<K.length;ie++){const J=K[ie],Pe=s.convert(J.format,J.colorSpace),me=s.convert(J.type),we=y(J.internalFormat,Pe,me,J.colorSpace),et=oe(E);V&&Te(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,we,E.width,E.height):Te(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,we,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,we,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ie=K.__webglTexture,J=oe(E);if(E.depthTexture.format===Ks)Te(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(E.depthTexture.format===ao)Te(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function We(P){const E=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",ie)};K.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=K}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ke(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=n.createRenderbuffer(),ce(E.__webglDepthbuffer[K],P,!1);else{const ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ce(E.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(P,E,V){const K=i.get(P);E!==void 0&&Se(K.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&We(P)}function rt(P){const E=P.texture,V=i.get(P),K=i.get(E);P.addEventListener("dispose",A);const ie=P.textures,J=P.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=E.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[me]=[];for(let we=0;we<E.mipmaps.length;we++)V.__webglFramebuffer[me][we]=n.createFramebuffer()}else V.__webglFramebuffer[me]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)V.__webglFramebuffer[me]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let me=0,we=ie.length;me<we;me++){const et=i.get(ie[me]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Te(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const we=ie[me];V.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[me]);const et=s.convert(we.format,we.colorSpace),le=s.convert(we.type),Ee=y(we.internalFormat,et,le,we.colorSpace,P.isXRRenderTarget===!0),ze=oe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ee,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,V.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Se(V.__webglFramebuffer[me][we],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we);else Se(V.__webglFramebuffer[me],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(E)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,we=ie.length;me<we;me++){const et=ie[me],le=i.get(et);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ce(n.TEXTURE_2D,et),Se(V.__webglFramebuffer,P,et,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(et)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),Ce(me,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Se(V.__webglFramebuffer[we],P,E,n.COLOR_ATTACHMENT0,me,we);else Se(V.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,me,0);m(E)&&f(me),t.unbindTexture()}P.depthBuffer&&We(P)}function ne(P){const E=P.textures;for(let V=0,K=E.length;V<K;V++){const ie=E[V];if(m(ie)){const J=v(P),Pe=i.get(ie).__webglTexture;t.bindTexture(J,Pe),f(J),t.unbindTexture()}}}const ue=[],N=[];function De(P){if(P.samples>0){if(Te(P)===!1){const E=P.textures,V=P.width,K=P.height;let ie=n.COLOR_BUFFER_BIT;const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(P),me=E.length>1;if(me)for(let we=0;we<E.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let we=0;we<E.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[we]);const et=i.get(E[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,V,K,0,0,V,K,ie,n.NEAREST),l===!0&&(ue.length=0,N.length=0,ue.push(n.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ue.push(J),N.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<E.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[we]);const et=i.get(E[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function oe(P){return Math.min(r.maxSamples,P.samples)}function Te(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Be(P,E){const V=P.colorSpace,K=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==vo&&V!==nr&&(nt.getTransfer(V)===ft?(K!==_n||ie!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=D,this.rebindTextures=He,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Te}function cA(n,e){function t(i,r=nr){let s;const o=nt.getTransfer(r);if(i===Hi)return n.UNSIGNED_BYTE;if(i===Df)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jv)return n.BYTE;if(i===Xv)return n.SHORT;if(i===Ca)return n.UNSIGNED_SHORT;if(i===Nf)return n.INT;if(i===Mr)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Oa)return n.HALF_FLOAT;if(i===Yv)return n.ALPHA;if(i===$v)return n.RGB;if(i===_n)return n.RGBA;if(i===Zv)return n.LUMINANCE;if(i===Kv)return n.LUMINANCE_ALPHA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===ao)return n.DEPTH_STENCIL;if(i===kf)return n.RED;if(i===zc)return n.RED_INTEGER;if(i===Jv)return n.RG;if(i===Ff)return n.RG_INTEGER;if(i===Of)return n.RGBA_INTEGER;if(i===kl||i===Fl||i===Ol||i===Bl)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===yd||i===xd||i===_d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sd||i===Md||i===wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sd||i===Md)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bd||i===Td||i===Ed||i===Ad||i===Cd||i===Rd||i===Pd||i===Id||i===Ld||i===Nd||i===Dd||i===Ud||i===kd||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Td)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ed)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ld)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ud)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Od||i===Bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zl)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qv||i===zd||i===Vd||i===Hd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class uA extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hV={type:"move"};class bm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hV)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const dV=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fV=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}
