# conversion de tipos de datos primitivos

En algunos casos tendremos numero que son tratados como texto y para poder operarlos como numeros tendremos que hacer una conversion de tipo de string a numeric para esto usamos la funcion **Number**, tambien si sabemos el tipo del numero se puede usar las funciones **parseInt** y **parseFloat**.

Ejemplo:

```js
let miEdad="30"
let edad=Number(miEdad)
let edad2=parseInt(miEdad)
let estatura="1.75"
estatura=parseFloat(estatura)


typeof edad //debe ser number



```

Para convertir un tipo de dato a string contamos con la funcion **String** y con la propiedad **.toString()**

```js

let edad=30
let miEdad=String(edad)

miEdad=edad.toString()

typeof edad //debe ser string
```
## Funcion isNaN

lo que sucede en muchos casos es que el string que queremos convertir a numero no es un numero y la conversion devuelve **NaN** (Not a Number), por lo tanto debemos validar que nos devuelva un numero la conversion para esto usamos la **funcion** ***isNaN***.

Ejemplo:

```js
let miEdad="treinta"
let edad=Number(miEdad)

if(isNaN(edad)){
    console.log("No es un numero")
}else{
    console.log("Realizar las operaciones con edad")
}
```
