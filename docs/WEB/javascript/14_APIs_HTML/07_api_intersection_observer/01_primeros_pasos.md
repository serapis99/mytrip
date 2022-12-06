# intersection observer

lo que nos permite hacer esta api es saber cuando es visible un elemento o cuando no, se suele usar para carga perezosa que consiste en no cargar todo de una vez sino cuando el usuario lo solicite. la forma mas conocida son las historias de facebook o instagram

```javascript
//se cargan los elementos a observar
const boxes=document.querySelectorAll(".all")


//se esta creando un callback para ver si intersecta un elemento la intersesion sucede cuando esta en nuestro rango de vista o esta apunto de aparecer
const callback=(entries)=>{
    console.log(entries)
    entries.foreach(entry=>{
        if(entry.isIntersecting){
            console.log(entry.target.id)
        }
    })
}

//se crea el objeto IntersectionObserver
const observer=new IntersectionObserver(callback)

//se pone a la escucha cada elemento por el objeto IntersectionObserver
boxes.foreach(elem=>observer.observe(elem))
```

el objeto IntersectionObserver tiene un segundo parametro que nos permite modificar las opciones de interseccion del objeto las cuales son:

1. root: es el padre del objeto normalmente el viwport
2. rootMargin: funciona igual que el margin en css. 
3. threshold: recibe valores del 0 al 1 que simbolizan el porcentaje de lo que se ve del elemento.

ejemplo:

```javascript
const=options={
    threshold:0.5
}
const observer=new IntersectionObserver(callback,options)
```

## carga lenta o lazy load

se puede crear colocando a la escucha el ultimo elemento cargado y hacer una nueva peticion para que cargue mas elementos. 

ejemplo:

```javascript

const setObserver=()=>{
    const options={
        threshold:0.5
    }

    const observer=new IntersectionObserver(funcion,options);

    observer.observe(elementoPadre.lastElementChild)
}
```