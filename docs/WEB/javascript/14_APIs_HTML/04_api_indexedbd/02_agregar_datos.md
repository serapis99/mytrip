# agregar datos

Para poder agregar datos se tiene que hacer en 3 pasos.
1. crear la transaccion.
2. abrir la base
3. ingresar los datos

```javascript

//************************ */
const addData=(data)=>{
    //crear la transaccion de datos
    const transaction=db.transaction(['nombre_base'],'readwrite');

    //abrir almacen de datos
    const objectStore=transaction.objectStore('nombre_base');

    //añadir los datos
    const request=objectStore.add(data);
}
//************************** */
const datos={
    propiedad1:"algo",
    propiedad2:"mas cosas"
}

addData(datos);
```

se nos puede presentar el problema de que al intentar agregar los datos nos salga un error de que no se conoce la key, eso es debido a que cuando creamos la base no le dimos como gestionar las claves, las cuales pueden ser.

## autoIncrement
las claves se van incrementando a medida que se agregan objetos, para poder hacer esto se tiene que enviar un objeto a createObjectStore.

```javascript
request.onupgradeneeded=()=>{
        db=request.result;
        const objectStore=db.createObjectStore('nombre_base',{
            autoIncrement:true;
        });
    }
```

## valor clave del objeto.

la siguiente forma es decirle que en el objeto que va a guardar tome el valor de una propiedad, para esto. 

```javascript
request.onupgradeneeded=()=>{
        db=request.result;
        const objectStore=db.createObjectStore('nombre_base',{
            keyPath:'nombre_propiedad';
        });
    }
```