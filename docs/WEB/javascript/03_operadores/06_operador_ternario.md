# Operador Ternario

los operadores ternarios nos permite evaluar un dato antes de asignarlo es una condicional de forma abreviada. 

lo primero es la condicion seguido del signo de pregunta, despues la parte verdadera seguido de dos puntos, por ultimo el valor falso.

Ejemplo:

```javascript
let resultado = (3>2) ? true : false
```

## multiples sentencias

1. Existe la posibilidad de ejecutar multiples sentencias en el operador ternario y se puede usar debes de un if ya que consume menos recursos.
2. cada sentencia se separa con comas.
3. no se necesita que sean la misma cantidad de instruciones de un lado o otro.



```javascript
let num=3;
(num % 2 ==0)?
    (
        console.log("instruccion 1"),
        console.log("instruccion 2")
    )
    :
    (
        console.log("instruccion 1"),
        console.log("instruccion 2"),
        console.log("instruccion 3")
    )

```