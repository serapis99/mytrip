"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[4114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Seleccion de columnas",c={unversionedId:"WEB/html/tablas/seleccionar_columna",id:"WEB/html/tablas/seleccionar_columna",title:"Seleccion de columnas",description:"dentro de la tabla debemos colocar un colgroup y colocar tantas etiquetas col como columnas tenga nuestra tabla, esto con el fin de darle estilos a las columnas.",source:"@site/docs/WEB/html/08_tablas/04_seleccionar_columna.md",sourceDirName:"WEB/html/08_tablas",slug:"/WEB/html/tablas/seleccionar_columna",permalink:"/mytrip/docs/WEB/html/tablas/seleccionar_columna",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"HTML",previous:{title:"Atributos tabla",permalink:"/mytrip/docs/WEB/html/tablas/atributos_tabla"},next:{title:"Formularios",permalink:"/mytrip/docs/WEB/html/Formularios/introduccion"}},i={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seleccion-de-columnas"},"Seleccion de columnas"),(0,a.kt)("p",null,"dentro de la tabla debemos colocar un ",(0,a.kt)("strong",{parentName:"p"},"colgroup")," y colocar tantas etiquetas ",(0,a.kt)("strong",{parentName:"p"},"col")," como columnas tenga nuestra tabla, esto con el fin de darle estilos a las columnas."),(0,a.kt)("p",null,"tambien tenemos el atributo span para indicarle que tome mas de una columna."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<table>\n\n    <colgroup>\n        <col span="2">\n        <col>\n    </colgroup>\n    <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n    <tr>\n    \n    <tr>\n        <td>4</td>\n        <td>5</td>\n        <td>6</td>\n    <tr>\n\n    <tr>\n        <td>7</td>\n        <td>8</td>\n        <td>9</td>\n    <tr>\n</table>\n')))}p.isMDXComponent=!0}}]);