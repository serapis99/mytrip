# Seleccion de columnas

dentro de la tabla debemos colocar un **colgroup** y colocar tantas etiquetas **col** como columnas tenga nuestra tabla, esto con el fin de darle estilos a las columnas.

tambien tenemos el atributo span para indicarle que tome mas de una columna.

```HTML
<table>

    <colgroup>
        <col span="2">
        <col>
    </colgroup>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    <tr>
    
    <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
    <tr>

    <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
    <tr>
</table>
```