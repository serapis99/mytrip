"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[8704],{3905:(e,r,o)=>{o.d(r,{Zo:()=>m,kt:()=>d});var n=o(7294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function t(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,n,a=function(e,r){if(null==e)return{};var o,n,a={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},m=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var o=e.components,a=e.mdxType,t=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(o),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||t;return o?n.createElement(f,s(s({ref:r},m),{},{components:o})):n.createElement(f,s({ref:r},m))}));function d(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var t=o.length,s=new Array(t);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<t;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9721:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const t={},s="Enviar un correo con python",i={unversionedId:"Automatizacion/Python/Correo/enviar_correo",id:"Automatizacion/Python/Correo/enviar_correo",title:"Enviar un correo con python",description:"Para poder enviar un correo electronico debemos tener presente el servidor que maneja protocolo smtp y el cifrado que esta usando.",source:"@site/docs/Automatizacion/Python/01_Correo/02_enviar_correo.md",sourceDirName:"Automatizacion/Python/01_Correo",slug:"/Automatizacion/Python/Correo/enviar_correo",permalink:"/mytrip/docs/Automatizacion/Python/Correo/enviar_correo",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"AutomatizacionPython",previous:{title:"Configurar correo",permalink:"/mytrip/docs/Automatizacion/Python/Correo/Configurar_correo"},next:{title:"Adjuntar archivos en el correo",permalink:"/mytrip/docs/Automatizacion/Python/Correo/adjuntar_archivo_correo"}},l={},c=[],m={toc:c};function p(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enviar-un-correo-con-python"},"Enviar un correo con python"),(0,a.kt)("p",null,"Para poder enviar un correo electronico debemos tener presente el servidor que maneja protocolo ",(0,a.kt)("inlineCode",{parentName:"p"},"smtp")," y el cifrado que esta usando."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gmail: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"servidor: smtp.gmail.com"),(0,a.kt)("li",{parentName:"ul"},"cifrado: SSl y STARTTLS"),(0,a.kt)("li",{parentName:"ul"},"puerto: SSL: 465 y STARTTLS:587"))),(0,a.kt)("li",{parentName:"ul"},"Hotmail:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"servidor:smtp.office365.com"),(0,a.kt)("li",{parentName:"ul"},"cifrado:STARTTLS"),(0,a.kt)("li",{parentName:"ul"},"puerto: 587")))),(0,a.kt)("p",null,"Teniendo esto contemplado para el servidor que queremos usar para el envio de mensajes creamos las variables segun aplique."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"showLineNumbers",showLineNumbers:!0},'servidor="smtp.gmail.com"\nes_cifrado_SSL=True\nif es_cifrado_SSL:\n    puerto=465\nelse:\n    puerto=587\n')),(0,a.kt)("p",null,"para poder usar el cifrado SSL debemos importar la clase SSL de la siguiente forma:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'import ssl\n\nservidor="smtp.gmail.com"\nes_cifrado_SSL=True\nif es_cifrado_SSL:\n    puerto=465\nelse:\n    puerto=587\n')),(0,a.kt)("p",null,"Otras variables que debemos crear son el usuario, la contrase\xf1a, los destinatarios, el asunto y el cuerpo del mensaje."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"{6-10} showLineNumbers","{6-10}":!0,showLineNumbers:!0},'import ssl\n\nservidor="smtp.gmail.com"\nes_cifrado_SSL=True\n\nusuario="correo@gmail.com"\npassword="contrase\xf1a"\ndestinatario="correo1@gmail.com;correo2@gmail.com;correo3@gmail.com"\nasunto="prueba python"\ncuerpo="hola, quiero preguntarles si les llego este correo jajaja"\n\nif es_cifrado_SSL:\n    puerto=465\nelse:\n    puerto=587\n')),(0,a.kt)("p",null,"para recostruir el mensaje y poderlo enviarlo al servidor como mensaje de email debemos importar la clase  ",(0,a.kt)("inlineCode",{parentName:"p"},"EmailMessage"),"  del modulo ",(0,a.kt)("inlineCode",{parentName:"p"},"email.message"),". "),(0,a.kt)("p",null,"Despues crearemos una instancia de esa clase y comensarremos a pasar los valores ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"{1,18-22} showLineNumbers","{1,18-22}":!0,showLineNumbers:!0},'from email.message import EmailMessage\nimport ssl\n\nservidor="smtp.gmail.com"\nes_cifrado_SSL=True\n\nusuario="correo@gmail.com"\npassword="contrase\xf1a"\ndestinatario="correo1@gmail.com;correo2@gmail.com;correo3@gmail.com"\nasunto="prueba python"\ncuerpo="hola, quiero preguntarles si les llego este correo jajaja"\n\nif es_cifrado_SSL:\n    puerto=465\nelse:\n    puerto=587\n\nem=EmailMessage()\nem[\'From\']=correo\nem[\'To\']=to\nem[\'Subject\']="pruebas en python"\nem.set_content(cuerpo)\n')),(0,a.kt)("p",null,"por ultimo y poder enviar el correo usamos la clase ",(0,a.kt)("inlineCode",{parentName:"p"},"smtplib")," con sus respectivos metodos para poder enviar el correo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"{3,25-34} showLineNumbers","{3,25-34}":!0,showLineNumbers:!0},'from email.message import EmailMessage\nimport ssl\nimport smtplib\n\nservidor="smtp.gmail.com"\nes_cifrado_SSL=True\n\nusuario="correo@gmail.com"\npassword="contrase\xf1a"\ndestinatario="correo1@gmail.com;correo2@gmail.com;correo3@gmail.com"\nasunto="prueba python"\ncuerpo="hola, quiero preguntarles si les llego este correo jajaja"\n\nif es_cifrado_SSL:\n    puerto=465\nelse:\n    puerto=587\n\nem=EmailMessage()\nem[\'From\']=correo\nem[\'To\']=to\nem[\'Subject\']="pruebas en python"\nem.set_content(cuerpo)\n\nif es_cifrado_SSL:\n    contexto=ssl.create_default_context() # crea el cifrado ssl a usar en la conexion\n    with smtplib.SMTP_SSL(servidor,puerto,context=contexto) as smtp: # realiza la peticion de conexion\n        smtp.login(usuario,password) # se loguea usando el usuario y el password\n        smtp.sendmail(usuario,destinatario,em.as_string()) # envia el correo al servidor\nelse:\n    with smtplib.SMTP(servidor, puerto) as server: # realiza la peticion de conexion\n        server.starttls() # crea el cifrado starttls para usar en la conexion\n        server.login(correo, password) # se loguea usando el usuario y el password\n        server.sendmail(correo, to, em.as_string()) # envia el correo al servidor\n')))}p.isMDXComponent=!0}}]);