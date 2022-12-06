# Fucionando ramas

cuando ya se han hecho pruebas y se desean unir dos ramas debemos seguir estos dos pasos.

1. situarnos en la rama que se quedara con el contenido fucionado, normalmente la (main).
2. fusionar

al momento de fucionar las ramas tenemos dos posibles casos los cuales son:

+ **fast-forward:** la funsion se hace automaticamente, no hay conflictos por resolver
+ **manual merge:** la fusion hay que hacerla manualmente, para resolver conflictos de duplicacion de contenido.

```bash
#moverse a la rama que quedara con los datos
git checkout nombre-rama

#unirse con la rama tal
git marge rama-a-fucionar
```

## conflictos

cuando hay un conflicto en algunos editores nos preguntara con cual codigo nos quedaremos si con el codigo de la rama principal o el codigo que esta en la rama que fucionamos, hay editores que mezclan los dos codigos y nos toca manualmente decidir que codigo va y cual codigo no. una vez que resolvamos los conflictos en el codigo debemos dar un **git add** y un **git commit** para guardar estos datos.

