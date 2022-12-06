# Etiquetas de uso comun en bloque

## address

Se utiliza para aportar informacion de contacto para el article mas cercano o para todo el body

```HTML
<address>
    Tony Stark<br>
    Malibú 10880<br>
    90265<br>
    california
</address>
```
## blockquote

Se utiliza para marcar las citas a otros autores o documentos. se puede incluir el atributo **cite** para poner un enlace al documento original o fuente.

```HTML
<blockquote cite="direccion cita">
<p>Aprenderás que no importa en cuantos pedazos tu corazón se partió el mundo no se detendrá para que lo arregles. - William Shakespeare</p>
</blockquote>
```

## pre

se utiliza para tener código preformateado que necesita ser representado igual que se escribio
```HTML
<pre>
    vemos tal cual
    escribimos aqui
ya que el formato lo establecemos


que lo queremos tal cual lo escribimos
</pre>
```
## div

se usa como division del documento, semanticamente no significa nada, es un contenedor generico que se usa generalmente.

```HTML
<div>contenedor generico jajaj</div>
```
## hr

horizontal rule, se utiliza para decirle al navegador que vamos a cambiar de tema.

```HTML
Tema 1
.....
.....
<hr>
Tema 2
:::::
:::::
```

## details

esta etiqueta nos permite agrupar datos y desplegarlos o ocultarlos cuando se da click, es como para leer mas de algo no permite 

```HTML
<details>
    <summary>mas detalles</summary>
    <p>aqui se escribe informacion que aumenta la informacion pero que no sea tan relevante para entender el articulo<p>
</details>
```