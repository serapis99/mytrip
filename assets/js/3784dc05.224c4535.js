"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[3294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Etiquetas semanticas Parte 2",c={unversionedId:"WEB/html/Secciones/section_article",id:"WEB/html/Secciones/section_article",title:"Etiquetas semanticas Parte 2",description:"section",source:"@site/docs/WEB/html/02_Secciones/03_section_article.md",sourceDirName:"WEB/html/02_Secciones",slug:"/WEB/html/Secciones/section_article",permalink:"/mytrip/docs/WEB/html/Secciones/section_article",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"HTML",previous:{title:"Etiquetas semanticas Parte 1",permalink:"/mytrip/docs/WEB/html/Secciones/header_main_footer"},next:{title:"nav",permalink:"/mytrip/docs/WEB/html/Secciones/nav"}},s={},l=[{value:"section",id:"section",level:2},{value:"section contiene article",id:"section-contiene-article",level:2},{value:"article contiene section",id:"article-contiene-section",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etiquetas-semanticas-parte-2"},"Etiquetas semanticas Parte 2"),(0,a.kt)("h2",{id:"section"},"section"),(0,a.kt)("p",null,"es un contenedor generico que agrupa contenido que esta relacionado. cuando creamos bloques cuyo contenido es parte de un bloque total usaremos section."),(0,a.kt)("p",null,"los section pueden tener un encabezado, a demas puede admitir las etiquetas ",(0,a.kt)("strong",{parentName:"p"},"header")," y ",(0,a.kt)("strong",{parentName:"p"},"footer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},"<section></section>\n")),(0,a.kt)("h1",{id:"article"},"article"),(0,a.kt)("p",null,"Es un contenedor que representa contenido independiente, es decir, podemos leer ese fragmento en cualquier otro sitio y tendria sentido por si mismo."),(0,a.kt)("p",null,"los articles debe tener un encabezado para ser sintacticamente correcto, a demas puede admitir las etiquetas ",(0,a.kt)("strong",{parentName:"p"},"header")," y ",(0,a.kt)("strong",{parentName:"p"},"footer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},"<article></article>\n")),(0,a.kt)("h1",{id:"aside"},"aside"),(0,a.kt)("p",null,"se utiliza para representar contenido relacionado pero que no forma parte del contenido principal."),(0,a.kt)("p",null,"aqui puede ir paginas relacionadas pero que no hacen parte del tema del documento. ejemplo publicida. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},"<aside></aside>\n")),(0,a.kt)("h1",{id:"anidamiento"},"anidamiento"),(0,a.kt)("h2",{id:"section-contiene-article"},"section contiene article"),(0,a.kt)("p",null,"un section puede contener articles, por ejemplo, si tenemos varios articulos que hablen sobre etiquetas HTML, debe ir dentro de un section, ya que es contenido relacionado entre si, y los article serian contenido independiente porque podriamos leer uno sin haber leido el resto, y seguiria teniendo sentido."),(0,a.kt)("p",null,"Ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},"<body>\n    <header>\n        <h1>NOTICIAS NACIONALES</h1>\n    </header>\n\n    <main>\n        <section>\n            <h2>Noticias del dia</h2>\n            <article>\n                <h3>Noticia 1</h3>\n                <p>detalles de la noticia</p>\n            </article>\n            <article>\n                <h3>Noticia 2</h3>\n                <p>detalles de la noticia</p>\n            </article>\n            <article>\n                <h3>Noticia 3</h3>\n                <p>detalles de la noticia</p>\n            </article>\n        </section>\n    </main>\n\n    <footer>2022</footer>\n</body>\n")),(0,a.kt)("h2",{id:"article-contiene-section"},"article contiene section"),(0,a.kt)("p",null,"tambien existe el caso en el que un article contenga varias secciones, el articulo independiente podria ser navegadores y este contener secciones como navegadores mas utilizados. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},"<body>\n    <header>\n        <h1>NOTICIAS NACIONALES</h1>\n    </header>\n    <article>\n        <h2>Navegadores mas utilizados en 2020</h2>\n        <section>\n            <header><h3>Chrome</h3></header>\n            <p>descripcion del navegador</p>\n            <footer>creador por google</footer>\n        </section>\n        <section>\n            <header><h3>firefox</h3></header>\n            <p>descripcion del navegador</p>\n            <footer>creador por Chris Hofmann</footer>\n        </section>\n    </article>\n    <footer>2020</footer>\n</body>\n")))}d.isMDXComponent=!0}}]);