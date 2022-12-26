"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(v,l(l({ref:t},i),{},{components:r})):n.createElement(v,l({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="obtener elementos",s={unversionedId:"WEB/javascript/document_object_model/obtener_elementos",id:"WEB/javascript/document_object_model/obtener_elementos",title:"obtener elementos",description:"Para poder seleccionar elementos del DOM javascript cuenta con el objeto document que tiene varias formas de seleccionar un elemento, la mas usada en javascript es el id por eso la frase.",source:"@site/docs/WEB/javascript/11_document_object_model/02_obtener_elementos.md",sourceDirName:"WEB/javascript/11_document_object_model",slug:"/WEB/javascript/document_object_model/obtener_elementos",permalink:"/mytrip/docs/WEB/javascript/document_object_model/obtener_elementos",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"JS",previous:{title:"Introduccion al DOM",permalink:"/mytrip/docs/WEB/javascript/document_object_model/introduccion"},next:{title:"Nodelist a Array",permalink:"/mytrip/docs/WEB/javascript/document_object_model/convertir_nodelist_a_array"}},c={},p=[{value:"Por ID",id:"por-id",level:2},{value:"Por css",id:"por-css",level:2}],i={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"obtener-elementos"},"obtener elementos"),(0,o.kt)("p",null,"Para poder seleccionar elementos del ",(0,o.kt)("strong",{parentName:"p"},"DOM")," javascript cuenta con el objeto ",(0,o.kt)("strong",{parentName:"p"},"document")," que tiene varias formas de seleccionar un elemento, la mas usada en javascript es el ",(0,o.kt)("strong",{parentName:"p"},"id")," por eso la frase. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Se debe usar los ",(0,o.kt)("strong",{parentName:"p"},"id")," para javascript y las ",(0,o.kt)("strong",{parentName:"p"},"class")," para css.")),(0,o.kt)("p",null,"Actualmente para seleccionar nodos en javascript se usa los metodos que hacen referencia a los id del elemento o se usa querys que usa css para dar estilos a los elementos para lograr seleccionar el elemento."),(0,o.kt)("h2",{id:"por-id"},"Por ID"),(0,o.kt)("p",null,"Acceder a un elemento a traves de su id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-HTML"},'<div id="title"></div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//al elemento que tenga como atributo id el valor title\nconst title=document.getElementById('title');\n\ntitle.textContent=\"Hola mundo\"; //cambia el valor de su contenido\n")),(0,o.kt)("h2",{id:"por-css"},"Por css"),(0,o.kt)("p",null,"se puede seleccionar un elemento o varios usando los mismos valores que se usan para dar estilos a los elementos en css. para esto tenemos dos selectores el ",(0,o.kt)("strong",{parentName:"p"},".querySelector")," y el ",(0,o.kt)("strong",{parentName:"p"},"querySelectorAll")," lo que los diferencia es que el primero solo trae el primer elemento que encuentra mientras el segundo trae todos los elementos."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nota:los seudoelementos no pueden accederse de esta forma")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-HTML"},'<p class="paragraph">esto es un texto</p>\n<p class="paragraph">esto es otro texto</p>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\n//primer elemento que corresponda al selector\ndocument.querySelector('.paragraph')\n\n//todos los elementos que correspondan al selector, (devuelve nodeList)\ndocument.querySelectorAll('')\n")))}u.isMDXComponent=!0}}]);