"use strict";(self.webpackChunkmy_trip=self.webpackChunkmy_trip||[]).push([[123],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(b,i(i({ref:a},u),{},{components:t})):n.createElement(b,i({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),r=t(6010);const o="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7462),r=t(7294),o=t(6010),i=t(2389),s=t(7392),l=t(7094),c=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var a;const{lazy:t,block:i,defaultValue:p,values:d,groupId:b,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??v.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,s.l)(f,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,l.U)(),[P,j]=(0,r.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==P&&f.some((a=>a.value===e))&&j(e)}const N=e=>{const a=e.currentTarget,t=E.indexOf(a),n=f[t].value;n!==P&&(O(a),j(n),null!=b&&T(b,String(n)))},w=e=>{var a;let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]??E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]??E[E.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===a?0:-1,"aria-selected":P===a,key:a,ref:e=>E.push(e),onKeyDown:w,onClick:N},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":P===a})}),t??a)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==P})))))}function d(e){const a=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(a)},e))}},3892:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=t(7462),r=(t(7294),t(3905)),o=t(5488),i=t(5162);const s={},l="Estructuras basicas",c={unversionedId:"Programacion/Basico/Sintasis basica/estructura_basica",id:"Programacion/Basico/Sintasis basica/estructura_basica",title:"Estructuras basicas",description:"",source:"@site/docs/Programacion/Basico/03_Sintasis basica/01_estructura_basica.md",sourceDirName:"Programacion/Basico/03_Sintasis basica",slug:"/Programacion/Basico/Sintasis basica/estructura_basica",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/estructura_basica",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"ProgramacionBasica",previous:{title:"Introduccion a go",permalink:"/mytrip/docs/Programacion/Basico/Introduccion/go"},next:{title:"Datos Primitivos",permalink:"/mytrip/docs/Programacion/Basico/Sintasis basica/datos_primitivos"}},u={},m=[],p={toc:m};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"estructuras-basicas"},"Estructuras basicas"),(0,r.kt)("p",null,"Por las caracteristicas de ciertos lenguajes tendremos que crear un esquema obligatorio para poder correr nuestros codigos escritos en estos lenguajes, se entiende que todos los programas deben iniciar en alguna parte para esto existe los ",(0,r.kt)("strong",{parentName:"p"},"main")," en los lenguajes algunos ejemplos"),(0,r.kt)(o.Z,{groupId:"lenguaje",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='program.java'",title:"'program.java'"},'public class program { // el nombre de la clase es el mismo que el archivo\n  public static void main(String args[]) { // metodo estatico main\n    System.out.println("Hola mundo"); //instruccion para imprimir en pantalla\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"title='main.cs'",title:"'main.cs'"},'internal class Program //nombre de la clase\n{\n    private static void Main(string[] args) // metodo estatico Main\n    {\n        Console.WriteLine("Hola mundo"); // instruccion para imprimir en pantalla\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"vb",label:"VB",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-visual-basic",metastring:'title="main.vb"',title:'"main.vb"'},"Imports System 'importar libreria System\n\nModule Program ' modulo que lo llamamos program \n    Sub Main(args As String()) ' funcion Main\n        Console.WriteLine(\"Hola mundo\") 'se escribe en consola \n    End Sub\nEnd Module\n"))),(0,r.kt)(i.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},'#include "iostream" //libreria iostream\nusing namespace std; // indicamos que queremos usar el espacio de nombre std de iostream\nint main() // metodo main\n{\n     cout << "Hola mundo\\n" <<endl; \n     //(cout) caracter out imprime en pantalla \n     //(endl) ingresa salto de linea\n     return 0; // devuelve 0 cuando todo fue ok\n}\n'))),(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="main.py"',title:'"main.py"'},"# No necesita ninguna estructura base pero se recomienda\nif __name__=='__main__': # condicional que valida si se esta ejecutando el archivo como main\n  print(\"Hola mundo\") # instruccion para imprimir en pantalla\n"))),(0,r.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main //paquete principal de go\n\nimport "fmt" //paquete que nos permite usar la salida por consola\n\nfunc main() { // funcion principal del lenguaje\n    fmt.Println("Hola mundo") //imprime en mensaje hola mundo\n}\n\n')))))}d.isMDXComponent=!0}}]);