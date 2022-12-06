# padding

Es la propiedad que nos permite generar espacio interno entre el borde y la caja.

Es un **shorthand**(propiedad abreviada) que controla los 4 lados posibles a los que dar padding

+ **padding-top**: padding superior
+ **padding-right**: padding derecho
+ **padding-bottom**: padding inferior
+ **padding-left**: padding izquierdo

El **shorthand** admite 4 valores que van en el orden de las agujas del reloj.

+ **4 valores**: padding: top right bottom left;
+ **3 valores**: padding: top right/left bottom;
+ **2 valores**: padding: top/bottom right/left
+ **1 valor**: padding: top/right/bottom/left

Ejemplo:

```css
.block{
    padding:50px 20px;
}

.inline{
    padding:50px 20px;
}
```
**NOTA**: padding afecta por igual a los elementos de caja y en linea.

