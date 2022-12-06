# Iniciar el seguimiento en directorio local 

Lo primero que debemos hacer es ejecutar un comando en la raiz del proyecto que nos permitira iniciar el seguimiento de nuestros archivos, para esto el comando crea dos areas una de ensayo y la otra local. con lo que despues de ejecutar el comando tendremos 3 area.

1. primer area: es el area que tiene todos los archivos los que tienen seguimiento y los que no.
2. segunda area: es el area de ensayo y aqui estan los archivos que tienen seguimiento.
3. tercera area: es el area local donde se encuentran las instantaneas de los archivos que se estan monitoreando.

Comando:

```bash
#comando para iniciar el repositorio
git init
```
una vez que se inicia el seguimiento de las versiones con git. todos nuestros archivos de desarrollo pueden pasar por cuatro estados y seguiran pasando por estos estados como en un ciclo.

algo a tener encuenta que cuando trabajamos de forma local no pasara por el ultimo estado sino volvera al primer estado sin pasar por el cuarto.

1. **working Directory (modified):** este estado existe cuando un archivo de nuestro desarrollo es creado o modificado para que pase al siguiente estado se usaria el siguiente comando.
   ```bash
   #agregar todos los archivos usando el comodin del punto
   git add .

   #agregar un archivo en especifico usando el nombre y ruta del archivo desde raiz.
   git add archivo
   ```
2. **index/staging (staged):** sucede cuando ya los archivos modificados y creados tienen una copia en git y para dar una anotacion o guardar ese estado se usa el **commit**
   ```bash
   #creando el commit con un comentario
   git commit -m "detalle de los cambios realizados"
   ```
3. **head/local (commited)**: en este estado se queda cuando no hay mas cambios en los archivos de aqui se puede enviar un **push** para enviar la informacion del commit al servidor remoto.
```bash
   #enviar los cambios al servidor remoto

   #la primera vez que se vincula el repositorio remoto con el local 
   #en este comando se tiene el nombre del remoto normalmente "origin"
   #y tambien el nombre de la rama en este caso master

   git push -u origin master

   #si la rama y el repositorio remoto es el mismo solo se tiene que usar 

   git push
   ```
4. **github /remote (remote):** este estado existe cuando ya todos los archivos modificados estan en el servidor remoto, de hay cualquier persona que necesite actualizar sus archivos tomaria los archivos desde el remoto con el comando **pull**.
```bash
   #validar y descargar los archivos actuales desde el remoto
   git pull
```
## vinculando repositorio remoto

para hacer la parte del repositorio remoto tenemos que agregar el repositorio remoto a git para esto se usa el comando **git remote add** el siguiente parametro es el nombre que queremos darle al remoto en este caso es **origin** y por ultimo la ruta donde esta el remoto.
```bash
   #agrega la direccion de nuestro repositorio remoto

   #no olvidar que la palabra origin es el nombre que queremos que tenga nuestro remoto
   
   git remote add origin direcion_remota
```
## Estatus de los documentos

todos los documentos tienen varios posibles estatus en el estado de **working Directory** los cuales pueden ser:

+   **M (rojo):** la M en color rojo nos indica que el archivo tiene una modificacion desde la ultima vez que se guardo.
+   **?? (rojo):** los dos signos de pregunta indican que el archivo no ha sido agregado al repositorio
+   **M (verde):** la M en color verde nos indica que el archivo fue modificado y ya tiene una copia en el repositorio.
+   A (verde): indica que un archivo ya fue agregado al repositorio y esta en espera para guardar con el commit.

para poder ver en que estado estan nuestros archivos usa el siguiente comando:

```bash 
#para saber el estado de nuestros archivos
git status -s
```

puede que no nos muestre nada debido a que todos los archivos estan guardados y no hay ningun cambio en estos.
