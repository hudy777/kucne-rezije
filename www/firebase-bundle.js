(()=>{var ig=Object.defineProperty;var Oh=(n,e)=>()=>(n&&(e=n(n=0)),e);var sg=(n,e)=>{for(var t in e)ig(n,t,{get:e[t],enumerable:!0})};var zw,Gw,Tm,vT,wT,gr,Ci,$w,Kw,Ww,_r,Mo,IT,yr,Im,Em,Cl,ET,Hw,Qw,Jw,Yw,Dl,TT,Fo=Oh(()=>{zw=n=>{let e=new Map;e.set("web",{name:"web"});let t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,a)=>{t.platforms.set(s,a)},i=s=>{t.platforms.has(s)&&(t.currentPlatform=t.platforms.get(s))};return t.addPlatform=r,t.setPlatform=i,t},Gw=n=>n.CapacitorPlatforms=zw(n),Tm=Gw(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),vT=Tm.addPlatform,wT=Tm.setPlatform;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(gr||(gr={}));Ci=class extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}},$w=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},Kw=n=>{var e,t,r,i,s;let a=n.CapacitorCustomPlatform||null,c=n.Capacitor||{},u=c.Plugins=c.Plugins||{},h=n.CapacitorPlatforms,f=()=>a!==null?a.name:$w(n),m=((e=h?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||f,I=()=>m()!=="web",A=((t=h?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||I,N=v=>{let g=K.get(v);return!!(g?.platforms.has(m())||q(v))},k=((r=h?.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||N,C=v=>{var g;return(g=c.PluginHeaders)===null||g===void 0?void 0:g.find(_=>_.name===v)},q=((i=h?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||C,U=v=>n.console.error(v),M=(v,g,_)=>Promise.reject(`${_} does not have an implementation of "${g}".`),K=new Map,J=(v,g={})=>{let _=K.get(v);if(_)return console.warn(`Capacitor plugin "${v}" already registered. Cannot register plugins twice.`),_.proxy;let w=m(),E=q(v),b,y=async()=>(!b&&w in g?b=typeof g[w]=="function"?b=await g[w]():b=g[w]:a!==null&&!b&&"web"in g&&(b=typeof g.web=="function"?b=await g.web():b=g.web),b),Ke=(he,Te)=>{var de,re;if(E){let Je=E?.methods.find(ve=>Te===ve.name);if(Je)return Je.rtype==="promise"?ve=>c.nativePromise(v,Te.toString(),ve):(ve,An)=>c.nativeCallback(v,Te.toString(),ve,An);if(he)return(de=he[Te])===null||de===void 0?void 0:de.bind(he)}else{if(he)return(re=he[Te])===null||re===void 0?void 0:re.bind(he);throw new Ci(`"${v}" plugin is not implemented on ${w}`,gr.Unimplemented)}},ot=he=>{let Te,de=(...re)=>{let Je=y().then(ve=>{let An=Ke(ve,he);if(An){let Ye=An(...re);return Te=Ye?.remove,Ye}else throw new Ci(`"${v}.${he}()" is not implemented on ${w}`,gr.Unimplemented)});return he==="addListener"&&(Je.remove=async()=>Te()),Je};return de.toString=()=>`${he.toString()}() { [capacitor code] }`,Object.defineProperty(de,"name",{value:he,writable:!1,configurable:!1}),de},Ni=ot("addListener"),yt=ot("removeListener"),Bt=(he,Te)=>{let de=Ni({eventName:he},Te),re=async()=>{let ve=await de;yt({eventName:he,callbackId:ve},Te)},Je=new Promise(ve=>de.then(()=>ve({remove:re})));return Je.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await re()},Je},qt=new Proxy({},{get(he,Te){switch(Te){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return E?Bt:Ni;case"removeListener":return yt;default:return ot(Te)}}});return u[v]=qt,K.set(v,{name:v,proxy:qt,platforms:new Set([...Object.keys(g),...E?[w]:[]])}),qt},j=((s=h?.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||J;return c.convertFileSrc||(c.convertFileSrc=v=>v),c.getPlatform=m,c.handleError=U,c.isNativePlatform=A,c.isPluginAvailable=k,c.pluginMethodNoop=M,c.registerPlugin=j,c.Exception=Ci,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},Ww=n=>n.Capacitor=Kw(n),_r=Ww(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Mo=_r.registerPlugin,IT=_r.Plugins,yr=class{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);let s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);let a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){let i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new _r.Exception(e,gr.Unimplemented)}unavailable(e="not available"){return new _r.Exception(e,gr.Unavailable)}async removeListener(e,t){let r=this.listeners[e];if(!r)return;let i=r.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}},Im=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Em=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),Cl=class extends yr{async getCookies(){let e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Em(i).trim(),s=Em(s).trim(),t[i]=s}),t}async setCookie(e){try{let t=Im(e.key),r=Im(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${i}; path=${s}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{let e=document.cookie.split(";")||[];for(let t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}},ET=Mo("CapacitorCookies",{web:()=>new Cl}),Hw=async n=>new Promise((e,t)=>{let r=new FileReader;r.onload=()=>{let i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>t(i),r.readAsDataURL(n)}),Qw=(n={})=>{let e=Object.keys(n);return Object.keys(n).map(i=>i.toLocaleLowerCase()).reduce((i,s,a)=>(i[s]=n[e[a]],i),{})},Jw=(n,e=!0)=>n?Object.entries(n).reduce((r,i)=>{let[s,a]=i,c,u;return Array.isArray(a)?(u="",a.forEach(h=>{c=e?encodeURIComponent(h):h,u+=`${s}=${c}&`}),u.slice(0,-1)):(c=e?encodeURIComponent(a):a,u=`${s}=${c}`),`${r}&${u}`},"").substr(1):null,Yw=(n,e={})=>{let t=Object.assign({method:n.method||"GET",headers:n.headers},e),i=Qw(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(i.includes("application/x-www-form-urlencoded")){let s=new URLSearchParams;for(let[a,c]of Object.entries(n.data||{}))s.set(a,c);t.body=s.toString()}else if(i.includes("multipart/form-data")||n.data instanceof FormData){let s=new FormData;if(n.data instanceof FormData)n.data.forEach((c,u)=>{s.append(u,c)});else for(let c of Object.keys(n.data))s.append(c,n.data[c]);t.body=s;let a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t},Dl=class extends yr{async request(e){let t=Yw(e,e.webFetchExtra),r=Jw(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,t),a=s.headers.get("content-type")||"",{responseType:c="text"}=s.ok?e:{};a.includes("application/json")&&(c="json");let u,h;switch(c){case"arraybuffer":case"blob":h=await s.blob(),u=await Hw(h);break;case"json":u=await s.json();break;case"document":case"text":default:u=await s.text()}let f={};return s.headers.forEach((m,I)=>{f[I]=m}),{data:u,headers:f,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}},TT=Mo("CapacitorHttp",{web:()=>new Dl})});var Am={};sg(Am,{LocalNotificationsWeb:()=>Nl});var Nl,Sm=Oh(()=>{Fo();Nl=class extends yr{constructor(){super(...arguments),this.pending=[],this.deliveredNotifications=[],this.hasNotificationSupport=()=>{if(!("Notification"in window)||!Notification.requestPermission)return!1;if(Notification.permission!=="granted")try{new Notification("")}catch(e){if(e.name=="TypeError")return!1}return!0}}async getDeliveredNotifications(){let e=[];for(let t of this.deliveredNotifications){let r={title:t.title,id:parseInt(t.tag),body:t.body};e.push(r)}return{notifications:e}}async removeDeliveredNotifications(e){for(let t of e.notifications){let r=this.deliveredNotifications.find(i=>i.tag===String(t.id));r?.close(),this.deliveredNotifications=this.deliveredNotifications.filter(()=>!r)}}async removeAllDeliveredNotifications(){for(let e of this.deliveredNotifications)e.close();this.deliveredNotifications=[]}async createChannel(){throw this.unimplemented("Not implemented on web.")}async deleteChannel(){throw this.unimplemented("Not implemented on web.")}async listChannels(){throw this.unimplemented("Not implemented on web.")}async schedule(e){if(!this.hasNotificationSupport())throw this.unavailable("Notifications not supported in this browser.");for(let t of e.notifications)this.sendNotification(t);return{notifications:e.notifications.map(t=>({id:t.id}))}}async getPending(){return{notifications:this.pending}}async registerActionTypes(){throw this.unimplemented("Not implemented on web.")}async cancel(e){this.pending=this.pending.filter(t=>!e.notifications.find(r=>r.id===t.id))}async areEnabled(){let{display:e}=await this.checkPermissions();return{value:e==="granted"}}async changeExactNotificationSetting(){throw this.unimplemented("Not implemented on web.")}async checkExactNotificationSetting(){throw this.unimplemented("Not implemented on web.")}async requestPermissions(){if(!this.hasNotificationSupport())throw this.unavailable("Notifications not supported in this browser.");return{display:this.transformNotificationPermission(await Notification.requestPermission())}}async checkPermissions(){if(!this.hasNotificationSupport())throw this.unavailable("Notifications not supported in this browser.");return{display:this.transformNotificationPermission(Notification.permission)}}transformNotificationPermission(e){switch(e){case"granted":return"granted";case"denied":return"denied";default:return"prompt"}}sendPending(){var e;let t=[],r=new Date().getTime();for(let i of this.pending)!((e=i.schedule)===null||e===void 0)&&e.at&&i.schedule.at.getTime()<=r&&(this.buildNotification(i),t.push(i));this.pending=this.pending.filter(i=>!t.find(s=>s===i))}sendNotification(e){var t;if(!((t=e.schedule)===null||t===void 0)&&t.at){let r=e.schedule.at.getTime()-new Date().getTime();this.pending.push(e),setTimeout(()=>{this.sendPending()},r);return}this.buildNotification(e)}buildNotification(e){let t=new Notification(e.title,{body:e.body,tag:String(e.id)});return t.addEventListener("click",this.onClick.bind(this,e),!1),t.addEventListener("show",this.onShow.bind(this,e),!1),t.addEventListener("close",()=>{this.deliveredNotifications=this.deliveredNotifications.filter(()=>!this)},!1),this.deliveredNotifications.push(t),t}onClick(e){let t={actionId:"tap",notification:e};this.notifyListeners("localNotificationActionPerformed",t)}onShow(e){this.notifyListeners("localNotificationReceived",e)}}});var Vh=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},og=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4,I=(c&15)<<2|h>>6,A=h&63;u||(A=64,a||(I=64)),r.push(t[f],t[m],t[I],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):og(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let h=i<n.length?t[n.charAt(i)]:64;++i;let m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new la;let I=s<<2|c>>4;if(r.push(I),h!==64){let A=c<<4&240|h>>2;if(r.push(A),m!==64){let N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},la=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},ag=function(n){let e=Vh(n);return Lh.encodeByteArray(e,!0)},da=function(n){return ag(n).replace(/\./g,"")},fa=function(n){try{return Lh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function cg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var ug=()=>cg().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&fa(n[1]);return e&&JSON.parse(e)},pa=()=>{try{return ug()||lg()||hg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}};var Mh=()=>{var n;return(n=pa())===null||n===void 0?void 0:n.config},Fh=n=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${n}`]};var Qi=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function dg(){var n;let e=(n=pa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zh(){let n=fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ma(){return!dg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ji(){try{return typeof indexedDB=="object"}catch{return!1}}function Gh(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var fg="FirebaseError",Ue=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ut.prototype.create)}},ut=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?pg(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ue(i,c,r)}};function pg(n,e){return n.replace(mg,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var mg=/\{\$([^}]+)}/g;function Et(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(xh(s)&&xh(a)){if(!Et(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function xh(n){return n!==null&&typeof n=="object"}function Yi(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Nn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $h(n,e){let t=new ha(n,e);return t.subscribe.bind(t)}var ha=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function gg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ua(){}var eI=4*60*60*1e3;function pe(n){return n&&n._delegate?n._delegate:n}var je=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Kt="[DEFAULT]";var ga=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Qi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yg(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_g(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function _g(n){return n===Kt?void 0:n}function yg(n){return n.instantiationMode==="EAGER"}var Xi=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ga(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var vg=[],H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));var wg={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Ig=H.INFO,Eg={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Tg=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Eg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Tt=class{constructor(e){this.name=e,this._logLevel=Ig,this._logHandler=Tg,this._userLogHandler=null,vg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}};var bg=(n,e)=>e.some(t=>n instanceof t),Kh,Wh;function Ag(){return Kh||(Kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sg(){return Wh||(Wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Hh=new WeakMap,ya=new WeakMap,Qh=new WeakMap,_a=new WeakMap,wa=new WeakMap;function Pg(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Xe(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Hh.set(t,n)}).catch(()=>{}),wa.set(e,n),e}function Rg(n){if(ya.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ya.set(n,e)}var va={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ya.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jh(n){va=n(va)}function Cg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Zi(this),e,...t);return Qh.set(r,e.sort?e.sort():[e]),Xe(r)}:Sg().includes(n)?function(...e){return n.apply(Zi(this),e),Xe(Hh.get(this))}:function(...e){return Xe(n.apply(Zi(this),e))}}function Dg(n){return typeof n=="function"?Cg(n):(n instanceof IDBTransaction&&Rg(n),bg(n,Ag())?new Proxy(n,va):n)}function Xe(n){if(n instanceof IDBRequest)return Pg(n);if(_a.has(n))return _a.get(n);let e=Dg(n);return e!==n&&(_a.set(n,e),wa.set(e,n)),e}var Zi=n=>wa.get(n);function Xh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),c=Xe(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Xe(a.result),u.oldVersion,u.newVersion,Xe(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}var Ng=["get","getKey","getAll","getAllKeys","count"],kg=["put","add","delete","clear"],Ia=new Map;function Yh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ia.get(e))return Ia.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=kg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ng.includes(t)))return;let s=async function(a,...c){let u=this.transaction(a,i?"readwrite":"readonly"),h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return Ia.set(e,s),s}Jh(n=>({...n,get:(e,t,r)=>Yh(e,t)||n.get(e,t,r),has:(e,t)=>!!Yh(e,t)||n.has(e,t)}));var Ta=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Og(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Og(n){let e=n.getComponent();return e?.type==="VERSION"}var ba="@firebase/app",Zh="0.10.13";var lt=new Tt("@firebase/app"),xg="@firebase/app-compat",Vg="@firebase/analytics-compat",Lg="@firebase/analytics",Mg="@firebase/app-check-compat",Fg="@firebase/app-check",Ug="@firebase/auth",Bg="@firebase/auth-compat",qg="@firebase/database",jg="@firebase/data-connect",zg="@firebase/database-compat",Gg="@firebase/functions",$g="@firebase/functions-compat",Kg="@firebase/installations",Wg="@firebase/installations-compat",Hg="@firebase/messaging",Qg="@firebase/messaging-compat",Jg="@firebase/performance",Yg="@firebase/performance-compat",Xg="@firebase/remote-config",Zg="@firebase/remote-config-compat",e_="@firebase/storage",t_="@firebase/storage-compat",n_="@firebase/firestore",r_="@firebase/vertexai-preview",i_="@firebase/firestore-compat",s_="firebase",o_="10.14.1";var a_="[DEFAULT]",c_={[ba]:"fire-core",[xg]:"fire-core-compat",[Lg]:"fire-analytics",[Vg]:"fire-analytics-compat",[Fg]:"fire-app-check",[Mg]:"fire-app-check-compat",[Ug]:"fire-auth",[Bg]:"fire-auth-compat",[qg]:"fire-rtdb",[jg]:"fire-data-connect",[zg]:"fire-rtdb-compat",[Gg]:"fire-fn",[$g]:"fire-fn-compat",[Kg]:"fire-iid",[Wg]:"fire-iid-compat",[Hg]:"fire-fcm",[Qg]:"fire-fcm-compat",[Jg]:"fire-perf",[Yg]:"fire-perf-compat",[Xg]:"fire-rc",[Zg]:"fire-rc-compat",[e_]:"fire-gcs",[t_]:"fire-gcs-compat",[n_]:"fire-fst",[i_]:"fire-fst-compat",[r_]:"fire-vertex","fire-js":"fire-js",[s_]:"fire-js-all"};var Aa=new Map,u_=new Map,Sa=new Map;function ed(n,e){try{n.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bt(n){let e=n.name;if(Sa.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;Sa.set(e,n);for(let t of Aa.values())ed(t,n);for(let t of u_.values())ed(t,n);return!0}function es(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ht(n){return n.settings!==void 0}var l_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new ut("app","Firebase",l_);var Pa=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}};var kn=o_;function id(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:a_,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(t||(t=Mh()),!t)throw Wt.create("no-options");let s=Aa.get(i);if(s){if(Et(t,s.options)&&Et(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}let a=new Xi(i);for(let u of Sa.values())a.addComponent(u);let c=new Pa(t,r,a);return Aa.set(i,c),c}function He(n,e,t){var r;let i=(r=c_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(c.join(" "));return}bt(new je(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var h_="firebase-heartbeat-database",d_=1,xr="firebase-heartbeat-store",Ea=null;function sd(){return Ea||(Ea=Xh(h_,d_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Ea}async function f_(n){try{let t=(await sd()).transaction(xr),r=await t.objectStore(xr).get(od(n));return await t.done,r}catch(e){if(e instanceof Ue)lt.warn(e.message);else{let t=Wt.create("idb-get",{originalErrorMessage:e?.message});lt.warn(t.message)}}}async function td(n,e){try{let r=(await sd()).transaction(xr,"readwrite");await r.objectStore(xr).put(e,od(n)),await r.done}catch(t){if(t instanceof Ue)lt.warn(t.message);else{let r=Wt.create("idb-set",{originalErrorMessage:t?.message});lt.warn(r.message)}}}function od(n){return`${n.name}!${n.options.appId}`}var p_=1024,m_=30*24*60*60*1e3,Ra=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Ca(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let c=new Date(a.date).valueOf();return Date.now()-c<=m_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=nd(),{heartbeatsToSend:r,unsentEntries:i}=g_(this._heartbeatsCache.heartbeats),s=da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return lt.warn(t),""}}};function nd(){return new Date().toISOString().substring(0,10)}function g_(n,e=p_){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),rd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Ca=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ji()?Gh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await f_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return td(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return td(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function rd(n){return da(JSON.stringify({version:2,heartbeats:n})).length}function __(n){bt(new je("platform-logger",e=>new Ta(e),"PRIVATE")),bt(new je("heartbeat",e=>new Ra(e),"PRIVATE")),He(ba,Zh,n),He(ba,Zh,"esm2017"),He("fire-js","")}__("");var y_="firebase",v_="10.14.1";He(y_,v_,"app");var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cd={};var At,Da;(function(){var n;function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,E,b){for(var y=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)y[Ke-2]=arguments[Ke];return g.prototype[E].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)w[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;16>E;++E)w[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],E=v.g[2];var b=v.g[3],y=g+(b^_&(E^b))+w[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+w[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+w[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+w[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+w[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+w[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+w[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+w[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+w[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+w[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+w[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+w[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+w[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+w[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+w[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+w[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^b&(_^E))+w[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+w[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+w[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+w[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+w[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+w[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+w[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+w[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+w[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+w[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+w[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+w[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+w[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+w[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+w[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+w[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^b)+w[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+w[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+w[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+w[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+w[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+w[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+w[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+w[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+w[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+w[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+w[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+w[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+w[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+w[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+w[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+w[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~b))+w[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+w[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+w[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+w[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+w[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+w[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+w[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+w[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+w[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+w[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+w[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+w[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+w[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+w[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+w[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,w=this.B,E=this.h,b=0;b<g;){if(E==0)for(;b<=_;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<g;)if(w[E++]=v.charCodeAt(b++),E==this.blockSize){i(this,w),E=0;break}}else for(;b<g;)if(w[E++]=v[b++],E==this.blockSize){i(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)v[_++]=this.g[g]>>>w&255;return v};function s(v,g){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function a(v,g){this.h=g;for(var _=[],w=!0,E=v.length-1;0<=E;E--){var b=v[E]|0;w&&b==g||(_[E]=b,w=!1)}this.g=_}var c={};function u(v){return-128<=v&&128>v?s(v,function(g){return new a([g|0],0>g?-1:0)}):new a([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return C(h(-v));for(var g=[],_=1,w=0;v>=_;w++)g[w]=v/_|0,_*=4294967296;return new a(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return C(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),w=m,E=0;E<v.length;E+=8){var b=Math.min(8,v.length-E),y=parseInt(v.substring(E,E+b),g);8>b?(b=h(Math.pow(g,b)),w=w.j(b).add(h(y))):(w=w.j(_),w=w.add(h(y)))}return w}var m=u(0),I=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(k(this))return-C(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(k(this))return"-"+C(this).toString(v);for(var g=h(Math.pow(v,6)),_=this,w="";;){var E=K(_,g).g;_=q(_,E.j(g));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,N(_))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=q(this,v),k(v)?-1:N(v)?0:1};function C(v){for(var g=v.g.length,_=[],w=0;w<g;w++)_[w]=~v.g[w];return new a(_,~v.h).add(I)}n.abs=function(){return k(this)?C(this):this},n.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0,E=0;E<=g;E++){var b=w+(this.i(E)&65535)+(v.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);w=y>>>16,b&=65535,y&=65535,_[E]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(v,g){return v.add(C(g))}n.j=function(v){if(N(this)||N(v))return m;if(k(this))return k(v)?C(this).j(C(v)):C(C(this).j(v));if(k(v))return C(this.j(C(v)));if(0>this.l(A)&&0>v.l(A))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<v.g.length;E++){var b=this.i(w)>>>16,y=this.i(w)&65535,Ke=v.i(E)>>>16,ot=v.i(E)&65535;_[2*w+2*E]+=y*ot,U(_,2*w+2*E),_[2*w+2*E+1]+=b*ot,U(_,2*w+2*E+1),_[2*w+2*E+1]+=y*Ke,U(_,2*w+2*E+1),_[2*w+2*E+2]+=b*Ke,U(_,2*w+2*E+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new a(_,0)};function U(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function M(v,g){this.g=v,this.h=g}function K(v,g){if(N(g))throw Error("division by zero");if(N(v))return new M(m,m);if(k(v))return g=K(C(v),g),new M(C(g.g),C(g.h));if(k(g))return g=K(v,C(g)),new M(C(g.g),g.h);if(30<v.g.length){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var _=I,w=g;0>=w.l(v);)_=J(_),w=J(w);var E=j(_,1),b=j(w,1);for(w=j(w,2),_=j(_,2);!N(w);){var y=b.add(w);0>=y.l(v)&&(E=E.add(_),b=y),w=j(w,1),_=j(_,1)}return g=q(v,E.j(g)),new M(E,g)}for(E=m;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=h(_),y=b.j(g);k(y)||0<y.l(v);)_-=w,b=h(_),y=b.j(g);N(b)&&(b=I),E=E.add(b),v=q(v,y)}return new M(E,v)}n.A=function(v){return K(this,v).h},n.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&v.i(w);return new a(_,this.h&v.h)},n.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|v.i(w);return new a(_,this.h|v.h)},n.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^v.i(w);return new a(_,this.h^v.h)};function J(v){for(var g=v.g.length+1,_=[],w=0;w<g;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new a(_,v.h)}function j(v,g){var _=g>>5;g%=32;for(var w=v.g.length-_,E=[],b=0;b<w;b++)E[b]=0<g?v.i(b+_)>>>g|v.i(b+_+1)<<32-g:v.i(b+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Da=cd.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,At=cd.Integer=a}).apply(typeof ad<"u"?ad:typeof self<"u"?self:typeof window<"u"?window:{});var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dt={};var Na,w_,On,ka,Vr,ns,Oa,xa,Va;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ts=="object"&&ts];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in d))break e;d=d[T]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,p=!1,T={next:function(){if(!p&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),o.apply(l,T)}}return function(){return o.apply(l,arguments)}}function I(o,l,d){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,I.apply(null,arguments)}function A(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,T,P){for(var O=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)O[ee-2]=arguments[ee];return l.prototype[T].apply(p,O)}}function k(o){let l=o.length;if(0<l){let d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function C(o,l){for(let d=1;d<arguments.length;d++){let p=arguments[d];if(u(p)){let T=o.length||0,P=p.length||0;o.length=T+P;for(let O=0;O<P;O++)o[T+O]=p[O]}else o.push(p)}}class q{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var J=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function j(o,l,d){for(let p in o)l.call(d,o[p],p,o)}function v(o,l){for(let d in o)l.call(void 0,o[d],d,o)}function g(o){let l={};for(let d in o)l[d]=o[d];return l}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,l){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)o[d]=p[d];for(let P=0;P<_.length;P++)d=_[P],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function E(o){var l=1;o=o.split(":");let d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function y(){var o=qt;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ke{constructor(){this.h=this.g=null}add(l,d){let p=ot.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ot=new q(()=>new Ni,o=>o.reset());class Ni{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,Bt=!1,qt=new Ke,he=()=>{let o=c.Promise.resolve(void 0);yt=()=>{o.then(Te)}};var Te=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var l=ot;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Bt=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var Je=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function ve(o,l){if(re.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(J){e:{try{K(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:An[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ve.aa.h.call(this)}}N(ve,re);var An={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ye="closure_listenable_"+(1e6*Math.random()|0),Rm=0;function Cm(o,l,d,p,T){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=T,this.key=++Rm,this.da=this.fa=!1}function ki(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Oi(o){this.src=o,this.g={},this.h=0}Oi.prototype.add=function(o,l,d,p,T){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var O=Bo(o,l,p,T);return-1<O?(l=o[O],d||(l.fa=!1)):(l=new Cm(l,this.src,P,!!p,T),l.fa=d,o.push(l)),l};function Uo(o,l){var d=l.type;if(d in o.g){var p=o.g[d],T=Array.prototype.indexOf.call(p,l,void 0),P;(P=0<=T)&&Array.prototype.splice.call(p,T,1),P&&(ki(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Bo(o,l,d,p){for(var T=0;T<o.length;++T){var P=o[T];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==p)return T}return-1}var qo="closure_lm_"+(1e6*Math.random()|0),jo={};function Ol(o,l,d,p,T){if(p&&p.once)return Vl(o,l,d,p,T);if(Array.isArray(l)){for(var P=0;P<l.length;P++)Ol(o,l[P],d,p,T);return null}return d=Ko(d),o&&o[Ye]?o.K(l,d,h(p)?!!p.capture:!!p,T):xl(o,l,d,!1,p,T)}function xl(o,l,d,p,T,P){if(!l)throw Error("Invalid event type");var O=h(T)?!!T.capture:!!T,ee=Go(o);if(ee||(o[qo]=ee=new Oi(o)),d=ee.add(l,d,p,O,P),d.proxy)return d;if(p=Dm(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Je||(T=O),T===void 0&&(T=!1),o.addEventListener(l.toString(),p,T);else if(o.attachEvent)o.attachEvent(Ml(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Dm(){function o(d){return l.call(o.src,o.listener,d)}let l=Nm;return o}function Vl(o,l,d,p,T){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Vl(o,l[P],d,p,T);return null}return d=Ko(d),o&&o[Ye]?o.L(l,d,h(p)?!!p.capture:!!p,T):xl(o,l,d,!0,p,T)}function Ll(o,l,d,p,T){if(Array.isArray(l))for(var P=0;P<l.length;P++)Ll(o,l[P],d,p,T);else p=h(p)?!!p.capture:!!p,d=Ko(d),o&&o[Ye]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=Bo(P,d,p,T),-1<d&&(ki(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Go(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Bo(l,d,p,T)),(d=-1<o?l[o]:null)&&zo(d))}function zo(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Ye])Uo(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(Ml(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Go(l))?(Uo(d,o),d.h==0&&(d.src=null,l[qo]=null)):ki(o)}}}function Ml(o){return o in jo?jo[o]:jo[o]="on"+o}function Nm(o,l){if(o.da)o=!0;else{l=new ve(l,this);var d=o.listener,p=o.ha||o.src;o.fa&&zo(o),o=d.call(p,l)}return o}function Go(o){return o=o[qo],o instanceof Oi?o:null}var $o="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(o){return typeof o=="function"?o:(o[$o]||(o[$o]=function(l){return o.handleEvent(l)}),o[$o])}function be(){de.call(this),this.i=new Oi(this),this.M=this,this.F=null}N(be,de),be.prototype[Ye]=!0,be.prototype.removeEventListener=function(o,l,d,p){Ll(this,o,l,d,p)};function Re(o,l){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new re(l,o);else if(l instanceof re)l.target=l.target||o;else{var T=l;l=new re(p,o),w(l,T)}if(T=!0,d)for(var P=d.length-1;0<=P;P--){var O=l.g=d[P];T=xi(O,p,!0,l)&&T}if(O=l.g=o,T=xi(O,p,!0,l)&&T,T=xi(O,p,!1,l)&&T,d)for(P=0;P<d.length;P++)O=l.g=d[P],T=xi(O,p,!1,l)&&T}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],p=0;p<d.length;p++)ki(d[p]);delete o.g[l],o.h--}}this.F=null},be.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},be.prototype.L=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function xi(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,P=0;P<l.length;++P){var O=l[P];if(O&&!O.da&&O.capture==d){var ee=O.listener,we=O.ha||O.src;O.fa&&Uo(o.i,O),T=ee.call(we,p)!==!1&&T}}return T&&!p.defaultPrevented}function Fl(o,l,d){if(typeof o=="function")d&&(o=I(o,d));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Ul(o){o.g=Fl(()=>{o.g=null,o.i&&(o.i=!1,Ul(o))},o.l);let l=o.h;o.h=null,o.m.apply(null,l)}class km extends de{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ul(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wr(o){de.call(this),this.h=o,this.g={}}N(wr,de);var Bl=[];function ql(o){j(o.g,function(l,d){this.g.hasOwnProperty(d)&&zo(l)},o),o.g={}}wr.prototype.N=function(){wr.aa.N.call(this),ql(this)},wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wo=c.JSON.stringify,Om=c.JSON.parse,xm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ho(){}Ho.prototype.h=null;function jl(o){return o.h||(o.h=o.i())}function zl(){}var Ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qo(){re.call(this,"d")}N(Qo,re);function Jo(){re.call(this,"c")}N(Jo,re);var jt={},Gl=null;function Vi(){return Gl=Gl||new be}jt.La="serverreachability";function $l(o){re.call(this,jt.La,o)}N($l,re);function Er(o){let l=Vi();Re(l,new $l(l))}jt.STAT_EVENT="statevent";function Kl(o,l){re.call(this,jt.STAT_EVENT,o),this.stat=l}N(Kl,re);function Ce(o){let l=Vi();Re(l,new Kl(l,o))}jt.Ma="timingevent";function Wl(o,l){re.call(this,jt.Ma,o),this.size=l}N(Wl,re);function Tr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function br(){this.g=!0}br.prototype.xa=function(){this.g=!1};function Vm(o,l,d,p,T,P){o.info(function(){if(o.g)if(P)for(var O="",ee=P.split("&"),we=0;we<ee.length;we++){var X=ee[we].split("=");if(1<X.length){var Ae=X[0];X=X[1];var Se=Ae.split("_");O=2<=Se.length&&Se[1]=="type"?O+(Ae+"="+X+"&"):O+(Ae+"=redacted&")}}else O=null;else O=P;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+l+`
`+d+`
`+O})}function Lm(o,l,d,p,T,P,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+l+`
`+d+`
`+P+" "+O})}function Sn(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Fm(o,d)+(p?" "+p:"")})}function Mm(o,l){o.info(function(){return"TIMEOUT: "+l})}br.prototype.info=function(){};function Fm(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var P=T[0];if(P!="noop"&&P!="stop"&&P!="close")for(var O=1;O<T.length;O++)T[O]=""}}}}return Wo(d)}catch{return l}}var Li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yo;function Mi(){}N(Mi,Ho),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Yo=new Mi;function vt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.R=p||1,this.U=new wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ql}function Ql(){this.i=null,this.g="",this.h=!1}var Jl={},Xo={};function Zo(o,l,d){o.L=1,o.v=qi(at(l)),o.m=d,o.P=!0,Yl(o,null)}function Yl(o,l){o.F=Date.now(),Fi(o),o.A=at(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),hh(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Ql,o.g=Ch(o.j,d?l:null,!o.m),0<o.O&&(o.M=new km(I(o.Y,o,o.g),o.O)),l=o.U,d=o.g,p=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(Bl[0]=T.toString()),T=Bl);for(var P=0;P<T.length;P++){var O=Ol(d,T[P],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Er(),Vm(o.i,o.u,o.A,o.l,o.R,o.m)}vt.prototype.ca=function(o){o=o.target;let l=this.M;l&&ct(o)==3?l.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{let Se=ct(this.g);var l=this.g.Ba();let Cn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||yh(this.g)))){this.J||Se!=4||l==7||(l==8||0>=Cn?Er(3):Er(2)),ea(this);var d=this.g.Z();this.X=d;t:if(Xl(this)){var p=yh(this.g);o="";var T=p.length,P=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),Ar(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(P&&l==T-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Lm(this.i,this.u,this.A,this.l,this.R,Se,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,we=this.g;if((ee=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(ee)){var X=ee;break t}}X=null}if(d=X)Sn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,d);else{this.o=!1,this.s=3,Ce(12),zt(this),Ar(this);break e}}if(this.P){d=!0;let We;for(;!this.J&&this.C<O.length;)if(We=Um(this,O),We==Xo){Se==4&&(this.s=4,Ce(14),d=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==Jl){this.s=4,Ce(15),Sn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Sn(this.i,this.l,We,null),ta(this,We);if(Xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||O.length!=0||this.h.h||(this.s=1,Ce(16),d=!1),this.o=this.o&&d,!d)Sn(this.i,this.l,O,"[Invalid Chunked Response]"),zt(this),Ar(this);else if(0<O.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),aa(Ae),Ae.M=!0,Ce(11))}}else Sn(this.i,this.l,O,null),ta(this,O);Se==4&&zt(this),this.o&&!this.J&&(Se==4?Ah(this.j,this):(this.o=!1,Fi(this)))}else ng(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),zt(this),Ar(this)}}}catch{}finally{}};function Xl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Um(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?Xo:(d=Number(l.substring(d,p)),isNaN(d)?Jl:(p+=1,p+d>l.length?Xo:(l=l.slice(p,p+d),o.C=p+d,l)))}vt.prototype.cancel=function(){this.J=!0,zt(this)};function Fi(o){o.S=Date.now()+o.I,Zl(o,o.I)}function Zl(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Tr(I(o.ba,o),l)}function ea(o){o.B&&(c.clearTimeout(o.B),o.B=null)}vt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Mm(this.i,this.A),this.L!=2&&(Er(),Ce(17)),zt(this),this.s=2,Ar(this)):Zl(this,this.S-o)};function Ar(o){o.j.G==0||o.J||Ah(o.j,o)}function zt(o){ea(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ql(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ta(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||na(d.h,o))){if(!o.K&&na(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ki(d),Gi(d);else break e;oa(d),Ce(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=Tr(I(d.Za,d),6e3));if(1>=nh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else $t(d,11)}else if((o.K||d.g==o)&&Ki(d),!U(l))for(T=d.Da.g.parse(l),l=0;l<T.length;l++){let X=T[l];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];let Ae=X[3];Ae!=null&&(d.la=Ae,d.j.info("VER="+d.la));let Se=X[4];Se!=null&&(d.Aa=Se,d.j.info("SVER="+d.Aa));let Cn=X[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(p=1.5*Cn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;let We=o.g;if(We){let Hi=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var P=p.h;P.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ra(P,P.h),P.h=null))}if(p.D){let ca=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;ca&&(p.ya=ca,ie(p.I,p.D,ca))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=o;if(p.qa=Rh(p,p.J?p.ia:null,p.W),O.K){rh(p.h,O);var ee=O,we=p.L;we&&(ee.I=we),ee.B&&(ea(ee),Fi(ee)),p.g=O}else Th(p);0<d.i.length&&$i(d)}else X[0]!="stop"&&X[0]!="close"||$t(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?$t(d,7):sa(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}Er(4)}catch{}}var Bm=class{constructor(o,l){this.g=o,this.map=l}};function eh(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function th(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nh(o){return o.h?1:o.g?o.g.size:0}function na(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ra(o,l){o.g?o.g.add(l):o.h=l}function rh(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}eh.prototype.cancel=function(){if(this.i=ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function ih(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(let d of o.g.values())l=l.concat(d.D);return l}return k(o.i)}function qm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,p=0;p<d;p++)l.push(o[p]);return l}l=[],d=0;for(p in o)l[d++]=o[p];return l}function jm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(let p in o)l[d++]=p;return l}}}function sh(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=jm(o),p=qm(o),T=p.length,P=0;P<T;P++)l.call(void 0,p[P],d&&d[P],o)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zm(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),T=null;if(0<=p){var P=o[d].substring(0,p);T=o[d].substring(p+1)}else P=o[d];l(P,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Gt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Gt){this.h=o.h,Ui(this,o.j),this.o=o.o,this.g=o.g,Bi(this,o.s),this.l=o.l;var l=o.i,d=new Rr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),ah(this,d),this.m=o.m}else o&&(l=String(o).match(oh))?(this.h=!1,Ui(this,l[1]||"",!0),this.o=Sr(l[2]||""),this.g=Sr(l[3]||"",!0),Bi(this,l[4]),this.l=Sr(l[5]||"",!0),ah(this,l[6]||"",!0),this.m=Sr(l[7]||"")):(this.h=!1,this.i=new Rr(null,this.h))}Gt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Pr(l,ch,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Pr(l,ch,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Pr(d,d.charAt(0)=="/"?Km:$m,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Pr(d,Hm)),o.join("")};function at(o){return new Gt(o)}function Ui(o,l,d){o.j=d?Sr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Bi(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ah(o,l,d){l instanceof Rr?(o.i=l,Qm(o.i,o.h)):(d||(l=Pr(l,Wm)),o.i=new Rr(l,o.h))}function ie(o,l,d){o.i.set(l,d)}function qi(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Sr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Pr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Gm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Gm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ch=/[#\/\?@]/g,$m=/[#\?:]/g,Km=/[#\?]/g,Wm=/[#\?@]/g,Hm=/#/g;function Rr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function wt(o){o.g||(o.g=new Map,o.h=0,o.i&&zm(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Rr.prototype,n.add=function(o,l){wt(this),this.i=null,o=Pn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function uh(o,l){wt(o),l=Pn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function lh(o,l){return wt(o),l=Pn(o,l),o.g.has(l)}n.forEach=function(o,l){wt(this),this.g.forEach(function(d,p){d.forEach(function(T){o.call(l,T,p,this)},this)},this)},n.na=function(){wt(this);let o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){let T=o[p];for(let P=0;P<T.length;P++)d.push(l[p])}return d},n.V=function(o){wt(this);let l=[];if(typeof o=="string")lh(this,o)&&(l=l.concat(this.g.get(Pn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return wt(this),this.i=null,o=Pn(this,o),lh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function hh(o,l,d){uh(o,l),0<d.length&&(o.i=null,o.g.set(Pn(o,l),k(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];let P=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var T=P;O[p]!==""&&(T+="="+encodeURIComponent(String(O[p]))),o.push(T)}}return this.i=o.join("&")};function Pn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Qm(o,l){l&&!o.j&&(wt(o),o.i=null,o.g.forEach(function(d,p){var T=p.toLowerCase();p!=T&&(uh(this,p),hh(this,T,d))},o)),o.j=l}function Jm(o,l){let d=new br;if(c.Image){let p=new Image;p.onload=A(It,d,"TestLoadImage: loaded",!0,l,p),p.onerror=A(It,d,"TestLoadImage: error",!1,l,p),p.onabort=A(It,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(It,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Ym(o,l){let d=new br,p=new AbortController,T=setTimeout(()=>{p.abort(),It(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(T),P.ok?It(d,"TestPingServer: ok",!0,l):It(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),It(d,"TestPingServer: error",!1,l)})}function It(o,l,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function Xm(){this.g=new xm}function Zm(o,l,d){let p=d||"";try{sh(o,function(T,P){let O=T;h(T)&&(O=Wo(T)),l.push(p+P+"="+encodeURIComponent(O))})}catch(T){throw l.push(p+"type="+encodeURIComponent("_badmap")),T}}function Cr(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Cr,Ho),Cr.prototype.g=function(){return new ji(this.l,this.j)},Cr.prototype.i=function(o){return function(){return o}}({});function ji(o,l){be.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ji,be),n=ji.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Nr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function dh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Dr(this):Nr(this),this.readyState==3&&dh(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Dr(this))},n.Qa=function(o){this.g&&(this.response=o,Dr(this))},n.ga=function(){this.g&&Dr(this)};function Dr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Nr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Nr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function fh(o){let l="";return j(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function ia(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=fh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,l,d))}function ae(o){be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ae,be);var eg=/^https?$/i,tg=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yo.g(),this.v=this.o?jl(this.o):jl(Yo),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){ph(this,P);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),T=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(tg,l,void 0))||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[P,O]of d)this.g.setRequestHeader(P,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_h(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){ph(this,P)}};function ph(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,mh(o),zi(o)}function mh(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Re(this,"complete"),Re(this,"abort"),zi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?gh(this):this.bb())},n.bb=function(){gh(this)};function gh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ct(o)!=4||o.Z()!=2)){if(o.u&&ct(o)==4)Fl(o.Ea,0,o);else if(Re(o,"readystatechange"),ct(o)==4){o.h=!1;try{let O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var T=String(o.D).match(oh)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!eg.test(T?T.toLowerCase():"")}d=p}if(d)Re(o,"complete"),Re(o,"success");else{o.m=6;try{var P=2<ct(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",mh(o)}}finally{zi(o)}}}}function zi(o,l){if(o.g){_h(o);let d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Re(o,"ready");try{d.onreadystatechange=p}catch{}}}function _h(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ct(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Om(l)}};function yh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ng(o){let l={};o=(o.g&&2<=ct(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(U(o[p]))continue;var d=E(o[p]);let T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();let P=l[T]||[];l[T]=P,P.push(d)}v(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function vh(o){this.Aa=0,this.i=[],this.j=new br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kr("baseRetryDelayMs",5e3,o),this.cb=kr("retryDelaySeedMs",1e4,o),this.Wa=kr("forwardChannelMaxRetries",2,o),this.wa=kr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new eh(o&&o.concurrentRequestLimit),this.Da=new Xm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vh.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,p){Ce(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Rh(this,null,this.W),$i(this)};function sa(o){if(wh(o),o.G==3){var l=o.U++,d=at(o.I);if(ie(d,"SID",o.K),ie(d,"RID",l),ie(d,"TYPE","terminate"),Or(o,d),l=new vt(o,o.j,l),l.L=2,l.v=qi(at(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Ch(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Fi(l)}Ph(o)}function Gi(o){o.g&&(aa(o),o.g.cancel(),o.g=null)}function wh(o){Gi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function $i(o){if(!th(o.h)&&!o.s){o.s=!0;var l=o.Ga;yt||he(),Bt||(yt(),Bt=!0),qt.add(l,o),o.B=0}}function rg(o,l){return nh(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Tr(I(o.Ga,o,l),Sh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let T=new vt(this,this.j,o),P=this.o;if(this.S&&(P?(P=g(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(T.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Eh(this,T,l),d=at(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),Or(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(fh(P)))+"&"+l:this.m&&ia(d,this.m,P)),ra(this.h,T),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",l),ie(d,"SID","null"),T.T=!0,Zo(T,d,null)):Zo(T,d,l),this.G=2}}else this.G==3&&(o?Ih(this,o):this.i.length==0||th(this.h)||Ih(this))};function Ih(o,l){var d;l?d=l.l:d=o.U++;let p=at(o.I);ie(p,"SID",o.K),ie(p,"RID",d),ie(p,"AID",o.T),Or(o,p),o.m&&o.o&&ia(p,o.m,o.o),d=new vt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Eh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ra(o.h,d),Zo(d,p,l)}function Or(o,l){o.H&&j(o.H,function(d,p){ie(l,p,d)}),o.l&&sh({},function(d,p){ie(l,p,d)})}function Eh(o,l,d){d=Math.min(o.i.length,d);var p=o.l?I(o.l.Na,o.l,o):null;e:{var T=o.i;let P=-1;for(;;){let O=["count="+d];P==-1?0<d?(P=T[0].g,O.push("ofs="+P)):P=0:O.push("ofs="+P);let ee=!0;for(let we=0;we<d;we++){let X=T[we].g,Ae=T[we].map;if(X-=P,0>X)P=Math.max(0,T[we].g-100),ee=!1;else try{Zm(Ae,O,"req"+X+"_")}catch{p&&p(Ae)}}if(ee){p=O.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,p}function Th(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;yt||he(),Bt||(yt(),Bt=!0),qt.add(l,o),o.v=0}}function oa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Tr(I(o.Fa,o),Sh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,bh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Tr(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),Gi(this),bh(this))};function aa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function bh(o){o.g=new vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=at(o.qa);ie(l,"RID","rpc"),ie(l,"SID",o.K),ie(l,"AID",o.T),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(l,"TO",o.ja),ie(l,"TYPE","xmlhttp"),Or(o,l),o.m&&o.o&&ia(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=qi(at(l)),d.m=null,d.P=!0,Yl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Gi(this),oa(this),Ce(19))};function Ki(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ah(o,l){var d=null;if(o.g==l){Ki(o),aa(o),o.g=null;var p=2}else if(na(o.h,l))d=l.D,rh(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var T=o.B;p=Vi(),Re(p,new Wl(p,d)),$i(o)}else Th(o);else if(T=l.s,T==3||T==0&&0<l.X||!(p==1&&rg(o,l)||p==2&&oa(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),T){case 1:$t(o,5);break;case 4:$t(o,10);break;case 3:$t(o,6);break;default:$t(o,2)}}}function Sh(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function $t(o,l){if(o.j.info("Error code "+l),l==2){var d=I(o.fb,o),p=o.Xa;let T=!p;p=new Gt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ui(p,"https"),qi(p),T?Jm(p.toString(),d):Ym(p.toString(),d)}else Ce(2);o.G=0,o.l&&o.l.sa(l),Ph(o),wh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function Ph(o){if(o.G=0,o.ka=[],o.l){let l=ih(o.h);(l.length!=0||o.i.length!=0)&&(C(o.ka,l),C(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Rh(o,l,d){var p=d instanceof Gt?at(d):new Gt(d);if(p.g!="")l&&(p.g=l+"."+p.g),Bi(p,p.s);else{var T=c.location;p=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var P=new Gt(null);p&&Ui(P,p),l&&(P.g=l),T&&Bi(P,T),d&&(P.l=d),p=P}return d=o.D,l=o.ya,d&&l&&ie(p,d,l),ie(p,"VER",o.la),Or(o,p),p}function Ch(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ae(new Cr({eb:d})):new ae(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dh(){}n=Dh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wi(){}Wi.prototype.g=function(o,l){return new Fe(o,l)};function Fe(o,l){be.call(this),this.g=new vh(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!U(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Rn(this)}N(Fe,be),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){sa(this.g)},Fe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Wo(o),o=d);l.i.push(new Bm(l.Ya++,o)),l.G==3&&$i(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,sa(this.g),delete this.g,Fe.aa.N.call(this)};function Nh(o){Qo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(let d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}N(Nh,Qo);function kh(){Jo.call(this),this.status=1}N(kh,Jo);function Rn(o){this.g=o}N(Rn,Dh),Rn.prototype.ua=function(){Re(this.g,"a")},Rn.prototype.ta=function(o){Re(this.g,new Nh(o))},Rn.prototype.sa=function(o){Re(this.g,new kh)},Rn.prototype.ra=function(){Re(this.g,"b")},Wi.prototype.createWebChannel=Wi.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,Va=dt.createWebChannelTransport=function(){return new Wi},xa=dt.getStatEventTarget=function(){return Vi()},Oa=dt.Event=jt,ns=dt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Li.NO_ERROR=0,Li.TIMEOUT=8,Li.HTTP_ERROR=6,Vr=dt.ErrorCode=Li,Hl.COMPLETE="complete",ka=dt.EventType=Hl,zl.EventType=Ir,Ir.OPEN="a",Ir.CLOSE="b",Ir.ERROR="c",Ir.MESSAGE="d",be.prototype.listen=be.prototype.K,On=dt.WebChannel=zl,w_=dt.FetchXmlHttpFactory=Cr,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,Na=dt.XhrIo=ae}).apply(typeof ts<"u"?ts:typeof self<"u"?self:typeof window<"u"?window:{});var ud="@firebase/firestore";var Ie=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");var lr="10.14.0";var sn=new Tt("@firebase/firestore");function Fn(){return sn.logLevel}function D(n,...e){if(sn.logLevel<=H.DEBUG){let t=e.map(Nu);sn.debug(`Firestore (${lr}): ${n}`,...t)}}function De(n,...e){if(sn.logLevel<=H.ERROR){let t=e.map(Nu);sn.error(`Firestore (${lr}): ${n}`,...t)}}function Kr(n,...e){if(sn.logLevel<=H.WARN){let t=e.map(Nu);sn.warn(`Firestore (${lr}): ${n}`,...t)}}function Nu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function L(n="Unexpected state"){let e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+n;throw De(e),new Error(e)}function F(n,e){n||L()}function G(n,e){return n}var R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends Ue{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var tt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Ba=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},qa=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}};var ja=class{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){F(this.o===void 0);let r=this.i,i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve(),s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){let u=this.t.getImmediate({optional:!0});u?c(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new Ba(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new Ie(e)}},za=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},Ga=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new za(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}},$a=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Ka=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){F(this.o===void 0);let r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.R=t.token,new $a(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function E_(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var ds=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=E_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function $(n,e){return n<e?-1:n>e?1:0}function Wn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function hf(n){return n+"\0"}var ce=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var B=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new ce(0,0))}static max(){return new n(new ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var fs=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&L(),r===void 0?r=e.length-t:r>e.length-t&&L(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},te=class n extends fs{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},T_=/^[_a-zA-Z][_a-zA-Z0-9]*$/,me=class n extends fs{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return T_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var x=class n{constructor(e){this.path=e}static fromPath(e){return new n(te.fromString(e))}static fromName(e){return new n(te.fromString(e).popFirst(5))}static empty(){return new n(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new te(e.slice()))}};var Hn=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};function Wa(n){return n.fields.find(e=>e.kind===2)}function Qt(n){return n.fields.filter(e=>e.kind!==2)}Hn.UNKNOWN_ID=-1;var Gn=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var Wr=class n{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new n(0,$e.min())}};function b_(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new $e(i,x.empty(),e)}function df(n){return new $e(n.readTime,n.key,-1)}var $e=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(B.min(),x.empty(),-1)}static max(){return new n(B.max(),x.empty(),-1)}};function ku(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}var ff="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ps=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function fn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==ff)throw n;D("LocalStore","Unexpectedly lost primary lease")}var S=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),c=0;for(let u=0;u<s;u++){let h=u;t(e[h]).next(f=>{a[h]=f,++c,c===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};var ms=class n{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new nn(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{let i=Ou(r.target.error);this.V.reject(new nn(e,i))}}static open(e,t,r,i){try{return new n(t,e.transaction(i,r))}catch(s){throw new nn(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(D("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new Qa(t)}},Qn=class n{constructor(e,t,r){this.name=e,this.version=t,this.p=r,n.S(fe())===12.2&&De("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return D("SimpleDb","Removing database:",e),Jt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ji())return!1;if(n.v())return!0;let e=fe(),t=n.S(e),r=0<t&&t<10,i=pf(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let a=s.target.result;t(a)},i.onblocked=()=>{r(new nn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let a=s.target.error;a.name==="VersionError"?r(new V(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?r(new V(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):r(new nn(e,a))},i.onupgradeneeded=s=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let a=s.target.result;this.p.O(a,i.transaction,s.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){let s=t==="readonly",a=0;for(;;){++a;try{this.db=await this.M(e);let c=ms.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),S.reject(h))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){let u=c,h=u.name!=="FirebaseError"&&a<3;if(D("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}};function pf(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var Ha=class{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Jt(this.B.delete())}},nn=class extends V{constructor(e,t){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function Ft(n){return n.name==="IndexedDbTransactionError"}var Qa=class{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(D("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Jt(r)}add(e){return D("SimpleDb","ADD",this.store.name,e,e),Jt(this.store.add(e))}get(e){return Jt(this.store.get(e)).next(t=>(t===void 0&&(t=null),D("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return D("SimpleDb","DELETE",this.store.name,e),Jt(this.store.delete(e))}count(){return D("SimpleDb","COUNT",this.store.name),Jt(this.store.count())}U(e,t){let r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(r.range);return new S((a,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{a(u.target.result)}})}{let s=this.cursor(r),a=[];return this.W(s,(c,u)=>{a.push(u)}).next(()=>a)}}G(e,t){let r=this.store.getAll(e,t===null?void 0:t);return new S((i,s)=>{r.onerror=a=>{s(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}j(e,t){D("SimpleDb","DELETE ALL",this.store.name);let r=this.options(e,t);r.H=!1;let i=this.cursor(r);return this.W(i,(s,a,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);let i=this.cursor(r);return this.W(i,t)}Y(e){let t=this.cursor({});return new S((r,i)=>{t.onerror=s=>{let a=Ou(s.target.error);i(a)},t.onsuccess=s=>{let a=s.target.result;a?e(a.primaryKey,a.value).next(c=>{c?a.continue():r()}):r()}})}W(e,t){let r=[];return new S((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{let c=a.target.result;if(!c)return void i();let u=new Ha(c),h=t(c.primaryKey,c.value,u);if(h instanceof S){let f=h.catch(m=>(u.done(),S.reject(m)));r.push(f)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>S.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function Jt(n){return new S((e,t)=>{n.onsuccess=r=>{let i=r.target.result;e(i)},n.onerror=r=>{let i=Ou(r.target.error);t(i)}})}var ld=!1;function Ou(n){let e=Qn.S(fe());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){let r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ld||(ld=!0,setTimeout(()=>{throw r},0)),r}}return n}var Ja=class{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){D("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{D("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Ft(t)?D("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await fn(t)}await this.X(6e4)})}},Ya=class{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){let r=new Set,i=t,s=!0;return S.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!r.has(a))return D("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,i).next(c=>{i-=c,r.add(a)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{let a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(i,s)).next(c=>(D("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>a.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{let a=df(s);ku(a,r)>0&&(r=a)}),new $e(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}};var Ve=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Ve.oe=-1;function oo(n){return n==null}function Hr(n){return n===0&&1/n==-1/0}function A_(n){return typeof n=="number"&&Number.isInteger(n)&&!Hr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function ke(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hd(e)),e=S_(n.get(t),e);return hd(e)}function S_(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function hd(n){return n+""}function Ze(n){let e=n.length;if(F(e>=2),e===2)return F(n.charAt(0)===""&&n.charAt(1)===""),te.emptyPath();let t=e-2,r=[],i="";for(let s=0;s<e;){let a=n.indexOf("",s);switch((a<0||a>t)&&L(),n.charAt(a+1)){case"":let c=n.substring(s,a),u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,a),i+="\0";break;case"":i+=n.substring(s,a+1);break;default:L()}s=a+2}return new te(r)}var dd=["userId","batchId"];function as(n,e){return[n,ke(e)]}function mf(n,e,t){return[n,ke(e),t]}var P_={},R_=["prefixPath","collectionGroup","readTime","documentId"],C_=["prefixPath","collectionGroup","documentId"],D_=["collectionGroup","readTime","prefixPath","documentId"],N_=["canonicalId","targetId"],k_=["targetId","path"],O_=["path","targetId"],x_=["collectionId","parent"],V_=["indexId","uid"],L_=["uid","sequenceNumber"],M_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],F_=["indexId","uid","orderedDocumentKey"],U_=["userId","collectionPath","documentId"],B_=["userId","collectionPath","largestBatchId"],q_=["userId","collectionGroup","largestBatchId"],gf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],j_=[...gf,"documentOverlays"],_f=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yf=_f,xu=[...yf,"indexConfiguration","indexState","indexEntries"],z_=xu,G_=[...xu,"globals"];var Qr=class extends ps{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}};function _e(n,e){let t=G(n);return Qn.F(t._e,e)}function fd(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vf(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var oe=class n{constructor(e,t){this.comparator=e,this.root=t||nt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zn(this.root,e,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zn(this.root,e,this.comparator,!0)}},zn=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},nt=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();let e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}};nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,r,i,s){return this}insert(e,t,r){return new nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ne=class n{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gs(this.data.getIterator())}getIteratorFrom(e){return new gs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},gs=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function xn(n){return n.hasNext()?n.getNext():void 0}var Be=class n{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new n([])}unionWith(e){let t=new ne(me.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var _s=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var ge=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _s("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};ge.EMPTY_BYTE_STRING=new ge("");var $_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(n){if(F(!!n),typeof n=="string"){let e=0,t=$_.exec(n);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:se(n.seconds),nanos:se(n.nanos)}}function se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Nt(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}function Vu(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Lu(n){let e=n.mapValue.fields.__previous_value__;return Vu(e)?Lu(e):e}function Jr(n){let e=mt(n.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}var Xa=class{constructor(e,t,r,i,s,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}},Jn=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Ct={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},cs={nullValue:"NULL_VALUE"};function on(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vu(n)?4:wf(n)?9007199254740991:ao(n)?10:11:L()}function rt(n,e){if(n===e)return!0;let t=on(n);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jr(n).isEqual(Jr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=mt(i.timestampValue),c=mt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Nt(i.bytesValue).isEqual(Nt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return se(i.geoPointValue.latitude)===se(s.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return se(i.integerValue)===se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=se(i.doubleValue),c=se(s.doubleValue);return a===c?Hr(a)===Hr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Wn(n.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(fd(a)!==fd(c))return!1;for(let u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!rt(a[u],c[u])))return!1;return!0}(n,e);default:return L()}}function Yr(n,e){return(n.values||[]).find(t=>rt(t,e))!==void 0}function kt(n,e){if(n===e)return 0;let t=on(n),r=on(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(s,a){let c=se(s.integerValue||s.doubleValue),u=se(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return pd(n.timestampValue,e.timestampValue);case 4:return pd(Jr(n),Jr(e));case 5:return $(n.stringValue,e.stringValue);case 6:return function(s,a){let c=Nt(s),u=Nt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let c=s.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){let f=$(c[h],u[h]);if(f!==0)return f}return $(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let c=$(se(s.latitude),se(a.latitude));return c!==0?c:$(se(s.longitude),se(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return md(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,u,h,f;let m=s.fields||{},I=a.fields||{},A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,N=(u=I.value)===null||u===void 0?void 0:u.arrayValue,k=$(((h=A?.values)===null||h===void 0?void 0:h.length)||0,((f=N?.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:md(A,N)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ct.mapValue&&a===Ct.mapValue)return 0;if(s===Ct.mapValue)return 1;if(a===Ct.mapValue)return-1;let c=s.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){let I=$(u[m],f[m]);if(I!==0)return I;let A=kt(c[u[m]],h[f[m]]);if(A!==0)return A}return $(u.length,f.length)}(n.mapValue,e.mapValue);default:throw L()}}function pd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);let t=mt(n),r=mt(e),i=$(t.seconds,r.seconds);return i!==0?i:$(t.nanos,r.nanos)}function md(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=kt(t[i],r[i]);if(s)return s}return $(t.length,r.length)}function Yn(n){return Za(n)}function Za(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=mt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Nt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return x.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=Za(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${Za(t.fields[a])}`;return i+"}"}(n.mapValue):L()}function Mu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ec(n){return!!n&&"integerValue"in n}function Xr(n){return!!n&&"arrayValue"in n}function gd(n){return!!n&&"nullValue"in n}function _d(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function us(n){return!!n&&"mapValue"in n}function ao(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jr(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function wf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var If={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function K_(n){return"nullValue"in n?cs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Mu(Jn.empty(),x.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?ao(n)?If:{mapValue:{}}:L()}function W_(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Mu(Jn.empty(),x.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?If:"mapValue"in n?ao(n)?{mapValue:{}}:Ct:L()}function yd(n,e){let t=kt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function vd(n,e){let t=kt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}var Ne=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!us(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(t)}setAll(e){let t=me.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=jr(a):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());us(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];us(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){pn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(jr(this.value))}};function Ef(n){let e=[];return pn(n.fields,(t,r)=>{let i=new me([t]);if(us(r)){let s=Ef(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new Be(e)}var Ee=class n{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,B.min(),B.min(),B.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,B.min(),B.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,B.min(),B.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Ot=class{constructor(e,t){this.position=e,this.inclusive=t}};function wd(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=kt(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Id(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rt(n.position[t],e.position[t]))return!1;return!0}var Xn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function H_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var ys=class{},Q=class n extends ys{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new rc(e,t,r):t==="array-contains"?new oc(e,r):t==="in"?new vs(e,r):t==="not-in"?new ac(e,r):t==="array-contains-any"?new cc(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ic(e,r):new sc(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(kt(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(kt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Z=class n extends ys{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Zn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Zn(n){return n.op==="and"}function tc(n){return n.op==="or"}function Fu(n){return Tf(n)&&Zn(n)}function Tf(n){for(let e of n.filters)if(e instanceof Z)return!1;return!0}function nc(n){if(n instanceof Q)return n.field.canonicalString()+n.op.toString()+Yn(n.value);if(Fu(n))return n.filters.map(e=>nc(e)).join(",");{let e=n.filters.map(t=>nc(t)).join(",");return`${n.op}(${e})`}}function bf(n,e){return n instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&rt(r.value,i.value)}(n,e):n instanceof Z?function(r,i){return i instanceof Z&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&bf(a,i.filters[c]),!0):!1}(n,e):void L()}function Af(n,e){let t=n.filters.concat(e);return Z.create(t,n.op)}function Sf(n){return n instanceof Q?function(t){return`${t.field.canonicalString()} ${t.op} ${Yn(t.value)}`}(n):n instanceof Z?function(t){return t.op.toString()+" {"+t.getFilters().map(Sf).join(" ,")+"}"}(n):"Filter"}var rc=class extends Q{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){let t=x.comparator(e.key,this.key);return this.matchesComparison(t)}},ic=class extends Q{constructor(e,t){super(e,"in",t),this.keys=Pf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},sc=class extends Q{constructor(e,t){super(e,"not-in",t),this.keys=Pf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Pf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}var oc=class extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Xr(t)&&Yr(t.arrayValue,this.value)}},vs=class extends Q{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Yr(this.value.arrayValue,t)}},ac=class extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Yr(this.value.arrayValue,t)}},cc=class extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Xr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Yr(this.value.arrayValue,r))}};var uc=class{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}};function lc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new uc(n,e,t,r,i,s,a)}function an(n){let e=G(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>nc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Yn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Yn(r)).join(",")),e.ue=t}return e.ue}function ui(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!H_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Id(n.startAt,e.startAt)&&Id(n.endAt,e.endAt)}function ws(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Is(n,e){return n.filters.filter(t=>t instanceof Q&&t.field.isEqual(e))}function Ed(n,e,t){let r=cs,i=!0;for(let s of Is(n,e)){let a=cs,c=!0;switch(s.op){case"<":case"<=":a=K_(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,c=!1;break;case"!=":case"not-in":a=cs}yd({value:r,inclusive:i},{value:a,inclusive:c})<0&&(r=a,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let a=t.position[s];yd({value:r,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(r=a,i=t.inclusive);break}}return{value:r,inclusive:i}}function Td(n,e,t){let r=Ct,i=!0;for(let s of Is(n,e)){let a=Ct,c=!0;switch(s.op){case">=":case">":a=W_(s.value),c=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,c=!1;break;case"!=":case"not-in":a=Ct}vd({value:r,inclusive:i},{value:a,inclusive:c})>0&&(r=a,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let a=t.position[s];vd({value:r,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(r=a,i=t.inclusive);break}}return{value:r,inclusive:i}}var er=class{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function Q_(n,e,t,r,i,s,a,c){return new er(n,e,t,r,i,s,a,c)}function co(n){return new er(n)}function bd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function J_(n){return n.collectionGroup!==null}function zr(n){let e=G(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ne(me.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Xn(s,r))}),t.has(me.keyField().canonicalString())||e.ce.push(new Xn(me.keyField(),r))}return e.ce}function Ge(n){let e=G(n);return e.le||(e.le=Y_(e,zr(n))),e.le}function Y_(n,e){if(n.limitType==="F")return lc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Xn(i.field,s)});let t=n.endAt?new Ot(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ot(n.startAt.position,n.startAt.inclusive):null;return lc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hc(n,e,t){return new er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function uo(n,e){return ui(Ge(n),Ge(e))&&n.limitType===e.limitType}function Rf(n){return`${an(Ge(n))}|lt:${n.limitType}`}function Un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Sf(i)).join(", ")}]`),oo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Yn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Yn(i)).join(",")),`Target(${r})`}(Ge(n))}; limitType=${n.limitType})`}function li(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):x.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of zr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){let h=wd(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,zr(r),i)||r.endAt&&!function(a,c,u){let h=wd(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,zr(r),i))}(n,e)}function X_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cf(n){return(e,t)=>{let r=!1;for(let i of zr(n)){let s=Z_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Z_(n,e,t){let r=n.field.isKeyField()?x.comparator(e.key,t.key):function(s,a,c){let u=a.data.field(s),h=c.data.field(s);return u!==null&&h!==null?kt(u,h):L()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}var it=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return vf(this.inner)}size(){return this.innerSize}};var ey=new oe(x.comparator);function qe(){return ey}var Df=new oe(x.comparator);function Br(...n){let e=Df;for(let t of n)e=e.insert(t.key,t);return e}function Nf(n){let e=Df;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function et(){return Gr()}function kf(){return Gr()}function Gr(){return new it(n=>n.toString(),(n,e)=>n.isEqual(e))}var ty=new oe(x.comparator),ny=new ne(x.comparator);function W(...n){let e=ny;for(let t of n)e=e.add(t);return e}var ry=new ne($);function iy(){return ry}function Uu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hr(e)?"-0":e}}function Of(n){return{integerValue:""+n}}function sy(n,e){return A_(e)?Of(e):Uu(n,e)}var tr=class{constructor(){this._=void 0}};function oy(n,e,t){return n instanceof cn?function(i,s){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vu(s)&&(s=Lu(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof xt?Vf(n,e):n instanceof Vt?Lf(n,e):function(i,s){let a=xf(i,s),c=Ad(a)+Ad(i.Pe);return ec(a)&&ec(i.Pe)?Of(c):Uu(i.serializer,c)}(n,e)}function ay(n,e,t){return n instanceof xt?Vf(n,e):n instanceof Vt?Lf(n,e):t}function xf(n,e){return n instanceof un?function(r){return ec(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var cn=class extends tr{},xt=class extends tr{constructor(e){super(),this.elements=e}};function Vf(n,e){let t=Mf(e);for(let r of n.elements)t.some(i=>rt(i,r))||t.push(r);return{arrayValue:{values:t}}}var Vt=class extends tr{constructor(e){super(),this.elements=e}};function Lf(n,e){let t=Mf(e);for(let r of n.elements)t=t.filter(i=>!rt(i,r));return{arrayValue:{values:t}}}var un=class extends tr{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function Ad(n){return se(n.integerValue||n.doubleValue)}function Mf(n){return Xr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var dc=class{constructor(e,t){this.field=e,this.transform=t}};function cy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof xt&&i instanceof xt||r instanceof Vt&&i instanceof Vt?Wn(r.elements,i.elements,rt):r instanceof un&&i instanceof un?rt(r.Pe,i.Pe):r instanceof cn&&i instanceof cn}(n.transform,e.transform)}var fc=class{constructor(e,t){this.version=e,this.transformResults=t}},Le=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function ls(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var nr=class{};function Ff(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rr(n.key,Le.none()):new Lt(n.key,n.data,Le.none());{let t=n.data,r=Ne.empty(),i=new ne(me.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Qe(n.key,r,new Be(i.toArray()),Le.none())}}function uy(n,e,t){n instanceof Lt?function(i,s,a){let c=i.value.clone(),u=Pd(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Qe?function(i,s,a){if(!ls(i.precondition,s))return void s.convertToUnknownDocument(a.version);let c=Pd(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Uf(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function $r(n,e,t,r){return n instanceof Lt?function(s,a,c,u){if(!ls(s.precondition,a))return c;let h=s.value.clone(),f=Rd(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qe?function(s,a,c,u){if(!ls(s.precondition,a))return c;let h=Rd(s.fieldTransforms,u,a),f=a.data;return f.setAll(Uf(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,c){return ls(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function ly(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=xf(r.transform,i||null);s!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,s))}return t||null}function Sd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wn(r,i,(s,a)=>cy(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Lt=class extends nr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Qe=class extends nr{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Uf(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Pd(n,e,t){let r=new Map;F(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,ay(a,c,t[i]))}return r}function Rd(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,oy(s,a,e))}return r}var rr=class extends nr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Es=class extends nr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Zr=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&uy(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=$r(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=$r(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=kf();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;let u=Ff(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,r)=>Sd(t,r))&&Wn(this.baseMutations,e.baseMutations,(t,r)=>Sd(t,r))}},pc=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){F(e.mutations.length===r.length);let i=function(){return ty}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var ei=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var mc=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ue,Y;function hy(n){switch(n){default:return L();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Bf(n){if(n===void 0)return De("GRPC error has no .code"),R.UNKNOWN;switch(n){case ue.OK:return R.OK;case ue.CANCELLED:return R.CANCELLED;case ue.UNKNOWN:return R.UNKNOWN;case ue.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ue.INTERNAL:return R.INTERNAL;case ue.UNAVAILABLE:return R.UNAVAILABLE;case ue.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ue.NOT_FOUND:return R.NOT_FOUND;case ue.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ue.ABORTED:return R.ABORTED;case ue.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ue.DATA_LOSS:return R.DATA_LOSS;default:return L()}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";var Cd=null;function dy(){return new TextEncoder}var fy=new At([4294967295,4294967295],0);function Dd(n){let e=dy().encode(n),t=new Da;return t.update(e),new Uint8Array(t.digest())}function Nd(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new At([t,r],0),new At([i,s],0)]}var gc=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new en(`Invalid padding: ${t}`);if(r<0)throw new en(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new en(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new en(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=At.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(At.fromNumber(r)));return i.compare(fy)===1&&(i=new At([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=Dd(e),[r,i]=Nd(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;let t=Dd(e),[r,i]=Nd(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},en=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Ts=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,ti.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(B.min(),i,new oe($),qe(),W())}},ti=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,W(),W(),W())}};var $n=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},bs=class{constructor(e,t){this.targetId=e,this.me=t}},As=class{constructor(e,t,r=ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Ss=class{constructor(){this.fe=0,this.ge=Od(),this.pe=ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:L()}}),new ti(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Od()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,F(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},_c=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=qe(),this.qe=kd(),this.Qe=new oe($)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:L()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let s=i.target;if(ws(s))if(r===0){let a=new x(s.path);this.Ue(t,a,Ee.newNoDocument(a,B.min()))}else F(r===1);else{let a=this.Ye(t);if(a!==r){let c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);let h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}Cd?.et(function(f,m,I,A,N){var k,C,q,U,M,K;let J={localCacheCount:f,existenceFilterCount:m.count,databaseId:I.database,projectId:I.projectId},j=m.unchangedNames;return j&&(J.bloomFilter={applied:N===0,hashCount:(k=j?.hashCount)!==null&&k!==void 0?k:0,bitmapLength:(U=(q=(C=j?.bits)===null||C===void 0?void 0:C.bitmap)===null||q===void 0?void 0:q.length)!==null&&U!==void 0?U:0,padding:(K=(M=j?.bits)===null||M===void 0?void 0:M.padding)!==null&&K!==void 0?K:0,mightContain:v=>{var g;return(g=A?.mightContain(v))!==null&&g!==void 0&&g}}),J}(a,e.me,this.Le.tt(),c,u))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,c;try{a=Nt(r).toUint8Array()}catch(u){if(u instanceof _s)return Kr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new gc(a,i,s)}catch(u){return Kr(u instanceof en?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((s,a)=>{let c=this.Je(a);if(c){if(s.current&&ws(c.target)){let u=new x(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ee.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=W();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{let h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));let i=new Ts(e,t,this.Qe,this.ke,r);return this.ke=qe(),this.qe=kd(),this.Qe=new oe($),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ss,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ne($),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ss),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function kd(){return new oe(x.comparator)}function Od(){return new oe(x.comparator)}var py={asc:"ASCENDING",desc:"DESCENDING"},my={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gy={and:"AND",or:"OR"},yc=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function vc(n,e){return n.useProto3Json||oo(e)?e:{value:e}}function ir(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _y(n,e){return ir(n,e.toTimestamp())}function Oe(n){return F(!!n),B.fromTimestamp(function(t){let r=mt(t);return new ce(r.seconds,r.nanos)}(n))}function Bu(n,e){return wc(n,e).canonicalString()}function wc(n,e){let t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function jf(n){let e=te.fromString(n);return F(Yf(e)),e}function Ps(n,e){return Bu(n.databaseId,e.path)}function rn(n,e){let t=jf(e);if(t.get(1)!==n.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x($f(t))}function zf(n,e){return Bu(n.databaseId,e)}function Gf(n){let e=jf(n);return e.length===4?te.emptyPath():$f(e)}function Ic(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $f(n){return F(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xd(n,e,t){return{name:Ps(n,e),fields:t.value.mapValue.fields}}function yy(n,e,t){let r=rn(n,e.name),i=Oe(e.updateTime),s=e.createTime?Oe(e.createTime):B.min(),a=new Ne({mapValue:{fields:e.fields}}),c=Ee.newFoundDocument(r,i,s,a);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function vy(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(F(f===void 0||typeof f=="string"),ge.fromBase64String(f||"")):(F(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ge.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){let f=h.code===void 0?R.UNKNOWN:Bf(h.code);return new V(f,h.message||"")}(a);t=new As(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=rn(n,r.document.name),s=Oe(r.document.updateTime),a=r.document.createTime?Oe(r.document.createTime):B.min(),c=new Ne({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(i,s,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new $n(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=rn(n,r.document),s=r.readTime?Oe(r.readTime):B.min(),a=Ee.newNoDocument(i,s),c=r.removedTargetIds||[];t=new $n([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=rn(n,r.document),s=r.removedTargetIds||[];t=new $n([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new mc(i,s),c=r.targetId;t=new bs(c,a)}}return t}function Rs(n,e){let t;if(e instanceof Lt)t={update:xd(n,e.key,e.value)};else if(e instanceof rr)t={delete:Ps(n,e.key)};else if(e instanceof Qe)t={update:xd(n,e.key,e.data),updateMask:Ay(e.fieldMask)};else{if(!(e instanceof Es))return L();t={verify:Ps(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let c=a.transform;if(c instanceof cn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof xt)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vt)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof un)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw L()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_y(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(n,e.precondition)),t}function Ec(n,e){let t=e.currentDocument?function(s){return s.updateTime!==void 0?Le.updateTime(Oe(s.updateTime)):s.exists!==void 0?Le.exists(s.exists):Le.none()}(e.currentDocument):Le.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(a,c){let u=null;if("setToServerValue"in c)F(c.setToServerValue==="REQUEST_TIME"),u=new cn;else if("appendMissingElements"in c){let f=c.appendMissingElements.values||[];u=new xt(f)}else if("removeAllFromArray"in c){let f=c.removeAllFromArray.values||[];u=new Vt(f)}else"increment"in c?u=new un(a,c.increment):L();let h=me.fromServerFormat(c.fieldPath);return new dc(h,u)}(n,i)):[];if(e.update){e.update.name;let i=rn(n,e.update.name),s=new Ne({mapValue:{fields:e.update.fields}});if(e.updateMask){let a=function(u){let h=u.fieldPaths||[];return new Be(h.map(f=>me.fromServerFormat(f)))}(e.updateMask);return new Qe(i,s,a,t,r)}return new Lt(i,s,t,r)}if(e.delete){let i=rn(n,e.delete);return new rr(i,t)}if(e.verify){let i=rn(n,e.verify);return new Es(i,t)}return L()}function wy(n,e){return n&&n.length>0?(F(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Oe(i.updateTime):Oe(s);return a.isEqual(B.min())&&(a=Oe(s)),new fc(a,i.transformResults||[])}(t,e))):[]}function Kf(n,e){return{documents:[zf(n,e.path)]}}function Wf(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=zf(n,i);let s=function(h){if(h.length!==0)return Jf(Z.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(h){if(h.length!==0)return h.map(f=>function(I){return{field:Bn(I.field),direction:Ey(I.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=vc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Hf(n){let e=Gf(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){F(r===1);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){let I=Qf(m);return I instanceof Z&&Fu(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(I=>function(N){return new Xn(qn(N.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(m){let I;return I=typeof m=="object"?m.value:m,oo(I)?null:I}(t.limit));let u=null;t.startAt&&(u=function(m){let I=!!m.before,A=m.values||[];return new Ot(A,I)}(t.startAt));let h=null;return t.endAt&&(h=function(m){let I=!m.before,A=m.values||[];return new Ot(A,I)}(t.endAt)),Q_(e,i,a,s,c,"F",u,h)}function Iy(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=qn(t.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=qn(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=qn(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=qn(t.unaryFilter.field);return Q.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(t){return Q.create(qn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Z.create(t.compositeFilter.filters.map(r=>Qf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(t.compositeFilter.op))}(n):L()}function Ey(n){return py[n]}function Ty(n){return my[n]}function by(n){return gy[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function qn(n){return me.fromServerFormat(n.fieldPath)}function Jf(n){return n instanceof Q?function(t){if(t.op==="=="){if(_d(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(gd(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_d(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(gd(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:Ty(t.op),value:t.value}}}(n):n instanceof Z?function(t){let r=t.getFilters().map(i=>Jf(i));return r.length===1?r[0]:{compositeFilter:{op:by(t.op),filters:r}}}(n):L()}function Ay(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Yf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var sr=class n{constructor(e,t,r,i,s=B.min(),a=B.min(),c=ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Cs=class{constructor(e){this.ct=e}};function Sy(n,e){let t;if(e.document)t=yy(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let r=x.fromSegments(e.noDocument.path),i=hn(e.noDocument.readTime);t=Ee.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return L();{let r=x.fromSegments(e.unknownDocument.path),i=hn(e.unknownDocument.version);t=Ee.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){let s=new ce(i[0],i[1]);return B.fromTimestamp(s)}(e.readTime)),t}function Vd(n,e){let t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ds(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,a){return{name:Ps(s,a.key),fields:a.data.value.mapValue.fields,updateTime:ir(s,a.version.toTimestamp()),createTime:ir(s,a.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:ln(e.version)};else{if(!e.isUnknownDocument())return L();r.unknownDocument={path:t.path.toArray(),version:ln(e.version)}}return r}function Ds(n){let e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function ln(n){let e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function hn(n){let e=new ce(n.seconds,n.nanoseconds);return B.fromTimestamp(e)}function Yt(n,e){let t=(e.baseMutations||[]).map(s=>Ec(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){let a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){let c=e.mutations[s+1];a.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}let r=e.mutations.map(s=>Ec(n.ct,s)),i=ce.fromMillis(e.localWriteTimeMs);return new Zr(e.batchId,i,t,r)}function qr(n){let e=hn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?hn(n.lastLimboFreeSnapshotVersion):B.min(),r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return F(s.documents.length===1),Ge(co(Gf(s.documents[0])))}(n.query):function(s){return Ge(Hf(s))}(n.query),new sr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ge.fromBase64String(n.resumeToken))}function Xf(n,e){let t=ln(e.snapshotVersion),r=ln(e.lastLimboFreeSnapshotVersion),i;i=ws(e.target)?Kf(n.ct,e.target):Wf(n.ct,e.target)._t;let s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:an(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Zf(n){let e=Hf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hc(e,e.limit,"L"):e}function La(n,e){return new ei(e.largestBatchId,Ec(n.ct,e.overlayMutation))}function Ld(n,e){let t=e.path.lastSegment();return[n,ke(e.path.popLast()),t]}function Md(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:ln(r.readTime),documentKey:ke(r.documentKey.path),largestBatchId:r.largestBatchId}}var Tc=class{getBundleMetadata(e,t){return Fd(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:hn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Fd(e).put(function(i){return{bundleId:i.id,createTime:ln(Oe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ud(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Zf(s.bundledQuery),readTime:hn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Ud(e).put(function(i){return{name:i.name,readTime:ln(Oe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function Fd(n){return _e(n,"bundles")}function Ud(n){return _e(n,"namedQueries")}var Ns=class n{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){let r=t.uid||"";return new n(e,r)}getOverlay(e,t){return Lr(e).get(Ld(this.userId,t)).next(r=>r?La(this.serializer,r):null)}getOverlays(e,t){let r=et();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){let i=[];return r.forEach((s,a)=>{let c=new ei(t,a);i.push(this.ht(e,c))}),S.waitFor(i)}removeOverlaysForBatchId(e,t,r){let i=new Set;t.forEach(a=>i.add(ke(a.getCollectionPath())));let s=[];return i.forEach(a=>{let c=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,r+1],!1,!0);s.push(Lr(e).j("collectionPathOverlayIndex",c))}),S.waitFor(s)}getOverlaysForCollection(e,t,r){let i=et(),s=ke(t),a=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Lr(e).U("collectionPathOverlayIndex",a).next(c=>{for(let u of c){let h=La(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){let s=et(),a,c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Lr(e).J({index:"collectionGroupOverlayIndex",range:c},(u,h,f)=>{let m=La(this.serializer,h);s.size()<i||m.largestBatchId===a?(s.set(m.getKey(),m),a=m.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return Lr(e).put(function(i,s,a){let[c,u,h]=Ld(s,a.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Rs(i.ct,a.mutation)}}(this.serializer,this.userId,t))}};function Lr(n){return _e(n,"documentOverlays")}var bc=class{Pt(e){return _e(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{let r=t?.value;return r?ge.fromUint8Array(r):ge.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}};var ft=class{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(se(e.integerValue));else if("doubleValue"in e){let r=se(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Hr(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=mt(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Nt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?wf(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ao(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):L()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let r=e.fields||{};this.dt(t,55);for(let i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;let s=e.fields||{};this.dt(t,53);let a="value",c=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(se(c)),this.Vt(a,t),this.Tt(s[a],t)}bt(e,t){let r=e.values||[];this.dt(t,50);for(let i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),x.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}};ft.vt=new ft;function Py(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Bd(n){let e=64-function(r){let i=0;for(let s=0;s<8;++s){let a=Py(255&r[s]);if(i+=a,a!==8)break}return i}(n);return Math.ceil(e/8)}var Ac=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{let i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{let i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){let t=this.qt(e),r=Bd(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){let t=this.qt(e),r=Bd(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){let t=function(s){let a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){let t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){let t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}},Sc=class{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}},Pc=class{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}},Xt=class{constructor(){this.jt=new Ac,this.Ht=new Sc(this.jt),this.Jt=new Pc(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}};var Zt=class n{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){let e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new n(this.indexId,this.documentKey,this.arrayValue,r)}};function St(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=qd(n.arrayValue,e.arrayValue),t!==0?t:(t=qd(n.directionalValue,e.directionalValue),t!==0?t:x.comparator(n.documentKey,e.documentKey)))}function qd(n,e){for(let t=0;t<n.length&&t<e.length;++t){let r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}var ks=class{constructor(e){this.Xt=new ne((t,r)=>me.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(let t of e.filters){let r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(F(e.collectionGroup===this.collectionId),this.nn)return!1;let t=Wa(e);if(t!==void 0&&!this.sn(t))return!1;let r=Qt(e),i=new Set,s=0,a=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){let c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){let u=r[s];if(!this.on(c,u)||!this._n(this.en[a++],u))return!1}++s}for(;s<r.length;++s){let c=r[s];if(a>=this.en.length||!this._n(this.en[a++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ne(me.comparator),t=[];for(let r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Gn(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Gn(r.field,0))}for(let r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Gn(r.field,r.dir==="asc"?0:1)));return new Hn(Hn.UNKNOWN_ID,this.collectionId,t,Wr.empty())}sn(e){for(let t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function ep(n){var e,t;if(F(n instanceof Q||n instanceof Z),n instanceof Q){if(n instanceof vs){let i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Q.create(n.field,"==",s)))||[];return Z.create(i,"or")}return n}let r=n.filters.map(i=>ep(i));return Z.create(r,n.op)}function Ry(n){if(n.getFilters().length===0)return[];let e=Dc(ep(n));return F(tp(e)),Rc(e)||Cc(e)?[e]:e.getFilters()}function Rc(n){return n instanceof Q}function Cc(n){return n instanceof Z&&Fu(n)}function tp(n){return Rc(n)||Cc(n)||function(t){if(t instanceof Z&&tc(t)){for(let r of t.getFilters())if(!Rc(r)&&!Cc(r))return!1;return!0}return!1}(n)}function Dc(n){if(F(n instanceof Q||n instanceof Z),n instanceof Q)return n;if(n.filters.length===1)return Dc(n.filters[0]);let e=n.filters.map(r=>Dc(r)),t=Z.create(e,n.op);return t=Os(t),tp(t)?t:(F(t instanceof Z),F(Zn(t)),F(t.filters.length>1),t.filters.reduce((r,i)=>qu(r,i)))}function qu(n,e){let t;return F(n instanceof Q||n instanceof Z),F(e instanceof Q||e instanceof Z),t=n instanceof Q?e instanceof Q?function(i,s){return Z.create([i,s],"and")}(n,e):jd(n,e):e instanceof Q?jd(e,n):function(i,s){if(F(i.filters.length>0&&s.filters.length>0),Zn(i)&&Zn(s))return Af(i,s.getFilters());let a=tc(i)?i:s,c=tc(i)?s:i,u=a.filters.map(h=>qu(h,c));return Z.create(u,"or")}(n,e),Os(t)}function jd(n,e){if(Zn(e))return Af(e,n.getFilters());{let t=e.filters.map(r=>qu(n,r));return Z.create(t,"or")}}function Os(n){if(F(n instanceof Q||n instanceof Z),n instanceof Q)return n;let e=n.getFilters();if(e.length===1)return Os(e[0]);if(Tf(n))return n;let t=e.map(i=>Os(i)),r=[];return t.forEach(i=>{i instanceof Q?r.push(i):i instanceof Z&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Z.create(r,n.op)}var Nc=class{constructor(){this.un=new ni}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve($e.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve($e.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}},ni=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ne(te.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ne(te.comparator)).toArray()}};var rs=new Uint8Array(0),kc=class{constructor(e,t){this.databaseId=t,this.cn=new ni,this.ln=new it(r=>an(r),(r,i)=>ui(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){let r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});let s={collectionId:r,parent:ke(i)};return zd(e).put(s)}return S.resolve()}getCollectionParents(e,t){let r=[],i=IDBKeyRange.bound([t,""],[hf(t),""],!1,!0);return zd(e).U(i).next(s=>{for(let a of s){if(a.collectionId!==t)break;r.push(Ze(a.parent))}return r})}addFieldIndex(e,t){let r=Mr(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;let s=r.add(i);if(t.indexState){let a=Ln(e);return s.next(c=>{a.put(Md(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let r=Mr(e),i=Ln(e),s=Vn(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=Mr(e),r=Vn(e),i=Ln(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){let s=new ks(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){let r=Vn(e),i=!0,s=new Map;return S.forEach(this.hn(t),a=>this.Pn(e,a).next(c=>{i&&(i=!!c),s.set(a,c)})).next(()=>{if(i){let a=W(),c=[];return S.forEach(s,(u,h)=>{D("IndexedDbIndexManager",`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(K=>`${K.fieldPath}:${K.kind}`).join(",")}`}(u)} to execute ${an(t)}`);let f=function(M,K){let J=Wa(K);if(J===void 0)return null;for(let j of Is(M,J.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(h,u),m=function(M,K){let J=new Map;for(let j of Qt(K))for(let v of Is(M,j.fieldPath))switch(v.op){case"==":case"in":J.set(j.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return J.set(j.fieldPath.canonicalString(),v.value),Array.from(J.values())}return null}(h,u),I=function(M,K){let J=[],j=!0;for(let v of Qt(K)){let g=v.kind===0?Ed(M,v.fieldPath,M.startAt):Td(M,v.fieldPath,M.startAt);J.push(g.value),j&&(j=g.inclusive)}return new Ot(J,j)}(h,u),A=function(M,K){let J=[],j=!0;for(let v of Qt(K)){let g=v.kind===0?Td(M,v.fieldPath,M.endAt):Ed(M,v.fieldPath,M.endAt);J.push(g.value),j&&(j=g.inclusive)}return new Ot(J,j)}(h,u),N=this.In(u,h,I),k=this.In(u,h,A),C=this.Tn(u,h,m),q=this.En(u.indexId,f,N,I.inclusive,k,A.inclusive,C);return S.forEach(q,U=>r.G(U,t.limit).next(M=>{M.forEach(K=>{let J=x.fromSegments(K.documentKey);a.has(J)||(a=a.add(J),c.push(J))})}))}).next(()=>c)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=Ry(Z.create(e.filters,"and")).map(r=>lc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,a,c){let u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){let I=t?this.dn(t[m/h]):rs,A=this.An(e,I,r[m%h],i),N=this.Rn(e,I,s[m%h],a),k=c.map(C=>this.An(e,I,C,!0));f.push(...this.createRange(A,N,k))}return f}An(e,t,r,i){let s=new Zt(e,x.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){let s=new Zt(e,x.empty(),t,r);return i?s.Zt():s}Pn(e,t){let r=new ks(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(let c of s)r.rn(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a})}getIndexType(e,t){let r=2,i=this.hn(t);return S.forEach(i,s=>this.Pn(e,s).next(a=>{a?r!==0&&a.fields.length<function(u){let h=new ne(me.comparator),f=!1;for(let m of u.filters)for(let I of m.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?f=!0:h=h.add(I.field));for(let m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){let r=new Xt;for(let i of Qt(e)){let s=t.data.field(i.fieldPath);if(s==null)return null;let a=r.Yt(i.kind);ft.vt.It(s,a)}return r.zt()}dn(e){let t=new Xt;return ft.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){let r=new Xt;return ft.vt.It(Mu(this.databaseId,t),r.Yt(function(s){let a=Qt(s);return a.length===0?0:a[a.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new Xt);let s=0;for(let a of Qt(e)){let c=r[s++];for(let u of i)if(this.fn(t,a.fieldPath)&&Xr(c))i=this.gn(i,a,c);else{let h=u.Yt(a.kind);ft.vt.It(c,h)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){let i=[...e],s=[];for(let a of r.arrayValue.values||[])for(let c of i){let u=new Xt;u.seed(c.zt()),ft.vt.It(a,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){let r=Mr(e),i=Ln(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{let a=[];return S.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{a.push(function(f,m){let I=m?new Wr(m.sequenceNumber,new $e(hn(m.readTime),new x(Ze(m.documentKey)),m.largestBatchId)):Wr.empty(),A=f.fields.map(([N,k])=>new Gn(me.fromServerFormat(N),k));return new Hn(f.indexId,f.collectionGroup,A,I)}(c,u))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{let s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:$(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){let i=Mr(e),s=Ln(e);return this.yn(e).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,u=>s.put(Md(u.indexId,this.uid,a,r)))))}updateIndexEntries(e,t){let r=new Map;return S.forEach(t,(i,s)=>{let a=r.get(i.collectionGroup);return(a?S.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),S.forEach(c,u=>this.wn(e,i,u).next(h=>{let f=this.Sn(s,u);return h.isEqual(f)?S.resolve():this.bn(e,s,u,h,f)}))))})}Dn(e,t,r,i){return Vn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return Vn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){let i=Vn(e),s=new ne(St);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(a,c)=>{s=s.add(new Zt(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}Sn(e,t){let r=new ne(St),i=this.Vn(t,e);if(i==null)return r;let s=Wa(t);if(s!=null){let a=e.data.field(s.fieldPath);if(Xr(a))for(let c of a.arrayValue.values||[])r=r.add(new Zt(t.indexId,e.key,this.dn(c),i))}else r=r.add(new Zt(t.indexId,e.key,rs,i));return r}bn(e,t,r,i,s){D("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let a=[];return function(u,h,f,m,I){let A=u.getIterator(),N=h.getIterator(),k=xn(A),C=xn(N);for(;k||C;){let q=!1,U=!1;if(k&&C){let M=f(k,C);M<0?U=!0:M>0&&(q=!0)}else k!=null?U=!0:q=!0;q?(m(C),C=xn(N)):U?(I(k),k=xn(A)):(k=xn(A),C=xn(N))}}(i,s,St,c=>{a.push(this.Dn(e,t,r,c))},c=>{a.push(this.vn(e,t,r,c))}),S.waitFor(a)}yn(e){let t=1;return Ln(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((a,c)=>St(a,c)).filter((a,c,u)=>!c||St(a,u[c-1])!==0);let i=[];i.push(e);for(let a of r){let c=St(a,e),u=St(a,t);if(c===0)i[0]=e.Zt();else if(c>0&&u<0)i.push(a),i.push(a.Zt());else if(u>0)break}i.push(t);let s=[];for(let a=0;a<i.length;a+=2){if(this.Cn(i[a],i[a+1]))return[];let c=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,rs,[]],u=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,rs,[]];s.push(IDBKeyRange.bound(c,u))}return s}Cn(e,t){return St(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Gd)}getMinOffset(e,t){return S.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||L())).next(Gd)}};function zd(n){return _e(n,"collectionParents")}function Vn(n){return _e(n,"indexEntries")}function Mr(n){return _e(n,"indexConfiguration")}function Ln(n){return _e(n,"indexState")}function Gd(n){F(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){let i=n[r].indexState.offset;ku(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new $e(e.readTime,e.documentKey,t)}var $d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ze=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};function np(n,e,t){let r=n.store("mutations"),i=n.store("documentMutations"),s=[],a=IDBKeyRange.only(t.batchId),c=0,u=r.J({range:a},(f,m,I)=>(c++,I.delete()));s.push(u.next(()=>{F(c===1)}));let h=[];for(let f of t.mutations){let m=mf(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return S.waitFor(s).next(()=>h)}function xs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw L();e=n.noDocument}return JSON.stringify(e).length}ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(41943040,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);var Vs=class n{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){F(e.uid!=="");let s=e.isAuthenticated()?e.uid:"";return new n(s,t,r,i)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Pt(e).J({index:"userMutationsIndex",range:r},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,r,i){let s=jn(e),a=Pt(e);return a.add({}).next(c=>{F(typeof c=="number");let u=new Zr(c,t,r,i),h=function(A,N,k){let C=k.baseMutations.map(U=>Rs(A.ct,U)),q=k.mutations.map(U=>Rs(A.ct,U));return{userId:N,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:C,mutations:q}}(this.serializer,this.userId,u),f=[],m=new ne((I,A)=>$(I.canonicalString(),A.canonicalString()));for(let I of i){let A=mf(this.userId,I.key.path,c);m=m.add(I.key.path.popLast()),f.push(a.put(h)),f.push(s.put(A,P_))}return m.forEach(I=>{f.push(this.indexManager.addToCollectionParentIndex(e,I))}),e.addOnCommittedListener(()=>{this.Fn[c]=u.keys()}),S.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return Pt(e).get(t).next(r=>r?(F(r.userId===this.userId),Yt(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){let i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]),s=null;return Pt(e).J({index:"userMutationsIndex",range:i},(a,c,u)=>{c.userId===this.userId&&(F(c.batchId>=r),s=Yt(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return Pt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,a)=>{r=s.batchId,a.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Pt(e).U("userMutationsIndex",t).next(r=>r.map(i=>Yt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=as(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return jn(e).J({range:i},(a,c,u)=>{let[h,f,m]=a,I=Ze(f);if(h===this.userId&&t.path.isEqual(I))return Pt(e).get(m).next(A=>{if(!A)throw L();F(A.userId===this.userId),s.push(Yt(this.serializer,A))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ne($),i=[];return t.forEach(s=>{let a=as(this.userId,s.path),c=IDBKeyRange.lowerBound(a),u=jn(e).J({range:c},(h,f,m)=>{let[I,A,N]=h,k=Ze(A);I===this.userId&&s.path.isEqual(k)?r=r.add(N):m.done()});i.push(u)}),S.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=as(this.userId,r),a=IDBKeyRange.lowerBound(s),c=new ne($);return jn(e).J({range:a},(u,h,f)=>{let[m,I,A]=u,N=Ze(I);m===this.userId&&r.isPrefixOf(N)?N.length===i&&(c=c.add(A)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){let r=[],i=[];return t.forEach(s=>{i.push(Pt(e).get(s).next(a=>{if(a===null)throw L();F(a.userId===this.userId),r.push(Yt(this.serializer,a))}))}),S.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return np(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();let r=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return jn(e).J({range:r},(s,a,c)=>{if(s[0]===this.userId){let u=Ze(s[1]);i.push(u)}else c.done()}).next(()=>{F(i.length===0)})})}containsKey(e,t){return rp(e,this.userId,t)}Nn(e){return ip(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}};function rp(n,e,t){let r=as(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return jn(n).J({range:s,H:!0},(c,u,h)=>{let[f,m,I]=c;f===e&&m===i&&(a=!0),h.done()}).next(()=>a)}function Pt(n){return _e(n,"mutations")}function jn(n){return _e(n,"documentMutations")}function ip(n){return _e(n,"mutationQueues")}var or=class n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new n(0)}static kn(){return new n(-1)}};var Oc=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{let r=new or(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>B.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Mn(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0,s=[];return Mn(e).J((a,c)=>{let u=qr(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>S.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Mn(e).J((r,i)=>{let s=qr(i);t(s)})}qn(e){return Kd(e).get("targetGlobalKey").next(t=>(F(t!==null),t))}Qn(e,t){return Kd(e).put("targetGlobalKey",t)}Kn(e,t){return Mn(e).put(Xf(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){let r=an(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),s=null;return Mn(e).J({range:i,index:"queryTargetsIndex"},(a,c,u)=>{let h=qr(c);ui(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){let i=[],s=Rt(e);return t.forEach(a=>{let c=ke(a.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,a))}),S.waitFor(i)}removeMatchingKeys(e,t,r){let i=Rt(e);return S.forEach(t,s=>{let a=ke(s.path);return S.waitFor([i.delete([r,a]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){let r=Rt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Rt(e),s=W();return i.J({range:r,H:!0},(a,c,u)=>{let h=Ze(a[1]),f=new x(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){let r=ke(t.path),i=IDBKeyRange.bound([r],[hf(r)],!1,!0),s=0;return Rt(e).J({index:"documentTargetsIndex",H:!0,range:i},([a,c],u,h)=>{a!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return Mn(e).get(t).next(r=>r?qr(r):null)}};function Mn(n){return _e(n,"targets")}function Kd(n){return _e(n,"targetGlobal")}function Rt(n){return _e(n,"targetDocuments")}function Wd([n,e],[t,r]){let i=$(n,t);return i===0?$(e,r):i}var xc=class{constructor(e){this.Un=e,this.buffer=new ne(Wd),this.Wn=0}Gn(){return++this.Wn}zn(e){let t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Wd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Vc=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ft(t)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await fn(t)}await this.Hn(3e5)})}},Lc=class{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Ve.oe);let r=new xc(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve($d)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$d):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,a,c,u,h,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Fn()<=H.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}};function Cy(n,e){return new Lc(n,e)}var Mc=class{constructor(e,t){this.db=e,this.garbageCollector=Cy(this,t)}Yn(e){let t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return is(e,r)}removeReference(e,t,r){return is(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return is(e,t)}nr(e,t){return function(i,s){let a=!1;return ip(i).Y(c=>rp(i,c,s).next(u=>(u&&(a=!0),S.resolve(!u)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],s=0;return this.tr(e,(a,c)=>{if(c<=t){let u=this.nr(e,a).next(h=>{if(!h)return s++,r.getEntry(e,a).next(()=>(r.removeEntry(a,B.min()),Rt(e).delete(function(m){return[0,ke(m.path)]}(a))))});i.push(u)}}).next(()=>S.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return is(e,t)}tr(e,t){let r=Rt(e),i,s=Ve.oe;return r.J({index:"documentTargetsIndex"},([a,c],{path:u,sequenceNumber:h})=>{a===0?(s!==Ve.oe&&t(new x(Ze(i)),s),s=h,i=u):s=Ve.oe}).next(()=>{s!==Ve.oe&&t(new x(Ze(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function is(n,e){return Rt(n).put(function(r,i){return{targetId:0,path:ke(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}var Ls=class{constructor(){this.changes=new it(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Fc=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Ht(e).put(r)}removeEntry(e,t,r){return Ht(e).delete(function(s,a){let c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ds(a),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ee.newInvalidDocument(t);return Ht(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fr(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Ee.newInvalidDocument(t)};return Ht(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fr(t))},(i,s)=>{r={document:this.ir(t,s),size:xs(s)}}).next(()=>r)}getEntries(e,t){let r=qe();return this._r(e,t,(i,s)=>{let a=this.ir(i,s);r=r.insert(i,a)}).next(()=>r)}ar(e,t){let r=qe(),i=new oe(x.comparator);return this._r(e,t,(s,a)=>{let c=this.ir(s,a);r=r.insert(s,c),i=i.insert(s,xs(a))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return S.resolve();let i=new ne(Jd);t.forEach(u=>i=i.add(u));let s=IDBKeyRange.bound(Fr(i.first()),Fr(i.last())),a=i.getIterator(),c=a.getNext();return Ht(e).J({index:"documentKeyIndex",range:s},(u,h,f)=>{let m=x.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Jd(c,m)<0;)r(c,null),c=a.getNext();c&&c.isEqual(m)&&(r(c,h),c=a.hasNext()?a.getNext():null),c?f.$(Fr(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){let a=t.path,c=[a.popLast().toArray(),a.lastSegment(),Ds(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ht(e).U(IDBKeyRange.bound(c,u,!0)).next(h=>{s?.incrementDocumentReadCount(h.length);let f=qe();for(let m of h){let I=this.ir(x.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);I.isFoundDocument()&&(li(t,I)||i.has(I.key))&&(f=f.insert(I.key,I))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=qe(),a=Qd(t,r),c=Qd(t,$e.max());return Ht(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,c,!0)},(u,h,f)=>{let m=this.ir(x.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new Uc(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hd(e).get("remoteDocumentGlobalKey").next(t=>(F(!!t),t))}rr(e,t){return Hd(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){let r=Sy(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return Ee.newInvalidDocument(e)}};function sp(n){return new Fc(n)}var Uc=class extends Ls{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new it(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){let t=[],r=0,i=new ne((s,a)=>$(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{let c=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,c.readTime)),a.isValidDocument()){let u=Vd(this.cr.serializer,a);i=i.add(s.path.popLast());let h=xs(u);r+=h-c.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){let u=Vd(this.cr.serializer,a.convertToNoDocument(B.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,a)=>{this.lr.set(s,{size:a,readTime:r.get(s).readTime})}),r))}};function Hd(n){return _e(n,"remoteDocumentGlobal")}function Ht(n){return _e(n,"remoteDocumentsV14")}function Fr(n){let e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Qd(n,e){let t=e.documentKey.path.toArray();return[n,Ds(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Jd(n,e){let t=n.path.toArray(),r=e.path.toArray(),i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=$(t[s],r[s]),i)return i;return i=$(t.length,r.length),i||(i=$(t[t.length-2],r[r.length-2]),i||$(t[t.length-1],r[r.length-1]))}var Bc=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Ms=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&$r(r.mutation,i,Be.empty(),ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){let i=et();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Br();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=et();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=qe(),a=Gr(),c=function(){return Gr()}();return t.forEach((u,h)=>{let f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Qe)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),$r(f.mutation,h,f.mutation.getFieldMask(),ce.now())):a.set(h.key,Be.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new Bc(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Gr(),i=new oe((a,c)=>a-c),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(u=>{let h=t.get(u);if(h===null)return;let f=r.get(u)||Be.empty();f=c.applyToLocalView(h,f),r.set(u,f);let m=(i.get(c.batchId)||W()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{let a=[],c=i.getReverseIterator();for(;c.hasNext();){let u=c.getNext(),h=u.key,f=u.value,m=kf();f.forEach(I=>{if(!s.has(I)){let A=Ff(t.get(I),r.get(I));A!==null&&m.set(I,A),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):J_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):S.resolve(et()),c=-1,u=s;return a.next(h=>S.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{u=u.insert(f,I)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,W())).next(f=>({batchId:c,changes:Nf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let i=Br();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=Br();return this.indexManager.getCollectionParents(e,s).next(c=>S.forEach(c,u=>{let h=function(m,I){return new er(I,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,I)=>{a=a.insert(m,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{let f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ee.newInvalidDocument(f)))});let c=Br();return a.forEach((u,h)=>{let f=s.get(u);f!==void 0&&$r(f.mutation,h,Be.empty(),ce.now()),li(t,h)&&(c=c.insert(u,h))}),c})}};var qc=class{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Oe(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Zf(i.bundledQuery),readTime:Oe(i.readTime)}}(t)),S.resolve()}};var jc=class{constructor(){this.overlays=new oe(x.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){let r=et();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){let i=et(),s=t.length+1,a=new x(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new oe((h,f)=>h-f),a=this.overlays.getIterator();for(;a.hasNext();){let h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=et(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}let c=et(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return S.resolve(c)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ei(t,r));let s=this.Ir.get(t);s===void 0&&(s=W(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}};var zc=class{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}};var ri=class{constructor(){this.Tr=new ne(le.Er),this.dr=new ne(le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let r=new le(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new le(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){let t=new x(new te([])),r=new le(t,e),i=new le(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new x(new te([])),r=new le(t,e),i=new le(t,e+1),s=W();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new le(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},le=class{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return x.comparator(e.key,t.key)||$(e.wr,t.wr)}static Ar(e,t){return $(e.wr,t.wr)||x.comparator(e.key,t.key)}};var Gc=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ne(le.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Zr(s,t,r,i);this.mutationQueue.push(a);for(let c of i)this.br=this.br.add(new le(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.vr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new le(t,0),i=new le(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{let c=this.Dr(a.wr);s.push(c)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ne($);return t.forEach(i=>{let s=new le(i,0),a=new le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;x.isDocumentKey(s)||(s=s.child(""));let a=new le(new x(s),0),c=new ne($);return this.br.forEachWhile(u=>{let h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.wr)),!0)},a),S.resolve(this.Cr(c))}Cr(e){let t=[];return e.forEach(r=>{let i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,i=>{let s=new le(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){let r=new le(t,0),i=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var $c=class{constructor(e){this.Mr=e,this.docs=function(){return new oe(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=qe();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=qe(),a=t.path,c=new x(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){let{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ku(df(f),r)<=0||(i.has(f.key)||li(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,r,i){L()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Kc(this)}getSize(e){return S.resolve(this.size)}},Kc=class extends Ls{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}};var Wc=class{constructor(e){this.persistence=e,this.Nr=new it(t=>an(t),ui),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ri,this.targetCount=0,this.kr=or.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new or(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){let r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}};var Fs=class{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ve(0),this.Kr=!1,this.Kr=!0,this.$r=new zc,this.referenceDelegate=e(this),this.Ur=new Wc(this),this.indexManager=new Nc,this.remoteDocumentCache=function(i){return new $c(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Cs(t),this.Gr=new qc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Gc(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);let i=new Hc(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}},Hc=class extends ps{constructor(e){super(),this.currentSequenceNumber=e}},Us=class n{constructor(e){this.persistence=e,this.Jr=new ri,this.Yr=null}static Zr(e){return new n(e)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{let i=x.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}};var Qc=class{constructor(e){this.serializer=e}O(e,t,r,i){let s=new ms("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",dd,{unique:!0}),u.createObjectStore("documentMutations")}(e),Yd(e),function(u){u.createObjectStore("remoteDocuments")}(e));let a=S.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Yd(e)),a=a.next(()=>function(u){let h=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(a=a.next(()=>function(u,h){return h.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",dd,{unique:!0});let m=h.store("mutations"),I=f.map(A=>m.put(A));return S.waitFor(I)})}(e,s))),a=a.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(a=a.next(()=>this.ni(s))),r<6&&i>=6&&(a=a.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(a=a.next(()=>this.ii(s))),r<8&&i>=8&&(a=a.next(()=>this.si(e,s))),r<9&&i>=9&&(a=a.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(a=a.next(()=>this.oi(s))),r<11&&i>=11&&(a=a.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(a=a.next(()=>{(function(u){let h=u.createObjectStore("documentOverlays",{keyPath:U_});h.createIndex("collectionPathOverlayIndex",B_,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",q_,{unique:!1})})(e)})),r<13&&i>=13&&(a=a.next(()=>function(u){let h=u.createObjectStore("remoteDocumentsV14",{keyPath:R_});h.createIndex("documentKeyIndex",C_),h.createIndex("collectionGroupIndex",D_)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(a=a.next(()=>this.ai(e,s))),r<15&&i>=15&&(a=a.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:V_}).createIndex("sequenceNumberIndex",L_,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:M_}).createIndex("documentKeyIndex",F_,{unique:!1})}(e))),r<16&&i>=16&&(a=a.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(a=a.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),a}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=xs(i)}).next(()=>{let r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){let t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>S.forEach(i,s=>{let a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",a).next(c=>S.forEach(c,u=>{F(u.userId===s.userId);let h=Yt(this.serializer,u);return np(e,s.userId,h).next(()=>{})}))}))}ii(e){let t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{let s=[];return r.J((a,c)=>{let u=new te(a),h=function(m){return[0,ke(m)]}(u);s.push(t.get(h).next(f=>f?S.resolve():(m=>t.put({targetId:0,path:ke(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>S.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:x_});let r=t.store("collectionParents"),i=new ni,s=a=>{if(i.add(a)){let c=a.lastSegment(),u=a.popLast();return r.put({collectionId:c,parent:ke(u)})}};return t.store("remoteDocuments").J({H:!0},(a,c)=>{let u=new te(a);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([a,c,u],h)=>{let f=Ze(c);return s(f.popLast())}))}oi(e){let t=e.store("targets");return t.J((r,i)=>{let s=qr(i),a=Xf(this.serializer,s);return t.put(a)})}_i(e,t){let r=t.store("remoteDocuments"),i=[];return r.J((s,a)=>{let c=t.store("remoteDocumentsV14"),u=function(m){return m.document?new x(te.fromString(m.document.name).popFirst(5)):m.noDocument?x.fromSegments(m.noDocument.path):m.unknownDocument?x.fromSegments(m.unknownDocument.path):L()}(a).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(c.put(h))}).next(()=>S.waitFor(i))}ai(e,t){let r=t.store("mutations"),i=sp(this.serializer),s=new Fs(Us.Zr,this.serializer.ct);return r.U().next(a=>{let c=new Map;return a.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:W();Yt(this.serializer,u).keys().forEach(m=>f=f.add(m)),c.set(u.userId,f)}),S.forEach(c,(u,h)=>{let f=new Ie(h),m=Ns.lt(this.serializer,f),I=s.getIndexManager(f),A=Vs.lt(f,this.serializer,I,s.referenceDelegate);return new Ms(i,A,m,I).recalculateAndSaveOverlaysForDocumentKeys(new Qr(t,Ve.oe),u).next()})})}};function Yd(n){n.createObjectStore("targetDocuments",{keyPath:k_}).createIndex("documentTargetsIndex",O_,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",N_,{unique:!0}),n.createObjectStore("targetGlobal")}var Ma="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Jc=class n{constructor(e,t,r,i,s,a,c,u,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=a,this.document=c,this.ci=h,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=I=>Promise.resolve(),!n.D())throw new V(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Mc(this,i),this.Ai=t+"main",this.serializer=new Cs(u),this.Ri=new Qn(this.Ai,this.hi,new Qc(this.serializer)),this.$r=new bc,this.Ur=new Oc(this.referenceDelegate,this.serializer),this.remoteDocumentCache=sp(this.serializer),this.Gr=new Tc,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&De("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,Ma);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ve(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ss(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Ft(e))return D("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Ur(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return ss(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let r=_e(t,"clientMetadata");return r.U().next(i=>{let s=this.xi(i,18e5),a=i.filter(c=>s.indexOf(c)===-1);return S.forEach(a,c=>r.delete(c.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Vi)for(let t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):Ur(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,Ma);return!1}}return!(!this.networkEnabled||!this.inForeground)||ss(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){let s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||a&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new Qr(e,Ve.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>ss(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Vs.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new kc(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ns.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){D("IndexedDbPersistence","Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?G_:u===16?z_:u===15?xu:u===14?yf:u===13?_f:u===12?j_:u===11?gf:void L()}(this.hi),a;return this.Ri.runTransaction(e,i,s,c=>(a=new Qr(c,this.Qr?this.Qr.next():Ve.oe),t==="readwrite-primary"?this.wi(a).next(u=>!!u||this.Si(a)).next(u=>{if(!u)throw De(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new V(R.FAILED_PRECONDITION,ff);return r(a)}).next(u=>this.Di(a).next(()=>u)):this.Ki(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Ki(e){return Ur(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(R.FAILED_PRECONDITION,Ma)})}Di(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ur(e).put("owner",t)}static D(){return Qn.D()}bi(e){let t=Ur(e);return t.get("owner").next(r=>this.vi(r)?(D("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(De(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();let t=/(?:Version|Mobile)\/1[456]/;ma()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{let r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return D("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return De("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){De("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function Ur(n){return _e(n,"owner")}function ss(n){return _e(n,"clientMetadata")}function Dy(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var Yc=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=W(),i=W();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var Xc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Bs=class{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ma()?8:pf(fe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new Xc;return this.Xi(e,t,a).next(c=>{if(s.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Fn()<=H.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(Fn()<=H.DEBUG&&D("QueryEngine","Query:",Un(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fn()<=H.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):S.resolve())}Yi(e,t){if(bd(t))return S.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=hc(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=W(...s);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{let h=this.ts(t,c);return this.ns(t,h,a,u.readTime)?this.Yi(e,hc(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return bd(t)||i.isEqual(B.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(s=>{let a=this.ts(t,s);return this.ns(t,a,r,i)?S.resolve(null):(Fn()<=H.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Un(t)),this.rs(e,a,t,b_(i,-1)).next(c=>c))})}ts(e,t){let r=new ne(Cf(e));return t.forEach((i,s)=>{li(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Fn()<=H.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Un(t)),this.Ji.getDocumentsMatchingQuery(e,t,$e.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var Zc=class{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new oe($),this._s=new it(s=>an(s),ui),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ms(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}};function op(n,e,t,r){return new Zc(n,e,t,r)}async function ap(n,e){let t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],c=[],u=W();for(let h of i){a.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}for(let h of s){c.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function Ny(n,e){let t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){let m=h.batch,I=m.keys(),A=S.resolve();return I.forEach(N=>{A=A.next(()=>f.getEntry(u,N)).next(k=>{let C=h.docVersions.get(N);F(C!==null),k.version.compareTo(C)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function cp(n){let e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function ky(n,e){let t=G(n),r=e.snapshotVersion,i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;let c=[];e.targetChanges.forEach((f,m)=>{let I=i.get(m);if(!I)return;c.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let A=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(ge.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(k,C,q){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(I,A,f)&&c.push(t.Ur.updateTargetData(s,A))});let u=qe(),h=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(Oy(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(B.min())){let f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return S.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function Oy(n,e,t){let r=W(),i=W();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=qe();return t.forEach((c,u)=>{let h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):D("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function xy(n,e){let t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Vy(n,e){let t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new sr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function eu(n,e,t){let r=G(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ft(a))throw a;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Xd(n,e,t){let r=G(n),i=B.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){let m=G(u),I=m._s.get(f);return I!==void 0?S.resolve(m.os.get(I)):m.Ur.getTargetData(h,f)}(r,a,Ge(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:W())).next(c=>(Ly(r,X_(e),c),{documents:c,Ts:s})))}function Ly(n,e,t){let r=n.us.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}var qs=class{constructor(){this.activeTargetIds=iy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var js=class{constructor(){this.so=new qs,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qs,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var tu=class{_o(e){}shutdown(){}};var zs=class{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.ho)e(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var os=null;function Fa(){return os===null?os=function(){return 268435456+Math.round(2147483648*Math.random())}():os++,"0x"+os.toString(16)}var My={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var nu=class{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}};var Pe="WebChannelConnection",ru=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){let c=Fa(),u=this.xo(t,r.toUriEncodedString());D("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);let h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,u,h,i).then(f=>(D("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Kr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,c){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){let i=My[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){let s=Fa();return new Promise((a,c)=>{let u=new Na;u.setWithCredentials(!0),u.listenOnce(ka.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vr.NO_ERROR:let f=u.getResponseJson();D(Pe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Vr.TIMEOUT:D(Pe,`RPC '${e}' ${s} timed out`),c(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:let m=u.getStatus();if(D(Pe,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);let A=I?.error;if(A&&A.status&&A.message){let N=function(C){let q=C.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(q)>=0?q:R.UNKNOWN}(A.status);c(new V(N,A.message))}else c(new V(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new V(R.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D(Pe,`RPC '${e}' ${s} completed.`)}});let h=JSON.stringify(i);D(Pe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){let i=Fa(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Va(),c=xa(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;let f=s.join("");D(Pe,`Creating RPC '${e}' stream ${i}: ${f}`,u);let m=a.createWebChannel(f,u),I=!1,A=!1,N=new nu({Io:C=>{A?D(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(I||(D(Pe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),I=!0),D(Pe,`RPC '${e}' stream ${i} sending:`,C),m.send(C))},To:()=>m.close()}),k=(C,q,U)=>{C.listen(q,M=>{try{U(M)}catch(K){setTimeout(()=>{throw K},0)}})};return k(m,On.EventType.OPEN,()=>{A||(D(Pe,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),k(m,On.EventType.CLOSE,()=>{A||(A=!0,D(Pe,`RPC '${e}' stream ${i} transport closed`),N.So())}),k(m,On.EventType.ERROR,C=>{A||(A=!0,Kr(Pe,`RPC '${e}' stream ${i} transport errored:`,C),N.So(new V(R.UNAVAILABLE,"The operation could not be completed")))}),k(m,On.EventType.MESSAGE,C=>{var q;if(!A){let U=C.data[0];F(!!U);let M=U,K=M.error||((q=M[0])===null||q===void 0?void 0:q.error);if(K){D(Pe,`RPC '${e}' stream ${i} received error:`,K);let J=K.status,j=function(_){let w=ue[_];if(w!==void 0)return Bf(w)}(J),v=K.message;j===void 0&&(j=R.INTERNAL,v="Unknown error status: "+J+" with message "+K.message),A=!0,N.So(new V(j,v)),m.close()}else D(Pe,`RPC '${e}' stream ${i} received:`,U),N.bo(U)}}),k(c,Oa.STAT_EVENT,C=>{C.stat===ns.PROXY?D(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===ns.NOPROXY&&D(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}};function Fy(){return typeof window<"u"?window:null}function hs(){return typeof document<"u"?document:null}function lo(n){return new yc(n,!0)}var Gs=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}};var $s=class{constructor(e,t,r,i,s,a,c,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gs(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(De(t.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{let i=new V(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){let r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},iu=class extends $s{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=vy(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Oe(a.readTime):B.min()}(e);return this.listener.d_(t,r)}A_(e){let t={};t.database=Ic(this.serializer),t.addTarget=function(s,a){let c,u=a.target;if(c=ws(u)?{documents:Kf(s,u)}:{query:Wf(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=qf(s,a.resumeToken);let h=vc(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=ir(s,a.snapshotVersion.toTimestamp());let h=vc(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);let r=Iy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){let t={};t.database=Ic(this.serializer),t.removeTarget=e,this.a_(t)}},su=class extends $s{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return F(!!e.streamToken),this.lastStreamToken=e.streamToken,F(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();let t=wy(e.writeResults,e.commitTime),r=Oe(e.commitTime);return this.listener.g_(r,t)}p_(){let e={};e.database=Ic(this.serializer),this.a_(e)}m_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Rs(this.serializer,r))};this.a_(t)}};var ou=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,wc(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(R.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,wc(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}},au=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(De(t),this.D_=!1):D("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}};var cu=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{mn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(u){let h=G(u);h.L_.add(4),await hi(h),h.q_.set("Unknown"),h.L_.delete(4),await ho(h)}(this))})}),this.q_=new au(r,i)}};async function ho(n){if(mn(n))for(let e of n.B_)await e(!0)}async function hi(n){for(let e of n.B_)await e(!1)}function up(n,e){let t=G(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),$u(t)?Gu(t):hr(t).r_()&&zu(t,e))}function ju(n,e){let t=G(n),r=hr(t);t.N_.delete(e),r.r_()&&lp(t,e),t.N_.size===0&&(r.r_()?r.o_():mn(t)&&t.q_.set("Unknown"))}function zu(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hr(n).A_(e)}function lp(n,e){n.Q_.xe(e),hr(n).R_(e)}function Gu(n){n.Q_=new _c({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),hr(n).start(),n.q_.v_()}function $u(n){return mn(n)&&!hr(n).n_()&&n.N_.size>0}function mn(n){return G(n).L_.size===0}function hp(n){n.Q_=void 0}async function Uy(n){n.q_.set("Online")}async function By(n){n.N_.forEach((e,t)=>{zu(n,e)})}async function qy(n,e){hp(n),$u(n)?(n.q_.M_(e),Gu(n)):n.q_.set("Unknown")}async function jy(n,e,t){if(n.q_.set("Online"),e instanceof As&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ks(n,r)}else if(e instanceof $n?n.Q_.Ke(e):e instanceof bs?n.Q_.He(e):n.Q_.We(e),!t.isEqual(B.min()))try{let r=await cp(n.localStore);t.compareTo(r)>=0&&await function(s,a){let c=s.Q_.rt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){let f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{let f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ge.EMPTY_BYTE_STRING,f.snapshotVersion)),lp(s,u);let m=new sr(f.target,u,h,f.sequenceNumber);zu(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Ks(n,r)}}async function Ks(n,e,t){if(!Ft(e))throw e;n.L_.add(1),await hi(n),n.q_.set("Offline"),t||(t=()=>cp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ho(n)})}function dp(n,e){return e().catch(t=>Ks(n,t,e))}async function di(n){let e=G(n),t=Mt(e),r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zy(e);)try{let i=await xy(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,Gy(e,i)}catch(i){await Ks(e,i)}fp(e)&&pp(e)}function zy(n){return mn(n)&&n.O_.length<10}function Gy(n,e){n.O_.push(e);let t=Mt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function fp(n){return mn(n)&&!Mt(n).n_()&&n.O_.length>0}function pp(n){Mt(n).start()}async function $y(n){Mt(n).p_()}async function Ky(n){let e=Mt(n);for(let t of n.O_)e.m_(t.mutations)}async function Wy(n,e,t){let r=n.O_.shift(),i=pc.from(r,e,t);await dp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await di(n)}async function Hy(n,e){e&&Mt(n).V_&&await async function(r,i){if(function(a){return hy(a)&&a!==R.ABORTED}(i.code)){let s=r.O_.shift();Mt(r).s_(),await dp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await di(r)}}(n,e),fp(n)&&pp(n)}async function Zd(n,e){let t=G(n);t.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");let r=mn(t);t.L_.add(3),await hi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ho(t)}async function Qy(n,e){let t=G(n);e?(t.L_.delete(2),await ho(t)):e||(t.L_.add(2),await hi(t),t.q_.set("Unknown"))}function hr(n){return n.K_||(n.K_=function(t,r,i){let s=G(t);return s.w_(),new iu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Uy.bind(null,n),Ro:By.bind(null,n),mo:qy.bind(null,n),d_:jy.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),$u(n)?Gu(n):n.q_.set("Unknown")):(await n.K_.stop(),hp(n))})),n.K_}function Mt(n){return n.U_||(n.U_=function(t,r,i){let s=G(t);return s.w_(),new su(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$y.bind(null,n),mo:Hy.bind(null,n),f_:Ky.bind(null,n),g_:Wy.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await di(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}var uu=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,c=new n(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Ku(n,e){if(De("AsyncQueue",`${e}: ${n}`),Ft(n))return new V(R.UNAVAILABLE,`${e}: ${n}`);throw n}var Ws=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=Br(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Hs=class{constructor(){this.W_=new oe(x.comparator)}track(e){let t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):L():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}},ar=class n{constructor(e,t,r,i,s,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,Ws.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var lu=class{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}},hu=class{constructor(){this.queries=ef(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){let i=G(t),s=i.queries;i.queries=ef(),s.forEach((a,c)=>{for(let u of c.j_)u.onError(r)})})(this,new V(R.ABORTED,"Firestore shutting down"))}};function ef(){return new it(n=>Rf(n),uo)}async function Jy(n,e){let t=G(n),r=3,i=e.query,s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new lu,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let c=Ku(a,`Initialization of query '${Un(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Wu(t)}async function Yy(n,e){let t=G(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Xy(n,e){let t=G(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let c of a.j_)c.X_(i)&&(r=!0);a.z_=i}}r&&Wu(t)}function Zy(n,e,t){let r=G(n),i=r.queries.get(e);if(i)for(let s of i.j_)s.onError(t);r.queries.delete(e)}function Wu(n){n.Y_.forEach(e=>{e.next()})}var du,tf;(tf=du||(du={})).ea="default",tf.Cache="cache";var fu=class{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new ar(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;let r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==du.Cache}};var Qs=class{constructor(e){this.key=e}},Js=class{constructor(e){this.key=e}},pu=class{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Cf(e),this.Ra=new Ws(this.Aa)}get Va(){return this.Ta}ma(e,t){let r=t?t.fa:new Hs,i=t?t.Ra:this.Ra,s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1,u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{let I=i.get(f),A=li(this.query,m)?m:null,N=!!I&&this.mutatedKeys.has(I.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations),C=!1;I&&A?I.data.isEqual(A.data)?N!==k&&(r.track({type:3,doc:A}),C=!0):this.ga(I,A)||(r.track({type:2,doc:A}),C=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(c=!0)):!I&&A?(r.track({type:0,doc:A}),C=!0):I&&!A&&(r.track({type:1,doc:I}),C=!0,(u||h)&&(c=!0)),C&&(A?(a=a.add(A),s=k?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let a=e.fa.G_();a.sort((f,m)=>function(A,N){let k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return k(A)-k(N)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;let c=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new ar(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Hs,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=W(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});let t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Js(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Qs(r))}),t}ba(e){this.Ta=e.Ts,this.da=W();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ar.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}},mu=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},gu=class{constructor(e){this.key=e,this.va=!1}},_u=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new it(c=>Rf(c),uo),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(x.comparator),this.Na=new Map,this.La=new ri,this.Ba={},this.ka=new Map,this.qa=or.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}};async function ev(n,e,t=!0){let r=wp(n),i,s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await mp(r,e,t,!0),i}async function tv(n,e){let t=wp(n);await mp(t,e,!0,!1)}async function mp(n,e,t,r){let i=await Vy(n.localStore,Ge(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),c;return r&&(c=await nv(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&up(n.remoteStore,i),c}async function nv(n,e,t,r,i){n.Ka=(m,I,A)=>async function(k,C,q,U){let M=C.view.ma(q);M.ns&&(M=await Xd(k.localStore,C.query,!1).then(({documents:v})=>C.view.ma(v,M)));let K=U&&U.targetChanges.get(C.targetId),J=U&&U.targetMismatches.get(C.targetId)!=null,j=C.view.applyChanges(M,k.isPrimaryClient,K,J);return rf(k,C.targetId,j.wa),j.snapshot}(n,m,I,A);let s=await Xd(n.localStore,e,!0),a=new pu(e,s.Ts),c=a.ma(s.documents),u=ti.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(c,n.isPrimaryClient,u);rf(n,t,h.wa);let f=new mu(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function rv(n,e,t){let r=G(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!uo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await eu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ju(r.remoteStore,i.targetId),yu(r,i.targetId)}).catch(fn)):(yu(r,i.targetId),await eu(r.localStore,i.targetId,!0))}async function iv(n,e){let t=G(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ju(t.remoteStore,r.targetId))}async function sv(n,e,t){let r=Ip(n);try{let i=await function(a,c){let u=G(a),h=ce.now(),f=c.reduce((A,N)=>A.add(N.key),W()),m,I;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let N=qe(),k=W();return u.cs.getEntries(A,f).next(C=>{N=C,N.forEach((q,U)=>{U.isValidDocument()||(k=k.add(q))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,N)).next(C=>{m=C;let q=[];for(let U of c){let M=ly(U,m.get(U.key).overlayedDocument);M!=null&&q.push(new Qe(U.key,M,Ef(M.value.mapValue),Le.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,q,c)}).next(C=>{I=C;let q=C.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(A,C.batchId,q)})}).then(()=>({batchId:I.batchId,changes:Nf(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new oe($)),h=h.insert(c,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,t),await fi(r,i.changes),await di(r.remoteStore)}catch(i){let s=Ku(i,"Failed to persist write");t.reject(s)}}async function gp(n,e){let t=G(n);try{let r=await ky(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Na.get(s);a&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?F(a.va):i.removedDocuments.size>0&&(F(a.va),a.va=!1))}),await fi(t,r,e)}catch(r){await fn(r)}}function nf(n,e,t){let r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Fa.forEach((s,a)=>{let c=a.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){let u=G(a);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(let I of m.j_)I.Z_(c)&&(h=!0)}),h&&Wu(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ov(n,e,t){let r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Na.get(e),s=i&&i.key;if(s){let a=new oe(x.comparator);a=a.insert(s,Ee.newNoDocument(s,B.min()));let c=W().add(s),u=new Ts(B.min(),new Map,new oe($),a,c);await gp(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Hu(r)}else await eu(r.localStore,e,!1).then(()=>yu(r,e,t)).catch(fn)}async function av(n,e){let t=G(n),r=e.batch.batchId;try{let i=await Ny(t.localStore,e);yp(t,r,null),_p(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await fi(t,i)}catch(i){await fn(i)}}async function cv(n,e,t){let r=G(n);try{let i=await function(a,c){let u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(F(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);yp(r,e,t),_p(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await fi(r,i)}catch(i){await fn(i)}}function _p(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function yp(n,e,t){let r=G(n),i=r.Ba[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function yu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||vp(n,r)})}function vp(n,e){n.xa.delete(e.path.canonicalString());let t=n.Oa.get(e);t!==null&&(ju(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Hu(n))}function rf(n,e,t){for(let r of t)r instanceof Qs?(n.La.addReference(r.key,e),uv(n,r)):r instanceof Js?(D("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||vp(n,r.key)):L()}function uv(n,e){let t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(D("SyncEngine","New document in limbo: "+t),n.xa.add(r),Hu(n))}function Hu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){let e=n.xa.values().next().value;n.xa.delete(e);let t=new x(te.fromString(e)),r=n.qa.next();n.Na.set(r,new gu(t)),n.Oa=n.Oa.insert(t,r),up(n.remoteStore,new sr(Ge(co(t.path)),r,"TargetPurposeLimboResolution",Ve.oe))}}async function fi(n,e,t){let r=G(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){let m=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);let m=Yc.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){let f=G(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>S.forEach(h,I=>S.forEach(I.$i,A=>f.persistence.referenceDelegate.addReference(m,I.targetId,A)).next(()=>S.forEach(I.Ui,A=>f.persistence.referenceDelegate.removeReference(m,I.targetId,A)))))}catch(m){if(!Ft(m))throw m;D("LocalStore","Failed to update sequence numbers: "+m)}for(let m of h){let I=m.targetId;if(!m.fromCache){let A=f.os.get(I),N=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(I,k)}}}(r.localStore,s))}async function lv(n,e){let t=G(n);if(!t.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());let r=await ap(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(c=>{c.forEach(u=>{u.reject(new V(R.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fi(t,r.hs)}}function hv(n,e){let t=G(n),r=t.Na.get(e);if(r&&r.va)return W().add(r.key);{let i=W(),s=t.Ma.get(e);if(!s)return i;for(let a of s){let c=t.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function wp(n){let e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ov.bind(null,e),e.Ca.d_=Xy.bind(null,e.eventManager),e.Ca.$a=Zy.bind(null,e.eventManager),e}function Ip(n){let e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=av.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cv.bind(null,e),e}var dn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return op(this.persistence,new Bs,e.initialUser,this.serializer)}Ga(e){return new Fs(Us.Zr,this.serializer)}Wa(e){return new js}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};dn.provider={build:()=>new dn};var vu=class extends dn{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Ip(this.Ja.syncEngine),await di(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return op(this.persistence,new Bs,e.initialUser,this.serializer)}ja(e,t){let r=this.persistence.referenceDelegate.garbageCollector;return new Vc(r,e.asyncQueue,t)}Ha(e,t){let r=new Ya(t,this.persistence);return new Ja(e.asyncQueue,r)}Ga(e){let t=Dy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new Jc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Fy(),hs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new js}};var cr=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lv.bind(null,this.syncEngine),await Qy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hu}()}createDatastore(e){let t=lo(e.databaseInfo.databaseId),r=function(s){return new ru(s)}(e.databaseInfo);return function(s,a,c,u){return new ou(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new cu(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>nf(this.syncEngine,t,0),function(){return zs.D()?new zs:new tu}())}createSyncEngine(e,t){return function(i,s,a,c,u,h,f){let m=new _u(i,s,a,c,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=G(i);D("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await hi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};cr.provider={build:()=>new cr};var wu=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):De("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Iu=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=ds.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{D("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Ku(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Ua(n,e){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ap(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function sf(n,e){n.asyncQueue.verifyOperationInProgress();let t=await dv(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Zd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Zd(e.remoteStore,i)),n._onlineComponents=e}async function dv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ua(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Kr("Error using user provided cache. Falling back to memory cache: "+t),await Ua(n,new dn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Ua(n,new dn);return n._offlineComponents}async function Ep(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await sf(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await sf(n,new cr))),n._onlineComponents}function fv(n){return Ep(n).then(e=>e.syncEngine)}async function of(n){let e=await Ep(n),t=e.eventManager;return t.onListen=ev.bind(null,e.syncEngine),t.onUnlisten=rv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iv.bind(null,e.syncEngine),t}function Tp(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var af=new Map;function bp(n,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pv(n,e,t,r){if(e===!0&&r===!0)throw new V(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cf(n){if(!x.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uf(n){if(x.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L()}function pt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Qu(n);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var Ys=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},ii=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ys({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ys(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qa;switch(r.type){case"firstParty":return new Ga(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=af.get(t);r&&(D("ComponentProvider","Removing Datastore"),af.delete(t),r.terminate())}(this),Promise.resolve()}};var Xs=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Me=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},Dt=class n extends Xs{constructor(e,t,r){super(e,t,co(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new x(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Ap(n,e,...t){if(n=pe(n),bp("collection","path",e),n instanceof ii){let r=te.fromString(e,...t);return uf(r),new Dt(n,null,r)}{if(!(n instanceof Me||n instanceof Dt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(te.fromString(e,...t));return uf(r),new Dt(n.firestore,null,r)}}function Ju(n,e,...t){if(n=pe(n),arguments.length===1&&(e=ds.newId()),bp("doc","path",e),n instanceof ii){let r=te.fromString(e,...t);return cf(r),new Me(n,null,new x(r))}{if(!(n instanceof Me||n instanceof Dt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(te.fromString(e,...t));return cf(r),new Me(n.firestore,n instanceof Dt?n.converter:null,new x(r))}}var Zs=class{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gs(this,"async_queue_retry"),this.Vu=()=>{let r=hs();r&&D("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;let t=hs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;let t=hs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});let t=new tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ft(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){let t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;let i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw De("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);let i=uu.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(let t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){let t=this.Tu.indexOf(e);this.Tu.splice(t,1)}};function lf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var gt=class extends ii{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Zs,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Zs(e),this._firestoreClient=void 0,await e}}};function Sp(n,e,t){t||(t="(default)");let r=es(n,"firestore");if(r.isInitialized(t)){let i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Et(s,e))return i;throw new V(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function Pp(n){if(n._terminated)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||mv(n),n._firestoreClient}function mv(n){var e,t,r;let i=n._freezeSettings(),s=function(c,u,h,f){return new Xa(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Tp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Iu(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){let u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}var si=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(ge.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var ur=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var oi=class{constructor(e){this._methodName=e}};var ai=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}};var ci=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}};var gv=/^__.*__$/,Eu=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qe(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lt(e,this.data,t,this.fieldTransforms)}},eo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qe(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Rp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}var Tu=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return no(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Rp(this.Cu)&&gv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}},bu=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||lo(e)}Qu(e,t,r,i=!1){return new Tu({Cu:e,methodName:t,qu:r,path:me.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Yu(n){let e=n._freezeSettings(),t=lo(n._databaseId);return new bu(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Cp(n,e,t,r,i,s={}){let a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);Xu("Data must be an object, but it was:",a,r);let c=Dp(r,a),u,h;if(s.merge)u=new Be(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){let f=[];for(let m of s.mergeFields){let I=Au(e,m,t);if(!a.contains(I))throw new V(R.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);kp(f,I)||f.push(I)}u=new Be(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new Eu(new Ne(c),u,h)}var to=class n extends oi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function _v(n,e,t,r){let i=n.Qu(1,e,t);Xu("Data must be an object, but it was:",i,r);let s=[],a=Ne.empty();pn(r,(u,h)=>{let f=Zu(e,u,t);h=pe(h);let m=i.Nu(f);if(h instanceof to)s.push(f);else{let I=fo(h,m);I!=null&&(s.push(f),a.set(f,I))}});let c=new Be(s);return new eo(a,c,i.fieldTransforms)}function yv(n,e,t,r,i,s){let a=n.Qu(1,e,t),c=[Au(e,r,t)],u=[i];if(s.length%2!=0)throw new V(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<s.length;I+=2)c.push(Au(e,s[I])),u.push(s[I+1]);let h=[],f=Ne.empty();for(let I=c.length-1;I>=0;--I)if(!kp(h,c[I])){let A=c[I],N=u[I];N=pe(N);let k=a.Nu(A);if(N instanceof to)h.push(A);else{let C=fo(N,k);C!=null&&(h.push(A),f.set(A,C))}}let m=new Be(h);return new eo(f,m,a.fieldTransforms)}function fo(n,e){if(Np(n=pe(n)))return Xu("Unsupported field value:",e,n),Dp(n,e);if(n instanceof oi)return function(r,i){if(!Rp(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let c of r){let u=fo(c,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=ce.fromDate(r);return{timestampValue:ir(i.serializer,s)}}if(r instanceof ce){let s=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ir(i.serializer,s)}}if(r instanceof ai)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof si)return{bytesValue:qf(i.serializer,r._byteString)};if(r instanceof Me){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ci)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Uu(c.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Qu(r)}`)}(n,e)}function Dp(n,e){let t={};return vf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(n,(r,i)=>{let s=fo(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Np(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof ai||n instanceof si||n instanceof Me||n instanceof oi||n instanceof ci)}function Xu(n,e,t){if(!Np(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=Qu(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Au(n,e,t){if((e=pe(e))instanceof ur)return e._internalPath;if(typeof e=="string")return Zu(n,e);throw no("Field path arguments must be of type string or ",n,!1,void 0,t)}var vv=new RegExp("[~\\*/\\[\\]]");function Zu(n,e,t){if(e.search(vv)>=0)throw no(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ur(...e.split("."))._internalPath}catch{throw no(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function no(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new V(R.INVALID_ARGUMENT,c+n+u)}function kp(n,e){return n.some(t=>t.isEqual(e))}var ro=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Su(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Op("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Su=class extends ro{data(){return super.data()}};function Op(n,e){return typeof e=="string"?Zu(n,e):e instanceof ur?e._internalPath:e._delegate._internalPath}function wv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Pu=class{convertValue(e,t="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return pn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>se(a.doubleValue));return new ci(s)}convertGeoPoint(e){return new ai(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Lu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){let t=mt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=te.fromString(e);F(Yf(r));let i=new Jn(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(t)||De(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function xp(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var tn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},io=class extends ro{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(Op("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Kn=class extends io{data(e={}){return super.data(e)}},Ru=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new tn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Kn(this._firestore,this._userDataWriter,r.key,r,new tn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{let u=new Kn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let u=new Kn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Iv(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Iv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}var so=class extends Pu{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}};function Vp(n,e,t){n=pt(n,Me);let r=pt(n.firestore,gt),i=xp(n.converter,e,t);return po(r,[Cp(Yu(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Le.none())])}function Lp(n,e,t,...r){n=pt(n,Me);let i=pt(n.firestore,gt),s=Yu(i),a;return a=typeof(e=pe(e))=="string"||e instanceof ur?yv(s,"updateDoc",n._key,e,t,r):_v(s,"updateDoc",n._key,e),po(i,[a.toMutation(n._key,Le.exists(!0))])}function Mp(n){return po(pt(n.firestore,gt),[new rr(n._key,Le.none())])}function Fp(n,e){let t=pt(n.firestore,gt),r=Ju(n),i=xp(n.converter,e);return po(t,[Cp(Yu(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function el(n,...e){var t,r,i;n=pe(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||lf(e[a])||(s=e[a],a++);let c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(lf(e[a])){let m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(n instanceof Me)h=pt(n.firestore,gt),f=co(n._key.path),u={next:m=>{e[a]&&e[a](Ev(h,n,m))},error:e[a+1],complete:e[a+2]};else{let m=pt(n,Xs);h=pt(m.firestore,gt),f=m._query;let I=new so(h);u={next:A=>{e[a]&&e[a](new Ru(h,I,m,A))},error:e[a+1],complete:e[a+2]},wv(n._query)}return function(I,A,N,k){let C=new wu(k),q=new fu(A,C,N);return I.asyncQueue.enqueueAndForget(async()=>Jy(await of(I),q)),()=>{C.Za(),I.asyncQueue.enqueueAndForget(async()=>Yy(await of(I),q))}}(Pp(h),f,c,u)}function po(n,e){return function(r,i){let s=new tt;return r.asyncQueue.enqueueAndForget(async()=>sv(await fv(r),i,s)),s.promise}(Pp(n),e)}function Ev(n,e,t){let r=t.docs.get(e._key),i=new so(n);return new io(n,i,e._key,r,new tn(t.hasPendingWrites,t.fromCache),e.converter)}var Cu=class{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Tv(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function Up(n){return new Cu(n)}var Du=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=cr.provider,this._offlineComponentProvider={build:t=>new vu(t,e?.cacheSizeBytes,this.forceOwnership)}}};function Tv(n){return new Du(n?.forceOwnership)}(function(e,t=!0){(function(i){lr=i})(kn),bt(new je("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),c=new gt(new ja(r.getProvider("auth-internal")),new Ka(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jn(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),He(ud,"4.7.3",e),He(ud,"4.7.3","esm2017")})();function mo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var em=Zp,tm=new ut("auth","Firebase",Zp());var yo=new Tt("@firebase/auth");function bv(n,...e){yo.logLevel<=H.WARN&&yo.warn(`Auth (${kn}): ${n}`,...e)}function _o(n,...e){yo.logLevel<=H.ERROR&&yo.error(`Auth (${kn}): ${n}`,...e)}function _t(n,...e){throw wl(n,...e)}function dr(n,...e){return wl(n,...e)}function nm(n,e,t){let r=Object.assign(Object.assign({},em()),{[e]:t});return new ut("auth","Firebase",r).create(e,{appName:n.name})}function _n(n){return nm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wl(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return tm.create(n,...e)}function z(n,e,...t){if(!n)throw wl(e,...t)}function st(n){let e="INTERNAL ASSERTION FAILED: "+n;throw _o(e),new Error(e)}function yn(n,e){n||st(e)}function Av(){return Bp()==="http:"||Bp()==="https:"}function Bp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function Sv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Av()||qh()||"connection"in navigator)?navigator.onLine:!0}function Pv(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var vn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,yn(t>e,"Short delay should be less than long delay!"),this.isMobile=Uh()||jh()}get(){return Sv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Rv(n,e){yn(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var vo=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Cv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Dv=new vn(3e4,6e4);function ye(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xe(n,e,t,r,i={}){return rm(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let c=Yi(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);let h=Object.assign({method:e,headers:u},s);return Bh()||(h.referrerPolicy="no-referrer"),vo.fetch()(im(n,n.config.apiHost,t,c),h)})}async function rm(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},Cv),e);try{let i=new rl(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw pi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let c=s.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw pi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw pi(n,"user-disabled",a);let f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw nm(n,f,h);_t(n,f)}}catch(i){if(i instanceof Ue)throw i;_t(n,"network-request-failed",{message:String(i)})}}async function bn(n,e,t,r,i={}){let s=await xe(n,e,t,r,i);return"mfaPendingCredential"in s&&_t(n,"multi-factor-auth-required",{_serverResponse:s}),s}function im(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Rv(n.config,i):`${n.config.apiScheme}://${i}`}function Nv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var rl=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dr(this.auth,"network-request-failed")),Dv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function pi(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=dr(n,e,r);return i.customData._tokenResponse=t,i}function qp(n){return n!==void 0&&n.enterprise!==void 0}var il=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Nv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function kv(n,e){return xe(n,"GET","/v2/recaptchaConfig",ye(n,e))}async function Ov(n,e){return xe(n,"POST","/v1/accounts:delete",e)}async function sm(n,e){return xe(n,"POST","/v1/accounts:lookup",e)}function mi(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function om(n,e=!1){let t=pe(n),r=await t.getIdToken(e),i=Il(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:mi(tl(i.auth_time)),issuedAtTime:mi(tl(i.iat)),expirationTime:mi(tl(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function tl(n){return Number(n)*1e3}function Il(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{let i=fa(t);return i?JSON.parse(i):(_o("Failed to decode base64 JWT payload"),null)}catch(i){return _o("Caught error parsing JWT payload as JSON",i?.toString()),null}}function jp(n){let e=Il(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function _i(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ue&&xv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var sl=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var yi=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function wo(n){var e;let t=n.auth,r=await n.getIdToken(),i=await _i(n,sm(t,{idToken:r}));z(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cm(s.providerUserInfo):[],c=Vv(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!c?.length,f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new yi(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function am(n){let e=pe(n);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cm(n){return n.map(e=>{var{providerId:t}=e,r=mo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Lv(n,e){let t=await rm(n,{},async()=>{let r=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=im(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",vo.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mv(n,e){return xe(n,"POST","/v2/accounts:revokeToken",ye(n,e))}var gi=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");let t=jp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await Lv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return st("not implemented")}};function Ut(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var pr=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=mo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return om(this,e)}reload(){return am(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(_n(this.auth));let e=await this.getIdToken();return await _i(this,Ov(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,u,h,f;let m=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:K,isAnonymous:J,providerData:j,stsTokenManager:v}=t;z(M&&v,e,"internal-error");let g=gi.fromJSON(this.name,v);z(typeof M=="string",e,"internal-error"),Ut(m,e.name),Ut(I,e.name),z(typeof K=="boolean",e,"internal-error"),z(typeof J=="boolean",e,"internal-error"),Ut(A,e.name),Ut(N,e.name),Ut(k,e.name),Ut(C,e.name),Ut(q,e.name),Ut(U,e.name);let _=new n({uid:M,auth:e,email:I,emailVerified:K,displayName:m,isAnonymous:J,photoURL:N,phoneNumber:A,tenantId:k,stsTokenManager:g,createdAt:q,lastLoginAt:U});return j&&Array.isArray(j)&&(_.providerData=j.map(w=>Object.assign({},w))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new gi;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wo(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];z(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?cm(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new gi;c.updateFromIdToken(r);let u=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}};var zp=new Map;function gn(n){yn(n instanceof Function,"Expected a class definition");let e=zp.get(n);return e?(yn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zp.set(n,e),e)}var Io=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Io.type="NONE";var ol=Io;function nl(n,e,t){return`firebase:${n}:${e}:${t}`}var Eo=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=nl("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(gn(ol),e,r);let i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h),s=i[0]||gn(ol),a=nl(r,e.config.apiKey,e.name),c=null;for(let h of t)try{let f=await h._get(a);if(f){let m=pr._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}let u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new n(s,e,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new n(s,e,r))}};function Gp(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hm(e))return"Blackberry";if(dm(e))return"Webos";if(Uv(e))return"Safari";if((e.includes("chrome/")||Bv(e))&&!e.includes("edge/"))return"Chrome";if(lm(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Fv(n=fe()){return/firefox\//i.test(n)}function Uv(n=fe()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bv(n=fe()){return/crios\//i.test(n)}function um(n=fe()){return/iemobile/i.test(n)}function lm(n=fe()){return/android/i.test(n)}function hm(n=fe()){return/blackberry/i.test(n)}function dm(n=fe()){return/webos/i.test(n)}function qv(n=fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jv(){return zh()&&document.documentMode===10}function zv(n=fe()){return qv(n)||lm(n)||dm(n)||hm(n)||/windows phone/i.test(n)||um(n)}function fm(n,e=[]){let t;switch(n){case"Browser":t=Gp(fe());break;case"Worker":t=`${Gp(fe())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${r}`}var al=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,c)=>{try{let u=e(s);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Gv(n,e={}){return xe(n,"GET","/v2/passwordPolicy",ye(n,e))}var $v=6,cl=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:$v,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;let u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var ul=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new al(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await sm(this,{idToken:e}),r=await pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ht(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(_n(this));let t=e?pe(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Gv(this),t=new cl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ut("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&gn(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[gn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{let u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&bv(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Ri(n){return pe(n)}var To=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=$h(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kv(n){El=n}function Wv(n){return El.loadJS(n)}function Hv(){return El.recaptchaEnterpriseScript}function Qv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Jv="recaptcha-enterprise",Yv="NO_RECAPTCHA",ll=class{constructor(e){this.type=Jv,this.auth=Ri(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{kv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let h=new il(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,a,c){let u=window.grecaptcha;qp(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(Yv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&qp(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Hv();u.length!==0&&(u+=c),Wv(u).then(()=>{i(c,s,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}};async function $p(n,e,t,r=!1){let i=new ll(n),s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}let a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kp(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await $p(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await $p(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}function Tl(n,e){let t=es(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Et(s,e??{}))return i;_t(i,"already-initialized")}return t.initialize({options:e})}function Xv(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(gn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}var wn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}};async function Zv(n,e){return xe(n,"POST","/v1/accounts:signUp",e)}async function ew(n,e){return bn(n,"POST","/v1/accounts:signInWithPassword",ye(n,e))}async function tw(n,e){return bn(n,"POST","/v1/accounts:signInWithEmailLink",ye(n,e))}async function nw(n,e){return bn(n,"POST","/v1/accounts:signInWithEmailLink",ye(n,e))}var vi=class n extends wn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kp(e,t,"signInWithPassword",ew);case"emailLink":return tw(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kp(e,r,"signUpPassword",Zv);case"emailLink":return nw(e,{idToken:t,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function fr(n,e){return bn(n,"POST","/v1/accounts:signInWithIdp",ye(n,e))}var rw="http://localhost",In=class n extends wn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=mo(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return fr(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,fr(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,fr(e,t)}buildRequest(){let e={requestUri:rw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yi(t)}return e}};async function iw(n,e){return xe(n,"POST","/v1/accounts:sendVerificationCode",ye(n,e))}async function sw(n,e){return bn(n,"POST","/v1/accounts:signInWithPhoneNumber",ye(n,e))}async function ow(n,e){let t=await bn(n,"POST","/v1/accounts:signInWithPhoneNumber",ye(n,e));if(t.temporaryProof)throw pi(n,"account-exists-with-different-credential",t);return t}var aw={USER_NOT_FOUND:"user-not-found"};async function cw(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return bn(n,"POST","/v1/accounts:signInWithPhoneNumber",ye(n,t),aw)}var wi=class n extends wn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return sw(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ow(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return cw(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function uw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lw(n){let e=Dn(Nn(n)).link,t=e?Dn(Nn(e)).deep_link_id:null,r=Dn(Nn(n)).deep_link_id;return(r?Dn(Nn(r)).link:null)||r||t||e||n}var bo=class n{constructor(e){var t,r,i,s,a,c;let u=Dn(Nn(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=uw((i=u.mode)!==null&&i!==void 0?i:null);z(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=lw(e);try{return new n(t)}catch{return null}}};var En=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=bo.parseLink(t);return z(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}};En.PROVIDER_ID="password";En.EMAIL_PASSWORD_SIGN_IN_METHOD="password";En.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var hl=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var mr=class extends hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Ii=class n extends mr{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";var Ei=class n extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return In._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";var Ti=class n extends mr{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";var bi=class n extends mr{constructor(){super("twitter.com")}static credential(e,t){return In._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};bi.TWITTER_SIGN_IN_METHOD="twitter.com";bi.PROVIDER_ID="twitter.com";var Ai=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await pr._fromIdTokenResponse(e,r,i),a=Wp(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Wp(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Wp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var dl=class n extends Ue{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function pm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dl._fromErrorAndOperation(n,s,e,r):s})}async function hw(n,e,t=!1){let r=await _i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ai._forOperation(n,"link",r)}async function dw(n,e,t=!1){let{auth:r}=n;if(ht(r.app))return Promise.reject(_n(r));let i="reauthenticate";try{let s=await _i(n,pm(r,i,e,n),t);z(s.idToken,r,"internal-error");let a=Il(s.idToken);z(a,r,"internal-error");let{sub:c}=a;return z(n.uid===c,r,"user-mismatch"),Ai._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&_t(r,"user-mismatch"),s}}async function mm(n,e,t=!1){if(ht(n.app))return Promise.reject(_n(n));let r="signIn",i=await pm(n,r,e),s=await Ai._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function gm(n,e){return mm(Ri(n),e)}async function fw(n){let e=Ri(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function bl(n,e,t){return ht(n.app)?Promise.reject(_n(n)):gm(pe(n),En.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fw(n),r})}function Al(n,e,t,r){return pe(n).onAuthStateChanged(e,t,r)}function Sl(n){return pe(n).signOut()}function pw(n,e){return xe(n,"POST","/v2/accounts/mfaEnrollment:start",ye(n,e))}function mw(n,e){return xe(n,"POST","/v2/accounts/mfaEnrollment:finalize",ye(n,e))}function gw(n,e){return xe(n,"POST","/v2/accounts/mfaEnrollment:start",ye(n,e))}function _w(n,e){return xe(n,"POST","/v2/accounts/mfaEnrollment:finalize",ye(n,e))}var Ao="__sak";var So=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var yw=1e3,vw=10,Po=class extends So{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);jv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vw):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Po.type="LOCAL";var Pl=Po;var fl=class extends So{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};fl.type="SESSION";function ww(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Ro=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(a).map(async h=>h(t.origin,s)),u=await ww(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Ro.receivers=[];function _m(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var pl=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{let h=_m("",20);i.port1.start();let f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){let I=m;if(I.data.eventId===h)switch(I.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(I.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Hp(){return window}function ym(){return typeof Hp().WorkerGlobalScope<"u"&&typeof Hp().importScripts=="function"}async function Iw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ew(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Tw(){return ym()?self:null}var vm="firebaseLocalStorageDb",bw=1,Co="firebaseLocalStorage",wm="fbase_key",Tn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Lo(n,e){return n.transaction([Co],e?"readwrite":"readonly").objectStore(Co)}function Aw(){let n=indexedDB.deleteDatabase(vm);return new Tn(n).toPromise()}function ml(){let n=indexedDB.open(vm,bw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Co,{keyPath:wm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Co)?e(r):(r.close(),await Aw(),e(await ml()))})})}async function Qp(n,e,t){let r=Lo(n,!0).put({[wm]:e,value:t});return new Tn(r).toPromise()}async function Sw(n,e){let t=Lo(n,!1).get(e),r=await new Tn(t).toPromise();return r===void 0?null:r.value}function Jp(n,e){let t=Lo(n,!0).delete(e);return new Tn(t).toPromise()}var Pw=800,Rw=3,Do=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Rw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ym()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(Tw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Iw(),!this.activeServiceWorker)return;this.sender=new pl(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ew()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await ml();return await Qp(e,Ao,"1"),await Jp(e,Ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Sw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Lo(i,!1).getAll();return new Tn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Do.type="LOCAL";var Rl=Do;function Cw(n,e){return xe(n,"POST","/v2/accounts/mfaSignIn:start",ye(n,e))}function Dw(n,e){return xe(n,"POST","/v2/accounts/mfaSignIn:finalize",ye(n,e))}function Nw(n,e){return xe(n,"POST","/v2/accounts/mfaSignIn:finalize",ye(n,e))}var QI=Qv("rcb"),JI=new vn(3e4,6e4);var kw="recaptcha";async function Ow(n,e,t){var r;let i=await t.verify();try{z(typeof i=="string",n,"argument-error"),z(t.type===kw,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){let a=s.session;if("phoneNumber"in s)return z(a.type==="enroll",n,"internal-error"),(await pw(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(a.type==="signin",n,"internal-error");let c=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(c,n,"missing-multi-factor-info"),(await Cw(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:a}=await iw(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}var Si=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Ri(e)}verifyPhoneNumber(e,t){return Ow(this.auth,e,pe(t))}static credential(e,t){return wi._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?wi._fromTokenResponse(t,r):null}};Si.PROVIDER_ID="phone";Si.PHONE_SIGN_IN_METHOD="phone";var Pi=class extends wn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function xw(n){return mm(n.auth,new Pi(n),n.bypassAuthState)}function Vw(n){let{auth:e,user:t}=n;return z(t,e,"internal-error"),dw(t,new Pi(n),n.bypassAuthState)}async function Lw(n){let{auth:e,user:t}=n;return z(t,e,"internal-error"),hw(t,new Pi(n),n.bypassAuthState)}var gl=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}let u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xw;case"linkViaPopup":case"linkViaRedirect":return Lw;case"reauthViaPopup":case"reauthViaRedirect":return Vw;default:_t(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Mw=new vn(2e3,1e4);var _l=class n extends gl{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");let e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mw.get())};e()}};_l.currentPopupAction=null;var YI=10*60*1e3;var XI=new vn(3e4,6e4);var ZI=new vn(5e3,15e3);var eE=encodeURIComponent("fac");var No=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return st("unexpected MultiFactorSessionType")}}},yl=class n extends No{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return mw(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Dw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},ko=class{constructor(){}static assertion(e){return yl._fromCredential(e)}};ko.FACTOR_ID="phone";var Oo=class{static assertionForEnrollment(e,t){return xo._fromSecret(e,t)}static assertionForSignIn(e,t){return xo._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;z(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await gw(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Vo._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Oo.FACTOR_ID="totp";var xo=class n extends No{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return z(typeof this.secret<"u",e,"argument-error"),_w(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){z(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Nw(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Vo=class n{constructor(e,t,r,i,s,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(go(e)||go(t))&&(i=!0),i&&(go(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),go(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function go(n){return typeof n>"u"||n?.length===0}var Yp="@firebase/auth",Xp="1.7.9";var vl=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Fw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Uw(n){bt(new je("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fm(n)},h=new ul(r,i,s,u);return Xv(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),bt(new je("auth-internal",e=>{let t=Ri(e.getProvider("auth").getImmediate());return(r=>new vl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Yp,Xp,Fw(n)),He(Yp,Xp,"esm2017")}var Bw=5*60,tE=Fh("authIdTokenMaxAge")||Bw;function qw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Kv({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=dr("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",qw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Uw("Browser");function jw(n,e){let t=id(n),r=Sp(t,{localCache:Up()}),i=Tl(t,{persistence:[Rl,Pl]}),s=h=>({id:h.id,exists:h.exists(),data:()=>h.data()}),a={collection(h){let f=Ap(r,h);return{add:m=>Fp(f,m),onSnapshot:(m,I)=>el(f,A=>m({docs:A.docs.map(s),size:A.size,empty:A.empty}),A=>I&&I(A))}},doc(h){let f=Ju(r,h);return{set:m=>Vp(f,m),update:m=>Lp(f,m),delete:()=>Mp(f),onSnapshot:(m,I)=>el(f,A=>m(s(A)),A=>I&&I(A))}}},c=(e||"").trim().toLowerCase();return{db:a,auth:{onChange:h=>Al(i,h),signIn:(h,f)=>bl(i,h.trim(),f),signOut:()=>Sl(i),isOwner:h=>!!(h&&h.email&&h.email.toLowerCase()===c)}}}window.RezijeBackend={start:jw};Fo();Fo();var bm;(function(n){n[n.Sunday=1]="Sunday",n[n.Monday=2]="Monday",n[n.Tuesday=3]="Tuesday",n[n.Wednesday=4]="Wednesday",n[n.Thursday=5]="Thursday",n[n.Friday=6]="Friday",n[n.Saturday=7]="Saturday"})(bm||(bm={}));var vr=Mo("LocalNotifications",{web:()=>Promise.resolve().then(()=>(Sm(),Am)).then(n=>new n.LocalNotificationsWeb)});var kl=1e3,Pm=30;async function Xw(){try{let{notifications:n}=await vr.getPending();return n.map(e=>({id:e.id})).filter(e=>e.id>=kl&&e.id<kl+Pm)}catch{return[]}}var Di={available:_r.isNativePlatform(),async ensurePermission(){if(!Di.available)return!1;try{let n=await vr.checkPermissions();return n.display!=="granted"&&(n=await vr.requestPermissions()),n.display==="granted"}catch{return!1}},async clear(){if(!Di.available)return;let n=await Xw();n.length&&await vr.cancel({notifications:n})},async plan(n){Di.available&&(await Di.clear(),n.length&&await vr.schedule({notifications:n.slice(0,Pm).map((e,t)=>({id:kl+t,title:e.title,body:e.body,schedule:{at:e.at,allowWhileIdle:!0},smallIcon:"ic_stat_rezije",iconColor:"#1F8A3F"}))}))}};window.RezijeNotify=Di;})();
/*! Bundled license information:

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

firebase/app/dist/esm/index.esm.js:
  (**
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
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
  *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC.
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC.
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC.
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC.
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
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
   *)
  (**
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
   *)
*/
