# RGB

En el modo RGB tenemos tres canales (Red, Green, Blue) y tenemos 8 bits de color por canal, (cada bit tiene dos posibles valores 0 o 1) lo que significa que tenemos 2^8 posibles valores, que van desde 0 hasta 255.

Esto nos da un total de 255*255*255 = 16.581.375 colores.

su sintaxis es rgb(R,G,B)

si podemos todos los canales a 0 tendremos un negro puro y si los ponemos a 255 tendremos un blanco. 

para movernos por la gama de grises debemos poner los 3 canales con el mismo valor, si ponemos los 3 canales a 128 tendremos el gris puro.

el modo RGB nos da la opcion de utilizar un cuarto canal que corresponderia al canal alpha, es decir, la transparencia, y su valor va desde 0 a 1. tenemos dos sintaxis para utilizar el canal alpha.

+ rgba(R,G,B,A)
+ rgb(R G B / A)


Ejemplo:

RGB

```css
p{
    color:rgb(255,0,200);
} 
```

RGBA
```css
p{
    color:rgba(255,0,200,0.8);
} 
```


## RGB %

con esta opcion indicamos el porcentaje que le damos a cada color de 0 a 100%, debemos usar la funcion rgb para convertir estos porcentajes en el color deseado, su sintaxis es **rgb(rrr%,ggg%,bbb%)**.

Ejemplo:
```css
p{
    color:rgb(100%,0%,80%);
} 
```