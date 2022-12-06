# Fetch

Es el remplazo moderno para el objeto **XMLHttpRequest()**  y nos porporciona una interfaz javascript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.

Tambien provee un metodo global **fetch()** que proporciona una forma facil y lógica de obtener recursos de forma asincrona por la red.

Esta basada en promesas, por lo cual tiene un response y un reject internos.

Response tiene varios metodos.
+ **arrayBuffer():** Archivos binarios en bruto (mp3,pdf, jpg, etc), se utiliza cuando se necesira manipular el contenido del archivo.
+ **blob()**:Archivos binarios en bruto(mp3, pdf,jpg,etc) se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente.
+ **clone()** crea un clon de un objeto de respuesta, identico en todos los sentidos , pero almacenado en una variable diferente.
+ **formData()** se utiliza para leer los objetos formData.
+ **json()** convierte los archivos json en un objeto de javascript.
+ **text()** se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8.

## comprobar que fetch se pueda usar

Ya no es necesario porque el unico que no podia interpretar el meodo fetch era internet explorer el resto de navegadores pueden usar fetch.

```javascript
if(window.fetch != undefined){
    console.log("FETCH OK");
}else{
    console.log('FETCH NOT WORKS.!');
} 
```

## Metodo get

normalmente fetch realiza peticiones tipo get por eso no se le tiene que especificar este metodo al momento de usarlo. por otro lado se debe conocer que va a devolver la peticion que realicemos ya que depende de los datos usaremos un metodo de fetch en este ejemplo la pagina nos devuelve un objeto tipo json por lo tanto usamos el metodo **.json()** para ver los datos.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.ok ? Promise.resolve(res): Promise.reject(res))
    .then(res=>res.json())
    .then(res=>console.log(res))
```

## Metodo Post.

para poder hacer peticiones de otros metodos fetch accepta un segundo parametro donde pasaremos la informacion necesaria para usar el metodo este objeto se denomina init.

1. [documentacion uso de fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
2. [documentacion metodo fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
3. [documentacion headers](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)

### Estructura

En esta estructura pasamos datos basicos hay mas valores que podemos configurar en el objeto podemos ver metodo fetch para ver las configuraciones que se pueden hacer.

```javascript
fetch(url,{
    method:'POST',
    body: "los datos que enviamos. si es un objeto hay que convertirlo con JSON.stringify(datos).",
    headers:{
        "cabeceras de informacion sobre lo que estamos enviando ver documentacion headers"
    }
})
```

Ejemplo:

```javascript

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }})
  .then((response) => response.json())
  .then((json) => console.log(json));

```

## archivos e imagenes.


```javascript

fetch('imagen.jpg')
.then(response => response.blob())
.then(res=>{
document.getElementById("imagen").src=URL.createObjectURL(res);
});

```