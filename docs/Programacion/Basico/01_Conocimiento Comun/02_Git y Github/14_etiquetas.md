# Etiquetas o tags

una etiqueta nos permite crear una bandera donde podemos indicar que el codigo ya esta listo para una determinada version el tema de las versiones no lo explica [semver](https://semver.org/lang/es/). 


```bash
# listar etiquetas
git tag

# crea una etiqueta normal mente v.#.#.#
git tag nombre-de-versión

# eliminar una etiqueta
git tag -d nombre-de-versión

# mostrar información de una etiqueta
git show nombre-de-versión

# sincronizando la etiqueta del repositorio local al remoto
git add .
git tag nombre-de-version
git commit -m "mensaje"
git push origin nombre-de-version

# generando una etiqueta anotada (con mensaje de commit)
git add .
git tag -a "nombre_version" -m "Mensaje de la etiqueta"
#sube las etiquetas
git push --tags
```