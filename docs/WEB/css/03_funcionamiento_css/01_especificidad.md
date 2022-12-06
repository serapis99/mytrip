# especificilidad

Establece como de especifico es un selector para saber que estilo aplicar y esto altera la cascada, por lo tanto es mejor tener bien organizado el codigo para que se aplique la cascada correctamente.

El calculo se realiza con la siguiente formula:

| tipo | valor |suma|
|---|---|---|
|Etiquetas y pseudoelementos|001|1
|clases, atributos y pseudoclases |010|10|
|Ids|100|100|
|Estilos en linea| 1000|1000|
|!important|sin valor| No se debe usar|

```css
/*valor 111*/
h1.title#title{
    background-color:tomato;
}

/*valor 1*/
h1{
    background-color:red;
}

/*valor 10*/
.title{
    background-color:blue;
}
/*valor 100*/
#title{
    background-color: green;
}

/*valor 11*/
h1.title{
    background-color:yellow;
}

/*valor 101*/
h1#title{
    background-color:teal;
}
```