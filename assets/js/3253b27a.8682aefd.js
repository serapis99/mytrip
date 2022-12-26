"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[2503],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(b,l(l({ref:n},p),{},{components:t})):r.createElement(b,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),a=t(7294),o=t(6010),l=t(2389),i=t(7392),s=t(7094),c=t(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var n;const{lazy:t,block:l,defaultValue:m,values:d,groupId:b,className:y}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),g=(0,i.l)(v,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:O}=(0,s.U)(),[N,T]=(0,a.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=h[b];null!=e&&e!==N&&v.some((n=>n.value===e))&&T(e)}const P=e=>{const n=e.currentTarget,t=w.indexOf(n),r=v[t].value;r!==N&&(E(n),T(r),null!=b&&O(b,String(r)))},j=e=>{var n;let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},y)},v.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>w.push(e),onKeyDown:j,onClick:P},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},6834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),o=t(5488),l=t(5162);const i={},s="Operadores de Incremento o Decremento",c={unversionedId:"Programacion/Basico/Sintasis basica/Operadores/incremento_decremento",id:"Programacion/Basico/Sintasis basica/Operadores/incremento_decremento",title:"Operadores de Incremento o Decremento",description:"",source:"@site/docs/Programacion/Basico/03_Sintasis basica/05_Operadores/03_incremento_decremento.md",sourceDirName:"Programacion/Basico/03_Sintasis basica/05_Operadores",slug:"/Programacion/Basico/Sintasis basica/Operadores/incremento_decremento",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/Operadores/incremento_decremento",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"ProgramacionBasica",previous:{title:"Operador logicos",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/Operadores/logicos"},next:{title:"Concatenacion",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/Operadores/concatenacion"}},p={},u=[],m={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operadores-de-incremento-o-decremento"},"Operadores de Incremento o Decremento"),(0,a.kt)("p",null,"los operadores de incremento o decremento nos permite de una forma abreviada incrementar el valor de una variable o decrementarla. "),(0,a.kt)("p",null,"En algunos lenguajes permite el ",(0,a.kt)("strong",{parentName:"p"},"pre")," y el ",(0,a.kt)("strong",{parentName:"p"},"post")," esto hace referencia en que momento se hara el incremento el ",(0,a.kt)("strong",{parentName:"p"},"pre")," hace el incremento antes de ejecutar la sentencia y el post la realiza despues de ejecutar la sentencia."),(0,a.kt)(o.Z,{groupId:"lenguaje",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"incrementar en uno: ++"),(0,a.kt)("li",{parentName:"ul"},"decrementar en uno: --"),(0,a.kt)("li",{parentName:"ul"},"incrementar en n: +="),(0,a.kt)("li",{parentName:"ul"},"decrementar en n: -=")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"byte edad=16;\nSystem.out.println(edad++); //post-incremento\nSystem.out.println(edad--); //post-decremento\nSystem.out.println(--edad); //pre-decremento\nSystem.out.println(++edad); //pre-incremento\nSystem.out.println(edad+=3); //incrementar en 3\nSystem.out.println(edad-=3); //decrementar en 3\n"))),(0,a.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"byte edad = 16;\nConsole.WriteLine(edad++); //post-incremento\nConsole.WriteLine(edad--); //post-decremento\nConsole.WriteLine(++edad); //pre-decremento\nConsole.WriteLine(--edad); //pre-incremento\nConsole.WriteLine(edad+=3); //incrementar en 3\nConsole.WriteLine(edad-=3); //decrementar en 3\n"))),(0,a.kt)(l.Z,{value:"vb",label:"VB",mdxType:"TabItem"},(0,a.kt)("p",null,"En Vb se tiene el de incrementar en n y decrementar en n"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-visual-basic"},"Dim edad As Integer = 15\nedad += 1\nConsole.WriteLine(edad)\nedad -= 1\nConsole.WriteLine(edad)\n"))),(0,a.kt)(l.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},""))),(0,a.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},""))),(0,a.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"")))))}d.isMDXComponent=!0}}]);