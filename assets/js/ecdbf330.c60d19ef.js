"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[208],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(7294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,y=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?t.createElement(y,o(o({ref:r},u),{},{components:n})):t.createElement(y,o({ref:r},u))}));function d(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1141:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(7462),l=(n(7294),n(3905));const a={},o="colores hsl y hsla",s={unversionedId:"WEB/css/colores/hsl_hsla",id:"WEB/css/colores/hsl_hsla",title:"colores hsl y hsla",description:"El modo de color HSL es el mas intuitivo para los humanos. su nombre viene de las siglas Hue(tono), saturation(saturacion) y lightness(luminncia)",source:"@site/docs/WEB/css/04_colores/03_hsl_hsla.md",sourceDirName:"WEB/css/04_colores",slug:"/WEB/css/colores/hsl_hsla",permalink:"/mytrip/docs/WEB/css/colores/hsl_hsla",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"CSS",previous:{title:"RGB",permalink:"/mytrip/docs/WEB/css/colores/rgb_rgba"},next:{title:"currentColor",permalink:"/mytrip/docs/WEB/css/colores/currenColor"}},i={},c=[],u={toc:c};function p(e){let{components:r,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"colores-hsl-y-hsla"},"colores hsl y hsla"),(0,l.kt)("p",null,"El modo de color HSL es el mas intuitivo para los humanos. su nombre viene de las siglas Hue(tono), saturation(saturacion) y lightness(luminncia)"),(0,l.kt)("p",null,"El primer valor es el angulo en el circulo cromatico donde 0 y 360 sera el color rojo. hay ciertos valores que pueden servir como referencia para relacionar mejor los colores con sus angulos."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 rojo"),(0,l.kt)("li",{parentName:"ul"},"60 amarillo"),(0,l.kt)("li",{parentName:"ul"},"120 verde"),(0,l.kt)("li",{parentName:"ul"},"180 cyan"),(0,l.kt)("li",{parentName:"ul"},"240 azul"),(0,l.kt)("li",{parentName:"ul"},"300 magenta")),(0,l.kt)("p",null,"el segundo valor es la saturacion o intensidad del color. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0% gris"),(0,l.kt)("li",{parentName:"ul"},"100% color puro")),(0,l.kt)("p",null,"El tercer valor es la luminosidad del color."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0% negro, nada de luz"),(0,l.kt)("li",{parentName:"ul"},"100% blanco, luz maxima")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTA")," es importante que aunque el valor de saturacion o luminancia sea 0 hay que poner 0% si no, no funcionara."),(0,l.kt)("p",null,"El modo HSL tambien admite transparencia y su sintaxis es la misma que la del modo RGB. tenemos dos sintaxis disponible."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hsla(h,s,l,a)"),(0,l.kt)("li",{parentName:"ul"},"hsl(h s l / a)")),(0,l.kt)("p",null,"En ambos casos el valor alpha va 0 a 1."),(0,l.kt)("p",null,"Existen otros cuatro modos de color en los que esta trabajando que serian."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CMYK (cyan, magenta, yellow, black)"),(0,l.kt)("li",{parentName:"ul"},"HWB (Hue,Whiteness, Blancness)"),(0,l.kt)("li",{parentName:"ul"},"Lab (lightness, distance a, distance b)"),(0,l.kt)("li",{parentName:"ul"},"lch (lightness, chroma, hue)")),(0,l.kt)("p",null,"Ejemplo sin transparencia:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"p{\n    color:hsl(195,100%,50%);\n} \n")),(0,l.kt)("p",null,"Ejemplo con transparencia:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".nav{\n    color:hsla(195,100%,50%,0.5);\n} \n\n.main{\n    color:hsl(195 100% 50% /0.5);\n} \n")))}p.isMDXComponent=!0}}]);