# Etiquetas select

Crea una lista de opciones donde podemos seleccionar una o varias opciones.

cada opcion irá dentro de una etiqueta **option**, cada option debe tener el atributo **value**

```HTML
<select name="lenguajes">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="javascript">JavaScript</option>
</select>
```

## seleccionar mas de una opcion

para poder seleccionar varias opciones de debe incluir en el select el atributo **multiple** que es un atributo booleano

```HTML
<select name="lenguajes" multiple>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="javascript">JavaScript</option>
</select>
```

## agrupar option

si tenemos muchas opciones podemos ordenarlas por categorias a traves de la etiqueta **optgroup** con el atributo label para nombrar la categoria.

```HTML
<select name="mascotas">

    <optgroup label="4 patas">
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="Hamter">Hamster</option>
        <option value="conejo">Conejo</option>
    </optgroup>

    <optgroup label="aves">
        <option value="loro">Loro</option>
        <option value="canario">Canario</option>
    </optgroup>

    <optgroup label="otras">
        <option value="serpiente">Serpiente</option>
        <option value="Tarantula">Tarántula</option>
    </optgroup>
</select>
```

## campo pre-seleccionado

para poder seleccionar una opcion pre-seleccionada se usa el atributo **selected** y es equivalente a **checked**.

```HTML
<select name="lenguajes">
    <option value="html" >HTML</option>
    <option value="css">CSS</option>
    <option value="javascript" selected>JavaScript</option>
</select>
```