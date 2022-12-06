# filter (filtros):

+ none
+ blur(px): desenfoca la imagen.
```css
.img{
    filter:blur(5px);
}
```
+ bringhtness(%): Ajusta el brillo de la imagen siendo 1 el original. De 0 a 1 dan oscuridad y de 1 a n dan sobreexposicion.
```css
.img{
    /**brillo a la mitad */
    filter:bringhtness(0.5);
}
```
+ contrast(%): Ajusta el contraste de la imagen siendo 1 el original. de 0 es negro y de 1 a n dan mas contraste.
```css
.img{
    /**brillo a la mitad */
    filter:contrast(0.5);
}
```
+ drop-shadow(h-shadow v-shadow blur spread color): Aplica una sombra paralela a la imagen.

```css
.img{
    filter:drop-shadow(10px 10px 5px #000);
}
```

+ grayscale(%): convierte la imagen a escala de grises, 0 es el original y 1 seria blanco y negro completamente.
```css
.img{
    filter:grayscale(1);
}
```
+ hue-rotate(deg): Añade matiz de color a la imagen. se da un valor en grados segun la rueda cromatica. El valor maximo es 360 deg
```css
.img{
    filter:hue-rotate(90deg);
}
```
+ invert(%): Invierte el color de la imagen. saca un negativo. 0 es el valor por defecto y 1 es totalmente invertida
```css
.img{
    filter:invert(0.5);
}
```
+ opacity(%): controla la opacidad de la imagen. 1 es el valor por defecto y 0 es transparente.
```css
.img{
    filter:opacity(0.5);
}
```
+ saturate(%): controla la saturacion de color de la imagen. 1 es el valor por defecto, 0 es totalmente desaturada y por encima de 1 se sobresatura.
```css
.img{
    filter:saturate(0.5);
}
```
+ sepia(%): aplica un tono sepia a la imagen. 0 es el valor por defecto y 1es totalmente sepia

```css
.img{
    filter:sepia(1);
}
```

