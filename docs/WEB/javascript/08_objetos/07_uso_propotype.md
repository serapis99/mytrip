# Uso de Propotype

En algunos casos necesitamos agregar propiedades al objeto prototipo para esto podemos usar **propotype** que nos permite agregar una propiedad al objeto y alterar todos los objetos creados a partir de este prototipo con el nuevo valor que le damos.

```javascript
function Persona(nombre, apellido, edad){
    this.nombre=nombre;
    this.apellido=apellido;
}

Persona.prototype.edad=18
```