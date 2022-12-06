# Declaracion de objetos

los objetos en javascript son tipo de datos que pueden tener propiedades y metodos, por lo tanto es un tipo de dato No primitivo. 

se declara de la siguiente manera:
 1. se declara una variable seguida de un igual y entre llaves declaramos las propiedades del objeto que serian llave:valor
 2. cada propiedad se separa por comas.
 3. Son estructuras de datos que representan propiedades, valores y acciones que puede realizar el objeto.


Ejemplo (primera forma):

```javascript
let persona={
    nombre:"ruben",
    apellido:"gacha",
    edad:32
}
```
Ejemplo (segunda forma):

```javascript
let persona=new Object();
persona.nombre="ruben"
persona.apellido="gacha"
persona.edad=32

```

## Acceder a las propiedades
se puede acceder a las propiedades del objeto con la nomenclatura del punto. 

Ejemplo (segunda forma):
```javascript
persona.nombre; //imprime el valor que tiene la propiedad nombre
persona.edad=33; //modifica el valor de la propiedad edad
```
Ejemplo (primera forma):
```javascript
persona["nombre"]; //imprime el valor que tiene la propiedad nombre
persona["edad"]=33; //modifica el valor de la propiedad edad
```

## for in para recorrer las propiedades y metodos


```javascript
for (nombrePropiedad in persona) {
    //acceder al nombre de la propiedad
    console.log(nombrePropiedad);

    //acceder al valor de la propiedad
    console.log(persona[nombrePropiedad]); 
}
```