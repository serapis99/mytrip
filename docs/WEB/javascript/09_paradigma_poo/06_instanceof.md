# instanceof

cuando deseamos saber si un objeto fue creado apartir de una clase, debemos usar la palabra clave **instanceof** que nos permite verificar si es o no una instancia de la clase como se puede intuir devuelve **true** o **false**. 

Ejemplo:

```javaScript
if (objeto instanceof clase){
    console.log("El objeto pertenece a la clase")
}
```

**Nota: con instanceof se puede validar que es instancia de clases padres por el concepto de herencia por lo tanto se debe comenzar a validar con la clase de menor jerarquia (la ultimo hijo)**