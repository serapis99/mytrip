# Operadores Aritméticos

los operadores Aritméticos nos permite realizar operaciones basicas en javascript tenemos los siguientes.

| Operador | Description |
|---|---|
| + | Adicion |
| - | Sustraccion |
| * | Multiplicacion |
| ** | Exponenciacion (despues del EcmaScript 2016) |
| / | Division |
| % | Modulo o residuo de la division |
| ++ | Incremento |
| -- | Decremento |

```javascript
a=2
b=3

suma = a + b //5
resta = a - b //-1
multiplicacion = a * b //6
exponenciacion = a ** b //8
division = a / b //0.6666
modulo = a % b //2

```

javascript tiene el casting de datos de forma automatica si detecta que un String es un numero y se esta haciendo una operacion aritmetica.

Ejemplo:

```javascript
a=2
b="3"

suma = a + b // lo concatena danonos 23
resta = a - b // le hace casting a -1
multiplicacion = a * b // le hace casting a 6
exponenciacion = a ** b //le hace casting a 8
division = a / b //le hace casting automatico 0.6666
modulo = a % b //le hace casting automatico 2
```

## Uso de Incremeto y Decremento

los operadores de incremento y decremento se aplican a una sola variable y tienen dos posibles casos los **pre** y los **pos**

1. pre: los pre indican que se debe hacer la operacion antes de usar la variable.
2. pos: los pos indican que se usa la variable antes de hacer la operacion.

Ejemplo:

```javascript
a=2

b=++a;

//el valor de b es 3 ya que primero se incrementa antes de asignar el valor a b 

console.log(b)  

b=a++;

//el valor de b es 2 ya que primero se asigna el valor en b y despues se incrementa a. 

console.log(b) 

// tambien se puede hacer lo mismo pero con el decremento.
```

