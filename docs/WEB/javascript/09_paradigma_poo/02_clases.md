# clases

El concepto de clase es la primera palabra que se ve en la programacion orientada a objetos y se trata de un molde o plantilla que sirve para crear objetos.


## creacion de una clase
En javascript se crea de la siguiente manera:

```javascript
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
}
```

## Agregar Metodos a la clase

como sabemos los metodos son funciones que le pertenecen al objeto y representan lo que puede hacer el objeto.

```javascript
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    saludar(){
        return `hola me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
}
```

## Hoisting en clases

El consecto de **hoisting** no funciona en clases por lo tanto no se pueden usar antes de que se declaren por este motivo debemos crear las clases para que se puedan crear los objetos correctamente.



## Instanciar una clase

la palabra **instanciar** es dada cuando lo que se quiere es crear un objeto apartir de la clase o de un molde y solo se necesita usar la palabra clave **new** y el nombre de la clase que se usara de plantilla con los parametros necesarios que pide el constructor para crear el objeto.

```javascript
const persona1=new Persona('ruben','gacha',32);
```