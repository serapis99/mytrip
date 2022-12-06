# metodo call

se usa cuando queremos llamar metodos de otros objetos.

lo que hacemos es invocar el objeto que tiene el metodo que queremos usar, seguido de un punto con el metodo **call** despues se pasa el objeto que tiene los datos que necesita el metodo para funcionar, en otras palabra las propiedades necesarias para usar la funcion.

```javascript
let persona1={
    nombre:"ruben",
    apellido:"gacha",
    nombreCompleto:function(){
        return this.nombre+" "+this.apellido;
    }
}

let persona2={
    nombre:"carlos",
    apellido:"lara",
}

// uso de call 

persona1.nombreCompleto.call(persona2)
```

## metodo call con parametros

en algunos casos la funcion que queremos usar tiene parametros por ese motivo debemos pasarle estos parametros en el metodo call.

```javascript
let persona1={
    nombre:"ruben",
    apellido:"gacha",
    nombreCompleto:function(titulo,tel){
        return titulo+" "+this.nombre+" "+this.apellido+" "+tel;
    }
}

let persona2={
    nombre:"carlos",
    apellido:"lara",
}

// uso de call con argumentos

persona1.nombreCompleto.call(persona2,"Ing.","54254875");
```