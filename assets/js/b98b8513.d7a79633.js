"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[5701],{3905:(e,o,a)=>{a.d(o,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function t(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?t(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,r,n=function(e,o){if(null==e)return{};var a,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var o=r.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):l(l({},o),e)),a},d=function(e){var o=c(e.components);return r.createElement(p.Provider,{value:o},e.children)},i={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var a=e.components,n=e.mdxType,t=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,f=m["".concat(p,".").concat(u)]||m[u]||i[u]||t;return a?r.createElement(f,l(l({ref:o},d),{},{components:a})):r.createElement(f,l({ref:o},d))}));function u(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var t=a.length,l=new Array(t);l[0]=m;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<t;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1571:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>p,contentTitle:()=>l,default:()=>i,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const t={},l="colapsado de marges",s={unversionedId:"WEB/css/modelo_caja/colapsado_margenes",id:"WEB/css/modelo_caja/colapsado_margenes",title:"colapsado de marges",description:"el colapsado de margenes es lo mismo que decir que se solapan los margenes de un elemento y de otro probocando que no se separen lo que se le esta indicando a cada elemento sino que se vea la separacion mayor de los dos elementos, y solo sucede cuando los margenes son los verticales top y bottom",source:"@site/docs/WEB/css/06_modelo_caja/08_colapsado_margenes.md",sourceDirName:"WEB/css/06_modelo_caja",slug:"/WEB/css/modelo_caja/colapsado_margenes",permalink:"/mytrip/docs/WEB/css/modelo_caja/colapsado_margenes",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"CSS",previous:{title:"Overflow",permalink:"/mytrip/docs/WEB/css/modelo_caja/overflow"},next:{title:"display",permalink:"/mytrip/docs/WEB/css/modelo_caja/display"}},p={},c=[{value:"problemas de padres e hijos",id:"problemas-de-padres-e-hijos",level:2},{value:"forma 1",id:"forma-1",level:3},{value:"forma 2",id:"forma-2",level:3},{value:"forma 3",id:"forma-3",level:3}],d={toc:c};function i(e){let{components:o,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"colapsado-de-marges"},"colapsado de marges"),(0,n.kt)("p",null,"el colapsado de margenes es lo mismo que decir que se solapan los margenes de un elemento y de otro probocando que no se separen lo que se le esta indicando a cada elemento sino que se vea la separacion mayor de los dos elementos, y solo sucede cuando los margenes son los verticales ",(0,n.kt)("strong",{parentName:"p"},"top")," y ",(0,n.kt)("strong",{parentName:"p"},"bottom")),(0,n.kt)("p",null,"Ejemplo:"),(0,n.kt)("p",null,"en este ejemplo la separacion de los dos elementos seria de 30px ya que se solapa los 20px de las cajas."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".box-1{\n    margin-top:30px;\n}\n.box-2{\n    margin-bottom:20px;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTA"),": la mediana solucion de este peque\xf1o problema es dar solo margin-bottom e ir empujando los elementos."),(0,n.kt)("h2",{id:"problemas-de-padres-e-hijos"},"problemas de padres e hijos"),(0,n.kt)("p",null,"el problema radica cuando un elemento hijo tiene una propiedad margin y esta hace que se desplace el elemento padre y no el elemento hijo. "),(0,n.kt)("p",null,"hay tres formas de solucionar esta problematica."),(0,n.kt)("h3",{id:"forma-1"},"forma 1"),(0,n.kt)("p",null,"colocar la propiedad ",(0,n.kt)("strong",{parentName:"p"},"overflow")," en hidden en el elemento padre."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".padre{\n    overflow:hidden;\n}\n")),(0,n.kt)("h3",{id:"forma-2"},"forma 2"),(0,n.kt)("p",null,"colocar la propiedad ",(0,n.kt)("strong",{parentName:"p"},"padding-top")," con cualquier valor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".padre{\n    padding-top:0.1px;\n}\n")),(0,n.kt)("h3",{id:"forma-3"},"forma 3"),(0,n.kt)("p",null,"colocar la propiedad ",(0,n.kt)("strong",{parentName:"p"},"border-top")," con cualquier valor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".padre{\n    border-top:0.1px solid lightcoral;\n}\n")))}i.isMDXComponent=!0}}]);