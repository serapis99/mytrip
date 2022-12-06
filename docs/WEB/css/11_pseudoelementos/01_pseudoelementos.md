# pseudoelementos

Se utilizan para dar estilo a partes especificas de un elemento.

La sintaxis es: 

```css
    selector::pseudo-element{estilos}
```

Existen 5 pseudoelementos:
1. **first-line**(elementos de bloque): afecta a la primera linea de texto del elemento.
2. **first-letter** (elementos de bloque): afecta a la primera letra del texto del elemento.
3. **selection**: afecta cuando el usuario selecciona el texo del elemento (ya no esta en la especificacion)

```css
.text::first-line{
    color:red;
    font-size:2em;
}
```

para poder usar los siguientes pseudoelementos se tiene que tener encuenta 

+ la propiedad content es obligatoria
+ son elementos de linea por defecto
+ son hijos del elemento al que pertenecen


1. **before**:
2. **after**:

```css
.dolar::before{
    content:"$";
}

.dolar::after{
    content:".00";
}
```