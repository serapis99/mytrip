# Formas de colocar javascript en html

Para poder ejecutar codigo de javascript se necesita un navegador web o tener instalado node.js, tambien se puede crear un archivo html y anexar nuestro codigo en este para poder validarlo. 

Se recomienda poner el codigo javascript antes de finalizar el body pero despues de todas las etiquetas ya que en esta parte ya esta cargada toda la pagina

## codigo en la misma pagina

en una archivo de texto plano con extencion **.html** se puede crear codigo javascript dentro de la etiqueta **script** 

```html
<!DOCTYPE html>
<html lang="es-CO">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>titulo de la pagina</title>
</head>

<body>
    <h1>titulo del articulo</h1>


    <!--javascript-->

    <script>
        console.log("hola mundo!!!")
    </script>
</body>


</html>
```

## codigo en un documento distinto

para separar el codigo de la parte visual de las aplicaciones web se usan archivos con extencion **.js** y estos son cargados por las paginas web html colocando en la etiqueta script la propiedad **src** indicandole la ruta donde se encuentra el archivo con el codigo javascript.

```html
<!DOCTYPE html>
<html lang="es-CO">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>titulo de la pagina</title>
</head>

<body>
    <h1>titulo del articulo</h1>


    <!--javascript-->

    <script src="ruta_del_codigo/archivo.js"></script>
</body>


</html>
```