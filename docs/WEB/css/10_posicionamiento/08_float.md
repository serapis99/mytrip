# Float (flotada)

Esta propiedad ubica un elemento al lado izquierdo o derecho de su contenedor, permitiendo a los elementos de texto y en linea aparecer a su costado. el elemento es removido del normal flujo de la pagina aunque aun sigue siendo parte del flujo.

los valores pueden ser:

+ none: El elemento no debera flotar
+ left: El elemento debe flotar a la izquierda de su bloque contenedor
+ right: El elemento debe flotar a la derecha de su bloque contenedor
+ inline-start: El elemento debe flotar en el costado de inicio de su bloque contenedor
+ inline-end: El elemento debe flotar en el costado de termino de su bloque contenedor.

```css
.item{
    float:left;
}
```

cuando terminemos de usar cajas flotantes y queramos volver al diseño normal debemos usar la propiedad **clear** que acepta los siguientes valores.

+ left: termina de colocar los objetos flotantes que estan a la izquierda.
+ right: termina de colocar los objetos flotantes que estan a la derecha.
+ both: termina de colocar los objetos flotantes que se encuentren a ambos lados.

```css
.item{
    clear:both;
}
```

NOTA: Se posiciona a la derecha o izquierda de su contenedor.