# metodo apply

Igual que el metodo call nos permite realizar la llamada de metodos con los valores de otro objeto.

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

// uso de apply

persona1.nombreCompleto.apply(persona2)
```

## metodo apply con argumentos

la gran diferencia con call radica cuando se tienen parametros en el metodo, ya que con el metodo apply se debe pasar los parametros en un array.

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

// uso de apply con argumentos

persona1.nombreCompleto.apply(persona2,["Ing.","54254875"]);
```