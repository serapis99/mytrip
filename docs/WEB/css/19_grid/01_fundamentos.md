# Fundamentos Grid

+ Es un modelo de layout que permite construir grillas o cuadriculas dinamicas. Es un valor de la propiedad display.
+ Al igual que con flexbox, tenemos `display:grid` y `display:inline-grid`
+ se necesita un contenedor `grid-container` y al menos un hijo `grid-item`
+ las celdas son los items, el contenedor es el contexto al que pertenecen los item

## terminologia
+ **grid column**: es cada columna de nuestra cuadricula.
+ **grid row**: es cada fila de nuestra cuadricula
+ **grid cell**: es cada celda de nuestra cuadricula.
+ **grid gap**: es la separacion entre celdas.
+ **Grid line**: existen column lines y row lines, son las lineas que delimitan cada columna/fila respectivamente.

## ventajas

+ En grid cada celda es dinamica y el resto de las cuadricula se adapta.
+ Podemos decir donde empieza cada celda y donde acaba, tanto en columna como en fila.
+ Sus posibilidades son inmensas.


+ **grid-template-columns**: se le indica el tamaño de cada columna.
+ **grid-template-rows**: se le indica el tamaño de cada fila
+ **grid-column-gap**: separacion entre columnas
+ **grid-row-gap**: separacion entre filas
+ **grid-gap**: shorthand que engloba `grid-column-gap` y `grid-row-gap`

```css
.grid-container{
    display:grid;
    grid-template-columns: 100px 50px 150px 10px;
    grid-template-rows: 100px 120px 50px;
    grid-column-gap:10px;
    grid-row-gap:10px;
}
```