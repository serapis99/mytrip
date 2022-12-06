# colores hsl y hsla

El modo de color HSL es el mas intuitivo para los humanos. su nombre viene de las siglas Hue(tono), saturation(saturacion) y lightness(luminncia)

El primer valor es el angulo en el circulo cromatico donde 0 y 360 sera el color rojo. hay ciertos valores que pueden servir como referencia para relacionar mejor los colores con sus angulos.

+ 0 rojo
+ 60 amarillo
+ 120 verde
+ 180 cyan
+ 240 azul
+ 300 magenta

el segundo valor es la saturacion o intensidad del color. 

+ 0% gris
+ 100% color puro

El tercer valor es la luminosidad del color.
+ 0% negro, nada de luz
+ 100% blanco, luz maxima

**NOTA** es importante que aunque el valor de saturacion o luminancia sea 0 hay que poner 0% si no, no funcionara.

El modo HSL tambien admite transparencia y su sintaxis es la misma que la del modo RGB. tenemos dos sintaxis disponible.

+ hsla(h,s,l,a)
+ hsl(h s l / a)

En ambos casos el valor alpha va 0 a 1.

Existen otros cuatro modos de color en los que esta trabajando que serian.
+ CMYK (cyan, magenta, yellow, black)
+ HWB (Hue,Whiteness, Blancness)
+ Lab (lightness, distance a, distance b)
+ lch (lightness, chroma, hue)


Ejemplo sin transparencia:
```css
p{
    color:hsl(195,100%,50%);
} 
```

Ejemplo con transparencia:
```css
.nav{
    color:hsla(195,100%,50%,0.5);
} 

.main{
    color:hsl(195 100% 50% /0.5);
} 
```