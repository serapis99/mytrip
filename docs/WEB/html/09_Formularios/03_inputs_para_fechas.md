# Input de tipo fecha

## date:

se utiliza para introduciir una fecha, funciona bien en todos los navegadores.

```HTML
<input type="date">
```
## time
Se utiliza para introduccir una hora
```HTML
<input type="time">
```
## datetime-local
Se utiliza para introduccir fecha y hora, pero no funciona en firefox. (No se recomienda usarlo por temas de soporte si se necesita fecha y hora se deben usar dos etiquetas las cuales son **date** y **time**).

```HTML
<input type="datetime-local">
```

## month
Se utiliza para introduccir mes y año.
```HTML
<input type="month">
```

## week
Se utiliza para introduccir el numero de semana del año.
```HTML
<input type="week">
```