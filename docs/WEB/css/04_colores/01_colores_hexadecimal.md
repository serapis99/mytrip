# Colores Hexadecimal

la notacion hexadecimal es la mas comun en desarrollo web, se basa en los mismos principios que el RGB pero escritos en notacion hexadecimal.

El sistema hexadecimal es un sistema basado en 16 valores del 0 a 15 utiliza los digitos del 0 al 9 y las letras de la A a la F.

en este tipo de notacion tambien necesitamos 256 valores.

Se compone de 16 caracteres en parejas ya que 16*16=256

para indicar que vamos a usar notacion hexadecimal debemos usar el simbolo de hash/almohadilla # y a continuacion usaremos esta notacion por parejas.

\#RRGGBB

```css
p{
    color:#FF0088;
} 
```

cuando una pareja usa el mismo valor se puede omitir el segundo valor, siempre que se haga en las 3 parejas.

rgb(255,255,255) -> #FFFFFF -> #FFF 
rgb(0,0,0) -> #000000 -> #000

```css
p{
    color:#F08;
} 
```

Tambien tenemos la opcion de usar transparencias en hexadecimal añadiendo un cuarto canal que sigue las mismas normas.

rgb(0 0 0/ 0.5) -> #00000080 -> #0007

```css
p{
    color:#F08F0878;
} 
```
