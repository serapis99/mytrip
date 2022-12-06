# margin

Es la propiedad que nos permite generar espacio entre elementos.

Es un **shorthand** (propiedad abreviada) que controla los 4 lados posibles a los que dar margenes.

+ **margin-top**: margen superior
+ **margin-right**: margen derecho
+ **margin-bottom**: margen inferior
+ **margin-left**: margen izquierdo

El **shorthand** nos permite hasta 4 valores que van en el orden de las aguas del reloj.

+ **4 valores** margin: top right bottom left;
+ **3 valores** margin: top left/right bottom;
+ **2 valores** margin: top/bottom left/right
+ **1 valor** margin: top/left/bottom/right

Ejemplo:

```css
.block{
    margin:100px 50px 10px 200px;
}

.inline{
    margin-left:10px;
    margin-right:20px;
}
```

**NOTA**: como anotacion los elementos de linea solo poseen margin left y right las otras propiedades no son admitidas. 

## Trucos

algunas cosas que podemos hacer es usar la palabra **auto** como valor de la propiedad margin para que se calculen las margenes, se le debe declarar un ancho ya que si no tienen esa propiedad estaran ocupando todo el contenido.

### alinear a la derecha:
```css
.block{
    margin-left:auto;
}
```

### alinear a la izquierda:
```css
.block{
    margin-right:auto;
}
```
### centrar el bloque
```css
.block{
    margin-right:auto;
    margin-left:auto;
}
```

