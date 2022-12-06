# animaciones

para lograr hacer una animacion debemos usar la palabra clave `@keyframes` seguido de una palabra que nos permitira nombrar a la animacion.

```css
@keyframes animacion1{

}
```

dentro de la animacion debemos colocar el valor de inicio y los diferentes valores que tomara a medida que pasa la animacion. normalmente se tiene la palabra `from` para indicar que es el valor de 0% y `to` para indicar que es el 100% pero podemos colocar cualquier porcentaje con los respectivos valores que tendra la animacion en ese punto.

```css
@keyframes animacion1{
    from {
        background-color: red;
    }

    to{
        background-color: yellow;
    }
}
```

o 

```css
@keyframes animacion1{
    0% {
        background-color: red;
    }

    100%{
        background-color: yellow;
    }
}
```

```css
@keyframes animacion1{
    0%   {background-color: red;}
    25%  {background-color: yellow;}
    50%  {background-color: blue;}
    100% {background-color: green;}
}
```

por ultimo debemos indicar que elemento tendra la animacion y las propiedades de esta animacion.

+ **animation-name**: nombre de la animacion.
+ **animation-duration**: duracion de la animacion debe ser mayor a 0s para que se vea la animacion.
+ **animation-delay**: retrasa el inicio de la animacion
+ **animation-iteration-count**: cuantas veces se hara la animacion puede ser cualquier valor entero o `infinite`.
+ animation-direction: la direccion de la animacion.
  + normal:hacia delante
  + reverse: hacia atras
  + alternate: hacia delante luego hacia atras
  + alternate-reverse: hacia atras luego hacia adelante
+ animation-timing-function: velocidad de la animacion
  + ease: lento rapido lento (default)
  + linear: el mismo tiempo para toda la animacion.
  + ease-in: comienzo lento
  + ease-out: finaliza lento
  + ease-in-out: comienzo y final lento
  + cubic-bezier(n,n,n,n): propios valores en una funcion cubic-bezier.
+ animation-fill-mode:

```css
div{
    animation-name:animacion1;
    animation-duration:10s;
    animation-delay:0s;
    animation-iteration-count:3;
    animation-direction:alternate;
    animation-timing-function:ease-in;

}
```

shorthand: animation

`animation:animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-fill-mode` 