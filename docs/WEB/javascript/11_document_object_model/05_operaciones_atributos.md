# operaciones con los atributos del elemento

Con javascript podemos obtener y modificar los valores que poseen los atributos y se pueden agrupar estos atributos en tres grupos los **diferentes a class**, **los de class** y **los directos**

## Atributos diferentes a class

los atributos diferentes a class es el grupo mas grande ya que hace referencia a cualquier atributo que pueda tener un elemento HTML. 

|metodo elemento| descripcion|
|---|---|
|.getAttribute('atribute')| permite obtener el valor del atributo que pasamos|
|.setAttribute('attribute','value')| cambia el valor del atributo|

## Atributo class

devido a que este atributo puede tener multiples valores y su uso es muy comun se tiene varios metodos que interactuan con el atributo class

|metodo elemento|descripcion|
|---|---|
|.classList.add('class','class',...)| añadir una o mas clases|
|.classList.remove('class','class',...)|eliminar una o mas clases|
|.classList.toggle('class'[ ,force])|alterna la clase si el atributo la tiene le quita y si no lo tiene le coloca.|
|.classList.contains('class')|verifica si el elemento contiene una clase|
|.classList.replace('oldClass','newClass')|cambia una clase por otra clase|

## Atributos directos

En javascript se pueden acceder a varios atributos directos del elemento como son **id**, **value**, **innerHTML**,**textContent**, entre muchos otros.

Atributos directos:
+ id
+ value
+ innerHTML
+ textContent