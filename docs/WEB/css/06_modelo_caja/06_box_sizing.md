# box-sizing

Es la propiedad que nos permite controlar el calculo que hace el navegador a la hora de modificar las propiedades content, padding y border.

los dos valores que podemos darle son:
+ **content-box:** valor por defecto, calcula el tamaño de la caja solo teniendo presente el contenido, por lo tanto se suma el padding y el border en el tamaño total de la caja.
+ **border-box:** calculo de tamaño de la caja incluyendo el padding y el border, por lo tanto el tamaño total es el que ponemos en width y el se encarga de reajustar los tamaños a medida que le damos un padding y un border, no se puede pasar del tamaño de la caja porque comenzara actuar extraño.

**NOTA** como buena practica se puede usar el selector universal y darle la propiedad de box-sizing que queramos.

Ejemplo:

```css
*{
    box-sizing:border-box;
}
```