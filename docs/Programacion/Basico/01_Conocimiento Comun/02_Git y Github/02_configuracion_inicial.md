# Configuracion inicial

Antes de comenzar a configurar debemos saber si nuestro **git** quedo bien instalado para esto podemos usar el comando de version asi sabremos que quedo instalado y la version que esta instalada.

``` bash
## version
git --version
```

## Configuracion Git por primera vez

Despues de instalar git debemos hacer esta configuracion para que git guarde nuestra informacion en su configuracion global, una vez configurado no se tiene que volver hacer esta. 

los comandos no devuelven nada por lo tanto cuando se ingresan no deveria mostrar ningun mensaje. 

``` bash
# configurar usuario, email y uniendo

git config --global user.name "ruben"
git config --global user.email "ruben@gmail.com"
git config --global user.lastname "gacha"

# activar los colores de palabras claves
git config --global user.ui true

#mostrar la configuracion de git.
#se avanza con enter y se cierra con la letra q
git config --list
```

## cambiar el editor de git

``` bash
# cambiar el editor a visual code 
# se puede cambiar por cualquier editor solo cambiando 
# el "code" por el nombre del ejecutable del otro editor
git config --global core.editor "code --wait"

## lanza la configuracion para poder editarla. 
git config --global -e
```

| Editor | comando config|
|---|---|
|Atom |git config --global core.editor "atom --wait"|
|emacs|git config --global core.editor "emacs"|
|nano|git config --global core.editor "nano -w"|
|vim|git config --global core.editor "vim"|
|Sublime Text (Mac)|git config --global core.editor "subl -n -w"|
|Sublime Text (Win, instalación de 32 bits)|git config --global core.editor "'c:/program files (x86)/sublime text 3/sublimetext.exe' -w"|
|Sublime Text (Win, instalación de 64 bits)|git config --global core.editor "'c:/program files/sublime text 3/sublimetext.exe' -w"|
|textmate|git config --global core.editor "mate -w"|

## Espacios

debido a que la arquitectura de los diferentes sistemas operativos son distintos se necesita estandarisar estos saltos espacios para que no generen confictos o cambios no visibles a la hora de unir el desarrollo.

```bash
#windows
git config --global core.autocrlf true

# linux/Mac
git config --global core.autocrlf input
```

## saber mas de un comando

En muchas ocaciones no sabemos como funciona un comando para esto podemos usar los comandos de ayuda que nos dara una ayuda del comando que queremos usar.

con git tenemos dos formas una que esta basada en forma visual formato html y la otra en terminal los comandos son:

```bash
#terminal "git comando -h"
git config -h

#navegador "git help comando"
git help config
```