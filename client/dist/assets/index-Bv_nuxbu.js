(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const g of a)if(g.type==="childList")for(const m of g.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(a){const g={};return a.integrity&&(g.integrity=a.integrity),a.referrerPolicy&&(g.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?g.credentials="include":a.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function o(a){if(a.ep)return;a.ep=!0;const g=i(a);fetch(a.href,g)}})();const Ws=()=>{};var _i={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=function(r){const e=[];let i=0;for(let o=0;o<r.length;o++){let a=r.charCodeAt(o);a<128?e[i++]=a:a<2048?(e[i++]=a>>6|192,e[i++]=a&63|128):(a&64512)===55296&&o+1<r.length&&(r.charCodeAt(o+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++o)&1023),e[i++]=a>>18|240,e[i++]=a>>12&63|128,e[i++]=a>>6&63|128,e[i++]=a&63|128):(e[i++]=a>>12|224,e[i++]=a>>6&63|128,e[i++]=a&63|128)}return e},qs=function(r){const e=[];let i=0,o=0;for(;i<r.length;){const a=r[i++];if(a<128)e[o++]=String.fromCharCode(a);else if(a>191&&a<224){const g=r[i++];e[o++]=String.fromCharCode((a&31)<<6|g&63)}else if(a>239&&a<365){const g=r[i++],m=r[i++],E=r[i++],A=((a&7)<<18|(g&63)<<12|(m&63)<<6|E&63)-65536;e[o++]=String.fromCharCode(55296+(A>>10)),e[o++]=String.fromCharCode(56320+(A&1023))}else{const g=r[i++],m=r[i++];e[o++]=String.fromCharCode((a&15)<<12|(g&63)<<6|m&63)}}return e.join("")},qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let a=0;a<r.length;a+=3){const g=r[a],m=a+1<r.length,E=m?r[a+1]:0,A=a+2<r.length,S=A?r[a+2]:0,L=g>>2,b=(g&3)<<4|E>>4;let I=(E&15)<<2|S>>6,B=S&63;A||(B=64,m||(I=64)),o.push(i[L],i[b],i[I],i[B])}return o.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Wi(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):qs(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let a=0;a<r.length;){const g=i[r.charAt(a++)],E=a<r.length?i[r.charAt(a)]:0;++a;const S=a<r.length?i[r.charAt(a)]:64;++a;const b=a<r.length?i[r.charAt(a)]:64;if(++a,g==null||E==null||S==null||b==null)throw new Xs;const I=g<<2|E>>4;if(o.push(I),S!==64){const B=E<<4&240|S>>2;if(o.push(B),b!==64){const j=S<<6&192|b;o.push(j)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Xs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Js=function(r){const e=Wi(r);return qi.encodeByteArray(e,!0)},Ie=function(r){return Js(r).replace(/\./g,"")},Ks=function(r){try{return qi.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=()=>Ys().__FIREBASE_DEFAULTS__,Qs=()=>{if(typeof process>"u"||typeof _i>"u")return;const r=_i.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},tr=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ks(r[1]);return e&&JSON.parse(e)},Xi=()=>{try{return Ws()||Zs()||Qs()||tr()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},er=r=>{var e,i;return(i=(e=Xi())==null?void 0:e.emulatorHosts)==null?void 0:i[r]},nr=r=>{const e=er(r);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),o]:[e.substring(0,i),o]},Ji=()=>{var r;return(r=Xi())==null?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,o))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sr(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},o=e||"demo-project",a=r.iat||0,g=r.sub||r.user_id;if(!g)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const m={iss:`https://securetoken.google.com/${o}`,aud:o,iat:a,exp:a+3600,auth_time:a,sub:g,user_id:g,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ie(JSON.stringify(i)),Ie(JSON.stringify(m)),""].join(".")}const Qt={};function or(){const r={prod:[],emulator:[]};for(const e of Object.keys(Qt))Qt[e]?r.emulator.push(e):r.prod.push(e);return r}function hr(r){let e=document.getElementById(r),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),i=!0),{created:i,element:e}}let wi=!1;function ar(r,e){if(typeof window>"u"||typeof document>"u"||!Ki(window.location.host)||Qt[r]===e||Qt[r]||wi)return;Qt[r]=e;function i(I){return`__firebase__banner__${I}`}const o="__firebase__banner",g=or().prod.length>0;function m(){const I=document.getElementById(o);I&&I.remove()}function E(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function A(I,B){I.setAttribute("width","24"),I.setAttribute("id",B),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function S(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{wi=!0,m()},I}function L(I,B){I.setAttribute("id",B),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function b(){const I=hr(o),B=i("text"),j=document.getElementById(B)||document.createElement("span"),U=i("learnmore"),M=document.getElementById(U)||document.createElement("a"),st=i("preprendIcon"),K=document.getElementById(st)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const q=I.element;E(q),L(M,U);const ht=S();A(K,st),q.append(K,j,M,ht),document.body.appendChild(q)}g?(j.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}function lr(){try{return typeof indexedDB=="object"}catch{return!1}}function cr(){return new Promise((r,e)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(o);a.onsuccess=()=>{a.result.close(),i||self.indexedDB.deleteDatabase(o),r(!0)},a.onupgradeneeded=()=>{i=!1},a.onerror=()=>{var g;e(((g=a.error)==null?void 0:g.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="FirebaseError";class xt extends Error{constructor(e,i,o){super(i),this.code=e,this.customData=o,this.name=ur,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,i,o){this.service=e,this.serviceName=i,this.errors=o}create(e,...i){const o=i[0]||{},a=`${this.service}/${e}`,g=this.errors[e],m=g?fr(g,o):"Error",E=`${this.serviceName}: ${m} (${a}).`;return new xt(a,E,o)}}function fr(r,e){return r.replace(pr,(i,o)=>{const a=e[o];return a!=null?String(a):`<${o}?>`})}const pr=/\{\$([^}]+)}/g;function Se(r,e){if(r===e)return!0;const i=Object.keys(r),o=Object.keys(e);for(const a of i){if(!o.includes(a))return!1;const g=r[a],m=e[a];if(vi(g)&&vi(m)){if(!Se(g,m))return!1}else if(g!==m)return!1}for(const a of o)if(!i.includes(a))return!1;return!0}function vi(r){return r!==null&&typeof r=="object"}class ie{constructor(e,i,o){this.name=e,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const o=new ir;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:i});a&&o.resolve(a)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(e==null?void 0:e.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mr(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);try{const g=this.getOrInitializeService({instanceIdentifier:a});o.resolve(g)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[g,m]of this.instancesDeferred.entries()){const E=this.normalizeInstanceIdentifier(g);o===E&&m.resolve(a)}return a}onInit(e,i){const o=this.normalizeInstanceIdentifier(i),a=this.onInitCallbacks.get(o)??new Set;a.add(e),this.onInitCallbacks.set(o,a);const g=this.instances.get(o);return g&&e(g,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,i){const o=this.onInitCallbacks.get(i);if(o)for(const a of o)try{a(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:gr(e),options:i}),this.instances.set(e,o),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gr(r){return r===It?void 0:r}function mr(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new dr(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(P||(P={}));const _r={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},wr=P.INFO,vr={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Er=(r,e,...i)=>{if(e<r.logLevel)return;const o=new Date().toISOString(),a=vr[e];if(a)console[a](`[${o}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zi{constructor(e){this.name=e,this._logLevel=wr,this._logHandler=Er,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const Ar=(r,e)=>e.some(i=>r instanceof i);let Ei,Ai;function Ir(){return Ei||(Ei=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sr(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qi=new WeakMap,hn=new WeakMap,ts=new WeakMap,tn=new WeakMap,pn=new WeakMap;function Tr(r){const e=new Promise((i,o)=>{const a=()=>{r.removeEventListener("success",g),r.removeEventListener("error",m)},g=()=>{i(gt(r.result)),a()},m=()=>{o(r.error),a()};r.addEventListener("success",g),r.addEventListener("error",m)});return e.then(i=>{i instanceof IDBCursor&&Qi.set(i,r)}).catch(()=>{}),pn.set(e,r),e}function br(r){if(hn.has(r))return;const e=new Promise((i,o)=>{const a=()=>{r.removeEventListener("complete",g),r.removeEventListener("error",m),r.removeEventListener("abort",m)},g=()=>{i(),a()},m=()=>{o(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",g),r.addEventListener("error",m),r.addEventListener("abort",m)});hn.set(r,e)}let an={get(r,e,i){if(r instanceof IDBTransaction){if(e==="done")return hn.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ts.get(r);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return gt(r[e])},set(r,e,i){return r[e]=i,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Cr(r){an=r(an)}function Dr(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const o=r.call(en(this),e,...i);return ts.set(o,e.sort?e.sort():[e]),gt(o)}:Sr().includes(r)?function(...e){return r.apply(en(this),e),gt(Qi.get(this))}:function(...e){return gt(r.apply(en(this),e))}}function Rr(r){return typeof r=="function"?Dr(r):(r instanceof IDBTransaction&&br(r),Ar(r,Ir())?new Proxy(r,an):r)}function gt(r){if(r instanceof IDBRequest)return Tr(r);if(tn.has(r))return tn.get(r);const e=Rr(r);return e!==r&&(tn.set(r,e),pn.set(e,r)),e}const en=r=>pn.get(r);function Pr(r,e,{blocked:i,upgrade:o,blocking:a,terminated:g}={}){const m=indexedDB.open(r,e),E=gt(m);return o&&m.addEventListener("upgradeneeded",A=>{o(gt(m.result),A.oldVersion,A.newVersion,gt(m.transaction),A)}),i&&m.addEventListener("blocked",A=>i(A.oldVersion,A.newVersion,A)),E.then(A=>{g&&A.addEventListener("close",()=>g()),a&&A.addEventListener("versionchange",S=>a(S.oldVersion,S.newVersion,S))}).catch(()=>{}),E}const Nr=["get","getKey","getAll","getAllKeys","count"],Or=["put","add","delete","clear"],nn=new Map;function Ii(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(nn.get(e))return nn.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,a=Or.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(a||Nr.includes(i)))return;const g=async function(m,...E){const A=this.transaction(m,a?"readwrite":"readonly");let S=A.store;return o&&(S=S.index(E.shift())),(await Promise.all([S[i](...E),a&&A.done]))[0]};return nn.set(e,g),g}Cr(r=>({...r,get:(e,i,o)=>Ii(e,i)||r.get(e,i,o),has:(e,i)=>!!Ii(e,i)||r.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Lr(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function Lr(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ln="@firebase/app",Si="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Zi("@firebase/app"),kr="@firebase/app-compat",xr="@firebase/analytics-compat",jr="@firebase/analytics",Vr="@firebase/app-check-compat",Br="@firebase/app-check",Fr="@firebase/auth",Ur="@firebase/auth-compat",Hr="@firebase/database",$r="@firebase/data-connect",zr="@firebase/database-compat",Gr="@firebase/functions",Wr="@firebase/functions-compat",qr="@firebase/installations",Xr="@firebase/installations-compat",Jr="@firebase/messaging",Kr="@firebase/messaging-compat",Yr="@firebase/performance",Zr="@firebase/performance-compat",Qr="@firebase/remote-config",to="@firebase/remote-config-compat",eo="@firebase/storage",no="@firebase/storage-compat",io="@firebase/firestore",so="@firebase/ai",ro="@firebase/firestore-compat",oo="firebase",ho="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]",ao={[ln]:"fire-core",[kr]:"fire-core-compat",[jr]:"fire-analytics",[xr]:"fire-analytics-compat",[Br]:"fire-app-check",[Vr]:"fire-app-check-compat",[Fr]:"fire-auth",[Ur]:"fire-auth-compat",[Hr]:"fire-rtdb",[$r]:"fire-data-connect",[zr]:"fire-rtdb-compat",[Gr]:"fire-fn",[Wr]:"fire-fn-compat",[qr]:"fire-iid",[Xr]:"fire-iid-compat",[Jr]:"fire-fcm",[Kr]:"fire-fcm-compat",[Yr]:"fire-perf",[Zr]:"fire-perf-compat",[Qr]:"fire-rc",[to]:"fire-rc-compat",[eo]:"fire-gcs",[no]:"fire-gcs-compat",[io]:"fire-fst",[ro]:"fire-fst-compat",[so]:"fire-vertex","fire-js":"fire-js",[oo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Map,lo=new Map,un=new Map;function Ti(r,e){try{r.container.addComponent(e)}catch(i){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,i)}}function be(r){const e=r.name;if(un.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;un.set(e,r);for(const i of Te.values())Ti(i,r);for(const i of lo.values())Ti(i,r);return!0}function co(r,e){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(e)}function uo(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new Yi("app","Firebase",fo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,i,o){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=ho;function es(r,e={}){let i=r;typeof e!="object"&&(e={name:e});const o={name:cn,automaticDataCollectionEnabled:!0,...e},a=o.name;if(typeof a!="string"||!a)throw mt.create("bad-app-name",{appName:String(a)});if(i||(i=Ji()),!i)throw mt.create("no-options");const g=Te.get(a);if(g){if(Se(i,g.options)&&Se(o,g.config))return g;throw mt.create("duplicate-app",{appName:a})}const m=new yr(a);for(const A of un.values())m.addComponent(A);const E=new po(i,o,m);return Te.set(a,E),E}function mo(r=cn){const e=Te.get(r);if(!e&&r===cn&&Ji())return es();if(!e)throw mt.create("no-app",{appName:r});return e}function Mt(r,e,i){let o=ao[r]??r;i&&(o+=`-${i}`);const a=o.match(/\s|\//),g=e.match(/\s|\//);if(a||g){const m=[`Unable to register library "${o}" with version "${e}":`];a&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&g&&m.push("and"),g&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(m.join(" "));return}be(new ie(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="firebase-heartbeat-database",_o=1,se="firebase-heartbeat-store";let sn=null;function ns(){return sn||(sn=Pr(yo,_o,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(se)}catch(i){console.warn(i)}}}}).catch(r=>{throw mt.create("idb-open",{originalErrorMessage:r.message})})),sn}async function wo(r){try{const i=(await ns()).transaction(se),o=await i.objectStore(se).get(is(r));return await i.done,o}catch(e){if(e instanceof xt)ot.warn(e.message);else{const i=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(i.message)}}}async function bi(r,e){try{const o=(await ns()).transaction(se,"readwrite");await o.objectStore(se).put(e,is(r)),await o.done}catch(i){if(i instanceof xt)ot.warn(i.message);else{const o=mt.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});ot.warn(o.message)}}}function is(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=1024,Eo=30;class Ao{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new So(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,i;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),g=Ci();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===g||this._heartbeatsCache.heartbeats.some(m=>m.date===g))return;if(this._heartbeatsCache.heartbeats.push({date:g,agent:a}),this._heartbeatsCache.heartbeats.length>Eo){const m=To(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(m,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){ot.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Ci(),{heartbeatsToSend:o,unsentEntries:a}=Io(this._heartbeatsCache.heartbeats),g=Ie(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=i,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),g}catch(i){return ot.warn(i),""}}}function Ci(){return new Date().toISOString().substring(0,10)}function Io(r,e=vo){const i=[];let o=r.slice();for(const a of r){const g=i.find(m=>m.agent===a.agent);if(g){if(g.dates.push(a.date),Di(i)>e){g.dates.pop();break}}else if(i.push({agent:a.agent,dates:[a.date]}),Di(i)>e){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class So{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lr()?cr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await wo(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const o=await this.read();return bi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const o=await this.read();return bi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Di(r){return Ie(JSON.stringify({version:2,heartbeats:r})).length}function To(r){if(r.length===0)return-1;let e=0,i=r[0].date;for(let o=1;o<r.length;o++)r[o].date<i&&(i=r[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(r){be(new ie("platform-logger",e=>new Mr(e),"PRIVATE")),be(new ie("heartbeat",e=>new Ao(e),"PRIVATE")),Mt(ln,Si,r),Mt(ln,Si,"esm2020"),Mt("fire-js","")}bo("");var Co="firebase",Do="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(Co,Do,"app");var Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dn;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(p,l){function u(){}u.prototype=l.prototype,p.F=l.prototype,p.prototype=new u,p.prototype.constructor=p,p.D=function(d,f,_){for(var c=Array(arguments.length-2),W=2;W<arguments.length;W++)c[W-2]=arguments[W];return l.prototype[f].apply(d,c)}}function i(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(o,i),o.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(p,l,u){u||(u=0);const d=Array(16);if(typeof l=="string")for(var f=0;f<16;++f)d[f]=l.charCodeAt(u++)|l.charCodeAt(u++)<<8|l.charCodeAt(u++)<<16|l.charCodeAt(u++)<<24;else for(f=0;f<16;++f)d[f]=l[u++]|l[u++]<<8|l[u++]<<16|l[u++]<<24;l=p.g[0],u=p.g[1],f=p.g[2];let _=p.g[3],c;c=l+(_^u&(f^_))+d[0]+3614090360&4294967295,l=u+(c<<7&4294967295|c>>>25),c=_+(f^l&(u^f))+d[1]+3905402710&4294967295,_=l+(c<<12&4294967295|c>>>20),c=f+(u^_&(l^u))+d[2]+606105819&4294967295,f=_+(c<<17&4294967295|c>>>15),c=u+(l^f&(_^l))+d[3]+3250441966&4294967295,u=f+(c<<22&4294967295|c>>>10),c=l+(_^u&(f^_))+d[4]+4118548399&4294967295,l=u+(c<<7&4294967295|c>>>25),c=_+(f^l&(u^f))+d[5]+1200080426&4294967295,_=l+(c<<12&4294967295|c>>>20),c=f+(u^_&(l^u))+d[6]+2821735955&4294967295,f=_+(c<<17&4294967295|c>>>15),c=u+(l^f&(_^l))+d[7]+4249261313&4294967295,u=f+(c<<22&4294967295|c>>>10),c=l+(_^u&(f^_))+d[8]+1770035416&4294967295,l=u+(c<<7&4294967295|c>>>25),c=_+(f^l&(u^f))+d[9]+2336552879&4294967295,_=l+(c<<12&4294967295|c>>>20),c=f+(u^_&(l^u))+d[10]+4294925233&4294967295,f=_+(c<<17&4294967295|c>>>15),c=u+(l^f&(_^l))+d[11]+2304563134&4294967295,u=f+(c<<22&4294967295|c>>>10),c=l+(_^u&(f^_))+d[12]+1804603682&4294967295,l=u+(c<<7&4294967295|c>>>25),c=_+(f^l&(u^f))+d[13]+4254626195&4294967295,_=l+(c<<12&4294967295|c>>>20),c=f+(u^_&(l^u))+d[14]+2792965006&4294967295,f=_+(c<<17&4294967295|c>>>15),c=u+(l^f&(_^l))+d[15]+1236535329&4294967295,u=f+(c<<22&4294967295|c>>>10),c=l+(f^_&(u^f))+d[1]+4129170786&4294967295,l=u+(c<<5&4294967295|c>>>27),c=_+(u^f&(l^u))+d[6]+3225465664&4294967295,_=l+(c<<9&4294967295|c>>>23),c=f+(l^u&(_^l))+d[11]+643717713&4294967295,f=_+(c<<14&4294967295|c>>>18),c=u+(_^l&(f^_))+d[0]+3921069994&4294967295,u=f+(c<<20&4294967295|c>>>12),c=l+(f^_&(u^f))+d[5]+3593408605&4294967295,l=u+(c<<5&4294967295|c>>>27),c=_+(u^f&(l^u))+d[10]+38016083&4294967295,_=l+(c<<9&4294967295|c>>>23),c=f+(l^u&(_^l))+d[15]+3634488961&4294967295,f=_+(c<<14&4294967295|c>>>18),c=u+(_^l&(f^_))+d[4]+3889429448&4294967295,u=f+(c<<20&4294967295|c>>>12),c=l+(f^_&(u^f))+d[9]+568446438&4294967295,l=u+(c<<5&4294967295|c>>>27),c=_+(u^f&(l^u))+d[14]+3275163606&4294967295,_=l+(c<<9&4294967295|c>>>23),c=f+(l^u&(_^l))+d[3]+4107603335&4294967295,f=_+(c<<14&4294967295|c>>>18),c=u+(_^l&(f^_))+d[8]+1163531501&4294967295,u=f+(c<<20&4294967295|c>>>12),c=l+(f^_&(u^f))+d[13]+2850285829&4294967295,l=u+(c<<5&4294967295|c>>>27),c=_+(u^f&(l^u))+d[2]+4243563512&4294967295,_=l+(c<<9&4294967295|c>>>23),c=f+(l^u&(_^l))+d[7]+1735328473&4294967295,f=_+(c<<14&4294967295|c>>>18),c=u+(_^l&(f^_))+d[12]+2368359562&4294967295,u=f+(c<<20&4294967295|c>>>12),c=l+(u^f^_)+d[5]+4294588738&4294967295,l=u+(c<<4&4294967295|c>>>28),c=_+(l^u^f)+d[8]+2272392833&4294967295,_=l+(c<<11&4294967295|c>>>21),c=f+(_^l^u)+d[11]+1839030562&4294967295,f=_+(c<<16&4294967295|c>>>16),c=u+(f^_^l)+d[14]+4259657740&4294967295,u=f+(c<<23&4294967295|c>>>9),c=l+(u^f^_)+d[1]+2763975236&4294967295,l=u+(c<<4&4294967295|c>>>28),c=_+(l^u^f)+d[4]+1272893353&4294967295,_=l+(c<<11&4294967295|c>>>21),c=f+(_^l^u)+d[7]+4139469664&4294967295,f=_+(c<<16&4294967295|c>>>16),c=u+(f^_^l)+d[10]+3200236656&4294967295,u=f+(c<<23&4294967295|c>>>9),c=l+(u^f^_)+d[13]+681279174&4294967295,l=u+(c<<4&4294967295|c>>>28),c=_+(l^u^f)+d[0]+3936430074&4294967295,_=l+(c<<11&4294967295|c>>>21),c=f+(_^l^u)+d[3]+3572445317&4294967295,f=_+(c<<16&4294967295|c>>>16),c=u+(f^_^l)+d[6]+76029189&4294967295,u=f+(c<<23&4294967295|c>>>9),c=l+(u^f^_)+d[9]+3654602809&4294967295,l=u+(c<<4&4294967295|c>>>28),c=_+(l^u^f)+d[12]+3873151461&4294967295,_=l+(c<<11&4294967295|c>>>21),c=f+(_^l^u)+d[15]+530742520&4294967295,f=_+(c<<16&4294967295|c>>>16),c=u+(f^_^l)+d[2]+3299628645&4294967295,u=f+(c<<23&4294967295|c>>>9),c=l+(f^(u|~_))+d[0]+4096336452&4294967295,l=u+(c<<6&4294967295|c>>>26),c=_+(u^(l|~f))+d[7]+1126891415&4294967295,_=l+(c<<10&4294967295|c>>>22),c=f+(l^(_|~u))+d[14]+2878612391&4294967295,f=_+(c<<15&4294967295|c>>>17),c=u+(_^(f|~l))+d[5]+4237533241&4294967295,u=f+(c<<21&4294967295|c>>>11),c=l+(f^(u|~_))+d[12]+1700485571&4294967295,l=u+(c<<6&4294967295|c>>>26),c=_+(u^(l|~f))+d[3]+2399980690&4294967295,_=l+(c<<10&4294967295|c>>>22),c=f+(l^(_|~u))+d[10]+4293915773&4294967295,f=_+(c<<15&4294967295|c>>>17),c=u+(_^(f|~l))+d[1]+2240044497&4294967295,u=f+(c<<21&4294967295|c>>>11),c=l+(f^(u|~_))+d[8]+1873313359&4294967295,l=u+(c<<6&4294967295|c>>>26),c=_+(u^(l|~f))+d[15]+4264355552&4294967295,_=l+(c<<10&4294967295|c>>>22),c=f+(l^(_|~u))+d[6]+2734768916&4294967295,f=_+(c<<15&4294967295|c>>>17),c=u+(_^(f|~l))+d[13]+1309151649&4294967295,u=f+(c<<21&4294967295|c>>>11),c=l+(f^(u|~_))+d[4]+4149444226&4294967295,l=u+(c<<6&4294967295|c>>>26),c=_+(u^(l|~f))+d[11]+3174756917&4294967295,_=l+(c<<10&4294967295|c>>>22),c=f+(l^(_|~u))+d[2]+718787259&4294967295,f=_+(c<<15&4294967295|c>>>17),c=u+(_^(f|~l))+d[9]+3951481745&4294967295,p.g[0]=p.g[0]+l&4294967295,p.g[1]=p.g[1]+(f+(c<<21&4294967295|c>>>11))&4294967295,p.g[2]=p.g[2]+f&4294967295,p.g[3]=p.g[3]+_&4294967295}o.prototype.v=function(p,l){l===void 0&&(l=p.length);const u=l-this.blockSize,d=this.C;let f=this.h,_=0;for(;_<l;){if(f==0)for(;_<=u;)a(this,p,_),_+=this.blockSize;if(typeof p=="string"){for(;_<l;)if(d[f++]=p.charCodeAt(_++),f==this.blockSize){a(this,d),f=0;break}}else for(;_<l;)if(d[f++]=p[_++],f==this.blockSize){a(this,d),f=0;break}}this.h=f,this.o+=l},o.prototype.A=function(){var p=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);p[0]=128;for(var l=1;l<p.length-8;++l)p[l]=0;l=this.o*8;for(var u=p.length-8;u<p.length;++u)p[u]=l&255,l/=256;for(this.v(p),p=Array(16),l=0,u=0;u<4;++u)for(let d=0;d<32;d+=8)p[l++]=this.g[u]>>>d&255;return p};function g(p,l){var u=E;return Object.prototype.hasOwnProperty.call(u,p)?u[p]:u[p]=l(p)}function m(p,l){this.h=l;const u=[];let d=!0;for(let f=p.length-1;f>=0;f--){const _=p[f]|0;d&&_==l||(u[f]=_,d=!1)}this.g=u}var E={};function A(p){return-128<=p&&p<128?g(p,function(l){return new m([l|0],l<0?-1:0)}):new m([p|0],p<0?-1:0)}function S(p){if(isNaN(p)||!isFinite(p))return b;if(p<0)return M(S(-p));const l=[];let u=1;for(let d=0;p>=u;d++)l[d]=p/u|0,u*=4294967296;return new m(l,0)}function L(p,l){if(p.length==0)throw Error("number format error: empty string");if(l=l||10,l<2||36<l)throw Error("radix out of range: "+l);if(p.charAt(0)=="-")return M(L(p.substring(1),l));if(p.indexOf("-")>=0)throw Error('number format error: interior "-" character');const u=S(Math.pow(l,8));let d=b;for(let _=0;_<p.length;_+=8){var f=Math.min(8,p.length-_);const c=parseInt(p.substring(_,_+f),l);f<8?(f=S(Math.pow(l,f)),d=d.j(f).add(S(c))):(d=d.j(u),d=d.add(S(c)))}return d}var b=A(0),I=A(1),B=A(16777216);r=m.prototype,r.m=function(){if(U(this))return-M(this).m();let p=0,l=1;for(let u=0;u<this.g.length;u++){const d=this.i(u);p+=(d>=0?d:4294967296+d)*l,l*=4294967296}return p},r.toString=function(p){if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(j(this))return"0";if(U(this))return"-"+M(this).toString(p);const l=S(Math.pow(p,6));var u=this;let d="";for(;;){const f=ht(u,l).g;u=st(u,f.j(l));let _=((u.g.length>0?u.g[0]:u.h)>>>0).toString(p);if(u=f,j(u))return _+d;for(;_.length<6;)_="0"+_;d=_+d}},r.i=function(p){return p<0?0:p<this.g.length?this.g[p]:this.h};function j(p){if(p.h!=0)return!1;for(let l=0;l<p.g.length;l++)if(p.g[l]!=0)return!1;return!0}function U(p){return p.h==-1}r.l=function(p){return p=st(this,p),U(p)?-1:j(p)?0:1};function M(p){const l=p.g.length,u=[];for(let d=0;d<l;d++)u[d]=~p.g[d];return new m(u,~p.h).add(I)}r.abs=function(){return U(this)?M(this):this},r.add=function(p){const l=Math.max(this.g.length,p.g.length),u=[];let d=0;for(let f=0;f<=l;f++){let _=d+(this.i(f)&65535)+(p.i(f)&65535),c=(_>>>16)+(this.i(f)>>>16)+(p.i(f)>>>16);d=c>>>16,_&=65535,c&=65535,u[f]=c<<16|_}return new m(u,u[u.length-1]&-2147483648?-1:0)};function st(p,l){return p.add(M(l))}r.j=function(p){if(j(this)||j(p))return b;if(U(this))return U(p)?M(this).j(M(p)):M(M(this).j(p));if(U(p))return M(this.j(M(p)));if(this.l(B)<0&&p.l(B)<0)return S(this.m()*p.m());const l=this.g.length+p.g.length,u=[];for(var d=0;d<2*l;d++)u[d]=0;for(d=0;d<this.g.length;d++)for(let f=0;f<p.g.length;f++){const _=this.i(d)>>>16,c=this.i(d)&65535,W=p.i(f)>>>16,_t=p.i(f)&65535;u[2*d+2*f]+=c*_t,K(u,2*d+2*f),u[2*d+2*f+1]+=_*_t,K(u,2*d+2*f+1),u[2*d+2*f+1]+=c*W,K(u,2*d+2*f+1),u[2*d+2*f+2]+=_*W,K(u,2*d+2*f+2)}for(p=0;p<l;p++)u[p]=u[2*p+1]<<16|u[2*p];for(p=l;p<2*l;p++)u[p]=0;return new m(u,0)};function K(p,l){for(;(p[l]&65535)!=p[l];)p[l+1]+=p[l]>>>16,p[l]&=65535,l++}function q(p,l){this.g=p,this.h=l}function ht(p,l){if(j(l))throw Error("division by zero");if(j(p))return new q(b,b);if(U(p))return l=ht(M(p),l),new q(M(l.g),M(l.h));if(U(l))return l=ht(p,M(l)),new q(M(l.g),l.h);if(p.g.length>30){if(U(p)||U(l))throw Error("slowDivide_ only works with positive integers.");for(var u=I,d=l;d.l(p)<=0;)u=at(u),d=at(d);var f=X(u,1),_=X(d,1);for(d=X(d,2),u=X(u,2);!j(d);){var c=_.add(d);c.l(p)<=0&&(f=f.add(u),_=c),d=X(d,1),u=X(u,1)}return l=st(p,f.j(l)),new q(f,l)}for(f=b;p.l(l)>=0;){for(u=Math.max(1,Math.floor(p.m()/l.m())),d=Math.ceil(Math.log(u)/Math.LN2),d=d<=48?1:Math.pow(2,d-48),_=S(u),c=_.j(l);U(c)||c.l(p)>0;)u-=d,_=S(u),c=_.j(l);j(_)&&(_=I),f=f.add(_),p=st(p,c)}return new q(f,p)}r.B=function(p){return ht(this,p).h},r.and=function(p){const l=Math.max(this.g.length,p.g.length),u=[];for(let d=0;d<l;d++)u[d]=this.i(d)&p.i(d);return new m(u,this.h&p.h)},r.or=function(p){const l=Math.max(this.g.length,p.g.length),u=[];for(let d=0;d<l;d++)u[d]=this.i(d)|p.i(d);return new m(u,this.h|p.h)},r.xor=function(p){const l=Math.max(this.g.length,p.g.length),u=[];for(let d=0;d<l;d++)u[d]=this.i(d)^p.i(d);return new m(u,this.h^p.h)};function at(p){const l=p.g.length+1,u=[];for(let d=0;d<l;d++)u[d]=p.i(d)<<1|p.i(d-1)>>>31;return new m(u,p.h)}function X(p,l){const u=l>>5;l%=32;const d=p.g.length-u,f=[];for(let _=0;_<d;_++)f[_]=l>0?p.i(_+u)>>>l|p.i(_+u+1)<<32-l:p.i(_+u);return new m(f,p.h)}o.prototype.digest=o.prototype.A,o.prototype.reset=o.prototype.u,o.prototype.update=o.prototype.v,m.prototype.add=m.prototype.add,m.prototype.multiply=m.prototype.j,m.prototype.modulo=m.prototype.B,m.prototype.compare=m.prototype.l,m.prototype.toNumber=m.prototype.m,m.prototype.toString=m.prototype.toString,m.prototype.getBits=m.prototype.i,m.fromNumber=S,m.fromString=L,dn=m}).apply(typeof Ri<"u"?Ri:typeof self<"u"?self:typeof window<"u"?window:{});var ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=Object.defineProperty;function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof ve=="object"&&ve];for(var n=0;n<t.length;++n){var s=t[n];if(s&&s.Math==Math)return s}throw Error("Cannot find global object")}var o=i(this);function a(t,n){if(n)t:{var s=o;t=t.split(".");for(var h=0;h<t.length-1;h++){var y=t[h];if(!(y in s))break t;s=s[y]}t=t[t.length-1],h=s[t],n=n(h),n!=h&&n!=null&&e(s,t,{configurable:!0,writable:!0,value:n})}}a("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(t){return t||function(n){var s=[],h;for(h in n)Object.prototype.hasOwnProperty.call(n,h)&&s.push([h,n[h]]);return s}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var g=g||{},m=this||self;function E(t){var n=typeof t;return n=="object"&&t!=null||n=="function"}function A(t,n,s){return t.call.apply(t.bind,arguments)}function S(t,n,s){return S=A,S.apply(null,arguments)}function L(t,n){var s=Array.prototype.slice.call(arguments,1);return function(){var h=s.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function b(t,n){function s(){}s.prototype=n.prototype,t.Z=n.prototype,t.prototype=new s,t.prototype.constructor=t,t.Ob=function(h,y,w){for(var v=Array(arguments.length-2),T=2;T<arguments.length;T++)v[T-2]=arguments[T];return n.prototype[y].apply(h,v)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function B(t){const n=t.length;if(n>0){const s=Array(n);for(let h=0;h<n;h++)s[h]=t[h];return s}return[]}function j(t,n){for(let h=1;h<arguments.length;h++){const y=arguments[h];var s=typeof y;if(s=s!="object"?s:y?Array.isArray(y)?"array":s:"null",s=="array"||s=="object"&&typeof y.length=="number"){s=t.length||0;const w=y.length||0;t.length=s+w;for(let v=0;v<w;v++)t[s+v]=y[v]}else t.push(y)}}class U{constructor(n,s){this.i=n,this.j=s,this.h=0,this.g=null}get(){let n;return this.h>0?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}function M(t){m.setTimeout(()=>{throw t},0)}function st(){var t=p;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}class K{constructor(){this.h=this.g=null}add(n,s){const h=q.get();h.set(n,s),this.h?this.h.next=h:this.g=h,this.h=h}}var q=new U(()=>new ht,t=>t.reset());class ht{constructor(){this.next=this.g=this.h=null}set(n,s){this.h=n,this.g=s,this.next=null}reset(){this.next=this.g=this.h=null}}let at,X=!1,p=new K,l=()=>{const t=Promise.resolve(void 0);at=()=>{t.then(u)}};function u(){for(var t;t=st();){try{t.h.call(t.g)}catch(s){M(s)}var n=q;n.j(t),n.h<100&&(n.h++,t.next=n.g,n.g=t)}X=!1}function d(){this.u=this.u,this.C=this.C}d.prototype.u=!1,d.prototype.dispose=function(){this.u||(this.u=!0,this.N())},d.prototype[Symbol.dispose]=function(){this.dispose()},d.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function f(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}f.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const s=()=>{};m.addEventListener("test",s,n),m.removeEventListener("test",s,n)}catch{}return t}();function c(t){return/^[\s\xa0]*$/.test(t)}function W(t,n){f.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,n)}b(W,f),W.prototype.init=function(t,n){const s=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget,n||(s=="mouseover"?n=t.fromElement:s=="mouseout"&&(n=t.toElement)),this.relatedTarget=n,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&W.Z.h.call(this)},W.prototype.h=function(){W.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),fs=0;function ps(t,n,s,h,y){this.listener=t,this.proxy=null,this.src=n,this.type=s,this.capture=!!h,this.ha=y,this.key=++fs,this.da=this.fa=!1}function ae(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function le(t,n,s){for(const h in t)n.call(s,t[h],h,t)}function ds(t,n){for(const s in t)n.call(void 0,t[s],s,t)}function wn(t){const n={};for(const s in t)n[s]=t[s];return n}const vn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function En(t,n){let s,h;for(let y=1;y<arguments.length;y++){h=arguments[y];for(s in h)t[s]=h[s];for(let w=0;w<vn.length;w++)s=vn[w],Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s])}}function ce(t){this.src=t,this.g={},this.h=0}ce.prototype.add=function(t,n,s,h,y){const w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);const v=Re(t,n,h,y);return v>-1?(n=t[v],s||(n.fa=!1)):(n=new ps(n,this.src,w,!!h,y),n.fa=s,t.push(n)),n};function De(t,n){const s=n.type;if(s in t.g){var h=t.g[s],y=Array.prototype.indexOf.call(h,n,void 0),w;(w=y>=0)&&Array.prototype.splice.call(h,y,1),w&&(ae(n),t.g[s].length==0&&(delete t.g[s],t.h--))}}function Re(t,n,s,h){for(let y=0;y<t.length;++y){const w=t[y];if(!w.da&&w.listener==n&&w.capture==!!s&&w.ha==h)return y}return-1}var Pe="closure_lm_"+(Math.random()*1e6|0),Ne={};function An(t,n,s,h,y){if(Array.isArray(n)){for(let w=0;w<n.length;w++)An(t,n[w],s,h,y);return null}return s=Tn(s),t&&t[_t]?t.J(n,s,E(h)?!!h.capture:!1,y):gs(t,n,s,!1,h,y)}function gs(t,n,s,h,y,w){if(!n)throw Error("Invalid event type");const v=E(y)?!!y.capture:!!y;let T=Me(t);if(T||(t[Pe]=T=new ce(t)),s=T.add(n,s,h,v,w),s.proxy)return s;if(h=ms(),s.proxy=h,h.src=t,h.listener=s,t.addEventListener)_||(y=v),y===void 0&&(y=!1),t.addEventListener(n.toString(),h,y);else if(t.attachEvent)t.attachEvent(Sn(n.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return s}function ms(){function t(s){return n.call(t.src,t.listener,s)}const n=ys;return t}function In(t,n,s,h,y){if(Array.isArray(n))for(var w=0;w<n.length;w++)In(t,n[w],s,h,y);else h=E(h)?!!h.capture:!!h,s=Tn(s),t&&t[_t]?(t=t.i,w=String(n).toString(),w in t.g&&(n=t.g[w],s=Re(n,s,h,y),s>-1&&(ae(n[s]),Array.prototype.splice.call(n,s,1),n.length==0&&(delete t.g[w],t.h--)))):t&&(t=Me(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Re(n,s,h,y)),(s=t>-1?n[t]:null)&&Oe(s))}function Oe(t){if(typeof t!="number"&&t&&!t.da){var n=t.src;if(n&&n[_t])De(n.i,t);else{var s=t.type,h=t.proxy;n.removeEventListener?n.removeEventListener(s,h,t.capture):n.detachEvent?n.detachEvent(Sn(s),h):n.addListener&&n.removeListener&&n.removeListener(h),(s=Me(n))?(De(s,t),s.h==0&&(s.src=null,n[Pe]=null)):ae(t)}}}function Sn(t){return t in Ne?Ne[t]:Ne[t]="on"+t}function ys(t,n){if(t.da)t=!0;else{n=new W(n,this);const s=t.listener,h=t.ha||t.src;t.fa&&Oe(t),t=s.call(h,n)}return t}function Me(t){return t=t[Pe],t instanceof ce?t:null}var Le="__closure_events_fn_"+(Math.random()*1e9>>>0);function Tn(t){return typeof t=="function"?t:(t[Le]||(t[Le]=function(n){return t.handleEvent(n)}),t[Le])}function H(){d.call(this),this.i=new ce(this),this.M=this,this.G=null}b(H,d),H.prototype[_t]=!0,H.prototype.removeEventListener=function(t,n,s,h){In(this,t,n,s,h)};function $(t,n){var s,h=t.G;if(h)for(s=[];h;h=h.G)s.push(h);if(t=t.M,h=n.type||n,typeof n=="string")n=new f(n,t);else if(n instanceof f)n.target=n.target||t;else{var y=n;n=new f(h,t),En(n,y)}y=!0;let w,v;if(s)for(v=s.length-1;v>=0;v--)w=n.g=s[v],y=ue(w,h,!0,n)&&y;if(w=n.g=t,y=ue(w,h,!0,n)&&y,y=ue(w,h,!1,n)&&y,s)for(v=0;v<s.length;v++)w=n.g=s[v],y=ue(w,h,!1,n)&&y}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var t=this.i;for(const n in t.g){const s=t.g[n];for(let h=0;h<s.length;h++)ae(s[h]);delete t.g[n],t.h--}}this.G=null},H.prototype.J=function(t,n,s,h){return this.i.add(String(t),n,!1,s,h)},H.prototype.K=function(t,n,s,h){return this.i.add(String(t),n,!0,s,h)};function ue(t,n,s,h){if(n=t.i.g[String(n)],!n)return!0;n=n.concat();let y=!0;for(let w=0;w<n.length;++w){const v=n[w];if(v&&!v.da&&v.capture==s){const T=v.listener,V=v.ha||v.src;v.fa&&De(t.i,v),y=T.call(V,h)!==!1&&y}}return y&&!h.defaultPrevented}function _s(t,n){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=S(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(n)>2147483647?-1:m.setTimeout(t,n||0)}function bn(t){t.g=_s(()=>{t.g=null,t.i&&(t.i=!1,bn(t))},t.l);const n=t.h;t.h=null,t.m.apply(null,n)}class ws extends d{constructor(n,s){super(),this.m=n,this.l=s,this.h=null,this.i=!1,this.g=null}j(n){this.h=arguments,this.g?this.i=!0:bn(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(t){d.call(this),this.h=t,this.g={}}b(jt,d);var Cn=[];function Dn(t){le(t.g,function(n,s){this.g.hasOwnProperty(s)&&Oe(n)},t),t.g={}}jt.prototype.N=function(){jt.Z.N.call(this),Dn(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ke=m.JSON.stringify,vs=m.JSON.parse,Es=class{stringify(t){return m.JSON.stringify(t,void 0)}parse(t){return m.JSON.parse(t,void 0)}};function Rn(){}function As(){}var Vt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xe(){f.call(this,"d")}b(xe,f);function je(){f.call(this,"c")}b(je,f);var Rt={},Pn=null;function Ve(){return Pn=Pn||new H}Rt.Ia="serverreachability";function Nn(t){f.call(this,Rt.Ia,t)}b(Nn,f);function Bt(t){const n=Ve();$(n,new Nn(n))}Rt.STAT_EVENT="statevent";function On(t,n){f.call(this,Rt.STAT_EVENT,t),this.stat=n}b(On,f);function z(t){const n=Ve();$(n,new On(n,t))}Rt.Ja="timingevent";function Mn(t,n){f.call(this,Rt.Ja,t),this.size=n}b(Mn,f);function Ft(t,n){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){t()},n)}function Ut(){this.g=!0}Ut.prototype.ua=function(){this.g=!1};function Is(t,n,s,h,y,w){t.info(function(){if(t.g)if(w){var v="",T=w.split("&");for(let N=0;N<T.length;N++){var V=T[N].split("=");if(V.length>1){const F=V[0];V=V[1];const tt=F.split("_");v=tt.length>=2&&tt[1]=="type"?v+(F+"="+V+"&"):v+(F+"=redacted&")}}}else v=null;else v=w;return"XMLHTTP REQ ("+h+") [attempt "+y+"]: "+n+`
`+s+`
`+v})}function Ss(t,n,s,h,y,w,v){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+y+"]: "+n+`
`+s+`
`+w+" "+v})}function Pt(t,n,s,h){t.info(function(){return"XMLHTTP TEXT ("+n+"): "+bs(t,s)+(h?" "+h:"")})}function Ts(t,n){t.info(function(){return"TIMEOUT: "+n})}Ut.prototype.info=function(){};function bs(t,n){if(!t.g)return n;if(!n)return null;try{const w=JSON.parse(n);if(w){for(t=0;t<w.length;t++)if(Array.isArray(w[t])){var s=w[t];if(!(s.length<2)){var h=s[1];if(Array.isArray(h)&&!(h.length<1)){var y=h[0];if(y!="noop"&&y!="stop"&&y!="close")for(let v=1;v<h.length;v++)h[v]=""}}}}return ke(w)}catch{return n}}var Be={NO_ERROR:0,TIMEOUT:8},Cs={},Ln;function Fe(){}b(Fe,Rn),Fe.prototype.g=function(){return new XMLHttpRequest},Ln=new Fe;function Ht(t){return encodeURIComponent(String(t))}function Ds(t){var n=1;t=t.split(":");const s=[];for(;n>0&&t.length;)s.push(t.shift()),n--;return t.length&&s.push(t.join(":")),s}function lt(t,n,s,h){this.j=t,this.i=n,this.l=s,this.S=h||1,this.V=new jt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new kn}function kn(){this.i=null,this.g="",this.h=!1}var xn={},Ue={};function He(t,n,s){t.M=1,t.A=pe(Q(n)),t.u=s,t.R=!0,jn(t,null)}function jn(t,n){t.F=Date.now(),fe(t),t.B=Q(t.A);var s=t.B,h=t.S;Array.isArray(h)||(h=[String(h)]),Kn(s.i,"t",h),t.C=0,s=t.j.L,t.h=new kn,t.g=di(t.j,s?n:null,!t.u),t.P>0&&(t.O=new ws(S(t.Y,t,t.g),t.P)),n=t.V,s=t.g,h=t.ba;var y="readystatechange";Array.isArray(y)||(y&&(Cn[0]=y.toString()),y=Cn);for(let w=0;w<y.length;w++){const v=An(s,y[w],h||n.handleEvent,!1,n.h||n);if(!v)break;n.g[v.key]=v}n=t.J?wn(t.J):{},t.u?(t.v||(t.v="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,n)):(t.v="GET",t.g.ea(t.B,t.v,null,n)),Bt(),Is(t.i,t.v,t.B,t.l,t.S,t.u)}lt.prototype.ba=function(t){t=t.target;const n=this.O;n&&ft(t)==3?n.j():this.Y(t)},lt.prototype.Y=function(t){try{if(t==this.g)t:{const T=ft(this.g),V=this.g.ya(),N=this.g.ca();if(!(T<3)&&(T!=3||this.g&&(this.h.h||this.g.la()||ii(this.g)))){this.K||T!=4||V==7||(V==8||N<=0?Bt(3):Bt(2)),$e(this);var n=this.g.ca();this.X=n;var s=Rs(this);if(this.o=n==200,Ss(this.i,this.v,this.B,this.l,this.S,T,n),this.o){if(this.U&&!this.L){e:{if(this.g){var h,y=this.g;if((h=y.g?y.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!c(h)){var w=h;break e}}w=null}if(t=w)Pt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ze(this,t);else{this.o=!1,this.m=3,z(12),wt(this),$t(this);break t}}if(this.R){t=!0;let F;for(;!this.K&&this.C<s.length;)if(F=Ps(this,s),F==Ue){T==4&&(this.m=4,z(14),t=!1),Pt(this.i,this.l,null,"[Incomplete Response]");break}else if(F==xn){this.m=4,z(15),Pt(this.i,this.l,s,"[Invalid Chunk]"),t=!1;break}else Pt(this.i,this.l,F,null),ze(this,F);if(Vn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),T!=4||s.length!=0||this.h.h||(this.m=1,z(16),t=!1),this.o=this.o&&t,!t)Pt(this.i,this.l,s,"[Invalid Chunked Response]"),wt(this),$t(this);else if(s.length>0&&!this.W){this.W=!0;var v=this.j;v.g==this&&v.aa&&!v.P&&(v.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),Ze(v),v.P=!0,z(11))}}else Pt(this.i,this.l,s,null),ze(this,s);T==4&&wt(this),this.o&&!this.K&&(T==4?ci(this.j,this):(this.o=!1,fe(this)))}else zs(this.g),n==400&&s.indexOf("Unknown SID")>0?(this.m=3,z(12)):(this.m=0,z(13)),wt(this),$t(this)}}}catch{}finally{}};function Rs(t){if(!Vn(t))return t.g.la();const n=ii(t.g);if(n==="")return"";let s="";const h=n.length,y=ft(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return wt(t),$t(t),"";t.h.i=new m.TextDecoder}for(let w=0;w<h;w++)t.h.h=!0,s+=t.h.i.decode(n[w],{stream:!(y&&w==h-1)});return n.length=0,t.h.g+=s,t.C=0,t.h.g}function Vn(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function Ps(t,n){var s=t.C,h=n.indexOf(`
`,s);return h==-1?Ue:(s=Number(n.substring(s,h)),isNaN(s)?xn:(h+=1,h+s>n.length?Ue:(n=n.slice(h,h+s),t.C=h+s,n)))}lt.prototype.cancel=function(){this.K=!0,wt(this)};function fe(t){t.T=Date.now()+t.H,Bn(t,t.H)}function Bn(t,n){if(t.D!=null)throw Error("WatchDog timer not null");t.D=Ft(S(t.aa,t),n)}function $e(t){t.D&&(m.clearTimeout(t.D),t.D=null)}lt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Ts(this.i,this.B),this.M!=2&&(Bt(),z(17)),wt(this),this.m=2,$t(this)):Bn(this,this.T-t)};function $t(t){t.j.I==0||t.K||ci(t.j,t)}function wt(t){$e(t);var n=t.O;n&&typeof n.dispose=="function"&&n.dispose(),t.O=null,Dn(t.V),t.g&&(n=t.g,t.g=null,n.abort(),n.dispose())}function ze(t,n){try{var s=t.j;if(s.I!=0&&(s.g==t||Ge(s.h,t))){if(!t.L&&Ge(s.h,t)&&s.I==3){try{var h=s.Ba.g.parse(n)}catch{h=null}if(Array.isArray(h)&&h.length==3){var y=h;if(y[0]==0){t:if(!s.v){if(s.g)if(s.g.F+3e3<t.F)_e(s),me(s);else break t;Ye(s),z(18)}}else s.xa=y[1],0<s.xa-s.K&&y[2]<37500&&s.F&&s.A==0&&!s.C&&(s.C=Ft(S(s.Va,s),6e3));Hn(s.h)<=1&&s.ta&&(s.ta=void 0)}else Et(s,11)}else if((t.L||s.g==t)&&_e(s),!c(n))for(y=s.Ba.g.parse(n),n=0;n<y.length;n++){let N=y[n];const F=N[0];if(!(F<=s.K))if(s.K=F,N=N[1],s.I==2)if(N[0]=="c"){s.M=N[1],s.ba=N[2];const tt=N[3];tt!=null&&(s.ka=tt,s.j.info("VER="+s.ka));const At=N[4];At!=null&&(s.za=At,s.j.info("SVER="+s.za));const pt=N[5];pt!=null&&typeof pt=="number"&&pt>0&&(h=1.5*pt,s.O=h,s.j.info("backChannelRequestTimeoutMs_="+h)),h=s;const dt=t.g;if(dt){const we=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(we){var w=h.h;w.g||we.indexOf("spdy")==-1&&we.indexOf("quic")==-1&&we.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(We(w,w.h),w.h=null))}if(h.G){const Qe=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qe&&(h.wa=Qe,O(h.J,h.G,Qe))}}s.I=3,s.l&&s.l.ra(),s.aa&&(s.T=Date.now()-t.F,s.j.info("Handshake RTT: "+s.T+"ms")),h=s;var v=t;if(h.na=pi(h,h.L?h.ba:null,h.W),v.L){$n(h.h,v);var T=v,V=h.O;V&&(T.H=V),T.D&&($e(T),fe(T)),h.g=v}else ai(h);s.i.length>0&&ye(s)}else N[0]!="stop"&&N[0]!="close"||Et(s,7);else s.I==3&&(N[0]=="stop"||N[0]=="close"?N[0]=="stop"?Et(s,7):Ke(s):N[0]!="noop"&&s.l&&s.l.qa(N),s.A=0)}}Bt(4)}catch{}}var Ns=class{constructor(t,n){this.g=t,this.map=n}};function Fn(t){this.l=t||10,m.PerformanceNavigationTiming?(t=m.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Un(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hn(t){return t.h?1:t.g?t.g.size:0}function Ge(t,n){return t.h?t.h==n:t.g?t.g.has(n):!1}function We(t,n){t.g?t.g.add(n):t.h=n}function $n(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}Fn.prototype.cancel=function(){if(this.i=zn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zn(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let n=t.i;for(const s of t.g.values())n=n.concat(s.G);return n}return B(t.i)}var Gn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Os(t,n){if(t){t=t.split("&");for(let s=0;s<t.length;s++){const h=t[s].indexOf("=");let y,w=null;h>=0?(y=t[s].substring(0,h),w=t[s].substring(h+1)):y=t[s],n(y,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ct(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let n;t instanceof ct?(this.l=t.l,zt(this,t.j),this.o=t.o,this.g=t.g,Gt(this,t.u),this.h=t.h,qe(this,Yn(t.i)),this.m=t.m):t&&(n=String(t).match(Gn))?(this.l=!1,zt(this,n[1]||"",!0),this.o=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),Gt(this,n[4]),this.h=Wt(n[5]||"",!0),qe(this,n[6]||"",!0),this.m=Wt(n[7]||"")):(this.l=!1,this.i=new Xt(null,this.l))}ct.prototype.toString=function(){const t=[];var n=this.j;n&&t.push(qt(n,Wn,!0),":");var s=this.g;return(s||n=="file")&&(t.push("//"),(n=this.o)&&t.push(qt(n,Wn,!0),"@"),t.push(Ht(s).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s=this.u,s!=null&&t.push(":",String(s))),(s=this.h)&&(this.g&&s.charAt(0)!="/"&&t.push("/"),t.push(qt(s,s.charAt(0)=="/"?ks:Ls,!0))),(s=this.i.toString())&&t.push("?",s),(s=this.m)&&t.push("#",qt(s,js)),t.join("")},ct.prototype.resolve=function(t){const n=Q(this);let s=!!t.j;s?zt(n,t.j):s=!!t.o,s?n.o=t.o:s=!!t.g,s?n.g=t.g:s=t.u!=null;var h=t.h;if(s)Gt(n,t.u);else if(s=!!t.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var y=n.h.lastIndexOf("/");y!=-1&&(h=n.h.slice(0,y+1)+h)}if(y=h,y==".."||y==".")h="";else if(y.indexOf("./")!=-1||y.indexOf("/.")!=-1){h=y.lastIndexOf("/",0)==0,y=y.split("/");const w=[];for(let v=0;v<y.length;){const T=y[v++];T=="."?h&&v==y.length&&w.push(""):T==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),h&&v==y.length&&w.push("")):(w.push(T),h=!0)}h=w.join("/")}else h=y}return s?n.h=h:s=t.i.toString()!=="",s?qe(n,Yn(t.i)):s=!!t.m,s&&(n.m=t.m),n};function Q(t){return new ct(t)}function zt(t,n,s){t.j=s?Wt(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function Gt(t,n){if(n){if(n=Number(n),isNaN(n)||n<0)throw Error("Bad port number "+n);t.u=n}else t.u=null}function qe(t,n,s){n instanceof Xt?(t.i=n,Vs(t.i,t.l)):(s||(n=qt(n,xs)),t.i=new Xt(n,t.l))}function O(t,n,s){t.i.set(n,s)}function pe(t){return O(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function Wt(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qt(t,n,s){return typeof t=="string"?(t=encodeURI(t).replace(n,Ms),s&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ms(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wn=/[#\/\?@]/g,Ls=/[#\?:]/g,ks=/[#\?]/g,xs=/[#\?@]/g,js=/#/g;function Xt(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function vt(t){t.g||(t.g=new Map,t.h=0,t.i&&Os(t.i,function(n,s){t.add(decodeURIComponent(n.replace(/\+/g," ")),s)}))}r=Xt.prototype,r.add=function(t,n){vt(this),this.i=null,t=Nt(this,t);let s=this.g.get(t);return s||this.g.set(t,s=[]),s.push(n),this.h+=1,this};function qn(t,n){vt(t),n=Nt(t,n),t.g.has(n)&&(t.i=null,t.h-=t.g.get(n).length,t.g.delete(n))}function Xn(t,n){return vt(t),n=Nt(t,n),t.g.has(n)}r.forEach=function(t,n){vt(this),this.g.forEach(function(s,h){s.forEach(function(y){t.call(n,y,h,this)},this)},this)};function Jn(t,n){vt(t);let s=[];if(typeof n=="string")Xn(t,n)&&(s=s.concat(t.g.get(Nt(t,n))));else for(t=Array.from(t.g.values()),n=0;n<t.length;n++)s=s.concat(t[n]);return s}r.set=function(t,n){return vt(this),this.i=null,t=Nt(this,t),Xn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},r.get=function(t,n){return t?(t=Jn(this,t),t.length>0?String(t[0]):n):n};function Kn(t,n,s){qn(t,n),s.length>0&&(t.i=null,t.g.set(Nt(t,n),B(s)),t.h+=s.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],n=Array.from(this.g.keys());for(let h=0;h<n.length;h++){var s=n[h];const y=Ht(s);s=Jn(this,s);for(let w=0;w<s.length;w++){let v=y;s[w]!==""&&(v+="="+Ht(s[w])),t.push(v)}}return this.i=t.join("&")};function Yn(t){const n=new Xt;return n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),n}function Nt(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function Vs(t,n){n&&!t.j&&(vt(t),t.i=null,t.g.forEach(function(s,h){const y=h.toLowerCase();h!=y&&(qn(this,h),Kn(this,y,s))},t)),t.j=n}function Bs(t,n){const s=new Ut;if(m.Image){const h=new Image;h.onload=L(ut,s,"TestLoadImage: loaded",!0,n,h),h.onerror=L(ut,s,"TestLoadImage: error",!1,n,h),h.onabort=L(ut,s,"TestLoadImage: abort",!1,n,h),h.ontimeout=L(ut,s,"TestLoadImage: timeout",!1,n,h),m.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else n(!1)}function Fs(t,n){const s=new Ut,h=new AbortController,y=setTimeout(()=>{h.abort(),ut(s,"TestPingServer: timeout",!1,n)},1e4);fetch(t,{signal:h.signal}).then(w=>{clearTimeout(y),w.ok?ut(s,"TestPingServer: ok",!0,n):ut(s,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(y),ut(s,"TestPingServer: error",!1,n)})}function ut(t,n,s,h,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),h(s)}catch{}}function Us(){this.g=new Es}function Xe(t){this.i=t.Sb||null,this.h=t.ab||!1}b(Xe,Rn),Xe.prototype.g=function(){return new de(this.i,this.h)};function de(t,n){H.call(this),this.H=t,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(de,H),r=de.prototype,r.open=function(t,n){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=n,this.readyState=1,Kt(this)},r.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const n={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(n.body=t),(this.H||m).fetch(new Request(this.D,n)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Jt(this)),this.readyState=0},r.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Kt(this)),this.g&&(this.readyState=3,Kt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zn(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zn(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}r.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var n=t.value?t.value:new Uint8Array(0);(n=this.B.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?Jt(this):Kt(this),this.readyState==3&&Zn(this)}},r.Oa=function(t){this.g&&(this.response=this.responseText=t,Jt(this))},r.Na=function(t){this.g&&(this.response=t,Jt(this))},r.ga=function(){this.g&&Jt(this)};function Jt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Kt(t)}r.setRequestHeader=function(t,n){this.A.append(t,n)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var s=n.next();!s.done;)s=s.value,t.push(s[0]+": "+s[1]),s=n.next();return t.join(`\r
`)};function Kt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(de.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Qn(t){let n="";return le(t,function(s,h){n+=h,n+=":",n+=s,n+=`\r
`}),n}function Je(t,n,s){t:{for(h in s){var h=!1;break t}h=!0}h||(s=Qn(s),typeof t=="string"?s!=null&&Ht(s):O(t,n,s))}function k(t){H.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(k,H);var Hs=/^https?$/i,$s=["POST","PUT"];r=k.prototype,r.Fa=function(t){this.H=t},r.ea=function(t,n,s,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);n=n?n.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ln.g(),this.g.onreadystatechange=I(S(this.Ca,this));try{this.B=!0,this.g.open(n,String(t),!0),this.B=!1}catch(w){ti(this,w);return}if(t=s||"",s=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var y in h)s.set(y,h[y]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())s.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(s.keys()).find(w=>w.toLowerCase()=="content-type"),y=m.FormData&&t instanceof m.FormData,!(Array.prototype.indexOf.call($s,n,void 0)>=0)||h||y||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,v]of s)this.g.setRequestHeader(w,v);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(w){ti(this,w)}};function ti(t,n){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=n,t.o=5,ei(t),ge(t)}function ei(t){t.A||(t.A=!0,$(t,"complete"),$(t,"error"))}r.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,$(this,"complete"),$(this,"abort"),ge(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ge(this,!0)),k.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?ni(this):this.Xa())},r.Xa=function(){ni(this)};function ni(t){if(t.h&&typeof g<"u"){if(t.v&&ft(t)==4)setTimeout(t.Ca.bind(t),0);else if($(t,"readystatechange"),ft(t)==4){t.h=!1;try{const w=t.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var s;if(!(s=n)){var h;if(h=w===0){let v=String(t.D).match(Gn)[1]||null;!v&&m.self&&m.self.location&&(v=m.self.location.protocol.slice(0,-1)),h=!Hs.test(v?v.toLowerCase():"")}s=h}if(s)$(t,"complete"),$(t,"success");else{t.o=6;try{var y=ft(t)>2?t.g.statusText:""}catch{y=""}t.l=y+" ["+t.ca()+"]",ei(t)}}finally{ge(t)}}}}function ge(t,n){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const s=t.g;t.g=null,n||$(t,"ready");try{s.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function ft(t){return t.g?t.g.readyState:0}r.ca=function(){try{return ft(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(t){if(this.g){var n=this.g.responseText;return t&&n.indexOf(t)==0&&(n=n.substring(t.length)),vs(n)}};function ii(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function zs(t){const n={};t=(t.g&&ft(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(c(t[h]))continue;var s=Ds(t[h]);const y=s[0];if(s=s[1],typeof s!="string")continue;s=s.trim();const w=n[y]||[];n[y]=w,w.push(s)}ds(n,function(h){return h.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yt(t,n,s){return s&&s.internalChannelParams&&s.internalChannelParams[t]||n}function si(t){this.za=0,this.i=[],this.j=new Ut,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Yt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Yt("baseRetryDelayMs",5e3,t),this.Za=Yt("retryDelaySeedMs",1e4,t),this.Ta=Yt("forwardChannelMaxRetries",2,t),this.va=Yt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Fn(t&&t.concurrentRequestLimit),this.Ba=new Us,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=si.prototype,r.ka=8,r.I=1,r.connect=function(t,n,s,h){z(0),this.W=t,this.H=n||{},s&&h!==void 0&&(this.H.OSID=s,this.H.OAID=h),this.F=this.X,this.J=pi(this,null,this.W),ye(this)};function Ke(t){if(ri(t),t.I==3){var n=t.V++,s=Q(t.J);if(O(s,"SID",t.M),O(s,"RID",n),O(s,"TYPE","terminate"),Zt(t,s),n=new lt(t,t.j,n),n.M=2,n.A=pe(Q(s)),s=!1,m.navigator&&m.navigator.sendBeacon)try{s=m.navigator.sendBeacon(n.A.toString(),"")}catch{}!s&&m.Image&&(new Image().src=n.A,s=!0),s||(n.g=di(n.j,null),n.g.ea(n.A)),n.F=Date.now(),fe(n)}fi(t)}function me(t){t.g&&(Ze(t),t.g.cancel(),t.g=null)}function ri(t){me(t),t.v&&(m.clearTimeout(t.v),t.v=null),_e(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&m.clearTimeout(t.m),t.m=null)}function ye(t){if(!Un(t.h)&&!t.m){t.m=!0;var n=t.Ea;at||l(),X||(at(),X=!0),p.add(n,t),t.D=0}}function Gs(t,n){return Hn(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=n.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=Ft(S(t.Ea,t,n),ui(t,t.D)),t.D++,!0)}r.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const y=new lt(this,this.j,t);let w=this.o;if(this.U&&(w?(w=wn(w),En(w,this.U)):w=this.U),this.u!==null||this.R||(y.J=w,w=null),this.S)t:{for(var n=0,s=0;s<this.i.length;s++){e:{var h=this.i[s];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(n+=h,n>4096){n=s;break t}if(n===4096||s===this.i.length-1){n=s+1;break t}}n=1e3}else n=1e3;n=hi(this,y,n),s=Q(this.J),O(s,"RID",t),O(s,"CVER",22),this.G&&O(s,"X-HTTP-Session-Id",this.G),Zt(this,s),w&&(this.R?n="headers="+Ht(Qn(w))+"&"+n:this.u&&Je(s,this.u,w)),We(this.h,y),this.Ra&&O(s,"TYPE","init"),this.S?(O(s,"$req",n),O(s,"SID","null"),y.U=!0,He(y,s,null)):He(y,s,n),this.I=2}}else this.I==3&&(t?oi(this,t):this.i.length==0||Un(this.h)||oi(this))};function oi(t,n){var s;n?s=n.l:s=t.V++;const h=Q(t.J);O(h,"SID",t.M),O(h,"RID",s),O(h,"AID",t.K),Zt(t,h),t.u&&t.o&&Je(h,t.u,t.o),s=new lt(t,t.j,s,t.D+1),t.u===null&&(s.J=t.o),n&&(t.i=n.G.concat(t.i)),n=hi(t,s,1e3),s.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),We(t.h,s),He(s,h,n)}function Zt(t,n){t.H&&le(t.H,function(s,h){O(n,h,s)}),t.l&&le({},function(s,h){O(n,h,s)})}function hi(t,n,s){s=Math.min(t.i.length,s);const h=t.l?S(t.l.Ka,t.l,t):null;t:{var y=t.i;let T=-1;for(;;){const V=["count="+s];T==-1?s>0?(T=y[0].g,V.push("ofs="+T)):T=0:V.push("ofs="+T);let N=!0;for(let F=0;F<s;F++){var w=y[F].g;const tt=y[F].map;if(w-=T,w<0)T=Math.max(0,y[F].g-100),N=!1;else try{w="req"+w+"_"||"";try{var v=tt instanceof Map?tt:Object.entries(tt);for(const[At,pt]of v){let dt=pt;E(pt)&&(dt=ke(pt)),V.push(w+At+"="+encodeURIComponent(dt))}}catch(At){throw V.push(w+"type="+encodeURIComponent("_badmap")),At}}catch{h&&h(tt)}}if(N){v=V.join("&");break t}}v=void 0}return t=t.i.splice(0,s),n.G=t,v}function ai(t){if(!t.g&&!t.v){t.Y=1;var n=t.Da;at||l(),X||(at(),X=!0),p.add(n,t),t.A=0}}function Ye(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=Ft(S(t.Da,t),ui(t,t.A)),t.A++,!0)}r.Da=function(){if(this.v=null,li(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Ft(S(this.Wa,this),t)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,z(10),me(this),li(this))};function Ze(t){t.B!=null&&(m.clearTimeout(t.B),t.B=null)}function li(t){t.g=new lt(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var n=Q(t.na);O(n,"RID","rpc"),O(n,"SID",t.M),O(n,"AID",t.K),O(n,"CI",t.F?"0":"1"),!t.F&&t.ia&&O(n,"TO",t.ia),O(n,"TYPE","xmlhttp"),Zt(t,n),t.u&&t.o&&Je(n,t.u,t.o),t.O&&(t.g.H=t.O);var s=t.g;t=t.ba,s.M=1,s.A=pe(Q(n)),s.u=null,s.R=!0,jn(s,t)}r.Va=function(){this.C!=null&&(this.C=null,me(this),Ye(this),z(19))};function _e(t){t.C!=null&&(m.clearTimeout(t.C),t.C=null)}function ci(t,n){var s=null;if(t.g==n){_e(t),Ze(t),t.g=null;var h=2}else if(Ge(t.h,n))s=n.G,$n(t.h,n),h=1;else return;if(t.I!=0){if(n.o)if(h==1){s=n.u?n.u.length:0,n=Date.now()-n.F;var y=t.D;h=Ve(),$(h,new Mn(h,s)),ye(t)}else ai(t);else if(y=n.m,y==3||y==0&&n.X>0||!(h==1&&Gs(t,n)||h==2&&Ye(t)))switch(s&&s.length>0&&(n=t.h,n.i=n.i.concat(s)),y){case 1:Et(t,5);break;case 4:Et(t,10);break;case 3:Et(t,6);break;default:Et(t,2)}}}function ui(t,n){let s=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(s*=2),s*n}function Et(t,n){if(t.j.info("Error code "+n),n==2){var s=S(t.bb,t),h=t.Ua;const y=!h;h=new ct(h||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||zt(h,"https"),pe(h),y?Bs(h.toString(),s):Fs(h.toString(),s)}else z(2);t.I=0,t.l&&t.l.pa(n),fi(t),ri(t)}r.bb=function(t){t?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function fi(t){if(t.I=0,t.ja=[],t.l){const n=zn(t.h);(n.length!=0||t.i.length!=0)&&(j(t.ja,n),j(t.ja,t.i),t.h.i.length=0,B(t.i),t.i.length=0),t.l.oa()}}function pi(t,n,s){var h=s instanceof ct?Q(s):new ct(s);if(h.g!="")n&&(h.g=n+"."+h.g),Gt(h,h.u);else{var y=m.location;h=y.protocol,n=n?n+"."+y.hostname:y.hostname,y=+y.port;const w=new ct(null);h&&zt(w,h),n&&(w.g=n),y&&Gt(w,y),s&&(w.h=s),h=w}return s=t.G,n=t.wa,s&&n&&O(h,s,n),O(h,"VER",t.ka),Zt(t,h),h}function di(t,n,s){if(n&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return n=t.Aa&&!t.ma?new k(new Xe({ab:s})):new k(t.ma),n.Fa(t.L),n}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function gi(){}r=gi.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function J(t,n){H.call(this),this.g=new si(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.sa&&(t?t["X-WebChannel-Client-Profile"]=n.sa:t={"X-WebChannel-Client-Profile":n.sa}),this.g.U=t,(t=n&&n.Qb)&&!c(t)&&(this.g.u=t),this.A=n&&n.supportsCrossDomainXhr||!1,this.v=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!c(n)&&(this.g.G=n,t=this.h,t!==null&&n in t&&(t=this.h,n in t&&delete t[n])),this.j=new Ot(this)}b(J,H),J.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},J.prototype.close=function(){Ke(this.g)},J.prototype.o=function(t){var n=this.g;if(typeof t=="string"){var s={};s.__data__=t,t=s}else this.v&&(s={},s.__data__=ke(t),t=s);n.i.push(new Ns(n.Ya++,t)),n.I==3&&ye(n)},J.prototype.N=function(){this.g.l=null,delete this.j,Ke(this.g),delete this.g,J.Z.N.call(this)};function mi(t){xe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var n=t.__sm__;if(n){t:{for(const s in n){t=s;break t}t=void 0}(this.i=t)&&(t=this.i,n=n!==null&&t in n?n[t]:void 0),this.data=n}else this.data=t}b(mi,xe);function yi(){je.call(this),this.status=1}b(yi,je);function Ot(t){this.g=t}b(Ot,gi),Ot.prototype.ra=function(){$(this.g,"a")},Ot.prototype.qa=function(t){$(this.g,new mi(t))},Ot.prototype.pa=function(t){$(this.g,new yi)},Ot.prototype.oa=function(){$(this.g,"b")},J.prototype.send=J.prototype.o,J.prototype.open=J.prototype.m,J.prototype.close=J.prototype.close,Be.NO_ERROR=0,Be.TIMEOUT=8,Be.HTTP_ERROR=6,Cs.COMPLETE="complete",As.EventType=Vt,Vt.OPEN="a",Vt.CLOSE="b",Vt.ERROR="c",Vt.MESSAGE="d",H.prototype.listen=H.prototype.J,k.prototype.listenOnce=k.prototype.K,k.prototype.getLastError=k.prototype.Ha,k.prototype.getLastErrorCode=k.prototype.ya,k.prototype.getStatus=k.prototype.ca,k.prototype.getResponseJson=k.prototype.La,k.prototype.getResponseText=k.prototype.la,k.prototype.send=k.prototype.ea,k.prototype.setWithCredentials=k.prototype.Fa}).apply(typeof ve<"u"?ve:typeof self<"u"?self:typeof window<"u"?window:{});const Pi="@firebase/firestore",Ni="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oe="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Zi("@firebase/firestore");function Z(r,...e){if(kt.logLevel<=P.DEBUG){const i=e.map(gn);kt.debug(`Firestore (${oe}): ${r}`,...i)}}function ss(r,...e){if(kt.logLevel<=P.ERROR){const i=e.map(gn);kt.error(`Firestore (${oe}): ${r}`,...i)}}function Ro(r,...e){if(kt.logLevel<=P.WARN){const i=e.map(gn);kt.warn(`Firestore (${oe}): ${r}`,...i)}}function gn(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(r,e,i){let o="Unexpected state";typeof e=="string"?o=e:i=e,rs(r,o,i)}function rs(r,e,i){let o=`FIRESTORE (${oe}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(i!==void 0)try{o+=" CONTEXT: "+JSON.stringify(i)}catch{o+=" CONTEXT: "+i}throw ss(o),new Error(o)}function te(r,e,i,o){let a="Unexpected state";typeof i=="string"?a=i:o=i,r||rs(e,a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class R extends xt{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Po{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(G.UNAUTHENTICATED))}shutdown(){}}class No{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Oo{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){te(this.o===void 0,42304);let o=this.i;const a=A=>this.i!==o?(o=this.i,i(A)):Promise.resolve();let g=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),g.resolve(),g=new ee,e.enqueueRetryable(()=>a(this.currentUser))};const m=()=>{const A=g;e.enqueueRetryable(async()=>{await A.promise,await a(this.currentUser)})},E=A=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=A,this.o&&(this.auth.addAuthTokenListener(this.o),m())};this.t.onInit(A=>E(A)),setTimeout(()=>{if(!this.auth){const A=this.t.getImmediate({optional:!0});A?E(A):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),g.resolve(),g=new ee)}},0),m()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(o=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(te(typeof o.accessToken=="string",31837,{l:o}),new os(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new G(e)}}class Mo{constructor(e,i,o){this.P=e,this.T=i,this.I=o,this.type="FirstParty",this.user=G.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lo{constructor(e,i,o){this.P=e,this.T=i,this.I=o}getToken(){return Promise.resolve(new Mo(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ko{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,uo(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){te(this.o===void 0,3512);const o=g=>{g.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${g.error.message}`);const m=g.token!==this.m;return this.m=g.token,Z("FirebaseAppCheckTokenProvider",`Received ${m?"new":"existing"} token.`),m?i(g.token):Promise.resolve()};this.o=g=>{e.enqueueRetryable(()=>o(g))};const a=g=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=g,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(g=>a(g)),setTimeout(()=>{if(!this.appCheck){const g=this.V.getImmediate({optional:!0});g?a(g):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Oi(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(te(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Oi(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let o=0;o<r;o++)i[o]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const a=xo(40);for(let g=0;g<a.length;++g)o.length<20&&a[g]<i&&(o+=e.charAt(a[g]%62))}return o}}function yt(r,e){return r<e?-1:r>e?1:0}function Vo(r,e){const i=Math.min(r.length,e.length);for(let o=0;o<i;o++){const a=r.charAt(o),g=e.charAt(o);if(a!==g)return rn(a)===rn(g)?yt(a,g):rn(a)?1:-1}return yt(r.length,e.length)}const Bo=55296,Fo=57343;function rn(r){const e=r.charCodeAt(0);return e>=Bo&&e<=Fo}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="__name__";class et{constructor(e,i,o){i===void 0?i=0:i>e.length&&re(637,{offset:i,range:e.length}),o===void 0?o=e.length-i:o>e.length-i&&re(1746,{length:o,range:e.length-i}),this.segments=e,this.offset=i,this.len=o}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(o=>{i.push(o)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,o=this.limit();i<o;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const o=Math.min(e.length,i.length);for(let a=0;a<o;a++){const g=et.compareSegments(e.get(a),i.get(a));if(g!==0)return g}return yt(e.length,i.length)}static compareSegments(e,i){const o=et.isNumericId(e),a=et.isNumericId(i);return o&&!a?-1:!o&&a?1:o&&a?et.extractNumericId(e).compare(et.extractNumericId(i)):Vo(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dn.fromString(e.substring(4,e.length-2))}}class Y extends et{construct(e,i,o){return new Y(e,i,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const o of e){if(o.indexOf("//")>=0)throw new R(D.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);i.push(...o.split("/").filter(a=>a.length>0))}return new Y(i)}static emptyPath(){return new Y([])}}const Uo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends et{construct(e,i,o){return new St(e,i,o)}static isValidIdentifier(e){return Uo.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mi}static keyField(){return new St([Mi])}static fromServerFormat(e){const i=[];let o="",a=0;const g=()=>{if(o.length===0)throw new R(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(o),o=""};let m=!1;for(;a<e.length;){const E=e[a];if(E==="\\"){if(a+1===e.length)throw new R(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const A=e[a+1];if(A!=="\\"&&A!=="."&&A!=="`")throw new R(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);o+=A,a+=2}else E==="`"?(m=!m,a++):E!=="."||m?(o+=E,a++):(g(),a++)}if(g(),m)throw new R(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(i)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.path=e}static fromPath(e){return new Tt(Y.fromString(e))}static fromName(e){return new Tt(Y.fromString(e).popFirst(5))}static empty(){return new Tt(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return Y.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Tt(new Y(e.slice()))}}function Ho(r,e,i,o){if(e===!0&&o===!0)throw new R(D.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function $o(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function zo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":re(12329,{type:typeof r})}function Go(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new R(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=zo(r);throw new R(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(r,e){const i={typeString:r};return e&&(i.value=e),i}function he(r,e){if(!$o(r))throw new R(D.INVALID_ARGUMENT,"JSON must be an object");let i;for(const o in e)if(e[o]){const a=e[o].typeString,g="value"in e[o]?{value:e[o].value}:void 0;if(!(o in r)){i=`JSON missing required field: '${o}'`;break}const m=r[o];if(a&&typeof m!==a){i=`JSON field '${o}' must be a ${a}.`;break}if(g!==void 0&&m!==g.value){i=`Expected '${o}' field to equal '${g.value}'`;break}}if(i)throw new R(D.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=-62135596800,ki=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),o=Math.floor((e-1e3*i)*ki);return new nt(i,o)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new R(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new R(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Li)throw new R(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ki}_compareTo(e){return this.seconds===e.seconds?yt(this.nanoseconds,e.nanoseconds):yt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(he(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Li;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:x("string",nt._jsonSchemaVersion),seconds:x("number"),nanoseconds:x("number")};function Wo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(a){try{return atob(a)}catch(g){throw typeof DOMException<"u"&&g instanceof DOMException?new qo("Invalid base64 string: "+g):g}}(e);return new Dt(i)}static fromUint8Array(e){const i=function(a){let g="";for(let m=0;m<a.length;++m)g+=String.fromCharCode(a[m]);return g}(e);return new Dt(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const o=new Uint8Array(i.length);for(let a=0;a<i.length;a++)o[a]=i.charCodeAt(a);return o}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return yt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const fn="(default)";class Ce{constructor(e,i){this.projectId=e,this.database=i||fn}static empty(){return new Ce("","")}get isDefaultDatabase(){return this.database===fn}isEqual(e){return e instanceof Ce&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,i=null,o=[],a=[],g=null,m="F",E=null,A=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=o,this.filters=a,this.limit=g,this.limitType=m,this.startAt=E,this.endAt=A,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Jo(r){return new Xo(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi,C;(C=xi||(xi={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new dn([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=1048576;function on(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,i,o=1e3,a=1.5,g=6e4){this.Mi=e,this.timerId=i,this.d_=o,this.A_=a,this.R_=g,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),o=Math.max(0,Date.now()-this.f_),a=Math.max(0,i-o);a>0&&Z("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${o} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,i,o,a,g){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=o,this.op=a,this.removalCallback=g,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(m=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,o,a,g){const m=Date.now()+o,E=new mn(e,i,m,a,g);return E.start(o),E}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ji,Vi;(Vi=ji||(ji={})).Ma="default",Vi.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="firestore.googleapis.com",Fi=!0;class Ui{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new R(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hs,this.ssl=Fi}else this.host=e.host,this.ssl=e.ssl??Fi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ko;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yo)throw new R(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ho("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qo(e.experimentalLongPollingOptions??{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new R(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new R(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new R(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,a){return o.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class as{constructor(e,i,o,a){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=o,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ui({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new R(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new R(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ui(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new Po;switch(o.type){case"firstParty":return new Lo(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new R(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const o=Bi.get(i);o&&(Z("ComponentProvider","Removing Datastore"),Bi.delete(i),o.terminate())}(this),Promise.resolve()}}function th(r,e,i,o={}){var S;r=Go(r,as);const a=Ki(e),g=r._getSettings(),m={...g,emulatorOptions:r._getEmulatorOptions()},E=`${e}:${i}`;a&&(sr(`https://${E}`),ar("Firestore",!0)),g.host!==hs&&g.host!==E&&Ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const A={...g,host:E,ssl:a,emulatorOptions:o};if(!Se(A,m)&&(r._setSettings(A),o.mockUserToken)){let L,b;if(typeof o.mockUserToken=="string")L=o.mockUserToken,b=G.MOCK_USER;else{L=rr(o.mockUserToken,(S=r._app)==null?void 0:S.options.projectId);const I=o.mockUserToken.sub||o.mockUserToken.user_id;if(!I)throw new R(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new G(I)}r._authCredentials=new No(new os(L,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,i,o){this.converter=i,this._query=o,this.type="query",this.firestore=e}withConverter(e){return new yn(this.firestore,e,this._query)}}class it{constructor(e,i,o){this.converter=i,this._key=o,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,o){if(he(i,it._jsonSchema))return new it(e,o||null,new Tt(Y.fromString(i.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:x("string",it._jsonSchemaVersion),referencePath:x("string")};class _n extends yn{constructor(e,i,o){super(e,i,Jo(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new Tt(e))}withConverter(e){return new _n(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="AsyncQueue";class $i{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zo(this,"async_queue_retry"),this._c=()=>{const o=on();o&&Z(Hi,"Visibility state changed to "+o.visibilityState),this.M_.w_()},this.ac=e;const i=on();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=on();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const i=new ee;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Wo(e))throw e;Z(Hi,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const i=this.ac.then(()=>(this.rc=!0,e().catch(o=>{throw this.nc=o,this.rc=!1,ss("INTERNAL UNHANDLED ERROR: ",zi(o)),o}).then(o=>(this.rc=!1,o))));return this.ac=i,i}enqueueAfterDelay(e,i,o){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const a=mn.createAndSchedule(this,e,i,o,g=>this.hc(g));return this.tc.push(a),a}uc(){this.nc&&re(47125,{Pc:zi(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((i,o)=>i.targetTimeMs-o.targetTimeMs);for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function zi(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class eh extends as{constructor(e,i,o,a){super(e,i,o,a),this.type="firestore",this._queue=new $i,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $i(e),this._firestoreClient=void 0,await e}}}function nh(r,e){const i=typeof r=="object"?r:mo(),o=typeof r=="string"?r:fn,a=co(i,"firestore").getImmediate({identifier:o});if(!a._initialized){const g=nr("firestore");g&&th(a,...g)}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rt(Dt.fromBase64String(e))}catch(i){throw new R(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new rt(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(he(e,rt._jsonSchema))return rt.fromBase64String(e.bytes)}}rt._jsonSchemaVersion="firestore/bytes/1.0",rt._jsonSchema={type:x("string",rt._jsonSchemaVersion),bytes:x("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new R(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new R(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new R(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return yt(this._lat,e._lat)||yt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bt._jsonSchemaVersion}}static fromJSON(e){if(he(e,bt._jsonSchema))return new bt(e.latitude,e.longitude)}}bt._jsonSchemaVersion="firestore/geoPoint/1.0",bt._jsonSchema={type:x("string",bt._jsonSchemaVersion),latitude:x("number"),longitude:x("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(o,a){if(o.length!==a.length)return!1;for(let g=0;g<o.length;++g)if(o[g]!==a[g])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(he(e,Ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(i=>typeof i=="number"))return new Ct(e.vectorValues);throw new R(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ct._jsonSchemaVersion="firestore/vectorValue/1.0",Ct._jsonSchema={type:x("string",Ct._jsonSchemaVersion),vectorValues:x("object")};const ih=new RegExp("[~\\*/\\[\\]]");function sh(r,e,i){if(e.search(ih)>=0)throw Gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new ls(...e.split("."))._internalPath}catch{throw Gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Gi(r,e,i,o,a){let g=`Function ${e}() called with invalid data`;g+=". ";let m="";return new R(D.INVALID_ARGUMENT,g+r+m)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,i,o,a,g){this._firestore=e,this._userDataWriter=i,this._key=o,this._document=a,this._converter=g}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(us("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class rh extends cs{data(){return super.data()}}function us(r,e){return typeof e=="string"?sh(r,e):e instanceof ls?e._internalPath:e._delegate._internalPath}class Ee{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lt extends cs{constructor(e,i,o,a,g,m){super(e,i,o,a,m),this._firestore=e,this._firestoreImpl=e,this.metadata=g}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Ae(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const o=this._document.data.field(us("DocumentSnapshot.get",e));if(o!==null)return this._userDataWriter.convertValue(o,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new R(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=Lt._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Lt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Lt._jsonSchema={type:x("string",Lt._jsonSchemaVersion),bundleSource:x("string","DocumentSnapshot"),bundleName:x("string"),bundle:x("string")};class Ae extends Lt{data(e={}){return super.data(e)}}class ne{constructor(e,i,o,a){this._firestore=e,this._userDataWriter=i,this._snapshot=a,this.metadata=new Ee(a.hasPendingWrites,a.fromCache),this.query=o}get docs(){const e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach(o=>{e.call(i,new Ae(this._firestore,this._userDataWriter,o.key,o,new Ee(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new R(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(a,g){if(a._snapshot.oldDocs.isEmpty()){let m=0;return a._snapshot.docChanges.map(E=>{const A=new Ae(a._firestore,a._userDataWriter,E.doc.key,E.doc,new Ee(a._snapshot.mutatedKeys.has(E.doc.key),a._snapshot.fromCache),a.query.converter);return E.doc,{type:"added",doc:A,oldIndex:-1,newIndex:m++}})}{let m=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(E=>g||E.type!==3).map(E=>{const A=new Ae(a._firestore,a._userDataWriter,E.doc.key,E.doc,new Ee(a._snapshot.mutatedKeys.has(E.doc.key),a._snapshot.fromCache),a.query.converter);let S=-1,L=-1;return E.type!==0&&(S=m.indexOf(E.doc.key),m=m.delete(E.doc.key)),E.type!==1&&(m=m.add(E.doc),L=m.indexOf(E.doc.key)),{type:oh(E.type),doc:A,oldIndex:S,newIndex:L}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new R(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ne._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],o=[],a=[];return this.docs.forEach(g=>{g._document!==null&&(i.push(g._document),o.push(this._userDataWriter.convertObjectMap(g._document.data.value.mapValue.fields,"previous")),a.push(g.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oh(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:r})}}ne._jsonSchemaVersion="firestore/querySnapshot/1.0",ne._jsonSchema={type:x("string",ne._jsonSchemaVersion),bundleSource:x("string","QuerySnapshot"),bundleName:x("string"),bundle:x("string")};(function(e,i=!0){(function(a){oe=a})(go),be(new ie("firestore",(o,{instanceIdentifier:a,options:g})=>{const m=o.getProvider("app").getImmediate(),E=new eh(new Oo(o.getProvider("auth-internal")),new ko(m,o.getProvider("app-check-internal")),function(S,L){if(!Object.prototype.hasOwnProperty.apply(S.options,["projectId"]))throw new R(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ce(S.options.projectId,L)}(m,a),m);return g={useFetchStreams:i,...g},E._setSettings(g),E},"PUBLIC").setMultipleInstances(!0)),Mt(Pi,Ni,e),Mt(Pi,Ni,"esm2020")})();const hh={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_SENDER_ID",appId:"YOUR_APP_ID"},ah=es(hh);nh(ah);console.log("Reservation UI Initialized. Firebase connection successful.");function lh(){const r=document.getElementById("app");r&&(r.innerHTML="<h1>NMR Scheduler UI Loaded!</h1><p>Firestore initialized. Ready to book.</p>")}document.addEventListener("DOMContentLoaded",lh);
