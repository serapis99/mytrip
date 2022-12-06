# Insertar Elementos

Una vez que creamos el elemento y le hemos dado un contenido podemos insertar el elemento para esto debemos acceder al elemento padre que contendra el elemento que hemos creado y con algun metodo de insercion de elementos insertaremos el elemento en la posicion que queramos.


## Insercion Basica
|metodo| descripcion|
|---|---|
|.appendChild(elemento)| inserta el elemento en la ultima posicion|
|.insertBefore(newElemento,referenceElement)| insertar un elemento antes del elemento de referencia|

Ejemplo:

```javascript
const padre=document.getElementById('div');
const elemento=document.createElement('h1');
elemento.textContent="Hola mundo"
padre.appendChild(elemento);
```

## Insercion por adyacencia 

los metodos por adyacencia se basan en posiciones de las cuales tenemos las siguientes:

+ beforebegin: antes de que empiece (hermano anterior).
+ afterbegin: despues de que empiece (primer hijo)
+ beforeend: despues de que acabe (ultimo hijo)
+ afterend: despues de que acabe (hermano siguiente)


|metodo| descripcion|
|---|---|
|insertAdjacentElement(position, elemento)| inserta un elemento|
|insertAdjacentHTML(position, HTML)| inserta un texto con etiquetas HTML|
|insertAdjacentText(position, text)| inserta un texto plano sin etiquetas|

Ejemplo:

```javascript
const padre=document.getElementById('div');
const elemento=document.createElement('h1');
elemento.textContent="Hola mundo"
padre.insertAdjacentElement('beforebegin',elemento);
```
## Insercion Manipulation convenience methods

con las ultimas actualizaciones del lenguaje se crean nuevas formas de operar elementos las cuales nos permiten insertar de una manera mas facil.

|metodo| descripcion|
|---|---|
|.before()| antes de que empiece (hermano anterior)|
|.prepend()| despues de que empiece (primer hijo)|
|append()| antes de que acabe (ultimo hijo)|
|after()| despues de que acabe (hermano siguiente)|