# Timers

## setTimeout

Esta funcion nos permite ejecutar una funcion cuando pase una cantidad de tiempo entonces el primer parametro es una funcion y el segundo es el tiempo que se tiene que esperar para ejecutar ese codigo se da en milisegundos.

```javascript
function miFuncion(){
    console.log("me estoy ejecutando 1")
}

setTimeout(miFuncion, 3000);//se ejecuta en 3 segundos

setTimeout(()=>"me estoy ejecutando 2",1000)

setTimeout(()=>"me estoy ejecutando 3",2000)
```

**Nota: aqui se puede ver en accion la ejecucion asincronica ya que se activa un hilo de ejecucion cada vez que se lee una funcion de tipo callback entonces en los computadores actuales no se ve mucha diferencia en tiempos de lectura de estos 3 setTimeout por lo tanto el primero que termina es el de 1 segundo, el segundo es el de dos segundos y el ultimo es el de 3 segundos a pesar que este fue el primero en leerse**

## setInterval

Esta funcion nos permite ejecutar una funcion cada cierto tiempo en otras palabras ejecuta el mismo codigo cada cierto tiempo.

```javascript
let reloj=()=>{
    let fecha=new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}: ${fecha.Seconds}`)
}

setInterval(reloj,1000);
```


## detener un timers 

Se puede detener la ejecucion de un setInterval o un setTimeout teniendo la referencia de este y usando ya sea clearTimeout() o clearInterval()

```javascript
let reloj=()=>{
    let fecha=new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}: ${fecha.Seconds}`)
}

const inter=setInterval(reloj,1000);

clearInterval(inter)
```