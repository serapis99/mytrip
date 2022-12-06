# Mapas

los mapas nos permite tener diferentes tipos de llaves y nos da mas dinamismo al momento de usar datos.

Ejemplo:

```javascript
const datos = new Map();

// Con el metodo set establecemos los valores nos pide siempre (clave,valor)
datos.set('nombre','ruben'); 
datos.set('edad',30);
datos.set(1,"un dato string");


// con el metodo get podemos leer el valor del dato pasandole la clave
console.log(datos.get('nombre'));


// para saber el tamaño del mapa es con la propiedad size
console.log(datos.size)

//para eliminar un valor del mapa se usa delete y la clave del valor que deseamos eliminar

datos.delete(1);

//eliminar todos los datos
datos.clear();

//recorrer los datos

datos.forEach((value,key) => {
    console.log(`${key}:${value}`);
});
```
