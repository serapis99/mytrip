"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[9727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={},l="Estructura completa",c={unversionedId:"WEB/html/tablas/estructura_completa",id:"WEB/html/tablas/estructura_completa",title:"Estructura completa",description:"titulos",source:"@site/docs/WEB/html/08_tablas/02_estructura_completa.md",sourceDirName:"WEB/html/08_tablas",slug:"/WEB/html/tablas/estructura_completa",permalink:"/mytrip/docs/WEB/html/tablas/estructura_completa",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"HTML",previous:{title:"Introduccion a tablas",permalink:"/mytrip/docs/WEB/html/tablas/introduccion"},next:{title:"Atributos tabla",permalink:"/mytrip/docs/WEB/html/tablas/atributos_tabla"}},s={},i=[{value:"titulos",id:"titulos",level:2},{value:"cabeceras",id:"cabeceras",level:2},{value:"cuerpo",id:"cuerpo",level:2},{value:"pie de tabla",id:"pie-de-tabla",level:2}],u={toc:i};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"estructura-completa"},"Estructura completa"),(0,r.kt)("h2",{id:"titulos"},"titulos"),(0,r.kt)("p",null,"los titulos de las tablas se establecen con la etiqueta ",(0,r.kt)("strong",{parentName:"p"},"caption"),", es una etiqueta opcional, y segun la especificacion esa etiqueta se coloca justo despues de la etiqueta tabla."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTML"},"<table>\n    <caption>Horario de clases</caption>\n</table>\n")),(0,r.kt)("h2",{id:"cabeceras"},"cabeceras"),(0,r.kt)("p",null,"las cabeceras de las tablas se establecen con la etiqueta ",(0,r.kt)("strong",{parentName:"p"},"thead")," dentro tendremos una etiqueta ",(0,r.kt)("strong",{parentName:"p"},"tr")," normal, pero en el caso de las celdas, las establecemos con la etiqueta ",(0,r.kt)("strong",{parentName:"p"},"th"),", es una etiqueta opcional."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTML"},"<thead>\n    <tr>\n        <th>Lunes</th>\n        <th>Martes</th>\n        <th>Miercoles</th>\n        <th>Jueves</th>\n        <th>Viernes</th>\n        <th>Sabado</th>\n        <th>Domingo</th>\n    </tr>\n</thead>\n\n")),(0,r.kt)("h2",{id:"cuerpo"},"cuerpo"),(0,r.kt)("p",null,"el contenido de la tabla debe ir dentro de una etiqueta ",(0,r.kt)("strong",{parentName:"p"},"tbody")," para representar el cuerpo de la tabla, no es obligatorio mientras no exista la etiqueta ",(0,r.kt)("strong",{parentName:"p"},"thead"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTML"},"<tbody>\n    <tr>\n        <td>Contenido 1</td>\n        <td>Contenido 2</td>\n        <td>Contenido 3</td>\n        <td>Contenido 4</td>\n        <td>Contenido 5</td>\n        <td>Contenido 6</td>\n        <td>Contenido 7</td>\n    </tr>\n</tbody>\n\n")),(0,r.kt)("h2",{id:"pie-de-tabla"},"pie de tabla"),(0,r.kt)("p",null,"de forma opcional podemos colocar un ",(0,r.kt)("strong",{parentName:"p"},"tfoot")," a la tabla para establecer un pie de tabla, esto es algo que alguna tablas tienen como suma de cantidades o total."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTML"},"<tfoot>\n    <tr>\n        <td>Contenido</td>\n    </tr>\n</tfoot>\n")))}p.isMDXComponent=!0}}]);