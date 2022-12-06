# Spread operator (operador de expansion)

1. su sintaxis es **...**

```javascript
const numbers = [1,2,3];
const numbers2 = [1,2,3];
//enviar elementos de un array a una funcion

const sumar(a, b, c){
    console.log(a+b+c)
}

sumar(...numbers)

// añadir un array a otro array
numbers.push(...numbers2);

//copiar arrays

let arra2=[...numbers]

//concatenar arrays

let concat =[...numbers,...numbers2];

//libreria Math

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// Eliminar elementos duplicados

console.log([...new Set(numbers)]);
```