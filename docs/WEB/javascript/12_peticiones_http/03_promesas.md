# promesas

basicamente son objetos que en su interior tienen dos callbacks, por lo tanto los recibe como parametros a la hora de instanciar una promesa. normalmente estos parametros los llamamos **resolve** y **reject** cada uno recibe los datos a devolver dependiendo si se resolvio o si hubo un error. 

```javascript

//creamos un objeto users para simular una peticion a una base de datos users
const users=[
    {
        id:1,
        name:"Dorian"
    },{
        id:2,
        name:"Laura"
    },{
        id:3,
        name:"Carlos"
    }
];
//creamos un objeto emails para simular una segunda peticion a una base con los datos devueltos en users.
const emails=[
    {
        id:1,
        email:'dorian@gmail.com'
    },
    {
        id:2,
        email:'laura@gmail.com'
    }
];


const getUser=(id)=>{
    const user =users.find(user=>user.id==id); 


    const promise= new Promise((resolve,reject)=>{

        if(!user){
        //retornamos funcion cuando hay error
        reject(`No existe un usuario con este ${id}`);
    }else{
        //retornamos funcion cuando no hay error
        resolve(user);
    } 

    });

    return promise;
}

//funcion que sera llamada cuando se tenga los datos del usuario.
const getEmail =(user)=>{
    const email=emails.find(email=>email.id==user.id);

    const promise= new Promise((resolve,reject)=>{

        if(!email){
        //retornamos funcion cuando hay error
        reject(`${user.name} no tiene email`);
    }else{
        //retornamos funcion cuando no hay error
        resolve({
            id:user.id,
            name:user.name,
            email:email.email
        });
    } 

    });

    return promise;
}

//debido a que las promesas estan envueltas debemos usar la propiedad then() cuando no devuelve un error usamos catch 
getUser(1)
.then(user=>getEmail(user);)
.then(res=>console.log(res);)
.catch(err=>console.log(err););

```

como se puede ver esto soluciona un poco el callback hell ya que no se comienza a alinear hacia la derecha por cada llamada. a su vez como ejecutamos una funcion con el parametro que nos retorna la promesa se puede simplificar mas el codigo que resuelve los datos.

```javascript

//forma simplificada 

getUser(1)
.then(getEmail)
.then(console.log)
.catch(console.log);

```