# degradados

un degradado es una transicion entre un color y otro. El navaegador calculara todos los pasos intermedios entre los colores del degradado.

Es un valor de background-image
Existen dos tipos de degradados: lineales y radiales

## Degradados lineales

Sintaxis:

linear-gradient([direction], color-1, color-2,...)

```css
.div{
    background-image:linear-gradient(red, blue);
}
```
la direccion es opcional, se puede establecer con un angulo(20deg, 190deg) o estableciendo la direccion del degragado con " to top| to right | to bottom | to left | to top left |to top right |to bottom left | to bottom right"

```css
.div{
    background-image:linear-gradient(to left red, blue);
}
```

si no establecemos paradas de color, el navegador dividira el espacio disponible entre los colores que tenga que pintar.
+ 2 colores 0% 100%
+ 3 colores 0% 50% 100%

para establecer las paradas se puede usar cualquier medida, px, em , % ... si las paradas/inicios empiezan el el mismo sitio se genera un corte solido.

```css
/**solo indicando punto de inicio */
.div{
    background-image:linear-gradient(red 50%, blue 50%);
}

/**indicando punto de inicio y de corte */

.div{
    background-image:linear-gradient(red 50% 55%, blue 50% 75%, blue 74% 100%);
}

```
