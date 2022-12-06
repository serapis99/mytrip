# validacion basica

Una forma de validar los datos de un formulario es validando el valor del campo antes de enviar al **backend**.

Aunque se valide en el **fromend** se debe volver a validar en el **backend** ya que cualquer usuario con conocimientos puede falsear los datos.

Ejemplo:

```javascript
const form=document.getElementById('form')
const name=document.getElementById('name')
const email=document.getElementById('email')

//se crea objeto para validar campos
const formIsValid={
    name:false,
    email:false,
}

//evitamos que se envie el formulario
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateform();
})

//validamos cuando existe un cambio en el campo

name.addEventListener('change',(e)=>{
    if(e.target.value.trim().length>0){
        formIsValid.name=true
    }else{
        formIsValid.name=false
    }
})

email.addEventListener('change',(e)=>{
    if(e.target.value.trim().length>0){
        formIsValid.email=true
    }else{
        formIsValid.email=false
    }
})

const validateform=()=>{
    //traemos los valores del objeto validacion
    const formValues=object.values(formIsValid);

    //buscamos si hay un valor en false
    const valid= formValues.findIndex(value=>value==false)

    //comprobamos que no hubo un valor en false para enviar el formulario
    if(valid==-1) form.submit()
    else alert('form invalid')
}
```

**NOTA:** se recuerda que cuando se realice validaciones con el boton submit no debemos usar el ***id='submit'*** ya que genera errores