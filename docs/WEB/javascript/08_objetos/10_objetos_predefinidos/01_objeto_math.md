# Objeto Math

1. Es un objeto que se utiliza para operaciones matematicas mas especificas.
2. Al ser un objeto tambien utiliza la nomenclatura del punto.
3. Es un objeto predefinido del lenguaje.
4. Es un objeto estatico lo que nos obliga usar su nombre para poder usarlo.

## Propiedades

| Propiedades | Descripcion |
| --- | --- |
| Math.E | numero de euler |
| Math.PI | numero de PI |
| Math.LN2 | logaritmo natural 2 |
| Math.LN10 | logaritmo natural 10 |
| Math.LOG2E | logaritmo de E en base 2 |
| Math.LOG10E | logaritmo de E en base 10 |


## Metodos

| Metodo | Descripcion |
| --- | --- |
| Math.abs(x) | Devuelve el valor absoluto de x |
| Math.ceil(x) | Devuelve el entero mas grande redondea hacia arriba|
| Math.floor(x) | Devuelve el entero mas pequeño redondea hacia abajo|
| Math.pow(x,y) |Devuelve la potencia de x elevado a y |
| Math.random() | Genera un numero pseudoaleatorio entre 0 y 1 |
| Math.round(x) | Devuelve el entero redondeado mas cercano |
| Math.sign(x) | Devuelve el signo de la x, que indica si x es positivo (1), negativo (-1) o cero. (0)|
|Math.sqrt(x)|devuelve la raiz cuadrada de x |
|Math.max([x[,y[,..]]])|devuelve el numero mas grande|
|Math.min([x[,y[,..]]])|devuelve el numero mas pequeño|
|Math.trunc(x)|Devuelve la parte entera de x |
|Math.log10(x)|Devuelve el logaritmo en base 10 |
|Math.log2(x) | Devuelve el logaritmo en base 2 |


## crear numeros aleatorios entre un minimo y un maximo

```JavaScript
max=10;
min=5;

let aleatorio=Math.round(Math.random()*(max-min)+min);
```

## Documentacion 

mozilla nos ofrece la siguiente [Documentacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)