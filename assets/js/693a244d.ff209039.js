"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[4478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Quantifiers o Cuantificadores",c={unversionedId:"Programacion/Basico/Conocimiento Comun/Expresiones regulares/quantifiers_cuantificadores",id:"Programacion/Basico/Conocimiento Comun/Expresiones regulares/quantifiers_cuantificadores",title:"Quantifiers o Cuantificadores",description:"los cuantificadores nos permite indicarle cuantas veces queremos que se repita un caracter o grupo en nuestra expresion.",source:"@site/docs/Programacion/Basico/01_Conocimiento Comun/03_Expresiones regulares/03_quantifiers_cuantificadores.md",sourceDirName:"Programacion/Basico/01_Conocimiento Comun/03_Expresiones regulares",slug:"/Programacion/Basico/Conocimiento Comun/Expresiones regulares/quantifiers_cuantificadores",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Expresiones regulares/quantifiers_cuantificadores",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"ProgramacionBasica",previous:{title:"Anchors o limitadores",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Expresiones regulares/anchors_limitadores"},next:{title:"Manera no codiciosa",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Expresiones regulares/no_codiciosa"}},l={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quantifiers-o-cuantificadores"},"Quantifiers o Cuantificadores"),(0,a.kt)("p",null,"los cuantificadores nos permite indicarle cuantas veces queremos que se repita un caracter o grupo en nuestra expresion."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Simbolo"),(0,a.kt)("th",{parentName:"tr",align:null},"Descripcion"),(0,a.kt)("th",{parentName:"tr",align:null},"uso"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"cero o mas veces"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"a*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"+"),(0,a.kt)("td",{parentName:"tr",align:null},"uno o mas veces"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"a+"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"?"),(0,a.kt)("td",{parentName:"tr",align:null},"cero o una vez"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"a?"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{#}"),(0,a.kt)("td",{parentName:"tr",align:null},"Exactamente la cantidad entre los corchetes"),(0,a.kt)("td",{parentName:"tr",align:null},"a{3}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{#,}"),(0,a.kt)("td",{parentName:"tr",align:null},"la cantidad escrita o mas veces"),(0,a.kt)("td",{parentName:"tr",align:null},"a{3,}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{#,#}"),(0,a.kt)("td",{parentName:"tr",align:null},"desde una cantidad minima hasta una cantidad maxima"),(0,a.kt)("td",{parentName:"tr",align:null},"a{3,6}")))))}p.isMDXComponent=!0}}]);