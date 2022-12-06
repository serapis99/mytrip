# Callbacks

1. Son funciones que se ejecutan a traves de otra funcion.
2. los callback no son asincronicos.
3. el nombre comun a la variable de la funcion callback es **cb**


## Primer Ejemplo del callback:

lo que se quiere mostrar en este ejemplo es el uso comun de las funciones callback donde debemos validar si la funcion devuelve un error o si se completo exitosamente. en este caso fallara si el id es igual a 2.

```javascript

//creamos la funcion que recibira la funcion callback
const getUser=(id,cb)=>{

    //creamos al objeto user
    const user={
        name: "Dorian",
        id:id
    }

    //validamos datos para saber si 
    //retornar la funcion con error o
    //la funcion sin error.

    if(id==2)cb("usuario no existe"); //funcion con error
    else cb(null,user); //funcion sin error
}

getUser(1,(err,user)=>{
    //validamos si nos retorno la funcion con error
    if(err) return console.log(err);

    // ejecutamos codigo con la funcion sin error
    console.log(`User name is ${user.name}`)
});


```

## Segundo Ejemplo del callback:

En este ejemplo se quiere mostrar que se pueden hacer callback anidados esto puede complicar mucho el codigo ya que genera el **callback hell** que es un codigo dificil de mantener por eso se crearon las **promesas** que mejoran el codigo y se vuelven mas faciles de mantener.

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


const getUser=(id,cb)=>{
    //usamos la funcion find para buscar el usuario que tenga id igual al que pasamos.
    const user =users.find(user=>user.id==id); 
    
    //validamos si el usuario existe esta comprobacion es lo mismo que colocar user==undefined


    if(!user){
        //retornamos funcion cuando hay error
        cb(`No existe un usuario con este ${id}`);
    }else{
        //retornamos funcion cuando no hay error
        cb(null,user);
    } 
}

//funcion que sera llamada cuando se tenga los datos del usuario.
const getEmail =(user,cb)=>{
    const email=emails.find(email=>email.id==user.id);

    if(!email) cb(`${user.name} no tiene email`);
    else cb(null,{
        id:user.id,
        name:user.name,
        email:email.email
    })
}

getUser(1,(err,user)=>{
    //validamos si nos retorno la funcion con error
    if(err) return console.log(err);

    // ejecutamos codigo con la funcion sin error

    getEmail(user,(err,res)=>{
        if(err) return console.log(err);
        console.log(res);
    })
});
```