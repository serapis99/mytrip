# Formularios

La estructura básica de un formulario se compone de 4 elementos.

+ **form**: es la etiqueta que engloba nuestro formulario.
+ **label**: Sirve para escribir el nombre del campo a rellenar, debe tener el atributo **for** al cual se le indica un id que lo que hara sera emparejar el label con su input correspondiente.
+ **input**: Sirve para crear un campo que permitirá al usuario interactuar.
+ **button**: Crea un botón que permitira enviar el formulario.


```HTML
<form>
    <label for="name"></label>
    <input id="name" >
    <button></button>
</form>
```