# web storage

nace por la necesidad de guardar informacion, ya que las cookies se quedo pequeño y se almacenan con contenido de clave valor, es de facil acceso por eso no se recomienda guardar informacion sensible.

por otro lado los valores son guardados como cadena por tal motivo si se guardan numeros se tiene que hacer la conversion de tipos.

1. sessionStorage: mantiene un area de almacenamiento separada para cada origen que esta disponible mientras dure la sesion de la pagina. (mientras el navegador este abierto, incluyendo recargas de la pagina y restablecimientos).
2. localStorage: hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

Ambos funcionan con clave:valor y tienen dos metodos fundamentales para agregar y ver el valor.

+ setItem() para asignar una una clave valor.
+ getItem() que recibe como parametro la clave de la que queremos obtener el valor.

Ejemplo:
```javascript
sessionStorage.setItem("key","valor");
localStorage.setItem("key","valor");

//recuperar informacion
sessionStorage.getItem("key");
```

Ejemplo con objetos:
```javascript

//objeto
const person={
    name:'doria',
    email:'dorian@gmail.com'
}

//guardar la informacion del objeto
sessionStorage.setItem("person",JSON.stringify(person));
localStorage.setItem("person",JSON.stringify(person));

//recuperar la informacion
const persona=JSON.parse(localStorage.setItem("person"));
const persona=JSON.parse(sessionStorage.setItem("person"));
```
## limpiar localStorage o sessionStorage

para limpiar localStorage o sessionStorage se usa el metodo clear, que borrara toda la lista de datos.

```javascript
sessionStorage.clear();
localStorage.clear();
```

## eliminar una clave valor de sessionStorage

para eliminar un elemento de localStorage o de sessionStorage se debe usar el metodo removeItem();

```javascript
sessionStorage.removeItem("key");
localStorage.removeItem("key");
```