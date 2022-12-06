# Funciones de tipo expresion

En javascript podemos crear una funcion sin nombre y asignandosela a una variable que cumplira el rol de nombre de la funcion, su funcionamiento es el mismo que una funcion con nombre.

```javascript
//Declaracion
let miFuncion=function(a,b){
  return a+b  
};

resultado=miFuncion(1,2);
console.log((`suma: ${resultado}`))
```