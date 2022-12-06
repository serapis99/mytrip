# actualizar datos

para poder actualizar datos debemos lograr conseguir la key usada para crear estos datos, la forma mas comun es guardar esta key en el elemento DOM, y despues leer esa propiedad para obtener la key y poder obtener el objeto por ultimo actualizamos las propiedades del objeto y lo pasamos por el metodo **put**.

```javascript
const updateData=(data)=>{
    const transaction=db.transaction(['nombre_base'],'readwrite');
    const objectStore=transaction.objectStore('nombre_base')
    //si existe el objeto lo actualiza y si no existe lo crea.
    const request =objectStore.put(data);
}
```