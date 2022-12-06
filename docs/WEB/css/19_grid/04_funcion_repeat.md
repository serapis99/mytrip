# funcion repeat()

Con la funcion `repeat` podemos establecer repeticiones de medidas o patrones. 

En el caso "simple" recibiria 2 parametros (valores):
+ **repeat**:(nColumnas o nFilas, medida).
```css
.grid-item{
    grid-template-columns: repeat(4,100px);
}
```
es lo mismo que:
```css
.grid-item{
    grid-template-columns: 100px 100px 100px 100px;
}
```
Si como sengundo valor añadimos mas de una medida, construiremos un patron, no hay limite.

```css
.grid-item{
    grid-template-columns: repeat(2,100px 50px);
}
```
es lo mismo que:
```css
.grid-item{
    grid-template-columns: 100px 50px 100px 50px;
}
```