# rutas absolutas y rutas relativas

## rutas absolutas
tiene un protocolo, http o https y son unicas en la red se suelen utilizar para rutas externas.

```HTML
<a href="https://www.google.com">click</a>
```

## rutas relativas
1. Pueden ser relativas al punto donde nos encontramos o relativas a la raiz del proyecto
2. no usan protocolo.
3. si el recurso se encuentra al mismo nivel (en la misma carpeta) podemos unicamente el nombre del archivo.
4. si necesitamos salir de la carpeta actual **../** y se pone uno por cada nivel (carpeta) de la que queremos salir.

```HTML
<!-- rutas relativa donde nos encontramos-->
<a href="pagina.extencion">click</a>
<a href="../pagina.extencion">click</a>

<!-- ruta relativa desde raiz-->
<a href="/">click</a>
<a href="/carpeta/pagina.extencion">click</a>
```

**Nota**: como recomendacion se suguiere que siempre se usen rutas relativas desde la raiz. 

