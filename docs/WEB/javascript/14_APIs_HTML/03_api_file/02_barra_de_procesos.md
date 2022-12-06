# barra de procesos

para poder la barra de proceso debemos usar el evento de progress 

```javascript
const fileInput=document.getElementById('file');

//es un elemento span dentro de un div
const progress=document.getElementById('progress');

fileInput.addEventListener('change',(e)=>{
    const file=e.target.files[0];
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener('progress',(e)=>{
        console.log(e.loaded) //total leido
        console.log(e.total) //tamaño total archivo

//funciona hasta un porcentaje menor al 100% ya que el 100% se ejecuta otro evento
        console.log(e.loaded*100/e.total);
    })



    fileReader.addEventListener('loadend',(e)=>{
        console.log("se cargo el archivo");
    })
})
```