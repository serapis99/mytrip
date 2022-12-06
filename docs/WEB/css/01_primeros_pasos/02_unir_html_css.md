# Unir Html CSS

tenemos dos formas de que interactuen el lenguaje CSS y el Lenguaje HTML el primero es escribiendo el codigo directamente en el mismo documento donde esta el html y el otro es usar una etiqueta link para indicarle la ruta donde se encuentra nuestros estilos.

## En el mismo documento.

```Html
<style>
    body{
        background-color:steelblue;
    }
</style>
```

## En documentos aparte

```Html
<link rel="stylesheet" href="css/styles.css">
```
## uso de @import 

No se recomienda que se agrege codigo css usando la clausula import debido a que lo hace de manera asincronica, y eso genera una mala esperiencia de usuario, y al tener varias importaciones no se cargaria una hasta que se termine de cargar la anterior.

```Html
<style>
    @import url(css/styles.css);
</styl>
```
