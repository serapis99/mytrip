"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[8163],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(b,l(l({ref:a},c),{},{components:t})):n.createElement(b,l({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7462),r=t(7294),o=t(6010),l=t(2389),s=t(7392),i=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var a;const{lazy:t,block:l,defaultValue:m,values:d,groupId:b,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??v.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),g=(0,s.l)(y,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,i.U)(),[O,w]=(0,r.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==O&&y.some((a=>a.value===e))&&w(e)}const P=e=>{const a=e.currentTarget,t=E.indexOf(a),n=y[t].value;n!==O&&(N(a),w(n),null!=b&&T(b,String(n)))},j=e=>{var a;let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]??E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]??E[E.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},y.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:e=>E.push(e),onKeyDown:j,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===a})}),t??a)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}function d(e){const a=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},1990:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=t(7462),r=(t(7294),t(3905)),o=t(5488),l=t(5162);const s={},i="Metodos o Funciones",u={unversionedId:"Programacion/Basico/Sintasis basica/metodos_funciones",id:"Programacion/Basico/Sintasis basica/metodos_funciones",title:"Metodos o Funciones",description:"",source:"@site/docs/Programacion/Basico/03_Sintasis basica/12_metodos_funciones.md",sourceDirName:"Programacion/Basico/03_Sintasis basica",slug:"/Programacion/Basico/Sintasis basica/metodos_funciones",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/metodos_funciones",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"ProgramacionBasica",previous:{title:"Entrada y salida de datos",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/entrada_salida"}},c={},p=[],m={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metodos-o-funciones"},"Metodos o Funciones"),(0,r.kt)("p",null,"son bloques de codigo que agrupan varias instruciones, las cuales podemos reutilizar cada vez que usemos su nombre identificativo. "),(0,r.kt)("p",null,"En algunos lenguajes se diferencian en que los metodos no devuelven un valor mientras que las funciones si."),(0,r.kt)(o.Z,{groupId:"lenguaje",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},""))),(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("p",null,"los metodos en c# siempre deben estar dentro de una clase y se declaran iniciando con el tipo de dato que devuelven seguido por el nombre del metodo se abren parentesis que recibiran los argumentos y luego las llaves que limitaran el codigo del metodo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"\n// funcion\nint suma(int num1,int num2){\n    return num1+num2;\n}\n\n// metodo\nvoid suma(int num1,int num2){\n    Console.WriteLine(num1+num2);\n}\n"))),(0,r.kt)(l.Z,{value:"vb",label:"VB",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-visual-basic"},""))),(0,r.kt)(l.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},""))),(0,r.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},""))),(0,r.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"")))))}d.isMDXComponent=!0}}]);