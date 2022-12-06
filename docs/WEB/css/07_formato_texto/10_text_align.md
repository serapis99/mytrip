# text align

Es la propiedad que nos permite alinear horizontalmente el contenido de un elemento de bloque siempre que el contenido **NO TENGA ANCHO DECLARADO**

Acepta 4 posibles valores:

+ **left**: alinea el contenido a la izquierda.
+ **right**: alinea el contenido a la derecha.
+ **center**: alinea el contenido al centro.
+ **justify**: alinea el contenido de forma justificado. no es recomendable usarlo.

Ejemplo:
```css
.block{
    text-align:center;
}

.inline{
    display:block;
    text-align:center;
}
```

**NOTA**: si no se centra el contenido toca revisar si es un elemento en bloque o tiene el **display:block** o que no estemos intentando centrar el contenido sino la caja donde tendriamos que usar los **margin**

Ejemplo:
```css

/**una imagen por regla tiene display:inline-block */
.img{
    display:block;
    margin-left:auto;
    margin-right:auto;
}

/**si no aplicamos estilos a la imagen sino al contenedor */
.img-contaner{
    text-align:center;
}
```

