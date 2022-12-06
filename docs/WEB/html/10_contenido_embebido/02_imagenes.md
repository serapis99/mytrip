# imagenes


## img
con la etiqueta **img** podemos cargar imagenes este tiene dos atributos.

+ src: donde escribiremos la ruta del contenido enbebido.
+ alt: pondremos la descripcion de la imagen para cuando no se pueda cargar la imagen o para accesibilidad.

```HTML
<img src="/ruta/imagen.extencion" alt="esto es una imagen de prueba">
```

### Divece Pixel Ratio (DPR)

es la relacion que existe entre los píxeles reales que tiene el dispositivo y los pixeles que tenemos disponibles para "pintar" contenido

DPR=pixeles reales / pixeles disponibles

teniendo esto presente se debe crear diferentes imagenes con diferentes tamaños para que dependiendo el dispositivo se use una o otra.

### srcset

nos permite cargar diferentes imagenes en un solo atributo, ademas condicionarlo dependiendo el **DPR** ya que podemos decir **1x** para (1 DPR), **2x** para (2 DPR) y asi sucesibamente.

ademas podemos poner varios formatos de imagen por si el navegador no soporta uno colocando el mas liviano de primeras y el siguiente con mas peso.

se debe colocar la etiqueta **src** por si el navegador no soporta el atributo **srcset**

```HTML
<img srcset="
    imagen1 1x,
    imagen2 2x,
    imagen3 3x" 

    src="imagen_default"

    alt="esto es una imagen de prueba">
```

### sizes

tambien podemos indicarle al navegador por medio del atributo **sizes** y usando media query de css el tamaño en el que se aplicara la imagen y debe tener relacion con las imagenes cargadas en el atributo **srcset**

```HTML
<img srcset="
    imagen1 1x,
    imagen2 2x,
    imagen3 3x" 

    sizes="(max-width:320px),
    (max-width:480px)"

    src="imagen_default"

    alt="esto es una imagen de prueba">
```

## picture

Esta etiqueta es mas moderna y funciona igual que **srcset** pero tenemos mas opciones.

```HTML
<picture>
    <!--evalua el que cumple primero-->
    <source srcset="
    imagen1,
    imagen2,
    imagen3" media="(max-width:320px)">
    </source>

    <source srcset="
    imagen1,
    imagen2,
    imagen3" media="(max-width:480px)">
    </source>

    <source srcset="
    imagen1,
    imagen2,
    imagen3">
    </source>
    
    <img set="imagen1, alt="esto es una imagen">
</picture>
```