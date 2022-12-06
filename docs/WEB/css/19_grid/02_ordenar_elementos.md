# Ordenar elementos con grid-column y grid-row

+ **grid-column-start**: establece desde que column-line empezara el elemento.
+ **grid-column-end**: establece hasta que column-line llega el elemento.
+ **grid-row-start**: establece desde que row-line empezara el elemento.
+ **grid-row-end**: establece hasta que row-line llegara el elemento.

```css
.grid-item{
    grid-column-start:1;
    grid-column-end:2;
    grid-row-start:1;
    grid-row-end:2;
}

```
Existe un shorthand que engloba las 2 propiedades:
+ **grid-column**: start / end
+ **grid-row**: start / end

```css
.grid-item{
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

```
tanto start como end admiten valores positivos, negativos y la palabra span:

+ valores positivos: Empieza a contar las column-lines o las row-lines de izquierda a derecha.
+ valores negativos: Empieza a contar las column-lines o las row-lines de derecha a izquierda.
+ span: establecemos cuantas columnas ha de ocupar, span 3 es como decirle que ocupe 3 columnas.

```css
.grid-item{
    grid-row-start: span 1;
    grid-column-end: span 3;
}

```
**TIP**: si ponemos en el valor end -1 llegara hasta el final.