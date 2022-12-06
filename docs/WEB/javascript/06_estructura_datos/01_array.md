# Array
En javascript los array son estructuras de datos que pueden almacenar varios datos con las siguientes caracteristicas:

1. los arrays en javascript permiten guardar datos de diferente tipo.
2. los arrays en javascript son mutables pueden cambiar el tamaño. En otras palabras pueden almacenar mas o menos elementos.
3. se puede acceder al valor de un elemento dependiendo su posicion comenzando en 0
4. personalmente pienso que los array en javascript se comportan como listas de otros lenguajes.

```javascript
const array=["ruben",'dario',32,1.73]
console.log(array[1])
array[1]='gacha'
console.log(array[1])


//**********************forma antigua no usar 

let autos=new Array("bmw","volvo","toyota")

```
## Recomendaciones
1. se recomienda que se declare un array con la palabra clave reservada **const** ya que no se va a modificar la referencia en memoria del arreglo.
2. No se recomienda agregar un valor directamente por la posicion del array ya que esto puede crear muchos valores vacios.
3. Se deberia intentar mantener un solo tipo de dato en el array

## Propiedades
|Propiedades| Descripcion|
| --- | --- |
|.length| nos da la cantidad de elementos |

## Metodos
|Metodos| Descripcion|
| --- | --- |
|.push(elem)| agrega un elemento al array al ultimo |
|.unshift(elem)|agrega un elemento al inicio del array |
|.pop()| elimina el ultimo elemento del array |
|.shift()| elimina el primer elemento del array|
|.indexOf(elem) | busca un elemento dadonos la primera posicion sino lo encuentra devuelve -1|
|.lastIndexOf(elem) | busca un elemento dadonos la ultima posicion sino lo encuentra devuelve -1|
|.splice(posicion_inicio[,cantidad ,[, items ]])| Cambia el contenido de un array eliminando elementos existentes o agregando nuevos elementos.|
|.slice()| nos permite pasar los valores de un array para que sea copiado |
|.slice([inicio [, final]])| nos permite extraer elementos de un array desde la posicion inicio a posicion final sin tener encuenta el elemento de la posicion final |
|.reverse() | invierte el orden de los elementos |
|.join(separador) | une todo el array y nos devuelve un string sepearado por el separador|

Ejemplos:
```javascript
const array=["ruben",'dario',32,1.73]
array.push("gacha")
array.length

//se puede guardar los elementos que se eliminan en una variable
let itemEliminado=array.pop()
```


Ejemplos splice:
```javascript
const numeros=[1,2,3,4,5,6];

// elimina desde la posicion indicada hasta el final
numeros.splice(3);

//Elimina desde la posicion indicada la cantidad de datos del segundo parametro

numeros.splice(1,2);

//Eliminar desde la posicion dada, la cantidad de elementos dados y agrega los elementos que queramos insertar desde uno a x elementos.

numeros.splice(1,2,6,7,8,9,10);
numeros.splice(10,1,9);


//agregar elementos desde una posicion sin eliminar elementos, lo unico que se debe hacer es en cantidad colocar 0.
numeros.splice(1,0,6,7,8,9,10);
numeros.splice(10,0,9);

```

## metodos de array avanzados.

| Metodos | Descripcion |
| --- | --- |
| .from(iterable) | convierte en array un elemento iterable. |
| .sort([ callback ]) | Ordena los elementos de un array alfabeticamente(valor unicode). si le pasamos un callback los ordena en funcion del algoritmo que le pasemos. |
| .foreach(callback(currentValue),[ index ]) | ejecuta la funcion indicada una vez por cada elemento del array |
| .some(callback) | comprueba si al menos un elemento del array cumple la condicion |
| .every(callback) | comprueba si todos los elementos del array cumplen la condicion |
| .map(callback) | Transforma todos los elementos del array y devuelve un array nuevo |

Ejemplos:
```javascript

//ejemplo .from

let word="hola mundo";
let letras=Array.from(word);

//ejemplo .sort

const letters = ['b','c','z','a']
const numbers = [1,8,100,300,3]

console.log(letters.sort());

console.log(numbers.sort((a,b)=>a-b));

// ejemplo .forEach

const numbers =[12,25,47,84,98]

numbers.forEach((number) => {
    console.log(number)
});

numbers.forEach((number, index) => {
    console.log(`${number} esta en la posicion ${index}`);
});

//ejemplo .some y .every

const words=["HTML", "CSS","javascript","PHP"]

console.log(words.some((word)=>word.length>3));

console.log(words.every((word)=>word.length>3));

// ejemplo .map

const numbers =[12,25,47,84,98]
numbers.map((number)=>{
    console.log(number*2)
})

// ejemplo .filter
const numbers =[12,25,47,84,98]
numbers.filter((number)=>{
    number>80;
})

// ejemplo .reduce
const numbers =[12,25,47,84,98]

numbers.reduce((a,b)=>{
    a+b;
})

// segunda forma de usar el reduce ya que se necesita inicializar cont.

const users=[
    {
        name:'user 1',
        online: true
    },
    {
        name:'user 2',
        online: false
    },
    {
        name:'user 3',
        online: true
    }
]

const usersOnline=users.reduce((cont,user)=>{
    if(user.online){cont++}
    return cont
},0);

```
## Saber si una variables es un array

podemos usar el objeto array para validar si una variable es de tipo array o no

Ejemplo:

```javascript
const array=["ruben",'dario',32,1.73]

//forma 1
Array.isArray(array) // devuelve true

//forma 2

array instanceof Array // devuelve true
```

