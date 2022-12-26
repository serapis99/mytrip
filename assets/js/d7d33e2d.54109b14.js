"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[4733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},i="Alineamiento",o={unversionedId:"WEB/css/grid/alineamiento",id:"WEB/css/grid/alineamiento",title:"Alineamiento",description:"+ justify-items",source:"@site/docs/WEB/css/19_grid/06_alineamiento.md",sourceDirName:"WEB/css/19_grid",slug:"/WEB/css/grid/alineamiento",permalink:"/mytrip/docs/WEB/css/grid/alineamiento",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"CSS",previous:{title:"responsive items",permalink:"/mytrip/docs/WEB/css/grid/responsive_items"},next:{title:"grid template areas",permalink:"/mytrip/docs/WEB/css/grid/templates_area"}},s={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alineamiento"},"Alineamiento"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"justify-items"),": Alinea los elementos horizontalmente respecto a la celda, admite los valores:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"start"),(0,a.kt)("li",{parentName:"ul"},"end"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"stretch(default)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"align-items"),": Alinea los elementos verticalmente respecto a la celda, admite los valores:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"start"),(0,a.kt)("li",{parentName:"ul"},"end"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"stretch(default)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"place-items"),": engloba las propiedades ",(0,a.kt)("inlineCode",{parentName:"li"},"justify-items")," y ",(0,a.kt)("inlineCode",{parentName:"li"},"align-items"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".grid-container{\n    justify-items:start;\n    align-items: center;\n\n    place-items:start center;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"justify-content"),": alinea los elementos horizontalmente respecto al contenedor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"align-content"),": alinea los elementos verticalmente respecto al contenedor admite los valores:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"start"),(0,a.kt)("li",{parentName:"ul"},"end"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"stretch(default)"),(0,a.kt)("li",{parentName:"ul"},"space-around"),(0,a.kt)("li",{parentName:"ul"},"space-between"),(0,a.kt)("li",{parentName:"ul"},"space-evenly"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"place-content"),": engloba las propiedades ",(0,a.kt)("inlineCode",{parentName:"li"},"align-content")," y ",(0,a.kt)("inlineCode",{parentName:"li"},"justify-content"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".grid-container{\n    justify-content:start;\n    align-content: center;\n    place-content:start center;\n}\n")),(0,a.kt)("p",null,"Tenemos las mismas propiedades con self para los items:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"justify-self"),(0,a.kt)("li",{parentName:"ul"},"align-self"),(0,a.kt)("li",{parentName:"ul"},"place-self")),(0,a.kt)("p",null,"y admiten los valores:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"start"),(0,a.kt)("li",{parentName:"ul"},"end"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"stretch")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".grid-item{\n    justify-self:start;\n    align-self: center;\n    place-self:start center;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"order"),": funciona igual que en ",(0,a.kt)("inlineCode",{parentName:"li"},"flexbox"),", por defecto todos los items tienen ",(0,a.kt)("inlineCode",{parentName:"li"},"order:0")," y trata en que orden se posicionaran los objetos entre mayor sea el numero sera el ultimo y entre menor sera el primero.")))}m.isMDXComponent=!0}}]);