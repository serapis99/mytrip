# Fragmentos de codigo

Cuando se quiere insertar una cierta cantidad de elementos se sugiere que se haga un **fragment**, debido al hecho de que cada vez que se hace una insercion en el DOM este se tiene que redibujar, con el **fragment** se hace un DOM virtual donde se creara toda la estructura que se quiere insertar cuando esta completo se realiza solo una insercion en el DOM. 

```javascript
const padre=document.getElementById('div');
const fragment=document.createDocumentFragment();

const days=['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];

for (const day of days){
    const elemento=document.createElement('li');
    elemento.textContent=day;
    fragment.appendChild(elemento);
}

padre.appendChild(fragment);
```