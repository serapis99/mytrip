"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[6380],{3905:(e,o,a)=>{a.d(o,{Zo:()=>u,kt:()=>p});var r=a(7294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function t(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?t(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,r,n=function(e,o){if(null==e)return{};var a,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var o=r.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},u=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var a=e.components,n=e.mdxType,t=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||t;return a?r.createElement(g,i(i({ref:o},u),{},{components:a})):r.createElement(g,i({ref:o},u))}));function p(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var t=a.length,i=new Array(t);i[0]=d;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<t;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6737:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const t={},i="Iniciar el seguimiento en directorio local",s={unversionedId:"Programacion/Basico/Conocimiento Comun/Git y Github/inicializacion_directorio_local",id:"Programacion/Basico/Conocimiento Comun/Git y Github/inicializacion_directorio_local",title:"Iniciar el seguimiento en directorio local",description:"Lo primero que debemos hacer es ejecutar un comando en la raiz del proyecto que nos permitira iniciar el seguimiento de nuestros archivos, para esto el comando crea dos areas una de ensayo y la otra local. con lo que despues de ejecutar el comando tendremos 3 area.",source:"@site/docs/Programacion/Basico/01_Conocimiento Comun/02_Git y Github/03_inicializacion_directorio_local.md",sourceDirName:"Programacion/Basico/01_Conocimiento Comun/02_Git y Github",slug:"/Programacion/Basico/Conocimiento Comun/Git y Github/inicializacion_directorio_local",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/inicializacion_directorio_local",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"ProgramacionBasica",previous:{title:"Configuracion inicial",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/configuracion_inicial"},next:{title:"pasar de la rama master a main",permalink:"/mytrip/docs/Programacion/Basico/Conocimiento Comun/Git y Github/master_a_main"}},l={},c=[{value:"vinculando repositorio remoto",id:"vinculando-repositorio-remoto",level:2},{value:"Estatus de los documentos",id:"estatus-de-los-documentos",level:2}],u={toc:c};function m(e){let{components:o,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iniciar-el-seguimiento-en-directorio-local"},"Iniciar el seguimiento en directorio local"),(0,n.kt)("p",null,"Lo primero que debemos hacer es ejecutar un comando en la raiz del proyecto que nos permitira iniciar el seguimiento de nuestros archivos, para esto el comando crea dos areas una de ensayo y la otra local. con lo que despues de ejecutar el comando tendremos 3 area."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"primer area: es el area que tiene todos los archivos los que tienen seguimiento y los que no."),(0,n.kt)("li",{parentName:"ol"},"segunda area: es el area de ensayo y aqui estan los archivos que tienen seguimiento."),(0,n.kt)("li",{parentName:"ol"},"tercera area: es el area local donde se encuentran las instantaneas de los archivos que se estan monitoreando.")),(0,n.kt)("p",null,"Comando:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#comando para iniciar el repositorio\ngit init\n")),(0,n.kt)("p",null,"una vez que se inicia el seguimiento de las versiones con git. todos nuestros archivos de desarrollo pueden pasar por cuatro estados y seguiran pasando por estos estados como en un ciclo."),(0,n.kt)("p",null,"algo a tener encuenta que cuando trabajamos de forma local no pasara por el ultimo estado sino volvera al primer estado sin pasar por el cuarto."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"working Directory (modified):")," este estado existe cuando un archivo de nuestro desarrollo es creado o modificado para que pase al siguiente estado se usaria el siguiente comando."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#agregar todos los archivos usando el comodin del punto\ngit add .\n\n#agregar un archivo en especifico usando el nombre y ruta del archivo desde raiz.\ngit add archivo\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"index/staging (staged):")," sucede cuando ya los archivos modificados y creados tienen una copia en git y para dar una anotacion o guardar ese estado se usa el ",(0,n.kt)("strong",{parentName:"p"},"commit")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#creando el commit con un comentario\ngit commit -m "detalle de los cambios realizados"\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"head/local (commited)"),": en este estado se queda cuando no hay mas cambios en los archivos de aqui se puede enviar un ",(0,n.kt)("strong",{parentName:"p"},"push")," para enviar la informacion del commit al servidor remoto."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'   #enviar los cambios al servidor remoto\n\n   #la primera vez que se vincula el repositorio remoto con el local \n   #en este comando se tiene el nombre del remoto normalmente "origin"\n   #y tambien el nombre de la rama en este caso master\n\n   git push -u origin master\n\n   #si la rama y el repositorio remoto es el mismo solo se tiene que usar \n\n   git push\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"github /remote (remote):")," este estado existe cuando ya todos los archivos modificados estan en el servidor remoto, de hay cualquier persona que necesite actualizar sus archivos tomaria los archivos desde el remoto con el comando ",(0,n.kt)("strong",{parentName:"li"},"pull"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"   #validar y descargar los archivos actuales desde el remoto\n   git pull\n")),(0,n.kt)("h2",{id:"vinculando-repositorio-remoto"},"vinculando repositorio remoto"),(0,n.kt)("p",null,"para hacer la parte del repositorio remoto tenemos que agregar el repositorio remoto a git para esto se usa el comando ",(0,n.kt)("strong",{parentName:"p"},"git remote add")," el siguiente parametro es el nombre que queremos darle al remoto en este caso es ",(0,n.kt)("strong",{parentName:"p"},"origin")," y por ultimo la ruta donde esta el remoto."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"   #agrega la direccion de nuestro repositorio remoto\n\n   #no olvidar que la palabra origin es el nombre que queremos que tenga nuestro remoto\n   \n   git remote add origin direcion_remota\n")),(0,n.kt)("h2",{id:"estatus-de-los-documentos"},"Estatus de los documentos"),(0,n.kt)("p",null,"todos los documentos tienen varios posibles estatus en el estado de ",(0,n.kt)("strong",{parentName:"p"},"working Directory")," los cuales pueden ser:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"M (rojo):")," la M en color rojo nos indica que el archivo tiene una modificacion desde la ultima vez que se guardo."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"?? (rojo):")," los dos signos de pregunta indican que el archivo no ha sido agregado al repositorio"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"M (verde):")," la M en color verde nos indica que el archivo fue modificado y ya tiene una copia en el repositorio."),(0,n.kt)("li",{parentName:"ul"},"A (verde): indica que un archivo ya fue agregado al repositorio y esta en espera para guardar con el commit.")),(0,n.kt)("p",null,"para poder ver en que estado estan nuestros archivos usa el siguiente comando:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#para saber el estado de nuestros archivos\ngit status -s\n")),(0,n.kt)("p",null,"puede que no nos muestre nada debido a que todos los archivos estan guardados y no hay ningun cambio en estos."))}m.isMDXComponent=!0}}]);