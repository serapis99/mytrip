# Fondos (background)

Es una propiedad que nos permite darle un fondo a las cajas.

la propiedad background es un shorthand, la lista de propiedades que incluye background son:

+  **background-color**: Nos permite establecer un color de fondo.
+  **background-image**: Nos permite establecer una imagen de fondo.
+  **background-repeat**: Nos permite establecer si un fondo se repite o no.
+  **background-position**: Nos permite establecer la posicion del background
+  **background-size**: nos permite establecer el tamaño del background
+  **background-origin**: nos permite establecer desde donde se empezara a dibujar el fondo.
+  **background-clip**: nos permite establecer en que parte de la caja se dibujara el fondo.
+  **background-attachment**: nos permite establecer si el background es relativo a la caja o al viewport.

## color
La primera forma de establecer un fondo es darle un color con la propiedad **background-color**

Ejemplo:
```css
p{
    background-color:hsl(195,100%,50%)
} 
```

## imagenes

la segunda forma es colocar una imagene como fondo con la propiedad **background-image**

Ejemplo:
```css
p{
    background-image:url("ruta_imagen");
} 
```

## repetir una imagene

para poder repetir una imagen en el fondo se usa la propiedad **background-repeat** que tiene varios valores:

+ no-repeat: no repite la imagen 
+ repeat: por default se tiene este valor que repite la imagen tanto en x como en y
+ repeat-x: repite la imagen horizontalmente
+ repeat-y: repite la imagen verticalmente


## size

Establece el tamaño de la imagen de fondo y tiene los siguientes valores.
+ x [y] : el valor en y es opcional, si no se lo ponemos lo calcula automaticamente y representan el tamaño en **x**.
+ auto:
+ cover: cubre la caja por completo aunque la imagen escape del contenedor.
+ contain: la imagen se ajusta al contenido. 
+ 
## posicionar el fondo

podemos posicionar el fondo usando la propiedad **background-position** que nos permitira mover el fondo.

siempre resive dos parametros si no se especifica el segundo valor sera center.

algunos valores son:

+ left top
+ left center
+ left bottom
+ right top
+ right center
+ right bottom
+ center top
+ center center
+ center bottom
+ x% y%
+ xpos  ypos
+ initial
+ inherit

Ejemplo:
```css
p{
    background-position:left top;
} 
```
## movimiento

podemos hacer que el fondo no se mueva mientras la pagina se esta moviendo usando la propiedad **background-attachment** 
+ scroll
+ fixed

Ejemplo:
```css
p{
    background-attachment:fixed;
} 
```
## clip

establece que parte de la caja rellenara el fondo

+ border-box:
+ padding-box:
+ content-box:

## origin

establece donde comienza el fondo

+ border-box
+ padding-box
+ content-box