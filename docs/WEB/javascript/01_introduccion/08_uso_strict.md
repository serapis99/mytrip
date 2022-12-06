# uso de strict

lo que hace es obligarnos a declarar las variables antes de usarlas y se debe declarar antes de comenzar el algoritmo. 


Ejemplo al inicio del programa:
```javascript
"use strict";

let x=10;
```

Ejemplo dentro de una funcion

```javascript

function miFuncion(){
    "use strict";
    let y=15;
    console.log(y)
}
```