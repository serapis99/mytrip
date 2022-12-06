# Etiquetas semanticas Parte 2

## section

es un contenedor generico que agrupa contenido que esta relacionado. cuando creamos bloques cuyo contenido es parte de un bloque total usaremos section.

los section pueden tener un encabezado, a demas puede admitir las etiquetas **header** y **footer**

```HTML
<section></section>
```

# article
Es un contenedor que representa contenido independiente, es decir, podemos leer ese fragmento en cualquier otro sitio y tendria sentido por si mismo.

los articles debe tener un encabezado para ser sintacticamente correcto, a demas puede admitir las etiquetas **header** y **footer**
```HTML
<article></article>
```
# aside
se utiliza para representar contenido relacionado pero que no forma parte del contenido principal.

aqui puede ir paginas relacionadas pero que no hacen parte del tema del documento. ejemplo publicida. 
```HTML
<aside></aside>
```
# anidamiento

## section contiene article

un section puede contener articles, por ejemplo, si tenemos varios articulos que hablen sobre etiquetas HTML, debe ir dentro de un section, ya que es contenido relacionado entre si, y los article serian contenido independiente porque podriamos leer uno sin haber leido el resto, y seguiria teniendo sentido.

Ejemplo:

```HTML
<body>
    <header>
        <h1>NOTICIAS NACIONALES</h1>
    </header>

    <main>
        <section>
            <h2>Noticias del dia</h2>
            <article>
                <h3>Noticia 1</h3>
                <p>detalles de la noticia</p>
            </article>
            <article>
                <h3>Noticia 2</h3>
                <p>detalles de la noticia</p>
            </article>
            <article>
                <h3>Noticia 3</h3>
                <p>detalles de la noticia</p>
            </article>
        </section>
    </main>

    <footer>2022</footer>
</body>
```
## article contiene section

tambien existe el caso en el que un article contenga varias secciones, el articulo independiente podria ser navegadores y este contener secciones como navegadores mas utilizados. 

```HTML
<body>
    <header>
        <h1>NOTICIAS NACIONALES</h1>
    </header>
    <article>
        <h2>Navegadores mas utilizados en 2020</h2>
        <section>
            <header><h3>Chrome</h3></header>
            <p>descripcion del navegador</p>
            <footer>creador por google</footer>
        </section>
        <section>
            <header><h3>firefox</h3></header>
            <p>descripcion del navegador</p>
            <footer>creador por Chris Hofmann</footer>
        </section>
    </article>
    <footer>2020</footer>
</body>
```