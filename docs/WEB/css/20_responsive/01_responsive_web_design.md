# responsive web design

+ No es un estandar, No es CSS, es un conjunto de patrones de diseño.
+ Su objetivo es que cualquier página se vea bien independiente del dispositivo.
+ los frameworks resuelven ese problema, pero es un error utilizarlos para evitar aprender lo que hay por detras.
+ se basa en 3 conceptos fundamentales:
  + columnas fluidas
  + imagenes flexibles: max-width 100%
  + media querys
  + a dia de hoy el numero de retos a crecido notablemente y se hace "imprescindible" el uso de javascript.

## Columnas fluidas
+ para conseguir un sistema de columnas o de caja fluidas es tan sencillo.
+ NO hay que asignar todos los anchos en porcentaje, solo se aplica a los elementos que necesiten cambiar su tamaño.

## Media Querys

+ Son condicionales para que el navegador sepa como actuar en funcion de la condicion:
  + **all**: Apto para todos los dispositivos.
  + **print**: Destinado a meterial impreso y visualizacion del modo de vista previa de impresion.
  + **screen**: Destinado principalmente a las pantallas.
  + **speech**: Destinado a sintetizadores de voz.
+ Sintaxis: `@media "tipo de medio" and | or (condicion)`
+ las condiciones mas utilizadas son `min-width`, `max-width` y `orientation`
  + `@media screen and (min-width:360px)`
  + `@media screen and (max-width:1024px) and (orientation: landscape)`
  + `@media screen and (max-width:480px) or (orientation: portrait)`

## Metodologias

+ **Mobile-first:** consiste en hacer primero el diseño móvil e ir subiendo de tamaño.
+ **Desktop-first**: COnsiste en hacer primero el diseño de escritorio e ir bajando de tamaño.
+ **Content-first**: Consiste en saber primero todo el contenido de la web y despues se hace el diseño.