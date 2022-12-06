# transiciones

nos permite indicarle el tiempo y la forma en que se aplicara un cambio de una propiedad y es un shorthand que engloba las siguientes propiedades.

+ transition-delay:
+ transition-duration:
+ transition-property:
+ transition-timing-function

su sintaxis es:

`transition: propiedades duracion delay timing_function`

En `timing_function` encontramos los siguientes valores:

+ ease: desacelerar
+ linear: lineal
+ ease-in: acelera poco a poco
+ ease-out: desacelera poco a poco
+ ease-in-out:lento rapido lento

Ejemplo: 

```css
div:hover{
    background-color:darkorange;
    transition:background-color 1s 0s ease-in;
}

```