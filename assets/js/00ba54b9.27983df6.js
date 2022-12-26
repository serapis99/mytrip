"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[1481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},c="uso de strict",i={unversionedId:"WEB/javascript/introduccion/uso_strict",id:"WEB/javascript/introduccion/uso_strict",title:"uso de strict",description:"lo que hace es obligarnos a declarar las variables antes de usarlas y se debe declarar antes de comenzar el algoritmo.",source:"@site/docs/WEB/javascript/01_introduccion/08_uso_strict.md",sourceDirName:"WEB/javascript/01_introduccion",slug:"/WEB/javascript/introduccion/uso_strict",permalink:"/mytrip/docs/WEB/javascript/introduccion/uso_strict",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"JS",previous:{title:"Uso de var, let o const",permalink:"/mytrip/docs/WEB/javascript/introduccion/uso_de_var_let_const"},next:{title:"Tipos de datos Basicos",permalink:"/mytrip/docs/WEB/javascript/tipos_de_datos/basicos"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uso-de-strict"},"uso de strict"),(0,o.kt)("p",null,"lo que hace es obligarnos a declarar las variables antes de usarlas y se debe declarar antes de comenzar el algoritmo. "),(0,o.kt)("p",null,"Ejemplo al inicio del programa:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"use strict";\n\nlet x=10;\n')),(0,o.kt)("p",null,"Ejemplo dentro de una funcion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'\nfunction miFuncion(){\n    "use strict";\n    let y=15;\n    console.log(y)\n}\n')))}u.isMDXComponent=!0}}]);