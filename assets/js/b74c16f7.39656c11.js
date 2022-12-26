"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[6446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(c,".").concat(d)]||p[d]||l[d]||a;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Etiquetas o tags",s={unversionedId:"Programacion/Basico/Conocimiento Comun/Git y Github/etiquetas",id:"Programacion/Basico/Conocimiento Comun/Git y Github/etiquetas",title:"Etiquetas o tags",description:"una etiqueta nos permite crear una bandera donde podemos indicar que el codigo ya esta listo para una determinada version el tema de las versiones no lo explica semver.",source:"@site/docs/Programacion/Basico/01_Conocimiento Comun/02_Git y Github/14_etiquetas.md",sourceDirName:"Programacion/Basico/01_Conocimiento Comun/02_Git y Github",slug:"/Programacion/Basico/Conocimiento Comun/Git y Github/etiquetas",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/etiquetas",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"ProgramacionBasica",previous:{title:"remotos",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/remotos"},next:{title:"github pages",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/githube_pages"}},c={},u=[],m={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"etiquetas-o-tags"},"Etiquetas o tags"),(0,o.kt)("p",null,"una etiqueta nos permite crear una bandera donde podemos indicar que el codigo ya esta listo para una determinada version el tema de las versiones no lo explica ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/lang/es/"},"semver"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# listar etiquetas\ngit tag\n\n# crea una etiqueta normal mente v.#.#.#\ngit tag nombre-de-versi\xf3n\n\n# eliminar una etiqueta\ngit tag -d nombre-de-versi\xf3n\n\n# mostrar informaci\xf3n de una etiqueta\ngit show nombre-de-versi\xf3n\n\n# sincronizando la etiqueta del repositorio local al remoto\ngit add .\ngit tag nombre-de-version\ngit commit -m "mensaje"\ngit push origin nombre-de-version\n\n# generando una etiqueta anotada (con mensaje de commit)\ngit add .\ngit tag -a "nombre_version" -m "Mensaje de la etiqueta"\n#sube las etiquetas\ngit push --tags\n')))}l.isMDXComponent=!0}}]);