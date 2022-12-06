# Palabras claves Break y Continue

## Break

la palabra clave breack nos permite romper un bloque de codigo llevandonos imediatamente al final de este bloque esto con el fin de no evaluar todos los datos.

En el siguiente ejemplo podemos ver que en el primer for se evaluan 10000 datos y lo que queremos son los numeros pares de 1 a 20 por lo tanto consume recursos que no queremos que consuma, por lo tanto podemos corregir este consumo con el breack en el segundo for.


```javascript
for(let i=1; i<10000; i++){
    if(i%2==0 && i<=20){console.log(i)}
}

for(let i=1; i<10000; i++){
    if(i%2==0){console.log(i)}

    if(i>20){break}
}

```

## Continue

cuando se usa la palabra clave continue es porque no queremos que se ejecute codigo en un determinado momento de un bucle sino que pase a la siguiente iteracion del bucle.



```javascript
for(let i=1; i<100; i++){
    if(i>=50 && i<=70){continue}
    if(i%2==0){console.log(i)}
}
```

aqui lo que hacemos es evitar que calcule si los numeros comprendidos de 50 a 70 sean pares. 

## labels

los lebels permite movernos en el codigo buscando la etiqueta donde nos queremos mover **No se recomienda su uso**, solo esta por si se necesita para corregir codigo antiguo ya que esto provoca codigo espagueti.

lo unico que se tiene que hacer es colocar una palabra seguida de dos puntos y en las palabras continue o break colocar el label donde queremos ir.


```javascript
inicio:
for(let i=1; i<100; i++){
    if(i>=50 && i<=70){continue inicio}
    if(i%2==0){console.log(i)}
}
```