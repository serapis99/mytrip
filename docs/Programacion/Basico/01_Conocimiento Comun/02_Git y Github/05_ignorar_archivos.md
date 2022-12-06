# Ignorar archivos

Para poder ignorar archivos que no queremos que se suban o se guarden en el repositorio debido a que pueden ser configuraciones personales o contraseñas de ingreso, se debe crear un archivo llamado "**.gitignore**"

```bash
#para crear comentarios en el archivo .gitignore se usa el numeral # al inicio de la linea.

#para ignorar un archivo especifico
nombre_archivo.extencion

#ignorar una carpeta 
nombre_carpeta

#ignorar un archivo dando la ruta desde la raiz 
/nombre_carpeta/nombre_archivo.extencion

#ignorar todos los archivos con una extencion especifica
*.log

#evitar que un archivo sea ignorado. 
!production.log

#ignorar todos los archivos con una extencion en una carpeta dada.
doc/*.txt

#ignorar todos los archivos con una extencion en todas las subcarpetas de una carpeta dada.

doc/**/*.txt
```

dependiendo de la tecnologia tiene sus propios archivos de configuracion que se pueden ignorar en este [sitio gitignore.io](https://www.toptal.com/developers/gitignore) podemos buscar la tecnologia que usamos y nos dara el archivo **.gitignore** que se podria usar para esa tecnologia.