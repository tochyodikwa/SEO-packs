import{V as ee}from"./_plugin-vue2_normalizer.d86aa1f3.js";import{s as d,h as re,m as _}from"./index.59e9b4d0.js";import{_ as ne}from"./default-i18n.31663a66.js";/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function A(t,e){for(var r in e)t[r]=e[r];return t}var ae=/[!'()*]/g,ie=function(t){return"%"+t.charCodeAt(0).toString(16)},oe=/%2C/g,U=function(t){return encodeURIComponent(t).replace(ae,ie).replace(oe,",")};function at(t){try{return decodeURIComponent(t)}catch{}return t}function se(t,e,r){e===void 0&&(e={});var a=r||ue,n;try{n=a(t||"")}catch{n={}}for(var i in e){var o=e[i];n[i]=Array.isArray(o)?o.map(gt):gt(o)}return n}var gt=function(t){return t==null||typeof t=="object"?t:String(t)};function ue(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t&&t.split("&").forEach(function(r){var a=r.replace(/\+/g," ").split("="),n=at(a.shift()),i=a.length>0?at(a.join("=")):null;e[n]===void 0?e[n]=i:Array.isArray(e[n])?e[n].push(i):e[n]=[e[n],i]}),e}function ce(t){var e=t?Object.keys(t).map(function(r){var a=t[r];if(a===void 0)return"";if(a===null)return U(r);if(Array.isArray(a)){var n=[];return a.forEach(function(i){i!==void 0&&(i===null?n.push(U(r)):n.push(U(r)+"="+U(i)))}),n.join("&")}return U(r)+"="+U(a)}).filter(function(r){return r.length>0}).join("&"):null;return e?"?"+e:""}var Q=/\/?$/;function W(t,e,r,a){var n=a&&a.options.stringifyQuery,i=e.query||{};try{i=it(i)}catch{}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:wt(e,n),matched:t?fe(t):[]};return r&&(o.redirectedFrom=wt(r,n)),Object.freeze(o)}function it(t){if(Array.isArray(t))return t.map(it);if(t&&typeof t=="object"){var e={};for(var r in t)e[r]=it(t[r]);return e}else return t}var k=W(null,{path:"/"});function fe(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function wt(t,e){var r=t.path,a=t.query;a===void 0&&(a={});var n=t.hash;n===void 0&&(n="");var i=e||ce;return(r||"/")+i(a)+n}function qt(t,e,r){return e===k?t===e:e?t.path&&e.path?t.path.replace(Q,"")===e.path.replace(Q,"")&&(r||t.hash===e.hash&&z(t.query,e.query)):t.name&&e.name?t.name===e.name&&(r||t.hash===e.hash&&z(t.query,e.query)&&z(t.params,e.params)):!1:!1}function z(t,e){if(t===void 0&&(t={}),e===void 0&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),a=Object.keys(e).sort();return r.length!==a.length?!1:r.every(function(n,i){var o=t[n],s=a[i];if(s!==n)return!1;var c=e[n];return o==null||c==null?o===c:typeof o=="object"&&typeof c=="object"?z(o,c):String(o)===String(c)})}function pe(t,e){return t.path.replace(Q,"/").indexOf(e.path.replace(Q,"/"))===0&&(!e.hash||t.hash===e.hash)&&le(t.query,e.query)}function le(t,e){for(var r in e)if(!(r in t))return!1;return!0}function Ut(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var a in r.instances){var n=r.instances[a],i=r.enteredCbs[a];if(!(!n||!i)){delete r.enteredCbs[a];for(var o=0;o<i.length;o++)n._isBeingDestroyed||i[o](n)}}}}var he={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,r){var a=r.props,n=r.children,i=r.parent,o=r.data;o.routerView=!0;for(var s=i.$createElement,c=a.name,u=i.$route,f=i._routerViewCache||(i._routerViewCache={}),h=0,m=!1;i&&i._routerRoot!==i;){var y=i.$vnode?i.$vnode.data:{};y.routerView&&h++,y.keepAlive&&i._directInactive&&i._inactive&&(m=!0),i=i.$parent}if(o.routerViewDepth=h,m){var v=f[c],p=v&&v.component;return p?(v.configProps&&Rt(p,o,v.route,v.configProps),s(p,o,n)):s()}var l=u.matched[h],g=l&&l.components[c];if(!l||!g)return f[c]=null,s();f[c]={component:g},o.registerRouteInstance=function(w,x){var E=l.instances[c];(x&&E!==w||!x&&E===w)&&(l.instances[c]=x)},(o.hook||(o.hook={})).prepatch=function(w,x){l.instances[c]=x.componentInstance},o.hook.init=function(w){w.data.keepAlive&&w.componentInstance&&w.componentInstance!==l.instances[c]&&(l.instances[c]=w.componentInstance),Ut(u)};var b=l.props&&l.props[c];return b&&(A(f[c],{route:u,configProps:b}),Rt(g,o,u,b)),s(g,o,n)}};function Rt(t,e,r,a){var n=e.props=ve(r,a);if(n){n=e.props=A({},n);var i=e.attrs=e.attrs||{};for(var o in n)(!t.props||!(o in t.props))&&(i[o]=n[o],delete n[o])}}function ve(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function jt(t,e,r){var a=t.charAt(0);if(a==="/")return t;if(a==="?"||a==="#")return e+t;var n=e.split("/");(!r||!n[n.length-1])&&n.pop();for(var i=t.replace(/^\//,"").split("/"),o=0;o<i.length;o++){var s=i[o];s===".."?n.pop():s!=="."&&n.push(s)}return n[0]!==""&&n.unshift(""),n.join("/")}function de(t){var e="",r="",a=t.indexOf("#");a>=0&&(e=t.slice(a),t=t.slice(0,a));var n=t.indexOf("?");return n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),{path:t,query:r,hash:e}}function T(t){return t.replace(/\/+/g,"/")}var X=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},M=Bt,ye=pt,me=be,ge=Mt,we=It,Re=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function pt(t,e){for(var r=[],a=0,n=0,i="",o=e&&e.delimiter||"/",s;(s=Re.exec(t))!=null;){var c=s[0],u=s[1],f=s.index;if(i+=t.slice(n,f),n=f+c.length,u){i+=u[1];continue}var h=t[n],m=s[2],y=s[3],v=s[4],p=s[5],l=s[6],g=s[7];i&&(r.push(i),i="");var b=m!=null&&h!=null&&h!==m,w=l==="+"||l==="*",x=l==="?"||l==="*",E=s[2]||o,O=v||p;r.push({name:y||a++,prefix:m||"",delimiter:E,optional:x,repeat:w,partial:b,asterisk:!!g,pattern:O?Oe(O):g?".*":"[^"+F(E)+"]+?"})}return n<t.length&&(i+=t.substr(n)),i&&r.push(i),r}function be(t,e){return Mt(pt(t,e),e)}function xe(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Ee(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Mt(t,e){for(var r=new Array(t.length),a=0;a<t.length;a++)typeof t[a]=="object"&&(r[a]=new RegExp("^(?:"+t[a].pattern+")$",ht(e)));return function(n,i){for(var o="",s=n||{},c=i||{},u=c.pretty?xe:encodeURIComponent,f=0;f<t.length;f++){var h=t[f];if(typeof h=="string"){o+=h;continue}var m=s[h.name],y;if(m==null)if(h.optional){h.partial&&(o+=h.prefix);continue}else throw new TypeError('Expected "'+h.name+'" to be defined');if(X(m)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(m.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var v=0;v<m.length;v++){if(y=u(m[v]),!r[f].test(y))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(y)+"`");o+=(v===0?h.prefix:h.delimiter)+y}continue}if(y=h.asterisk?Ee(m):u(m),!r[f].test(y))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+y+'"');o+=h.prefix+y}return o}}function F(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Oe(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function lt(t,e){return t.keys=e,t}function ht(t){return t&&t.sensitive?"":"i"}function _e(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var a=0;a<r.length;a++)e.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return lt(t,e)}function Pe(t,e,r){for(var a=[],n=0;n<t.length;n++)a.push(Bt(t[n],e,r).source);var i=new RegExp("(?:"+a.join("|")+")",ht(r));return lt(i,e)}function $e(t,e,r){return It(pt(t,r),e,r)}function It(t,e,r){X(e)||(r=e||r,e=[]),r=r||{};for(var a=r.strict,n=r.end!==!1,i="",o=0;o<t.length;o++){var s=t[o];if(typeof s=="string")i+=F(s);else{var c=F(s.prefix),u="(?:"+s.pattern+")";e.push(s),s.repeat&&(u+="(?:"+c+u+")*"),s.optional?s.partial?u=c+"("+u+")?":u="(?:"+c+"("+u+"))?":u=c+"("+u+")",i+=u}}var f=F(r.delimiter||"/"),h=i.slice(-f.length)===f;return a||(i=(h?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),n?i+="$":i+=a&&h?"":"(?="+f+"|$)",lt(new RegExp("^"+i,ht(r)),e)}function Bt(t,e,r){return X(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?_e(t,e):X(t)?Pe(t,e,r):$e(t,e,r)}M.parse=ye;M.compile=me;M.tokensToFunction=ge;M.tokensToRegExp=we;var bt=Object.create(null);function G(t,e,r){e=e||{};try{var a=bt[t]||(bt[t]=M.compile(t));return typeof e.pathMatch=="string"&&(e[0]=e.pathMatch),a(e,{pretty:!0})}catch{return""}finally{delete e[0]}}function vt(t,e,r,a){var n=typeof t=="string"?{path:t}:t;if(n._normalized)return n;if(n.name){n=A({},t);var i=n.params;return i&&typeof i=="object"&&(n.params=A({},i)),n}if(!n.path&&n.params&&e){n=A({},n),n._normalized=!0;var o=A(A({},e.params),n.params);if(e.name)n.name=e.name,n.params=o;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;n.path=G(s,o,"path "+e.path)}return n}var c=de(n.path||""),u=e&&e.path||"/",f=c.path?jt(c.path,u,r||n.append):u,h=se(c.query,n.query,a&&a.options.parseQuery),m=n.hash||c.hash;return m&&m.charAt(0)!=="#"&&(m="#"+m),{_normalized:!0,path:f,query:h,hash:m}}var Ae=[String,Object],Se=[String,Array],xt=function(){},Te={name:"RouterLink",props:{to:{type:Ae,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:Se,default:"click"}},render:function(e){var r=this,a=this.$router,n=this.$route,i=a.resolve(this.to,n,this.append),o=i.location,s=i.route,c=i.href,u={},f=a.options.linkActiveClass,h=a.options.linkExactActiveClass,m=f==null?"router-link-active":f,y=h==null?"router-link-exact-active":h,v=this.activeClass==null?m:this.activeClass,p=this.exactActiveClass==null?y:this.exactActiveClass,l=s.redirectedFrom?W(null,vt(s.redirectedFrom),null,a):s;u[p]=qt(n,l,this.exactPath),u[v]=this.exact||this.exactPath?u[p]:pe(n,l);var g=u[p]?this.ariaCurrentValue:null,b=function(nt){Et(nt)&&(r.replace?a.replace(o,xt):a.push(o,xt))},w={click:Et};Array.isArray(this.event)?this.event.forEach(function(nt){w[nt]=b}):w[this.event]=b;var x={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:s,navigate:b,isActive:u[v],isExactActive:u[p]});if(E){if(E.length===1)return E[0];if(E.length>1||!E.length)return E.length===0?e():e("span",{},E)}if(this.tag==="a")x.on=w,x.attrs={href:c,"aria-current":g};else{var O=Ht(this.$slots.default);if(O){O.isStatic=!1;var P=O.data=A({},O.data);P.on=P.on||{};for(var $ in P.on){var q=P.on[$];$ in w&&(P.on[$]=Array.isArray(q)?q:[q])}for(var H in w)H in P.on?P.on[H].push(w[H]):P.on[H]=b;var mt=O.data.attrs=A({},O.data.attrs);mt.href=c,mt["aria-current"]=g}else x.on=w}return e(this.tag,x,this.$slots.default)}};function Et(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ht(t){if(t){for(var e,r=0;r<t.length;r++)if(e=t[r],e.tag==="a"||e.children&&(e=Ht(e.children)))return e}}var Y;function ot(t){if(!(ot.installed&&Y===t)){ot.installed=!0,Y=t;var e=function(n){return n!==void 0},r=function(n,i){var o=n.$options._parentVnode;e(o)&&e(o=o.data)&&e(o=o.registerRouteInstance)&&o(n,i)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",he),t.component("RouterLink",Te);var a=t.config.optionMergeStrategies;a.beforeRouteEnter=a.beforeRouteLeave=a.beforeRouteUpdate=a.created}}var B=typeof window<"u";function V(t,e,r,a,n){var i=e||[],o=r||Object.create(null),s=a||Object.create(null);t.forEach(function(f){st(i,o,s,f,n)});for(var c=0,u=i.length;c<u;c++)i[c]==="*"&&(i.push(i.splice(c,1)[0]),u--,c--);return{pathList:i,pathMap:o,nameMap:s}}function st(t,e,r,a,n,i){var o=a.path,s=a.name,c=a.pathToRegexpOptions||{},u=Le(o,n,c.strict);typeof a.caseSensitive=="boolean"&&(c.sensitive=a.caseSensitive);var f={path:u,regex:Ce(u,c),components:a.components||{default:a.component},alias:a.alias?typeof a.alias=="string"?[a.alias]:a.alias:[],instances:{},enteredCbs:{},name:s,parent:n,matchAs:i,redirect:a.redirect,beforeEnter:a.beforeEnter,meta:a.meta||{},props:a.props==null?{}:a.components?a.props:{default:a.props}};if(a.children&&a.children.forEach(function(p){var l=i?T(i+"/"+p.path):void 0;st(t,e,r,p,f,l)}),e[f.path]||(t.push(f.path),e[f.path]=f),a.alias!==void 0)for(var h=Array.isArray(a.alias)?a.alias:[a.alias],m=0;m<h.length;++m){var y=h[m],v={path:y,children:a.children};st(t,e,r,v,n,f.path||"/")}s&&(r[s]||(r[s]=f))}function Ce(t,e){var r=M(t,[],e);return r}function Le(t,e,r){return r||(t=t.replace(/\/$/,"")),t[0]==="/"||e==null?t:T(e.path+"/"+t)}function ke(t,e){var r=V(t),a=r.pathList,n=r.pathMap,i=r.nameMap;function o(y){V(y,a,n,i)}function s(y,v){var p=typeof y!="object"?i[y]:void 0;V([v||y],a,n,i,p),p&&p.alias.length&&V(p.alias.map(function(l){return{path:l,children:[v]}}),a,n,i,p)}function c(){return a.map(function(y){return n[y]})}function u(y,v,p){var l=vt(y,v,!1,e),g=l.name;if(g){var b=i[g];if(!b)return m(null,l);var w=b.regex.keys.filter(function($){return!$.optional}).map(function($){return $.name});if(typeof l.params!="object"&&(l.params={}),v&&typeof v.params=="object")for(var x in v.params)!(x in l.params)&&w.indexOf(x)>-1&&(l.params[x]=v.params[x]);return l.path=G(b.path,l.params),m(b,l,p)}else if(l.path){l.params={};for(var E=0;E<a.length;E++){var O=a[E],P=n[O];if(Ne(P.regex,l.path,l.params))return m(P,l,p)}}return m(null,l)}function f(y,v){var p=y.redirect,l=typeof p=="function"?p(W(y,v,null,e)):p;if(typeof l=="string"&&(l={path:l}),!l||typeof l!="object")return m(null,v);var g=l,b=g.name,w=g.path,x=v.query,E=v.hash,O=v.params;if(x=g.hasOwnProperty("query")?g.query:x,E=g.hasOwnProperty("hash")?g.hash:E,O=g.hasOwnProperty("params")?g.params:O,b)return i[b],u({_normalized:!0,name:b,query:x,hash:E,params:O},void 0,v);if(w){var P=qe(w,y),$=G(P,O);return u({_normalized:!0,path:$,query:x,hash:E},void 0,v)}else return m(null,v)}function h(y,v,p){var l=G(p,v.params),g=u({_normalized:!0,path:l});if(g){var b=g.matched,w=b[b.length-1];return v.params=g.params,m(w,v)}return m(null,v)}function m(y,v,p){return y&&y.redirect?f(y,p||v):y&&y.matchAs?h(y,v,y.matchAs):W(y,v,p,e)}return{match:u,addRoute:s,getRoutes:c,addRoutes:o}}function Ne(t,e,r){var a=e.match(t);if(a){if(!r)return!0}else return!1;for(var n=1,i=a.length;n<i;++n){var o=t.keys[n-1];o&&(r[o.name||"pathMatch"]=typeof a[n]=="string"?at(a[n]):a[n])}return!0}function qe(t,e){return jt(t,e.parent?e.parent.path:"/",!0)}var Ue=B&&window.performance&&window.performance.now?window.performance:Date;function Vt(){return Ue.now().toFixed(3)}var zt=Vt();function tt(){return zt}function Ft(t){return zt=t}var Gt=Object.create(null);function Jt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=A({},window.history.state);return r.key=tt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",Ot),function(){window.removeEventListener("popstate",Ot)}}function C(t,e,r,a){if(!!t.app){var n=t.options.scrollBehavior;!n||t.app.$nextTick(function(){var i=je(),o=n.call(t,e,r,a?i:null);!o||(typeof o.then=="function"?o.then(function(s){$t(s,i)}).catch(function(s){}):$t(o,i))})}}function Kt(){var t=tt();t&&(Gt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ot(t){Kt(),t.state&&t.state.key&&Ft(t.state.key)}function je(){var t=tt();if(t)return Gt[t]}function Me(t,e){var r=document.documentElement,a=r.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-a.left-e.x,y:n.top-a.top-e.y}}function _t(t){return j(t.x)||j(t.y)}function Pt(t){return{x:j(t.x)?t.x:window.pageXOffset,y:j(t.y)?t.y:window.pageYOffset}}function Ie(t){return{x:j(t.x)?t.x:0,y:j(t.y)?t.y:0}}function j(t){return typeof t=="number"}var Be=/^#\d/;function $t(t,e){var r=typeof t=="object";if(r&&typeof t.selector=="string"){var a=Be.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(a){var n=t.offset&&typeof t.offset=="object"?t.offset:{};n=Ie(n),e=Me(a,n)}else _t(t)&&(e=Pt(t))}else r&&_t(t)&&(e=Pt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var L=B&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function D(t,e){Kt();var r=window.history;try{if(e){var a=A({},r.state);a.key=tt(),r.replaceState(a,"",t)}else r.pushState({key:Ft(Vt())},"",t)}catch{window.location[e?"replace":"assign"](t)}}function ut(t){D(t,!0)}function At(t,e,r){var a=function(n){n>=t.length?r():t[n]?e(t[n],function(){a(n+1)}):a(n+1)};a(0)}var N={redirected:2,aborted:4,cancelled:8,duplicated:16};function He(t,e){return et(t,e,N.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ge(e)+'" via a navigation guard.')}function Ve(t,e){var r=et(t,e,N.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function St(t,e){return et(t,e,N.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function ze(t,e){return et(t,e,N.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function et(t,e,r,a){var n=new Error(a);return n._isRouter=!0,n.from=t,n.to=e,n.type=r,n}var Fe=["params","query","hash"];function Ge(t){if(typeof t=="string")return t;if("path"in t)return t.path;var e={};return Fe.forEach(function(r){r in t&&(e[r]=t[r])}),JSON.stringify(e,null,2)}function Z(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function rt(t,e){return Z(t)&&t._isRouter&&(e==null||t.type===e)}function Je(t){return function(e,r,a){var n=!1,i=0,o=null;Qt(t,function(s,c,u,f){if(typeof s=="function"&&s.cid===void 0){n=!0,i++;var h=Tt(function(p){Qe(p)&&(p=p.default),s.resolved=typeof p=="function"?p:Y.extend(p),u.components[f]=p,i--,i<=0&&a()}),m=Tt(function(p){var l="Failed to resolve async component "+f+": "+p;o||(o=Z(p)?p:new Error(l),a(o))}),y;try{y=s(h,m)}catch(p){m(p)}if(y)if(typeof y.then=="function")y.then(h,m);else{var v=y.component;v&&typeof v.then=="function"&&v.then(h,m)}}}),n||a()}}function Qt(t,e){return Wt(t.map(function(r){return Object.keys(r.components).map(function(a){return e(r.components[a],r.instances[a],r,a)})}))}function Wt(t){return Array.prototype.concat.apply([],t)}var Ke=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function Qe(t){return t.__esModule||Ke&&t[Symbol.toStringTag]==="Module"}function Tt(t){var e=!1;return function(){for(var r=[],a=arguments.length;a--;)r[a]=arguments[a];if(!e)return e=!0,t.apply(this,r)}}var S=function(e,r){this.router=e,this.base=We(r),this.current=k,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};S.prototype.listen=function(e){this.cb=e};S.prototype.onReady=function(e,r){this.ready?e():(this.readyCbs.push(e),r&&this.readyErrorCbs.push(r))};S.prototype.onError=function(e){this.errorCbs.push(e)};S.prototype.transitionTo=function(e,r,a){var n=this,i;try{i=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach(function(c){c(s)}),s}var o=this.current;this.confirmTransition(i,function(){n.updateRoute(i),r&&r(i),n.ensureURL(),n.router.afterHooks.forEach(function(s){s&&s(i,o)}),n.ready||(n.ready=!0,n.readyCbs.forEach(function(s){s(i)}))},function(s){a&&a(s),s&&!n.ready&&(!rt(s,N.redirected)||o!==k)&&(n.ready=!0,n.readyErrorCbs.forEach(function(c){c(s)}))})};S.prototype.confirmTransition=function(e,r,a){var n=this,i=this.current;this.pending=e;var o=function(p){!rt(p)&&Z(p)&&(n.errorCbs.length?n.errorCbs.forEach(function(l){l(p)}):console.error(p)),a&&a(p)},s=e.matched.length-1,c=i.matched.length-1;if(qt(e,i)&&s===c&&e.matched[s]===i.matched[c])return this.ensureURL(),e.hash&&C(this.router,i,e,!1),o(Ve(i,e));var u=Xe(this.current.matched,e.matched),f=u.updated,h=u.deactivated,m=u.activated,y=[].concat(De(h),this.router.beforeHooks,Ze(f),m.map(function(p){return p.beforeEnter}),Je(m)),v=function(p,l){if(n.pending!==e)return o(St(i,e));try{p(e,i,function(g){g===!1?(n.ensureURL(!0),o(ze(i,e))):Z(g)?(n.ensureURL(!0),o(g)):typeof g=="string"||typeof g=="object"&&(typeof g.path=="string"||typeof g.name=="string")?(o(He(i,e)),typeof g=="object"&&g.replace?n.replace(g):n.push(g)):l(g)})}catch(g){o(g)}};At(y,v,function(){var p=tr(m),l=p.concat(n.router.resolveHooks);At(l,v,function(){if(n.pending!==e)return o(St(i,e));n.pending=null,r(e),n.router.app&&n.router.app.$nextTick(function(){Ut(e)})})})};S.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)};S.prototype.setupListeners=function(){};S.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=k,this.pending=null};function We(t){if(!t)if(B){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return t.charAt(0)!=="/"&&(t="/"+t),t.replace(/\/$/,"")}function Xe(t,e){var r,a=Math.max(t.length,e.length);for(r=0;r<a&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function dt(t,e,r,a){var n=Qt(t,function(i,o,s,c){var u=Ye(i,e);if(u)return Array.isArray(u)?u.map(function(f){return r(f,o,s,c)}):r(u,o,s,c)});return Wt(a?n.reverse():n)}function Ye(t,e){return typeof t!="function"&&(t=Y.extend(t)),t.options[e]}function De(t){return dt(t,"beforeRouteLeave",Xt,!0)}function Ze(t){return dt(t,"beforeRouteUpdate",Xt)}function Xt(t,e){if(e)return function(){return t.apply(e,arguments)}}function tr(t){return dt(t,"beforeRouteEnter",function(e,r,a,n){return er(e,a,n)})}function er(t,e,r){return function(n,i,o){return t(n,i,function(s){typeof s=="function"&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(s)),o(s)})}}var Yt=function(t){function e(r,a){t.call(this,r,a),this._startLocation=I(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var a=this;if(!(this.listeners.length>0)){var n=this.router,i=n.options.scrollBehavior,o=L&&i;o&&this.listeners.push(Jt());var s=function(){var c=a.current,u=I(a.base);a.current===k&&u===a._startLocation||a.transitionTo(u,function(f){o&&C(n,f,c,!0)})};window.addEventListener("popstate",s),this.listeners.push(function(){window.removeEventListener("popstate",s)})}},e.prototype.go=function(a){window.history.go(a)},e.prototype.push=function(a,n,i){var o=this,s=this,c=s.current;this.transitionTo(a,function(u){D(T(o.base+u.fullPath)),C(o.router,u,c,!1),n&&n(u)},i)},e.prototype.replace=function(a,n,i){var o=this,s=this,c=s.current;this.transitionTo(a,function(u){ut(T(o.base+u.fullPath)),C(o.router,u,c,!1),n&&n(u)},i)},e.prototype.ensureURL=function(a){if(I(this.base)!==this.current.fullPath){var n=T(this.base+this.current.fullPath);a?D(n):ut(n)}},e.prototype.getCurrentLocation=function(){return I(this.base)},e}(S);function I(t){var e=window.location.pathname,r=e.toLowerCase(),a=t.toLowerCase();return t&&(r===a||r.indexOf(T(a+"/"))===0)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Dt=function(t){function e(r,a,n){t.call(this,r,a),!(n&&rr(this.base))&&Ct()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var a=this;if(!(this.listeners.length>0)){var n=this.router,i=n.options.scrollBehavior,o=L&&i;o&&this.listeners.push(Jt());var s=function(){var u=a.current;!Ct()||a.transitionTo(J(),function(f){o&&C(a.router,f,u,!0),L||K(f.fullPath)})},c=L?"popstate":"hashchange";window.addEventListener(c,s),this.listeners.push(function(){window.removeEventListener(c,s)})}},e.prototype.push=function(a,n,i){var o=this,s=this,c=s.current;this.transitionTo(a,function(u){Lt(u.fullPath),C(o.router,u,c,!1),n&&n(u)},i)},e.prototype.replace=function(a,n,i){var o=this,s=this,c=s.current;this.transitionTo(a,function(u){K(u.fullPath),C(o.router,u,c,!1),n&&n(u)},i)},e.prototype.go=function(a){window.history.go(a)},e.prototype.ensureURL=function(a){var n=this.current.fullPath;J()!==n&&(a?Lt(n):K(n))},e.prototype.getCurrentLocation=function(){return J()},e}(S);function rr(t){var e=I(t);if(!/^\/#/.test(e))return window.location.replace(T(t+"/#"+e)),!0}function Ct(){var t=J();return t.charAt(0)==="/"?!0:(K("/"+t),!1)}function J(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ct(t){var e=window.location.href,r=e.indexOf("#"),a=r>=0?e.slice(0,r):e;return a+"#"+t}function Lt(t){L?D(ct(t)):window.location.hash=t}function K(t){L?ut(ct(t)):window.location.replace(ct(t))}var nr=function(t){function e(r,a){t.call(this,r,a),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(a,n,i){var o=this;this.transitionTo(a,function(s){o.stack=o.stack.slice(0,o.index+1).concat(s),o.index++,n&&n(s)},i)},e.prototype.replace=function(a,n,i){var o=this;this.transitionTo(a,function(s){o.stack=o.stack.slice(0,o.index).concat(s),n&&n(s)},i)},e.prototype.go=function(a){var n=this,i=this.index+a;if(!(i<0||i>=this.stack.length)){var o=this.stack[i];this.confirmTransition(o,function(){var s=n.current;n.index=i,n.updateRoute(o),n.router.afterHooks.forEach(function(c){c&&c(o,s)})},function(s){rt(s,N.duplicated)&&(n.index=i)})}},e.prototype.getCurrentLocation=function(){var a=this.stack[this.stack.length-1];return a?a.fullPath:"/"},e.prototype.ensureURL=function(){},e}(S),R=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ke(e.routes||[],this);var r=e.mode||"hash";switch(this.fallback=r==="history"&&!L&&e.fallback!==!1,this.fallback&&(r="hash"),B||(r="abstract"),this.mode=r,r){case"history":this.history=new Yt(this,e.base);break;case"hash":this.history=new Dt(this,e.base,this.fallback);break;case"abstract":this.history=new nr(this,e.base);break}},Zt={currentRoute:{configurable:!0}};R.prototype.match=function(e,r,a){return this.matcher.match(e,r,a)};Zt.currentRoute.get=function(){return this.history&&this.history.current};R.prototype.init=function(e){var r=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var o=r.apps.indexOf(e);o>-1&&r.apps.splice(o,1),r.app===e&&(r.app=r.apps[0]||null),r.app||r.history.teardown()}),!this.app){this.app=e;var a=this.history;if(a instanceof Yt||a instanceof Dt){var n=function(o){var s=a.current,c=r.options.scrollBehavior,u=L&&c;u&&"fullPath"in o&&C(r,o,s,!1)},i=function(o){a.setupListeners(),n(o)};a.transitionTo(a.getCurrentLocation(),i,i)}a.listen(function(o){r.apps.forEach(function(s){s._route=o})})}};R.prototype.beforeEach=function(e){return yt(this.beforeHooks,e)};R.prototype.beforeResolve=function(e){return yt(this.resolveHooks,e)};R.prototype.afterEach=function(e){return yt(this.afterHooks,e)};R.prototype.onReady=function(e,r){this.history.onReady(e,r)};R.prototype.onError=function(e){this.history.onError(e)};R.prototype.push=function(e,r,a){var n=this;if(!r&&!a&&typeof Promise<"u")return new Promise(function(i,o){n.history.push(e,i,o)});this.history.push(e,r,a)};R.prototype.replace=function(e,r,a){var n=this;if(!r&&!a&&typeof Promise<"u")return new Promise(function(i,o){n.history.replace(e,i,o)});this.history.replace(e,r,a)};R.prototype.go=function(e){this.history.go(e)};R.prototype.back=function(){this.go(-1)};R.prototype.forward=function(){this.go(1)};R.prototype.getMatchedComponents=function(e){var r=e?e.matched?e:this.resolve(e).route:this.currentRoute;return r?[].concat.apply([],r.matched.map(function(a){return Object.keys(a.components).map(function(n){return a.components[n]})})):[]};R.prototype.resolve=function(e,r,a){r=r||this.history.current;var n=vt(e,r,a,this),i=this.match(n,r),o=i.redirectedFrom||i.fullPath,s=this.history.base,c=ar(s,o,this.mode);return{location:n,route:i,href:c,normalizedTo:n,resolved:i}};R.prototype.getRoutes=function(){return this.matcher.getRoutes()};R.prototype.addRoute=function(e,r){this.matcher.addRoute(e,r),this.history.current!==k&&this.history.transitionTo(this.history.getCurrentLocation())};R.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==k&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(R.prototype,Zt);function yt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function ar(t,e,r){var a=r==="hash"?"#"+e:e;return t?T(t+"/"+a):a}R.install=ot;R.version="3.5.3";R.isNavigationFailure=rt;R.NavigationFailureType=N;R.START_LOCATION=k;B&&window.Vue&&window.Vue.use(R);const kt=R,ir="all-in-one-seo-pack",te=(t,e,r)=>{const a=e[r];return a?(...n)=>{t.next(...n);const i=te(t,e,r+1);a({...t,next:i})}:t.next},pr=t=>{ee.use(kt);const e=new kt({base:`wp-admin/admin.php?page=aioseo-${window.aioseo.page}`,routes:t,scrollBehavior(r,a,n){return n||(r.hash?{selector:r.hash}:{x:0,y:0})}});return e.beforeEach(async(r,a,n)=>{var o,s,c;if(!d.state.loaded){const{internalOptions:u,options:f,dynamicOptions:h,internalNetworkOptions:m,networkOptions:y,settings:v,notifications:p,helpPanel:l,addons:g,tags:b,license:w,backups:x,redirects:E,linkAssistant:O,indexNow:P}=await re(e.app.$http);e.app.$set(d.state,"redirects",_({...d.state.redirects},{...E})),e.app.$set(d.state,"linkAssistant",_({...d.state.linkAssistant},{...O})),e.app.$set(d.state,"index-now",_({...d.state["index-now"]},{...P})),e.app.$set(d.state,"internalOptions",_({...d.state.internalOptions},{...u})),e.app.$set(d.state,"options",_({...d.state.options},{...f})),e.app.$set(d.state,"dynamicOptions",_({...d.state.dynamicOptions},{...h})),e.app.$set(d.state,"settings",_({...d.state.settings},{...v})),e.app.$set(d.state,"notifications",_({...d.state.notifications},{...p})),e.app.$set(d.state,"helpPanel",_({...d.state.helpPanel},{...l})),e.app.$set(d.state,"addons",_([...d.state.addons],[...g])),e.app.$set(d.state,"backups",_([...d.state.backups],[...x])),e.app.$set(d.state,"tags",_({...d.state.tags},{...b})),e.app.$set(d.state,"license",_({...d.state.license},{...w})),e.app.$set(d.state,"loaded",!0),e.app.$set(d.state,"internalNetworkOptions",_({...d.state.internalNetworkOptions},{...m})),e.app.$set(d.state,"networkOptions",_({...d.state.networkOptions},{...y})),e.app.$set(d.state,"networkBackups",_({...d.state.networkBackups},{...(o=window.aioseo.data.network)==null?void 0:o.backups})),e.app.$set(d.state,"networkData",_({...d.state.networkData},{sites:(s=window.aioseo.data.network)==null?void 0:s.sites,activeSites:(c=window.aioseo.data.network)==null?void 0:c.activeSites})),d.commit("original/setOriginalOptions",JSON.parse(JSON.stringify(d.state.options))),d.commit("original/setOriginalDynamicOptions",JSON.parse(JSON.stringify(d.state.dynamicOptions))),d.commit("original/setOriginalNetworkOptions",JSON.parse(JSON.stringify(d.state.networkOptions))),d.state.redirects&&d.state.redirects.options&&d.commit("original/setOriginalRedirectOptions",JSON.parse(JSON.stringify(d.state.redirects.options))),d.state["index-now"]&&d.state["index-now"].options&&d.commit("original/setOriginalIndexNowOptions",JSON.parse(JSON.stringify(d.state["index-now"].options))),window.addEventListener("beforeunload",$=>{if(!d.getters["original/isDirty"])return;const q=ne("Are you sure you want to leave? you have unsaved changes!",ir);return($||window.event).returnValue=q,q}),d.dispatch("ping")}const i=r.meta.access;if(!e.app.$allowed(i))return r.meta.home!==a.name?e.replace({name:r.meta.home}):null;if(r.meta.middleware){const u=Array.isArray(r.meta.middleware)?r.meta.middleware:[r.meta.middleware],f={from:a,next:n,router:e,to:r},h=te(f,u,1);return u[0]({...f,next:h})}return d.commit("redirects/resetPageNumbers"),n()}),e},or="modulepreload",sr=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},Nt={},lr=function(e,r,a){if(!r||r.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=sr(i,a),i in Nt)return;Nt[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!a)for(let f=n.length-1;f>=0;f--){const h=n[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":or,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},hr=(t,e)=>{const r=t[e];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((a,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var vr=function(t,e,r){var a=(r||{}).moduleName||"route";t.registerModule(a,{namespaced:!0,state:ft(e.currentRoute),mutations:{ROUTE_CHANGED:function(u,f){t.state[a]=ft(f.to,f.from)}}});var n=!1,i,o=t.watch(function(c){return c[a]},function(c){var u=c.fullPath;u!==i&&(i!=null&&(n=!0,e.push(c)),i=u)},{sync:!0}),s=e.afterEach(function(c,u){if(n){n=!1;return}i=c.fullPath,t.commit(a+"/ROUTE_CHANGED",{to:c,from:u})});return function(){s!=null&&s(),o!=null&&o(),t.unregisterModule(a)}};function ft(t,e){var r={name:t.name,path:t.path,hash:t.hash,query:t.query,params:t.params,fullPath:t.fullPath,meta:t.meta};return e&&(r.from=ft(e)),Object.freeze(r)}export{hr as _,lr as a,vr as b,pr as s};
