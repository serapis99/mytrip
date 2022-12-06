# clausula throws

Esta clausula nos permite lanzar errores para que sean manejados desde otro lado de nuestro algoritmo. 

```javascript
let resultado=5;

if(isNaN(resultado)) throw "No es un numero";
else if(resultado ==='') throw "Es una cadena vacia";

```