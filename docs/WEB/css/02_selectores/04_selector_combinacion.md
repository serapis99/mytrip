# selectores de combinacion

los selectores de conbinacion funcionan uniendo dos o mas selectores para llegar al elemento que queremos seleccionar.

## seleccion descendente

este tipo de seleccion nos permite indicarle que el elemento que queremos seleccionar debe ser hijo de otro selector y para indicar esto debemos separar los selectores con espacios. 

no es buena idea tener mas de dos elementos en el selector de hijos aunque se pueda. 

```css
div .class{
    background-color:lightcoral;
}
```
## seleccion de hijo directo

cuando queremos indicar que seleccione solo los elementos que son hijos y no otro desendiente como nietos se usa el simbolo de mayor que

```css
.classPadre > .classHijo{
    background-color:lightcoral;
}
```

## selector de hermanos siguiente

para poder seleccionar el hermano siguiente se usa el simbolo mas, y solo seleccionar el hermano inmediatamente siguiente

```css
.classHermano + .classHermanoSiguiente{
    background-color:lightcoral;
}
```

## selector de hermanos siguientes

cuando se desea seleccionar todos los hermanos siguientes que cumplan una condicion se usa **~**

```css
.classHermano ~ .classHermanoSiguiente{
    background-color:lightcoral;
}
```

