# modificaciones en ultimo commit

existen muchas ocaciones que enviamos un commit, pero vemos que quedo mal una linea esto nos obliga a crear un nuevo commit para guardar estos cambios pero existe la posibilidad de modificar el ultimo commit para que guarde esos cambios sin alterar el historial de commit.

```bash

# guardar cambios en el ultimo commit sin cambiar el mensaje
git commit --amend --no-edit

# guardar cambios en el ultimo commit modificando el mensaje
git commit --amend -m "nuevo mensaje para el ultimo commit"

#eliminar el ultimo commit
git reset --hard HEAD-1
```
cuando se realiza el push puede ocasionar conflictos ya que el remoto encuentra cambios de un documento a otro en el mismo commit, esto nos obliga a crea un nuevo commit para la solucion de conflictos, entre remoto y local.

## movernos entre los commit

```bash
# ver la linea de tiempo de los commit realizados
git log --oneline

# movernos a un commit
git checkout codigo_commit
```

