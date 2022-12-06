# Drag y Drop 

Existe dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo.

para controlar estas acciones tenemos varios eventos de cada una de las partes.

1. objeto a arrastrar:
    + dragstart: Se dispara al comenzar a arrastrar.
    + drag: se despara mientras arrastramos.
    + dragend: se dispara cuando soltamos el objeto.
2. zona de destino:
   + dragenter: se dispara cuando el objeto entra en la zona destino.
   + dragover: se dispara cuando el objeto se mueve sobre la zona destino.
   + drop: se dispara cuando soltamos el objeto en la zona de destino.
   + dragleave: se dispara cuando el objeto sale de la zona de destino.

Ejemplo eventos objeto:

```javascript
const smile=document.getElementById('smile');

//dragstart
smile.addEventListener('dragstart',()=>{
    console.log("Se inicio a mover el objeto");
})

//drag
smile.addEventListener('drag',()=>{
    console.log("se esta moviendo el objeto");
});

//dragend
smile.addEventListener('dragend',()=>{
    console.log("se solto el objeto");
});
```

Ejemplo de la zona destino:

```javascript
const dropZone=document.getElementById('drop-zone');

//dragenter
dropZone.addEventListener('dragenter',()=>{
    console.log("acaba de ingresar a la zona");
})

//dragover
dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault();
    console.log("el objeto se esta moviendo en la zona");
})

//drop
dropZone.addEventListener('drop',(e)=>{
//el evento drop solo funciona si existe un objeto y esta a la escucha un dragover
    e.preventDefault();
    console.log("el objeto se solto en la zona");
})

//dragleave
dropZone.addEventListener('dragleave',()=>{
    console.log("el objeto salio de la zona");
})
```