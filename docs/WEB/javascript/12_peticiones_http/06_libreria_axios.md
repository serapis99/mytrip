# libreria axios

Es una libreria basada en promesas y es muy ligera para ser usada en:
1. Si solo se van a hacer peticiones a una api rest.

originalmente el repositorio en [git](https://github.com/axios/axios) y para poder usarlo se debe ingresar la siguiente linea en una pagina web antes de nuestro codigo **script**

```html

<!-- jsDelivr CDN --> 
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<!-- unpkg CDN --> 

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## Peticion get

```javascript
axios({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/users'
}).then(res=>console.log(res.data));

```

## Peticion Post

```javascript
axios({
    method:'POST',
    url:'https://jsonplaceholder.typicode.com/posts',
    data:{
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
}).then(res=>console.log(res.data))
```