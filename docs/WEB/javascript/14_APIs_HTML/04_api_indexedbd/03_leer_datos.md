# leer los datos de la base 

Para poder leer los datos se tiene que hacer en varios pasos.
1. crear la transaccion.
2. abrir la base
3. usar el cursor para recorrer los datos.
4. comprobar que se leyeron correctamente

//recorrer toda la base

```javascript

//************************ */
const readData=()=>{
    const transaction=db.transaction(['nombre_base'],'readonly');

    const objectStore=transaction.objectStore('nombre_base');

    const request=objectStore.openCursor();

    resquest.onsuccess=(e)=>{
        const cursor=e.target.result
        if(cursor){
            console.log(cursor);
            cursor.continue()
        }else{
            console.log("No more data");
        }
    }
}
//************************** */

readData();
```
Ejemplo para obtener un solo dato con la key:

```javascript
const getData=(key)=>{
    const transaction=db.transaction(['nombre_base'],'readwrite');
    const objectStore=transaction.objectStore('nombre_base')
    const request =objectStore.get(key);

    request.onsuccess=()=>{
        console.log(request.result);//objeto guardado
    }
}
```