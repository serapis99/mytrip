# API geolocation

nos permite geolocalizar el equipo que esta ingresando al navegador.

Ejemplo:

```javascript
const button=document.getElementById('boton');

button.addEventListener('click',()=>{
    const geolocation=navigator.geolocation

    geolocation.getCurrentPosition(getPosition,error,options)
})


const options={
    //nos permite usar todas las opciones que tenga el usuario de geolocalizacion
    enableHightAccuracy:true,
    //tiempo maximo en que se responde la peticion
    timeout:5000,
    //tiempo maximo que almacena la informacion en cache
    maximunAge:0
}

const getPosition(position)=>{
    console.log(position)
}

const error=(error)=>console.log(error)
```