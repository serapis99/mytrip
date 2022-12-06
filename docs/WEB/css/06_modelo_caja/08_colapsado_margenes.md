# colapsado de marges

el colapsado de margenes es lo mismo que decir que se solapan los margenes de un elemento y de otro probocando que no se separen lo que se le esta indicando a cada elemento sino que se vea la separacion mayor de los dos elementos, y solo sucede cuando los margenes son los verticales **top** y **bottom**

Ejemplo:

en este ejemplo la separacion de los dos elementos seria de 30px ya que se solapa los 20px de las cajas.
```css
.box-1{
    margin-top:30px;
}
.box-2{
    margin-bottom:20px;
}
```

**NOTA**: la mediana solucion de este pequeño problema es dar solo margin-bottom e ir empujando los elementos.

## problemas de padres e hijos

el problema radica cuando un elemento hijo tiene una propiedad margin y esta hace que se desplace el elemento padre y no el elemento hijo. 

hay tres formas de solucionar esta problematica.

### forma 1

colocar la propiedad **overflow** en hidden en el elemento padre.

```css
.padre{
    overflow:hidden;
}
```
### forma 2

colocar la propiedad **padding-top** con cualquier valor.

```css
.padre{
    padding-top:0.1px;
}
```
### forma 3

colocar la propiedad **border-top** con cualquier valor.

```css
.padre{
    border-top:0.1px solid lightcoral;
}
```