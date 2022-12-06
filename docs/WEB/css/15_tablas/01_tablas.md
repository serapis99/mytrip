# tablas

+ **table-layout**: define como se comportan las dimensiones de una tabla y los anchos de las "columnas":
  + automatic: valor por defecto
  + fixed: necesita un width declarado, si no se le da un ancho a cada columna se distribuyen equitativamente.

```css
.tabla{
    table-layout:fixed;
    width:100%;
}
```
+ **caption-side**: define donde se coloca el caption de una tabla
  + top: valor por defecto
  + bottom: se coloca al pie de la tabla

```css
.tabla{
    caption-side:bottom;
}
```
+ **border-spacing**: controla el espaciado entre las celdas recibe una medida en cualquier unidad.

```css
.tabla{
    border-spacing:10px;
}
```

+ **border-collapse**: controla si las celdas se mantienen juntas o separadas.
  + separate: valor por defecto
  + collapse: junta las celdas

```css
.tabla{
    border-collapse:collapse;
}
```

+ **empty-cells**: controla que hacer con las celdas vacias
  + show: valor por defecto.
  + hide: oculta las celdas vacias.

```css
.tabla{
    empty-cells:hide;
}
```