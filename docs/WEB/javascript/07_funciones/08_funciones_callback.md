# Funciones callback

las funciones callback son funciones que nos permiten pasar como parametro otra funcion, para que sea llamada dentro de esta en cualquier parte de su codigo.

Este tipo de funciones se usan mas para hacer codigo **asincrono** ya que se crean hilos de ejecucion diferente con este tipo de funciones.

Ejemplo:

```javascript

//funcion normal
function imprimir(mensaje){
    console.log(mensaje);
}

//funcion tipo callback

function sumar(op1,op2,funcionCallBack) {
    let res=op1+op2;
    funcionCallBack(`Resultado: ${res}`);
}

//llamar una funcion callback

sumar(5,3,imprimir)

```

