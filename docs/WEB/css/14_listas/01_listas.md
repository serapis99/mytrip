# listas

Normalmente necesitamos resetear los estilos por defecto de una lista:

```css
.list{
    margin-top:0;
    margin-bottom:0;
    padding-left:0;
    list-style:none;
}
```


hay tres propiedades para las listas, se pueden aplicar al padre o a los elementos de la lista.

**list-style-type**: Establece el estilo de viñeta.
+ no ordenada:
  + disc
  + circle
  + square
+ ordenada:
  + decimal
  + decimal-leading-zero
  + lower-roman
  + upper-roman
  + lower-greek
  + lower-latin
  + upper-latin
  + armenian
  + georgian
  + lower-alpha
  + upper-alpha

**list-style-position**: hace que las viñetas se coloquen por dentro o por fuera del elemento.

+ outside
+ inside

**list-style-image**: pone una imagen en lugar de la viñeta, no se suele utilizar porque hay formas mucho mas eficientes de hacerlo.
+ url(image)

Ejemplo formas mas eficientes:

```css
.list{
    list-style-type:none;
}

.list::before{
    content:"";
    display:inline-block;
    width:1.5em;
    height:1.5em;
    background-image:url(imagen);
    background-position:0 0;
    background-size:contain;
    background-repeat:no-repeat;
}
```