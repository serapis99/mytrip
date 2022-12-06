# Estructura completa

## titulos

los titulos de las tablas se establecen con la etiqueta **caption**, es una etiqueta opcional, y segun la especificacion esa etiqueta se coloca justo despues de la etiqueta tabla.

```HTML
<table>
    <caption>Horario de clases</caption>
</table>
```

## cabeceras

las cabeceras de las tablas se establecen con la etiqueta **thead** dentro tendremos una etiqueta **tr** normal, pero en el caso de las celdas, las establecemos con la etiqueta **th**, es una etiqueta opcional.

```HTML
<thead>
    <tr>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sabado</th>
        <th>Domingo</th>
    </tr>
</thead>

```
## cuerpo 

el contenido de la tabla debe ir dentro de una etiqueta **tbody** para representar el cuerpo de la tabla, no es obligatorio mientras no exista la etiqueta **thead**.

```HTML
<tbody>
    <tr>
        <td>Contenido 1</td>
        <td>Contenido 2</td>
        <td>Contenido 3</td>
        <td>Contenido 4</td>
        <td>Contenido 5</td>
        <td>Contenido 6</td>
        <td>Contenido 7</td>
    </tr>
</tbody>

```


## pie de tabla

de forma opcional podemos colocar un **tfoot** a la tabla para establecer un pie de tabla, esto es algo que alguna tablas tienen como suma de cantidades o total.

```HTML
<tfoot>
    <tr>
        <td>Contenido</td>
    </tr>
</tfoot>
```