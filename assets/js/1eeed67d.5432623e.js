"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[9402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="transform",s={unversionedId:"WEB/css/Transformaciones/transformaciones",id:"WEB/css/Transformaciones/transformaciones",title:"transform",description:"nos permite modificar el espacio de coordenadas de un elemento:",source:"@site/docs/WEB/css/22_Transformaciones/01_transformaciones.md",sourceDirName:"WEB/css/22_Transformaciones",slug:"/WEB/css/Transformaciones/transformaciones",permalink:"/mytrip/docs/WEB/css/Transformaciones/transformaciones",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"CSS",previous:{title:"transiciones",permalink:"/mytrip/docs/WEB/css/Transiciones/transiciones"},next:{title:"animaciones",permalink:"/mytrip/docs/WEB/css/animaciones/animation"}},l={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transform"},"transform"),(0,a.kt)("p",null,"nos permite modificar el espacio de coordenadas de un elemento:"),(0,a.kt)("p",null,"posee las siguientes funciones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotate"),": rota un elemento 2D en sentido de las manillas de reloj ",(0,a.kt)("inlineCode",{parentName:"li"},"rotate(deg)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotateX"),": rota en x ",(0,a.kt)("inlineCode",{parentName:"li"},"rotateX(deg)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotateY"),": rota en y ",(0,a.kt)("inlineCode",{parentName:"li"},"rotateY(deg)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rotateZ"),": rota en z ",(0,a.kt)("inlineCode",{parentName:"li"},"rotateZ(deg)")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scale"),": Especifica una operacion de escalado 2D ",(0,a.kt)("inlineCode",{parentName:"li"},"scale(sx[, sy])")," => scale(2.5, 4)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scaleX"),": escala en x scaleX(2.5)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scaleY"),": escala en y scaleY(4)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"skew"),": (No usar) usar los hijos, y se trata en inclinar el elemento",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"skewX"),": skewX(deg) skewX(90deg)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"skewY"),": skewY(deg) skewY(90deg)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"translate"),": traslacion en 2D ",(0,a.kt)("inlineCode",{parentName:"li"},"translate(tx[, ty])")," tanto en x como en y.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"translateX: translateX(50px)"),(0,a.kt)("li",{parentName:"ul"},"translateY: translateY(50px)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"div:active{\n    transform:rotateZ(90deg);\n    transition:transform 4s 0s linear;\n}\n")))}m.isMDXComponent=!0}}]);