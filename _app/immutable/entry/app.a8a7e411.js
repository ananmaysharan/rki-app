import{S as B,i as C,s as U,a as j,e as d,c as z,b as E,d as h,f as P,g as w,h as g,j as W,o as F,k as G,l as H,m as J,n as D,p,q as K,r as M,u as Q,v as A,t as X,w as I,x as v,y as k,z as O,A as R,B as L}from"../chunks/index.4dd7418a.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},m=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in T)return;T[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":Y,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},se={};function $(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=v(s,f(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),E(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){A();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=v(s,f(t)),t[12](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&g(n),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=v(s,f(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),E(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){A();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=v(s,f(t)),t[11](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&g(n),e&&L(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=v(s,f(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),E(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){A();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=v(s,f(t)),t[10](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&g(n),e&&L(e,t)}}}function V(a){let e,n=a[6]&&y(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(g),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,s){E(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=y(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function y(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,s,f;const t=[x,$],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&V(a);return{c(){n.c(),i=j(),o&&o.c(),s=d()},l(l){n.l(l),i=z(l),o&&o.l(l),s=d()},m(l,u){r[e].m(l,u),E(l,i,u),o&&o.m(l,u),E(l,s,u),f=!0},p(l,[u]){let b=e;e=_(l),e===b?r[e].p(l,u):(A(),h(r[b],1,1,()=>{r[b]=null}),P(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=V(l),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(l){f||(w(n),f=!0)},o(l){h(n),f=!1},d(l){r[e].d(l),l&&g(i),o&&o.d(l),l&&g(s)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;W(i.page.notify);let l=!1,u=!1,b=null;F(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),X().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,l=!0),c});function N(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function q(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,f,r,_,o,l,u,b,i,s,N,S,q]}class re extends B{constructor(e){super(),C(this,e,ne,te,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>m(()=>import("../nodes/0.4bba7eb2.js"),["../nodes/0.4bba7eb2.js","../chunks/index.4dd7418a.js","../chunks/Icon.ca1a9f14.js","../chunks/paths.2cccd072.js","../assets/0.8ec064dd.css"],import.meta.url),()=>m(()=>import("../nodes/1.c44d31c1.js"),["../nodes/1.c44d31c1.js","../chunks/index.4dd7418a.js","../chunks/singletons.809b97f6.js","../chunks/index.b26fe15c.js","../chunks/paths.2cccd072.js"],import.meta.url),()=>m(()=>import("../nodes/2.632c50e1.js"),["../nodes/2.632c50e1.js","../chunks/index.4dd7418a.js","../assets/styles.7b802e5f.css"],import.meta.url),()=>m(()=>import("../nodes/3.91f7c6b2.js"),["../nodes/3.91f7c6b2.js","../chunks/index.4dd7418a.js","../chunks/paths.2cccd072.js","../assets/styles.7b802e5f.css"],import.meta.url),()=>m(()=>import("../nodes/4.21ace175.js"),["../nodes/4.21ace175.js","../chunks/index.4dd7418a.js","../assets/styles.7b802e5f.css"],import.meta.url),()=>m(()=>import("../nodes/5.ba926a2e.js"),["../nodes/5.ba926a2e.js","../chunks/index.4dd7418a.js","../assets/styles.7b802e5f.css"],import.meta.url),()=>m(()=>import("../nodes/6.5d2d0a14.js"),["../nodes/6.5d2d0a14.js","../chunks/index.4dd7418a.js","../chunks/paths.2cccd072.js","../chunks/WestQueenWest.03c3e28f.js","../assets/6.fc3bdc61.css","../assets/styles.7b802e5f.css"],import.meta.url),()=>m(()=>import("../nodes/7.52b83a57.js"),["../nodes/7.52b83a57.js","../chunks/index.4dd7418a.js","../chunks/Icon.ca1a9f14.js","../chunks/WestQueenWest.03c3e28f.js","../chunks/mapbox-gl.26fbe253.js","../assets/mapbox-gl.1bf54bae.css","../chunks/index.b26fe15c.js","../assets/7.ecf70882.css","../assets/styles.7b802e5f.css"],import.meta.url),()=>m(()=>import("../nodes/8.5f358060.js"),["../nodes/8.5f358060.js","../chunks/index.4dd7418a.js","../chunks/singletons.809b97f6.js","../chunks/index.b26fe15c.js","../chunks/paths.2cccd072.js","../chunks/mapbox-gl.26fbe253.js","../assets/mapbox-gl.1bf54bae.css","../chunks/Icon.ca1a9f14.js","../assets/8.458d32e8.css","../assets/styles.7b802e5f.css"],import.meta.url),()=>m(()=>import("../nodes/9.4365608b.js"),["../nodes/9.4365608b.js","../chunks/index.4dd7418a.js","../assets/styles.7b802e5f.css"],import.meta.url)],ae=[],le={"/":[2],"/casestudies":[3],"/casestudies/edmonton":[4],"/casestudies/montreal":[5],"/casestudies/toronto":[6],"/casestudies/toronto/westqueenwest":[-8],"/map":[8],"/reports":[9]},fe={handleError:({error:a})=>{console.error(a)}};export{le as dictionary,fe as hooks,se as matchers,oe as nodes,re as root,ae as server_loads};