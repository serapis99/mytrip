# stacking context

El stacking context o el contexto de apilamiento es el espacio donde nuestros elementos se van a ir apilando para que unos queden por detras y otros por delante.

El orden del stacking context es (de delante a atras):
1.  Elementos posicionados con un z-index de 1 o mas.
2.  Elementos posicionados sin z-index o declarado en auto.
3.  Elementos no posicionados.
4.  Elementos con z-index negativos.

