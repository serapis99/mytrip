# Agregar o eliminar propiedades

## Agregar

Javascript es muy flexible al momento de crear objetos en cualquier parte del codigo solo tenemos que usar la nomenclatura del punto he igualar a cualquier valor.

toca tener presente esto ya que por cualquier cambio entre mayusculas y minusculas de una propiedad podemos crear una totalmente diferente.

```javascript
let persona={
    nombre:"ruben",
}

persona.apellido="gacha"
persona.edad=32
persona.Nombre="dario"
```

## Eliminar

En javascript existe la palabra reservada **delete** que nos permitira eliminar una propiedad de un objeto.

```javascript
let persona={
    nombre:"ruben",
}

persona.apellido="gacha"
persona.edad=32
delete persona.edad
```