# Alineamiento

+ **justify-items**: Alinea los elementos horizontalmente respecto a la celda, admite los valores:
  + start
  + end
  + center
  + stretch(default)
+ **align-items**: Alinea los elementos verticalmente respecto a la celda, admite los valores:
  + start
  + end
  + center
  + stretch(default)
+ **place-items**: engloba las propiedades `justify-items` y `align-items`.

```css
.grid-container{
    justify-items:start;
    align-items: center;

    place-items:start center;
}
```

+ **justify-content**: alinea los elementos horizontalmente respecto al contenedor.
+ **align-content**: alinea los elementos verticalmente respecto al contenedor admite los valores:
  + start
  + end
  + center
  + stretch(default)
  + space-around
  + space-between
  + space-evenly
+ **place-content**: engloba las propiedades `align-content` y `justify-content`


```css
.grid-container{
    justify-content:start;
    align-content: center;
    place-content:start center;
}
```

Tenemos las mismas propiedades con self para los items:

+ justify-self
+ align-self
+ place-self

y admiten los valores:
+ start
+ end
+ center
+ stretch

```css
.grid-item{
    justify-self:start;
    align-self: center;
    place-self:start center;
}
```

+ **order**: funciona igual que en `flexbox`, por defecto todos los items tienen `order:0` y trata en que orden se posicionaran los objetos entre mayor sea el numero sera el ultimo y entre menor sera el primero.