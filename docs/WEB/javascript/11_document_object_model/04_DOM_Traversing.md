# DOM Traversing (Recorrer el DOM)

En ciertos casos no contamos con una seleccion directa al elemento que queremos obtener por lo tanto debemos movernos en el DOM para llegar a este elemento por eso contamos con las siguientes propiedades.

## Padres (nodo del que desciende):


|metodo| descripcion|
|---|---|
|.parentNode| Devuelve el nodo padre (que puede no ser un elemento)|
|.parentElement |Devuelve el nodo elemento padre|

**NOTA: los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode siempre devolvera null**

## Hijos - child (Nodo que desciende de un padre)

|metodo| descripcion|
|---|---|
|childNodes |devuelve todos los nodos hijos|
|children| devuelve todos los nodos elementos hijos|
|firstChild| devuelve el primer nodo hijo|
|firstElementChild | devuelve el primer nodo elemento hijo|
|lastChild|devuelve el ultimo nodo hijo|
|lastElementChild| devuelve el ultimo nodo elemento hijo|
|hasChildNodes()| devuelve true o false dependiendo si tiene hijos o no|

## Hermanos - siblings (Nodos al mismo nivel)

|metodo| descripcion|
|---|---|
|nextSibling| devuelve el siguiente nodo hermano|
|nextElementSibling| devuelve el siguiente nodo elemento hermano|
|previousSibling| devuelve el nodo hermano previo a este.|
|previousElementSibling| devuelve el nodo elemento previo a este|

## cercano

|metodo| descripcion|
|---|---|
|closest(selector)| Selecciona el nodo mas cercano que cumpla con el selector, aun es experimental.