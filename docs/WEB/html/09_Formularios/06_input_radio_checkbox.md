# inputs de seleccion tipo radio o checkbox

## tipo radio
Permite seleccionar una unica opcion de una lista de opciones relacionadas, para que esto sea posible se le debe colocar el mismo nombre con el atributo **name** a todos los radio button para que el navegador sepa que pertenecen al mismo grupo.

con el atributo **checked** que es un atributo booleano que nos permite seleccionar el elemento.

por ultimo el atributo **value** que nos permite establecer un valor al radio button para que sea pasado en el formulario.

```HTML
<label>Masculino
    <input type="radio" name="gender" value="M">
</label>
<label>Femenino
    <input type="radio" name="gender" value="F">
</label>
<label>Desconocido
    <input type="radio" name="gender" value="D" checked>
</label>
```

## tipo checkbox
Permite seleccionar varias opciones de un lista de opciones relacionadas, para saber que pertenecen a una misma categoria usamos el atributo **name** a su vez establecemos el valor de cada etiqueta con el atributo **value** y por ultimo podemos indicar selecciones por defecto con la etiqueta **checked**.

```HTML
<h2>Lenguajes que conoces</h2>
<label>HTML
    <input type="checkbox" name="languaje" value="html" checked>
</label>
<label>CSS
    <input type="checkbox" name="languaje" value="html" checked>
</label>
<label>JavaScript
    <input type="checkbox" name="languaje" value="html">
</label>
```