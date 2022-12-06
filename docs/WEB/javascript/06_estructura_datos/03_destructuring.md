# Destructuracion - Destruccion - Destructing

Se trata de convertir una estructura de datos en multiples variables con valores independientes.

se debe colocar el mismo nombre del indice cuando se tratan de objetos complejos. 

Ejemplo:

```javascript

//ejemplo 1
let [nombre,edad]=["pablo",35];
console.log(nombre);
console.log(edad);


//ejemplo 2
const persona ={
    nombre:"carlos",
    edad:30
}

let {nombre,edad}=persona;
console.log(nombre);
console.log(edad);


let {nombre:n, Edad:e}=persona;//renombra claves
console.log(n);
console.log(e);

//ejemplo 3

const calcMayoriaEdad=(year){
    const edad=new Date().getFullYear() - year;
    const mayoria=edad>=18;
    return [edad, mayoria];
}

const [edad, mayoria]=calcMayoriaEdad(1990);
```

## Destructing de objetos

En muchos casos los objetos vienen con una estructura que permite objetos dentro de otros objetos por lo tanto para poder hacer Destructing se debe hacer referencia a cada clave hasta llegar al valor que queremos.

Ejemplo:

```javascript
const respuesta={
    codigo:200,
    data:{
        persona:{
            nombre:'pablo',
            direccion:{
                ciudad:'Lima',
                pais:'Perú'
            }
        }
    }
}

//extrayendo nombre
//opcion 1
let {data:{persona:{nombre}}}=respuesta
console.log(nombre)


//opcion 2
let {data:{persona:{nombre:name}}}=respuesta
console.log(name)
```