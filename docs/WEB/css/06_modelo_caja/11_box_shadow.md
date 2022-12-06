# box-shadow

Esta propiedad se creo para añadir efectos de sombra a nuestra caja.

En esencia lo que hace es crear un clon de la caja respetando la forma de su box-model (ancho, alto, redondez)

la sintaxis de box-shadow se puede escribir de distintas formas segun lo que queramos conseguir.

+ **offset-x**: desplazamiento en x (Obligatorio)
+ **offset-y**: desplazamiento en y (Obligatorio)
+ **blur-radius**: desenfoque de la sombra
+ **spread-radius**: expansion de la sombra
+ **color**: el color de la sombra, si no lo especificamos lo heredara del elemento al que pertenece.
+ **inset**: determina si la sombra sera interior o exterior.

Ejemplo 1:
```css
.block{
    box-shadow:10px 20px;
}
```

Ejemplo 2:
```css
.block{
    box-shadow:5px 5px 10px;
}
```

Ejemplo 3:
```css
.block{
    box-shadow:5px 5px 10px 20px;
}
```

Ejemplo 4:
```css
.block{
    box-shadow:5px 5px 10px 20px #fff;
}
```

Ejemplo 5:
```css
.block{
    box-shadow:inset 5px 5px 10px 20px #fff;
}
```

**NOTA**: no hay limites en las sombras que podemos realizar y no ocupamos espacios del box model las sombras se van creando por debajo de la anterior, cada sombra se separara por comas.

Ejemplo:
```css
.block{
    box-shadow:5px 5px 10px 20px #fff, -5px -5px 10px 20px #f00;
}
```