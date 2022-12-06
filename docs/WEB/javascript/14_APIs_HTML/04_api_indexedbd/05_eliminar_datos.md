# eliminar datos

funciona igual que cuando obtenemos el dato de un solo elemento solo que de vez de usar el metodo **get** usamos **delete**.

```javascript
const deleteData=(key)=>{
    const transaction=db.transaction(['nombre_base'],'readwrite');
    const objectStore=transaction.objectStore('nombre_base')
    const request =objectStore.delete(key);

    request.onsuccess=()=>{
        console.log(request.result);//objeto guardado
    }
}
```