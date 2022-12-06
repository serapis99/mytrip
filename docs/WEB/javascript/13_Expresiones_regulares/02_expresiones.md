# Expresiones regulares

se usan para disminuir las lineas de codigo necesarias para validar un string ya que te permite generar patrones de coincidencia en un string a evaluar, mozilla nos da la siguiente [documentacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).

Ejemplo basico:
```javascript
const text=document.getElementById('text').textContent

//primera forma de crear la expresion
const regEx=/lorem/gi

//segunda forma

const regEx2=new RegExp('lorem','gi');

//tercera
const regEx3=new RegExp('/lorem/','gi');


console.log(regEx.test(text))
console.log(regEx2.test(text))
console.log(regEx3.test(text))

```

## Metodo
|Metodo|Descripcion|
|---|---|
|exec()|Ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un arreglo de información o null en una discrepancia.|
|test()|Prueba una coincidencia en una cadena. Devuelve true o false.|
|match()|Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura, o null si no se encuentra ninguna coincidencia.|
|matchAll()|Devuelve un iterador que contiene todas las coincidencias, incluidos los grupos de captura.|
|search()|Prueba una coincidencia en una cadena. Devuelve el índice de la coincidencia, o -1 si la búsqueda falla.|
|replace()|Ejecuta una búsqueda por una coincidencia en una cadena y reemplaza la subcadena coincidente con una subcadena de reemplazo.|
|replaceAll()|Ejecuta una búsqueda de todas las coincidencias en una cadena y reemplaza las subcadenas coincidentes con una subcadena de reemplazo.|
|split()|Utiliza una expresión regular o una cadena fija para dividir una cadena en un arreglo de subcadenas.|
