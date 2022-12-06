# eventos

Es cualquier cosa que sucede en el documento. No necesariamente interacciones con el usuario.

Ejemplos
+ El contenido se ha leido.
+ El contenido se ha cargado.
+ El usuario mueve el raton.
+ el usuario pulsa una tecla.
+ la ventana se ha cerrado.

Se suguiere que cuando deseemos iniciar una accion cuando ocurra un evento se use el metodo **addEventListener('event',callback);

```javascript

const button = document.getElementById('button')
button.addEventListener('click',()=>{
    console.log("CLICK");
});
```

## eventos de raton

|evento|descripcion|
|---|---|
|click| cuando pulsamos el boton izquierdo del raton|
|dbclick| cuando pulsamos dos veces seguidas el boton izquierdo del raton|
|mouseenter| cuando entramos en la zona que tiene el evento|
|mouseleave|cuando salimos de la zona que tiene el evento|
|mousedown|cuando pulsamos y no soltamos el boton izquierdo del raton|
|mouseup| cuando soltamos el boton izquierdo del raton|
|mousemove| cuando movemos el raton|


## eventos de teclado

los eventos de teclado suceden cuando se tiene una accion con el teclado aunque se tiene que tener presente el elemento que puede capturar estos eventos. 

|evento|descripcion|
|---|---|
|keydown| cuando pulsamos una tecla|
|keyup| cuando soltamos una tecla|
|keypress| cuando pulsamos una tecla y no la soltamos|

## objeto evento
cuando sucede un evento, nos devuelve un objeto tipo evento que nos puede dar mucha informacion del evento y se puede capturar colocandolo como parametro en la funcion callback

ejemplo:

```javascript
const button = document.getElementById('button')
button.addEventListener('click',(e)=>{
    console.log(e);//todo el objeto evento
    console.log(e.target);//informacion del evento.
});
```
## evitar comportamiento por defecto

hay comportamientos por defecto que el navegador tiene con ciertos eventos el mas comun es el evento **submit** de un formulario que actualiza una pagina y se evita de la siguiente forma.

```javascript
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
});
```

## Delegacion de eventos

De esta forma podemos hacer que los elementos hijos tengan el mismo comportamiento agregando un nuevo parametro a addEventListener, indicando que queremos que inicie la captura del evento en elementos que esten por debajo del elemento que se le asigna el evento.

```javascript
const forma=document.getElementById('forma');
forma.addEventListener('focus',(evento)=>{
    evento.target.style.background='yellow'
},true);
```
## Notas

1. cuando se tiene el mismo evento para varios elementos que pueden compartir diseño y valores se recomienda que se coloque el evento a la escucha al padre y que se localice el elemento que produjo el evento desde este, esto conviene mucho al rendimiento del navegador como a la programcion ya que si tenemos 100 elementos no es optimo poner a la escucha a estos 100 elementos sino agruparlos en un contenedor y colocar este a la escucha.
2. los eventos pueden ser escuchados o ejecutados, para ejecutarlos debemos capturar el elemento con la nomenclatura del punto y el evento que queremos que se ejecute con los parentesis de la funcion.

## Documentacion

Existen muchos eventos mozilla nos brinda la siguiente [documentacion](https://developer.mozilla.org/es/docs/Web/Events).
