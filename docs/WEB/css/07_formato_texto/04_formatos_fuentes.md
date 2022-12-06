# formatos para fuentes

+ **True Type Font (TTF)**: fue el primer formato estandar.
+ **Open True Type Font (OTF)**: facilita o implementa la creacion de las curvas.
+ **Web Open Font Format (WOFF) (WOFF2)**: es un formato mucho mas ligero y mejora el rendimiento. Funciona a traves de metadatos. WOFF tiene soporte total y WOFF2 no funciona en internet explorer.
+ **Scalable Vector Graphics (SVG)**: para efectos y animaciones sobre el texto, no es recomendable usarlo en el texto generico de la web, tiene muchos problemas.
+ **Embedded Open Type (EOT)**: primer formato digital propuesto para sitios web y es comprimido. se quedo como una propuesta pero no paso a ser un estandar.

## Regla @font-face

Esta es la forma de utilizar fuentes que tenemos descargadas y que no traemos de un servidor remoto, cuando usamos google fonts, esto es lo que esta pasando por detras.

la sintaxis es:

+ **font-family**: Nombre de la familia, se lo asignamos nosotros.
+ **src**: aqui pondremos dos tipos de valores.
  + **local()**: podremos el nombre de la fuente para buscarla en el ordenador del usuario, de esa forma podemos evitar descargarla.
  + **url()**: si no encontramos esa fuente procedemos a descargarla.
  + **format()**: este valor lo pasaremos de forma opcional si queremos ser mas especificos con la fuente que vamos a buscar o descargar, si no lo ponemos cogera el primer formato soportado, si lo ponemos solo usara el que hemos establecido y si no lo encuentra no hara nada.

podemos añadirle mas valores como **font-style**

Ejemplo 1:

```css
@font-face{
    font-family: "Mano alzada";
    src:url("ruta_fuente");
}
```

Ejemplo 2:
```css
@font-face{
    font-family: "Mano alzada";
    src:local("Great vibes"), url("ruta_fuente");
}
```