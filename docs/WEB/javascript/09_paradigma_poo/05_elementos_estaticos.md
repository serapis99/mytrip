# Elementos estaticos

En varias ocasiones necesitamos que los metodos y propiedades no se puedan instanciar o no se puedan crear objetos de esta clases, sino que se tenga que usar la clase para poder usarlos, por esta razon se crean los elementos estaticos y en javascript se tiene la palabra clave **static**. 

Ejemplo:

```javaScript
class Mate{
    static contador=0 //Atributo estatico
    static #pi=3.141592; //Atributo estatico

    static get PI(){ //metodo estatico
        Mate.contador++; //uso del atributo estatico
        return this.#pi;
    }

}

console.log(Mate.PI) //forma de usar el metodo estatico
```

## Constantes estaticas

En algunos casos necesitamos tener constantes estaticas en javascript para lograr algo parecido es necesario crear un metodo **get** que solo nos devolvera el valor de una variable y esta no podria ser accedida desde cualquier lado. 

```javaScript
class Mate{
    static get PI(){ //metodo estatico simulando una constante
        return 3.141592;
    }
}

console.log(Mate.PI) //forma de usar el metodo estatico
```