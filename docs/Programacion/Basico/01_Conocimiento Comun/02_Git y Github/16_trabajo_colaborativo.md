# trabajo colaborativo

1. cuando se quiere colaborar en un proyecto lo primero que debemos hacer es un **fork** que nos permitira copiar el repositorio del dueño del proyecto a nuestro repositorio, esto se hace desde github.
2. cuando ya este en nuestro repositorio clonaremos nuestro repositorio remoto (github) a nuestro entorno de trabajo.
```bash
git clone ruta_repositorio
```
3. renombar el remoto que apunta a **origin** por **fork** que hara referencia a nuestro remoto.
```bash
git remote rename origin fork
```
4. agregar el nuevo **origin** con la ruta del remoto_original desde donde le hicimos el fork.
```bash
git remote add origin ruta_remoto_original
```  
5. crear una nueva rama donde nosotros trabajaremos para poder presentar el pull request. 
```bash
git checkout -b nueva-rama

#se trabajaria normal con git add y git commit hasta que lo subamos al remoto.

git push fork nombre_rama
```
6. solicitar el pull request desde github.

## En el repositorio original 

cuando estamos del lado donde nos solicitan el pull request debemos validar los cambios que nos estan sugeriendo en **files changed**, cuando estamos seguros que los cambios no afectan el proyecto y si lo mejoran podemos hacer un **marge pull request** donde uniremos los cambios con el codigo que nos enviaron en el pull request.

## una vez aceptado el pull request

### dueño original repositorio

el dueño solo debe hacer un git pull para actualizar el repositorio por el cambio de pull request

```bash
git pull
```

### persona que solicita el pull request

```bash
# descargar los cambios del remoto origin
git pull origin main

#subir los cambios en el remoto fork
git push fork main

#eliminar rama del trabajo pull request
git branch -d rama-nueva

#enviar la peticion de eliminar la rama en el remoto
git push fork --delete rama-nueva
```


