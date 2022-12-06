# indexedDB

Es una manera de almacenar datos de manera persistente en el navegador.
Almacena pares llave-valor. los valores pueden ser objetos con estructuras complejas, y las llaves pueden ser propiedades de esos objetos. la API de IndexedDB es mayormente asincrona.

IndexedDB usa eventos DOM para notificar cuando los resultados estan disponibles.
IndexedDB es orientada a objetos.

## pasos para crear una base de IndexedDB

+ crear la base de datos a traves del objeto indexadDB y el metodo **open()**.
+ comprobar si la base de datos existe o tiene que ser creada a través del metodo **onupgradeneeded**.
+ crear almacen de objetos con el metodo **createObjetStore**
+ escuchar los eventos de exito y de error con los metodos **onsucces()** y **onerror()**

```javascript
const indexedDB=window.indexedDB;

if(indexedDB){
    let db;
    const request=indexedDB.open('nombre_almacen_datos',1);

//evento que abre la base de datos
    request.onsuccess=()=>{
        db=request.result;
    }

//este metodo es el primero en ejecutarse, comprobando que exite la base de datos, si no existe la crea y ejecuta la funcion que se le pasa, si existe no ejecuta la funcion que se le pasa.
    request.onupgradeneeded=()=>{
        db=request.result;

        //crea un almacen de datos si no existe.

        const objectStore=db.createObjectStore('nombre_base',{
            //permite gestionar las claves y que se autoincrementen
            autoIncrement:true;
        });
    }

    //se ejecuta si hay un error
    request.onerror=(error)=>{
        console.log(error);
    }
}
```

todas las funciones de crear, eliminar, borrar datos se deben hacer en **onupgradeneeded**. ya que el metodo **onsuccess** 