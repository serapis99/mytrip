# Overflow

Es la propiedad que controla que debe hacer la caja cuando su contenido se desborda del contenedor.

Es un **shorthand** que engloba **overflow-x** y **overflow-y** tiene cuatro posibles valores:

+ **visible**: es el valor por defecto.
+ **hidden**: el contenido que se desborde no se vera. si aplicamos esta propiedad en un solo eje, el otro se pondra automaticamente en el valor **scroll**.
+ **scroll**: apareceran barras de scroll en el eje asignado ya sea en **x** o en **y** o en ambos.
+ **auto**: Apareceran barras de scroll en el caso de que hicieran falta.

```css
div{
    overflow:scroll;
}
```