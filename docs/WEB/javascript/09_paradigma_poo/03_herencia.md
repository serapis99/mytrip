# Herencia
cuando hablamos de herencia en la programacion orientada a objetos nos referimos a que un objeto puede adquirir metodos y propiedades ya programadas en otro objeto esto con el fin de solo programar nuevos metodos y propiedades del objeto que hereda.

Ejemplo:

```javaScript
class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    detallePersona(){
        console.log(`Nombre: ${this.nombre} y su edad es: ${this.edad}`);
    }
}

class Empleado extends Persona{
    let sueldo;
    constructor(nombre,edad,sueldo){
        super(nombre,edad) // llama el constructor del padre
        this.sueldo=sueldo
    }
}
```

como se puede ver con la palabra clave **extends** indicamos que la nueva clase hereda de la clase persona.

con la palabra clave **super** indica que se quiere usar la clase padre en este caso queremos usar el constructor de la clase padre.

## sobreescritura

En algunos casos se debe cambiar el comportamiento de un metodo por ese motivo se debe sobreescribir ese metodo para que se comporte como debe.

para poder sobreescribir el metodo se debe crear el mismo metodo en la clase hija con eso se logra que cuando llamemos a este metodo utilice el metodo de la clase hija.

```javaScript
class Empleado extends Persona{
    let sueldo;
    constructor(nombre,edad,sueldo){
        super(nombre,edad) // llama el constructor del padre
        this.sueldo=sueldo
    }

    //sobreescritura
    detallePersona(){
        console.log(`${super.detallePersona()} y su suledo es: ${this.sueldo}`);
    }
}
```

Se recuerda que en javascript todo hereda de **object** por lo tanto tenemos metodos y propiedades heredados de esta uno de ellos pertenece al objeto **propotype** que es **toString**.

```javaScript

class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    detallePersona(){
        console.log(`Nombre: ${this.nombre} y su edad es: ${this.edad}`);
    }

    //sobreescritura de toString() de object

    toString(){
        return this.detallePersona();
    }
}
```

## Polimorfismo

cuando se tiene herencias y estas estan instanciadas ocurre que dependiendo el objeto se debe comportar de una forma o otra en otras palabras con el ejemplo anterior al crear dos instancias una de la clase **persona** y otra de **empleado** y usamos el metodo **toString()** se debe comportar diferente ya que en la clase persona usara el metodo **detallePersona** de la clase persona y en empledo lo usara de este. comportandose diferente dependiendo el objeto.

El polimorfismo hace mas a la forma que se comporta el objeto cuando se ejecuta el codigo. 
