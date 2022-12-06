# Manejo de ramas

las ramas en git son copias desde un punto del proyecto para comenzar a hacer modificaciones desde esta copia sin afectar la rama principal cuando se prueban los cambios que se realizan en esta rama y se ve que esta funcionando correctamente se pueden unir la rama principal con la rama que estemos trabajando con los cambios que queremos.

tambien cada rama puede tener mas o menos archivos dependiendo los cambios que realicemos desde que se crea la rama. 

```bash
#crear una rama
git branch nombre_rama

#cambiar de una rama a otra
git checkout nombre_rama_que_queremos_ir

#crear una rama y cambiarte a ella
git checkout -b nombre_rama

#eliminar rama
git branch -d nombre_rama

#eliminar una rama de forma forzada
git branch -D nombre_rama

#mostrar todas las ramas del repositorio
git branch

#listar ramas no fucionadas o la rama actual
git branch --no-merged

#listar las ramas fucionadas con la rama actual
git branch --merged
```

en muy raras ocaciones necesitamos que una rama que no se ha trabajado y en linea de tiempo esta por abajo de otras ramas, pase a estar en una posicion para esto debemos movernos a la rama que queremos que pase adelante y decirle que sobrepasa a una rama especifica. 

```bash
#pasar a la rama que queremos que adelante
git checkout nombre_rama
#hacer que sobrepase a una rama especifica
git rebase nombre_rama
```

## las ramas en el remoto

los codigos enteriores nos permite manejar las ramas pero estas ramas solo estan en local para crearlas en el remoto podemos usar cualquiera de estos dos codigos.

```bash
#esta linea especificamos el remoto y la rama a crear forma 1
git push --set-upstream origin html

#esta linea especificamos el remoto y la rama a crear forma 2
git push -u origin html
```

1. como se puede apreciar **-u** es la forma corta de **--set-upstream**.
2. origin es el nombre del remoto
3. html es la rama que queremos crear.

