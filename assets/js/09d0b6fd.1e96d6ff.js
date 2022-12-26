"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[1439],{3905:(e,r,n)=>{n.d(r,{Zo:()=>i,kt:()=>d});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},i=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?t.createElement(b,s(s({ref:r},i),{},{components:n})):t.createElement(b,s({ref:r},i))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6916:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=n(7462),o=(n(7294),n(3905));const a={},s="RGB",l={unversionedId:"WEB/css/colores/rgb_rgba",id:"WEB/css/colores/rgb_rgba",title:"RGB",description:"En el modo RGB tenemos tres canales (Red, Green, Blue) y tenemos 8 bits de color por canal, (cada bit tiene dos posibles valores 0 o 1) lo que significa que tenemos 2^8 posibles valores, que van desde 0 hasta 255.",source:"@site/docs/WEB/css/04_colores/02_rgb_rgba.md",sourceDirName:"WEB/css/04_colores",slug:"/WEB/css/colores/rgb_rgba",permalink:"/mytrip/docs/WEB/css/colores/rgb_rgba",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"CSS",previous:{title:"colores por nombre",permalink:"/mytrip/docs/WEB/css/colores/colores_por_nombre"},next:{title:"colores hsl y hsla",permalink:"/mytrip/docs/WEB/css/colores/hsl_hsla"}},c={},p=[{value:"RGB %",id:"rgb-",level:2}],i={toc:p};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rgb"},"RGB"),(0,o.kt)("p",null,"En el modo RGB tenemos tres canales (Red, Green, Blue) y tenemos 8 bits de color por canal, (cada bit tiene dos posibles valores 0 o 1) lo que significa que tenemos 2^8 posibles valores, que van desde 0 hasta 255."),(0,o.kt)("p",null,"Esto nos da un total de 255",(0,o.kt)("em",{parentName:"p"},"255"),"255 = 16.581.375 colores."),(0,o.kt)("p",null,"su sintaxis es rgb(R,G,B)"),(0,o.kt)("p",null,"si podemos todos los canales a 0 tendremos un negro puro y si los ponemos a 255 tendremos un blanco. "),(0,o.kt)("p",null,"para movernos por la gama de grises debemos poner los 3 canales con el mismo valor, si ponemos los 3 canales a 128 tendremos el gris puro."),(0,o.kt)("p",null,"el modo RGB nos da la opcion de utilizar un cuarto canal que corresponderia al canal alpha, es decir, la transparencia, y su valor va desde 0 a 1. tenemos dos sintaxis para utilizar el canal alpha."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rgba(R,G,B,A)"),(0,o.kt)("li",{parentName:"ul"},"rgb(R G B / A)")),(0,o.kt)("p",null,"Ejemplo:"),(0,o.kt)("p",null,"RGB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"p{\n    color:rgb(255,0,200);\n} \n")),(0,o.kt)("p",null,"RGBA"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"p{\n    color:rgba(255,0,200,0.8);\n} \n")),(0,o.kt)("h2",{id:"rgb-"},"RGB %"),(0,o.kt)("p",null,"con esta opcion indicamos el porcentaje que le damos a cada color de 0 a 100%, debemos usar la funcion rgb para convertir estos porcentajes en el color deseado, su sintaxis es ",(0,o.kt)("strong",{parentName:"p"},"rgb(rrr%,ggg%,bbb%)"),"."),(0,o.kt)("p",null,"Ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"p{\n    color:rgb(100%,0%,80%);\n} \n")))}u.isMDXComponent=!0}}]);