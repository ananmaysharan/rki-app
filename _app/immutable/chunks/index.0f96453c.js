import{S as X,i as Z,s as J,k as R,q as W,a as M,y as me,l as S,m as O,r as K,h as b,c as U,z as he,n as E,b as z,F as p,A as ge,G as je,g as P,d as N,B as ve,E as Se,u as oe,N as $e,v as et,f as tt,P as rt,o as _e,Q as nt,R as Me,H as ie,I as se,J as le,K as ue,w as j,T as Ae,U as ce,V as at,W as ot,X as F}from"./index.33e32cf3.js";import{I as Ue}from"./Icon.a5a3afcc.js";import{m as it}from"./index.8f920d0b.js";import{m as Te}from"./Legend.a0bd7103.js";function st(e){let t,r,n,a,o,i;return o=new Ue({props:{icon:"iconoir:nav-arrow-down",color:"#002a41",width:"48"}}),{c(){t=R("h4"),r=W("Scroll to begin"),n=M(),a=R("div"),me(o.$$.fragment),this.h()},l(s){t=S(s,"H4",{class:!0});var l=O(t);r=K(l,"Scroll to begin"),l.forEach(b),n=U(s),a=S(s,"DIV",{class:!0});var v=O(a);he(o.$$.fragment,v),v.forEach(b),this.h()},h(){E(t,"class","svelte-1m2z484"),E(a,"class","bounce svelte-1m2z484")},m(s,l){z(s,t,l),p(t,r),z(s,n,l),z(s,a,l),ge(o,a,null),i=!0},p:je,i(s){i||(P(o.$$.fragment,s),i=!0)},o(s){N(o.$$.fragment,s),i=!1},d(s){s&&b(t),s&&b(n),s&&b(a),ve(o)}}}class lt extends X{constructor(t){super(),Z(this,t,null,st,J,{})}}function ut(e){let t,r,n,a,o,i,s,l,v,_,d,g,f,u;return f=new lt({}),{c(){t=R("div"),r=R("div"),n=R("div"),a=R("img"),i=M(),s=R("h1"),l=W(e[0]),v=M(),_=R("h2"),d=W(e[1]),g=M(),me(f.$$.fragment),this.h()},l(h){t=S(h,"DIV",{class:!0});var y=O(t);r=S(y,"DIV",{class:!0});var w=O(r);n=S(w,"DIV",{class:!0});var A=O(n);a=S(A,"IMG",{src:!0,alt:!0}),A.forEach(b),i=U(w),s=S(w,"H1",{class:!0});var C=O(s);l=K(C,e[0]),C.forEach(b),v=U(w),_=S(w,"H2",{class:!0});var k=O(_);d=K(k,e[1]),k.forEach(b),w.forEach(b),g=U(y),he(f.$$.fragment,y),y.forEach(b),this.h()},h(){Se(a.src,o=e[2])||E(a,"src",o),E(a,"alt","street"),E(n,"class","card-img svelte-iwz1kt"),E(s,"class","svelte-iwz1kt"),E(_,"class","svelte-iwz1kt"),E(r,"class","title svelte-iwz1kt"),E(t,"class","blueprint svelte-iwz1kt")},m(h,y){z(h,t,y),p(t,r),p(r,n),p(n,a),p(r,i),p(r,s),p(s,l),p(r,v),p(r,_),p(_,d),p(t,g),ge(f,t,null),u=!0},p(h,[y]){(!u||y&4&&!Se(a.src,o=h[2]))&&E(a,"src",o),(!u||y&1)&&oe(l,h[0]),(!u||y&2)&&oe(d,h[1])},i(h){u||(P(f.$$.fragment,h),u=!0)},o(h){N(f.$$.fragment,h),u=!1},d(h){h&&b(t),ve(f)}}}function ct(e,t,r){let{name:n}=t,{location:a}=t,{image:o}=t;return e.$$set=i=>{"name"in i&&r(0,n=i.name),"location"in i&&r(1,a=i.location),"image"in i&&r(2,o=i.image)},[n,a,o]}class lr extends X{constructor(t){super(),Z(this,t,ct,ut,J,{name:0,location:1,image:2})}}const{document:xe}=Me;function Oe(e){let t;const r=e[17].default,n=ie(r,e,e[16],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,o){n&&n.m(a,o),t=!0},p(a,o){n&&n.p&&(!t||o&65536)&&se(n,r,a,a[16],t?ue(r,a[16],o,null):le(a[16]),null)},i(a){t||(P(n,a),t=!0)},o(a){N(n,a),t=!1},d(a){n&&n.d(a)}}}function ft(e){let t,r,n,a,o=e[2]&&Oe(e);return{c(){t=R("link"),r=M(),n=R("div"),o&&o.c(),this.h()},l(i){const s=$e("svelte-1a490gk",xe.head);t=S(s,"LINK",{href:!0,rel:!0}),s.forEach(b),r=U(i),n=S(i,"DIV",{id:!0,class:!0});var l=O(n);o&&o.l(l),l.forEach(b),this.h()},h(){E(t,"href","https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"),E(t,"rel","stylesheet"),E(n,"id",e[0]),E(n,"class","map svelte-1gdmisp")},m(i,s){p(xe.head,t),z(i,r,s),z(i,n,s),o&&o.m(n,null),e[18](n),a=!0},p(i,[s]){i[2]?o?(o.p(i,s),s&4&&P(o,1)):(o=Oe(i),o.c(),P(o,1),o.m(n,null)):o&&(et(),N(o,1,1,()=>{o=null}),tt()),(!a||s&1)&&E(n,"id",i[0])},i(i){a||(P(o),a=!0)},o(i){N(o),a=!1},d(i){b(t),i&&b(r),i&&b(n),o&&o.d(),e[18](null)}}}function dt(e=1e3){return new Promise(t=>setTimeout(t,e))}function mt(e,t,r){let{$$slots:n={},$$scope:a}=t;const o=rt();let{map:i}=t,{id:s="map"}=t,{location:l={lng:15,lat:45,zoom:1}}=t;Te.accessToken="pk.eyJ1IjoiYW5hbm1heSIsImEiOiJjbDk0azNmY3oxa203M3huMzhyZndlZDRoIn0.1L-fBYplQMuwz0LGctNeiA";let{style:v="mapbox://styles/mapbox/light-v11"}=t,{options:_={}}=t,{minzoom:d=0}=t,{maxzoom:g=15}=t,{tabbable:f=!1}=t,{zoom:u=null}=t,{center:h=null}=t,{pitch:y=null}=t,{bearing:w=null}=t,{interactive:A=!0}=t,{attribution:C=!1}=t,k,T={},D=!1;l.bounds?T.bounds=l.bounds:l.lng&&l.lat&&(T.center=[+l.lng,+l.lat],l.zoom&&(T.zoom=+l.zoom),l.pitch&&(T.pitch=+l.pitch),l.bearing&&(T.bearing=+l.bearing)),C||(T.attributionControl=!1),T={...T,..._},_e(()=>{r(3,i=new Te.Map({container:k,style:v,minZoom:d,maxZoom:g,interactive:A,...T})),it.set(i),i.on("load",c=>{r(4,u=i.getZoom()),r(5,h=i.getCenter()),r(6,y=i.getPitch()),r(7,w=i.getBearing()),r(2,D=!0),!f&&document.querySelector(`#${s} canvas`)&&(document.querySelector(`#${s} canvas`).tabIndex="-1"),o("load",{event:c})}),document.body.scrollIntoView()}),nt(async()=>{await dt(250),i&&i.remove(),r(3,i=null)});function Q(c){i&&i.setStyle(c),o("style",{style:c})}function L(c){j[c?"unshift":"push"](()=>{k=c,r(1,k)})}return e.$$set=c=>{"map"in c&&r(3,i=c.map),"id"in c&&r(0,s=c.id),"location"in c&&r(8,l=c.location),"style"in c&&r(9,v=c.style),"options"in c&&r(10,_=c.options),"minzoom"in c&&r(11,d=c.minzoom),"maxzoom"in c&&r(12,g=c.maxzoom),"tabbable"in c&&r(13,f=c.tabbable),"zoom"in c&&r(4,u=c.zoom),"center"in c&&r(5,h=c.center),"pitch"in c&&r(6,y=c.pitch),"bearing"in c&&r(7,w=c.bearing),"interactive"in c&&r(14,A=c.interactive),"attribution"in c&&r(15,C=c.attribution),"$$scope"in c&&r(16,a=c.$$scope)},e.$$.update=()=>{e.$$.dirty&512&&Q(v)},[s,k,D,i,u,h,y,w,l,v,_,d,g,f,A,C,a,n,L]}class ur extends X{constructor(t){super(),Z(this,t,mt,ft,J,{map:3,id:0,location:8,style:9,options:10,minzoom:11,maxzoom:12,tabbable:13,zoom:4,center:5,pitch:6,bearing:7,interactive:14,attribution:15})}}function ht(e){let t,r,n,a,o,i,s,l,v,_,d;return r=new Ue({props:{icon:"material-symbols:photo",width:"24",color:"#222"}}),{c(){t=R("button"),me(r.$$.fragment),n=M(),a=R("label"),o=R("input"),i=W(`
    Photos: `),s=W(e[1]),this.h()},l(g){t=S(g,"BUTTON",{class:!0});var f=O(t);he(r.$$.fragment,f),n=U(f),a=S(f,"LABEL",{class:!0});var u=O(a);o=S(u,"INPUT",{type:!0,class:!0}),i=K(u,`
    Photos: `),s=K(u,e[1]),u.forEach(b),f.forEach(b),this.h()},h(){E(o,"type","checkbox"),E(o,"class","svelte-e6u80d"),E(a,"class","svelte-e6u80d"),E(t,"class",l=Ae(e[0]?"layerOn":"layerOff")+" svelte-e6u80d")},m(g,f){z(g,t,f),ge(r,t,null),p(t,n),p(t,a),p(a,o),o.checked=e[0],p(a,i),p(a,s),v=!0,_||(d=[ce(o,"change",e[4]),ce(o,"change",e[2])],_=!0)},p(g,[f]){f&1&&(o.checked=g[0]),(!v||f&2)&&oe(s,g[1]),(!v||f&1&&l!==(l=Ae(g[0]?"layerOn":"layerOff")+" svelte-e6u80d"))&&E(t,"class",l)},i(g){v||(P(r.$$.fragment,g),v=!0)},o(g){N(r.$$.fragment,g),v=!1},d(g){g&&b(t),ve(r),_=!1,at(d)}}}function gt(e,t,r){let{map:n}=t,a=!0,o="On";function i(){if(n){const l="photos",v=a?1:0;n.setPaintProperty(l,"icon-opacity",v),r(1,o=a?"On":"Off")}}_e(()=>{i()});function s(){a=this.checked,r(0,a)}return e.$$set=l=>{"map"in l&&r(3,n=l.map)},[a,o,i,n,s]}class cr extends X{constructor(t){super(),Z(this,t,gt,ht,J,{map:3})}}const{window:qe}=Me,vt=e=>({}),ke=e=>({}),_t=e=>({}),Ce=e=>({});function bt(e){let t,r,n,a,o,i,s,l,v;ot(e[21]);const _=e[20].background,d=ie(_,e,e[19],Ce),g=e[20].foreground,f=ie(g,e,e[19],ke);return{c(){t=R("svelte-scroller-outer"),r=R("svelte-scroller-background-container"),n=R("svelte-scroller-background"),d&&d.c(),o=M(),i=R("svelte-scroller-foreground"),f&&f.c(),this.h()},l(u){t=S(u,"SVELTE-SCROLLER-OUTER",{class:!0});var h=O(t);r=S(h,"SVELTE-SCROLLER-BACKGROUND-CONTAINER",{class:!0,style:!0});var y=O(r);n=S(y,"SVELTE-SCROLLER-BACKGROUND",{class:!0});var w=O(n);d&&d.l(w),w.forEach(b),y.forEach(b),o=U(h),i=S(h,"SVELTE-SCROLLER-FOREGROUND",{class:!0});var A=O(i);f&&f.l(A),A.forEach(b),h.forEach(b),this.h()},h(){F(n,"class","svelte-xdbafy"),F(r,"class","background-container svelte-xdbafy"),F(r,"style",a=""+(e[5]+e[4])),F(i,"class","svelte-xdbafy"),F(t,"class","svelte-xdbafy")},m(u,h){z(u,t,h),p(t,r),p(r,n),d&&d.m(n,null),e[22](n),p(t,o),p(t,i),f&&f.m(i,null),e[23](i),e[24](t),s=!0,l||(v=ce(qe,"resize",e[21]),l=!0)},p(u,h){d&&d.p&&(!s||h[0]&524288)&&se(d,_,u,u[19],s?ue(_,u[19],h,_t):le(u[19]),Ce),(!s||h[0]&48&&a!==(a=""+(u[5]+u[4])))&&F(r,"style",a),f&&f.p&&(!s||h[0]&524288)&&se(f,g,u,u[19],s?ue(g,u[19],h,vt):le(u[19]),ke)},i(u){s||(P(d,u),P(f,u),s=!0)},o(u){N(d,u),N(f,u),s=!1},d(u){u&&b(t),d&&d.d(u),e[22](null),f&&f.d(u),e[23](null),e[24](null),l=!1,v()}}}const I=[];let $;if(typeof window<"u"){const e=()=>I.forEach(t=>t());window.addEventListener("scroll",e),window.addEventListener("resize",e)}if(typeof IntersectionObserver<"u"){const e=new Map,t=new IntersectionObserver((r,n)=>{r.forEach(a=>{const o=e.get(a.target),i=I.indexOf(o);a.isIntersecting?i===-1&&I.push(o):(o(),i!==-1&&I.splice(i,1))})},{rootMargin:"400px 0px"});$={add:({outer:r,update:n})=>{const{top:a,bottom:o}=r.getBoundingClientRect();a<window.innerHeight&&o>0&&I.push(n),e.set(r,n),t.observe(r)},remove:({outer:r,update:n})=>{const a=I.indexOf(n);a!==-1&&I.splice(a,1),e.delete(r),t.unobserve(r)}}}else $={add:({update:e})=>{I.push(e)},remove:({update:e})=>{const t=I.indexOf(e);t!==-1&&I.splice(t,1)}};function yt(e,t,r){let n,a,o,i,s,{$$slots:l={},$$scope:v}=t,{top:_=0}=t,{bottom:d=1}=t,{threshold:g=.5}=t,{query:f="section"}=t,{parallax:u=!1}=t,{index:h=0}=t,{count:y=0}=t,{offset:w=0}=t,{progress:A=0}=t,{visible:C=!1}=t,k,T,D,Q,L,c=0,q,H=0,te=1;_e(()=>{L=T.querySelectorAll(f),r(7,y=L.length),re();const m={outer:k,update:re};return $.add(m),()=>$.remove(m)});function re(){if(!T)return;const m=k.getBoundingClientRect();Q=m.left,r(18,te=m.right-Q);const B=T.getBoundingClientRect(),ye=D.getBoundingClientRect();r(10,C=B.top<c&&B.bottom>0);const ne=B.bottom-B.top,pe=ye.bottom-ye.top,ae=a-n;r(9,A=(n-B.top)/(ne-ae)),A<=0?(r(17,H=0),r(16,q=!1)):A>=1?(r(17,H=u?ne-pe:ne-ae),r(16,q=!1)):(r(17,H=u?Math.round(n-A*(pe-ae)):n),r(16,q=!0));for(let Y=0;Y<L.length;Y++){const Qe=L[Y],{top:Ee}=Qe.getBoundingClientRect(),we=L[Y+1],Re=we?we.getBoundingClientRect().top:B.bottom;if(r(8,w=(o-Ee)/(Re-Ee)),Re>=o){r(6,h=Y);break}}}function Ke(){r(0,c=qe.innerHeight)}function Xe(m){j[m?"unshift":"push"](()=>{D=m,r(3,D)})}function Ze(m){j[m?"unshift":"push"](()=>{T=m,r(2,T)})}function Je(m){j[m?"unshift":"push"](()=>{k=m,r(1,k)})}return e.$$set=m=>{"top"in m&&r(11,_=m.top),"bottom"in m&&r(12,d=m.bottom),"threshold"in m&&r(13,g=m.threshold),"query"in m&&r(14,f=m.query),"parallax"in m&&r(15,u=m.parallax),"index"in m&&r(6,h=m.index),"count"in m&&r(7,y=m.count),"offset"in m&&r(8,w=m.offset),"progress"in m&&r(9,A=m.progress),"visible"in m&&r(10,C=m.visible),"$$scope"in m&&r(19,v=m.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&2049&&(n=Math.round(_*c)),e.$$.dirty[0]&4097&&(a=Math.round(d*c)),e.$$.dirty[0]&8193&&(o=Math.round(g*c)),e.$$.dirty[0]&47104&&re(),e.$$.dirty[0]&196608&&r(5,i=`
		position: ${q?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${H}px);
		z-index: 1;
	`),e.$$.dirty[0]&327680&&r(4,s=q?`width:${te}px;`:"")},[c,k,T,D,s,i,h,y,w,A,C,_,d,g,f,u,q,H,te,v,l,Ke,Xe,Ze,Je]}class fr extends X{constructor(t){super(),Z(this,t,yt,bt,J,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}}var pt={equal:"eq",notEqual:"ne",lessThan:"lt",greaterThan:"gt",lessOrEqual:"lte",greaterOrEqual:"gte",include:"in",notInclude:"nin"},Ie={UPLOAD:"upload",FETCH:"fetch",PRIVATE:"private",AUTHENTICATED:"authenticated",SPRITE:"sprite",FACEBOOK:"facebook",TWITTER:"twitter",YOUTUBE:"youtube",VIMEO:"vimeo",MULTI:"multi",INSTAGRAM:"instagram",HULU:"hulu",ANIMOTO:"animoto",DAILYMOTION:"dailymotion"},fe={IMAGE:"image",VIDEO:"video",RAW:"raw"},Et={context:"ctx",structureMetadata:"md"},Pe={"image/upload":"images","image/private":"private_images","image/authenticated":"authenticated_images","raw/upload":"files","video/upload":"videos"},wt={angle:"a",rotate:"a",background:"b",color:"co",colorSpace:"cs",customFunction:"fn",defaultImage:"d",density:"dn",dpr:"dpr",opacity:"o",format:"f",gravity:"g",overlay:"l",page:"pg",prefix:"p",quality:"q",radius:"r",bitRate:"br",keyframeInterval:"ki",audioCodec:"ac",audioFrequency:"af",delay:"dl",ocr:"ocr",streamingProfile:"sp",transformation:"t",underlay:"u",videoCodec:"vc",videoSampling:"vs",zoom:"z"},Rt={"=":"eq","!=":"ne","<":"lt",">":"gt","<=":"lte",">=":"gte","&&":"and","||":"or","*":"mul","/":"div","+":"add","-":"sub","^":"pow"},Be={width:"w",height:"h",x:"x",y:"y",quality:"q",if:"if",aspectRatio:"ar",rotate:"a",opacity:"o",radius:"r",dpr:"dpr",effect:"e",border:"bo",currentPage:"cp",preview:"preview:duration",duration:"du",faceCount:"fc",initialAspectRatio:"iar",initialDuration:"idu",initialHeight:"ih",initialWidth:"iw",pageCount:"pc",pageX:"px",pageY:"py",tags:"tags"},St="("+Object.keys(Be).join("|")+")",At=["quality","if","rotate","zoom","opacity","radius","effect","dpr"],Tt={width:"w",initialWidth:"iw",height:"h",initialHeight:"ih",aspectRatio:"ar",intialAspectRatio:"iar",context:"ctx",metadata:"md",tags:"tags",trimmedAspectRatio:"tar",currentPage:"cp",faceCount:"fc",pageCount:"pc",pageXOffset:"px",pageYOffset:"py",initialDensity:"idn",illustration:"ils",pageNames:"pgnames"},x=function(e,t){return t===void 0&&(t=":"),e.filter(Boolean).join(t)},ze=function(e){var t=e.expression?x(e.expression.map(function(n){return xt(n)}),"_and_"):"",r=e.transformations.map(function(n){return Ye(He(n))});return{expression:t,transformations:x(r,"/")}},Ne=function(e){return Tt[e]||e},xt=function(e){var t=Array.isArray(e.characteristic)?x(e.characteristic.map(Ne)):Ne(e.characteristic),r=pt[e.operator],n=isNaN(e.value)?"!"+e.value+"!":e.value;return x([t,r,n],"_")},Ot=function(e){if(!e||!e.if||!e.if.expression)return"";var t=ze(e.if),r=e.else?ze(e.else):null,n=x(["if_"+t.expression,t.transformations],"/"),a=r?x(["if_else",r.transformations],"/"):"";return[x([n,a,"if_end"],"/")]},kt=function(e){var t=typeof e=="string";if(!e||!t&&!e.name)return"";if(t||!e.value)return"e_"+(e.name||e);var r=Array.isArray(e.value)?e.value.join(":"):e.value,n=x([e.name,r]);return"e_"+n},Fe="$",Ct={integer:"to_i",float:"to_f"},Ge="((\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^)(?=[ _]))",It=function(e){var t=new RegExp(Ge,"g");return e.replace(t,function(r){return Rt[r]})},Pt=function(e){var t=new RegExp(St,"g");return e.replace(t,function(r,n,a){return e[a-1]===Fe?r:Be[r]})},G=function(e){return isNaN(e)?be(e):e},be=function(e){if(!e)return"";var t=It(e),r=Pt(t);return r.replace(/[ _]+/g,"_")},zt=function(e){var t=new RegExp(Ge,"g");return t.test(e)},Nt=function(e){if(!e||e.length===0)return"";var t=typeof e=="string"?e:e.join(":");return"fl_"+t},Vt=function(e){return e},Dt=function(e){if(!e||!e.expression)return"";var t=Array.isArray(e.expression)?x(e.expression):e.expression,r=zt(t),n=be(t),a=Ct[e.formatAs]||"",o=n&&!r?"!"+n+"!":n;return x([o,a],"_")},Ve=function(e){var t=""+Fe+e.name,r=e.value;isNaN(e.value)&&(Array.isArray(e.value)?r=x(e.value):r=Dt(e.value));var n=x([Et[e.assignFrom],r],":");return n?x([t,n],"_"):""},Lt=function(e){return e?Array.isArray(e)?x(e.map(function(t){return Ve(t)}),","):Ve(e):""},Mt=function(e){var t=typeof e=="object";if(!e||t&&!e.min)return"";var r=t?x([e.min,e.max],"-"):e;return"fps_"+r},Ut=function(e){if(!e)return"";var t=e.start?"so_"+e.start:"",r=e.end?"eo_"+e.end:"",n=e.duration?"du_"+e.duration:"";return[t,r,n].filter(Boolean).join(",")},qt=function(e){var t=e.type,r=e.width,n=e.height,a=e.aspectRatio,o=r?"w_"+G(r):"",i=n?"h_"+G(n):"",s=t?"c_"+t:"",l=a?"ar_"+G(a):"";return[s,o,i,l].filter(Boolean).join()},Bt=function(e){var t=e.type,r=t===void 0?"solid":t,n=e.color,a=n===void 0?"black":n,o=e.width;if(!o)return"";var i=isNaN(o)?be(o):o+"px";return"bo_"+i+"_"+r+"_"+a},Ft=function(e){var t=e.x,r=e.y,n=t?"x_"+G(t):"",a=r?"y_"+G(r):"";return[n,a].filter(Boolean).join()},Gt=function(e){var t=e.resize||e.width||e.height||e.aspectRatio;return t?qt(e.resize||{width:e.width,height:e.height,type:e.crop,aspectRatio:e.aspectRatio}):""},Ht=function(e){if(!e.border)return"";var t=typeof e.border=="string"?"bo_"+e.border:Bt(e.border);return t},Yt=function(e){return!e.x&&!e.y&&!e.position?"":Ft(e.position||{x:e.x,y:e.y})},De=function(e){var t=[];t.push(Lt(e.variables)),t.push(Gt(e)),t.push(Ht(e)),t.push(Yt(e)),t.push(Mt(e.fps)),t.push(Ut(e.offset));for(var r in e){var n=e[r],a=wt[r];if(!(!a||!n)){var o=At.includes(r);t.push(a+"_"+(o?G(n):n))}}return t.push(kt(e.effect)),t.push(Nt(e.flags)),t.push(Vt(e.rawTransformation)),t.push(Ot(e.condition)),t.filter(Boolean)},He=function(e){var t=De(e),r=e.transformation||e.chaining;return r&&Array.isArray(r)&&r.forEach(function(n){var a=De(n);a.length>0&&t.push(a)}),t.filter(Boolean)},Ye=function(e){return e.reduce(function(t,r){var n=Array.isArray(r),a=n?"/":",";return""+t+(t?a:"")+r.toString()},"")},ee=globalThis&&globalThis.__assign||function(){return ee=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ee.apply(this,arguments)},Wt=["cloudinary-a.akamaihd.net","res.cloudinary.com"],Kt=/^.+\.cloudinary\.com\/(?:[^\/]+\/)(?:(image|video|raw)\/)?(?:(upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/,Xt=function(e){if(!e)return"";var t=Kt.exec(e);return t&&t.length>2?t[t.length-2]:e},Zt=function(e){if(!e)return"";var t=e.indexOf("s--")===0&&e.endsWith("--");return t?e:"s--"+e+"--"},Jt=function(e){return!e.match(/^v[0-9]+/)&&!e.match(/^https?:\//)},Le=function(e){return encodeURIComponent(e).replace(/%3A/g,":").replace(/%2F/g,"/")},Qt=function(e,t){var r=t.forceVersion,n=r===void 0?!1:r,a=t.version,o=a===void 0?1:a,i=Jt(e)&&n;return i?"v"+o:""},jt=function(e,t){var r=t.cdnSubdomain,n=r===void 0?!1:r,a=t.cname;return a?n?"a"+e+".":"":"res"+(n?"-"+e:"")},$t=function(e,t){var r=t.cloudName,n=t.privateCdn,a=n===void 0?!1:n,o=t.cdnSubdomain,i=o===void 0?!1:o,s=t.secureDistribution,l=t.cname,v=t.secure,_=v===void 0?!0:v,d=_&&s&&!Wt.includes(s),g="http"+(_?"s":"")+"://",f=a&&!d?r+"-":"",u=a?"":"/"+r,h=d?"":jt(e,{cdnSubdomain:i,cname:l}),y=d?s:l||".cloudinary.com";return""+g+f+h+y+u},er=function(e){var t=e.resourceType,r=t===void 0?fe.IMAGE:t,n=e.storageType,a=n===void 0?Ie.UPLOAD:n,o=e.urlSuffix,i=e.useRootPath,s=e.shortern,l=r===fe.IMAGE&&a===Ie.UPLOAD,v=i&&!l,_=s&&l,d=r+"/"+a;if(v)throw new Error("Root path only supported for image/upload");if(i)return _?"iu":"";if(o){var g=Pe[d];if(g)return g;throw new Error("URL Suffix only supported for "+Object.keys(Pe).join(", "))}return d},We=function(e){return e&&!!e.match(/^https?:\//)},tr=function(e,t){var r=t.urlSuffix,n=r===void 0?"":r;if(We(e))return Le(e);var a=[e,n].filter(Boolean).join("/");return Le(a)},rr=function(e,t,r){if(t===void 0&&(t={cloudName:""}),!t.cloudName)throw Error("cloudName is required!");var n=We(e)?Xt(e):e,a=Qt(n,t),o=$t(n,t),i=Zt(t.signature),s=er(t),l=tr(n,{urlSuffix:t.urlSuffix}),v=r.fetchFormat||r.format||"auto",_=ee(ee({quality:"auto"},r),{format:v}),d=Ye(He(_));return[o,s,i,d,a,l].filter(Boolean).join("/").replace(" ","%20")},V=globalThis&&globalThis.__assign||function(){return V=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},V.apply(this,arguments)},de={},dr=function(e){return de=V(V({},de),e)},nr=function(e,t){var r=t.cloud,n=r===void 0?{}:r,a=t.transformations,o=a===void 0?{}:a,i=V(V({},de),n);return rr(e,i,o)},mr=function(e,t){var r=t.cloud,n=r===void 0?{}:r,a=t.transformations,o=a===void 0?{}:a;return nr(e,{cloud:V(V({},n),{resourceType:fe.IMAGE}),transformations:o})};export{ur as C,cr as P,fr as S,lr as T,mr as b,dr as s};
