# border

Es la propiedad que nos permite modificar el borde de la caja.

Es un **shorthand** (propiedad abreviada) que agrupa 3 propiedades:

+   **border-width**: ancho de los bordes y tambien es un **shorthand** que agrupa a:
    +   border-top-width
    +   border-right-width
    +   border-bottom-width
    +   border-left-width
+   **border-style**: estilo del borde y tambien es un **shorthand** que agrupa a:
    +   border-top-style
    +   border-right-style
    +   border-bottom-style
    +   border-left-style
+   **border-color**: color del borde y tambien es un **shorthand** que agrupa a:
    +   border-top-color
    +   border-right-color
    +   border-bottom-color
    +   border-left-color

Ejemplo


```css
.button{
    border: 1px solid red;
}
```

## Estilos de los bordes

en css se tiene un listado de los posibles estilos que se le pueden dar a los bordes los cuales son:

+ none: quita los bordes 
+ hidden: ocualtan los bordes
+ dotted: bordes punteado
+ dashed: bordes discontinuo
+ solid: borde con una linea continua
+ double: borde doble donde la cantidad se divide en 3 y es continua
+ groove: bordes con surcco
+ ridge: bordes con cresta
+ inset: bordes con recuadro
+ outset: bordes con recuadro externo

Ejemplo:

```css
.button{
    border-style: dashed;
}
```

## Redondeo de bordes

Es la propiedad que nos permite redondear vertices de forma independiente.

Es un **shorthand** que engloba 4 propiedades:
+ **border-top-left-radius**: radio del borde superior izquierdo.
+ **border-top-right-radius**: radio del borde superior derecho
+ **border-bottom-right-radius**: radio del borde inferior derecho
+ **border-bottom-left-radius**: radio del borde inferior izquierdo.

El **shorthand** admite de 1 a 4 valores lo que le da un radio a cada vertice y que van en el orden de las agujas del reloj.

### circular

cuando solo colocamos un solo valor se obtiene solo un radio por lo tanto se genera bordes circulares.

Ejemplo:

```css
h1{
    border-radius:50px 26px 30px;
}

h2{
    border-radius:50px 26px;
}
```

### Elipse 

cuando colocamos dos valores creamos dos radios que haran que sea una elipse el borde que estamos realizando.

Ejemplo

```css
h1{
    border-top-left-radius:50px 26px;
}
```

El problema existe cuando queremos hacer estas elipses desde **border-radius**  lo que tenemos es agrupar los valores del radio usando el simbolo de division.

```css
h1{
    border-radius:50px/26px;
}

h1{
    border-radius:50px/26px 25px 36px/21px 15px;
}
```