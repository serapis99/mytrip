# Interracion con usuarios


## Mostrar datos al usuario

Para que un usuario o nosotros mismos veamos los datos en pantalla o en consola tenemos tres formas.

### console

tenemos un objeto llamado **console** que nos permitira escribir en consola con la propiedad **log**

Ejemplo:

```javascript
console.log("Hola mundo")
```

### document

tenemos el objeto llamado **document** que hace referencia a la pagina web donde se ejecuta el codigo he inserta el dato que queremos visualizar usando la propiedad **write**.

Ejemplo:

```javascript
document.write("<h1>hola mundo</h1>")
```
### alert

por ultimo tenemos que nos cree un mensaje de alerta para visualizar los datos, para eso usamos la funcion **alert**.

Ejemplo:


```javascript
alert("Hola mundo")
```

## Solicitar datos al usuario

Cuando se hace desarrollos normalmente se solicitan datos de usuario y tenemos las siguientes formas de solicitar datos al usuario.

### prompt 

la primera forma es solicitarle la informacion por una alerta que permite escribir datos para esto usamos la funcion prompt que nos dara un **String** de lo que escriba el usuario.

```javascript
let nombre=prompt("Escribe tu nombre")
```