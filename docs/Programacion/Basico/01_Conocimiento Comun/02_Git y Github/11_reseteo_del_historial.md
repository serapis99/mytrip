# reseteo del historial

podemos eliminar el historial de cambios del proyecto hacia adelante con respecto de un punto de referencia.

```bash
#borra HEAD
git reset --soft

#borra head y stanging
git reset --mixed

#borra todo: head, stanging y working Directory
git reset --hard

#deshace todos los cambios despues del commit indicado, preservando cambios locales
git reset id-commit

#desecha todo el historial y regresa al commit especificado
git reset --hard id-commit
```
