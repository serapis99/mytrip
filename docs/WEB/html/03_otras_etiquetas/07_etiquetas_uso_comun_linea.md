# etiquetas de uso comun en linea

## span

Es un contenedor de linea, equivalente a div, se suele usar para encerrar palabras o pequeños textos y darles estilo a traves de css o localizarlos desde javascript. Semanticamente no significa nada.

```HTML
<p>hola es <span>importate</span> aprender</p>
```
## q
Es equivalente a blockquote, significa quote, por eso el de bloque se llama block-quote. Sirve para poner ciras pero en linea.

```HTML
<q cite="link_donde_viene">yo soy Iron Man</q>
```

## code

Sirve para encerrar código que queremos representar visualmente, suele ir unido con la etiqueta pre. 

en algunos casos donde los simbolos son usados por html debemos usar el codigo [ascii](https://elcodigoascii.com.ar/)
```HTML
<pre>
    <code>
        span{
            color:red
        }

        <!--simbolo de copyright-->
        &copy;
    </code>
</pre>
```

## abbr

nos permite encerrar una palabra que a sido abreviada, se suele usar con el atributo **title** para que aparezca un mensaje cuando se pasa el mouse por encima.

```HTML
<abbr title="Kilometros">Km</abbr>
```

## canvas

nos permite crear un lienzo donde podemos dibujar nace para dejar de usar flash. 

```HTML
<canvas>Tu navegador no soporta canvas</canvas>
```
