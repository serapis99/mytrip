# Objeto date

nos permite tratar con fechas este objeto se debe instanciar para poder usar sus metodos y propiedades. [Documenacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)

|metodo| descripcion|
|---|---|
|getDate()| nos devuelve el dia del mes de 1 al 31 |
|getDay|nos devuelve el dia de la semana de 0 al 6 |
|getFullYear()|devuelve el año con 4 digitos|
|getHours()|devuelve la hora 0 - 23|
|getMinutes()|devuelve los minutos de 0 -59|
|getMonth()|devuelve el mes entre 0 a 11|
|getYear()|devuelve el año con 2 digitos|

Ejemplo

```JavaScript
const ahora=new Date();
const cumple=new Date("December 05, 1990 01:34:00");

console.log(ahora.toString());
console.log(cumple.toString());


console.log(cumple.getFullYear()); //1990
```

## marca de tiempo o (Timestamp)

la marca de tiempo es el tiempo que ha transcurrido desde un punto que sera el cero hasta una fecha determinada en el caso de javascript la fecha de inicio es 01/01/1970 00:00:00 que se conoce como **unix Epoch** esa marca de tiempo de apartir de esa marca comienza a correr el tiempo. 

Ejemplo
```javascript
const tiempoInicio=new Date(0);
console.log(tiempoInicio.toString()); // nos muestra la fecha que inicia


const ahora=new Date();
console.log(ahora.toString());// nos muestra la fecha actual


const timestamp=ahora.getTime(); //nos trae el valor de tiempo transcurrido desde el tiempo cero.

console.log(timestamp.toString); //nos muestra el tiempo transcurrido.

/***********con el tiempo trascurrido podemos crear un objeto Date con la fecha correspondiente*/

const replicarFecha=new Date(timestamp);

```

una de las ventajas de usar las marcas de tiempo es cuando necesitamos comparar dos fechas y saber cual es la fecha mas reciente y cual es la mas antigua ya que hacer esta operacion con los objetos fecha es mas dificil que con numeros. 

