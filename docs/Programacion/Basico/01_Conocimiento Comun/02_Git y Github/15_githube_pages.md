# github pages

github nos da la posibilidad de publicar un sitio web de forma gratuita para mostrar en paginas web la informacion de nuestro repositorio, como puede ser una documentacion visual. 

para esto toca trabajar con una rama especial llamada gh-pages y tenemos su [documentacion](https://pages.github.com/) para saber mas de esta rama. 

ya con el manejo de ramas se puede crear una rama independiente desde el inicio del proyecto para que no tenga el codigo de desarrollo sino codigo html que documente el desarrollo. 

Ejemplo:

```bash
#crear la rama gh-pages
git branch gh-pages

#movernos a la rama gh-pages
git checkout gh-pages

#agregar remoto si no se ha hecho
git remote add nombre_remoto 
ruta_repositorio

#guardar datos en el remoto de la rama gh-pages
git push nombre_remoto gh-pages

#descargar cambios de la rama gh-pages
git pull origin gh-pages
```