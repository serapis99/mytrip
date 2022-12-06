# Structural


## Primer grupo:

+ **:root**:  representa la raiz del documento (html) usando una pseudoclase tenemos mas especificidad que si usaramos html.
+ **:empty**: esta pseudoclase se aplica para los elementos vacios, es decir, etiquetas que no tienen contenido.
+ **:first-child**: selecciona al primer hijo que cumple el selector (independientemente del tipo de etiqueta)
+ **:last-child**: selecciona al ultimo hijo que cumple el selector (independientemente del tipo de etiqueta)
+ **:only-child**: selecciona al hijo unico (independientemente del tipo de etiqueta) debe ser hijo unico si tiene hermanos no funciona

Ejemplos
```css
/**cuando el campo esta vacio*/

p:empty{
    all:unset; /**resetea los estilos*/
}

/**se aplica si hay una clase paragraph y es el primer hijo de algun elemento si no es el primer elemento no selecciona*/
.paragraph:first-child{
    background-color:red;
}
```
---
## Segundo grupo:

los siguientes dos pseudoclases tienen los siguientes valores posibles
  + odd: Impares
  + even: Pares
  + n: cualquier numero entero y es la posicion del hijo
  + equaciones: cualquier ecuacion que se pueda remplazar **n** por un numero y se aplicara en bucle hasta que se llegue al maximo de hijos algunos ejemplos son:
    + 1n
    + 3n
    + 4n+1
    + n+4
    + 2n+1

pseudoclases

+ **:nth-child(n)**: selecciona al hijo n (independientemente del tipo de etiqueta).
+ **:nth-last-child(n)** selecciona al hijo n empezando a contar desde el ultimo (independientemente del tipo de etiqueta).

Ejemplos
```css
/**Impares */
.paragraph:nth-child(odd){
    background-color:red;
}
/**pares */
.paragraph:nth-child(even){
    background-color:green;
}
/**hijo 3*/
.paragraph:nth-child(3){
    background-color:blue;
}

/**selecciona los hijos multiplos de 3*/
.paragraph:nth-child(3n){
    background-color:blue;
}
```
---
## Tercer Grupo:

Este grupo de pseudoclases estructurales (type), funcionan igual a los anteriores grupos solo que estos si les importa el tipo de elemento a los que selecciona.

+ :first-of-type
+ :last-of-type
+ :nth-of-type()
+ :nth-last-of-type()
+ :only-of-type:

```css
/**primer hijo que tenga la clase paragraph y puede seleccionar dependiendo el elemento en otras palabra puede seleccionar el primer hijo p el primer hijo div y asi distingue entre elementos*/
.paragraph:first-of-type{
    background-color:red;
}
```

## pseudoclase not

esta pseudoclase nos permite aplicarle estilos a cualquier elemento que NO cumpla la seleccion que se le pasa a la funcion not, funciona con cualquier tipo de selector que tengamos.

```css
.paragraph:not(div){
    background:green;
}
```