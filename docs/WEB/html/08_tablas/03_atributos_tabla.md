# Atributos tabla

para hacer que las celdas ocupen mas de una fila o mas de una columna tenemos 2 atributos:

1. rowspan: sirve para que una celda ocupe más de una fila, el valor por defecto es 1.
2. colspan: sirve para que una celda ocupe más de una columna, el valor por defecto es 1.

```HTML
<tbody>
    <tr>
        <td rowspan="3">Contenido 1</td>
        <td>Contenido 2</td>
        <td>Contenido 3</td>
    </tr>

    <tr>
        <td colspan="3">Contenido 1</td>
    </tr>

    <tr>
        <td>Contenido 2</td>
        <td>Contenido 3</td>
    </tr>
</tbody>
```