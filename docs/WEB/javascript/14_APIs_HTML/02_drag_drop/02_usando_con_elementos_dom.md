# Uso de drag  & drop con el DOM

lo primero que debemos tener presente es que las etiquetas que vamos a tratar como objetos que se pueden mover deben tener la propiedad **draggable** y un id para localizarlo, a su vez poder tener la referencia del padre de este para poder eliminarlo de este cuando se mueva y tener la referencia del contenedor que lo recibe para poder agregarlo. 

```html
<div id="contenedor_primario">
    <div id="id_div" draggable="true">objeto movible</div>
</div>

<div id="contenedor_secundario">

</div>
```

le agregamos al contenedor_primario donde se encontraran los objetos a mover el evento **dragstart**

```javascript
contenedorPrimario.addEventListener('dragstart',(e)=>{
    e.target;//sera el elemento que se esta moviendo
})
```

para compartir un valor del objeto entre los diferentes funciones en el navegador mozilla debemos usar **dataTransfer** que posee dos metodos.

1. setData: establece la informacion que queremos compartir.
2. getData: lee la informacion que estamos compartiendo.

```javascript
contenedorPrimario.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text/pain',e.target.id);
})
```

para dar el efecto que se ha tomado el objeto y esta siendo usado se le pueden cambiar los estilos en el evento **drag** y en **dragend**.

```javascript
//drag
contenedorPrimario.addEventListener('drag',(e)=>{
    e.target.classList.add('estilo')
})

//dragend
contenedorPrimario.addEventListener('dragend',(e)=>{
    e.target.classList.remove('estilo')
})

```

algo a tener encuenta es que para usar el evento **drop** debe estar a la escucha el evento **dragover** de lo contrario no funcionara el **drop**


```javascript
//dragover para que reconosca la zona
contenedorSecundario.addEventListener('dragover',(e)=>{
    e.preventDefault()
})

//drop
contenedorSecundario.addEventListener('drop',(e)=>{
    e.preventDefault()
    const elem=documento.getElementById(e.dataTransfer.getData('text'));
    elem.classList.remove('estilo');
    contenedorSecundario.appendChild(contenedorPrimario.removeChild(elem));
})

```