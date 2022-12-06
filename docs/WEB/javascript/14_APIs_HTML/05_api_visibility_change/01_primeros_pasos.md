# Api visibility change

esta api nos permite validar que la pagina esta activa y es usado para detener un sonido o un video cuando el usuario esta en otra pagina, muy usada en los cursos para que el usuario este en la pagina del curso.

```javascript
const video=document.getElementById('video');
addEventListener('visibilitychange',(e)=>{
    if(document.visibilityState==='visible'){
        console.log("play")
        video.play()
    }else if(document.visibilityState==='hidden'){
        console.log("pause")
        video.pause()
    }
})
```