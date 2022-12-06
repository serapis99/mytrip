# Atributos de los Enlaces

target: define donde se abrira el recurso solicitado. por norma general siempre que se usa rutas absolutas se pone como valor **_blank**, el valor por defecto es **_self**

```HTML
<a href="https://www.google.com/" target="_blank">click</a>
```

download: atributo booleano, sirve para descargar el recurso solicitado. **Importante** el recurso debe estar en tu mismo servidor.

```HTML
<a href="archivoDescargable"  download>click</a>
```