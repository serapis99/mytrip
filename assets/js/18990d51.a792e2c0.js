"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={},a="Unir Html CSS",i={unversionedId:"WEB/css/primeros_pasos/unir_html_css",id:"WEB/css/primeros_pasos/unir_html_css",title:"Unir Html CSS",description:"tenemos dos formas de que interactuen el lenguaje CSS y el Lenguaje HTML el primero es escribiendo el codigo directamente en el mismo documento donde esta el html y el otro es usar una etiqueta link para indicarle la ruta donde se encuentra nuestros estilos.",source:"@site/docs/WEB/css/01_primeros_pasos/02_unir_html_css.md",sourceDirName:"WEB/css/01_primeros_pasos",slug:"/WEB/css/primeros_pasos/unir_html_css",permalink:"/mytrip/docs/WEB/css/primeros_pasos/unir_html_css",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"CSS",previous:{title:"Introduccion",permalink:"/mytrip/docs/WEB/css/primeros_pasos/introduccion"},next:{title:"sintaxis",permalink:"/mytrip/docs/WEB/css/primeros_pasos/sintaxis"}},l={},c=[{value:"En el mismo documento.",id:"en-el-mismo-documento",level:2},{value:"En documentos aparte",id:"en-documentos-aparte",level:2},{value:"uso de @import",id:"uso-de-import",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unir-html-css"},"Unir Html CSS"),(0,o.kt)("p",null,"tenemos dos formas de que interactuen el lenguaje CSS y el Lenguaje HTML el primero es escribiendo el codigo directamente en el mismo documento donde esta el html y el otro es usar una etiqueta link para indicarle la ruta donde se encuentra nuestros estilos."),(0,o.kt)("h2",{id:"en-el-mismo-documento"},"En el mismo documento."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Html"},"<style>\n    body{\n        background-color:steelblue;\n    }\n</style>\n")),(0,o.kt)("h2",{id:"en-documentos-aparte"},"En documentos aparte"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Html"},'<link rel="stylesheet" href="css/styles.css">\n')),(0,o.kt)("h2",{id:"uso-de-import"},"uso de @import"),(0,o.kt)("p",null,"No se recomienda que se agrege codigo css usando la clausula import debido a que lo hace de manera asincronica, y eso genera una mala esperiencia de usuario, y al tener varias importaciones no se cargaria una hasta que se termine de cargar la anterior."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Html"},"<style>\n    @import url(css/styles.css);\n</styl>\n")))}m.isMDXComponent=!0}}]);