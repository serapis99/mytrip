"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[2146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="Etiquetas semanticas Parte 1",l={unversionedId:"WEB/html/Secciones/header_main_footer",id:"WEB/html/Secciones/header_main_footer",title:"Etiquetas semanticas Parte 1",description:"Cuando hablamos de etiquetas semanticas, son etiquetas que comienzan a tener un valor a nivel de significado tanto para el navegador como para el usuario haciendo que se pueda entender que representa el valor que contienen estas etiquetas.",source:"@site/docs/WEB/html/02_Secciones/02_header_main_footer.md",sourceDirName:"WEB/html/02_Secciones",slug:"/WEB/html/Secciones/header_main_footer",permalink:"/mytrip/docs/WEB/html/Secciones/header_main_footer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"HTML",previous:{title:"Titulos y Parrafos",permalink:"/mytrip/docs/WEB/html/Secciones/titulos_parrafos"},next:{title:"Etiquetas semanticas Parte 2",permalink:"/mytrip/docs/WEB/html/Secciones/section_article"}},c={},s=[{value:"header",id:"header",level:2},{value:"main",id:"main",level:2},{value:"footer",id:"footer",level:2}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"etiquetas-semanticas-parte-1"},"Etiquetas semanticas Parte 1"),(0,r.kt)("p",null,"Cuando hablamos de etiquetas semanticas, son etiquetas que comienzan a tener un valor a nivel de significado tanto para el navegador como para el usuario haciendo que se pueda entender que representa el valor que contienen estas etiquetas."),(0,r.kt)("h2",{id:"header"},"header"),(0,r.kt)("p",null,"Esta etiqueta nos sirve para representar la cabecera del documento (toda la pagina web) o la cabecera de un articulo ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," (es otra etiqueta que puede contener un header en su interior)."),(0,r.kt)("p",null,"Normalmente en la etiqueta header se va a contener el menu de navegacion los llamados ",(0,r.kt)("inlineCode",{parentName:"p"},"navbar"),", el logo de la empresa y en ciertos casos las redes sociales."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<header>la cabecera del documento</header>\n")),(0,r.kt)("h2",{id:"main"},"main"),(0,r.kt)("p",null,"Con la etiqueta main estamos indicandole al navegador que esta etiqueta contiene todo el cuerpo del documento, en otras palabra aqui va la informacion de peso del documento si lo asociamos a una historia aqui va el inicio, el nudo y el desenlace. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<main>historia de la muerte</main>\n")),(0,r.kt)("h2",{id:"footer"},"footer"),(0,r.kt)("p",null,"En esta etiqueta va el pie de pagina de un articulo o del documento. normalmente aqui va la licencia, formas de contacto, redes sociales, la bibliografia. entre otras cosas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<footer>hecho por: alguien</footer>\n")))}p.isMDXComponent=!0}}]);