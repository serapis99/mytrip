"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[2651],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(y,p(p({ref:t},l),{},{components:o})):r.createElement(y,p({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var c=2;c<a;c++)p[c]=o[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9115:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={},p="Uso de Propotype",s={unversionedId:"WEB/javascript/objetos/uso_propotype",id:"WEB/javascript/objetos/uso_propotype",title:"Uso de Propotype",description:"En algunos casos necesitamos agregar propiedades al objeto prototipo para esto podemos usar propotype que nos permite agregar una propiedad al objeto y alterar todos los objetos creados a partir de este prototipo con el nuevo valor que le damos.",source:"@site/docs/WEB/javascript/08_objetos/07_uso_propotype.md",sourceDirName:"WEB/javascript/08_objetos",slug:"/WEB/javascript/objetos/uso_propotype",permalink:"/mytrip/docs/WEB/javascript/objetos/uso_propotype",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"JS",previous:{title:"metodo constructor en objetos",permalink:"/mytrip/docs/WEB/javascript/objetos/metodo_constructor_objetos"},next:{title:"metodo call",permalink:"/mytrip/docs/WEB/javascript/objetos/metodo_call"}},i={},c=[],l={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"uso-de-propotype"},"Uso de Propotype"),(0,n.kt)("p",null,"En algunos casos necesitamos agregar propiedades al objeto prototipo para esto podemos usar ",(0,n.kt)("strong",{parentName:"p"},"propotype")," que nos permite agregar una propiedad al objeto y alterar todos los objetos creados a partir de este prototipo con el nuevo valor que le damos."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"function Persona(nombre, apellido, edad){\n    this.nombre=nombre;\n    this.apellido=apellido;\n}\n\nPersona.prototype.edad=18\n")))}u.isMDXComponent=!0}}]);