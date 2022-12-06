# Conjunto de caracteres y rangos

|Simbolo|Descripcion|Uso|
|---|---|---|
|.| nos permiite simbolizar cualquier caracter excepto nueva linea|r.b.n|
| \| |nos permite crear multiples secuencias de caracteres se expresa como **a** o **b**| ruben \| dario|
| ( ) | agrupa toda la secuencia que esta dentro de los parentesis| (ruben)|
| (?:)| no cuenta este grupo osea ignora el dato que se crea en este grupo| (?: regex)
|[ ]| esto nos permite generar rangos o crear un grupo de caracteres que pueden aparecer|[ a-zA-Z0-9 ]|
|[ ^. ] | Este niega los caracteres que estan dentro del rango lo que indica que no puede ir ningun caracter que este en esse rango|[ ^0-9 ]|