"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[3712],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),i=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=i(t),f=n,m=y["".concat(s,".").concat(f)]||y[f]||p[f]||o;return t?a.createElement(m,c(c({ref:r},u),{},{components:t})):a.createElement(m,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8600:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(7462),n=(t(7294),t(3905));const o={},c="bloque try catch finally",l={unversionedId:"WEB/javascript/manejo_errores/bloque_try_catch_finally",id:"WEB/javascript/manejo_errores/bloque_try_catch_finally",title:"bloque try catch finally",description:"con javascript se puede capturar los errores para ser gestionados para esto se usa el bloque try catch que intenta ejecutar un codigo y si falla en alguna parte se ejecuta el catch que se pasara como parametro el objeto que contiene los datos de la falla.",source:"@site/docs/WEB/javascript/10_manejo_errores/01_bloque_try_catch_finally.md",sourceDirName:"WEB/javascript/10_manejo_errores",slug:"/WEB/javascript/manejo_errores/bloque_try_catch_finally",permalink:"/mytrip/docs/WEB/javascript/manejo_errores/bloque_try_catch_finally",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"JS",previous:{title:"instanceof",permalink:"/mytrip/docs/WEB/javascript/paradigma_poo/instanceof"},next:{title:"clausula throws",permalink:"/mytrip/docs/WEB/javascript/manejo_errores/clausula_throws"}},s={},i=[{value:"try catch",id:"try-catch",level:2},{value:"finally",id:"finally",level:2}],u={toc:i};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bloque-try-catch-finally"},"bloque try catch finally"),(0,n.kt)("p",null,"con javascript se puede capturar los errores para ser gestionados para esto se usa el bloque try catch que intenta ejecutar un codigo y si falla en alguna parte se ejecuta el catch que se pasara como parametro el objeto que contiene los datos de la falla."),(0,n.kt)("h2",{id:"try-catch"},"try catch"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javaScript"},"'use strict'\ntry{\n    x=10;\n}catch(error){\n    console.log(error);\n    console.log(error.name);\n    console.log(error.message);\n}\n\nconsole.log(\"continuamos...\")\n")),(0,n.kt)("h2",{id:"finally"},"finally"),(0,n.kt)("p",null,"la instruccion ",(0,n.kt)("strong",{parentName:"p"},"finally")," es opcional al momento de usar try catch y le indica a javascript que  el codigo que esta en este bloque se debe ejecutar ya sea cuando se ejecuta correctamente o cuando no en otras palabras no importa si se ejecuto el ",(0,n.kt)("strong",{parentName:"p"},"try")," o si se ejecuto el ",(0,n.kt)("strong",{parentName:"p"},"catch")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javaScript"},"'use strict'\ntry{\n    x=10;\n}catch(error){\n    console.log(error)\n}finally{\n    console.log(\"continuamos...\")\n}\n\n")))}p.isMDXComponent=!0}}]);