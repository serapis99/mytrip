# selectores de atributo

los selectores de atributo estan divididos en 
+ id: identificador del elemento id
+ class: clase del elemento 
+ otros atributos:

## id

lo primero que debemos tener en cuenta es que un elemento del html tenga el atributo id y en css lo indicamos con el simbolo numeral y el valor del id al que queremos seleccionar, algo a tener encuenta es que css es case-sensitive por los tanto diferencia entre mayusculas y minusculas en los selectores con valor.

se debe intentar no usar ya que se incumple lo que quiere hacer css y es que el codigo sea reutilizable. 

```css
#title{
    background-color:lightcoral;
}
```

## class

al igual que el de id se debe tener elementos que tengan el atributo class y seran seleccionados cuando el valor de este atributo coincida con el del selector, la diferencia radica que para indicar que es una clase se usa el simbolo punto.

```css
.miClase{
    background-color:lightcoral;
}
```

## otros atributos

para poder seleccionar un elemento usando otro atributo que no sea ni id ni class tendremos que usar corchetes y dentro de los corchetes escribir el atributo que deseamos seleccionar.

### sin especificar valor
```css
[href]{
    background-color:lightcoral;
}
```

### especificando el valor
```css
[href="https://www.google.com"]{
    background-color:lightcoral;
}
```

### especificando que el valor inicia con el valor pasado
```css
[href^="color"]{
    background-color:lightcoral;
}
```

### especificando que contenga el valor pasado

```css
[href*="color"]{
    background-color:lightcoral;
}
```

### especificando que finaliza con el valor pasado

```css
[href$="color"]{
    background-color:lightcoral;
}
```

### caso especial

cuando el valor puede venir con otro con la separacion de un guion se puede usar el simbolo paid el ejemplo mas comun es el de lenguaje que puede seleccionar **es** como **es-CO** o **es-ES** o cualquier otro derivado del lenguaje español.

```css
[lang|="es"]{
    background-color:lightcoral;
}
```

