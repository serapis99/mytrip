# accesibilidad

para crear una pagina que sea accesible por personas con diferentes problemas.

## tabindex

este nos permite crear una secuencia de movimiento con tabuladores para pasar de un elemento a otro.

```HTML
<p tabindex="1">Parrafo 1</p>
<p tabindex="3">Parrafo 2</p>
<p tabindex="2">Parrafo 3</p>
```

## aria-label

nos permite agregar mas informacion para que sea leida por el navegador y el usuario pueda escuchar esa informacion.

```HTML
<a href="#" aria-label="leer mas sobre la noticia de agua en marte">Parrafo 1</a>
```

## role

nos permite dar mas informacion de la accion que vamos a ejecutar.

```HTML
<a href="#" role="link" aria-label="leer mas sobre la noticia de agua en marte">Parrafo 1</a>
```

## Documentacion

es muy estenso el mundo de la accesibilidad por ese motivo tenemos esta documentacion:

+ [Aria mozilla](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA)
+ [Aria web.dev](https://web.dev/semantics-aria/)
+ [aria lullabot](https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility)
+ [aria w3](https://www.w3.org/WAI/ARIA/apg/)