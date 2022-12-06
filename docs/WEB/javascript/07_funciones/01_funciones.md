# Funciones

1. las funciones son codigos reutilizables que se pueden llamar en cualquier momento del codigo, ya que javascript carga primero todas las funciones de tipo **function** a esto se le llama **hoisting**.
2. La estructura de una funcion en  javascript se usa la palabra clave **function** seguido del nombre de la funcion junto a dos parentesis que pueden o no llevar parametros.
3. Dentro de los parentesis pueden ir datos que son llamados parametros que permite ser usados dentro de la funcion, como variables que solicita un programa.
4. las funciones flecha se deben declarar antes de usarlas ya que estas no tienen el **hoisting**.

```javascript
function miFuncion(a,b){
    console.log(`suma: ${a+b}`)
};

//Llamado a la funcion
miFuncion(4,5);
```

## Return

la palabra reservada **return** permite devolver un valor desde dentro de la funcion y guardar este valor en una variable. 

en javascript todas las funciones tienen la palabra return si no la colocamos el lenguaje lo coloca por nosotros devolviendo un valor null.

```javascript
function miFuncion(a,b){
    return a+b;
};


let resultado=miFuncion(4,5);
console.log((`suma: ${resultado}`))
```