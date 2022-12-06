# Cursor

esta propiedad nos permite modificar la forma del cursor cuando esta en el elemento que tiene la propiedad sus posibles valores son:

Generales:

+ auto:
+ default:
+ none: no muestra el cursor

links y status:

+ context-menu
+ help: cursor con signo de pregunta
+ pointer: manito
+ progress: cursor con simbolo de cargando
+ wait: simbolo de cargando

Selection:

+ cell
+ crosshair
+ text
+ vertical-text

Drag and drop

+ alias
+ copy
+ move
+ no-drop
+ not-allowed

Resize y scrolling
+ all-scrolling
+ col-resize
+ e-resize
+ ew-resize 
+ n-resize
+ ne-resize
+ nesw-resize
+ ns-resize
+ nw-resize
+ nwse-resize
+ row-resize
+ s-resize
+ se-resize
+ sw-resize 
+ w-resize 

Ejemplo:

```css
div{
    cursor:progress;
}
```

## cursores personalizados

podemos pasarle la ruta de un cursor a usar con la funcion **url()** permitiendo usar otro tipo de cursores.

+ .cur: cursores normales (todos los navegadores)
+ .ani: cursores animados (solo internet explorer)
+ .gif o .png: (no funciona en internet explorer)
+ .gif animado: no soportado en los navagadores.

```css
div{
    cursor:url("find.cur");
}
```

producir un desplazamiento de la imagen se debe dar dos valores uno para desplazamiento en "x" y el otro para el desplazamiento en "y"

```css
div{
    cursor:url("find.cur") 20 10;
}
```