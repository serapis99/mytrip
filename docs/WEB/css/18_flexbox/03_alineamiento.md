# Alineamiento

Estas propiedades para alinear se aplican SIEMPRE al flex-container

Existen propiedades para el main-axis y para el cross-axis. 

+ main-axis: (justify-content):
  + **flex-start**: alinea los elementos al principio del main axis.
  + **center**: centra los elementos en la mitad del main axis.
  + **flex-end**: alinea los elementos al final del main axis.
  + **space-between**: distribuye los items a la misma distancia y no deja espacio exterior ni el primer ni el ultimo flex-end.
  + **space-around**: distribuye los items a la misma distancia y deja un espacio exterior en el primer y en el ultimo flex-item.
  + **space-evenly**: distribuye los items y los espacios exteriores del primer y ultimo flex-item dejando la misma distancia entre todos.
+ cross-axis:
  + align-items:(una sola linea)
    + flex-start
    + center
    + flex-end
    + stretch (default)
    + baseline
  + align-content: (varias lineas)
    + flex-start
    + center
    + flex-end
    + stretch (default)
    + baseline
  + align-self: se aplica al flex-item. sirve para alinear un elemento en concreto en el cross-axis.
    + flex-start
    + center
    + flex-end
    + stretch (default)
    + baseline

```css
.flex-container{
    display:flex;
    justify-content:center;
    align-items:center;
}

.flex-item{
    align-self:flex-end;
}
```

**NOTA**:en el contexto flex el margin:auto no funciona como debe funcionar normalmente sino funcionaria como un posicionador.

```css
.flex-container{
    display:flex;
}

/**se va a la parte de arriba a la derecha */
.flex-item{
    margin-bottom:auto;
    margin-left:auto;
}

/**se centra el elemento */
.flex-item{
    margin:auto;
}
```