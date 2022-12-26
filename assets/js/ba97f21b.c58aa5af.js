"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[9953],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return r?i.createElement(g,l(l({ref:t},s),{},{components:r})):i.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={},l="Explicit grid y implicit grid:",c={unversionedId:"WEB/css/grid/implicid_explicit",id:"WEB/css/grid/implicid_explicit",title:"Explicit grid y implicit grid:",description:"Explicit grid:",source:"@site/docs/WEB/css/19_grid/04_implicid_explicit.md",sourceDirName:"WEB/css/19_grid",slug:"/WEB/css/grid/implicid_explicit",permalink:"/mytrip/docs/WEB/css/grid/implicid_explicit",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"CSS",previous:{title:"funcion repeat()",permalink:"/mytrip/docs/WEB/css/grid/funcion_repeat"},next:{title:"responsive items",permalink:"/mytrip/docs/WEB/css/grid/responsive_items"}},o={},p=[{value:"Explicit grid:",id:"explicit-grid",level:2},{value:"Implicit grid:",id:"implicit-grid",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"explicit-grid-y-implicit-grid"},"Explicit grid y implicit grid:"),(0,n.kt)("h2",{id:"explicit-grid"},"Explicit grid:"),(0,n.kt)("p",null,"Es el grid que declaramos, tanto con ",(0,n.kt)("inlineCode",{parentName:"p"},"grid-template-columns")," como con ",(0,n.kt)("inlineCode",{parentName:"p"},"grid-template-rows")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".grid-container{\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows:repeat(2,100px);\n}\n")),(0,n.kt)("h2",{id:"implicit-grid"},"Implicit grid:"),(0,n.kt)("p",null,"Es el grid que no declaramos, los items que quedan fuera del explicit grid."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"grid-auto-columns"),": Establece que hacer con las columnas no definidas.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".grid-container{\n    grid-auto-columns: 200px;\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"grid-auto-rows"),": Establece que hacer con las filas no definidas.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".grid-container{   \n    grid-auto-rows:200px;\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"grid-auto-flow"),": establece la direccion en la cual se va a pintar el implicit grid. admite 3 valores:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"row(default): se creara filas adiccionales."),(0,n.kt)("li",{parentName:"ul"},"column: se crearan columnas adicionales."),(0,n.kt)("li",{parentName:"ul"},"dense: establece que hacer con los huecos que queden.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".grid-container{   \n    grid-auto-flow:row dense;\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".grid-container{   \n    grid-auto-flow:column dense;\n}\n")))}d.isMDXComponent=!0}}]);