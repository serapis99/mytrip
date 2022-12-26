"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[3481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(b,s(s({ref:t},c),{},{components:r})):o.createElement(b,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={},s="Tipos de datos Basicos",i={unversionedId:"WEB/javascript/tipos_de_datos/basicos",id:"WEB/javascript/tipos_de_datos/basicos",title:"Tipos de datos Basicos",description:"String",source:"@site/docs/WEB/javascript/02_tipos_de_datos/01_basicos.md",sourceDirName:"WEB/javascript/02_tipos_de_datos",slug:"/WEB/javascript/tipos_de_datos/basicos",permalink:"/mytrip/docs/WEB/javascript/tipos_de_datos/basicos",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"JS",previous:{title:"uso de strict",permalink:"/mytrip/docs/WEB/javascript/introduccion/uso_strict"},next:{title:"typeof",permalink:"/mytrip/docs/WEB/javascript/tipos_de_datos/typeof"}},l={},p=[{value:"String",id:"string",level:2},{value:"Numericos o number",id:"numericos-o-number",level:2},{value:"booleandos (true, false) o boolean",id:"booleandos-true-false-o-boolean",level:2},{value:"Objecto o Object",id:"objecto-o-object",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tipos-de-datos-basicos"},"Tipos de datos Basicos"),(0,a.kt)("h2",{id:"string"},"String"),(0,a.kt)("p",null,"El tipo de dato mas comun en javascript es el tipo cadena o (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"string")),") se puede ver visualmente porque son encerrados ya sea en doble comilla o en comilla simple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var nombre=\"ruben\"\nvar apellido='gacha'\n")),(0,a.kt)("h2",{id:"numericos-o-number"},"Numericos o number"),(0,a.kt)("p",null,"Javascript No diferencia entre un tipo entero o de tipo flotante para javascript estos dos tipos de datos son de tipos numericos (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"number")),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var entero=15\nvar flotante=15.6965\n")),(0,a.kt)("h2",{id:"booleandos-true-false-o-boolean"},"booleandos (true, false) o boolean"),(0,a.kt)("p",null,"las variables de tipo booleanos solo puede almacenar verdadero o falso, son muy usadas en la programcion para validar datos y hacer una determinada accion dependiendo de su valor. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var booleano=true\n")),(0,a.kt)("h2",{id:"objecto-o-object"},"Objecto o Object"),(0,a.kt)("p",null,"los objetos se crean usando llaves y dentro de las llaves se van creando las propiedad con su respectivo valor, la propiedad y el valor se separan con los dos puntos y para separar propiedades se usa la coma."),(0,a.kt)("p",null,"Ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var objecto={\n    nombre:"ruben",\n    apellido: "gacha",\n    edad : 32\n}\n')))}d.isMDXComponent=!0}}]);