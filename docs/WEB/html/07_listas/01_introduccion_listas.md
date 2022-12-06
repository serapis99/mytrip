# Introduccion listas

las listas en HTML sirven para listar contenido. En funcion del tipo de contenido de nuestra lista tenemos tres tipos.

## ul
unordered list: se utilizan cuando el orden de los elementos no influyen Ejemplo: la lista de compra. 

tambien se usan para crear menus y se le dan estilos con css

```HTML
<ul>
    <li>Pan</li>
    <li>Huevos</li>
    <li>leche</li>
</ul>
```
## ol 

ordered list: se utilizan cuando el orden de los elementos es importante. Ejemplo: el top 10.

```HTML
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

## dl 

definition list: se utilizan para hacer una lista de definiciones. Ejemplo: un diccionario.

cada elemento de una lista de definicion la componen dos etiquetas.

1. dt: Definition term: el termino que vamos a definir.
2. dd: definition description: la descripcion del termino.

```HTML
<dl>
    <dt>HTML</dt>
    <dd>Hypertext Markup Langueage</dd>

    <dt>CSS</dt>
    <dd>Cascade Style Sheets</dd>
</dl>
```