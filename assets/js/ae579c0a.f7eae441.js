"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[6530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),g=o,d=l["".concat(s,".").concat(g)]||l[g]||m[g]||n;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={},i="github pages",c={unversionedId:"Programacion/Basico/Conocimiento Comun/Git y Github/githube_pages",id:"Programacion/Basico/Conocimiento Comun/Git y Github/githube_pages",title:"github pages",description:"github nos da la posibilidad de publicar un sitio web de forma gratuita para mostrar en paginas web la informacion de nuestro repositorio, como puede ser una documentacion visual.",source:"@site/docs/Programacion/Basico/01_Conocimiento Comun/02_Git y Github/15_githube_pages.md",sourceDirName:"Programacion/Basico/01_Conocimiento Comun/02_Git y Github",slug:"/Programacion/Basico/Conocimiento Comun/Git y Github/githube_pages",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/githube_pages",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"ProgramacionBasica",previous:{title:"Etiquetas o tags",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/etiquetas"},next:{title:"trabajo colaborativo",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/trabajo_colaborativo"}},s={},u=[],p={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github-pages"},"github pages"),(0,o.kt)("p",null,"github nos da la posibilidad de publicar un sitio web de forma gratuita para mostrar en paginas web la informacion de nuestro repositorio, como puede ser una documentacion visual. "),(0,o.kt)("p",null,"para esto toca trabajar con una rama especial llamada gh-pages y tenemos su ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"documentacion")," para saber mas de esta rama. "),(0,o.kt)("p",null,"ya con el manejo de ramas se puede crear una rama independiente desde el inicio del proyecto para que no tenga el codigo de desarrollo sino codigo html que documente el desarrollo. "),(0,o.kt)("p",null,"Ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#crear la rama gh-pages\ngit branch gh-pages\n\n#movernos a la rama gh-pages\ngit checkout gh-pages\n\n#agregar remoto si no se ha hecho\ngit remote add nombre_remoto \nruta_repositorio\n\n#guardar datos en el remoto de la rama gh-pages\ngit push nombre_remoto gh-pages\n\n#descargar cambios de la rama gh-pages\ngit pull origin gh-pages\n")))}m.isMDXComponent=!0}}]);