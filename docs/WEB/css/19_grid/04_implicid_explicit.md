# Explicit grid y implicit grid:

## Explicit grid: 

Es el grid que declaramos, tanto con `grid-template-columns` como con `grid-template-rows`

```css
.grid-container{
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows:repeat(2,100px);
}
```
## Implicit grid: 

Es el grid que no declaramos, los items que quedan fuera del explicit grid.

+ **grid-auto-columns**: Establece que hacer con las columnas no definidas.

```css
.grid-container{
    grid-auto-columns: 200px;
}
```

+ **grid-auto-rows**: Establece que hacer con las filas no definidas.

```css
.grid-container{   
    grid-auto-rows:200px;
}
```

+ **grid-auto-flow**: establece la direccion en la cual se va a pintar el implicit grid. admite 3 valores:
  + row(default): se creara filas adiccionales.
  + column: se crearan columnas adicionales.
  + dense: establece que hacer con los huecos que queden.

```css
.grid-container{   
    grid-auto-flow:row dense;
}
```

```css
.grid-container{   
    grid-auto-flow:column dense;
}
```