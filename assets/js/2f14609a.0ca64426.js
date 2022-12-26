"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[9079],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),l=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,y=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return a?t.createElement(y,s(s({ref:n},u),{},{components:a})):t.createElement(y,s({ref:n},u))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9822:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=a(7462),r=(a(7294),a(3905));const o={},s="async y await",c={unversionedId:"WEB/javascript/peticiones_http/async_await",id:"WEB/javascript/peticiones_http/async_await",title:"async y await",description:"nos permite hacer funciones ansincronas de forma nativa en javascript. para esto esta la palabra clave async y lo que hace es indicarle que una funcion nos va a devolver una promesa.",source:"@site/docs/WEB/javascript/12_peticiones_http/05_async_await.md",sourceDirName:"WEB/javascript/12_peticiones_http",slug:"/WEB/javascript/peticiones_http/async_await",permalink:"/mytrip/docs/WEB/javascript/peticiones_http/async_await",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"JS",previous:{title:"Fetch",permalink:"/mytrip/docs/WEB/javascript/peticiones_http/fetch"},next:{title:"libreria axios",permalink:"/mytrip/docs/WEB/javascript/peticiones_http/libreria_axios"}},i={},l=[{value:"uso de async",id:"uso-de-async",level:2},{value:"uso de await",id:"uso-de-await",level:2}],u={toc:l};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"async-y-await"},"async y await"),(0,r.kt)("p",null,"nos permite hacer funciones ansincronas de forma nativa en javascript. para esto esta la palabra clave ",(0,r.kt)("strong",{parentName:"p"},"async")," y lo que hace es indicarle que una funcion nos va a devolver una promesa."),(0,r.kt)("h2",{id:"uso-de-async"},"uso de async"),(0,r.kt)("p",null,"solo necesitamos colocar la palabra clave ",(0,r.kt)("strong",{parentName:"p"},"async")," antes de crear la funcion en esta ocasion usamos una funcion flecha pero tambien funciona con ",(0,r.kt)("strong",{parentName:"p"},"async function()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const getName=async()=>{\n    return new Promise((resolve,reject)=>{\n        setTimeout(()=>{\n            resolve("Dorian");\n        },3000);\n    });\n}\n\ngetName().then(console.log);\n')),(0,r.kt)("p",null,"El problema nace cuando se intenta usar una funcion que use una funcion asincronica, ya que esta funcion intenta resolver los datos que utilizan esta funcion que no ha sido resuelta ya que se ejecutan despues de llamar la funcion asincronica."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const getName=async()=>{\n    return new Promise((resolve,reject)=>{\n        setTimeout(()=>{\n            resolve("Dorian");\n        },3000);\n    });\n}\n\nconst sayHello=()=>{\n    const name=getName() //llamado de la funcion asincronica\n    return `hello ${name}` //uso de los datos de la funcion sin resolver \n}\n\nconsole.log(sayHello());\n')),(0,r.kt)("h2",{id:"uso-de-await"},"uso de await"),(0,r.kt)("p",null,"para solucionar el problema que nos deja ",(0,r.kt)("strong",{parentName:"p"},"async")," se crea la instruccion ",(0,r.kt)("strong",{parentName:"p"},"await"),"\nque le indica al programa que espere a que la peticion es resuelta para ejecutar el resto de lineas, pero solo puede funcionar en funciones asincronicas por lo tanto debemos convertir la funcion que llama a funciones ansincronicas a una funcion asincronica."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const getName=async()=>{\n    return new Promise((resolve,reject)=>{\n        setTimeout(()=>{\n            resolve("Dorian");\n        },3000);\n    });\n}\n\nconst sayHello=async ()=>{\n    const name=await getName() //llamado de la funcion asincronica\n    return `hello ${name}` //uso de los datos de la funcion sin resolver \n}\n\nsayHello().then(console.log);\n')))}p.isMDXComponent=!0}}]);