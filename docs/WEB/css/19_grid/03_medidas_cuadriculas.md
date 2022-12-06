# Medidas de la cuadricula

Se pueden dar medidas con cualquiera de las unidades que ya conocemos y dos mas que vienen con grid `fr` y `auto`.

+ **fr**: Equivale a n fracciones del espacio disponible despues de establecer las medidas fijas.

```css
.grid-item{
    grid-template-columns: 100px 1fr 1fr;
}
```
+ **auto**: Equivale al espacio que quede despues de repartir todos los elementos, es el ultimo que se reparte. El tamaño minimo del item sera el espacio del contenido + el padding si lo tuviera.

```css
.grid-item{
    grid-template-columns: 100px auto 100px 100px;
}
```

