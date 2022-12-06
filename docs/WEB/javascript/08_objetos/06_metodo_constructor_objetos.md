# metodo constructor en objetos

Para poder reutilizar el esquema de un objeto podemos crear un metodo constructor que permitira establecer los valores de las propiedades de un objeto.

1. se recomienda que se inicie en mayuscula

```javascript
// funcion constructor de persona

function Persona(nombre, apellido, edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}

let padre= new Persona("ruben","gacha",32);
let hijo= new Persona("damian","gacha",12)
```

## metodos en la funcion constructor

teniendo presente de como se convierte las propiedades de un objeto a una funcion constructor usamos el **this** 
```javascript
// funcion constructor de persona

function Persona(nombre, apellido, edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.nombreCompleto=function(){
        return this.nombre+" "+this.apellido;
    }
}

let padre= new Persona("ruben","gacha",32);
let hijo= new Persona("damian","gacha",12);

console.log(padre.nombreCompleto());
```