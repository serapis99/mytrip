# Metodos get y set 

Estos metodos nos permite reducir los parentesis ya que le indicamos a javascript que queremos recuperar informacion del objeto o que queremos cambiar una propiedad del objeto.

## metodo get

con el metodo que indicamos que queremos recuperar informacion para esto solo tenemos que agregar la palabra clave **get** antes de crear una funcion que devuelva informacion.

```javascript
let persona={
    nombre="ruben",
    apellido="gacha",
    get nombreCompleto(){
        return this.nombre+" "+ this.apellido;
    }
}

//como se ve ya no es necesario usar los parentesis ya que se entiende que esta mostrando el valor de una propiedad.

console.log(persona.nombreCompleto);
```
## metodo set

con el metodo set nos permite crear una funcion que nos permitira modificar una propiedad lo cual nos basta con usar la palabra clave **set** antes de crear la funcion.

```javascript
let persona={
    nombre="ruben",
    get Nombre(){
        return this.nombre;
    }
    set Nombre(name){
        this.nombre=name;
    }
}

persona.Nombre="dario"

console.log(persona.Nombre);
```

1. como se puede ver se puede usar el mismo nombre de funcion para la palabras claves set y get para tratar la misma propiedad.
2. se puede distinguir la propiedad de los metos porque podemos poner la primera letra en mayuscula para los metodos set y get.