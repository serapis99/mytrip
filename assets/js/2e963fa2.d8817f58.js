"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[9894],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>d});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?t.createElement(b,o(o({ref:a},c),{},{components:n})):t.createElement(b,o({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},a)}},5488:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var a;const{lazy:n,block:o,defaultValue:p,values:d,groupId:b,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??f.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),g=(0,i.l)(y,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)??f[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,s.U)(),[O,T]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=b){const e=h[b];null!=e&&e!==O&&y.some((a=>a.value===e))&&T(e)}const P=e=>{const a=e.currentTarget,n=E.indexOf(a),t=y[n].value;t!==O&&(w(a),T(t),null!=b&&N(b,String(t)))},j=e=>{var a;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=E[a]??E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;n=E[a]??E[E.length-1];break}}null==(a=n)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},y.map((e=>{let{value:a,label:n,attributes:o}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:e=>E.push(e),onKeyDown:j,onClick:P},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":O===a})}),n??a)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}function d(e){const a=(0,o.Z)();return r.createElement(p,(0,t.Z)({key:String(a)},e))}},5934:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var t=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={},s="Operadores aritmeticos",u={unversionedId:"Programacion/Basico/Sintasis basica/Operadores/aritmeticos",id:"Programacion/Basico/Sintasis basica/Operadores/aritmeticos",title:"Operadores aritmeticos",description:"",source:"@site/docs/Programacion/Basico/03_Sintasis basica/05_Operadores/01_aritmeticos.md",sourceDirName:"Programacion/Basico/03_Sintasis basica/05_Operadores",slug:"/Programacion/Basico/Sintasis basica/Operadores/aritmeticos",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/Operadores/aritmeticos",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"ProgramacionBasica",previous:{title:"Declaracion de variables, Constantes y Comentarios",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/declaracion"},next:{title:"Operador logicos",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/Operadores/logicos"}},c={},m=[],p={toc:m};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"operadores-aritmeticos"},"Operadores aritmeticos"),(0,r.kt)(l.Z,{groupId:"lenguaje",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"En java se tiene:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"suma: con el simbolo mas +"),(0,r.kt)("li",{parentName:"ul"},"resta: con el simbolo guion al medio -"),(0,r.kt)("li",{parentName:"ul"},"multiplicacion: con el simbolo del asterisco *"),(0,r.kt)("li",{parentName:"ul"},"division: con el simbolo slash /"),(0,r.kt)("li",{parentName:"ul"},"modulo: con el simbolo de porcentaje %")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"double num1=5;\ndouble num2=6;\n\ndouble suma=num1+num2;\ndouble resta=num1-num2;\ndouble multiplicacion=num1*num2;\ndouble division=num1/num2;\ndouble modulo=num1%num2;\n\n"))),(0,r.kt)(o.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("p",null,"En C# se tiene:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"suma: con el simbolo mas +"),(0,r.kt)("li",{parentName:"ul"},"resta: con el simbolo guion al medio -"),(0,r.kt)("li",{parentName:"ul"},"multiplicacion: con el simbolo del asterisco *"),(0,r.kt)("li",{parentName:"ul"},"division: con el simbolo slash /"),(0,r.kt)("li",{parentName:"ul"},"modulo: con el simbolo de porcentaje %")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"double num1=5;\ndouble num2=6;\n\ndouble suma=num1+num2;\ndouble resta=num1-num2;\ndouble multiplicacion=num1*num2;\ndouble division=num1/num2;\ndouble modulo=num1%num2;\n"))),(0,r.kt)(o.Z,{value:"vb",label:"VB",mdxType:"TabItem"},(0,r.kt)("p",null,"En VB se tiene:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"suma: con el simbolo mas +"),(0,r.kt)("li",{parentName:"ul"},"resta: con el simbolo guion al medio -"),(0,r.kt)("li",{parentName:"ul"},"multiplicacion: con el simbolo del asterisco *"),(0,r.kt)("li",{parentName:"ul"},"division: con el simbolo slash /"),(0,r.kt)("li",{parentName:"ul"},"modulo: con la palabra clave mod")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-visual-basic"},"Dim num1, num2 As Integer\nDim suma, resta, mul, div, modulo As Double\n\nnum1 = 15\nnum2 = 5\n\nsuma = num1 + num2\nresta = num1 - num2\nmul = num1 * num2\ndiv = num1 / num2\nmodulo = num1 Mod num2\n"))),(0,r.kt)(o.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},""))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},""))),(0,r.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"")))))}d.isMDXComponent=!0}}]);