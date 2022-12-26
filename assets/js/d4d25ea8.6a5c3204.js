"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[6328],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={},o="tablas",s={unversionedId:"WEB/css/tablas/tablas",id:"WEB/css/tablas/tablas",title:"tablas",description:"+ table-layout",source:"@site/docs/WEB/css/15_tablas/01_tablas.md",sourceDirName:"WEB/css/15_tablas",slug:"/WEB/css/tablas/tablas",permalink:"/mytrip/docs/WEB/css/tablas/tablas",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"CSS",previous:{title:"listas",permalink:"/mytrip/docs/WEB/css/listas/listas"},next:{title:"imagenes",permalink:"/mytrip/docs/WEB/css/imagenes/imagenes"}},c={},i=[],p={toc:i};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tablas"},"tablas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table-layout"),': define como se comportan las dimensiones de una tabla y los anchos de las "columnas":',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"automatic: valor por defecto"),(0,r.kt)("li",{parentName:"ul"},"fixed: necesita un width declarado, si no se le da un ancho a cada columna se distribuyen equitativamente.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".tabla{\n    table-layout:fixed;\n    width:100%;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"caption-side"),": define donde se coloca el caption de una tabla",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"top: valor por defecto"),(0,r.kt)("li",{parentName:"ul"},"bottom: se coloca al pie de la tabla")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".tabla{\n    caption-side:bottom;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"border-spacing"),": controla el espaciado entre las celdas recibe una medida en cualquier unidad.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".tabla{\n    border-spacing:10px;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"border-collapse"),": controla si las celdas se mantienen juntas o separadas.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"separate: valor por defecto"),(0,r.kt)("li",{parentName:"ul"},"collapse: junta las celdas")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".tabla{\n    border-collapse:collapse;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"empty-cells"),": controla que hacer con las celdas vacias",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"show: valor por defecto."),(0,r.kt)("li",{parentName:"ul"},"hide: oculta las celdas vacias.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".tabla{\n    empty-cells:hide;\n}\n")))}u.isMDXComponent=!0}}]);