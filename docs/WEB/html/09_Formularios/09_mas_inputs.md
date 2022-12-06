# mas inputs

## fieldset
se utiliza para agrupar elementos dentro de un formulario, y se puede usar la etiqueta **legend** para darle una etiqueta a este contenido.

```HTML
<fieldset>
    <legend>Datos personales</legend>

    <label for="name">Nombre</label>
    <input type="text" id="name">

    <label for="lastname">Apellido</label>
    <input type="text" id="lastname">
</fieldset>
```

## file 
este input se utiliza para cargar archivos y enviarlos desde un formulario.

```HTML
<input type="file">
```

## meter 
representa un valor dentro de un rango conocido, se puede usar como metricas y tiene varios atributos.

+ min: valor minimo.
+ max: valor maximo.
+ value: valor de meter
+ low: valor que se considera bajo (amarillo)
+ high:valor que se concidera alto (amarrillo)
+ optimum: valor que se considera el optimo (verde) 

```HTML
<label for="fuel">Combustible</label>
<meter id="fuel" min="0" max="100" value="60" low="30" high="80" optimum="50"></meter>
```

## progress
representa el progreso de una tarea. y tiene el atributo max y value

```HTML
<label for="task">tarea 1</label>
<progress id="task" max="100" value="50"></progress>
```