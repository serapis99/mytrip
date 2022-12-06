# grid template areas

se trata de establecer filas y columnas no por numeros sino por nombre.

```css

/** se crea el formato de la cuadricula */
.main{
    display:grid;
    grid-template-areas:
        "header header header"
        "aside article article"
        "footer footer footer"
}

/** se le asigna al elemento el nombre de la cuadricula donde se encontraba */
.header{
    grid-area:header;
}
```

**NOTA**: con el simbolo punto o guion le podemos indicar a la cuadricula que queremos que quede vacio. 

```css
.main{
    display:grid;
    grid-template-areas:
        "header header header"
        "aside . article"
        "footer footer footer"
}
```