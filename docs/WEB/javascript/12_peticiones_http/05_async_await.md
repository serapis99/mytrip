# async y await

nos permite hacer funciones ansincronas de forma nativa en javascript. para esto esta la palabra clave **async** y lo que hace es indicarle que una funcion nos va a devolver una promesa.

## uso de async

solo necesitamos colocar la palabra clave **async** antes de crear la funcion en esta ocasion usamos una funcion flecha pero tambien funciona con **async function()**.

```javascript
const getName=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Dorian");
        },3000);
    });
}

getName().then(console.log);
```

El problema nace cuando se intenta usar una funcion que use una funcion asincronica, ya que esta funcion intenta resolver los datos que utilizan esta funcion que no ha sido resuelta ya que se ejecutan despues de llamar la funcion asincronica.

```javascript
const getName=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Dorian");
        },3000);
    });
}

const sayHello=()=>{
    const name=getName() //llamado de la funcion asincronica
    return `hello ${name}` //uso de los datos de la funcion sin resolver 
}

console.log(sayHello());
```

## uso de await

para solucionar el problema que nos deja **async** se crea la instruccion **await**
que le indica al programa que espere a que la peticion es resuelta para ejecutar el resto de lineas, pero solo puede funcionar en funciones asincronicas por lo tanto debemos convertir la funcion que llama a funciones ansincronicas a una funcion asincronica.

```javascript
const getName=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Dorian");
        },3000);
    });
}

const sayHello=async ()=>{
    const name=await getName() //llamado de la funcion asincronica
    return `hello ${name}` //uso de los datos de la funcion sin resolver 
}

sayHello().then(console.log);
```