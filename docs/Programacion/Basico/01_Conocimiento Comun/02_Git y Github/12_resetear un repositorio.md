# reseteo de repositorio
si en algun momento tienes la necesidad de reaetear el historial de cambios de un repositorio para que quede como si lo acabaras de crear ejecuta esta serie de comandos

```bash
#movernos a la carpeta raiz
cd carpeta-repositorio
#mover el archivo config de git
mv .git/config ~/saved_git_config
#eliminamos la carpeta git
rm -rf .git
#inicializamos git
git init
#renombramos la rama master a main
git branch -M main
#agregamos todos los archivos
git add .
#guardamos los cambios en un primer commit
git commit -m "Commit inicial"
#movemos el archivo config a la carpeta git
mv ~/saved_git_config .git/config
#forzamos a que se guarden los cambios en el remoto
git push --force origin main
```