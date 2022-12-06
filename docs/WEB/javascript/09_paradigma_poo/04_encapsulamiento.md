# Encapsulamiento

el encapsulamiento en la programacion orientada a objetos es proteger a las propiedades y metodos dandoles un nivel de acceso.


## publico

Este tipo de acceso es el que viene predefinido en javascript por lo tanto cuando se crean los metodos en javascript son publicos.

```javascript
class Persona{
    let nombre, edad; //propiedades publicas
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}
```
# privado 

Este tipo de acceso se obtiene cuando ponemos un simbolo numeral antes de la propiedad haciendo que el lenguaje lo identifique como privada. con esto ya no son accesible fuera de la clase.

y para poder acceder a las propiedades de esta clases se usa las palabras reservadas **set** y **get**

```javascript
class Persona{
    let #nombre, #edad; //propiedades publicas
    constructor(nombre,edad){
        this.#nombre=nombre;
        this.#edad=edad;
    }

    set Nombre(nombre){
        this.#nombre=nombre;
    }
    get Nombre(){
        return this.#nombre;
    }

    set Edad(edad){
        this.#edad=edad;
    }
    get Edad(){
        return this.#edad;
    }
}
```
# protegido
