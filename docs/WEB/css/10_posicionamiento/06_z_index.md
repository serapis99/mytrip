# z-index

nos permite mover las cajas en el eje z lo que nos permitira traer hacia adelante o mover hacia atras un elemento.

```css
.box{
    position:relative;
    top:50px;
    z-index:1;
}
```

**NOTA**: 

1. No se deberia colocar numeros consecutivos en el z-index ya que si hay un cambio no se tiene espacios a maniobrar por eso es mejor ponerlos de 100 en 100.
2. cuando se quiere traer afrente un elemento contenedor con respecto al hijo **NO SE PUEDE** toca enviar al hijo atras y solo funcionaria si el padre no tiene declarado un z-index. 

```css
.box{
    position:relative;
    top:50px;
    z-index:-100;
}
```