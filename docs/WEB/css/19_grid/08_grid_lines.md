# grid lines

esta propiedad nos permite nombrar las lineas y se logra colocando el nombre entre corchetes simulando la linea a la que se esta nombrando separandolas por su medida `grid-template-colums` o `grid-template-rows`.

```css
/**creando la cuadricula */
.grid-container{
    grid-template-columns:[primera-columna] 100px [segunda-columna] 100px [tercera-columna] 100px [cuarta-culumna] 100px [ultima-columna];
    grid-template-rows:[primera-fila] 100px [segunda-fila] 100px [tercera-fila] 100px [cuarta-fila] 100px [ultima-fila];
}

/**indicando el elemento su posicion */

.grid-item{
    grid-column:primera-columna / tercera-columna;
    grid-row: primera-fila / tercera-fila;
}
```
