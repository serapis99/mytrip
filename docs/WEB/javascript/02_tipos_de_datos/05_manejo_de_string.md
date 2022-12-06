# Manejo de string

## Concatenacion

En muchos casos nos vemos obligados a unir strings ya sea para personalizar un respues o para formatear un texto en javascript la forma facil de hacerlo es usando el simbolo del mas.

Ejemplo:

```javascript
var nombre="ruben"
var apellido="gacha"
var nombreCompleto=nombre + " " + apellido
```

con javascript se puede directamente concatenar numeros con string sin ocasionar ningun tipo de error ya que javascript convierte todo a string para poder concatenarlo. 

aunque si se concatena con numeros toca tener presente el orden ya que puede darnos resultados que no queremos ya que puede realizar la operacion si encuentra primero los numeros antes del string

```javascript
var var_1=1+2+"ruben" //devuelve 3ruben
var var_2="ruben"+1+2 //devuelve ruben12
var var_3="ruben"+(1+2) //devuelve ruben3


/*
una forma de que se concatenen los numeros cuando se inicia la expresion con numeros es colocando una cadena vacia al inicio.
*/
var var_4=""+1+2+"ruben" //devuelve 12ruben
```

## Metodos

1. los metodos se pueden distinguir porque se tiene que usar parentisis.
2. Todos los metodos string devuelven una cadena nueva, la cadena original no sera modificada.

| Metodos | Descripcion |
| --- | --- |
| toUpperCase() | Devuelve la cadena en mayusculas |
| toLowerCase() | Devuelve la cadena a minuscula |
| indexOf(String) | Devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1 |
|replace(valor a buscar, valor nuevo)| Remplaza el fragmento de la cadena que le digamos y pone el nuevo valor|
|substring(inicio[,fin])| Extrae los caracteres desde inicio hasta fin (el final no se incluye) |
|slice(inicio[,fin]) | es igual que substring solo que admite valores negativos, si secoloca un negativo  comenzara a contar desde la ultima letra del string. ejemplo -6 contara los ultimos 6 caracteres. |
|trim()| Elimina los espacios al inicio y al final de la cadena |
|startsWith(valor[,inicio]) | sirve para saber si la cadena empieza con ese valor. devuelve true o false |
|endsWith(valor[,inicio]) | sirve para saber si la cadena termina con ese valor. devuelve true o false |
|includes(valor[,inicio]) | busca el valor en la cadena devuelve true o false |
|repeat(cantidad)|repite el numero de veces que le indiquemos de un string|
|.split([ caracter_Separacion ]) | permite separar un string por el caracter que le enviamos si no le pasamos un caracter de separacion lo separa por letras |
## Propiedades

| Propiedad | Descripcion |
| --- | --- |
| length | Devuelve la longitud de la cadena |


## Template String

los template string estan para facilitar la salida de texto cuando conbinamos variables y texto. 

se debe usar comilla invertida que se saca con `alt`+ `96` y dentro de las comillas ya podemos poner variables o cualquier operacion javascript dentro de un simbolo dolar y dos llaves **${}**

```javaScript
console.log("hola tu nombre es: " + nombre + " " + apellido+".");

console.log(`hola tu nombre es: ${nombre} ${apellido}.`)
```

## Documentacion 

para mas informacion de los string con mas metodos y propiedades mozilla nos da la siguiente [Documentacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)