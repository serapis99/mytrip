# Niveles, Tipados en Programacion

## Niveles de programacion

Cuando hablamos de niveles en programacion hablamos de que tan cercano es el lenguaje de programacion con respecto al lenguaje natural entre mas cerca sea al lenguaje natural mas alto es:

+ **Nivel Maquina**: Se trata de escribir el programa directamente comprensible por el procesador, se usan diferentes lenguajes ensambladores y son programas que puede ser insuperables en terminos de rendimiento y de consumo de recursos, pero son dificiles de usar en otras maquinas.
+ **Bajo Nivel**: Son lenguajes que nos permite crear programas mas o menos complejos y nos permite tener un control de tareas de bajo nivel como asignacion y liberacion de memoria.
  +  C++
+ **Alto Nivel**: El control de las tareas de bajo nivel las tiene de forma automatica normalmente usando un recolector de basura.
  + JAVA
  + Python

## Tipados en programacion

cuando hablamos de tipados estamos hablan de como el lenguaje reconoce las variables y le da un tipo a los datos que se guardaran en esa variable. 

+ **Debil vs Fuerte**: Se trata en la validacion del tipo, al momento de comparar o hacer alguna operacion ya que en los debiles no se valida el tipo cuando se hace una comparacion mientra en los fuerte si se valida el tipo. por lo tanto en los lenguajes con tipado debil una comparacion de 1=='1' es verdadero pero en el tipado fuerte es falso. 

Por esta razon se crea el triple igual para decirle al tipado debil que compare el tipo de dato en su comparacion haciendo que 1 === '1' sea falso.

+ **Estatico vs dinamico**: Se trata de la capacidad que tiene el lenguaje en detectar el tipo de dato que va a tener una variable o constante. 

En el tipado estatico se le debe indica que tipo de dato va a poseer ejemplo `String variable`, mientras en el tipado dinamico solo debemos indicar el nombre de la variable y asignarle el valor que va a almacenar. El lenguaje se encargara de darle el tipo correspondiente segun el valor que se le asigne ejemplo `variable=1`