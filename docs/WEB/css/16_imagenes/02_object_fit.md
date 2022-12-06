# object-fit

Se usa para especificar como se debe cambiar el tamaño de `<img>` o `<video>` para que se ajuste a su contenedor.

tiene los siguientes valores:
+ fill: valor por defecto.
+ contain: el contenido se ajustará hasta rellenar de forma horizontal o vertical el contenedor sin deformarse.
+ cover: el contenido se ajustará hasta rellenar de forma horizontal y vertical el contenedor sin deformarse.
+ none: el contenido no se redimensiona y mantiene su tamaño original mostrando solo el trozo de las dimensiones especificas.
+ scale-down: selecciona el menor de la comparacion entre none y contain.

```css
img{
    width:250px;
    height:450px;
    object-fit:cover;
}
```