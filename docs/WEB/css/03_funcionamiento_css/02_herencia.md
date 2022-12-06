# herencia

Es la capacidad que tienen algunos elementos de heredar algunas propiedades de sus elementos contenedores (padres, abuelos, ...)

por ejemplo la etiqueta **span** puede heredar el color del texto de una etiqueta **p**, pero la etiqueta **a** no puede heredar el color de texto de la etiqueta **p** por lo tanto si queremos alterar este comportamiento y que se herede o no una propiedad se usa:

1. **inherit**: para obligar a la propiedad heredar de su contenedores
2. **initial**: para decirle que tome el valor por defecto del navegador y no por herencia.

```css
p{
    color:green;
}

a{
    color:inherit;
}

span{
    color:initial;
}
```