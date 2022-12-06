# Paso por valor o paso por referencia

## paso por valor

El paso de valor lo que hace es copiar el valor de la variable en el argumento que se le da a la funcion el cambio de uno no afectara al otro, esto lo hace automaticamente javascript con los tipos de datos primitivos. 

**Los datos primitivos son aquellos datos que No tienen ni metodos ni propiedades**

```javascript
let x=10;

function miFuncion(a) {
    a=20;
}

console.log(miFuncion(x));
console.log(x)
```

## paso por referencia

El paso de referencia sucede cuando la funcion puede alterar los datos del argumento que se le esta pasando javascript lo hace automaticamente con datos no primitivos.

**los datos no primitivos son los que tienen metodos y propiedades**

```javascript
const persona={
    nombre:"ruben",
    apellido:"gacha"
};

function miFuncion(p1) {
    p1.nombre="dario";
    p1.apellido="castelblanco"
}

console.log(miFuncion(persona));
console.log(persona)
```