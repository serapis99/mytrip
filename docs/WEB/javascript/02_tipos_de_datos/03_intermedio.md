# Tipos de datos intermeio

## Array

En javascript los Array son de tipo objeto, los array son variables que pueden almacenar varios datos dandoles una posicion, a cada valor esto lo puede hacer automaticamente.

```javascript
var autos=["BMW","audi","volvo"]
typeof(autos) //devuelve object
```

## undefined

Este tipo de variable se crea cuando una variable no tiene ningun valor asociado a el, en otros palabras no se ha inicializado porque no tiene un valor por lo tanto no tiene un tipo definido.

```javascript
var variable
typeof(variable) //devuelve undefined

var variable=undefined
typeof(variable) //devuelve undefined
```
## null
Es un tipo de dato que representa que deseamos que la variable este vacia sea inicializado con un valor nulo, o que tiene el valor null|. 

```javascript
var variable=null
typeof(variable) //devuelve object
```

## Empty String

cuando se inicia una variable ya sea con comillas simples o dobles sin ningun valor en ellas javascript considera que es un string vacio, dandonos la diferencia de que cuando se imprime la variable nos dice que es un empty String, pero cuando se comprueba con typeof es un string. 

```javascript
var variable=""
console.log(variable) // devuelve empty string
typeof(variable) //devuelve string
```

