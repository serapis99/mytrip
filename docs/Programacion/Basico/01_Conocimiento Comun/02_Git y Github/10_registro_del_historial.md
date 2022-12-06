# registros del historial de commit

En algunas ocaciones perdimos un documento o archivo que se encontraba en commit anteriores o queremos ver en que punto del proceso se hizo un cambio en una archivo por eso git tiene su registro de commit en un log para poder ver estos commit se usan estos comandos que nos permite ver el registro.

```bash
# muestra todo el registro
git log

#muestra en una linea los registros
git log --oneline

#guarda el registro en un archivo plano
git log>log.txt

#muestra el historial con un formato ver documentacion para los formatos admitidos
git log --pretty=format:"%h - %an, %ar :%s"

#muestra una cantidad de cambios desde el ultimo a n
git log -n

# muestra cambios despues de una fecha
git log --after="2019-07-07 00:00:00"

#muestra cambios antes de una fecha
git log --defore="2019-07-07 00:00:00"

#muestra los cambios realizados entre fechas
git log --after="2019-07-07 00:00:00" --before="2019-07-07 00:00:00"

#muestra en forma grafica los cambios
git log --oneline --graph --all

#muestra todo el registro de acciones del log incluyendo inserciones, cambios, eliminaciones, fuciones, etc.
git reflog

#diferencia entre el working Directory y el staging area
git diff
```