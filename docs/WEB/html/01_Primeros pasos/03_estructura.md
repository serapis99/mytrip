# Estructura basica html

lo primero que hay que saber es que el lenguaje HTML esta compuesto por etiquetas que son palabras claves contenidas por un menor que `<` y un mayor que `>`. la mayoria de etiquetas tiene su etiqueta de cierre que es la misma pero con iniciando con un menor que y un backslash `<\`, se verian de la siguiente forma:

``` html
<etiqueta>contenido de la etiqueta</etiqueta>
```
aunque hay casos especiales donde la etiqueta que se abre no tiene etiqueta de cierre anteriormente se colocaba un slash y el simbplo mayor que `/>` pero con la especificacion HTML5 ya no es valido.

``` html title="Antigua forma"
Texto <br/>
```

``` html title="Nueva forma"
Texto <br>
```

## Atributos 

Dentro de las etiquetas pueden haber atributos que son palabra claves que permiten tener un comportamiento especifico segun el valor que especifiquemos en ese atributo.

Ejemplo:

``` html
<etiqueta atributo="valor">contenido de la etiqueta</etiqueta>
```
## Comentarios

Cuando se desarrolla es necesario crear comentarios para guiarse cuando se vuelve a este codigo despues y ver como funciona el codigo que se realiza en el lenguaje HTML se usa un menor que, el simbolo que abre la exclamacion seguido de dos guiones `<!--` para abrir el comentario y se cierra con dos guiones y el simbolo mayor que `-->`.

Ejemplo:

``` html
<!--comentario de lo que se esta escribiendo-->
```

## Estructura base HTML 5

En html5 tenemos la siguiente estructura base con la que se debe iniciar cualquier pagina web.

+ Etiqueta que indica que el archivo es un archivo HTML5
``` html
<!DOCTYPE html> 
```
+ Etiqueta base html con el atributo lang que especifica el lenguaje español colombia `es-CO` aunque depende en que idioma se escribe el contenido de la pagina.
``` html 
<html lang="es-CO">
```
+ Etiqueta head contiene todos los metadatos de la pagina se debe abrir y cerrar antes de la etiqueta body.

Ejemplo con algunas etiquetas `meta`
``` html 
<head>
    <!--etiqueta meta que contiene el tipo de caracteres a usar en la pagina-->
    <meta charset="UTF-8">
    <!--le indica al navegador que la pagina es conpatible con edge-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--le indica al navegador que escale el tamaño de la pantalla al 100%-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--etiqueta title contiene el titulo de la pagina que se muestra en la pestaña de la pagina-->
    <title>Document</title>
</head>
```

Asi se deberia ver la forma base de una pagina web.

``` html
<!DOCTYPE html> 
<html lang="es-CO"> 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

:::note Nota
Normalmente la primera pagina web de un desarrollo web se llama **index.html** que son leidas por defecto en los servidores.
:::
