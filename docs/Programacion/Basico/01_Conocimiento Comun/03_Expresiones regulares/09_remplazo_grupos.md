# remplazo con grupos

al colocar parentesis se crea un grupo y se comienza a contar desde el mas externo al mas interno, de izquierda a derecha, para poder usar cualquier grupo se usa el simbolo dolar ( \$ ) o ( \\\$ ) con el numero del grupo creado.

|Simbolo|Descripcion|Uso|
|---|---|---|
|\$| nos permite usar el string que coincide con los parametros de busqueda de un grupo especifico|\$1|
|\$`|String antes de la coincidencia||
|\$'|String despues de la coincidencia||
|\$+|ultima coincidencia||
|\$&|toda la coincidencia||