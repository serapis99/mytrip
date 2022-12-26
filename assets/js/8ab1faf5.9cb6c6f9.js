"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[3862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Formas de colocar javascript en html",c={unversionedId:"WEB/javascript/introduccion/formas_colocar_codigo_en_html",id:"WEB/javascript/introduccion/formas_colocar_codigo_en_html",title:"Formas de colocar javascript en html",description:"Para poder ejecutar codigo de javascript se necesita un navegador web o tener instalado node.js, tambien se puede crear un archivo html y anexar nuestro codigo en este para poder validarlo.",source:"@site/docs/WEB/javascript/01_introduccion/05_formas_colocar_codigo_en_html.md",sourceDirName:"WEB/javascript/01_introduccion",slug:"/WEB/javascript/introduccion/formas_colocar_codigo_en_html",permalink:"/mytrip/docs/WEB/javascript/introduccion/formas_colocar_codigo_en_html",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"JS",previous:{title:"Nombre de variables",permalink:"/mytrip/docs/WEB/javascript/introduccion/nombre_variables"},next:{title:"Interracion con usuarios",permalink:"/mytrip/docs/WEB/javascript/introduccion/Interaccion_con_usuario"}},l={},s=[{value:"codigo en la misma pagina",id:"codigo-en-la-misma-pagina",level:2},{value:"codigo en un documento distinto",id:"codigo-en-un-documento-distinto",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"formas-de-colocar-javascript-en-html"},"Formas de colocar javascript en html"),(0,r.kt)("p",null,"Para poder ejecutar codigo de javascript se necesita un navegador web o tener instalado node.js, tambien se puede crear un archivo html y anexar nuestro codigo en este para poder validarlo. "),(0,r.kt)("p",null,"Se recomienda poner el codigo javascript antes de finalizar el body pero despues de todas las etiquetas ya que en esta parte ya esta cargada toda la pagina"),(0,r.kt)("h2",{id:"codigo-en-la-misma-pagina"},"codigo en la misma pagina"),(0,r.kt)("p",null,"en una archivo de texto plano con extencion ",(0,r.kt)("strong",{parentName:"p"},".html")," se puede crear codigo javascript dentro de la etiqueta ",(0,r.kt)("strong",{parentName:"p"},"script")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="es-CO">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>titulo de la pagina</title>\n</head>\n\n<body>\n    <h1>titulo del articulo</h1>\n\n\n    \x3c!--javascript--\x3e\n\n    <script>\n        console.log("hola mundo!!!")\n    <\/script>\n</body>\n\n\n</html>\n')),(0,r.kt)("h2",{id:"codigo-en-un-documento-distinto"},"codigo en un documento distinto"),(0,r.kt)("p",null,"para separar el codigo de la parte visual de las aplicaciones web se usan archivos con extencion ",(0,r.kt)("strong",{parentName:"p"},".js")," y estos son cargados por las paginas web html colocando en la etiqueta script la propiedad ",(0,r.kt)("strong",{parentName:"p"},"src")," indicandole la ruta donde se encuentra el archivo con el codigo javascript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="es-CO">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>titulo de la pagina</title>\n</head>\n\n<body>\n    <h1>titulo del articulo</h1>\n\n\n    \x3c!--javascript--\x3e\n\n    <script src="ruta_del_codigo/archivo.js"><\/script>\n</body>\n\n\n</html>\n')))}p.isMDXComponent=!0}}]);