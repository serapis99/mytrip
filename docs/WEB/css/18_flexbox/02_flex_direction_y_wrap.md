# Direccionamiento del axis

flex-direction: modifica la direccion y cual es el eje principal. 

sus posibles valores son:

+ **row**(default): (horizontal de izquierda a derecha)
+ **row-reverse**: (horizontal de derecha a izquierda)
+ **column**: (vertical de arriba a abajo)
+ **column-reverse**: (vertical de abajo a arriba)

flex-wrap:

+ **no-wrap**: es el valor por defecto, un contenedor flex va a hacer que todos los elementos se queden en una linea si no le especificamos lo contrario.
+ **wrap**: hace que los elementos que no quepan en una linea (manteniendo sus dimensiones, si las tuvieran) salten a la linea inferior.
+ **wrap-reverse**: hace lo mismo que wrap pero en lugar de hacer que salten a la linea inforior, hace que salten a la linea superior. 

```css
.flex-container{
    display:flex;
    flex-direction:row-reverse;
    flex-wrap:wrap;
}

```

**NOTA**: Existe un shorthand para **flex-direction** y **flex-wrap**. que es **flex-flow**: flex-direction flex-wrap.

```css
.flex-container{
    display:flex;
    flex-flow:row-reverse wrap;
}

```