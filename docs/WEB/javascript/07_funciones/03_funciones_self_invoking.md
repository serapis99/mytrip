# Funciones de tipo self invoking

Este tipo de funciones se invocan a si mismas, y solo se pueden usar una vez ya que no tienen nombre para ser llamadas de nuevo.

para crear esta funcion se debe encerrar entre parentesis ya que cuando se finaliza se colocan otros parentesis para indicar que es una funcion y se pasaran los parametros que usa la funcion. 

Ejemplo:

```javascript
//sin parametros
(function(){
    console.log("Ejecutando la funcion")
})();

//con parametros
(function(a,b){
    console.log(`suma: ${ a+b }`)
})(4,5);
```
tambien se usan este tipo de funciones para encapsular el codigo, dando un bloque de seguridad a este ya que desde afuera de este codigo no se puede acceder ya que son funciones anonimas y no tiene un valor para acceder a esta.


## Funciones Recursivas

En algunos casos se puede resolver problemas con funciones que se llamen asi mismas hasta que llegan a un caso minimo el mas conocido es la solucion de factoriales.

Ejemplo:

```javascript
function factorial(n){
    if(n>1){
        n=n*factorial(n-1);
    }
    return n;
}
```