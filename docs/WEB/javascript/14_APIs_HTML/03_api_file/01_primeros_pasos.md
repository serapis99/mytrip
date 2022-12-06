# API File

Esta API nos sirve para leer archivos que el usuario cargue en la web. se puee cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la Api Drag&Drop

la interfaz mas utilizada para interactuar con ella es [fileReader](https://developer.mozilla.org/es/docs/Web/API/FileReader)

Ejemplo Cargar archivo texto:

```javascript
//elemento input file
const fileInput=document.getElementById('file');

//poner a la escucha cuando el elemento cambia su valor
fileInput.addEventListener('change',(e)=>{
    //toma los datos del archivo
    const file=e.target.files[0];
    
    //lee el archivo de texto
    const fileReader=new FileReader()
    fileReader.readAsText(file)

    //evento cuando termina de leer el archivo.
    fileReader.addEventListener('load',(e)=>{
        console.log("evento cuando se lee el archivo");
    })
})
```

Ejemplo con una imagen

```javascript

const fileInput=document.getElementById('file');
fileInput.addEventListener('change',(e)=>{
    const file=e.target.files[0];
    const fileReader=new FileReader()


    fileReader.readAsDataURL(file)

    fileReader.addEventListener('load',(e)=>{
        console.log("evento cuando se lee el archivo");
    })
})
```

Ejemplo con varias imagen

```javascript

const fileInput=document.getElementById('file');
fileInput.addEventListener('change',(e)=>{
    const files=e.target.files;
    const fragment=document.createDocumentFragment();

    for(const file of files){
        const fileReader=new FileReader();
        const img=document.createElement('IMG');
        fileReader.readAsDataURL(file)

        fileReader.addEventListener('load',(e)=>{
            img.setAttribute('src',e.target.result);
        })
        fragment.appendChild(img);
    }
    images.appendChild(fragment)
})
```