# outline

Es la propiedad que nos permite dibujar un borde por fuera del modelo de caja.

Es un **shorthand** qie engloba

+ **outline-width**: controla el ancho del outline.
+ **outline-style**: controla el estilo del outline.
+ **outline-color**: controla el color del outline.

tiene las mismas propiedades y sintaxis que border, pero con algunas diferencias.
+ No ocupa sitio, ya que no forma parte del box model.
+ No se puede redondear.
+ no se puede controlar los lados de forma independiente

Tambien cuenta con la propiedad outline-offset, que nos permite aumentar o disminuir la distancia del outline en relacion a la caja a la que pertenece.

```css
.outline{
    outline:3px solid lightcoral;
    outline-offset:-10px;
}
```
