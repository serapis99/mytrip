# obtener elementos

Para poder seleccionar elementos del **DOM** javascript cuenta con el objeto **document** que tiene varias formas de seleccionar un elemento, la mas usada en javascript es el **id** por eso la frase. 


>Se debe usar los **id** para javascript y las **class** para css.

Actualmente para seleccionar nodos en javascript se usa los metodos que hacen referencia a los id del elemento o se usa querys que usa css para dar estilos a los elementos para lograr seleccionar el elemento.

## Por ID

Acceder a un elemento a traves de su id

```HTML
<div id="title"></div>
```

```javascript
//al elemento que tenga como atributo id el valor title
const title=document.getElementById('title');

title.textContent="Hola mundo"; //cambia el valor de su contenido
```

## Por css

se puede seleccionar un elemento o varios usando los mismos valores que se usan para dar estilos a los elementos en css. para esto tenemos dos selectores el **.querySelector** y el **querySelectorAll** lo que los diferencia es que el primero solo trae el primer elemento que encuentra mientras el segundo trae todos los elementos.

**Nota:los seudoelementos no pueden accederse de esta forma**

```HTML
<p class="paragraph">esto es un texto</p>
<p class="paragraph">esto es otro texto</p>
```

```javascript

//primer elemento que corresponda al selector
document.querySelector('.paragraph')

//todos los elementos que correspondan al selector, (devuelve nodeList)
document.querySelectorAll('')
```