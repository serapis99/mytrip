# Crear un elemento

la primera operacion que se debe conocer es la creacion de elementos para esto usamos el metodo **.createElement** de document. 

Ejemplo:

```javascript
const itemList=document.createElement('li'); //crea elemento lista.


//dar un contenido al elemento creado se puede con textContent o con innerHTML

itemList.textContent="texto";
itemList.innerHTML="<h1>texto con contenido HTML</h1>"

```

la diferencia entre textContent y innerHTML radica en cuando deseamos insertar texto puro y cuando deseamos insertar contenido con algunas etiquetas html.