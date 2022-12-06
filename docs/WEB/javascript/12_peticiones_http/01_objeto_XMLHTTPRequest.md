# Objeto XMLHTTPRequest o AJAX

es una peticion asincronica lo que nos permite cargar la pagina y utilizarla mientras se cargan los datos que se estan solicitando por AJAX debido a las actualizaciones del lenguaje existen dos formas de hacer peticiones AJAX.

1. [forma antigua](#forma-antigua-no-recomendada)
2. [forma nueva](#nueva-forma-recomendada)
3. [variables por get](#pasar-valores-en-el-metodo-get)
4. [variables por post](#pasar-valores-en-el-metodo-post)

## Forma Antigua (NO RECOMENDADA)
```javascript

const button=document.getElementById('button');
button.addEventListener('click',()=>{
    
    //creamos variable para almacenar objeto ajax
    let xhr;

    //se pregunta si existe el objeto XMLHttpRequest si no se usa el objeto ActiveXObject('Microsoft.XMLHTTP') para crear el objeto ajax
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject('Microsoft.XMLHTTP');
    }

    //se abre la conexion
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');

    // se indica que hacer cuando la peticion fue exitosa
    xhr.onreadystatechange = function() {
        if(this.readyState==4 && this.status==200){
            console.log(JSON.parse(this.responseText));
        }
    }

    //se envia la peticion
    xhr.send()

});
```

## Nueva Forma (RECOMENDADA)

```javascript

const button=document.getElementById('button');

button.addEventListener('click',()=>{
    
    //creamos variable para almacenar objeto ajax
    let xhr;

    //se pregunta si existe el objeto XMLHttpRequest si no se usa el objeto ActiveXObject('Microsoft.XMLHTTP') para crear el objeto ajax

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject('Microsoft.XMLHTTP');
    }

    //se abre la conexion
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');

    //se indica que queremos hacer con la respuesta
    xhr.addEventListener('load',(data)=>{
        //console.log(data.target.response); // nos devuelve la respuesta en string
        console.log(JSON.parse(data.target.response));
    })

    //se envia la peticion
    xhr.send()

});
```

## Pasar valores en el metodo GET

cuando tratamos con el metodo get podemos pasar los datos directamente en la url al momento de abrir la conexion.

eso se hace creando un signo de pregunta `alt`+`63` que le indica a la peticion que hasta hay va la direccion y que lo que siguen son parametros los parametros se separan con el simbolo ampersand `alt`+`38` y cada dato que se pasa tiene clave valor.

```javascript
xhr.open('GET','https://jsonplaceholder.typicode.com/users?id=1');
```

## Pasar valores en el metodo POST

Para lograr pasar datos usando el metodo POST debemos usar el objeto [**FormData**](https://developer.mozilla.org/es/docs/Web/API/FormData) que copila un conjunto de datos clave/valor. podemos crearlo nosotros mismos o pasarle los datos de un formulario directamente cuando se construye el objeto.

### crear objeto FormData propio

```javascript
//se crea el objeto FormData
let formData= new FormData();

//se agrega los datos que queremos
formData.append("username","ruben");
formData.append("accountnum","123456");

//ejemplo minimo de objeto ajax recordar usar la nueva forma
let request=new XMLHttpRequest();
request.open("POST","url");

//falta la parte de como se trataran los datos devueltos


//envia la peticion con los datos como parametro
request.send(formData);

```

### crear objeto FormData con formularios

```javascript

//se obtiene el objeto formulario
let form=document.from("formulario");

const formData=new FormData(form);

//se crea el objeto ajax Nota: Usar la nueva forma. 
let request=new XMLHttpRequest();

request.open("POST","URL");

//se hace la peticion con los datos del formulario
request.send(formData);
```