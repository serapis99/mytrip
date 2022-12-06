# funciones como objetos

En javascript las funciones tambien son objetos por lo tanto tambien tiene metodos y propiedades. 

## propiedades

| propiedad | descripcion |
| --- | --- |
| arguments | Es un array que contiene los argumentos que se le pasan a la funcion|

```javascript
function mifuncion(a,b) {
    console.log(arguments[0]);
    console.log(arguments.length);
}
```

