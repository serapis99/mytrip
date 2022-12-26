"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[9382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="Otros inputs",i={unversionedId:"WEB/html/Formularios/otros_inputs",id:"WEB/html/Formularios/otros_inputs",title:"Otros inputs",description:"estos inputs no tienen una categoria como tal pero son usados.",source:"@site/docs/WEB/html/09_Formularios/05_otros_inputs.md",sourceDirName:"WEB/html/09_Formularios",slug:"/WEB/html/Formularios/otros_inputs",permalink:"/mytrip/docs/WEB/html/Formularios/otros_inputs",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"HTML",previous:{title:"inputs para moviles",permalink:"/mytrip/docs/WEB/html/Formularios/inputs_para_movil"},next:{title:"inputs de seleccion tipo radio o checkbox",permalink:"/mytrip/docs/WEB/html/Formularios/input_radio_checkbox"}},u={},p=[{value:"color",id:"color",level:2},{value:"number",id:"number",level:2},{value:"range",id:"range",level:2},{value:"reset",id:"reset",level:2},{value:"text",id:"text",level:2},{value:"hidden",id:"hidden",level:2},{value:"textarea",id:"textarea",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"otros-inputs"},"Otros inputs"),(0,a.kt)("p",null,"estos inputs no tienen una categoria como tal pero son usados."),(0,a.kt)("h2",{id:"color"},"color"),(0,a.kt)("p",null,"Se utiliza para especificar un color."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<input type="color">\n')),(0,a.kt)("h2",{id:"number"},"number"),(0,a.kt)("p",null,"se utiliza para valores numericos y tiene los atributos "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"min: minimo de la barra"),(0,a.kt)("li",{parentName:"ul"},"max: maximo de la barra")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<input type="number" min="0" max="10">\n')),(0,a.kt)("h2",{id:"range"},"range"),(0,a.kt)("p",null,"Se utiliza para establecer un rango, y aceptan los atributos."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"step: de cuanto en cuanto se mueve la barra."),(0,a.kt)("li",{parentName:"ul"},"min: minimo de la barra"),(0,a.kt)("li",{parentName:"ul"},"max: maximo de la barra")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<input type="range" step="2" min="0" max="20">\n')),(0,a.kt)("h2",{id:"reset"},"reset"),(0,a.kt)("p",null,"se utiliza para resetear el formulario."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<input type="reset">\n')),(0,a.kt)("h2",{id:"text"},"text"),(0,a.kt)("p",null,"valor por defecto"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<input type="text">\n')),(0,a.kt)("h2",{id:"hidden"},"hidden"),(0,a.kt)("p",null,"campo oculto puede almacenar datos y el usuario no los vera en pantalla, sino en codigo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<input type="hidden">\n')),(0,a.kt)("h2",{id:"textarea"},"textarea"),(0,a.kt)("p",null,"se utiliza para introducir un texto de gran tama\xf1o en un formulario."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<input type="textarea">\n')))}c.isMDXComponent=!0}}]);