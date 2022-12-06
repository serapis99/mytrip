# Tipos de datos avanzados

## funciones o function

para javascript pueden existir variables de tipo function. las funciones son trosos de codigo que podemos reutilizar para realizar una determinada operacion ejemplo sumar dos numeros, esta funcion recibira como parametros los dos numeros a sumar. 

cuando nos referimos a parametros son variables o datos que necesita la funcion para funcionar y se dice que debemos pasarcelos cuando queramos usar la funcion.

Ejemplo:

```javascript
function sumar(a,b){
    return a+b
}

typeof(sumar) //devolvera como resultado function
```

## simbolo o symbol

Es usado en temas avanzados en javascript y sirve para crear valores unicos en una variable.

```javascript
var simbolo = Symbol()
var simbolo2 = Symbol("mi cadena") 

typeof(simbolo) //devolvera symbol

//symbol puede crearse vacia o con una cade de caracteres.
```

## clases 

En javascript las clases son interpretadas como funciones por lo tanto si creamos una clase y la validamos con **typeof** nos devolvera function.

```javascript
class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre
        this.apellido=apellido
    }
}

typeof(Persona) //devolvera function
```

