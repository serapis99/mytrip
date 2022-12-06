# variables css (custom Properties)

+ Una variable es un espacio en memoria en el que guardamos un valor para poder reutilizarlo o modificarlo.
+ Las variables necesitan estar dentro de un selector
+ Tiene herencia y cascada
+ Existen variables globales y locales, dependera del selector en el que lo declaremos
+ las variables CSS no son lo mismo que las variables SCSS

Su sintaxis es:

```css

/**crear una variable */
selector{
    --nombre-variable:valor;
}
/**Usar la variable en una propiedad */
selector{
    propiedad:var(--nombre-variable);
}
```

Ejemplo:

```css

/**crear una variable */
:root{
    --color:blue;
}


/**Usar la variable en una propiedad */
.paragraph{
    color:var(--color);
}
```