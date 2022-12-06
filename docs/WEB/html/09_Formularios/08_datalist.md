# datalist

este tipo de etiqueta nos permite crear un select con la posibilidad de hacer busquedas o filtros de datos escribiendo en el input, para esto se debe crear un input de tipo **list** y apuntar el atributo **list** al id del datalist.

```HTML
<input type="list" list="pets">
<datalist id="pets">
    <option value="perro">Perro</option>
    <option value="gato">Gato</option>
    <option value="Hamter">Hamster</option>
    <option value="conejo">Conejo</option>
    <option value="loro">Loro</option>
    <option value="canario">Canario</option>
    <option value="serpiente">Serpiente</option>
    <option value="Tarantula">Tarántula</option>
</datalist>
```