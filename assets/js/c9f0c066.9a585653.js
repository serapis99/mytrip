"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[9014],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},u=function(e){var a=i(e.components);return r.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(v,t(t({ref:a},u),{},{components:n})):r.createElement(v,t({ref:a},u))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=n.length,t=new Array(l);t[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,t[1]=s;for(var i=2;i<l;i++)t[i]=n[i];return r.createElement.apply(null,t)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1926:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const l={},t="Uso de var, let o const",s={unversionedId:"WEB/javascript/introduccion/uso_de_var_let_const",id:"WEB/javascript/introduccion/uso_de_var_let_const",title:"Uso de var, let o const",description:"En todos los lenguajes existen variables que son contenedores de informacion que ira cambiando dependiendo al algoritmo ejemplo el contador de vidas de un juego este puede aumentar o disminuir dependiendo a ciertas sircunstancias.",source:"@site/docs/WEB/javascript/01_introduccion/07_uso_de_var_let_const.md",sourceDirName:"WEB/javascript/01_introduccion",slug:"/WEB/javascript/introduccion/uso_de_var_let_const",permalink:"/mytrip/docs/WEB/javascript/introduccion/uso_de_var_let_const",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"JS",previous:{title:"Interracion con usuarios",permalink:"/mytrip/docs/WEB/javascript/introduccion/Interaccion_con_usuario"},next:{title:"uso de strict",permalink:"/mytrip/docs/WEB/javascript/introduccion/uso_strict"}},c={},i=[{value:"variables globales no declaradas",id:"variables-globales-no-declaradas",level:2},{value:"variables declaradas con var",id:"variables-declaradas-con-var",level:2},{value:"variables declaradas con let",id:"variables-declaradas-con-let",level:2},{value:"constantes declaradas con const",id:"constantes-declaradas-con-const",level:2},{value:"Declaracion de multiples variables",id:"declaracion-de-multiples-variables",level:2}],u={toc:i};function d(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uso-de-var-let-o-const"},"Uso de var, let o const"),(0,o.kt)("p",null,"En todos los lenguajes existen variables que son contenedores de informacion que ira cambiando dependiendo al algoritmo ejemplo el contador de vidas de un juego este puede aumentar o disminuir dependiendo a ciertas sircunstancias. "),(0,o.kt)("h2",{id:"variables-globales-no-declaradas"},"variables globales no declaradas"),(0,o.kt)("p",null,"en javascript se puede crear una variable dando un nombre a la variable seguido del signo igual y luego el valor que queremos que almacene."),(0,o.kt)("p",null,"Ejemplo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"vidas=3\n")),(0,o.kt)("h2",{id:"variables-declaradas-con-var"},"variables declaradas con var"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"virtualmente declara las variables al inicio del documento, al inicio de lectura del algoritmo."),(0,o.kt)("li",{parentName:"ol"},"las variables de declaradas con var no estan limitadas al bloque donde se crean por lo tanto se vuelven variables globales")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var nombre="ruben"\n\n{\n    var nombre="gacha"\n    console.log(nombre); //muestra gacha ya que fue el ultimo valor de la variable\n}\n\nconsole.log(nombre); // muestra gacha ya que la declaracion con var funciona asi la variable ya esta creada y la vuelve global\n')),(0,o.kt)("h2",{id:"variables-declaradas-con-let"},"variables declaradas con let"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"solo declara la variable cuando la encuentra en el documento, segun el algoritmo creado."),(0,o.kt)("li",{parentName:"ol"},"su alcance se limita al bloque en que fue creado, si es creado al inicio del documento se vuelve variable global y puede ser usado en cualquier bloque interno."),(0,o.kt)("li",{parentName:"ol"},"para usar el mismo nombre de variable global en un bloque interno sin afectar a este se puede definir una variable del mismo nombre en el bloque y este no afectara al de afuera.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let nombre="ruben"\n\n{\n    let nombre="gacha"\n    console.log(nombre); // muestra gacha ya que usa la variable local\n}\n\nconsole.log(nombre); //muestra ruben ya que usa la variable global\n')),(0,o.kt)("h2",{id:"constantes-declaradas-con-const"},"constantes declaradas con const"),(0,o.kt)("p",null,"En algunos casos necesitamos que una variable no cambie su valor durante la ejecucion del algoritmo para esto se usan las constantes y para poder indicarle a javascript que queremos que la variable la trate como constante debemos decirle al momento de crear la variable, poniendo la palabra reservada ",(0,o.kt)("strong",{parentName:"p"},"const")," seguido del nombre de la variable, el simbolo igual y por ultimo el valor de la constante."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"por convencion o por buena practica se recomienda declarar las constantes en mayusculas")),(0,o.kt)("p",null,"Ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const NOMBRE="ruben"\n')),(0,o.kt)("h2",{id:"declaracion-de-multiples-variables"},"Declaracion de multiples variables"),(0,o.kt)("p",null,"se puede declarar multiples variables en una sola linea separando cada variable con una coma."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var nombre="ruben" , apellido="gacha", x, y\n')))}d.isMDXComponent=!0}}]);