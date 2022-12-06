# Anchors o limitadores

los limitadores nos indican que lo que estamos buscando inicia o termina con algun caracter que le pasemos, la mayoria de estos son afectados por el completo de la cosa que estemos validando ya sea un documento, linea de documento o un string. 

| Simbolo | Descripcion | uso | sacar caracter especial|
|---|---|---|---|
|^  |Este simbolo nos permite indicarle que el texto debe iniciar con el caracter que indiquemos|**^Git**|`alt`+`94`.|
|\\A| Este simbolo nos permite indicarle que el texto debe iniciar con el caracter indicado.| **\\AGit**|`alt`+`92`|
|$ | Este simbolo nos permite indicarle que el texto debe terminar con el caracter que indiquemos|**Git$**|`alt`+`36`|
|\\Z| Este simbolo nos permite indicarle que el texto debe terminar con el caracter indicado|**Git\\Z**| `alt`+`36`|
|\\b | Nos permite indicar que buscamos un limite de palabra.|**Git\\b**|`alt`+`36`|
|\\B| nos permite indicar que buscamos cualquier caracter que no sea un limite de palabra.| **Git\\B**|`alt`+`36`|
|\\< | Nos permite indicar que buscamos una palabra que inicie con un caracter especifico.| **\\<Git** |`alt`+`60`|
|\\> | Nos permite indicar que buscamos una palabra que finalice con un caracter especifico. |**Git\\>**|`alt`+`62`|

