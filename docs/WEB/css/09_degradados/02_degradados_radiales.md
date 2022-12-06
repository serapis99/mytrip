# degradados radiales

funcionan de una forma similar a los degradados lineales.

sintaxis:

background-image: radial-gradient([shape], color-1, color-2,...);

```css
div{
    background-image:radial-gradient(red, blue);
}
```

por defecto, shape se ajustara al tamaño de la caja, pero podemos establecer si queremos un circulo o una elipse y definir el radio o los radios.

```css

/**circulo con un radio de 100px */
div{
    background-image:radial-gradient(circle 100px, red, blue);
}

/**elipse con radios de 100px y 50px */
div{
    background-image:radial-gradient(ellipse 100px, 50px red, blue);
}
```

si no establecemos un punto de origen, el punto sera 0 0 en el centro del elemento. pera establecer el punto de origen podemos hacerlo en medidas o con palabras clave. usando la palabra clave **at** establecemos el punto de origen.

los valores que acepta son:

+ top
+ right
+ bottom
+ left
+ center
+ closest-side
+ closest-conner
+ farthest-side
+ farthest-corner

```css

/**posicion con dos valores*/
div{
    background-image:radial-gradient(circle 100px at top left, red, blue);
}

/**posicion con un solo valor el otro sera siempre center*/
div{
    background-image:radial-gradient(ellipse 100px 50px at top , red, blue);
}
```