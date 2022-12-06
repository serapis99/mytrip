# emmet

es un lenguaje que nos permite escribir codigo HTML mucho mas rapido porque nos permite mas atajos

## clases y ids 

cuando quetamos crear una etiqueta con una clase (.) y id (#) en el codigo.

Ejemplo:
```emmet
p#mi_id

p.mi_clase_1

p#mi_id.mi_clase_1.miclase2
```
se puede conbinar.
Ejemplo:

```emmet
p.mi_clase_1.miclase2#mi_id
```
## atributos personalizados

para escribir el valor de los atributos debemos usar corchetes

```emmet
a[href="https//www.google.com"]
img[src="ruta_imagen" alt="hola"]
```

## contenido

para escribir el contenido normalmente texto se usan las llaves o semicorchetes.

```emmet
a[href="https//www.google.com"]{google}
```

## multiplicadores

los multiplicadores nos permite crear el mismo elemento la misma cantidad del numero que le pasamos y se usa el simbolo por o asterisco.

```emmet
li.nav-element{inicio}*6
```

## iterador numerico

es un numero que va cambiando dependiendo la cantidad de elementos creados se usa con el multiplicador y es el simbolo dolar.

cuando se coloca mas de un simbolo dolar le estamos diciendo que complete con ceros ejemplo si es el parrafo 1 se veria con 01 si se tiene dos signos dolares y 001 si se tiene 3 signos dolar

```emmet
p{soy el parrafo $}*6
p{soy el parrafo $$}*100
p{soy el parrafo $$$}*100
```
## iterador numerico con un inicio
para poder indicar que comience a contar desde un numero especifico se debe usar el simbolo arroba y luego el numero en el que comenzara a contar.

```emmet
p{soy el parrafo $@20}*6
```

## hijos 

se pueden crear multiples elementos dando como desendencia el simbolo de mayor que.

```emmet
header>nav>a[href="#"]{enlace $}*5
```

## hermanos

podemos crear varios elementos hermanos si usamos el simbolo de mas. 

```emmet
header>nav>a+p+h1
```
## subir un nivel

nos permite movernos en lo que estamos creando y subir un nivel para crear mas cosas en ese nivel. se usa el simbolo de circunflejo ^ `alt`+`94`

```emmet
nav>p.links>a*3^h1{hola}
```

## agrupacion 

para agrupar un codigo debemos usar parentesis.

```emmet
section>(.card>h2{titulo $}+p{parrafo $})*3
```

## lorem
lorem nos porposiona texto aleatorio y nos puede generar la cantidad de palabras que indiquemos.

```emmet
lorem180
lorem
```
