"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[1972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,v=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return n?o.createElement(v,l(l({ref:t},i),{},{components:n})):o.createElement(v,l({ref:t},i))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},l="eventos",u={unversionedId:"WEB/javascript/document_object_model/eventos",id:"WEB/javascript/document_object_model/eventos",title:"eventos",description:"Es cualquier cosa que sucede en el documento. No necesariamente interacciones con el usuario.",source:"@site/docs/WEB/javascript/11_document_object_model/11_eventos.md",sourceDirName:"WEB/javascript/11_document_object_model",slug:"/WEB/javascript/document_object_model/eventos",permalink:"/mytrip/docs/WEB/javascript/document_object_model/eventos",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"JS",previous:{title:"Fragmentos de codigo",permalink:"/mytrip/docs/WEB/javascript/document_object_model/fragment"},next:{title:"Manejo de estilos desde javascript",permalink:"/mytrip/docs/WEB/javascript/document_object_model/estilos"}},c={},s=[{value:"eventos de raton",id:"eventos-de-raton",level:2},{value:"eventos de teclado",id:"eventos-de-teclado",level:2},{value:"objeto evento",id:"objeto-evento",level:2},{value:"evitar comportamiento por defecto",id:"evitar-comportamiento-por-defecto",level:2},{value:"Delegacion de eventos",id:"delegacion-de-eventos",level:2},{value:"Notas",id:"notas",level:2},{value:"Documentacion",id:"documentacion",level:2}],i={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventos"},"eventos"),(0,a.kt)("p",null,"Es cualquier cosa que sucede en el documento. No necesariamente interacciones con el usuario."),(0,a.kt)("p",null,"Ejemplos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"El contenido se ha leido."),(0,a.kt)("li",{parentName:"ul"},"El contenido se ha cargado."),(0,a.kt)("li",{parentName:"ul"},"El usuario mueve el raton."),(0,a.kt)("li",{parentName:"ul"},"el usuario pulsa una tecla."),(0,a.kt)("li",{parentName:"ul"},"la ventana se ha cerrado.")),(0,a.kt)("p",null,"Se suguiere que cuando deseemos iniciar una accion cuando ocurra un evento se use el metodo **addEventListener('event',callback);"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst button = document.getElementById('button')\nbutton.addEventListener('click',()=>{\n    console.log(\"CLICK\");\n});\n")),(0,a.kt)("h2",{id:"eventos-de-raton"},"eventos de raton"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"evento"),(0,a.kt)("th",{parentName:"tr",align:null},"descripcion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"click"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando pulsamos el boton izquierdo del raton")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dbclick"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando pulsamos dos veces seguidas el boton izquierdo del raton")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mouseenter"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando entramos en la zona que tiene el evento")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mouseleave"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando salimos de la zona que tiene el evento")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mousedown"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando pulsamos y no soltamos el boton izquierdo del raton")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mouseup"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando soltamos el boton izquierdo del raton")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mousemove"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando movemos el raton")))),(0,a.kt)("h2",{id:"eventos-de-teclado"},"eventos de teclado"),(0,a.kt)("p",null,"los eventos de teclado suceden cuando se tiene una accion con el teclado aunque se tiene que tener presente el elemento que puede capturar estos eventos. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"evento"),(0,a.kt)("th",{parentName:"tr",align:null},"descripcion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keydown"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando pulsamos una tecla")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keyup"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando soltamos una tecla")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keypress"),(0,a.kt)("td",{parentName:"tr",align:null},"cuando pulsamos una tecla y no la soltamos")))),(0,a.kt)("h2",{id:"objeto-evento"},"objeto evento"),(0,a.kt)("p",null,"cuando sucede un evento, nos devuelve un objeto tipo evento que nos puede dar mucha informacion del evento y se puede capturar colocandolo como parametro en la funcion callback"),(0,a.kt)("p",null,"ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const button = document.getElementById('button')\nbutton.addEventListener('click',(e)=>{\n    console.log(e);//todo el objeto evento\n    console.log(e.target);//informacion del evento.\n});\n")),(0,a.kt)("h2",{id:"evitar-comportamiento-por-defecto"},"evitar comportamiento por defecto"),(0,a.kt)("p",null,"hay comportamientos por defecto que el navegador tiene con ciertos eventos el mas comun es el evento ",(0,a.kt)("strong",{parentName:"p"},"submit")," de un formulario que actualiza una pagina y se evita de la siguiente forma."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const formulario = document.getElementById('formulario')\nformulario.addEventListener('submit',(e)=>{\n    e.preventDefault();\n});\n")),(0,a.kt)("h2",{id:"delegacion-de-eventos"},"Delegacion de eventos"),(0,a.kt)("p",null,"De esta forma podemos hacer que los elementos hijos tengan el mismo comportamiento agregando un nuevo parametro a addEventListener, indicando que queremos que inicie la captura del evento en elementos que esten por debajo del elemento que se le asigna el evento."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const forma=document.getElementById('forma');\nforma.addEventListener('focus',(evento)=>{\n    evento.target.style.background='yellow'\n},true);\n")),(0,a.kt)("h2",{id:"notas"},"Notas"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"cuando se tiene el mismo evento para varios elementos que pueden compartir dise\xf1o y valores se recomienda que se coloque el evento a la escucha al padre y que se localice el elemento que produjo el evento desde este, esto conviene mucho al rendimiento del navegador como a la programcion ya que si tenemos 100 elementos no es optimo poner a la escucha a estos 100 elementos sino agruparlos en un contenedor y colocar este a la escucha."),(0,a.kt)("li",{parentName:"ol"},"los eventos pueden ser escuchados o ejecutados, para ejecutarlos debemos capturar el elemento con la nomenclatura del punto y el evento que queremos que se ejecute con los parentesis de la funcion.")),(0,a.kt)("h2",{id:"documentacion"},"Documentacion"),(0,a.kt)("p",null,"Existen muchos eventos mozilla nos brinda la siguiente ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/es/docs/Web/Events"},"documentacion"),"."))}d.isMDXComponent=!0}}]);