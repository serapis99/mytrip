# reemplazar un elemento hijo por otro

Se puede cambiar un elemento hijo por otro usando el metodo **replaceChild(newChild, oldChild)**

Ejemplo:

```javascript
const padre=document.getElementById('div');
const elemento=document.createElement('h1');
elemento.textContent="Hola mundo"
padre.replaceChild(elemento,padre.children[0]);
```
---
## reemplazar Manipulation convenience methods

para poder usar el metodo de reemplazar convenience se debe seleccionar el elemento a remplazar y luego indicarle por cual va a ser remplazado.

|metodo| descripcion|
|---|---|
|.replaceWith(elemento)| cambia un elemento por otro|

Ejemplo:

```javascript
const padre=document.getElementById('div');
const elemento=document.createElement('h1');
elemento.textContent="Hola mundo"
padre.children[0].replaceWith(elemento);
```