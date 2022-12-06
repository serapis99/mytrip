# Fuentes en servidor remoto

las fuentes de servidor remoto, son fuentes que se encuentran en un servidor y que nosotros descargamos para su uso, la mas famosa es [google fonts](https://fonts.google.com/)

Siempre que utilicemos fuentes no genericas, debemos poner fuentes genericas de fallback(respaldo)

por ultimo podemos descargar la fuente a nuestro proyecto o dar el link de acceso a la fuente desde html

html

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

css
```css
body{
    font-family:"Roboto", sans-serif;
}
```