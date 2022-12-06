# porcentaje

cuando usamos porcentage usamos de referencia el tamaño del contenedor y el navegador calcula ese porcentaje. esto no ocurre cuando usamos transform.


## width
puede pasar cosas raras cuando colocamos margenes para hacer que solo ocupe el contenido sobrante de la caja se usa la palabra clave **auto**

```css 
.box-children{
    width:auto;
    height:25%;
    margin-left:50px;
}
```

## height

1. **porcentaje**: cuando estamos dentro de un contenedor, este tienen que tener un alto declarado, si no no podra calcular el porcentaje. si se le aplica una medida con porcentaje se sustituira automaticamente por auto.
2. **auto**:cuando utilizamos auto el alto lo calculara el navegador en base al contenido del elemento.

**NOTA**: height es una propiedad que teneis que usar con mucho cuidado. si no es necesario establecer un alto, dejad que el contenido sea el que decida el alto del elemento.