# gitflow

gitflow es un modelo de trabajo en ramas que se adapta muy bien a la metodologia scrum, donde se puede entregar funcionalidades de un desarrollo. 

git flow trabaja con cinco ramas:

1. **master o main:** contendra todas las versiones del codigo o mejor dicho las etiquetas de cada lanzamiento.
2. **develop:** una vez que se cree el repositorio debemos crear esta rama que sera le que contendra las modificaciones y cambios de nuestro proyecto aqui debemos crear nuestro primer commit y un tag v0.0.0
3. **feature:** a partir del primer commit de la rama develop debemos crear las ramas feature que tendran las funcionalidades o la correcion de errores del desarrollo una vez que se tiene la funcionalidad o la correccion del error estas ramas se deben fucionar con la rama **develop**
4. **release:** esta rama se desprende de desarrollo y se usa cuando la rama de desarrollo tiene las suficientes funcionalidades para sacar una version, aqui se hacen los retoques antes de sacar la version a demas las pruebas necesarias para sacar la version. por ultimo se une a la rama **main**
5. hotflix: esta rama se crea para arreglar errores en caliente. esta se correge y se actualiza la version del software.
