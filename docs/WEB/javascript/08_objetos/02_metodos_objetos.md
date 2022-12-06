# metodos en objetos

los objetos simples en javascript tambien puede tener funciones que serian tratadas como metodos del objeto, que podria acceder a las propiedades o metodos del objeto usando la palabra clave **this**

```javascript
let persona={
    nombre:"ruben",
    apellido:"gacha",
    nombreCompleto:function(){
        return this.nombre+" "+this.apellido;
    }
}

persona.nombreCompleto();
```