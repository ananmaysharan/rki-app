import{S as b,i as y,s as v,k as m,a as k,N as I,l as d,m as f,h as r,c as j,n,E as M,F as u,b as x,G as g,o as N}from"../chunks/index.facc06e8.js";/* empty css                       */import{m as p}from"../chunks/mapbox-gl.482fb487.js";function z(h){let e,t,a,s,i,c;return{c(){e=m("link"),t=m("script"),s=m("link"),i=k(),c=m("div"),this.h()},l(o){const l=I("svelte-1212rz0",document.head);e=d(l,"LINK",{href:!0,rel:!0}),t=d(l,"SCRIPT",{src:!0});var _=f(t);_.forEach(r),s=d(l,"LINK",{rel:!0,href:!0,type:!0}),l.forEach(r),i=j(o),c=d(o,"DIV",{id:!0,class:!0}),f(c).forEach(r),this.h()},h(){n(e,"href","https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"),n(e,"rel","stylesheet"),M(t.src,a="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js")||n(t,"src",a),n(s,"rel","stylesheet"),n(s,"href","https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css"),n(s,"type","text/css"),n(c,"id","map"),n(c,"class","svelte-n0si96")},m(o,l){u(document.head,e),u(document.head,t),u(document.head,s),x(o,i,l),x(o,c,l)},p:g,i:g,o:g,d(o){r(e),r(t),r(s),o&&r(i),o&&r(c)}}}function C(h,e,t){p.accessToken="pk.eyJ1IjoiYW5hbm1heSIsImEiOiJjbDk0azNmY3oxa203M3huMzhyZndlZDRoIn0.1L-fBYplQMuwz0LGctNeiA";let{map:a}=e;return N(()=>{t(0,a=new p.Map({container:"map",style:"mapbox://styles/ananmay/clnc7tpm907rd01p93bgs013m",center:[-97,54],zoom:3.9,minZoom:2,scrollZoom:!0})),a.addControl(new p.NavigationControl),a.addControl(new MapboxGeocoder({accessToken:p.accessToken,countries:"ca",proximity:"ip",types:"address, region, country, postcode, district, place, locality, neighborhood",language:"en, fr",marker:!1,mapboxgl:p}),"top-left")}),h.$$set=s=>{"map"in s&&t(0,a=s.map)},[a]}class S extends b{constructor(e){super(),y(this,e,C,z,v,{map:0})}}export{S as component};